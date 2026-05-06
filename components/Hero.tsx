"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useOrder } from "./OrderContext";

export default function Hero() {
  const { openOrder } = useOrder();

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute inset-0 bg-grad-hero" />

      <div className="container-px relative mx-auto max-w-6xl pt-28 pb-24 sm:pt-36 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          <span className="chip mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(167,139,250,0.8)]" />
            Done by Distinction Holder
            <span className="mx-1 text-muted-soft">·</span>
            <span className="text-emerald-300">Zero AI</span>
            <span className="text-muted-soft">·</span>
            <span className="text-emerald-300">Zero Plagiarism</span>
          </span>

          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tightest sm:text-6xl lg:text-7xl">
            <span className="grad-text">Work done</span>
            <br />
            <span className="accent-text">professionally.</span>
          </h1>

          <p className="mt-7 max-w-xl text-balance text-base font-light leading-relaxed text-muted sm:text-[17px]">
            Assessments, posters, documentation, presentations, and final year
            project support, prepared with quality you can trust.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <button
              onClick={() => openOrder()}
              className="btn-primary group"
            >
              Place Order
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a href="#pricing" className="btn-ghost">
              View Plans
              <span className="text-muted-soft">→</span>
            </a>
          </div>

          <div className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-bg-hairline bg-bg-hairline/40">
            {[
              { k: "50+", v: "Happy customers" },
              { k: "100%", v: "On-time delivery" },
              { k: "∞", v: "Revisions" }
            ].map((s) => (
              <div
                key={s.v}
                className="flex flex-col items-center bg-bg px-4 py-5"
              >
                <span className="num text-2xl font-semibold text-white sm:text-3xl">
                  {s.k}
                </span>
                <span className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-soft">
                  {s.v}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
