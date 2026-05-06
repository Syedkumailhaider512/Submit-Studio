"use client";

import { ArrowUpRight } from "lucide-react";
import { useOrder } from "./OrderContext";

export default function StickyOrderButton() {
  const { openOrder, isOpen } = useOrder();

  if (isOpen) return null;

  return (
    <button
      onClick={() => openOrder()}
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition-all hover:bg-white hover:text-black active:scale-[0.98] sm:bottom-8 sm:right-8"
      aria-label="Order Now"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      Order Now
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </button>
  );
}
