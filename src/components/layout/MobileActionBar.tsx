"use client";

import { MessageCircle, ShoppingBag, Send } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[9997] border-t border-[var(--border)] bg-[rgba(255,250,240,0.96)] px-3 py-3 shadow-[0_-16px_28px_rgba(18,53,36,0.08)] backdrop-blur sm:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={siteConfig.blinkitLink}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-3 text-xs font-semibold text-[var(--cream)]"
        >
          <ShoppingBag size={15} />
          Blinkit
        </a>
        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-3 text-xs font-semibold text-[#103b28]"
        >
          <MessageCircle size={15} />
          WhatsApp
        </a>
        <a
          href="#enquiry"
          className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-white px-3 text-xs font-semibold text-[var(--primary)]"
        >
          <Send size={15} />
          Enquiry
        </a>
      </div>
    </div>
  );
}
