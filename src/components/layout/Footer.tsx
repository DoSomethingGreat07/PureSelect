import { navigationItems, siteConfig } from "@/data/siteConfig";
import { formatPhoneHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10 sm:py-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--earth)]">Pure Select</p>
            <h2 className="mt-3 font-[var(--font-heading)] text-4xl">{siteConfig.legalName}</h2>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              Trusted grocery essentials for households, quick commerce shoppers, and business
              buyers across Telangana and beyond.
            </p>
            <p className="mt-5 text-sm font-semibold text-[var(--foreground)]">
              From Telangana Farms to Indian Kitchens.
            </p>
          </div>

          <div>
            <h3 className="font-[var(--font-heading)] text-2xl">Quick links</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted)]">
              {navigationItems.map((item) => (
                <a key={item.href} href={item.href} className="focus-ring w-fit hover:text-[var(--foreground)]">
                  {item.label}
                </a>
              ))}
              <a href="#privacy" className="focus-ring w-fit hover:text-[var(--foreground)]">
                Privacy Policy
              </a>
              <a href="#terms" className="focus-ring w-fit hover:text-[var(--foreground)]">
                Terms & Conditions
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-[var(--font-heading)] text-2xl">Contact</h3>
            <div className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <p>{siteConfig.location}</p>
              <a href={formatPhoneHref(siteConfig.phone)} className="focus-ring block w-fit hover:text-[var(--foreground)]">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="focus-ring block w-fit hover:text-[var(--foreground)]">
                {siteConfig.email}
              </a>
              <a href={siteConfig.website} className="focus-ring block w-fit hover:text-[var(--foreground)]">
                {siteConfig.website.replace(/^https?:\/\//, "")}
              </a>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href={siteConfig.blinkitLink} target="_blank" rel="noreferrer">
                Shop on Blinkit
              </Button>
              <Button href="#enquiry" variant="secondary">
                Bulk Enquiry
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
