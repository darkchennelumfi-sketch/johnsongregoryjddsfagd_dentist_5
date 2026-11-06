import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Printer,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { ContactDetails } from "@/components/contact-details";
import { MapCard } from "@/components/map-card";
import { Reveal } from "@/components/reveal";
import { Stars } from "@/components/stars";
import { affiliations, clinic } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Richardton Dental Clinic at 200 3rd Ave W, Richardton, ND 58652. Call (701) 974-2118, fax (701) 974-2175, or email richardtondental@ndsupernet.com.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Contact
            <br />
            Richardton Dental Clinic.
          </>
        }
        description="Call, email, or send a message. The clinic is open Monday through Thursday from 7:00 am to 5:00 pm and is closed Friday through Sunday."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        aside={
          <div className="rounded-[1.75rem] border border-line bg-paper p-7 shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between gap-4">
              <span className="grid size-12 place-items-center rounded-full bg-mint text-pine">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <Stars rating={clinic.rating} size="sm" />
            </div>
            <p className="mt-6 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-clay">
              Main phone
            </p>
            <a
              href={clinic.phoneHref}
              className="mt-2 block font-display text-[2rem] leading-none text-pine transition-colors hover:text-clay"
            >
              {clinic.phone}
            </a>
            <div className="mt-6 space-y-3 border-t border-line pt-5 text-sm text-muted">
              <p className="flex items-center gap-3">
                <Printer className="size-4 shrink-0 text-clay" aria-hidden="true" />
                Fax: {clinic.fax}
              </p>
              <p className="flex items-start gap-3 break-all">
                <Mail className="mt-0.5 size-4 shrink-0 text-clay" aria-hidden="true" />
                {clinic.email}
              </p>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-clay" aria-hidden="true" />
                {clinic.address.full}
              </p>
            </div>
          </div>
        }
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={clinic.phoneHref}>
              <Phone aria-hidden="true" />
              Call the clinic
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={clinic.mapsUrl} target="_blank" rel="noreferrer">
              Get directions
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="shell py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div>
              <span className="eyebrow text-teal">Reach out to us</span>
              <h2 className="display mt-5 text-[2.7rem] text-pine sm:text-[3.5rem]">
                We&apos;re here to help.
              </h2>
              <p className="mt-5 max-w-lg text-[0.98rem] leading-7 text-muted">
                Please fill out the short form and we&apos;ll contact you
                shortly. You can also call the clinic, send an email, or stop by
                during business hours.
              </p>

              <div className="mt-9">
                <ContactDetails />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[1.75rem] border border-line bg-paper p-6 shadow-[var(--shadow-card)] sm:p-9">
              <div className="flex items-center gap-4 border-b border-line pb-6">
                <span className="grid size-11 place-items-center rounded-full bg-pine text-cream">
                  <Mail className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-clay">
                    Contact form
                  </p>
                  <p className="mt-1 font-display text-[1.35rem] text-pine">
                    Send a message
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line/70 bg-paper/55">
        <div className="shell py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-16">
            <Reveal>
              <div>
                <span className="eyebrow text-teal">Visit us</span>
                <h2 className="display mt-5 text-[2.5rem] text-pine sm:text-[3.2rem]">
                  Find the clinic.
                </h2>
                <p className="mt-5 max-w-md text-[0.98rem] leading-7 text-muted">
                  Richardton Dental Clinic is located at {clinic.address.full}.
                  Use the map for directions, or call ahead with any questions.
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
                <div className="mt-7 flex items-center gap-3 text-sm text-muted">
                  <Clock3 className="size-4 text-clay" aria-hidden="true" />
                  Mon – Thu · 7:00 am – 5:00 pm
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <MapCard />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="shell py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[1.6rem] border border-line bg-paper p-7 sm:p-9">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-clay">
                Payment options
              </p>
              <h2 className="mt-4 font-display text-[2rem] leading-tight text-pine">
                Cash, check, MasterCard, Visa &amp; CareCredit.
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                Richardton Dental Clinic accepts {clinic.payments.join(", ")}, and
                CareCredit. Please call the clinic with any questions about
                payment options.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-[1.6rem] border border-line bg-cream/60 p-7 sm:p-9">
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
    </>
  );
}
