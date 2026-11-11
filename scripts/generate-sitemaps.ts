import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ACS_CITIES } from "../src/lib/cities.ts";
import { ACS_SERVICES } from "../src/lib/services.ts";
import { ACS_INDUSTRIES } from "../src/lib/industries.ts";
import { getAllCorridors } from "../src/lib/corridors.ts";
import { getAllIndustrialParks } from "../src/lib/industrialParks.ts";
import {
  isWBCityIndexable,
  isWBIndustryComboIndexable,
} from "../src/lib/wb-content-quality.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, "../public");
const BASE_URL = "https://advancecorporatesecurity.com";
const TODAY = new Date().toISOString().split("T")[0];

/**
 * Core West Bengal B2B Blue-Collar & MEP trades partitioned into
 * dedicated `sitemap-manpower-combos.xml` (excluded from category-level
 * facility/manpower sitemaps to avoid duplicate child-sitemap URLs).
 */
const BLUE_COLLAR_COMBO_SLUGS = new Set([
  "loading-unloading-labour",
  "warehouse-manpower-supply",
  "industrial-factory-workers",
  "industrial-electrician-contractors",
  "commercial-plumbing-contractors",
  "hvac-ac-maintenance-staffing",
  "carpentry-painting-civil-labour",
  "office-support-peon-pantry-staff",
  "commercial-shifting-relocation-labour",
]);

