import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { ServiceIcon } from "@/components/service-icon";
import { affiliations, clinic, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dental Services",
  description:
    "Family dentistry, holistic dentistry, orthodontics, and periodontal dentistry at Richardton Dental Clinic in Richardton, North Dakota.",
  alternates: { canonical: "/dental-services" },
};

export default function DentalServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Dental services"
        title={
          <>
            Four areas of care,
            <br />
            under one roof.
          </>
        }
        description="Richardton Dental Clinic offers family dentistry, holistic dentistry, orthodontics, and periodontal dentistry in Richardton, North Dakota."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Dental Services" },
        ]}
        aside={
          <div className="rounded-[1.75rem] border border-line bg-paper p-6 shadow-[var(--shadow-card)]">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-clay">
              The clinic
            </p>
            <p className="mt-3 font-display text-[2rem] leading-tight text-pine">
              Richardton Dental Clinic
            </p>
            <div className="mt-5 space-y-3 border-t border-line pt-5 text-sm text-muted">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-clay" aria-hidden="true" />
                {clinic.address.full}
              </p>
              <p className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-clay" aria-hidden="true" />
                <a href={clinic.phoneHref} className="transition-colors hover:text-clay">
                  {clinic.phone}
                </a>
              </p>
              <p className="flex items-start gap-3">
                <Clock3 className="mt-0.5 size-4 shrink-0 text-clay" aria-hidden="true" />
                <span>
                  Mon – Thu · 7:00 am – 5:00 pm
                  <br />
                  Fri – Sun · Closed
                </span>
              </p>
            </div>
            <Button asChild className="mt-6 w-full">
              <Link href="/contact">
                Contact the clinic
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
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
            <Link href="/patient-info">Patient info</Link>
          </Button>
        </div>
      </PageHero>

      <section className="shell py-16 sm:py-24">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow text-teal">Explore the services</span>
            <h2 className="display mt-5 text-[2.6rem] text-pine sm:text-[3.4rem]">
              Care for every stage, all in Richardton.
            </h2>
            <p className="mt-5 text-[0.98rem] leading-7 text-muted">
              Each service below is offered at Richardton Dental Clinic. Call the
              clinic to ask about the care you need and to make an appointment.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.06}>
              <Link
                href={`/${service.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-line bg-paper p-7 transition-all duration-500 hover:-translate-y-1 hover:border-pine/25 hover:shadow-[0_30px_70px_-40px_rgba(8,36,33,.7)] sm:p-9"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-14 place-items-center rounded-full border border-line bg-cream text-teal transition-colors duration-500 group-hover:border-teal group-hover:bg-teal group-hover:text-cream">
                    <ServiceIcon service={service} className="size-6" />
                  </span>
                  <span className="font-display text-[2.8rem] italic leading-none text-pine/15">
                    {service.index}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-[2rem] leading-none text-pine">
                  {service.name}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
                  {service.summary}
                </p>
                <span className="mt-8 flex items-center gap-2 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-clay">
                  Learn more
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line/70 bg-paper/55">
        <div className="shell grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div>
              <span className="eyebrow text-teal">Good to know</span>
              <h2 className="display mt-5 text-[2.4rem] text-pine sm:text-[3.1rem]">
                Simple, local, and easy to reach.
              </h2>
              <p className="mt-5 max-w-lg text-[0.98rem] leading-7 text-muted">
                The clinic is open Monday through Thursday from 7:00 am to 5:00
                pm. Payment options include cash, check, MasterCard, Visa, and
                CareCredit.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild>
                  <a href={clinic.phoneHref}>
                    <Phone aria-hidden="true" />
                    {clinic.phone}
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/faq">
                    Read the FAQ
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[1.6rem] border border-line bg-cream/60 p-7">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-clay">
                Professional resources
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {affiliations.map((affiliation) => (
                  <div
                    key={affiliation.label}
                    className="grid h-24 place-items-center rounded-xl border border-line bg-white px-3"
                  >
                    <Image
                      src={affiliation.logoSrc}
                      alt={affiliation.logoAlt}
                      width={270}
                      height={165}
                      unoptimized
                      className="h-11 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs leading-6 text-muted">
                IAOMT, ClearCorrect, and CDM are among the clinic&apos;s
                professional resources.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Dental services"
        title="Not sure where to start?"
        description={`Call ${clinic.phone} to ask about family dentistry, holistic dentistry, orthodontics, or periodontal dentistry.`}
      />
    </>
  );
}
