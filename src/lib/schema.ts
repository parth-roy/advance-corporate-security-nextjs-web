// ============================================================
// ACS — JSON-LD Schema Engine
// Centralised entity graph for Google & AI search engines
// (Perplexity, ChatGPT Search, Google AI Overviews)
// ============================================================

import { siteConfig } from "./config";

/** Safe JSON-LD serialisation — prevents XSS via </script> injection */
export function serializeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c").replace(/>/g, "\\u003e");
}

/** Root Organisation + Website entity — placed in root layout */
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": siteConfig.entityId,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/images/logomew.png`,
          width: 300,
          height: 80,
        },
        description: siteConfig.description,
        foundingDate: String(siteConfig.foundedYear),
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.streetAddress,
          addressLocality: siteConfig.address.addressLocality,
          addressRegion: siteConfig.address.addressRegion,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.addressCountry,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["en", "hi", "bn"],
        },
        sameAs: Object.values(siteConfig.social).filter(Boolean),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Facility Management & Manpower Services",
          itemListElement: siteConfig.services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.name,
              url: `${siteConfig.url}/services/${s.slug}`,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": siteConfig.websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": siteConfig.entityId },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteConfig.url}/?s={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}/#localbusiness`,
        name: siteConfig.name,
        image: `${siteConfig.url}/images/logomew.png`,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        url: siteConfig.url,
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, Bank Transfer, Cheque",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.streetAddress,
          addressLocality: siteConfig.address.addressLocality,
          addressRegion: siteConfig.address.addressRegion,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.geo.lat,
          longitude: siteConfig.geo.lng,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "120",
          bestRating: "5",
        },
      },
    ],
  };
}

/** BreadcrumbList schema */
export function buildBreadcrumbSchema(
  crumbs: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

/** FAQPage schema — only output when FAQs are visible on the page */
export function buildFaqSchema(faqs: ReadonlyArray<{ readonly question: string; readonly answer: string }>) {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** Service-specific schema for individual service pages */
export function buildServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
  cityName?: string;
}) {
  const url = service.cityName
    ? `${siteConfig.url}/services/${service.slug}/${service.cityName
        .toLowerCase()
        .replace(/\s+/g, "-")}`
    : `${siteConfig.url}/services/${service.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.cityName
      ? `${service.name} in ${service.cityName}`
      : service.name,
    description: service.description,
    url,
    provider: { "@id": siteConfig.entityId },
    areaServed: service.cityName
      ? {
          "@type": "City",
          name: service.cityName,
          "@id": `https://www.wikidata.org/wiki/${service.cityName}`,
        }
      : { "@type": "Country", name: "India" },
  };
}

/** WebPage schema for standard pages */
export function buildWebPageSchema({
  title,
  description,
  url,
  dateModified,
}: {
  title: string;
  description: string;
  url: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    url,
    name: title,
    description,
    isPartOf: { "@id": siteConfig.websiteId },
    about: { "@id": siteConfig.entityId },
    dateModified: dateModified ?? new Date().toISOString(),
    inLanguage: "en-IN",
  };
}
