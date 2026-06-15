import { ArrowRight, Building2, Factory, Store } from "lucide-react";
import { businessChannels } from "@/data/businessChannels";
import { siteConfig } from "@/data/siteConfig";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const icons = [Store, Building2, Factory];

export function BusinessModelSection() {
  return (
    <section id="business-supply" className="full-bleed-section section-anchor section-spacing section-earth">
      <Container>
        <SectionHeading
          eyebrow="Business Supply"
          title="Serving consumers and businesses through a flexible supply model."
          description="Pure Select serves modern retail consumers and institutional buyers through quick commerce, organized supply, and custom sourcing support."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {businessChannels.map((channel, index) => {
            const Icon = icons[index];
            const href = channel.ctaHref === "#blinkit" ? siteConfig.blinkitLink : channel.ctaHref;

            return (
              <article key={channel.title} className="card-surface group p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_36px_rgba(18,53,36,0.1)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)]">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-[var(--font-heading)] text-3xl">{channel.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{channel.description}</p>
                <ul className="mt-5 space-y-3 text-sm text-[var(--foreground)]">
                  {channel.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  href={href}
                  variant="secondary"
                  target={channel.ctaHref === "#blinkit" ? "_blank" : undefined}
                  rel={channel.ctaHref === "#blinkit" ? "noreferrer" : undefined}
                  className="mt-6 gap-2"
                >
                  {channel.ctaLabel}
                  <ArrowRight size={16} />
                </Button>
                <div className="mt-4 overflow-hidden rounded-[18px] bg-[rgba(18,53,36,0.04)] px-4 py-0 transition-all duration-300 group-hover:py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--earth)]">Best Fit</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--foreground)] opacity-70 transition duration-300 group-hover:opacity-100">
                    {channel.hoverNote}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
