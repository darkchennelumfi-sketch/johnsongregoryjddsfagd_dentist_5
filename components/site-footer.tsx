import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  affiliations,
  clinic,
  mainNav,
  paymentLogos,
  policyLinks,
  services,
  supportNav,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-pine-deep text-cream">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 22%, rgba(169,195,181,.55), transparent 34%), radial-gradient(circle at 82% 10%, rgba(188,96,69,.45), transparent 30%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='420' height='420' viewBox='0 0 420 420' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%23f3eee4' stroke-width='1'%3E%3Cpath d='M-20 90C70 48 112 122 182 110c70-12 86-76 164-58 78 18 96 78 158 66'/%3E%3Cpath d='M-20 150C70 108 112 182 182 170c70-12 86-76 164-58 78 18 96 78 158 66'/%3E%3Cpath d='M-20 210C70 168 112 242 182 230c70-12 86-76 164-58 78 18 96 78 158 66'/%3E%3Cpath d='M-20 270C70 228 112 302 182 290c70-12 86-76 164-58 78 18 96 78 158 66'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="shell relative py-16 sm:py-20">
        <div className="grid gap-12 border-b border-cream/15 pb-14 lg:grid-cols-[1.2fr_.8fr_.8fr_1fr]">
          <div>
            <Logo variant="dark" />
            <p className="mt-6 max-w-xs font-display text-3xl leading-[1.02] text-cream">
              Family dentistry, orthodontics &amp; periodontal care.
            </p>
            <p className="mt-5 max-w-xs text-sm leading-7 text-cream/60">
              Richardton Dental Clinic, serving Richardton, North Dakota and the
              surrounding communities.
            </p>
            <Button asChild variant="light" className="mt-7">
              <Link href="/contact">
                Contact the clinic
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div>
            <h2 className="rule-label text-cream/60">Explore</h2>
            <ul className="mt-5 space-y-3">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="rule-label text-cream/60">Services</h2>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-6 space-y-3 border-t border-cream/10 pt-6">
              {supportNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="rule-label text-cream/60">Visit</h2>
            <div className="mt-5 space-y-4 text-sm text-cream/75">
              <Link
                href={clinic.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 transition-colors hover:text-cream"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  {clinic.address.line1}
                  <br />
                  {clinic.address.city}, {clinic.address.state} {clinic.address.zip}
                </span>
              </Link>
              <a
                href={clinic.phoneHref}
                className="flex items-center gap-3 transition-colors hover:text-cream"
              >
                <Phone className="size-4 shrink-0 text-gold" aria-hidden="true" />
                {clinic.phone}
              </a>
              <a
                href={clinic.emailHref}
                className="flex items-start gap-3 break-all transition-colors hover:text-cream"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                {clinic.email}
              </a>
              <div className="flex gap-3">
                <Clock3 className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <div className="space-y-1">
                  {clinic.hours.map((entry) => (
                    <p key={entry.days}>
                      <span className="text-cream">{entry.days}</span>
                      <span className="text-cream/65"> · {entry.time}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 border-b border-cream/15 py-8 md:grid-cols-2 md:items-center">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rule-label mr-2 text-cream/60">Accepted</span>
            {paymentLogos.map((logo) => (
              <span
                key={logo.label}
                className="grid h-9 w-14 place-items-center rounded-lg bg-cream/95 px-2"
              >
                <Image
                  src={logo.src}
                  alt={logo.label}
                  width={200}
                  height={134}
                  unoptimized
                  className="h-5 w-auto object-contain"
                />
              </span>
            ))}
            <span className="grid h-9 place-items-center rounded-lg bg-cream/95 px-2">
              <Image
                src={clinic.financing.logoSrc}
                alt={clinic.financing.logoAlt}
                width={270}
                height={165}
                unoptimized
                className="h-6 w-auto object-contain"
              />
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-5 md:justify-end">
            <span className="rule-label text-cream/60">Resources</span>
            {affiliations.map((affiliation) =>
              affiliation.href ? (
                <a
                  key={affiliation.label}
                  href={affiliation.href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-16 place-items-center rounded-lg bg-cream/95 px-2"
                >
                  <Image
                    src={affiliation.logoSrc}
                    alt={affiliation.logoAlt}
                    width={270}
                    height={165}
                    unoptimized
                    className="h-6 w-auto object-contain"
                  />
                </a>
              ) : (
                <span
                  key={affiliation.label}
                  className="grid h-10 w-16 place-items-center rounded-lg bg-cream/95 px-2"
                >
                  <Image
                    src={affiliation.logoSrc}
                    alt={affiliation.logoAlt}
                    width={270}
                    height={165}
                    unoptimized
                    className="h-6 w-auto object-contain"
                  />
                </span>
              ),
            )}
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-[0.68rem] leading-5 text-cream/60 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {clinic.copyrightYear} Richardton Dental Clinic. The content on this
            website is owned by us and our licensors.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {policyLinks.map((policy) => (
              <a
                key={policy.href}
                href={policy.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-cream/80"
              >
                {policy.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
