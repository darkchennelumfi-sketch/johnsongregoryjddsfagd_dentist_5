import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Phone,
  Quote,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { Stars } from "@/components/stars";
import { affiliations, clinic, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Dr. Johnson",
  description:
    "About Dr. Johnson and Richardton Dental Clinic in Richardton, North Dakota. Family dentistry, holistic dentistry, orthodontics, and periodontal dentistry.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the practice"
        title={
          <>
            About
            <br />
            Dr. Johnson.
          </>
        }
        description="Richardton Dental Clinic is a family dental practice in Richardton, North Dakota, offering family dentistry, holistic dentistry, orthodontics, and periodontal dentistry."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About Dr. Johnson" },
        ]}
        aside={
          <div className="rounded-[1.75rem] border border-line bg-paper p-7 shadow-[var(--shadow-card)]">
            <Image
              src="/images/hero-clinic.jpg"
              alt="Richardton Dental Clinic"
              width={1920}
              height={1248}
              className="aspect-[4/3] w-full rounded-[1.2rem] object-cover"
              priority
            />
            <div className="mt-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-clay">
                  Richardton Dental Clinic
                </p>
                <p className="mt-2 font-display text-[1.8rem] leading-tight text-pine">
                  Richardton, North Dakota
                </p>
              </div>
              <div className="text-right">
                <p className="font-display text-[1.7rem] leading-none text-pine">
                  {clinic.rating}
                </p>
                <Stars rating={clinic.rating} size="sm" className="mt-1" />
              </div>
            </div>
          </div>
        }
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href={clinic.phoneHref}>
              <Phone aria-hidden="true" />
              {clinic.phone}
            </a>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">
              Contact the clinic
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="shell py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="eyebrow text-teal">The practice</span>
              <h2 className="display mt-5 max-w-2xl text-[2.6rem] text-pine sm:text-[3.4rem]">
                A local clinic with a familiar name.
              </h2>
              <div className="prose-site mt-6 max-w-2xl">
                <p>
                  Dr. Johnson practices at Richardton Dental Clinic in
                  Richardton, North Dakota. The clinic serves Richardton and the
                  surrounding communities with family dentistry, holistic
                  dentistry, orthodontics, and periodontal dentistry.
                </p>
                <p>
                  For more information about Dr. Johnson, the clinic, or the
                  services offered, call {clinic.phone} or send a message through
                  the contact form. The clinic is located at {clinic.address.full}.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 rounded-[1.6rem] border border-line bg-paper p-7 shadow-[var(--shadow-card)] sm:p-9">
                <Quote className="size-7 text-clay" aria-hidden="true" />
                <p className="mt-5 font-display text-[1.75rem] leading-snug text-pine sm:text-[2.1rem]">
                  Family dentistry, orthodontics, and periodontal dentistry in
                  Richardton, North Dakota.
                </p>
                <p className="mt-4 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted">
                  Richardton Dental Clinic
                </p>
              </div>
            </Reveal>

            <div className="mt-14">
              <div className="flex items-end justify-between gap-5 border-b border-line pb-5">
                <h2 className="font-display text-[1.9rem] text-pine">
                  Areas of care
                </h2>
                <Link href="/dental-services" className="link-arrow">
                  All services
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </div>
              <div className="divide-y divide-line">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="group flex items-center justify-between gap-5 py-5"
                  >
                    <span className="flex items-center gap-4">
                      <span className="font-display text-[0.8rem] italic text-clay">
                        {service.index}
                      </span>
                      <span className="font-display text-[1.5rem] text-pine transition-colors group-hover:text-clay">
                        {service.name}
                      </span>
                    </span>
                    <ArrowUpRight className="size-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-5">
            <Reveal delay={0.08}>
              <div className="rounded-[1.5rem] border border-line bg-cream/60 p-6">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-clay">
                  At a glance
                </p>
                <div className="mt-5 space-y-4 text-sm text-muted">
                  <p className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-clay" aria-hidden="true" />
                    <span>
                      {clinic.address.line1}
                      <br />
                      {clinic.address.city}, {clinic.address.state} {clinic.address.zip}
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Clock3 className="mt-0.5 size-4 shrink-0 text-clay" aria-hidden="true" />
                    <span>
                      Mon – Thu · 7:00 am – 5:00 pm
                      <br />
                      Fri – Sun · Closed
                    </span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="size-4 shrink-0 text-clay" aria-hidden="true" />
                    <a
                      href={clinic.phoneHref}
                      className="font-semibold text-pine transition-colors hover:text-clay"
                    >
                      {clinic.phone}
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-[1.5rem] border border-line bg-cream/60 p-6">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-clay">
                  Resources
                </p>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {affiliations.map((affiliation) => (
                    <div
                      key={affiliation.label}
                      className="grid h-20 place-items-center rounded-xl border border-line bg-white px-2"
                    >
                      <Image
                        src={affiliation.logoSrc}
                        alt={affiliation.logoAlt}
                        width={270}
                        height={165}
                        unoptimized
                        className="h-10 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs leading-6 text-muted">
                  These organizations are among the clinic&apos;s professional
                  resources.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="rounded-[1.5rem] border border-pine/10 bg-pine p-6 text-cream">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-gold">
                  New here?
                </p>
                <p className="mt-3 font-display text-[1.6rem] leading-tight">
                  Start with a call.
                </p>
                <p className="mt-3 text-sm leading-6 text-cream/60">
                  Call {clinic.phone} to reach Richardton Dental Clinic.
                </p>
                <Button asChild variant="light" size="sm" className="mt-5">
                  <a href={clinic.phoneHref}>
                    <Phone aria-hidden="true" />
                    Call now
                  </a>
                </Button>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <CtaBand
        eyebrow="About Dr. Johnson"
        title="Get to know the clinic."
        description={`Call ${clinic.phone} or send a message to Richardton Dental Clinic.`}
      />
    </>
  );
}
