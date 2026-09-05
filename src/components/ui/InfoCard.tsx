import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  compact?: boolean;
}

export function InfoCard({ icon: Icon, title, description, className, compact = false }: Readonly<InfoCardProps>) {
  if (compact) {
    return (
      <article className={cn("card-surface flex items-center gap-4 p-5", className)}>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--foreground)]">
          <Icon size={22} aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <h3 className="font-[var(--font-heading)] text-2xl">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{description}</p>
        </div>
      </article>
    );
  }

  return (
    <article className={cn("card-surface p-6", className)}>
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--foreground)]">
        <Icon size={22} />
      </div>
      <h3 className="mt-5 font-[var(--font-heading)] text-3xl">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{description}</p>
    </article>
  );
}
