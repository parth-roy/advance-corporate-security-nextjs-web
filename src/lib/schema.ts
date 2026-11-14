// ============================================================
// ACS — JSON-LD Schema Engine
// Centralised entity graph for Google & AI search engines
// (Perplexity, ChatGPT Search, Google AI Overviews, Gemini)
// B2B Schema types: SecurityService, B2BBusiness, GovernmentPermit
// ============================================================

import { siteConfig } from "./config";
import { getWBMonthlyWage } from "./wb-wages";
import { getMHMonthlyWage, type MHWageZone } from "./mh-wages";
import { getKAMonthlyWage, type KAWageZone } from "./ka-wages";

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
        "@type": ["Organization", "EmploymentAgency", "LocalBusiness", "SecurityService"],
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
        taxID: siteConfig.gstin,
        founder: {
          "@type": "Person",
          name: siteConfig.founder,
          jobTitle: "Founder & Managing Director",
        },
        knowsAbout: [
          "Private Security Agencies (Regulation) Act 2005 (PSARA Form-V)",
          "Contract Labour (Regulation and Abolition) Act 1970 (CLRA)",
          "Employees' Provident Funds Act 1952 (Section 7A Principal Employer Liability Shield)",
          "Employees' State Insurance Act 1948 (ESIC 3.25%)",
          "West Bengal Minimum Wages Act 1948 (Zone A & Zone B Jan/Jul VDA Cycles)",
          "West Bengal Labour Welfare Fund (LWF)",
          "Government e-Marketplace (GeM 4.0) Security & Manpower Procurement Guidelines",
          "Warehouse Loading, Unloading, Hamali & Container Stuffing Contracting",
          "Industrial HT/LT Panel Electricians, DG Operators & MEP Maintenance",
          "Factory, Karkhana & Manufacturing Floor Workforce Supply (Helpers, Welders, CNC Operators)",
          "Commercial Plumbing, STP/WTP Operation & Industrial Pipe Fitting",
          "HVAC, Chiller Plant & Cold Storage Refrigeration Maintenance Staffing",
          "Mechanized Housekeeping, Commercial Cleaning & Corporate Office Support (Peon/Pantry)",
          "Commercial Office Shifting, Warehouse Rack Dismantling & Heavy Machinery Rigging",
          "Grade-A Logistics & Industrial Park Security Protocols",
        ],
        areaServed: [
          { "@type": "AdministrativeArea", name: "West Bengal" },
          { "@type": "AdministrativeArea", name: "Delhi NCR" },
          { "@type": "AdministrativeArea", name: "Jharkhand" },
          { "@type": "AdministrativeArea", name: "Odisha" },
          { "@type": "AdministrativeArea", name: "Assam" },
          { "@type": "City", name: "Kolkata" },
          { "@type": "City", name: "Howrah" },
          { "@type": "City", name: "Dankuni" },
          { "@type": "City", name: "Dhulagarh" },
          { "@type": "City", name: "Durgapur" },
          { "@type": "City", name: "Asansol" },
          { "@type": "City", name: "Haldia" },
          { "@type": "City", name: "Siliguri" },
          { "@type": "City", name: "Kharagpur" },
          { "@type": "City", name: "Barrackpore" },
          { "@type": "City", name: "Kalyani" },
          { "@type": "City", name: "Panagarh" },
          { "@type": "City", name: "Falta" },
          { "@type": "City", name: "Salt Lake Sector V" },
          { "@type": "City", name: "New Town" },
          { "@type": "Country", name: "India" },
        ],
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
        sameAs: (Object.values(siteConfig.social) as unknown as string[]).filter((url: string): boolean => {
          if (!url || typeof url !== "string") return false;
          try {
            const parsed = new URL(url);
            return parsed.protocol === "http:" || parsed.protocol === "https:";
          } catch {
            return false;
          }
        }),
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
          name: "West Bengal & Pan-India B2B Manpower, Technical MEP & Security Solutions",
          itemListElement: [
            {
              "@type": "OfferCatalog",
              name: "Pillar A: Warehouse Loading, Unloading & Material Handling",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Warehouse Loading & Unloading (Hamali) Labour", url: `${siteConfig.url}/services/loading-unloading-labour` } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Warehouse Pickers, Packers & Forklift Support", url: `${siteConfig.url}/services/warehouse-manpower-supply` } },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Pillar B: Industrial & Commercial Technical MEP Trades",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Industrial HT/LT Electricians & DG Operators", url: `${siteConfig.url}/services/industrial-electrician-contractors` } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Plumbers & STP/WTP Plant Operators", url: `${siteConfig.url}/services/commercial-plumbing-contractors` } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "HVAC, Chiller & Cold Storage Refrigeration Techs", url: `${siteConfig.url}/services/hvac-ac-maintenance-staffing` } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carpentry, Shed Painting & Epoxy Civil Crews", url: `${siteConfig.url}/services/carpentry-painting-civil-labour` } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Integrated MEP Facility Maintenance Hub", url: `${siteConfig.url}/services/mep-maintenance` } },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Pillar C: Factory & Karkhana Manufacturing Workforce",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Factory & Karkhana General Helpers, Welders & CNC Staff", url: `${siteConfig.url}/services/industrial-factory-workers` } },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Pillar D: Mechanized Housekeeping, Sanitation & Office Support",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate & Industrial Housekeeping", url: `${siteConfig.url}/services/housekeeping` } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Boy, Peon & Pantry Support Staff", url: `${siteConfig.url}/services/office-support-peon-pantry-staff` } },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Pillar E: Commercial Shifting & Heavy Machinery Rigging",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Shifting, Racking & Heavy Machinery Rigging", url: `${siteConfig.url}/services/commercial-shifting-relocation-labour` } },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Pillar F: PSARA Security, Armed Guards & Event Protection",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "PSARA Licensed Security Guards", url: `${siteConfig.url}/services/security-guard` } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Armed Security & Industrial Perimeter Sentries", url: `${siteConfig.url}/services/armed-guard` } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Event Bouncers & Crowd Marshals", url: `${siteConfig.url}/services/event-security` } },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Pillar G: Statutory Compliance, Third-Party Payroll & Bulk Outsourcing",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bulk Contract Manpower Outsourcing", url: `${siteConfig.url}/services/manpower-outsourcing` } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "CLRA / EPF / ESIC Statutory Payroll Management", url: `${siteConfig.url}/services/payroll-management` } },
              ],
            },
          ],
        },
        priceRange: "₹₹",
      },
      {
        "@type": "WebSite",
        "@id": siteConfig.websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": siteConfig.entityId },
      },
      {
        "@type": ["LocalBusiness", "EmploymentAgency", "SecurityService"],
        "@id": `${siteConfig.url}/#localbusiness`,
        name: siteConfig.name,
        image: `${siteConfig.url}/images/acs-official-logo.avif`,
        telephone: siteConfig.phones,
        email: siteConfig.email,
        url: siteConfig.url,
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, Bank Transfer, Cheque, NEFT/RTGS",
        taxID: siteConfig.gstin,
        foundingDate: "2000",
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
        hasMap: "https://maps.google.com/?cid=advancecorporatesecurity",
        areaServed: [
          { "@type": "AdministrativeArea", name: "West Bengal" },
          { "@type": "AdministrativeArea", name: "Delhi NCR" },
          { "@type": "AdministrativeArea", name: "Jharkhand" },
          { "@type": "Country", name: "India" },
        ],
        knowsLanguage: ["en", "hi", "bn"],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          opens: "00:00",
          closes: "23:59",
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

/**
 * FAQPage schema — only output when FAQs are visible on the page.
 * Sanitized, lightweight, and conditional to avoid spammy markup on programmatic/thin pages
 * following Google's deprecation of FAQ rich results for commercial pages.
 */
export function buildFaqSchema(
  faqs: ReadonlyArray<{ readonly question: string; readonly answer: string }>,
  options?: { maxItems?: number }
) {
  if (!faqs || !faqs.length) return null;

  const maxItems = options?.maxItems ?? 6;
  const cleanFaqs: Array<{ question: string; answer: string }> = [];
  const seenQuestions = new Set<string>();

  for (const faq of faqs) {
    if (!faq?.question || !faq?.answer) continue;
    const q = faq.question.trim().replace(/<[^>]*>/g, "");
    const a = faq.answer.trim().replace(/<[^>]*>/g, "");

    // Avoid empty, trivial, or thin content fragments
    if (q.length < 8 || a.length < 15) continue;

    const normalized = q.toLowerCase();
    if (seenQuestions.has(normalized)) continue;
    seenQuestions.add(normalized);

    cleanFaqs.push({ question: q, answer: a });
    if (cleanFaqs.length >= maxItems) break;
  }

  if (cleanFaqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cleanFaqs.map((faq) => ({
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
  citySlug?: string;
  schemaType?: string;
}) {
  const url = service.citySlug
    ? `${siteConfig.url}/services/${service.slug}/${service.citySlug}`
    : service.cityName
    ? `${siteConfig.url}/services/${service.slug}/${service.cityName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`
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

/** LocalBusiness Schema for Programmatic City Pages — mitigates Scaled Content Abuse by attaching local entity attributes */
export function buildCityLocalBusinessSchema({
  cityName,
  stateName,
  citySlug,
  serviceName,
  serviceSlug,
  lat,
  lng,
}: {
  cityName: string;
  stateName: string;
  citySlug: string;
  serviceName?: string;
  serviceSlug?: string;
  lat?: number;
  lng?: number;
}) {
  const canonicalServiceSlug = serviceSlug
    ? serviceSlug
    : serviceName
    ? serviceName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
    : undefined;
  const pageUrl = canonicalServiceSlug
    ? `${siteConfig.url}/services/${canonicalServiceSlug}/${citySlug}`
    : `${siteConfig.url}/location/${citySlug}`;

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SecurityService"],
    "@id": `${pageUrl}#localbusiness`,
    name: serviceName
      ? `Advance Corporate Security - ${serviceName} in ${cityName}`
      : `Advance Corporate Security - ${cityName} Hub`,
    image: `${siteConfig.url}/images/acs-official-logo.avif`,
    url: pageUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Bank Transfer, Cheque, NEFT/RTGS",
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressRegion: stateName,
      addressCountry: "IN",
    },
    // Only include geo coordinates when verified local coordinates are explicitly provided for this city;
    // never fallback to Barrackpore HQ coordinates to prevent duplicate coordinate spam across programmatic pages.
    ...(typeof lat === "number" && typeof lng === "number" && !isNaN(lat) && !isNaN(lng)
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: lat,
            longitude: lng,
          },
        }
      : {}),
    areaServed: {
      "@type": "City",
      name: cityName,
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: `PSARA License (${stateName} Jurisdiction)`,
        credentialCategory: "Government Security License",
        recognizedBy: {
          "@type": "GovernmentOrganization",
          name: `Controlling Authority, Private Security Agencies, ${stateName}`,
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "ISO 9001:2015 Quality Management System",
        credentialCategory: "Quality Management Certification",
      },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };
}

// ============================================================
// WB-Specific Schema Enhancements
// Service Area Business model (no physical address per city)
// with West Bengal statutory compliance signals
// ============================================================

/**
 * SAB-model LocalBusiness schema for WB city/service pages.
 * Uses areaServed instead of a physical address to accurately represent
 * a service-area business operating across West Bengal.
 * Embeds WB-specific statutory compliance knowsAbout signals for
 * PSARA, Minimum Wages Act Zones, and LWF.
 */
export function buildWBServiceAreaSchema({
  cityName,
  stateName,
  citySlug,
  serviceName,
  serviceSlug,
  wageZone,
}: {
  cityName: string;
  stateName: string;
  citySlug: string;
  serviceName?: string;
  serviceSlug?: string;
  wageZone?: 'A' | 'B';
}) {
  const canonicalServiceSlug = serviceSlug || serviceName?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const pageUrl = canonicalServiceSlug
    ? `${siteConfig.url}/services/${canonicalServiceSlug}/${citySlug}`
    : `${siteConfig.url}/location/${citySlug}`;

  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'EmploymentAgency', 'SecurityService'],
    '@id': `${pageUrl}#servicearea`,
    name: serviceName
      ? `Advance Corporate Security — ${serviceName} in ${cityName}`
      : `Advance Corporate Security — ${cityName} Service Hub`,
    url: pageUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: '₹₹',
    // No physical address — we use ServiceArea instead (SAB model)
    areaServed: {
      '@type': 'City',
      name: cityName,
      containedInPlace: {
        '@type': 'State',
        name: stateName,
        containedInPlace: {
          '@type': 'Country',
          name: 'India',
        },
      },
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cityName + ', West Bengal, India')}`,
    knowsAbout: [
      'PSARA License West Bengal Jurisdiction',
      `West Bengal Minimum Wages Act Zone ${wageZone || 'A'} Compliance`,
      'West Bengal Labour Welfare Fund (LWF) Statutory Compliance',
      'Contract Labour (Regulation & Abolition) Act 1970',
      'Warehouse Loading, Unloading, Hamali & Mutia Contracting West Bengal',
      'Karkhana Helper, ITI Welder & Factory Manufacturing Contract Staffing',
      'Industrial Electrician, Plumber, HVAC & Chiller Maintenance Manpower',
      'ESIC (3.25%) & EPF (13.00%) Statutory Deposit Management',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'PSARA License — West Bengal Jurisdiction',
        credentialCategory: 'Government Security Regulatory License',
        recognizedBy: {
          '@type': 'GovernmentOrganization',
          name: 'Controlling Authority, Private Security Agencies, West Bengal',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'ISO 9001:2015 Quality Management System',
        credentialCategory: 'Quality Management Certification',
      },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  };
}

/**
 * ItemList schema representing ACS deployment corridors near a city.
 * Each hub is a Place with GeoCoordinates for rich geospatial signals.
 */
export function buildWBIndustrialHubSchema(
  hubs: { name: string; type: string; district: string; lat: number; lng: number }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'ACS West Bengal Industrial Deployment Corridors',
    description:
      'Key industrial hubs and commercial corridors served by Advance Corporate Security in West Bengal',
    itemListElement: hubs.map((hub, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Place',
        name: hub.name,
        description: `${hub.type} — ${hub.district} District, West Bengal`,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: hub.lat,
          longitude: hub.lng,
        },
        containedInPlace: {
          '@type': 'State',
          name: 'West Bengal',
        },
      },
    })),
  };
}

// ============================================================
// MH-Specific Schema Enhancements
// Service Area Business model with Maharashtra statutory compliance signals
// ============================================================

/**
 * SAB-model LocalBusiness schema for Maharashtra city/service pages.
 */
export function buildMHServiceAreaSchema({
  cityName,
  stateName,
  citySlug,
  serviceName,
  serviceSlug,
  wageZone,
}: {
  cityName: string;
  stateName: string;
  citySlug: string;
  serviceName?: string;
  serviceSlug?: string;
  wageZone?: 'I' | 'II' | 'III';
}) {
  const canonicalServiceSlug = serviceSlug || serviceName?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const pageUrl = canonicalServiceSlug
    ? `${siteConfig.url}/services/${canonicalServiceSlug}/${citySlug}`
    : `${siteConfig.url}/location/${citySlug}`;

  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'EmploymentAgency', 'SecurityService'],
    '@id': `${pageUrl}#servicearea`,
    name: serviceName
      ? `Advance Corporate Security — ${serviceName} in ${cityName}`
      : `Advance Corporate Security — ${cityName} Service Hub`,
    url: pageUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: '₹₹',
    areaServed: {
      '@type': 'City',
      name: cityName,
      containedInPlace: {
        '@type': 'State',
        name: stateName,
        containedInPlace: {
          '@type': 'Country',
          name: 'India',
        },
      },
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cityName + ', Maharashtra, India')}`,
    knowsAbout: [
      'PSARA License Maharashtra Controlling Authority (ADGP Special Operations)',
      `Maharashtra Minimum Wages Act Zone ${wageZone || 'I'} Compliance`,
      'Maharashtra Mathadi, Hamal and Other Manual Workers Act 1969 Mechanized Exemption Section 5 & 22',
      'Maharashtra Labour Welfare Fund (MLWF ₹25/₹75) Compliance',
      'Contract Labour (Regulation & Abolition) Act 1970',
      'MIDC Industrial Parks Manpower & Guarding Protocols',
      'ESIC (3.25%) & EPF (13.00%) Statutory Deposit Management',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'PSARA License — Maharashtra Jurisdiction',
        credentialCategory: 'Government Security Regulatory License',
        recognizedBy: {
          '@type': 'GovernmentOrganization',
          name: 'Controlling Authority & ADGP (Special Operations), Maharashtra Police',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'ISO 9001:2015 Quality Management System',
        credentialCategory: 'Quality Management Certification',
      },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  };
}

/**
 * ItemList schema representing ACS deployment corridors near a Maharashtra city.
 */
export function buildMHIndustrialHubSchema(
  hubs: { name: string; type: string; district: string; lat: number; lng: number }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'ACS Maharashtra MIDC Industrial Deployment Corridors',
    description:
      'Key MIDC industrial hubs, auto belts, and logistics corridors served by Advance Corporate Security in Maharashtra',
    itemListElement: hubs.map((hub, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Place',
        name: hub.name,
        description: `${hub.type} — ${hub.district} District, Maharashtra`,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: hub.lat,
          longitude: hub.lng,
        },
        containedInPlace: {
          '@type': 'State',
          name: 'Maharashtra',
        },
      },
    })),
  };
}

// ============================================================
// KA-Specific Schema Enhancements
// Service Area Business model with Karnataka statutory compliance signals
// ============================================================

/**
 * SAB-model LocalBusiness schema for Karnataka city/service pages.
 */
export function buildKAServiceAreaSchema({
  cityName,
  stateName,
  citySlug,
  serviceName,
  serviceSlug,
  wageZone,
}: {
  cityName: string;
  stateName: string;
  citySlug: string;
  serviceName?: string;
  serviceSlug?: string;
  wageZone?: 1 | 2 | 3;
}) {
  const canonicalServiceSlug = serviceSlug || serviceName?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const pageUrl = canonicalServiceSlug
    ? `${siteConfig.url}/services/${canonicalServiceSlug}/${citySlug}`
    : `${siteConfig.url}/location/${citySlug}`;

  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'EmploymentAgency', 'SecurityService'],
    '@id': `${pageUrl}#servicearea`,
    name: serviceName
      ? `Advance Corporate Security — ${serviceName} in ${cityName}`
      : `Advance Corporate Security — ${cityName} Service Hub`,
    url: pageUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: '₹₹',
    areaServed: {
      '@type': 'City',
      name: cityName,
      containedInPlace: {
        '@type': 'State',
        name: stateName,
        containedInPlace: {
          '@type': 'Country',
          name: 'India',
        },
      },
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cityName + ', Karnataka, India')}`,
    knowsAbout: [
      'PSARA License Karnataka Controlling Authority & ADGP (Internal Security Division)',
      `Karnataka Minimum Wages Consolidated Notification No. KAE 411 LWA 2023 Zone ${wageZone || 1} Compliance`,
      'Karnataka Labour Welfare Fund (KLWF ₹50/₹100) Annual Remittance',
      'Contract Labour (Regulation & Abolition) Act 1970',
      'KIADB Industrial Area & Tech SEZ Manpower Protocols',
      'ESIC (3.25%) / Workmen Compensation & EPF (13.00%) Statutory Deposit Management',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'PSARA License — Karnataka Jurisdiction',
        credentialCategory: 'Government Security Regulatory License',
        recognizedBy: {
          '@type': 'GovernmentOrganization',
          name: 'Controlling Authority & ADGP (Internal Security Division), Karnataka Police',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'ISO 9001:2015 Quality Management System',
        credentialCategory: 'Quality Management Certification',
      },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  };
}

/**
 * ItemList schema representing ACS deployment corridors near a Karnataka city.
 */
export function buildKAIndustrialHubSchema(
  hubs: { name: string; type: string; district: string; lat: number; lng: number }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'ACS Karnataka KIADB Industrial Deployment Corridors',
    description:
      'Key KIADB industrial areas, tech corridors, and aerospace belts served by Advance Corporate Security in Karnataka',
    itemListElement: hubs.map((hub, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Place',
        name: hub.name,
        description: `${hub.type} — ${hub.district} District, Karnataka`,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: hub.lat,
          longitude: hub.lng,
        },
        containedInPlace: {
          '@type': 'State',
          name: 'Karnataka',
        },
      },
    })),
  };
}

/**
 * Blue-Collar & Technical MEP Contracting Service Schema with
 * Multi-State Statutory Wage Band Reference (WB, MH, KA Gazettes).
 */
export function buildBlueCollarServiceSchema({
  serviceName,
  serviceSlug,
  description,
  cityName,
  stateName,
  citySlug,
  occupationalCategory,
  skillTier = 'unskilled',
  wageZone = 'A',
}: {
  serviceName: string;
  serviceSlug: string;
  description: string;
  cityName: string;
  stateName: string;
  citySlug: string;
  occupationalCategory: string;
  skillTier?: 'unskilled' | 'semiSkilled' | 'skilled' | 'highlySkilled';
  wageZone?: string;
}) {
  const pageUrl = `${siteConfig.url}/services/${serviceSlug}/${citySlug}`;
  const isWB = stateName === 'West Bengal';
  const isMH = stateName === 'Maharashtra';
  const isKA = stateName === 'Karnataka';

  let monthlyBase: number;
  let wageOfferName: string;

  if (isWB) {
    const wbZone = (wageZone === 'B' ? 'B' : 'A') as 'A' | 'B';
    monthlyBase = getWBMonthlyWage(wbZone, skillTier);
    wageOfferName = `West Bengal Zone ${wbZone} Gazette Base Wage (${skillTier}, excl. EPF 13%, ESIC 3.25%, Bonus 8.33%)`;
  } else if (isMH) {
    const mhZone = (['I', 'II', 'III'].includes(wageZone) ? wageZone : 'I') as MHWageZone;
    const mhSchedule = occupationalCategory.includes('Technical') ? 'engineering' : 'shopsAndCommercial';
    const mhTier = (skillTier === 'highlySkilled' ? 'skilled' : skillTier) as 'unskilled' | 'semiSkilled' | 'skilled';
    monthlyBase = getMHMonthlyWage(mhZone, mhTier, mhSchedule);
    wageOfferName = `Maharashtra Zone ${mhZone} Minimum Wage (${skillTier}, excl. EPF 13%, ESIC 3.25%, Bonus 8.33%, MLWF)`;
  } else if (isKA) {
    const kaZone = ([1, 2, 3].includes(Number(wageZone)) ? Number(wageZone) : 1) as KAWageZone;
    const kaTier = (skillTier === 'highlySkilled' ? 'skilled' : skillTier) as 'unskilled' | 'semiSkilled' | 'skilled';
    monthlyBase = getKAMonthlyWage(kaZone, kaTier);
    wageOfferName = `Karnataka Consolidated Notification Zone ${kaZone} Minimum Wage (${skillTier}, excl. EPF 13%, ESIC 3.25%, Bonus 8.33%, KLWF)`;
  } else {
    monthlyBase = getWBMonthlyWage('A', skillTier);
    wageOfferName = `Statutory Base Wage Reference (${skillTier})`;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#bluecollar-contract`,
    name: `${serviceName} in ${cityName}, ${stateName}`,
    serviceType: serviceName,
    category: occupationalCategory,
    description,
    url: pageUrl,
    provider: {
      '@id': siteConfig.entityId,
    },
    areaServed: {
      '@type': 'City',
      name: cityName,
      containedInPlace: {
        '@type': 'State',
        name: stateName,
      },
    },
    termsOfService: `${siteConfig.url}/compliance`,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      eligibleRegion: {
        '@type': 'AdministrativeArea',
        name: stateName,
      },
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'INR',
        minPrice: monthlyBase,
        unitText: 'MONTH',
        name: wageOfferName,
      },
    },
  };
}