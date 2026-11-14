// ============================================================
// ACS — Karnataka Anti-Scaled-Content-Abuse Quality Gates
// Pure zero-import module (compatible with Next.js & Node)
// ============================================================

/**
 * Peripheral residential layouts in Bengaluru and low-density talukas in Karnataka.
 * These routes remain live for direct traffic and paid campaigns, but output
 * `noindex, follow` on 2-tier (/services/[slug]/[city]) and 3-tier
 * (/services/[slug]/[city]/[industry]) programmatic matrices and are omitted
 * from XML sitemaps to protect crawl equity.
 */
export const KA_PERIPHERAL_TIER3_SLUGS: ReadonlySet<string> = new Set([
  // Bengaluru residential layouts
  "koramangala",
  "indiranagar",
  "jayanagar",
  "hsr-layout",
  "marathahalli",
  "bellandur",
  // Remote/low-industrial talukas & composite historical names
  "robertson-pet",
  "gadag-and-betigeri",
  "bhadravati",
  "gangawati",
  "chikmagalur",
  "bagalkot",
  "yadgir",
  "ranibennur",
  "bijapur",
  "koppal",
  "karwar",
]);

/**
 * All known 56 Karnataka city slugs present in `cities.ts` & `ka-zone-dictionary.ts`.
 */
export const KA_ENRICHED_DICTIONARY_SLUGS: ReadonlySet<string> = new Set([
  "bengaluru", "mysore", "hubli", "mangalore", "belgaum", "davangere", "bellary",
  "bijapur", "shimoga", "tumkur", "hospet", "udupi", "kolar", "mandya", "hassan",
  "peenya", "hubli-and-dharwad", "gulbarga", "raichur", "bidar", "gadag-and-betigeri",
  "bhadravati", "robertson-pet", "chitradurga", "chikmagalur", "bagalkot", "ranibennur",
  "gangawati", "koramangala", "indiranagar", "whitefield", "jayanagar", "hsr-layout",
  "electronic-city", "marathahalli", "bellandur", "bommasandra", "jigani", "bidadi",
  "harohalli", "dobbaspet", "nelamangala", "malur", "narasapura", "vemgal", "kgf",
  "hoskote", "devanahalli", "doddaballapur", "vasanthanarasapura", "nanjangud",
  "hebbal-mysore", "baikampady", "koppal", "yadgir", "karwar"
]);

/**
 * Core Karnataka industrial estates, aerospace zones, ports, and Tier-1 hubs
 * approved for 3-tier indexing (`/services/[slug]/[city]/[industry]`).
 */
export const KA_INDUSTRY_COMBO_INDEXABLE_SLUGS: ReadonlySet<string> = new Set([
  "bengaluru",
  "peenya",
  "whitefield",
  "electronic-city",
  "bommasandra",
  "jigani",
  "bidadi",
  "harohalli",
  "dobbaspet",
  "nelamangala",
  "malur",
  "narasapura",
  "vemgal",
  "hoskote",
  "devanahalli",
  "doddaballapur",
  "vasanthanarasapura",
  "tumkur",
  "mysore",
  "nanjangud",
  "hebbal-mysore",
  "hubli",
  "hubli-and-dharwad",
  "belgaum",
  "baikampady",
  "mangalore",
  "bellary",
  "hospet",
  "chitradurga",
  "davangere",
  "shimoga",
  "hassan",
]);

export function isKACityIndexable(citySlug: string): boolean {
  const normalized = citySlug.toLowerCase().trim();
  if (!KA_ENRICHED_DICTIONARY_SLUGS.has(normalized)) return false;
  return !KA_PERIPHERAL_TIER3_SLUGS.has(normalized);
}

export function isKAIndustryComboIndexable(citySlug: string): boolean {
  const normalized = citySlug.toLowerCase().trim();
  return KA_INDUSTRY_COMBO_INDEXABLE_SLUGS.has(normalized);
}
