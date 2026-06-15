import { ShieldCheck, PackageCheck, Truck, MapPinned } from "lucide-react";
import { trustBadges } from "@/data/trustBadges";

const icons = [ShieldCheck, PackageCheck, Truck, MapPinned];

export function TrustBadges() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {trustBadges.map((badge, index) => {
        const Icon = icons[index];

        return (
          <div
            key={badge}
            className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--foreground)]">
              <Icon size={18} />
            </div>
            <span className="text-sm font-semibold">{badge}</span>
          </div>
        );
      })}
    </div>
  );
}
