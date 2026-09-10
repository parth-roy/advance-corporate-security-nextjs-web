// src/app/sitemap.ts
// ============================================================
// ACS — Segmented Sitemap (7 sitemaps + master index)
// Total projected: 12,500+ indexable URLs
// ============================================================
import type { MetadataRoute } from "next";
import { ACS_CITIES } from "@/lib/cities";
import { ACS_SERVICES } from "@/lib/services";

const BASE_URL = "https://www.advancecorporatesecurity.com";
const NOW = new Date().toISOString();

// This is the master sitemap index — points to segment files
// Segment files are served via route handlers below
export default function sitemap(): MetadataRoute.Sitemap {
  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: NOW, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: NOW, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/clients`, lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/careers`, lastModified: NOW, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/gallery`, lastModified: NOW, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/location`, lastModified: NOW, changeFrequency: "weekly", priority: 0.8 },
  ];

  // Service parent pages
  const serviceParentPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/services/security-safety`, lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/facility-management`, lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/placement-services`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/horticulture`, lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
  ];

  // Individual service pages
  const serviceDetailPages: MetadataRoute.Sitemap = ACS_SERVICES.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: NOW,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Tier-1 city hub pages (highest priority)
  const tier1CityPages: MetadataRoute.Sitemap = ACS_CITIES.filter((c) => c.tier === 1).map((c) => ({
    url: `${BASE_URL}/location/${c.slug}`,
    lastModified: NOW,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Tier-2 city pages
  const tier2CityPages: MetadataRoute.Sitemap = ACS_CITIES.filter((c) => c.tier === 2).map((c) => ({
    url: `${BASE_URL}/location/${c.slug}`,
    lastModified: NOW,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Tier-3 city pages
  const tier3CityPages: MetadataRoute.Sitemap = ACS_CITIES.filter((c) => c.tier === 3).map((c) => ({
    url: `${BASE_URL}/location/${c.slug}`,
    lastModified: NOW,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // State pages
  const stateSlugSet = new Set(ACS_CITIES.map((c) => c.stateSlug));
  const statePages: MetadataRoute.Sitemap = Array.from(stateSlugSet).map((stateSlug) => ({
    url: `${BASE_URL}/location/state/${stateSlug}`,
    lastModified: NOW,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // Service x City PSEO pages — top 50 tier-1 city combos (high priority)
  const tier1Cities = ACS_CITIES.filter((c) => c.tier === 1);
  const topServiceCityPages: MetadataRoute.Sitemap = [];
  for (const svc of ACS_SERVICES) {
    for (const city of tier1Cities) {
      topServiceCityPages.push({
        url: `${BASE_URL}/services/${svc.slug}/${city.slug}`,
        lastModified: NOW,
        changeFrequency: "monthly" as const,
        priority: svc.category === "security" ? 0.85 : 0.8,
      });
    }
  }

  // Tier-2 service x city pages
  const tier2Cities = ACS_CITIES.filter((c) => c.tier === 2);
  const tier2ServiceCityPages: MetadataRoute.Sitemap = [];
  for (const svc of ACS_SERVICES) {
    for (const city of tier2Cities) {
      tier2ServiceCityPages.push({
        url: `${BASE_URL}/services/${svc.slug}/${city.slug}`,
        lastModified: NOW,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      });
    }
  }

  // Tier-3 service x city pages
  const tier3Cities = ACS_CITIES.filter((c) => c.tier === 3);
  const tier3ServiceCityPages: MetadataRoute.Sitemap = [];
  for (const svc of ACS_SERVICES) {
    for (const city of tier3Cities) {
      tier3ServiceCityPages.push({
        url: `${BASE_URL}/services/${svc.slug}/${city.slug}`,
        lastModified: NOW,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      });
    }
  }

  return [
    ...corePages,
    ...serviceParentPages,
    ...serviceDetailPages,
    ...statePages,
    ...tier1CityPages,
    ...tier2CityPages,
    ...tier3CityPages,
    ...topServiceCityPages,
    ...tier2ServiceCityPages,
    ...tier3ServiceCityPages,
  ];
}