import { navigationItems, siteConfig } from "@/data/siteConfig";
import { formatPhoneHref } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(255,250,240,0.12)] bg-[var(--primary)] py-10 text-[var(--cream)] sm:py-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent-soft)]">Pure Select</p>
            <h2 className="mt-3 font-[var(--font-heading)] text-4xl">{siteConfig.legalName}</h2>
            <p className="mt-4 text-sm leading-6 text-[rgba(255,250,240,0.78)]">
              Trusted grocery essentials for households, quick commerce shoppers, and business
              buyers across Telangana and beyond.
            </p>
            <p className="mt-5 text-sm font-semibold text-[var(--cream)]">
              From Telangana Farms to Indian Kitchens.
            </p>
          </div>

          <div>
            <h3 className="font-[var(--font-heading)] text-2xl">Quick links</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[rgba(255,250,240,0.72)]">
              {navigationItems.map((item) => (
                <a key={item.href} href={item.href} className="focus-ring w-fit hover:text-[var(--cream)]">
                  {item.label}
                </a>
              ))}
              <a href="/privacy" target="_blank" rel="noopener noreferrer" className="focus-ring w-fit hover:text-[var(--cream)]">
                Privacy Policy
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a href="/terms" target="_blank" rel="noopener noreferrer" className="focus-ring w-fit hover:text-[var(--cream)]">
                Terms & Conditions
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-[var(--font-heading)] text-2xl">Contact</h3>
            <div className="mt-4 space-y-2 text-sm text-[rgba(255,250,240,0.72)]">
              <p>{siteConfig.location}</p>
              <a href={formatPhoneHref(siteConfig.phone)} className="focus-ring block w-fit hover:text-[var(--cream)]">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="focus-ring block w-fit hover:text-[var(--cream)]">
                {siteConfig.email}
              </a>
              <a href={siteConfig.website} className="focus-ring block w-fit hover:text-[var(--cream)]">
                {siteConfig.website.replace(/^https?:\/\//, "")}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
