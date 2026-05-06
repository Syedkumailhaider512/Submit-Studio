"use client";

import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/plans";

export default function ContactSection() {
  return (
    <section id="contact" className="container-px mx-auto max-w-6xl py-28">
      <div className="surface overflow-hidden p-10 text-center sm:p-16">
        <span className="chip mb-6 inline-flex">Contact</span>
        <h2 className="grad-text text-balance text-4xl font-semibold tracking-tightest sm:text-5xl">
          Ready when you are.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm font-light text-muted">
          Reach out directly and get a reply within minutes during working
          hours.
        </p>

        <div className="mx-auto mt-10 grid max-w-2xl gap-px overflow-hidden rounded-2xl border border-bg-hairline bg-bg-hairline/40 sm:grid-cols-2">
          <a
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-4 bg-bg p-6 text-left transition-colors hover:bg-bg-soft"
          >
            <div className="flex items-center gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                <MessageCircle className="h-4 w-4" />
              </span>
              <div>
                <p className="label">WhatsApp</p>
                <p className="num mt-1 text-sm font-medium text-white">
                  {CONTACT.whatsappDisplay}
                </p>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-soft transition-all group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href={CONTACT.emailLink}
            className="group flex items-center justify-between gap-4 bg-bg p-6 text-left transition-colors hover:bg-bg-soft"
          >
            <div className="flex items-center gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                <Mail className="h-4 w-4" />
              </span>
              <div>
                <p className="label">Email</p>
                <p className="mt-1 break-all text-sm font-medium text-white">
                  {CONTACT.email}
                </p>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-soft transition-all group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="btn-primary group w-full sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a href={CONTACT.emailLink} className="btn-secondary w-full sm:w-auto">
            <Mail className="h-4 w-4" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
