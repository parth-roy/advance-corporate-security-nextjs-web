// ============================================================
// ACS — Single Source of Truth Configuration
// All NAP (Name, Address, Phone), social, domain, and SEO data
// MUST flow from this file. Never hardcode elsewhere.
// ============================================================

export const siteConfig = {
  // --- Brand Identity ---
  name: "Advance Corporate Services",
  shortName: "ACS",
  tagline: "India's Trusted Manpower & Facility Management Since 2000",
  description:
    "Advance Corporate Services (ACS) is a professionally managed, ISO 9001:2015 certified Facility Management and Manpower Outsourcing company serving pan India since 2000. We provide Security Services, Housekeeping, Fire Fighting, Surveillance, Placement, and Horticulture services.",
  foundedYear: 2000,
  certification: "ISO 9001:2015",

  // --- Domain & URLs ---
  url: "https://advancecorporatesecurity.com",
  apiUrl: "https://api.advancecorporatesecurity.com",
  // Legacy domain (old WordPress) — kept for 301 reference
  legacyUrl: "https://advancecorporate.in",

  // --- NAP (Name, Address, Phone) — DO NOT change format, used in JSON-LD ---
  address: {
    streetAddress: "Barrackpore",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    postalCode: "700120",
    addressCountry: "IN",
  },
  phone: "+91 98312 50270",
  email: "advancedcorporatesecurityj@gmail.com",
  adminEmail: "admin@advancecorporatesecurity.com", // future

  // --- Social ---
  social: {
    facebook: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    youtube: "",
    whatsapp: "+919831250270",
  },

  // --- Geographic Coordinates (for LocalBusiness schema) ---
  geo: {
    lat: 22.7591,
    lng: 88.3655, // Barrackpore, Kolkata
  },

  // --- JSON-LD Entity IDs ---
  entityId: "https://advancecorporatesecurity.com/#organization",
  websiteId: "https://advancecorporatesecurity.com/#website",

  // --- Services ---
  services: [
    {
      slug: "security-safety",
      name: "Security & Safety Services",
      shortName: "Security Services",
      description:
        "Professional security guard services, surveillance, CCTV monitoring, night patrolling, metal detectors, boom barriers, and fire fighting services across India.",
      icon: "shield",
      heroImage: "/images/security-service-slider.jpg",
    },
    {
      slug: "facility-management",
      name: "Facility Management Services",
      shortName: "Facility Management",
      description:
        "Comprehensive hard and soft facility management including housekeeping, janitorial, building maintenance, and infrastructure management.",
      icon: "building",
      heroImage: "/images/facility-management-slider-new.jpg",
    },
    {
      slug: "placement-services",
      name: "Placement Services",
      shortName: "Placement & Staffing",
      description:
        "Expert manpower outsourcing and staffing solutions. We connect qualified candidates with corporates, industries, and government organizations across India.",
      icon: "users",
      heroImage: "/images/placement-service-slider.jpg",
    },
    {
      slug: "horticulture",
      name: "Horticulture Services",
      shortName: "Horticulture",
      description:
        "Professional landscaping, garden and lawn design, grounds keeping, and farm development services for corporates and institutions.",
      icon: "leaf",
      heroImage: "/images/horticulture-slider.jpg",
    },
  ],

  // --- Indian Cities for Programmatic SEO ---
  // Format: { name, slug, state }
  cities: [
    // West Bengal (HQ State — Primary Focus)
    { name: "Kolkata", slug: "kolkata", state: "West Bengal" },
    { name: "Barrackpore", slug: "barrackpore", state: "West Bengal" },
    { name: "Howrah", slug: "howrah", state: "West Bengal" },
    { name: "Durgapur", slug: "durgapur", state: "West Bengal" },
    { name: "Asansol", slug: "asansol", state: "West Bengal" },
    { name: "Siliguri", slug: "siliguri", state: "West Bengal" },
    { name: "Haldia", slug: "haldia", state: "West Bengal" },
    { name: "Barasat", slug: "barasat", state: "West Bengal" },
    { name: "Kalyani", slug: "kalyani", state: "West Bengal" },
    // Delhi NCR
    { name: "Delhi", slug: "delhi", state: "Delhi" },
    { name: "Noida", slug: "noida", state: "Uttar Pradesh" },
    { name: "Gurgaon", slug: "gurgaon", state: "Haryana" },
    { name: "Faridabad", slug: "faridabad", state: "Haryana" },
    // Maharashtra
    { name: "Mumbai", slug: "mumbai", state: "Maharashtra" },
    { name: "Pune", slug: "pune", state: "Maharashtra" },
    { name: "Nagpur", slug: "nagpur", state: "Maharashtra" },
    // Karnataka
    { name: "Bengaluru", slug: "bengaluru", state: "Karnataka" },
    // Tamil Nadu
    { name: "Chennai", slug: "chennai", state: "Tamil Nadu" },
    // Telangana
    { name: "Hyderabad", slug: "hyderabad", state: "Telangana" },
    // Gujarat
    { name: "Ahmedabad", slug: "ahmedabad", state: "Gujarat" },
    { name: "Surat", slug: "surat", state: "Gujarat" },
    // Bihar & Jharkhand
    { name: "Patna", slug: "patna", state: "Bihar" },
    { name: "Ranchi", slug: "ranchi", state: "Jharkhand" },
    { name: "Jharsuguda", slug: "jharsuguda", state: "Odisha" },
    // Odisha
    { name: "Bhubaneswar", slug: "bhubaneswar", state: "Odisha" },
    // Assam
    { name: "Guwahati", slug: "guwahati", state: "Assam" },
    // Rajasthan
    { name: "Jaipur", slug: "jaipur", state: "Rajasthan" },
    // UP
    { name: "Lucknow", slug: "lucknow", state: "Uttar Pradesh" },
    { name: "Kanpur", slug: "kanpur", state: "Uttar Pradesh" },
    // Punjab
    { name: "Chandigarh", slug: "chandigarh", state: "Punjab" },
    { name: "Ludhiana", slug: "ludhiana", state: "Punjab" },
    // Andaman
    { name: "Port Blair", slug: "port-blair", state: "Andaman & Nicobar Islands" },
  ],

  // --- Stats (for hero / about section) ---
  stats: [
    { label: "Years of Experience", value: "25+" },
    { label: "Trained Professionals", value: "5000+" },
    { label: "Cities Served", value: "Pan India" },
    { label: "Government Clients", value: "50+" },
  ],
} as const;

export type ServiceSlug = (typeof siteConfig.services)[number]["slug"];
export type City = (typeof siteConfig.cities)[number];
