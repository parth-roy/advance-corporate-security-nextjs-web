// ============================================================
// ACS — Maharashtra Anti-Scaled-Content-Abuse Quality Gates
// Pure zero-import module (compatible with Next.js & Node)
// ============================================================

/**
 * Peripheral residential suburbs, commuter satellites, and low-density
 * non-industrial talukas in Maharashtra.
 * These routes remain live for direct traffic and paid campaigns, but output
 * `noindex, follow` on 2-tier (/services/[slug]/[city]) and 3-tier
 * (/services/[slug]/[city]/[industry]) programmatic matrices and are omitted
 * from XML sitemaps to protect crawl equity.
 */
export const MH_PERIPHERAL_TIER3_SLUGS: ReadonlySet<string> = new Set([
  // Mumbai inner residential wards
  "andheri",
  "bandra",
  "borivali",
  "dadar",
  "ghatkopar",
  "malad",
  "powai",
  // Pune residential pockets
  "kothrud",
  "hadapsar",
  "wakad",
  "baner",
  "viman-nagar",
  // Commuter satellites & duplicate municipal slugs
  "mira-bhayandar",
  "mira-and-bhayander",
  "vasai",
  "virar",
  "vasai-virar",
  "badlapur",
  "ulhasnagar",
  "dombivli",
  "kalyan",
  "kalyan-and-dombivali",
  "navi-mumbai-panvel-raigad",
  "sangli-miraj-kupwad",
  "nanded-waghala",
  // Remote agrarian / non-industrial talukas
  "achalpur",
  "udgir",
  "barshi",
  "hingoli",
  "washim",
  "buldhana",
  "bhandara",
  "gondia",
  "jaysingpur",
  "phaltan",
  "bhusawal",
  "malegaon",
  "parbhani",
  "osmanabad",
  "kudal",
  "nandurbar",
]);

/**
 * All known 99 Maharashtra city slugs present in `cities.ts` & `mh-zone-dictionary.ts`.
 */
export const MH_ENRICHED_DICTIONARY_SLUGS: ReadonlySet<string> = new Set([
  "mumbai", "pune", "nagpur", "nashik", "thane", "navi-mumbai", "aurangabad",
  "pimpri-chinchwad", "solapur", "amravati", "kolhapur", "ulhasnagar", "bhiwandi",
  "jalgaon", "akola", "ahmednagar", "sangli", "latur", "dhule", "chandrapur",
  "nanded", "satara", "wardha", "jnpt", "chakan", "kalyan-and-dombivali",
  "vasai-virar", "mira-and-bhayander", "nanded-waghala", "sangli-miraj-kupwad",
  "malegaon", "parbhani", "ichalkaranji", "jalna", "ambernath",
  "navi-mumbai-panvel-raigad", "bhusawal", "panvel", "barshi", "yavatmal",
  "achalpur", "osmanabad", "nandurbar", "udgir", "hinganghat", "andheri",
  "bandra", "borivali", "kalyan", "ghatkopar", "powai", "dadar", "malad",
  "kothrud", "hadapsar", "wakad", "hinjewadi", "viman-nagar", "baner",
  "bhosari", "talegaon", "ranjangaon", "shirwal", "baramati", "kurkumbh",
  "waluj", "shendra", "butibori", "tarapur", "taloja", "rabale", "mahape",
  "turbhe", "airoli", "boisar", "palghar", "vasai", "virar", "mira-bhayandar",
  "badlapur", "dombivli", "uran", "pen", "roha", "mahad", "chiplun",
  "ratnagiri", "kudal", "karad", "phaltan", "jaysingpur", "miraj", "beed",
  "hingoli", "bhandara", "gondia", "gadchiroli", "washim", "buldhana"
]);

/**
 * Core Maharashtra industrial centers, ports, and Tier-1 hubs approved for
 * 3-tier indexing (`/services/[slug]/[city]/[industry]`).
 */
export const MH_INDUSTRY_COMBO_INDEXABLE_SLUGS: ReadonlySet<string> = new Set([
  "mumbai",
  "pune",
  "pimpri-chinchwad",
  "chakan",
  "talegaon",
  "bhosari",
  "ranjangaon",
  "hinjewadi",
  "thane",
  "navi-mumbai",
  "bhiwandi",
  "taloja",
  "jnpt",
  "rabale",
  "mahape",
  "turbhe",
  "airoli",
  "tarapur",
  "boisar",
  "palghar",
  "nashik",
  "aurangabad",
  "shendra",
  "waluj",
  "nagpur",
  "butibori",
  "kolhapur",
  "satara",
  "shirwal",
  "baramati",
  "kurkumbh",
  "jalna",
  "ahmednagar",
  "solapur",
  "chandrapur",
  "roha",
  "mahad",
  "ambernath",
  "panvel",
]);

export function isMHCityIndexable(citySlug: string): boolean {
  const normalized = citySlug.toLowerCase().trim();
  if (!MH_ENRICHED_DICTIONARY_SLUGS.has(normalized)) return false;
  return !MH_PERIPHERAL_TIER3_SLUGS.has(normalized);
}

export function isMHIndustryComboIndexable(citySlug: string): boolean {
  const normalized = citySlug.toLowerCase().trim();
  return MH_INDUSTRY_COMBO_INDEXABLE_SLUGS.has(normalized);
}
