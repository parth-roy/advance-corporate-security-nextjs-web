// ============================================================
// ACS — Single Source of Truth Configuration
// All NAP (Name, Address, Phone), social, domain, and SEO data
// MUST flow from this file. Never hardcode elsewhere.
// services / cities are imported from dedicated data files.
// ============================================================

import { ACS_SERVICES } from "./services";
import { ACS_CITIES } from "./cities";

export const siteConfig = {
  // --- Brand Identity ---
  name: "Advance Corporate Security",
  shortName: "ACS",
  tagline: "India's Trusted Manpower & Facility Management Since 2000",
  description:
    "Advance Corporate Security (ACS) is a professionally managed, PSARA-licensed and ISO 9001:2015 certified Facility Management and Manpower Outsourcing company serving pan India since 2000. We provide Security Guard Services, Corporate Housekeeping, Manpower Outsourcing, Pest Control, MEP Maintenance, Fire Fighting, Surveillance, Placement, Payroll Management, and Horticulture services.",
  foundedYear: 2000,
  certification: "ISO 9001:2015",

  // --- Domain & URLs ---
  url: "https://advancecorporatesecurity.com",
  apiUrl: "https://api.advancecorporatesecurity.com",
  legacyUrl: "https://advancecorporate.in",

  // --- NAP (Name, Address, Phone) — DO NOT change format, used in JSON-LD ---
  address: {
    streetAddress: "Barrackpore",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    postalCode: "700120",
    addressCountry: "IN",
  },
  phone: "+91 93399 88999",
  phones: [
    "+91 93399 88999",
    "+91 79801 47044",
    "+91 94770 06681",
  ],
  phoneDisplay: "+91 93399 88999 / +91 79801 47044 / +91 94770 06681",
  email: "admin@advancecorporatesecurity.com",
  adminEmail: "admin@advancecorporatesecurity.com",

  // --- Social ---
  social: {
    facebook: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    youtube: "",
    whatsapp: "+919339988999",
  },

  // --- Geographic Coordinates (for LocalBusiness schema) ---
  geo: {
    lat: 22.7591,
    lng: 88.3655, // Barrackpore, Kolkata
  },

  // --- JSON-LD Entity IDs ---
  entityId: "https://www.advancecorporatesecurity.com/#organization",
  websiteId: "https://www.advancecorporatesecurity.com/#website",

  // --- All 17 Services from ACS Brochure (imported from services.ts) ---
  services: ACS_SERVICES,

  // --- 580+ Pan-India Cities (imported from cities.ts) ---
  cities: ACS_CITIES,

  // --- Stats (for hero / about section) ---
  stats: [
    { label: "Years of Excellence", value: "25+" },
    { label: "Trained Professionals", value: "5000+" },
    { label: "Pan India Presence", value: "500+" },
    { label: "Government Clients", value: "50+" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;