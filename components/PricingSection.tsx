"use client";

import { PLANS } from "@/lib/plans";
import PricingCard from "./PricingCard";

export default function PricingSection() {
  return (
    <section id="pricing" className="container-px mx-auto max-w-6xl py-28">
      <div className="mb-14 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="chip mb-5">Pricing</span>
          <h2 className="grad-text max-w-xl text-balance text-4xl font-semibold tracking-tightest sm:text-5xl">
            Transparent plans, simple math.
          </h2>
        </div>
        <p className="max-w-sm text-sm font-light text-muted">
          Pick a plan, send your brief, and get professionally completed work,
          delivered on time.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PLANS.map((plan, i) => (
          <PricingCard key={plan.id} plan={plan} index={i} />
        ))}
      </div>
    </section>
  );
}
