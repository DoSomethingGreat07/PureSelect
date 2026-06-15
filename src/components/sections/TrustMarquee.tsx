const trustItems = [
  "Retail Packs",
  "Bulk Supply",
  "Quick Commerce",
  "Private Label",
  "Telangana Brand",
  "Clean Packaging",
  "Institutional Supply"
];

export function TrustMarquee() {
  const items = [...trustItems, ...trustItems];

  return (
    <section className="full-bleed-section border-y border-[var(--border)] bg-[rgba(255,250,240,0.58)] py-4">
      <div className="overflow-hidden">
        <div className="marquee-track flex min-w-max items-center gap-4">
          {items.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="inline-flex items-center gap-4 rounded-full border border-[var(--border)] bg-white/75 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--earth)]"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
