// src/app/location/page.tsx
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { ACS_CITIES, ACS_STATES } from "@/lib/cities";
import LocationDirectoryClient from "@/components/location/LocationDirectoryClient";

export const metadata: Metadata = {
  title: "Pan-India Security & Facility Management Directory (828+ Cities) | ACS",
  description:
    "Explore ACS's pan-India deployment directory covering 828+ cities across all 31 Indian States and Union Territories. PSARA-licensed security guards, facility management, and contract workforce.",
  alternates: { canonical: `${siteConfig.url}/location` },
  openGraph: {
    title: "Pan-India Security & Facility Management Directory (828+ Cities) | ACS",
    description:
      "Find PSARA-licensed security and corporate facility management across 828+ Indian cities. 24–72h SLA deployments nationwide.",
    url: `${siteConfig.url}/location`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function LocationHubPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pan-India Directory",
        item: `${siteConfig.url}/location`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LocationDirectoryClient
        allCities={ACS_CITIES}
        allStates={ACS_STATES}
      />
    </>
  );
}