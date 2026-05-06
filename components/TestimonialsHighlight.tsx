"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/testimonials";

export default function TestimonialsHighlight() {
  const items = TESTIMONIALS.filter((t) => t.highlighted).slice(0, 3);

  return (
    <section className="container-px mx-auto max-w-6xl pt-24">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="chip">Featured</span>
          <span className="hidden text-xs text-muted-soft sm:inline">
            What students are saying
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted">
          <span className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-3 w-3 fill-accent text-accent"
                strokeWidth={0}
              />
            ))}
          </span>
          <span className="num text-white">5.0</span>
          <span className="text-muted-soft">· 50+ reviews</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {items.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="surface relative flex flex-col gap-5 p-6 surface-hover"
          >
            <Quote
              className="absolute right-5 top-5 h-5 w-5 text-white/[0.06]"
              strokeWidth={1.5}
            />

            <div className="flex items-center gap-0.5">
              {Array.from({ length: t.rating }).map((_, k) => (
                <Star
                  key={k}
                  className="h-3.5 w-3.5 fill-accent text-accent"
                  strokeWidth={0}
                />
              ))}
            </div>

            <blockquote className="text-[15px] font-light leading-relaxed text-white/85">
              "{t.text}"
            </blockquote>

            <figcaption className="mt-auto flex items-center gap-3 border-t border-bg-hairline pt-5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-semibold text-white">
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
              <span className="ml-auto rounded-full border border-white/10 bg-white/[0.02] px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-muted">
                {t.plan}
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
