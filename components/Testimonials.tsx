"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/testimonials";

export default function Testimonials() {
  return (
    <section className="container-px mx-auto max-w-6xl py-28">
      <div className="mb-14 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="chip mb-5">Reviews</span>
          <h2 className="grad-text max-w-xl text-balance text-4xl font-semibold tracking-tightest sm:text-5xl">
            Loved by students across the UK.
          </h2>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted">
          <span className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-accent text-accent"
                strokeWidth={0}
              />
            ))}
          </span>
          <span className="num text-white">5.0</span>
          <span className="text-muted-soft">· 50+ reviews</span>
        </div>
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {TESTIMONIALS.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.45,
              delay: (i % 3) * 0.06,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="surface surface-hover mb-4 inline-block w-full break-inside-avoid p-5"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-semibold text-white">
                  {t.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-white">
                    {t.name}
                  </p>
                  <p className="truncate text-[11px] text-muted-soft">
                    {t.role}
                  </p>
                </div>
              </div>
              <span className="flex items-center gap-0.5">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star
                    key={k}
                    className="h-3 w-3 fill-accent text-accent"
                    strokeWidth={0}
                  />
                ))}
              </span>
            </div>

            <p className="text-sm font-light leading-relaxed text-white/80">
              "{t.text}"
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="rounded-full border border-white/10 bg-white/[0.02] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted">
                {t.plan}
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-soft">
                Verified
              </span>
            </div>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
