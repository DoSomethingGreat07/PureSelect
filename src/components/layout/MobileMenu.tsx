"use client";

import { Button } from "@/components/ui/Button";
import { navigationItems, siteConfig } from "@/data/siteConfig";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  activeHref?: string;
}

export function MobileMenu({ open, onClose, activeHref }: Readonly<MobileMenuProps>) {
  if (!open) return null;

  return (
    <div className="card-surface absolute inset-x-0 top-[calc(100%+0.75rem)] p-5 lg:hidden">
      <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
        {navigationItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={`focus-ring rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-white/70 ${
              activeHref === item.href ? "bg-[rgba(18,53,36,0.08)] text-[var(--primary)]" : "text-[var(--foreground)]"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="mt-5 flex flex-col gap-3">
        <Button href={siteConfig.blinkitLink} target="_blank" rel="noreferrer">
          Shop on Blinkit
        </Button>
        <Button href="#enquiry" variant="secondary" onClick={() => onClose()}>
          Bulk Enquiry
        </Button>
      </div>
    </div>
  );
}
