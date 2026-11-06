import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, MessageSquare, Star } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { Counter } from "@/components/counter";
import { Reveal } from "@/components/reveal";
import { Stars } from "@/components/stars";
import { clinic } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Richardton Dental Clinic has 19 ratings and an average rating of 4.8. Find the clinic at 200 3rd Ave W, Richardton, ND 58652.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title={
          <>
            19 ratings.
            <br />
            A 4.8 average.
          </>
        }
        description="Richardton Dental Clinic has 19 ratings and an average rating of 4.8 out of 5. Find the clinic on Google Maps to see the listing and directions."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Reviews" },
        ]}
        aside={
          <div className="rounded-[1.75rem] border border-line bg-paper p-8 text-center shadow-[var(--shadow-card)]">
            <p className="font-display text-[5.4rem] leading-none text-pine">
              <Counter to={clinic.rating} decimals={1} />
            </p>
            <div className="mt-3 flex justify-center">
              <Stars rating={clinic.rating} size="lg" />
            </div>
            <p className="mt-4 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted">
              {clinic.reviewCount} ratings &amp; reviews
            </p>
            <div className="mt-6 h-px bg-line" />
            <p className="mt-5 text-sm leading-6 text-muted">
              Richardton Dental Clinic
              <br />
              {clinic.address.full}
            </p>
          </div>
        }
      >
        <Button asChild size="lg">
          <Link href={clinic.mapsUrl} target="_blank" rel="noreferrer">
            View on Google Maps
            <ExternalLink aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      <section className="shell py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
          <Reveal>
            <div>
              <span className="eyebrow text-teal">The rating</span>
              <h2 className="display mt-5 max-w-xl text-[2.6rem] text-pine sm:text-[3.5rem]">
                A rating built on patient experiences.
              </h2>
              <div className="prose-site mt-6 max-w-2xl">
                <p>
                  Richardton Dental Clinic has received 19 ratings with an
                  average rating of 4.8 out of 5. You can also view the clinic
                  listing and rating on Google Maps.
                </p>
                <p>
                  For questions about the clinic, services, or appointments,
                  call {clinic.phone} or send a message through the contact form.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="outline">
                  <a href={clinic.phoneHref}>
                    Call the clinic
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/contact">
                    Send a message
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[1.6rem] border border-line bg-paper p-7 shadow-[var(--shadow-card)] sm:p-9">
              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-mint text-pine">
                  <MessageSquare className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-clay">
                    Rating snapshot
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    Richardton Dental Clinic
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-muted">Average rating</span>
                  <span className="flex items-center gap-2 font-display text-[1.25rem] text-pine">
                    {clinic.rating}
                    <Star className="size-4 fill-gold text-gold" aria-hidden="true" />
                  </span>
                </div>
                <div className="h-px bg-line" />
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-muted">Ratings &amp; reviews</span>
                  <span className="font-display text-[1.25rem] text-pine">
                    {clinic.reviewCount}
                  </span>
                </div>
                <div className="h-px bg-line" />
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-muted">Service areas</span>
                  <span className="font-display text-[1.25rem] text-pine">4</span>
                </div>
              </div>

              <Link
                href={clinic.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 flex items-center justify-between rounded-xl bg-pine px-4 py-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-cream transition-colors hover:bg-pine-deep"
              >
                Open Google Maps
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Reviews"
        title="Questions before your visit?"
        description={`Call ${clinic.phone} or send a message to Richardton Dental Clinic.`}
      />
    </>
  );
}
