import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  CreditCard,
  Mail,
  MapPin,
  Phone,
  Printer,
} from "lucide-react";
import { clinic, paymentLogos } from "@/lib/site";

type ContactDetailsProps = {
  compact?: boolean;
  className?: string;
};

export function ContactDetails({ compact = false, className }: ContactDetailsProps) {
  return (
    <div className={className}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-line bg-cream/60 p-5">
          <span className="grid size-9 place-items-center rounded-full bg-pine text-cream">
            <MapPin className="size-4" aria-hidden="true" />
          </span>
          <p className="mt-4 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-clay">
            Visit us
          </p>
          <Link
            href={clinic.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block text-[0.95rem] font-semibold leading-6 text-pine underline decoration-line underline-offset-4 transition-colors hover:text-clay"
          >
            {clinic.address.line1}
            <br />
            {clinic.address.city}, {clinic.address.state} {clinic.address.zip}
          </Link>
        </div>

        <div className="rounded-2xl border border-line bg-cream/60 p-5">
          <span className="grid size-9 place-items-center rounded-full bg-pine text-cream">
            <Phone className="size-4" aria-hidden="true" />
          </span>
          <p className="mt-4 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-clay">
            Contact us
          </p>
          <a
            href={clinic.phoneHref}
            className="mt-2 block text-[0.95rem] font-semibold leading-6 text-pine transition-colors hover:text-clay"
          >
            Main phone: {clinic.phone}
          </a>
          <a
            href={clinic.faxHref}
            className="mt-1 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-clay"
          >
            <Printer className="size-3.5" aria-hidden="true" />
            Fax: {clinic.fax}
          </a>
        </div>

        <div className="rounded-2xl border border-line bg-cream/60 p-5">
          <span className="grid size-9 place-items-center rounded-full bg-pine text-cream">
            <Mail className="size-4" aria-hidden="true" />
          </span>
          <p className="mt-4 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-clay">
            Email us
          </p>
          <a
            href={clinic.emailHref}
            className="mt-2 block break-all text-[0.88rem] font-semibold leading-6 text-pine transition-colors hover:text-clay"
          >
            {clinic.email}
          </a>
        </div>

        <div className="rounded-2xl border border-line bg-cream/60 p-5">
          <span className="grid size-9 place-items-center rounded-full bg-pine text-cream">
            <Clock3 className="size-4" aria-hidden="true" />
          </span>
          <p className="mt-4 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-clay">
            Business hours
          </p>
          <dl className="mt-2 space-y-1 text-[0.88rem] text-muted">
            {clinic.hours.map((entry) => (
              <div key={entry.days} className="flex justify-between gap-4">
                <dt className="text-pine">{entry.days}</dt>
                <dd>{entry.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {!compact ? (
        <>
          <p className="mt-4 text-xs leading-5 text-muted">{clinic.holidayNote}</p>

          <div className="mt-7 rounded-2xl border border-line bg-cream/60 p-5">
            <div className="flex items-center gap-3">
              <CreditCard className="size-4 text-clay" aria-hidden="true" />
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-pine">
                Payment options
              </p>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {paymentLogos.map((logo) => (
                <span
                  key={logo.label}
                  className="grid h-9 w-14 place-items-center rounded-lg border border-line bg-white px-2"
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
              <span className="grid h-9 place-items-center rounded-lg border border-line bg-white px-2">
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
            <p className="mt-3 text-xs leading-5 text-muted">
              We accept {clinic.payments.join(", ")}, and CareCredit.
            </p>
          </div>
        </>
      ) : null}

      <Link href="/contact" className="link-arrow mt-7">
        Contact the clinic
        <ArrowUpRight aria-hidden="true" />
      </Link>
    </div>
  );
}
