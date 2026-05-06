"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { FAQS } from "@/lib/testimonials";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="container-px mx-auto max-w-6xl py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <span className="chip mb-5">FAQ</span>
          <h2 className="grad-text text-balance text-4xl font-semibold tracking-tightest sm:text-5xl">
            Questions, answered.
          </h2>
          <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-muted">
            Anything else? Message us directly on WhatsApp. Replies within
            minutes during working hours.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-bg-hairline">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`border-b border-bg-hairline last:border-b-0 ${
                  isOpen ? "bg-white/[0.02]" : "bg-transparent"
                } transition-colors`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-4">
                    <span className="num text-xs text-muted-soft">
                      0{i + 1}
                    </span>
                    <span className="text-sm font-medium text-white sm:text-base">
                      {item.q}
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-bg-hairline bg-white/[0.02] text-muted group-hover:border-white/20 group-hover:text-white"
                  >
                    <Plus className="h-3.5 w-3.5" strokeWidth={2} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-[3.25rem]">
                        <p className="max-w-xl text-sm font-light leading-relaxed text-muted">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
