import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function InfoCard({ icon: Icon, title, description, className }: Readonly<InfoCardProps>) {
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
