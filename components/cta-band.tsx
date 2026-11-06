import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { clinic } from "@/lib/site";

type CtaBandProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function CtaBand({
  eyebrow = "Reach out to us",
  title = "We are here when you need us.",
  description = "Call Richardton Dental Clinic or send a message. Our team will get back in touch with you soon.",
}: CtaBandProps) {
  return (
    <section className="shell py-16 sm:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-pine px-6 py-12 text-cream sm:px-12 sm:py-16 lg:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 82% 18%, rgba(199,154,79,.55), transparent 32%), radial-gradient(circle at 12% 92%, rgba(169,195,181,.35), transparent 38%)",
            }}
          />
          <div className="pointer-events-none absolute -right-20 -top-24 size-[26rem] rounded-full border border-cream/10" />
          <div className="pointer-events-none absolute -bottom-24 right-16 size-[18rem] rounded-full border border-cream/10" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <span className="eyebrow text-gold">{eyebrow}</span>
              <h2 className="display mt-5 max-w-2xl text-[2.5rem] text-cream sm:text-[3.4rem]">
                {title}
              </h2>
              <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-cream/65">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button asChild variant="light" size="lg">
                <a href={clinic.phoneHref}>
                  <Phone aria-hidden="true" />
                  {clinic.phone}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="border border-cream/25 bg-transparent text-cream hover:bg-cream hover:text-pine"
              >
                <Link href="/contact">
                  Send a message
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-cream/15 pt-6 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-cream/55">
            <a
              href={clinic.emailHref}
              className="inline-flex items-center gap-2 transition-colors hover:text-cream"
            >
              <Mail className="size-3.5" aria-hidden="true" />
              {clinic.email}
            </a>
            <span>{clinic.address.full}</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
