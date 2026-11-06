import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { clinic } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.richardtondental.com"),
  title: {
    default:
      "Richardton Dental Clinic | Family, Holistic & Periodontal Dentistry",
    template: "%s | Richardton Dental Clinic",
  },
  description:
    "Call Richardton Dental Clinic for family dentistry, orthodontics, and periodontal dentistry in Richardton, North Dakota. 200 3rd Ave W, Richardton, ND 58652.",
  keywords: [
    "Richardton Dental Clinic",
    "dentist Richardton ND",
    "family dentistry",
    "holistic dentistry",
    "orthodontics",
    "periodontal dentistry",
  ],
  authors: [{ name: "Richardton Dental Clinic" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.richardtondental.com",
    siteName: "Richardton Dental Clinic",
    title: "Richardton Dental Clinic | Richardton, ND",
    description:
      "Family dentistry, orthodontics, and periodontal dentistry in Richardton, North Dakota.",
    images: [
      {
        url: "/images/hero-clinic.jpg",
        width: 1920,
        height: 1248,
        alt: "Richardton Dental Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Richardton Dental Clinic | Richardton, ND",
    description:
      "Family dentistry, orthodontics, and periodontal dentistry in Richardton, North Dakota.",
    images: ["/images/hero-clinic.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#f3eee4",
  colorScheme: "light",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: clinic.name,
  url: "https://www.richardtondental.com",
  telephone: clinic.phone,
  faxNumber: clinic.fax,
  email: clinic.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: clinic.address.line1,
    addressLocality: clinic.address.city,
    addressRegion: clinic.address.state,
    postalCode: clinic.address.zip,
    addressCountry: clinic.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: clinic.coordinates.lat,
    longitude: clinic.coordinates.lng,
  },
  areaServed: "Richardton, North Dakota",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: clinic.rating,
    reviewCount: clinic.reviewCount,
    bestRating: 5,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "07:00",
      closes: "17:00",
    },
  ],
  paymentAccepted: `${clinic.payments.join(", ")}, CareCredit`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="grain">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[200] -translate-y-24 rounded-full bg-pine px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-cream transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
