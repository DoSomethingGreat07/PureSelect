import { cn } from "@/lib/utils";

export function Container({
  className,
  children
}: Readonly<{ className?: string; children: React.ReactNode }>) {
  return <div className={cn("site-container", className)}>{children}</div>;
}
