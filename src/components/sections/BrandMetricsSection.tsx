import { brandMetrics } from "@/data/brandMetrics";
import { Container } from "@/components/ui/Container";

export function BrandMetricsSection() {
  return (
    <section className="full-bleed-section section-spacing section-white">
      <Container>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {brandMetrics.map((metric) => (
            <article key={metric.label} className="card-surface p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--earth)]">{metric.label}</p>
              <h3 className="mt-4 font-[var(--font-heading)] text-4xl leading-none text-[var(--foreground)]">
                {metric.value}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{metric.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
