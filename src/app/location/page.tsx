// src/app/location/page.tsx
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { ACS_CITIES, ACS_STATES } from "@/lib/cities";
import LocationDirectoryClient from "@/components/location/LocationDirectoryClient";

export const metadata: Metadata = {
  title: "Pan-India Security & Facility Management Directory (820+ Cities) | ACS",
  description:
    "Explore ACS's pan-India deployment directory covering 820+ cities. Direct PSARA-licensed security operations in West Bengal, Delhi NCR, and Jharkhand; Integrated Facility Management and compliant partner networks nationwide.",
  alternates: { canonical: `${siteConfig.url}/location` },
  openGraph: {
    title: "Pan-India Security & Facility Management Directory (820+ Cities) | ACS",
    description:
      "Direct PSARA security operations in West Bengal, Delhi NCR & Jharkhand, with nationwide facility management & partner deployment across 820+ cities.",
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