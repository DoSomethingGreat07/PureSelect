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
      <h2 className="mt-2 font-[var(--font-heading)] text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-3 text-[0.98rem] leading-7 text-[var(--muted)] sm:text-[1.05rem]">{description}</p> : null}
    </div>
  );
}
