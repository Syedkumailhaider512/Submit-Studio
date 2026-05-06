import { CONTACT } from "@/lib/plans";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-bg-hairline">
      <div className="container-px mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 py-10 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="relative inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-md border border-white/10 bg-white/5">
            <span className="absolute inset-0 bg-grad-accent opacity-80" />
            <span className="relative text-[10px] font-bold text-white">S</span>
          </span>
          <p className="text-xs text-muted-soft">
            © {year} Submit Studio. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-6 text-xs">
          <a
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-white"
          >
            WhatsApp
          </a>
          <a
            href={CONTACT.emailLink}
            className="text-muted hover:text-white"
          >
            Email
          </a>
          <a href="#pricing" className="text-muted hover:text-white">
            Pricing
          </a>
        </div>
      </div>
    </footer>
  );
}
