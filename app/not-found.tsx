import Link from "next/link";
import { ArrowUpRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinic } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="contour pointer-events-none absolute -right-52 -top-72 size-[52rem] opacity-80" />
      <div className="shell relative flex min-h-[62vh] flex-col items-start justify-center py-20">
        <span className="eyebrow text-teal">404 · Page not found</span>
        <h1 className="display mt-6 max-w-2xl text-[4rem] text-pine sm:text-[6rem]">
          This page isn&apos;t here.
        </h1>
        <p className="mt-6 max-w-lg text-[1rem] leading-8 text-muted">
          The page you were looking for may have moved. Return home or call
          Richardton Dental Clinic at {clinic.phone}.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/">
              <Home aria-hidden="true" />
              Back home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">
              Contact the clinic
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
