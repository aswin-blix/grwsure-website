import type { MetadataRoute } from "next";
import { blueprints, industries, insights, services, site } from "@/lib/site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-08T00:00:00+05:30");
  const staticRoutes = [
    "",
    "/solutions",
    "/services",
    "/industries",
    "/solution-blueprints",
    "/process",
    "/about",
    "/team",
    "/insights",
    "/faq",
    "/contact",
    "/sitemap",
    "/privacy",
    "/terms",
  ];
  const routes = [
    ...staticRoutes,
    ...services.map((item) => `/services/${item.slug}`),
    ...industries.map((item) => `/industries/${item.slug}`),
    ...blueprints.map((item) => `/solution-blueprints/${item.slug}`),
    ...insights.map((item) => `/insights/${item.slug}`),
  ];
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : route.startsWith("/insights/") ? "monthly" : "monthly",
    priority: route === "" ? 1 : route.split("/").filter(Boolean).length === 1 ? 0.8 : 0.7,
  }));
}
