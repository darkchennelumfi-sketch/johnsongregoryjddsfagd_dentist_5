import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { serviceBySlug } from "@/lib/site";

const service = serviceBySlug["family-dentistry"];

export const metadata: Metadata = {
  title: "Family Dentistry",
  description:
    "Family dentistry at Richardton Dental Clinic in Richardton, North Dakota. Call (701) 974-2118 for the clinic at 200 3rd Ave W.",
  alternates: { canonical: "/family-dentistry" },
};

export default function FamilyDentistryPage() {
  return <ServicePage service={service} />;
}
