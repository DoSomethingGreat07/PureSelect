import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: Readonly<SectionHeadingProps>) {
  return (
    <div className={cn("w-full", align === "center" && "text-center")}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--earth)]">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-[var(--font-heading)] text-4xl leading-tight text-[var(--foreground)] sm:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">{description}</p> : null}
    </div>
  );
}
