import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { serviceBySlug } from "@/lib/site";

const service = serviceBySlug.orthodontics;

export const metadata: Metadata = {
  title: "Orthodontics",
  description:
    "Orthodontics at Richardton Dental Clinic in Richardton, North Dakota. Call (701) 974-2118 for the clinic at 200 3rd Ave W.",
  alternates: { canonical: "/orthodontics" },
};

export default function OrthodonticsPage() {
  return <ServicePage service={service} />;
}
