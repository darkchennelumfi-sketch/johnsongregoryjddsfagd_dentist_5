import type { MetadataRoute } from "next";

const baseUrl = "https://www.richardtondental.com";

const routes = [
  { path: "", priority: 1, changeFrequency: "monthly" as const },
  { path: "/dental-services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/family-dentistry", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/holistic-dentistry", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/orthodontics", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/periodontal-dentistry", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/reviews", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/patient-info", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
