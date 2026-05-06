"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import {
  CheckCircle2,
  Clock,
  Mail,
  MessageCircle,
  Paperclip,
  X,
  Zap
} from "lucide-react";
import { CONTACT } from "@/lib/plans";
import { useOrder } from "./OrderContext";

type FormValues = {
  name: string;
  whatsapp: string;
  email: string;
  deadline: string;
  message?: string;
  file?: FileList;
};

export default function OrderModal() {
  const { isOpen, selectedPlan, closeOrder } = useOrder();
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [deliveryId, setDeliveryId] = useState<string>("standard");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>();

  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setSubmitted(false);
        setFileName(null);
        setDeliveryId("standard");
        reset();
      }, 250);
      return () => clearTimeout(t);
    }
  }, [isOpen, reset]);

  useEffect(() => {
    setDeliveryId(selectedPlan?.delivery[0]?.id ?? "standard");
  }, [selectedPlan]);

  const selectedDelivery = useMemo(
    () =>
      selectedPlan?.delivery.find((d) => d.id === deliveryId) ??
      selectedPlan?.delivery[0],
    [selectedPlan, deliveryId]
  );

  const totalPrice = useMemo(() => {
    if (!selectedPlan) return 0;
    return selectedPlan.price + (selectedDelivery?.extra ?? 0);
  }, [selectedPlan, selectedDelivery]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const deadlineField = register("deadline", {
    required: true,
    onBlur: (e) => {
      if (!e.currentTarget.value) {
        e.currentTarget.type = "text";
      }
    }
  });

  const onSubmit = async (data: FormValues) => {
    const planLine = selectedPlan
      ? `Plan: ${selectedPlan.name} (£${selectedPlan.price})`
      : "Plan: Custom";
    const deliveryLine = selectedDelivery
      ? `Delivery: ${selectedDelivery.label}, ${selectedDelivery.duration}${
          selectedDelivery.extra ? ` (+£${selectedDelivery.extra})` : ""
        }`
      : null;
    const totalLine = selectedPlan ? `Total: £${totalPrice}` : null;
    const text = [
      "Hi, I want to place an order.",
      planLine,
      deliveryLine,
      totalLine,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `WhatsApp: ${data.whatsapp}`,
      `Deadline: ${data.deadline}`,
      data.message ? `Notes: ${data.message}` : null
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
        text
      )}`;
      window.open(url, "_blank", "noopener,noreferrer");
    } catch {
      /* no-op */
    }

    await new Promise((r) => setTimeout(r, 400));
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            aria-label="Close"
            onClick={closeOrder}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ y: 32, opacity: 0, scale: 0.985 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 32, opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 m-0 max-h-[92dvh] w-full max-w-lg overflow-y-auto rounded-t-3xl border border-bg-hairline bg-bg-card/95 p-6 backdrop-blur-2xl sm:m-4 sm:max-h-[88dvh] sm:rounded-2xl"
          >
            <div className="mb-6 flex items-start justify-between gap-3">
              <div>
                <p className="label">
                  {submitted ? "Confirmed" : "New Order"}
                </p>
                <h3 className="mt-1.5 text-xl font-medium tracking-tight text-white">
                  {submitted ? "Request received" : "Place your order"}
                </h3>
                {!submitted && (
                  <p className="mt-1 text-sm font-light text-muted">
                    {selectedPlan ? (
                      <>
                        <span className="text-white/90">
                          {selectedPlan.name}
                        </span>
                        {selectedDelivery && (
                          <>
                            {" · "}
                            <span className="num text-white/60">
                              {selectedDelivery.duration}
                            </span>
                          </>
                        )}
                      </>
                    ) : (
                      "Tell us briefly what you need"
                    )}
                  </p>
                )}
              </div>
              <button
                onClick={closeOrder}
                className="rounded-full border border-bg-hairline bg-white/[0.02] p-2 text-muted transition-colors hover:border-white/20 hover:text-white"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center py-6 text-center">
                <div className="relative mb-5 inline-flex h-16 w-16 items-center justify-center">
                  <span className="absolute inset-0 animate-ping rounded-full bg-accent/30" />
                  <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-accent">
                    <CheckCircle2 className="h-7 w-7" strokeWidth={1.5} />
                  </span>
                </div>
                <p className="text-base font-medium text-white">
                  Your order request has been received.
                </p>
                <p className="mt-1.5 text-sm font-light text-muted">
                  We will contact you shortly on WhatsApp or email.
                </p>

                <div className="mt-7 flex w-full flex-col gap-3 sm:flex-row">
                  <a
                    href={CONTACT.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary w-full"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Order on WhatsApp
                  </a>
                  <a
                    href={CONTACT.emailLink}
                    className="btn-secondary w-full"
                  >
                    <Mail className="h-4 w-4" />
                    Email Your Brief
                  </a>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
                noValidate
              >
                {selectedPlan && (
                  <div className="surface p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="label">Delivery Time</p>
                      <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-soft">
                        <Clock className="h-3 w-3" />
                        Pick one
                      </span>
                    </div>

                    <div className="space-y-px overflow-hidden rounded-xl border border-bg-hairline bg-bg-hairline/40">
                      {selectedPlan.delivery.map((opt) => {
                        const checked = opt.id === deliveryId;
                        return (
                          <label
                            key={opt.id}
                            className={`flex cursor-pointer items-center gap-3 px-3.5 py-3 transition-colors ${
                              checked
                                ? "bg-white/[0.04]"
                                : "bg-bg hover:bg-bg-soft"
                            }`}
                          >
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={checked}
                              onChange={() => setDeliveryId(opt.id)}
                            />
                            <span
                              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-all ${
                                checked
                                  ? "border-white bg-white text-black"
                                  : "border-white/20 bg-transparent"
                              }`}
                              aria-hidden
                            >
                              {checked && (
                                <svg
                                  width="10"
                                  height="10"
                                  viewBox="0 0 10 10"
                                  fill="none"
                                >
                                  <path
                                    d="M2 5L4 7L8 3"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                            </span>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-white">
                                  {opt.label}
                                </span>
                                {opt.tag && (
                                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-accent">
                                    <Zap className="h-2.5 w-2.5" />
                                    {opt.tag}
                                  </span>
                                )}
                              </div>
                              <p className="num mt-0.5 text-[11px] text-muted-soft">
                                Delivered in {opt.duration}
                              </p>
                            </div>
                            <span className="num text-sm font-medium text-white">
                              {opt.extra === 0 ? "Free" : `+£${opt.extra}`}
                            </span>
                          </label>
                        );
                      })}
                    </div>

                    <div className="mt-4 space-y-1.5 rounded-xl border border-bg-hairline bg-white/[0.015] p-3.5">
                      <div className="flex items-center justify-between text-xs text-muted">
                        <span>Plan</span>
                        <span className="num text-white/80">
                          £{selectedPlan.price}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted">
                        <span>
                          {selectedDelivery?.label}{" "}
                          <span className="text-muted-soft">
                            · {selectedDelivery?.duration}
                          </span>
                        </span>
                        <span className="num text-white/80">
                          {selectedDelivery?.extra
                            ? `+£${selectedDelivery.extra}`
                            : "£0"}
                        </span>
                      </div>
                      <div className="hairline my-1.5" />
                      <div className="flex items-center justify-between">
                        <span className="label">Total</span>
                        <motion.span
                          key={totalPrice}
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          className="num accent-text text-2xl font-semibold tracking-tightest"
                        >
                          £{totalPrice}
                        </motion.span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  <div>
                    <input
                      placeholder="Your name"
                      className="input"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400/90">
                        Name is required
                      </p>
                    )}
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <input
                        placeholder="WhatsApp number"
                        className="input"
                        {...register("whatsapp", { required: true })}
                      />
                      {errors.whatsapp && (
                        <p className="mt-1 text-xs text-red-400/90">Required</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        className="input"
                        {...register("email", {
                          required: true,
                          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                        })}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400/90">
                          Valid email required
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Deadline"
                      onFocus={(e) => {
                        e.currentTarget.type = "date";
                        e.currentTarget.showPicker?.();
                      }}
                      className="input deadline-input"
                      {...deadlineField}
                    />
                    {errors.deadline && (
                      <p className="mt-1 text-xs text-red-400/90">
                        Deadline is required
                      </p>
                    )}
                  </div>

                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-bg-hairline bg-white/[0.015] px-4 py-3 text-sm text-muted transition-colors hover:border-white/20 hover:text-white">
                    <Paperclip className="h-4 w-4 text-accent" />
                    <span className="flex-1 truncate">
                      {fileName ?? "Upload file or brief (optional)"}
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      {...register("file")}
                      onChange={(e) =>
                        setFileName(e.target.files?.[0]?.name ?? null)
                      }
                    />
                  </label>

                  <textarea
                    rows={3}
                    placeholder="Anything we should know? (optional)"
                    className="input resize-none"
                    {...register("message")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting
                    ? "Sending..."
                    : selectedPlan
                    ? `Submit Order · £${totalPrice}`
                    : "Submit Order Request"}
                </button>

                <div className="flex items-center gap-3 pt-1 text-[10px] uppercase tracking-[0.2em] text-muted-soft">
                  <span className="h-px flex-1 bg-bg-hairline" />
                  Or contact directly
                  <span className="h-px flex-1 bg-bg-hairline" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={CONTACT.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary w-full"
                  >
                    <MessageCircle className="h-4 w-4 text-accent" />
                    WhatsApp
                  </a>
                  <a
                    href={CONTACT.emailLink}
                    className="btn-secondary w-full"
                  >
                    <Mail className="h-4 w-4 text-accent" />
                    Email
                  </a>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