function generateUrlXml(
  entries: Array<{ loc: string; lastmod?: string; changefreq?: string; priority?: string }>
) {
  const items = entries
    .map(
      (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod || TODAY}</lastmod>
    <changefreq>${e.changefreq || "monthly"}</changefreq>
    <priority>${e.priority || "0.8"}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</urlset>`;
}

function generateIndexXml(sitemaps: string[]) {
  const items = sitemaps
    .map(
      (s) => `  <sitemap>
    <loc>${BASE_URL}/${s}</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</sitemapindex>`;
}

async function main() {
  console.log("Generating segmented XML sitemaps for ACS...");

  const corridors = getAllCorridors();
  const parks = getAllIndustrialParks();
  const wbCities = ACS_CITIES.filter((c) => c.state === "West Bengal");
  const indexableWbCities = wbCities.filter((c) => isWBCityIndexable(c.slug));
  const coreIndustrialWbCities = wbCities.filter((c) => isWBIndustryComboIndexable(c.slug));

  // 1. Core pages, Procurement & Industry Sector hubs
  const coreUrls = [
    { loc: `${BASE_URL}/`, priority: "1.0", changefreq: "weekly" },
    { loc: `${BASE_URL}/about`, priority: "0.8" },
    { loc: `${BASE_URL}/services`, priority: "0.95", changefreq: "weekly" },
    { loc: `${BASE_URL}/procurement`, priority: "0.95", changefreq: "weekly" },
    { loc: `${BASE_URL}/procurement/agency-comparison`, priority: "0.95", changefreq: "monthly" },
    { loc: `${BASE_URL}/procurement/gem-security-tender-checklist`, priority: "0.90", changefreq: "monthly" },
    { loc: `${BASE_URL}/procurement/monthly-compliance-pack-template`, priority: "0.90", changefreq: "monthly" },
    { loc: `${BASE_URL}/procurement/psara-license-verification-checklist`, priority: "0.90", changefreq: "monthly" },
    { loc: `${BASE_URL}/procurement/how-to-read-a-manpower-cost-sheet`, priority: "0.90", changefreq: "monthly" },
    { loc: `${BASE_URL}/procurement/security-minimum-wages-west-bengal`, priority: "0.90", changefreq: "monthly" },
    { loc: `${BASE_URL}/procurement/workforce-capacity-and-payroll-model`, priority: "0.90", changefreq: "monthly" },
    { loc: `${BASE_URL}/sitemap`, priority: "0.95", changefreq: "weekly" },
    { loc: `${BASE_URL}/lp/industrial-security`, priority: "0.85", changefreq: "monthly" },
    { loc: `${BASE_URL}/insights`, priority: "0.95", changefreq: "weekly" },
    { loc: `${BASE_URL}/insights/epf-section-7a-compliance-guide`, priority: "0.90", changefreq: "monthly" },
    { loc: `${BASE_URL}/insights/west-bengal-minimum-wages-zone-a-zone-b`, priority: "0.90", changefreq: "monthly" },
    { loc: `${BASE_URL}/insights/gem-4-public-procurement-security-guidelines`, priority: "0.90", changefreq: "monthly" },
    { loc: `${BASE_URL}/insights/warehouse-industrial-security-sop-weighbridge-protocol`, priority: "0.90", changefreq: "monthly" },
    { loc: `${BASE_URL}/case-studies`, priority: "0.95", changefreq: "weekly" },
    { loc: `${BASE_URL}/case-studies/dankuni-heavy-industrial-logistics-park`, priority: "0.90", changefreq: "monthly" },
    { loc: `${BASE_URL}/case-studies/salt-lake-sector-v-corporate-it-park`, priority: "0.90", changefreq: "monthly" },
    { loc: `${BASE_URL}/case-studies/greater-kolkata-multispeciality-hospital`, priority: "0.90", changefreq: "monthly" },
    { loc: `${BASE_URL}/sectors`, priority: "0.9", changefreq: "weekly" },
    { loc: `${BASE_URL}/tenders`, priority: "0.90", changefreq: "weekly" },
    { loc: `${BASE_URL}/compliance`, priority: "0.85", changefreq: "monthly" },
    { loc: `${BASE_URL}/rate-card-calculator`, priority: "0.95", changefreq: "weekly" },
    { loc: `${BASE_URL}/request-audit`, priority: "0.95", changefreq: "weekly" },
    { loc: `${BASE_URL}/credentials`, priority: "0.90", changefreq: "monthly" },
    { loc: `${BASE_URL}/services/integrated-facility-management`, priority: "0.90", changefreq: "weekly" },
    { loc: `${BASE_URL}/quote`, priority: "0.95", changefreq: "weekly" },
    ...ACS_INDUSTRIES.map((ind) => ({
      loc: `${BASE_URL}/sectors/${ind.slug}`,
      priority: "0.85",
      changefreq: "monthly",
    })),
    { loc: `${BASE_URL}/contact`, priority: "0.8" },
    { loc: `${BASE_URL}/clients`, priority: "0.7" },
    { loc: `${BASE_URL}/careers`, priority: "0.7", changefreq: "weekly" },
    { loc: `${BASE_URL}/gallery`, priority: "0.6" },
    { loc: `${BASE_URL}/location`, priority: "0.90", changefreq: "weekly" },
  ];
  await fs.writeFile(path.join(PUBLIC_DIR, "sitemap-core.xml"), generateUrlXml(coreUrls), "utf8");
  console.log(`✅ sitemap-core.xml generated (${coreUrls.length} URLs)`);

  // 2. Industrial Corridors
  const corridorUrls = corridors.map((c) => ({
    loc: `${BASE_URL}/corridors/${c.slug}`,
    priority: c.state === "West Bengal" ? "0.95" : "0.90",
    changefreq: "weekly",
  }));
  await fs.writeFile(path.join(PUBLIC_DIR, "sitemap-corridors.xml"), generateUrlXml(corridorUrls), "utf8");
  console.log(`✅ sitemap-corridors.xml generated (${corridorUrls.length} URLs)`);

  // 3. Grade-A Industrial Parks & SEZs
  const parkUrls = parks.map((p) => ({
    loc: `${BASE_URL}/industrial-parks/${p.slug}`,
    priority: "0.95",
    changefreq: "weekly",
  }));
  await fs.writeFile(path.join(PUBLIC_DIR, "sitemap-industrial-parks.xml"), generateUrlXml(parkUrls), "utf8");
  console.log(`✅ sitemap-industrial-parks.xml generated (${parkUrls.length} URLs)`);

  // 4. States (Pan-India state hubs; West Bengal priority boosted)
  const uniqueStateSlugs = Array.from(new Set(ACS_CITIES.map((c) => c.stateSlug)));
  const stateUrls = uniqueStateSlugs.map((slug) => ({
    loc: `${BASE_URL}/location/state/${slug}`,
    priority: slug === "west-bengal" ? "0.95" : "0.75",
    changefreq: slug === "west-bengal" ? "weekly" : "monthly",
  }));
  await fs.writeFile(path.join(PUBLIC_DIR, "sitemap-states.xml"), generateUrlXml(stateUrls), "utf8");
  console.log(`✅ sitemap-states.xml generated (${stateUrls.length} URLs)`);

  // 5. City deployment hubs (852+ pan-India)
  const cityUrls = ACS_CITIES.map((c) => ({
    loc: `${BASE_URL}/location/${c.slug}`,
    priority: c.state === "West Bengal" && c.tier === 1 ? "0.95" : c.tier === 1 ? "0.85" : c.tier === 2 ? "0.75" : "0.6",
    changefreq: c.tier === 1 ? "weekly" : "monthly",
  }));
  await fs.writeFile(path.join(PUBLIC_DIR, "sitemap-cities.xml"), generateUrlXml(cityUrls), "utf8");
  console.log(`✅ sitemap-cities.xml generated (${cityUrls.length} URLs)`);

  // Helper to guard against submitting noindex Tier-3 WB combinations
  const isCityAllowedForService = (city: (typeof ACS_CITIES)[number]) =>
    city.state !== "West Bengal" || isWBCityIndexable(city.slug);

  // 6. Security & Safety
  const securityServices = ACS_SERVICES.filter((s) => s.category === "security");
  const securityUrls: Array<{ loc: string; priority: string }> = [
    { loc: `${BASE_URL}/services/security-safety`, priority: "0.9" },
    ...securityServices.map((s) => ({ loc: `${BASE_URL}/services/${s.slug}`, priority: "0.85" })),
  ];
  for (const s of securityServices) {
    for (const city of ACS_CITIES) {
      if (!isCityAllowedForService(city)) continue;
      securityUrls.push({
        loc: `${BASE_URL}/services/${s.slug}/${city.slug}`,
        priority: city.state === "West Bengal" && city.tier === 1 ? "0.95" : city.tier === 1 ? "0.85" : "0.75",
      });
    }
  }
  await fs.writeFile(path.join(PUBLIC_DIR, "sitemap-security.xml"), generateUrlXml(securityUrls), "utf8");
  console.log(`✅ sitemap-security.xml generated (${securityUrls.length} URLs)`);

  // 7. Facility Management (excludes WB blue-collar/MEP combos owned by sitemap-manpower-combos.xml)
  const facilityServices = ACS_SERVICES.filter((s) => s.category === "facility");
  const facilityUrls: Array<{ loc: string; priority: string }> = [
    { loc: `${BASE_URL}/services/facility-management`, priority: "0.9" },
    ...facilityServices.map((s) => ({ loc: `${BASE_URL}/services/${s.slug}`, priority: "0.85" })),
  ];
  for (const s of facilityServices) {
    for (const city of ACS_CITIES) {
      if (!isCityAllowedForService(city)) continue;
      if (city.state === "West Bengal" && BLUE_COLLAR_COMBO_SLUGS.has(s.slug)) continue;
      facilityUrls.push({
        loc: `${BASE_URL}/services/${s.slug}/${city.slug}`,
        priority: city.tier === 1 ? "0.85" : "0.7",
      });
    }
  }
  await fs.writeFile(path.join(PUBLIC_DIR, "sitemap-facility.xml"), generateUrlXml(facilityUrls), "utf8");
  console.log(`✅ sitemap-facility.xml generated (${facilityUrls.length} URLs)`);

  // 8. Manpower & Staffing (pan-India + general staffing; WB blue-collar combos in sitemap-manpower-combos.xml)
  const manpowerServices = ACS_SERVICES.filter((s) => s.category === "manpower");
  const manpowerUrls: Array<{ loc: string; priority: string }> = [
    ...manpowerServices.map((s) => ({ loc: `${BASE_URL}/services/${s.slug}`, priority: "0.90" })),
  ];
  for (const s of manpowerServices) {
    for (const city of ACS_CITIES) {
      if (!isCityAllowedForService(city)) continue;
      if (city.state === "West Bengal" && BLUE_COLLAR_COMBO_SLUGS.has(s.slug)) continue;
      manpowerUrls.push({
        loc: `${BASE_URL}/services/${s.slug}/${city.slug}`,
        priority: city.tier === 1 ? "0.85" : "0.7",
      });
    }
  }
  await fs.writeFile(path.join(PUBLIC_DIR, "sitemap-manpower.xml"), generateUrlXml(manpowerUrls), "utf8");
  console.log(`✅ sitemap-manpower.xml generated (${manpowerUrls.length} URLs)`);

  // 9. Priority West Bengal Blue-Collar Manpower & MEP Trade Combos (9 Trades × 130 Quality-Gated WB Hubs)
  const blueCollarServices = ACS_SERVICES.filter((s) => BLUE_COLLAR_COMBO_SLUGS.has(s.slug));
  const manpowerComboUrls: Array<{ loc: string; priority: string; changefreq: string }> = [];
  for (const s of blueCollarServices) {
    for (const city of indexableWbCities) {
      manpowerComboUrls.push({
        loc: `${BASE_URL}/services/${s.slug}/${city.slug}`,
        priority: city.tier === 1 ? "0.95" : city.tier === 2 ? "0.90" : "0.80",
        changefreq: "weekly",
      });
    }
  }
  await fs.writeFile(
    path.join(PUBLIC_DIR, "sitemap-manpower-combos.xml"),
    generateUrlXml(manpowerComboUrls),
    "utf8"
  );
  console.log(`✅ sitemap-manpower-combos.xml generated (${manpowerComboUrls.length} priority WB blue-collar URLs)`);

  // 10. Horticulture & Green
  const horticultureServices = ACS_SERVICES.filter((s) => s.category === "horticulture");
  const horticultureUrls: Array<{ loc: string; priority: string }> = [
    { loc: `${BASE_URL}/services/horticulture`, priority: "0.85" },
  ];
  for (const s of horticultureServices) {
    for (const city of ACS_CITIES) {
      if (!isCityAllowedForService(city)) continue;
      horticultureUrls.push({
        loc: `${BASE_URL}/services/${s.slug}/${city.slug}`,
        priority: city.tier === 1 ? "0.75" : "0.65",
      });
    }
  }
  await fs.writeFile(path.join(PUBLIC_DIR, "sitemap-horticulture.xml"), generateUrlXml(horticultureUrls), "utf8");
  console.log(`✅ sitemap-horticulture.xml generated (${horticultureUrls.length} URLs)`);

  // 11. West Bengal Priority State Sitemap (All 147 City Hubs + Indexable Service Combos)
  const wbUrls: Array<{ loc: string; priority: string; changefreq: string }> = [];
  for (const city of wbCities) {
    wbUrls.push({
      loc: `${BASE_URL}/location/${city.slug}`,
      priority: city.tier === 1 ? "0.95" : city.tier === 2 ? "0.90" : "0.75",
      changefreq: "weekly",
    });
  }
  for (const s of ACS_SERVICES) {
    for (const city of indexableWbCities) {
      wbUrls.push({
        loc: `${BASE_URL}/services/${s.slug}/${city.slug}`,
        priority: city.tier === 1 ? "0.95" : city.tier === 2 ? "0.85" : "0.75",
        changefreq: "weekly",
      });
    }
  }
  await fs.writeFile(path.join(PUBLIC_DIR, "sitemap-west-bengal.xml"), generateUrlXml(wbUrls), "utf8");
  console.log(
    `✅ sitemap-west-bengal.xml generated (${wbUrls.length} URLs across ${wbCities.length} WB hubs / ${indexableWbCities.length} quality-gated service hubs)`
  );

  // 12. West Bengal 3-Tier Matrix: Partition 1 — Security (8 Services × 65 Core WB Hubs × 15 Industries)
  const wbMatrixSecUrls: Array<{ loc: string; priority: string; changefreq: string }> = [];
  for (const s of securityServices) {
    for (const city of coreIndustrialWbCities) {
      for (const ind of ACS_INDUSTRIES) {
        wbMatrixSecUrls.push({
          loc: `${BASE_URL}/services/${s.slug}/${city.slug}/${ind.slug}`,
          priority: city.tier === 1 ? "0.85" : "0.75",
          changefreq: "monthly",
        });
      }
    }
  }
  await fs.writeFile(
    path.join(PUBLIC_DIR, "sitemap-wb-matrix-security.xml"),
    generateUrlXml(wbMatrixSecUrls),
    "utf8"
  );
  console.log(`✅ sitemap-wb-matrix-security.xml generated (${wbMatrixSecUrls.length} URLs)`);

  // 13. West Bengal 3-Tier Matrix: Partition 2 — Facility & MEP (9 Services × 65 Core WB Hubs × 15 Industries)
  const wbMatrixFacUrls: Array<{ loc: string; priority: string; changefreq: string }> = [];
  for (const s of facilityServices) {
    for (const city of coreIndustrialWbCities) {
      for (const ind of ACS_INDUSTRIES) {
        wbMatrixFacUrls.push({
          loc: `${BASE_URL}/services/${s.slug}/${city.slug}/${ind.slug}`,
          priority: city.tier === 1 ? "0.85" : "0.75",
          changefreq: "monthly",
        });
      }
    }
  }
  await fs.writeFile(
    path.join(PUBLIC_DIR, "sitemap-wb-matrix-facility.xml"),
    generateUrlXml(wbMatrixFacUrls),
    "utf8"
  );
  console.log(`✅ sitemap-wb-matrix-facility.xml generated (${wbMatrixFacUrls.length} URLs)`);

  // 14. West Bengal 3-Tier Matrix: Partition 3 — Blue-Collar Manpower & Horticulture (9 Services × 65 Core WB Hubs × 15 Industries)
  const otherWbServices = [...manpowerServices, ...horticultureServices];
  const wbMatrixManUrls: Array<{ loc: string; priority: string; changefreq: string }> = [];
  for (const s of otherWbServices) {
    for (const city of coreIndustrialWbCities) {
      for (const ind of ACS_INDUSTRIES) {
        wbMatrixManUrls.push({
          loc: `${BASE_URL}/services/${s.slug}/${city.slug}/${ind.slug}`,
          priority: city.tier === 1 ? "0.85" : "0.75",
          changefreq: "monthly",
        });
      }
    }
  }
  await fs.writeFile(
    path.join(PUBLIC_DIR, "sitemap-wb-matrix-manpower.xml"),
    generateUrlXml(wbMatrixManUrls),
    "utf8"
  );
  console.log(`✅ sitemap-wb-matrix-manpower.xml generated (${wbMatrixManUrls.length} URLs)`);

  // 15. Master Index (sitemap.xml)
  const sitemapFiles = [
    "sitemap-west-bengal.xml",
    "sitemap-manpower-combos.xml",
    "sitemap-corridors.xml",
    "sitemap-industrial-parks.xml",
    "sitemap-wb-matrix-security.xml",
    "sitemap-wb-matrix-facility.xml",
    "sitemap-wb-matrix-manpower.xml",
    "sitemap-security.xml",
    "sitemap-facility.xml",
    "sitemap-manpower.xml",
    "sitemap-horticulture.xml",
    "sitemap-cities.xml",
    "sitemap-states.xml",
    "sitemap-core.xml",
  ];
  await fs.writeFile(path.join(PUBLIC_DIR, "sitemap.xml"), generateIndexXml(sitemapFiles), "utf8");
  console.log(`✅ sitemap.xml (master index) generated referencing ${sitemapFiles.length} child sitemaps`);

  const totalUnique =
    coreUrls.length +
    corridorUrls.length +
    parkUrls.length +
    stateUrls.length +
    cityUrls.length +
    securityUrls.length +
    facilityUrls.length +
    manpowerUrls.length +
    manpowerComboUrls.length +
    horticultureUrls.length +
    wbMatrixSecUrls.length +
    wbMatrixFacUrls.length +
    wbMatrixManUrls.length;

  console.log(`\n🎉 Total Sitemaps Generated: ${sitemapFiles.length} segmented + 1 master index`);
  console.log(`🎉 Total Indexable URLs across segmented category sitemaps: ${totalUnique}`);
}

main().catch(console.error);
