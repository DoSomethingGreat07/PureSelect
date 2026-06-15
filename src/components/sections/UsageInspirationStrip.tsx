import { Sparkles } from "lucide-react";
import { usageIdeas } from "@/data/usageIdeas";
import { Container } from "@/components/ui/Container";

export function UsageInspirationStrip() {
  return (
    <section className="full-bleed-section section-spacing pt-0 section-cream">
      <Container>
        <div className="rounded-[30px] border border-[var(--border)] bg-[rgba(255,250,240,0.72)] p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--foreground)]">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--earth)]">Usage Inspiration</p>
              <h2 className="mt-1 font-[var(--font-heading)] text-3xl text-[var(--foreground)]">
                Real kitchen use cases, not just product names.
              </h2>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {usageIdeas.map((idea) => (
              <article key={idea.title} className="rounded-[22px] bg-white/78 p-5 shadow-[0_12px_24px_rgba(18,53,36,0.06)]">
                <h3 className="font-semibold text-[var(--foreground)]">{idea.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{idea.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
