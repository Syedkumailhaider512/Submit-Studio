"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from "react";
import { PLANS, type Plan } from "@/lib/plans";

type OrderContextValue = {
  isOpen: boolean;
  selectedPlan: Plan | null;
  openOrder: (planId?: string) => void;
  closeOrder: () => void;
};

const OrderContext = createContext<OrderContextValue | null>(null);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const openOrder = useCallback((planId?: string) => {
    const plan = planId ? PLANS.find((p) => p.id === planId) ?? null : null;
    setSelectedPlan(plan);
    setIsOpen(true);
  }, []);

  const closeOrder = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({ isOpen, selectedPlan, openOrder, closeOrder }),
    [isOpen, selectedPlan, openOrder, closeOrder]
  );

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
}

export function useOrder() {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder must be used within OrderProvider");
  return ctx;
}
