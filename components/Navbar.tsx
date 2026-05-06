"use client";

import { useEffect, useState } from "react";
import { useOrder } from "./OrderContext";

export default function Navbar() {
  const { openOrder } = useOrder();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 transition-colors ${
        scrolled
          ? "border-b border-bg-hairline bg-bg/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <span className="relative inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/5">
            <span className="absolute inset-0 bg-grad-accent opacity-80" />
            <span className="relative text-[11px] font-bold text-white">S</span>
          </span>
          <span className="text-sm font-medium tracking-tight text-white">
            Submit<span className="text-muted"> Studio</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted sm:flex">
          <a href="#pricing" className="transition-colors hover:text-white">
            Pricing
          </a>
          <a href="#how" className="transition-colors hover:text-white">
            Process
          </a>
          <a href="#faq" className="transition-colors hover:text-white">
            FAQ
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </nav>

        <button
          onClick={() => openOrder()}
          className="btn-primary hidden sm:inline-flex"
        >
          Place Order
        </button>
      </div>
    </header>
  );
}
