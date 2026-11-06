import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { clinic } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Richardton Dental Clinic: location, hours, contact details, services, payments, and directions.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    question: "Where is Richardton Dental Clinic located?",
    answer:
      "Richardton Dental Clinic is located at 200 3rd Ave W, Richardton, ND 58652.",
  },
  {
    question: "What are the clinic's business hours?",
    answer:
      "The clinic is open Monday through Thursday from 7:00 am to 5:00 pm. It is closed Friday through Sunday. Holiday hours may vary, so please call ahead.",
  },
  {
    question: "How can I contact the clinic?",
    answer:
      "Call the main phone at (701) 974-2118. The fax number is (701) 974-2175. You can also email richardtondental@ndsupernet.com or send a message through the contact form.",
  },
  {
    question: "What services are offered?",
    answer:
      "Richardton Dental Clinic offers family dentistry, holistic dentistry, orthodontics, and periodontal dentistry.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "The clinic lists cash, check, MasterCard, Visa, and CareCredit as payment options. Please call the clinic with any questions about payment options.",
  },
  {
    question: "How do I make an appointment?",
    answer:
      "Call Richardton Dental Clinic at (701) 974-2118 to reach the clinic about an appointment.",
  },
  {
    question: "How do I get directions?",
    answer:
      "Use the Get Directions links on this website to open 200 3rd Ave W, Richardton, ND 58652 in Google Maps.",
  },
  {
    question: "Where can I find patient information?",
    answer:
      "The Patient Info page collects the clinic's location, business hours, contact details, services, and payment options in one place.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Questions,
            <br />
            answered.
          </>
        }
        description="Common questions about Richardton Dental Clinic, from location and hours to services and payment options."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
        aside={
          <div className="rounded-[1.75rem] border border-line bg-paper p-7 shadow-[var(--shadow-card)]">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-clay">
              Still wondering?
            </p>
            <p className="mt-3 font-display text-[1.9rem] leading-tight text-pine">
              Call the clinic.
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">
              The team at Richardton Dental Clinic can answer questions about
              services, hours, and your visit.
            </p>
            <Button asChild className="mt-6 w-full">
              <a href={clinic.phoneHref}>
                <Phone aria-hidden="true" />
                {clinic.phone}
              </a>
            </Button>
          </div>
        }
      >
        <Button asChild variant="outline" size="lg">
          <Link href="/contact">
            Contact the clinic
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      <section className="shell py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <span className="eyebrow text-teal">Good to know</span>
              <h2 className="display mt-5 text-[2.5rem] text-pine sm:text-[3.2rem]">
                A few helpful answers.
              </h2>
              <p className="mt-5 max-w-md text-[0.98rem] leading-7 text-muted">
                If your question isn&apos;t answered here, call the clinic at{" "}
                <a
                  href={clinic.phoneHref}
                  className="font-semibold text-pine underline decoration-line underline-offset-4"
                >
                  {clinic.phone}
                </a>
                .
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild variant="outline" size="sm">
                  <Link href="/patient-info">Patient info</Link>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/dental-services">
                    Services
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[1.6rem] border border-line bg-paper px-6 sm:px-8">
              <Accordion type="single" collapsible defaultValue="faq-0">
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`faq-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p>{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="FAQ"
        title="Still have a question?"
        description={`Call ${clinic.phone} or send a message to Richardton Dental Clinic.`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
