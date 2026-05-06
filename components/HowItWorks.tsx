"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Choose a plan",
    desc: "Pick the package that fits your needs from transparent pricing."
  },
  {
    num: "02",
    title: "Send your brief",
    desc: "Share files, requirements, and your deadline. Takes a minute."
  },
  {
    num: "03",
    title: "Get professional work",
    desc: "Receive polished, on-time work, with revisions until you're happy."
  }
];

export default function HowItWorks() {
  return (
    <section id="how" className="container-px mx-auto max-w-6xl py-28">
      <div className="mb-14 max-w-xl">
        <span className="chip mb-5">Process</span>
        <h2 className="grad-text text-balance text-4xl font-semibold tracking-tightest sm:text-5xl">
          Three steps. No friction.
        </h2>
      </div>

      <div className="relative grid gap-px overflow-hidden rounded-2xl border border-bg-hairline bg-bg-hairline/40 sm:grid-cols-3">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative flex flex-col gap-6 bg-bg p-8 transition-colors hover:bg-bg-soft"
          >
            <div className="flex items-baseline justify-between">
              <span className="num text-5xl font-light tracking-tightest text-white/15 transition-colors group-hover:text-accent/30">
                {s.num}
              </span>
              <span className="label">Step</span>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">{s.title}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-muted">
                {s.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
