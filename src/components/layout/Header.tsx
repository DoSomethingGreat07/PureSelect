"use client";

import { useEffect, useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { navigationItems, siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      const sections = navigationItems
        .map((item) => document.querySelector(item.href) as HTMLElement | null)
        .filter((section): section is HTMLElement => section !== null);

      let current = sections[0];
      for (const section of sections) {
        if (scrollTop + 160 >= section.offsetTop) {
          current = section;
        }
      }
      if (current?.id) {
        setActiveHref(`#${current.id}`);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] w-full border-b border-[var(--border)] bg-[rgba(253,249,238,0.95)] shadow-md backdrop-blur-md">
      <div className="absolute inset-x-0 top-0 h-1 bg-[rgba(18,53,36,0.08)]">
        <div
          className="h-full bg-[linear-gradient(90deg,var(--accent),var(--primary))] transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <a
        href={siteConfig.blinkitLink}
        target="_blank"
        rel="noreferrer"
        className="focus-ring flex items-center justify-center gap-3 bg-[#171717] px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-black"
      >
        <Leaf size={16} className="shrink-0 text-white/80" />
        <span className="text-white">We are live in Hyderabad. Order now on Blinkit!</span>
        <Leaf size={16} className="shrink-0 text-white/80" />
      </a>
      <div className="site-gutters flex w-full items-center justify-between py-3">
        {/* Brand Logo */}
        <a
          href="#home"
          className="focus-ring flex min-w-0 shrink-0 flex-col"
        >
          <span className="font-[var(--font-heading)] text-2xl leading-none tracking-[0.02em] text-[var(--foreground)]">
            {siteConfig.brandName}
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:ml-auto lg:flex xl:gap-8">
          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="flex items-center gap-8"
          >
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`focus-ring whitespace-nowrap rounded-full px-2 py-1 text-sm font-semibold transition ${
                  activeHref === item.href
                    ? "bg-[rgba(18,53,36,0.08)] text-[var(--primary)]"
                    : "text-[var(--foreground)] hover:text-[var(--earth)]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="shrink-0 items-center gap-3 lg:flex">
            <Button
              href={siteConfig.blinkitLink}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="text-sm font-semibold tracking-wide"
            >
              Shop on Blinkit
            </Button>

            <Button
              href="#enquiry"
              variant="secondary"
              className="text-sm font-semibold tracking-wide"
            >
              Bulk Enquiry
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-white/70 lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <MobileMenu
        open={isOpen}
        onClose={() => setIsOpen(false)}
        activeHref={activeHref}
      />
    </header>
  );
}
