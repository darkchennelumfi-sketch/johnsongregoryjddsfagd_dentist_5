import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  CreditCard,
  MapPin,
  Phone,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { MapCard } from "@/components/map-card";
import { clinic, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patient Info",
  description:
    "Patient information for Richardton Dental Clinic: location, business hours, contact details, services, and payment options.",
  alternates: { canonical: "/patient-info" },
};

const facts = [
  {
    icon: MapPin,
    label: "Location",
    title: "200 3rd Ave W",
    text: "Richardton, ND 58652",
    href: clinic.mapsUrl,
    linkLabel: "Get directions",
  },
  {
    icon: Clock3,
    label: "Business hours",
    title: "Mon – Thu",
    text: "7:00 am – 5:00 pm · Fri – Sun closed",
  },
  {
    icon: Phone,
    label: "Phone",
    title: clinic.phone,
    text: `Fax: ${clinic.fax}`,
    href: clinic.phoneHref,
    linkLabel: "Call the clinic",
  },
  {
    icon: CreditCard,
    label: "Payments",
    title: "Cash, check, card",
    text: "MasterCard, Visa, and CareCredit",
  },
];

export default function PatientInfoPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient info"
        title={
          <>
            Plan your
            <br />
            visit.
          </>
        }
        description="Everything you need to reach Richardton Dental Clinic: location, hours, contact details, services, and payment options."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Patient Info" },
        ]}
        aside={
          <div className="rounded-[1.75rem] border border-line bg-paper p-7 shadow-[var(--shadow-card)]">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-clay">
              Quick contact
            </p>
            <a
              href={clinic.phoneHref}
              className="mt-4 block font-display text-[2.4rem] leading-none text-pine transition-colors hover:text-clay"
            >
              {clinic.phone}
            </a>
            <p className="mt-3 text-sm leading-6 text-muted">
              {clinic.address.full}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Button asChild size="sm">
                <a href={clinic.phoneHref}>
                  <Phone aria-hidden="true" />
                  Call
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/contact">
                  Message
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        }
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/faq">
              Read the FAQ
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/dental-services">Explore services</Link>
          </Button>
        </div>
      </PageHero>

      <section className="shell py-16 sm:py-24">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow text-teal">At a glance</span>
            <h2 className="display mt-5 text-[2.6rem] text-pine sm:text-[3.4rem]">
              The details, in one place.
            </h2>
            <p className="mt-5 text-[0.98rem] leading-7 text-muted">
              Richardton Dental Clinic is open Monday through Thursday, 7:00 am
              to 5:00 pm. The clinic is closed Friday through Sunday. Holiday
              hours may vary, so please call ahead.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <Reveal key={fact.label} delay={index * 0.05}>
                <div className="flex h-full flex-col rounded-[1.5rem] border border-line bg-paper p-6 sm:p-7">
                  <span className="grid size-11 place-items-center rounded-full bg-mint text-pine">
                    <Icon className="size-4.5" aria-hidden="true" />
                  </span>
                  <p className="mt-5 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-clay">
                    {fact.label}
                  </p>
                  <p className="mt-2 font-display text-[1.55rem] leading-tight text-pine">
                    {fact.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">{fact.text}</p>
                  {fact.href ? (
                    <Link
                      href={fact.href}
                      target={fact.href.startsWith("http") ? "_blank" : undefined}
                      rel={fact.href.startsWith("http") ? "noreferrer" : undefined}
                      className="link-arrow mt-5 text-[0.66rem]"
                    >
                      {fact.linkLabel}
                      <ArrowUpRight aria-hidden="true" />
                    </Link>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-line/70 bg-paper/55">
        <div className="shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal>
            <div>
              <span className="eyebrow text-teal">Getting here</span>
              <h2 className="display mt-5 text-[2.4rem] text-pine sm:text-[3.1rem]">
                A familiar address in Richardton.
              </h2>
              <p className="mt-5 max-w-lg text-[0.98rem] leading-7 text-muted">
                The clinic is located at {clinic.address.full}. Use the map for
                directions, or call the clinic if you need help finding us.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={clinic.mapsUrl} target="_blank" rel="noreferrer">
                    Get directions
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={clinic.phoneHref}>
                    <Phone aria-hidden="true" />
                    {clinic.phone}
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <MapCard />
          </Reveal>
        </div>
      </section>

      <section className="shell py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div>
              <span className="eyebrow text-teal">Services</span>
              <h2 className="display mt-5 text-[2.4rem] text-pine sm:text-[3rem]">
                Four areas of care.
              </h2>
              <p className="mt-5 text-[0.98rem] leading-7 text-muted">
                Richardton Dental Clinic offers family dentistry, holistic
                dentistry, orthodontics, and periodontal dentistry.
              </p>
              <Button asChild variant="outline" className="mt-7">
                <Link href="/dental-services">
                  Explore all services
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[1.5rem] border border-line bg-paper p-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-xl px-5 py-4 transition-colors hover:bg-bone"
                >
                  <span className="flex items-center gap-4">
                    <span className="font-display text-[0.8rem] italic text-clay">
                      {service.index}
                    </span>
                    <span className="font-display text-[1.3rem] text-pine">
                      {service.name}
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Patient info"
        title="Have a question before your visit?"
        description={`Call ${clinic.phone} or send a message to Richardton Dental Clinic.`}
      />
    </>
  );
}
