import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { ServiceIcon } from "@/components/service-icon";
import { ServiceRow } from "@/components/service-row";
import { Stars } from "@/components/stars";
import { affiliations, clinic, services, type Service } from "@/lib/site";

const accentClasses: Record<Service["accent"], string> = {
  teal: "service-accent-teal",
  sage: "service-accent-sage",
  clay: "service-accent-clay",
  gold: "service-accent-gold",
};

const accentBackgrounds: Record<Service["accent"], string> = {
  teal: "bg-[radial-gradient(circle_at_30%_25%,rgba(45,124,114,.28),transparent_60%)]",
  sage: "bg-[radial-gradient(circle_at_30%_25%,rgba(95,143,126,.28),transparent_60%)]",
  clay: "bg-[radial-gradient(circle_at_30%_25%,rgba(188,96,69,.25),transparent_60%)]",
  gold: "bg-[radial-gradient(circle_at_30%_25%,rgba(199,154,79,.3),transparent_60%)]",
};

export function ServicePage({ service }: { service: Service }) {
  const others = services.filter((item) => item.slug !== service.slug);
  const resource = affiliations.find(
    (item) =>
      (service.slug === "holistic-dentistry" && item.label === "IAOMT") ||
      (service.slug === "orthodontics" && item.label === "ClearCorrect"),
  );

  return (
    <>
      <PageHero
        eyebrow={`Service ${service.index} · Dental services`}
        title={service.name}
        description={service.intro}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Dental Services", href: "/dental-services" },
          { label: service.name },
        ]}
        aside={
          <div
            className={`relative overflow-hidden rounded-[1.75rem] border border-line bg-paper p-7 shadow-[var(--shadow-card)] ${accentClasses[service.accent]}`}
          >
            <div
              className={`pointer-events-none absolute inset-0 ${accentBackgrounds[service.accent]}`}
            />
            <div className="relative">
              <div className="flex items-start justify-between">
                <span className="grid size-14 place-items-center rounded-full border border-line bg-cream text-[var(--accent)]">
                  <ServiceIcon service={service} className="size-6" />
                </span>
                <span className="font-display text-[3.6rem] leading-none italic text-[var(--accent)] opacity-20">
                  {service.index}
                </span>
              </div>
              <p className="mt-8 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-clay">
                Richardton Dental Clinic
              </p>
              <p className="mt-2 font-display text-[1.9rem] leading-tight text-pine">
                {service.name}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                {clinic.address.full}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <Stars rating={clinic.rating} size="sm" />
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-muted">
                  {clinic.rating} · {clinic.reviewCount} reviews
                </span>
              </div>
            </div>
          </div>
        }
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href={clinic.phoneHref}>
              <Phone aria-hidden="true" />
              Call {clinic.phone}
            </a>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">
              Send a message
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="shell py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="eyebrow text-teal">At the clinic</span>
              <h2 className="display mt-5 max-w-2xl text-[2.5rem] text-pine sm:text-[3.25rem]">
                {service.name} at Richardton Dental Clinic.
              </h2>
              <div className="prose-site mt-6 max-w-2xl">
                <p>{service.detail}</p>
                <p>
                  Richardton Dental Clinic is located at {clinic.address.full}.
                  Business hours are Monday through Thursday, 7:00 am to 5:00 pm;
                  the clinic is closed Friday through Sunday.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <Reveal delay={0.04}>
                <div className="h-full rounded-2xl border border-line bg-paper p-5">
                  <MapPin className="size-4 text-clay" aria-hidden="true" />
                  <p className="mt-3 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-clay">
                    Address
                  </p>
                  <p className="mt-2 text-sm leading-6 text-pine">
                    200 3rd Ave W
                    <br />
                    Richardton, ND 58652
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="h-full rounded-2xl border border-line bg-paper p-5">
                  <Clock3 className="size-4 text-clay" aria-hidden="true" />
                  <p className="mt-3 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-clay">
                    Hours
                  </p>
                  <p className="mt-2 text-sm leading-6 text-pine">
                    Mon – Thu
                    <br />
                    7:00 am – 5:00 pm
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="h-full rounded-2xl border border-line bg-paper p-5">
                  <Phone className="size-4 text-clay" aria-hidden="true" />
                  <p className="mt-3 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-clay">
                    Phone
                  </p>
                  <a
                    href={clinic.phoneHref}
                    className="mt-2 block text-sm leading-6 text-pine transition-colors hover:text-clay"
                  >
                    {clinic.phone}
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="mt-14">
              <div className="flex items-end justify-between gap-5 border-b border-line pb-5">
                <h2 className="font-display text-[1.9rem] text-pine">
                  Explore related care
                </h2>
                <Link href="/dental-services" className="link-arrow">
                  All services
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </div>
              {others.map((other, index) => (
                <Reveal key={other.slug} delay={index * 0.05}>
                  <ServiceRow service={other} />
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <Reveal delay={0.08}>
              <div className="rounded-[1.5rem] border border-line bg-paper p-6 shadow-[var(--shadow-card)]">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-clay">
                  Talk to the clinic
                </p>
                <h2 className="mt-3 font-display text-[1.8rem] leading-tight text-pine">
                  Questions about {service.name.toLowerCase()}?
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Call or send a message and our team will get back in touch with
                  you soon.
                </p>
                <div className="mt-6 space-y-3 border-t border-line pt-5 text-sm">
                  <a
                    href={clinic.phoneHref}
                    className="flex items-center gap-3 font-semibold text-pine transition-colors hover:text-clay"
                  >
                    <Phone className="size-4 text-clay" aria-hidden="true" />
                    {clinic.phone}
                  </a>
                  <a
                    href={clinic.emailHref}
                    className="flex items-start gap-3 break-all text-muted transition-colors hover:text-clay"
                  >
                    <Mail className="mt-0.5 size-4 shrink-0 text-clay" aria-hidden="true" />
                    {clinic.email}
                  </a>
                  <p className="flex items-start gap-3 text-muted">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-clay" aria-hidden="true" />
                    {clinic.address.full}
                  </p>
                </div>
                <Button asChild className="mt-6 w-full">
                  <Link href="/contact">
                    Contact us
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </Reveal>

            {resource ? (
              <Reveal delay={0.12}>
                <div className="rounded-[1.5rem] border border-line bg-cream/60 p-6">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-clay">
                    Resource
                  </p>
                  <div className="mt-5 grid h-20 place-items-center rounded-xl border border-line bg-white px-6">
                    <Image
                      src={resource.logoSrc}
                      alt={resource.logoAlt}
                      width={270}
                      height={165}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  <p className="mt-4 text-sm leading-6 text-muted">
                    {resource.label} is one of the clinic&apos;s professional
                    resources.
                  </p>
                  {resource.href ? (
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-arrow mt-4 text-[0.68rem]"
                    >
                      Visit resource
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </Reveal>
            ) : null}

            <Reveal delay={0.16}>
              <div className="rounded-[1.5rem] border border-pine/10 bg-pine p-6 text-cream">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-gold">
                  Payments
                </p>
                <p className="mt-3 font-display text-[1.55rem] leading-tight">
                  Cash, check, MasterCard, Visa &amp; CareCredit.
                </p>
                <p className="mt-3 text-sm leading-6 text-cream/60">
                  Please call the clinic with any questions about payment
                  options.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <CtaBand
        eyebrow={`${service.name} · Richardton Dental Clinic`}
        title={`Ask about ${service.name.toLowerCase()}.`}
        description={`Call ${clinic.phone} or send a message to reach Richardton Dental Clinic.`}
      />
    </>
  );
}
