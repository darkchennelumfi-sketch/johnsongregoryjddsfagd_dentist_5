import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { serviceBySlug } from "@/lib/site";

const service = serviceBySlug["periodontal-dentistry"];

export const metadata: Metadata = {
  title: "Periodontal Dentistry",
  description:
    "Periodontal dentistry at Richardton Dental Clinic in Richardton, North Dakota. Call (701) 974-2118 for the clinic at 200 3rd Ave W.",
  alternates: { canonical: "/periodontal-dentistry" },
};

export default function PeriodontalDentistryPage() {
  return <ServicePage service={service} />;
}
