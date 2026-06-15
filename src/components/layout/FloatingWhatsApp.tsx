"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="focus-ring fixed bottom-5 right-4 z-[9998] inline-flex items-center gap-3 rounded-full border-2 border-white/85 bg-[#25D366] px-4 py-3 text-sm font-semibold text-[#103b28] shadow-[0_22px_40px_rgba(37,211,102,0.34)] transition hover:-translate-y-0.5 hover:bg-[#1fbe59] sm:bottom-6 sm:right-6"
      aria-label="Chat with Pure Select on WhatsApp"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/26">
        <MessageCircle size={18} />
      </span>
      <span>WhatsApp Us</span>
    </a>
  );
}
