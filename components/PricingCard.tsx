"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Clock, ShieldCheck, Zap } from "lucide-react";
import type { Plan } from "@/lib/plans";
import { useOrder } from "./OrderContext";

export default function PricingCard({
  plan,
  index
}: {
  plan: Plan;
  index: number;
}) {
  const { openOrder } = useOrder();
  const featured = !!plan.highlighted;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`surface relative flex h-full flex-col p-6 ${
        featured
          ? "border-white/[0.18] bg-gradient-to-b from-white/[0.04] to-white/[0.01] shadow-glow"
          : "surface-hover"
      }`}
    >
      {plan.badge && (
        <div className="absolute -top-px left-6 right-6 flex justify-center">
          <span className="-translate-y-1/2 rounded-full border border-white/10 bg-bg px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white">
            <span className="accent-text">★ {plan.badge}</span>
          </span>
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="label">{`0${index + 1}`}</p>
          <h3 className="mt-1 text-[15px] font-medium leading-tight text-white sm:text-base">
            {plan.name}
          </h3>
        </div>
        <span className="shrink-0 whitespace-nowrap rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-accent">
          {plan.discountPct}% Off
        </span>
      </div>

      <div className="mt-7 flex items-end gap-2">
        <span className="num text-5xl font-semibold tracking-tightest text-white">
          £{plan.price}
        </span>
        <span className="num pb-2 text-sm text-muted-soft line-through">
          £{plan.originalPrice}
        </span>
      </div>
      <p className="num mt-1 text-xs text-accent">Save £{plan.save}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {plan.guarantees.map((g) => (
          <span
            key={g}
            className="inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-emerald-300"
          >
            <ShieldCheck className="h-3 w-3" strokeWidth={2.2} />
            {g}
          </span>
        ))}
      </div>

      <div className="hairline my-6" />

      <ul className="space-y-2.5">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm font-light text-white/75"
          >
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={2.5} />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-6 space-y-1.5">
        <p className="label mb-2">Delivery</p>
        {plan.delivery.map((d) => (
          <div
            key={d.id}
            className="flex items-center justify-between text-xs"
          >
            <span className="inline-flex items-center gap-2 text-white/65">
              {d.extra === 0 ? (
                <Clock className="h-3 w-3 text-muted-soft" />
              ) : (
                <Zap className="h-3 w-3 text-accent" />
              )}
              <span className="font-medium">{d.label}</span>
              <span className="text-muted-soft">· {d.duration}</span>
            </span>
            <span className="num text-white/80">
              {d.extra === 0 ? "Free" : `+£${d.extra}`}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-7">
        <button
          onClick={() => openOrder(plan.id)}
          className={
            featured
              ? "btn-primary group w-full"
              : "btn-secondary group w-full"
          }
        >
          Order Now
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </motion.div>
  );
}
