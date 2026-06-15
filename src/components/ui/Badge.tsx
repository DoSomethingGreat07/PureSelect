import { cn } from "@/lib/utils";

export function Badge({
  children,
  className
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-[var(--border)] bg-white/65 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--earth)]",
        className
      )}
    >
      {children}
    </span>
  );
}
