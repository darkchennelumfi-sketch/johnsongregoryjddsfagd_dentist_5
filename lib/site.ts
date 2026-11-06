export type ServiceSlug =
  | "family-dentistry"
  | "holistic-dentistry"
  | "orthodontics"
  | "periodontal-dentistry";

export type Affiliate = {
  label: string;
  href?: string;
  logoSrc: string;
  logoAlt: string;
};

export type Service = {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  index: string;
  summary: string;
  intro: string;
  detail: string;
  icon: "users" | "leaf" | "smile" | "pulse";
  accent: "teal" | "sage" | "clay" | "gold";
  resource?: Affiliate;
};

export const clinic = {
  name: "Richardton Dental Clinic",
  shortName: "Richardton Dental",
  tagline: "Family dentistry, orthodontics, and periodontal dentistry.",
  address: {
    line1: "200 3rd Ave W",
    city: "Richardton",
    state: "ND",
    zip: "58652",
    country: "US",
    full: "200 3rd Ave W, Richardton, ND 58652",
  },
  phone: "(701) 974-2118",
  phoneHref: "tel:+17019742118",
  fax: "(701) 974-2175",
  faxHref: "tel:+17019742175",
  email: "richardtondental@ndsupernet.com",
  emailHref: "mailto:richardtondental@ndsupernet.com",
  mapsUrl:
    "https://www.google.com/maps?q=200+3rd+Ave+W+Richardton+ND+58652",
  mapQuery: "200 3rd Ave W, Richardton, ND 58652",
  coordinates: { lat: 46.8880342, lng: -102.3167496 },
  rating: 4.8,
  reviewCount: 19,
  hours: [
    { days: "Mon – Thu", time: "7:00 am – 5:00 pm" },
    { days: "Fri – Sun", time: "Closed" },
  ],
  holidayNote:
    "Holiday hours may vary. Please call the clinic ahead of your visit.",
  payments: ["Cash", "Check", "MasterCard", "Visa"],
  financing: {
    label: "CareCredit",
    logoSrc: "/images/carecredit.jpg",
    logoAlt: "CareCredit",
  },
  copyrightYear: 2026,
};

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Dental Services", href: "/dental-services", hasMenu: true },
  { label: "Reviews", href: "/reviews" },
  { label: "About Dr. Johnson", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const supportNav = [
  { label: "Patient Info", href: "/patient-info" },
  { label: "FAQ", href: "/faq" },
];

export const services: Service[] = [
  {
    slug: "family-dentistry",
    name: "Family Dentistry",
    shortName: "Family",
    index: "01",
    summary: "Care for every member of the family, close to home in Richardton.",
    intro:
      "Family dentistry is one of the four service areas at Richardton Dental Clinic.",
    detail:
      "Call Richardton Dental Clinic to ask about family dentistry and to make an appointment for your household.",
    icon: "users",
    accent: "teal",
  },
  {
    slug: "holistic-dentistry",
    name: "Holistic Dentistry",
    shortName: "Holistic",
    index: "02",
    summary: "A considered approach to dentistry, guided by the whole picture.",
    intro:
      "Holistic dentistry is one of the four service areas at Richardton Dental Clinic.",
    detail:
      "Call Richardton Dental Clinic to ask about holistic dentistry and to make an appointment.",
    icon: "leaf",
    accent: "sage",
  },
  {
    slug: "orthodontics",
    name: "Orthodontics",
    shortName: "Orthodontics",
    index: "03",
    summary: "Orthodontic care, with ClearCorrect listed among the clinic's resources.",
    intro:
      "Orthodontics is one of the four service areas at Richardton Dental Clinic.",
    detail:
      "Call Richardton Dental Clinic to ask about orthodontics and to make an appointment.",
    icon: "smile",
    accent: "clay",
  },
  {
    slug: "periodontal-dentistry",
    name: "Periodontal Dentistry",
    shortName: "Periodontal",
    index: "04",
    summary: "Periodontal care for the health of your gums and smile.",
    intro:
      "Periodontal dentistry is one of the four service areas at Richardton Dental Clinic.",
    detail:
      "Call Richardton Dental Clinic to ask about periodontal dentistry and to make an appointment.",
    icon: "pulse",
    accent: "gold",
  },
];

export const affiliations: Affiliate[] = [
  {
    label: "IAOMT",
    href: "https://iaomt.org/",
    logoSrc: "/images/iaomt.jpg",
    logoAlt: "IAOMT",
  },
  {
    label: "ClearCorrect",
    logoSrc: "/images/clearcorrect.jpg",
    logoAlt: "ClearCorrect",
  },
  {
    label: "CDM",
    logoSrc: "/images/cdm.jpg",
    logoAlt: "CDM",
  },
];

export const paymentLogos = [
  { label: "Cash", src: "/images/cash.svg" },
  { label: "Check", src: "/images/check.svg" },
  { label: "MasterCard", src: "/images/mastercard.svg" },
  { label: "Visa", src: "/images/visa.svg" },
];

export const policyLinks = [
  {
    label: "Privacy Policy",
    href: "http://budurl.com/hibuprivacy",
  },
  {
    label: "Conditions of Use",
    href: "http://budurl.com/hibuconditionsofuse",
  },
  {
    label: "Notice and Take Down Policy",
    href: "http://budurl.com/hibunotice",
  },
  {
    label: "Website Accessibility Policy",
    href: "http://b.link/accessibility",
  },
];

export const serviceBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<ServiceSlug, Service>;
