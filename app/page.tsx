import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Clock3,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Stars } from "@/components/stars";
import { Counter } from "@/components/counter";
import { Reveal, RevealText } from "@/components/reveal";
import { MarqueeStrip } from "@/components/marquee-strip";
import { SectionHeading } from "@/components/section-heading";
import { ServiceRow } from "@/components/service-row";
import { MapCard } from "@/components/map-card";
import { ContactDetails } from "@/components/contact-details";
import { ContactForm } from "@/components/contact-form";
import { clinic, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Richardton Dental Clinic | Family, Holistic & Periodontal Dentistry",
  description:
    "Call Richardton Dental Clinic for family dentistry, orthodontics, and periodontal dentistry in Richardton, North Dakota. 200 3rd Ave W, Richardton, ND 58652.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="contour pointer-events-none absolute -right-52 -top-72 size-[52rem] opacity-80" />
        <div className="contour pointer-events-none absolute -bottom-80 -left-72 size-[46rem] rotate-180 opacity-35" />

        <div className="shell relative grid gap-14 pb-16 pt-12 sm:pt-16 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
          <div>
            <RevealText delay={0.05}>
              <span className="eyebrow text-teal">
                Richardton, North Dakota
              </span>
            </RevealText>

            <RevealText delay={0.13}>
              <h1 className="display mt-7 text-[3.6rem] text-pine sm:text-[4.9rem] lg:text-[5.55rem]">
                Family dentistry,{" "}
                <span className="display-italic text-clay">orthodontics</span>{" "}
                &amp; periodontal care.
              </h1>
            </RevealText>

            <RevealText delay={0.23}>
              <p className="mt-7 max-w-xl text-[1.02rem] leading-8 text-muted">
                Richardton Dental Clinic welcomes you to{" "}
                <a
                  href={clinic.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-pine underline decoration-line underline-offset-4 transition-colors hover:text-clay"
                >
                  200 3rd Ave W
                </a>{" "}
                in Richardton, North Dakota. Call{" "}
                <a
                  href={clinic.phoneHref}
                  className="font-semibold text-pine underline decoration-line underline-offset-4 transition-colors hover:text-clay"
                >
                  {clinic.phone}
                </a>{" "}
                to reach the clinic.
              </p>
            </RevealText>

            <RevealText delay={0.31}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <a href={clinic.phoneHref}>
                    <Phone aria-hidden="true" />
                    Call the clinic
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/dental-services">
                    Explore services
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </RevealText>

            <RevealText delay={0.4}>
              <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-line/80 pt-6">
                <a
                  href="/reviews"
                  className="flex items-center gap-3 transition-opacity hover:opacity-75"
                >
                  <span className="font-display text-[2rem] leading-none text-pine">
                    {clinic.rating}
                  </span>
                  <span>
                    <Stars rating={clinic.rating} size="sm" />
                    <span className="mt-1 block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-muted">
                      {clinic.reviewCount} ratings &amp; reviews
                    </span>
                  </span>
                </a>
                <span className="hidden h-8 w-px bg-line sm:block" />
                <span className="flex items-center gap-2 text-[0.66rem] font-bold uppercase tracking-[0.15em] text-muted">
                  <Clock3 className="size-3.5 text-clay" aria-hidden="true" />
                  Mon – Thu · 7 am – 5 pm
                </span>
              </div>
            </RevealText>
          </div>

          <Reveal delay={0.18} y={30} className="relative">
            <div className="relative mx-auto w-full max-w-[34rem]">
              <div className="absolute -inset-3 rotate-[-2deg] rounded-t-[13rem] rounded-b-[2rem] border border-pine/10" />
              <div className="arch-frame relative aspect-[4/5] overflow-hidden border border-pine/10 bg-sand shadow-[0_40px_100px_-50px_rgba(8,36,33,.75)] sm:aspect-[5/5.5]">
                <Image
                  src="/images/hero-clinic.jpg"
                  alt="Richardton Dental Clinic in Richardton, North Dakota"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  className="hero-photo object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,36,33,0)_35%,rgba(8,36,33,.38)_100%)]" />
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 rounded-[1.4rem] border border-white/25 bg-pine-deep/45 p-4 text-cream backdrop-blur-md">
                  <div>
                    <p className="text-[0.58rem] font-bold uppercase tracking-[0.2em] text-cream/75">
                      Visit us
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-5">
                      200 3rd Ave W
                      <br />
                      Richardton, ND 58652
                    </p>
                  </div>
                  <Link
                    href={clinic.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Get directions to Richardton Dental Clinic"
                    className="grid size-11 shrink-0 place-items-center rounded-full bg-cream text-pine transition-transform hover:scale-105"
                  >
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="absolute -left-2 top-8 animate-float rounded-2xl border border-line bg-cream/95 px-4 py-3 shadow-[0_20px_50px_-24px_rgba(8,36,33,.55)] backdrop-blur-md sm:-left-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-full bg-mint text-pine">
                    <Sparkles className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-clay">
                      Patient rating
                    </p>
                    <p className="mt-1 flex items-baseline gap-1.5 text-[0.85rem] font-semibold text-pine">
                      <Counter to={clinic.rating} decimals={1} /> out of 5
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 right-3 hidden items-center gap-2 rounded-full border border-line bg-paper px-4 py-2.5 shadow-[0_16px_40px_-24px_rgba(8,36,33,.5)] sm:flex">
                <MapPin className="size-3.5 text-clay" aria-hidden="true" />
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-pine">
                  Richardton, ND
                </span>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-3 bottom-10 hidden size-24 place-items-center rounded-full border border-pine/15 text-center text-[0.5rem] font-bold uppercase leading-4 tracking-[0.18em] text-pine/80 lg:grid">
              <span className="animate-spin-slow" aria-hidden="true">
                Family
                <br />
                Holistic
                <br />
                Ortho
                <br />
                Perio
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <MarqueeStrip />

      <section className="shell py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <span className="eyebrow text-teal">A local practice</span>
              <p className="display-italic mt-6 text-[2.4rem] leading-[1.02] text-pine sm:text-[3rem]">
                Care, close to home.
              </p>
              <div className="mt-7 h-px w-20 bg-clay" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="max-w-2xl">
              <h2 className="display text-[2.4rem] text-pine sm:text-[3.2rem]">
                Dentistry for the whole family, in the heart of Richardton.
              </h2>
              <div className="prose-site mt-7 space-y-4">
                <p>
                  Richardton Dental Clinic is a family dental practice in
                  Richardton, North Dakota. The clinic&apos;s services include
                  family dentistry, holistic dentistry, orthodontics, and
                  periodontal dentistry.
                </p>
                <p>
                  The practice is located at {clinic.address.full}. Business
                  hours are Monday through Thursday, 7:00 am to 5:00 pm. The
                  clinic is closed Friday through Sunday.
                </p>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild variant="outline" size="sm">
                  <Link href="/about">
                    About Dr. Johnson
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/patient-info">
                    Patient info
                    <ArrowDownRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line/70 bg-paper/55">
        <div className="shell py-16 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title={
                <>
                  Four areas of care,
                  <br />
                  one trusted clinic.
                </>
              }
              description="Family dentistry, holistic dentistry, orthodontics, and periodontal dentistry — all in one place in Richardton."
              action={
                <Button asChild variant="outline">
                  <Link href="/dental-services">
                    All services
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </Button>
              }
            />
          </Reveal>
          <div className="mt-12">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.06}>
                <ServiceRow service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-pine text-cream">
        <div className="contour pointer-events-none absolute -right-40 -top-52 size-[42rem] opacity-[0.13]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(169,195,181,.22),transparent_38%),radial-gradient(circle_at_85%_90%,rgba(199,154,79,.18),transparent_36%)]" />

        <div className="shell relative grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-20">
          <Reveal>
            <div>
              <span className="eyebrow text-gold">The clinic</span>
              <h2 className="display mt-6 max-w-xl text-[2.7rem] text-cream sm:text-[3.7rem]">
                A familiar place for care that matters.
              </h2>
              <p className="mt-6 max-w-xl text-[1rem] leading-8 text-cream/65">
                Richardton Dental Clinic serves Richardton and the surrounding
                communities with family dentistry, holistic dentistry,
                orthodontics, and periodontal dentistry. For questions or to
                make an appointment, call the clinic at {clinic.phone}.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-cream/15 bg-cream/5 p-4 backdrop-blur-sm">
                  <p className="font-display text-[2rem] leading-none text-cream">
                    <Counter to={clinic.rating} decimals={1} />
                  </p>
                  <p className="mt-2 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-cream/65">
                    Average rating
                  </p>
                </div>
                <div className="rounded-2xl border border-cream/15 bg-cream/5 p-4 backdrop-blur-sm">
                  <p className="font-display text-[2rem] leading-none text-cream">
                    <Counter to={clinic.reviewCount} />
                  </p>
                  <p className="mt-2 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-cream/65">
                    Reviews
                  </p>
                </div>
                <div className="rounded-2xl border border-cream/15 bg-cream/5 p-4 backdrop-blur-sm">
                  <p className="font-display text-[2rem] leading-none text-cream">
                    4
                  </p>
                  <p className="mt-2 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-cream/65">
                    Service areas
                  </p>
                </div>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild variant="light">
                  <a href={clinic.phoneHref}>
                    <Phone aria-hidden="true" />
                    {clinic.phone}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-cream/25 text-cream hover:bg-cream hover:text-pine"
                >
                  <Link href="/contact">
                    Visit us
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative">
              <div className="absolute -inset-3 rotate-[2deg] rounded-t-[11rem] rounded-b-[2rem] border border-cream/15" />
              <div className="arch-frame relative aspect-[4/5] overflow-hidden border border-cream/15 bg-pine-deep">
                <Image
                  src="/images/hero-clinic.jpg"
                  alt="Richardton Dental Clinic"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover opacity-85 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,36,33,.05)_30%,rgba(8,36,33,.75)_100%)]" />
                <div className="absolute inset-x-6 bottom-6">
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-cream/75">
                    Richardton Dental Clinic
                  </p>
                  <p className="mt-2 font-display text-[1.6rem] leading-tight text-cream">
                    Family dentistry, orthodontics &amp; periodontal care.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Visit us"
                title={
                  <>
                    Find us in
                    <br />
                    Richardton.
                  </>
                }
                description="The clinic is located at 200 3rd Ave W, Richardton, ND 58652. Use the map to get directions, or call ahead with any questions."
              />
              <div className="mt-8">
                <Button asChild>
                  <Link href={clinic.mapsUrl} target="_blank" rel="noreferrer">
                    Get directions
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <MapCard />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 border-t border-line pt-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div>
              <span className="eyebrow text-teal">Contact</span>
              <h2 className="display mt-5 text-[2.5rem] text-pine sm:text-[3.2rem]">
                Reach out to us.
              </h2>
              <p className="mt-4 max-w-md text-[0.98rem] leading-7 text-muted">
                Call, email, or send a message. The clinic is closed Friday
                through Sunday.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactDetails />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-line/70 bg-paper/60">
        <div className="contour pointer-events-none absolute -left-48 top-1/2 size-[36rem] -translate-y-1/2 opacity-40" />
        <div className="shell relative grid gap-12 py-16 sm:py-24 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <span className="eyebrow text-teal">Contact form</span>
              <h2 className="display mt-5 text-[2.6rem] text-pine sm:text-[3.4rem]">
                Send us a message.
              </h2>
              <p className="mt-5 max-w-md text-[0.98rem] leading-7 text-muted">
                Please fill out this short form and we&apos;ll contact you
                shortly. You can also call the clinic directly at{" "}
                <a
                  href={clinic.phoneHref}
                  className="font-semibold text-pine underline decoration-line underline-offset-4"
                >
                  {clinic.phone}
                </a>
                .
              </p>
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-line bg-cream/55 p-4 text-sm text-muted">
                <MapPin className="size-4 shrink-0 text-clay" aria-hidden="true" />
                <span>{clinic.address.full}</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[1.75rem] border border-line bg-paper p-6 shadow-[var(--shadow-card)] sm:p-9">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
