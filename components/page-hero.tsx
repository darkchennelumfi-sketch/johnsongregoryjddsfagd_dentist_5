import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { RevealText } from "@/components/reveal";
import { cn } from "@/lib/utils";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  crumbs?: Crumb[];
  aside?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  aside,
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-line/70 bg-bone",
        className,
      )}
    >
      <div className="contour pointer-events-none absolute -right-40 -top-64 size-[46rem] opacity-70" />
      <div className="contour pointer-events-none absolute -bottom-72 -left-52 size-[38rem] rotate-180 opacity-40" />
      <div className="shell relative grid gap-12 py-14 sm:py-18 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:py-24">
        <div>
          {crumbs ? (
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-muted">
                {crumbs.map((crumb, index) => (
                  <li key={crumb.label} className="flex items-center gap-2">
                    {index > 0 ? (
                      <ChevronRight className="size-3" aria-hidden="true" />
                    ) : null}
                    {crumb.href ? (
                      <Link
                        href={crumb.href}
                        className="transition-colors hover:text-clay"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-clay">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          <RevealText delay={0.05}>
            <span className="eyebrow text-teal">{eyebrow}</span>
            <h1 className="display mt-6 max-w-3xl text-[3.2rem] text-pine sm:text-[4.4rem] lg:text-[5.1rem]">
              {title}
            </h1>
          </RevealText>

          {description ? (
            <RevealText delay={0.18}>
              <p className="mt-7 max-w-2xl text-[1.03rem] leading-8 text-muted">
                {description}
              </p>
            </RevealText>
          ) : null}

          {children ? (
            <RevealText delay={0.28}>
              <div className="mt-8">{children}</div>
            </RevealText>
          ) : null}
        </div>

        {aside ? (
          <div className="relative lg:pb-2">{aside}</div>
        ) : null}
      </div>
    </section>
  );
}
