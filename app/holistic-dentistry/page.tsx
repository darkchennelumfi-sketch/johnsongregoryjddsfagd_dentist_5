import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { serviceBySlug } from "@/lib/site";

const service = serviceBySlug["holistic-dentistry"];

export const metadata: Metadata = {
  title: "Holistic Dentistry",
  description:
    "Holistic dentistry at Richardton Dental Clinic in Richardton, North Dakota. Call (701) 974-2118 for the clinic at 200 3rd Ave W.",
  alternates: { canonical: "/holistic-dentistry" },
};

export default function HolisticDentistryPage() {
  return <ServicePage service={service} />;
}
