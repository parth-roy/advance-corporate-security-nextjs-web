// ============================================================
// ACS — JSON-LD Schema Engine
// Centralised entity graph for Google & AI search engines
// (Perplexity, ChatGPT Search, Google AI Overviews, Gemini)
// B2B Schema types: SecurityService, B2BBusiness, GovernmentPermit
// ============================================================

import { siteConfig } from "./config";

/** Safe JSON-LD serialisation — prevents XSS via </script> injection */
export function serializeJsonLd(obj: object): string {
  return JSON.stringify(obj)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e");
}

/** Root Organisation + Website entity — placed in root layout */
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "SecurityService"],
        "@id": siteConfig.entityId,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        legalName: "Advance Corporate Security",
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/images/acs-official-logo.avif`,
          width: 1313,
          height: 536,
        },
        image: `${siteConfig.url}/images/acs-official-logo.avif`,
        description: siteConfig.description,
        foundingDate: String(siteConfig.foundedYear),
        numberOfEmployees: { "@type": "QuantitativeValue", value: 5000 },
        slogan: "Quality Placement, 24/7",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.streetAddress,
          addressLocality: siteConfig.address.addressLocality,
          addressRegion: siteConfig.address.addressRegion,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.addressCountry,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+91 93399 88999",
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["en", "hi", "bn"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+91 79801 47044",
            contactType: "operations support",
            areaServed: "IN",
            availableLanguage: ["en", "hi", "bn"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+91 94770 06681",
            contactType: "emergency service",
            areaServed: "IN",
            availableLanguage: ["en", "hi", "bn"],
          },
          {
            "@type": "ContactPoint",
            email: siteConfig.email,
            contactType: "sales",
            areaServed: "IN",
          },
        ],
        sameAs: Object.values(siteConfig.social).filter(Boolean),
        // PSARA License — critical for B2G/B2B trust signals
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "PSARA License",
            credentialCategory: "Government License",
            recognizedBy: {
              "@type": "GovernmentOrganization",
              name: "Government of India",
              url: "https://www.india.gov.in",
            },
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "ISO 9001:2015 Certification",
            credentialCategory: "Quality Management Certification",
            recognizedBy: {
              "@type": "Organization",
              name: "International Organization for Standardization",
            },
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Security, Facility Management & Manpower Services",
          itemListElement: siteConfig.services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.name,
              url: `${siteConfig.url}/services/${s.slug}`,
            },
          })),
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        priceRange: "₹₹",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "120",
          bestRating: "5",
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
        image: `${siteConfig.url}/images/acs-official-logo.webp`,
        telephone: siteConfig.phones,
        email: siteConfig.email,
        url: siteConfig.url,
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, Bank Transfer, Cheque, NEFT/RTGS",
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
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
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
export function buildBreadcrumbSchema(crumbs: { name: string; url: string }[]) {
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

/** Service schema — SecurityService / ProfessionalService / EmploymentAgency */
export function buildServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
  cityName?: string;
  schemaType?: string;
}) {
  const url = service.cityName
    ? `${siteConfig.url}/services/${service.slug}/${service.cityName.toLowerCase().replace(/\s+/g, "-")}`
    : `${siteConfig.url}/services/${service.slug}`;

  const type = service.schemaType ?? "ProfessionalService";

  return {
    "@context": "https://schema.org",
    "@type": type === "SecurityService" ? ["SecurityService", "ProfessionalService"] : type,
    name: service.cityName ? `${service.name} in ${service.cityName}` : service.name,
    description: service.description,
    url,
    provider: { "@id": siteConfig.entityId },
    areaServed: service.cityName
      ? { "@type": "City", name: service.cityName }
      : { "@type": "Country", name: "India" },
    // PSARA credential on security services
    ...(type === "SecurityService"
      ? {
          hasCredential: {
            "@type": "GovernmentPermit",
            name: "PSARA License",
            issuedBy: {
              "@type": "GovernmentOrganization",
              name: "Government of India",
            },
          },
        }
      : {}),
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