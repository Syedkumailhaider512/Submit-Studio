"use client";

import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  FileText,
  Palette,
  ShieldCheck,
  Sparkles,
  Timer,
  Users
} from "lucide-react";

const ITEMS = [
  { icon: ShieldCheck, label: "Zero AI written content" },
  { icon: Sparkles, label: "Zero plagiarism, original work" },
  { icon: BadgeCheck, label: "Professionally done" },
  { icon: FileText, label: "Complete documentation" },
  { icon: Palette, label: "Professional design" },
  { icon: Timer, label: "On-time delivery" },
  { icon: Award, label: "Distinction Holder" }
];

export default function TrustSection() {
  return (
    <section className="container-px mx-auto max-w-6xl py-28">
      <div className="surface relative overflow-hidden p-10 sm:p-14">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-accent/[0.07] blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-32 h-72 w-72 rounded-full bg-accent-blue/[0.06] blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="chip mb-5">Why us</span>
            <h2 className="grad-text text-balance text-4xl font-semibold tracking-tightest sm:text-5xl">
              Quality you can trust.
            </h2>
            <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-muted">
              Every order is handled personally to ensure professional output,
              with documentation, design, and delivery on time, every time.
            </p>

            <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-bg-hairline bg-white/[0.02] px-5 py-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-accent">
                <Users className="h-4 w-4" />
              </span>
              <div>
                <p className="num text-sm font-semibold text-white">
                  50+ happy customers
                </p>
                <p className="text-xs text-muted-soft">
                  Repeat clients across UK universities
                </p>
              </div>
            </div>
          </div>

          <ul className="space-y-px overflow-hidden rounded-2xl border border-bg-hairline bg-bg-hairline/40">
            {ITEMS.map((item, i) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="flex items-center justify-between bg-bg px-5 py-4 transition-colors hover:bg-bg-soft"
              >
                <span className="flex items-center gap-4">
                  <span className="num text-xs text-muted-soft">
                    0{i + 1}
                  </span>
                  <span className="text-sm font-medium text-white">
                    {item.label}
                  </span>
                </span>
                <item.icon className="h-4 w-4 text-accent/70" />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
