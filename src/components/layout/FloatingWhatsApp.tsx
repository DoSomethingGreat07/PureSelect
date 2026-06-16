"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="focus-ring fixed bottom-5 right-4 z-[9998] inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/85 bg-[#25D366] text-[#103b28] shadow-[0_22px_40px_rgba(37,211,102,0.34)] transition hover:-translate-y-0.5 hover:bg-[#1fbe59] sm:bottom-6 sm:right-6 sm:h-auto sm:w-auto sm:gap-3 sm:px-4 sm:py-3 sm:text-sm sm:font-semibold"
      aria-label="Chat with Pure Select on WhatsApp"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/26 sm:h-9 sm:w-9">
        <MessageCircle size={18} />
      </span>
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
