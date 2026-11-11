// ============================================================
// ACS — West Bengal Anti-Scaled-Content-Abuse Quality Gates
// Pure zero-import module (compatible with Next.js & Node --experimental-strip-types)
// ============================================================

/**
 * Tier-3 peripheral residential, agricultural, or non-industrial municipal
 * pockets in West Bengal. These routes remain live for direct visitors and
 * paid campaigns, but output `noindex, follow` on 2-tier (`/services/[slug]/[city]`)
 * and 3-tier (`/services/[slug]/[city]/[industry]`) programmatic matrices and are
 * omitted from service-city XML sitemaps until dedicated industrial parks open.
 */
export const WB_PERIPHERAL_TIER3_SLUGS: ReadonlySet<string> = new Set([
  "ashokenagar-kalyangarh",
  "bagnan",
  "panitanki",
  "nabadwip",
  "santipur",
  "haringhata",
  "tribeni",
  "barakar",
  "pandaveswar",
  "bishnupur",
  "rampurhat",
  "habra",
  "baduria",
  "dhulian",
  "amta",
  "gurap",
  "jangipara",
]);

/**
 * Core West Bengal industrial estates, ports, logistics corridors, IT hubs, and
 * Tier-1/primary district headquarters approved for 3-tier indexing
 * (`/services/[slug]/[city]/[industry]`).
 */
export const WB_INDUSTRY_COMBO_INDEXABLE_SLUGS: ReadonlySet<string> = new Set([
  // Tier-1 Metro, IT & Core Industrial Nodes
  "kolkata",
  "howrah",
  "durgapur",
  "asansol",
  "siliguri",
  "haldia",
  "dankuni",
  "barrackpore",
  "salt-lake",
  "new-town",
  "kharagpur",
  // Primary WBIDC Parks, SEZs, Ports & Highway Freight Corridors
  "panagarh",
  "falta",
  "bantala",
  "dhulagarh",
  "sankrail",
  "uluberia",
  "ranihati",
  "panchla",
  "singur",
  "petrapole",
  "dabgram",
  "bagdogra",
  "matigara",
  "fulbari",
  "kalyani",
  "barjora",
  "raghunathpur",
  "burdwan",
  "bandel",
  "serampore",
  "raniganj",
  "kulti",
  "burnpur",
  "andal",
  "durgachak",
  "budge-budge",
  "maheshtala",
  "taratala",
  "kasba",
  "ecospace",
  "kona-expressway",
  "dankuni-logistics",
  "baltikuri",
  "dasnagar",
  "liluah",
  // Primary District Commercial / Agri-Cold-Storage HQs
  "barasat",
  "krishnanagar",
  "malda",
  "baharampur",
  "jalpaiguri",
  "cooch-behar",
  "alipurduar",
  "raiganj",
  "balurghat",
  "bankura",
  "puruliya",
  "medinipur",
  "tamluk",
  "kolaghat",
  "jhargram",
  "darjeeling",
  "kalimpong",
  "suri",
  "bolpur",
]);

/**
 * Known all-147 West Bengal city slugs present in `wb-zone-dictionary.ts`
 * and `KNOWN_CITY_ZONES`.
 */
export const WB_ENRICHED_DICTIONARY_SLUGS: ReadonlySet<string> = new Set([
  "kolkata", "howrah", "asansol", "durgapur", "siliguri", "haldia", "barrackpore", "kharagpur",
  "barasat", "darjeeling", "jalpaiguri", "kalyani", "medinipur", "malda", "baharampur", "raiganj",
  "serampore", "chandannagar", "santipur", "habra", "bhatpara", "panihati", "kamarhati", "naihati",
  "bankura", "puruliya", "raniganj", "balurghat", "cooch-behar", "dankuni", "dhulagarh", "sankrail",
  "uluberia", "panitanki", "maheshtala", "rajpur-sonarpur", "south-dum-dum", "rajarhat-gopalpur",
  "kulti", "bally", "north-dum-dum", "baranagar", "english-bazar", "madhyamgram",
  "hugli-and-chinsurah", "uttarpara-kotrung", "jamuria", "north-barrackpur", "nabadwip",
  "basirhat", "halisahar", "rishra", "ashokenagar-kalyangarh", "baidyabati", "kanchrapara",
  "dabgram", "titagarh", "dum-dum", "bally-town", "champdani", "bongaon", "khardaha", "bansberia",
  "bhadreswar", "salt-lake", "new-town", "esplanade", "garia", "behala", "jadavpur", "rajarhat",
  "dankuni-logistics", "kona-expressway", "domjur", "bagnan", "taratala", "kasba", "topsia",
  "tangra", "sodepur", "belgharia", "agarpara", "haringhata", "tribeni", "bandel", "chinsurah",
  "konnagar", "uttarpara", "hindmotor", "burnpur", "barakar", "andal", "pandaveswar", "sutahata",
  "durgachak", "jhargram", "matigara", "fulbari", "bagdogra", "alipurduar", "bishnupur", "suri",
  "bolpur", "rampurhat", "panagarh", "falta", "petrapole", "ranihati", "panchla", "singur",
  "gurap", "jangipara", "budge-budge", "pujali", "baduria", "kolaghat", "mecheda", "panskura",
  "tamluk", "contai", "baltikuri", "dasnagar", "liluah", "belur", "ghusuri", "salkia",
  "kadamtala", "amta", "jagatdal", "bantala", "tiljala", "cossipore", "park-street",
  "camac-street", "bbd-bagh", "burrabazar", "chandni-chowk", "ecospace", "kalimpong",
  "burdwan", "krishnanagar", "ranaghat", "dhulian", "barjora", "raghunathpur",
  "diamond-harbour", "baruipur",
]);

/**
 * Returns `true` when a West Bengal city satisfies our quality gate for
 * 2-tier (`/services/[slug]/[city]`) indexing:
 * 1. Verified statutory profile in `wb-zone-dictionary.ts` & local deployment zones
 * 2. Active industrial / commercial / logistics corridor classification (excludes peripheral Tier-3 towns)
 */
export function isWBCityIndexable(citySlug: string): boolean {
  const normalized = citySlug.toLowerCase().trim();
  if (!WB_ENRICHED_DICTIONARY_SLUGS.has(normalized)) {
    return false;
  }
  return !WB_PERIPHERAL_TIER3_SLUGS.has(normalized);
}

/**
 * Strict gate for 3-tier (`/services/[slug]/[city]/[industry]`) pages.
 * Limits Google indexing strictly to core WB industrial corridors, Tier-1 cities,
 * WBIDC estates, SEZs, ports, and primary district headquarters.
 */
export function isWBIndustryComboIndexable(citySlug: string): boolean {
  const normalized = citySlug.toLowerCase().trim();
  return WB_INDUSTRY_COMBO_INDEXABLE_SLUGS.has(normalized);
}
