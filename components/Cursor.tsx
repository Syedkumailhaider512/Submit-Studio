"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label, [data-cursor="hover"]';

type Ripple = { id: number; x: number; y: number };

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    if (!finePointer || noMotion) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    // Critically-damped EMA smoothing on rAF for silky-smooth tracking without spring overshoot
    const SMOOTH = 0.22;

    const tick = () => {
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;
      current.current.x += dx * SMOOTH;
      current.current.y += dy * SMOOTH;

      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (hidden) setHidden(false);
    };
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);
    const onDown = (e: MouseEvent) => {
      setPressed(true);
      const id = performance.now();
      setRipples((r) => [...r, { id, x: e.clientX, y: e.clientY }]);
      window.setTimeout(() => {
        setRipples((r) => r.filter((rp) => rp.id !== id));
      }, 700);
    };
    const onUp = () => setPressed(false);
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      setHovering(!!t.closest(INTERACTIVE_SELECTOR));
    };

    // Initialize position to current mouse, if available
    target.current.x = window.innerWidth / 2;
    target.current.y = window.innerHeight / 2;
    current.current.x = target.current.x;
    current.current.y = target.current.y;

    rafId.current = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    document.documentElement.classList.add("cursor-none");

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.classList.remove("cursor-none");
    };
  }, [enabled, hidden]);

  if (!enabled) return null;

  const ringSize = hovering ? 56 : 34;
  const dotSize = hovering ? 4 : 5;
  const ringScale = pressed ? 0.82 : 1;

  return (
    <>
      {/* Click ripples spawn at click position, expand, and fade */}
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            aria-hidden
            initial={{ opacity: 0.55, scale: 0 }}
            animate={{ opacity: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              left: r.x,
              top: r.y,
              width: 90,
              height: 90,
              marginLeft: -45,
              marginTop: -45,
              borderRadius: "9999px",
              border: "1px solid rgba(167, 139, 250, 0.6)",
              background:
                "radial-gradient(circle, rgba(167,139,250,0.18) 0%, rgba(167,139,250,0) 70%)",
              pointerEvents: "none",
              zIndex: 99
            }}
          />
        ))}
      </AnimatePresence>

      {/* Cursor: single rAF-driven wrapper, dot is concentric with ring */}
      <div
        ref={wrapperRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] will-change-transform"
        style={{ opacity: hidden ? 0 : 1, transition: "opacity 200ms ease" }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          {/* Frosted ring */}
          <motion.div
            animate={{
              width: ringSize,
              height: ringSize,
              scale: ringScale,
              borderColor: hovering
                ? "rgba(167, 139, 250, 0.85)"
                : "rgba(255, 255, 255, 0.45)",
              boxShadow: hovering
                ? "0 0 30px -4px rgba(167,139,250,0.5), inset 0 0 12px rgba(167,139,250,0.18)"
                : "0 0 18px -6px rgba(255,255,255,0.25), inset 0 0 8px rgba(255,255,255,0.06)"
            }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{
              backdropFilter: "blur(8px) saturate(140%)",
              WebkitBackdropFilter: "blur(8px) saturate(140%)",
              backgroundColor: hovering
                ? "rgba(167, 139, 250, 0.08)"
                : "rgba(255, 255, 255, 0.04)"
            }}
            className="rounded-full border"
          />

          {/* Dot, absolutely centered */}
          <motion.div
            animate={{ width: dotSize, height: dotSize }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]"
          />
        </div>
      </div>
    </>
  );
}
