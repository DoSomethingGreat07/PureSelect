import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, FileText, Mail, ShieldCheck } from "lucide-react";

export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  closing?: string;
  link?: { label: string; href: string };
}

interface LegalPageProps {
  title: string;
  eyebrow: string;
  introduction: string;
  description: string;
  sections: LegalSection[];
  contactDescription: string;
  contactEmail: string;
}

export function LegalPage({ title, eyebrow, introduction, description, sections, contactDescription, contactEmail }: Readonly<LegalPageProps>) {
  const Icon = eyebrow === "Privacy" ? ShieldCheck : FileText;
  return (
    <div className="min-h-screen bg-[var(--background-soft)]">
      <a href="#policy-content" className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-[var(--cream)] focus:p-4">
        Skip to {title}
      </a>
      <header className="border-b border-[var(--border)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href="/" className="focus-ring rounded-lg" aria-label="Pure Select home">
            <Image src="/images/logo/pure-select-logo-primary.png" alt="Pure Select" width={132} height={64} className="h-16 w-32 object-contain mix-blend-multiply" />
          </Link>
          <Link href="/" className="focus-ring inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2.5 text-sm font-semibold transition hover:bg-[var(--accent-soft)] sm:px-5">
            <ArrowLeft size={16} aria-hidden="true" /> Back to home
          </Link>
        </div>
      </header>

      <main id="policy-content" className="mx-auto max-w-6xl px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-14">
        <div className="relative overflow-hidden rounded-[28px] bg-[var(--primary)] p-7 text-[var(--cream)] sm:rounded-[36px] sm:p-12">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full border border-[rgba(234,216,175,0.16)]" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 right-10 h-80 w-80 rounded-full border border-[rgba(234,216,175,0.12)]" />
          <div className="relative">
            <div className="mb-6 flex items-center gap-3 text-[var(--accent-soft)]">
              <Icon size={22} aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em]">Pure Select · {eyebrow}</p>
            </div>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-6xl">{title}</h1>
            <p className="mt-5 text-lg text-[var(--cream)]">{introduction}</p>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-[rgba(255,250,240,0.76)] sm:text-base">
              {description}
            </p>
            <p className="mt-7 inline-flex rounded-full border border-[rgba(234,216,175,0.25)] px-4 py-2 text-xs font-medium text-[var(--accent-soft)]">
              Last updated: 5 September 2026
            </p>
          </div>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
          <aside className="lg:sticky lg:top-8">
            <nav aria-label={`${title} sections`} className="rounded-3xl border border-[var(--border)] bg-[var(--background)] p-5">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--earth)]">On this page</p>
              <ol className="space-y-1">
                {[...sections, { id: "contact", title: "Contact" }].map((section, index) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="focus-ring flex gap-3 rounded-xl px-2 py-3 text-sm leading-5 transition hover:bg-[var(--accent-soft)]">
                      <span className="text-[var(--earth)]">{String(index + 1).padStart(2, "0")}</span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="min-w-0 space-y-5">
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-8 rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8">
                <div className="mb-5 flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-xs font-semibold" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 id={`${section.id}-title`} className="pt-0.5 font-[var(--font-heading)] text-2xl leading-tight sm:text-3xl">{section.title}</h2>
                </div>
                <div className="space-y-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets ? (
                    <ul className="list-disc space-y-1 pl-5 marker:text-[var(--accent)]">
                      {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  ) : null}
                  {section.closing ? <p>{section.closing}</p> : null}
                  {section.link ? (
                    <a href={section.link.href} target="_blank" rel="noopener noreferrer" className="focus-ring inline-block rounded text-[var(--foreground)] underline decoration-[var(--accent)] underline-offset-4">
                      {section.link.label}<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : null}
                </div>
              </section>
            ))}

            <section id="contact" aria-labelledby="contact-title" className="scroll-mt-8 rounded-[28px] border border-[var(--border)] bg-[var(--background)] p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-xs font-semibold" aria-hidden="true">{String(sections.length + 1).padStart(2, "0")}</span>
                <h2 id="contact-title" className="font-[var(--font-heading)] text-2xl sm:text-3xl">Contact</h2>
              </div>
              <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">{contactDescription}</p>
              <a href={`mailto:${contactEmail}`} className="focus-ring mt-4 inline-flex max-w-full items-center gap-3 rounded-xl text-sm font-semibold underline decoration-[var(--accent)] underline-offset-4 sm:text-base">
                <Mail size={18} className="shrink-0" aria-hidden="true" /> <span className="min-w-0 break-all">{contactEmail}</span> <ArrowUpRight size={16} className="shrink-0" aria-hidden="true" />
              </a>
            </section>
          </div>
        </div>
      </main>
      <footer className="border-t border-[var(--border)] px-5 py-7 text-center text-xs tracking-wide text-[var(--muted)]">
        Pure Select Enterprises LLP · From Telangana Farms to Indian Kitchens.
      </footer>
    </div>
  );
}
