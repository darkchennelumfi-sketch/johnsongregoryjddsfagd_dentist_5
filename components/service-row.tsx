import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServiceIcon } from "@/components/service-icon";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/site";

const accentClasses: Record<Service["accent"], string> = {
  teal: "service-accent-teal",
  sage: "service-accent-sage",
  clay: "service-accent-clay",
  gold: "service-accent-gold",
};

export function ServiceRow({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  return (
    <Link
      href={`/${service.slug}`}
      className={cn(
        "group relative grid gap-5 border-t border-line py-7 transition-colors duration-500 hover:border-transparent sm:grid-cols-[5rem_1fr_auto] sm:items-center sm:gap-8 sm:py-8",
        accentClasses[service.accent],
        className,
      )}
    >
      <span className="pointer-events-none absolute inset-x-[-1rem] inset-y-0 -z-10 rounded-[1.4rem] bg-[linear-gradient(90deg,color-mix(in_srgb,var(--accent)_12%,transparent),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="flex items-center gap-4 sm:block">
        <span className="font-display text-[0.9rem] italic text-clay">
          {service.index}
        </span>
        <ServiceIcon
          service={service}
          className="size-7 text-[var(--accent)] sm:mt-2"
        />
      </span>
      <span>
        <span className="block font-display text-[1.75rem] leading-none text-pine transition-transform duration-500 group-hover:translate-x-1 sm:text-[2.15rem]">
          {service.name}
        </span>
        <span className="mt-2 block max-w-xl text-sm leading-6 text-muted">
          {service.summary}
        </span>
      </span>
      <span className="flex items-center justify-between gap-4 sm:justify-end">
        <span className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-muted">
          Explore
        </span>
        <span className="grid size-11 place-items-center rounded-full border border-line bg-cream text-pine transition-all duration-500 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-cream">
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </span>
    </Link>
  );
}
