import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ACS_CITIES } from "../src/lib/cities.ts";
import { ACS_SERVICES } from "../src/lib/services.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, "../public");
const BASE_URL = "https://advancecorporatesecurity.com";
const TODAY = new Date().toISOString().split("T")[0];

function generateUrlXml(entries: Array<{ loc: string; lastmod?: string; changefreq?: string; priority?: string }>) {
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
  console.log("Generating XML sitemaps for ACS...");

  // 1. Core pages (9 URLs)
  const coreUrls = [
    { loc: `${BASE_URL}/`, priority: "1.0", changefreq: "weekly" },
    { loc: `${BASE_URL}/about`, priority: "0.8" },
    { loc: `${BASE_URL}/services`, priority: "0.9", changefreq: "weekly" },
    { loc: `${BASE_URL}/contact`, priority: "0.8" },
    { loc: `${BASE_URL}/clients`, priority: "0.7" },
    { loc: `${BASE_URL}/careers`, priority: "0.7", changefreq: "weekly" },
    { loc: `${BASE_URL}/gallery`, priority: "0.6" },
    { loc: `${BASE_URL}/location`, priority: "0.8", changefreq: "weekly" },
    { loc: `${BASE_URL}/quote`, priority: "0.8" },
  ];
  await fs.writeFile(path.join(PUBLIC_DIR, "sitemap-core.xml"), generateUrlXml(coreUrls), "utf8");
  console.log(`✅ sitemap-core.xml generated (${coreUrls.length} URLs)`);

  // 2. States (31 URLs)
  const uniqueStateSlugs = Array.from(new Set(ACS_CITIES.map((c) => c.stateSlug)));
  const stateUrls = uniqueStateSlugs.map((slug) => ({
    loc: `${BASE_URL}/location/state/${slug}`,
    priority: "0.75",
  }));
  await fs.writeFile(path.join(PUBLIC_DIR, "sitemap-states.xml"), generateUrlXml(stateUrls), "utf8");
  console.log(`✅ sitemap-states.xml generated (${stateUrls.length} URLs)`);

  // 3. City deployment hubs (829 URLs = 828 cities + /location)
  const cityUrls = [
    { loc: `${BASE_URL}/location`, priority: "0.85", changefreq: "weekly" },
    ...ACS_CITIES.map((c) => ({
      loc: `${BASE_URL}/location/${c.slug}`,
      priority: c.tier === 1 ? "0.8" : c.tier === 2 ? "0.7" : "0.6",
      changefreq: c.tier === 1 ? "weekly" : "monthly",
    })),
  ];
  await fs.writeFile(path.join(PUBLIC_DIR, "sitemap-cities.xml"), generateUrlXml(cityUrls), "utf8");
  console.log(`✅ sitemap-cities.xml generated (${cityUrls.length} URLs)`);

  // 4. Security & Safety (6,633 URLs)
  const securityServices = ACS_SERVICES.filter((s) => s.category === "security");
  const securityUrls = [
    { loc: `${BASE_URL}/services/security-safety`, priority: "0.9" },
    ...securityServices.map((s) => ({ loc: `${BASE_URL}/services/${s.slug}`, priority: "0.85" })),
  ];
  for (const s of securityServices) {
    for (const city of ACS_CITIES) {
      securityUrls.push({
        loc: `${BASE_URL}/services/${s.slug}/${city.slug}`,
        priority: city.tier === 1 ? "0.85" : "0.75",
      });
    }
  }
  await fs.writeFile(path.join(PUBLIC_DIR, "sitemap-security.xml"), generateUrlXml(securityUrls), "utf8");
  console.log(`✅ sitemap-security.xml generated (${securityUrls.length} URLs)`);

  // 5. Facility Management (4,146 URLs)
  const facilityServices = ACS_SERVICES.filter((s) => s.category === "facility");
  const facilityUrls = [
    { loc: `${BASE_URL}/services/facility-management`, priority: "0.9" },
    ...facilityServices.map((s) => ({ loc: `${BASE_URL}/services/${s.slug}`, priority: "0.85" })),
  ];
  for (const s of facilityServices) {
    for (const city of ACS_CITIES) {
      facilityUrls.push({
        loc: `${BASE_URL}/services/${s.slug}/${city.slug}`,
        priority: city.tier === 1 ? "0.8" : "0.7",
      });
    }
  }
  await fs.writeFile(path.join(PUBLIC_DIR, "sitemap-facility.xml"), generateUrlXml(facilityUrls), "utf8");
  console.log(`✅ sitemap-facility.xml generated (${facilityUrls.length} URLs)`);

  // 6. Manpower & Staffing (2,488 URLs)
  const manpowerServices = ACS_SERVICES.filter((s) => s.category === "manpower");
  const manpowerUrls = [
    { loc: `${BASE_URL}/services/placement-services`, priority: "0.85" },
    ...manpowerServices.map((s) => ({ loc: `${BASE_URL}/services/${s.slug}`, priority: "0.8" })),
  ];
  for (const s of manpowerServices) {
    for (const city of ACS_CITIES) {
      manpowerUrls.push({
        loc: `${BASE_URL}/services/${s.slug}/${city.slug}`,
        priority: city.tier === 1 ? "0.8" : "0.7",
      });
    }
  }
  await fs.writeFile(path.join(PUBLIC_DIR, "sitemap-manpower.xml"), generateUrlXml(manpowerUrls), "utf8");
  console.log(`✅ sitemap-manpower.xml generated (${manpowerUrls.length} URLs)`);

  // 7. Horticulture & Green (830 URLs)
  const horticultureServices = ACS_SERVICES.filter((s) => s.category === "horticulture");
  const horticultureUrls = [
    { loc: `${BASE_URL}/services/horticulture`, priority: "0.85" },
    { loc: `${BASE_URL}/services/horticulture-landscaping`, priority: "0.8" },
  ];
  for (const s of horticultureServices) {
    for (const city of ACS_CITIES) {
      horticultureUrls.push({
        loc: `${BASE_URL}/services/${s.slug}/${city.slug}`,
        priority: city.tier === 1 ? "0.75" : "0.65",
      });
    }
  }
  await fs.writeFile(path.join(PUBLIC_DIR, "sitemap-horticulture.xml"), generateUrlXml(horticultureUrls), "utf8");
  console.log(`✅ sitemap-horticulture.xml generated (${horticultureUrls.length} URLs)`);

  // 8. Master Index (sitemap.xml)
  const sitemapFiles = [
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

  const total =
    coreUrls.length +
    stateUrls.length +
    cityUrls.length +
    securityUrls.length +
    facilityUrls.length +
    manpowerUrls.length +
    horticultureUrls.length;

  console.log(`\n🎉 Total Sitemaps Generated: 7 categorized + 1 master index`);
  console.log(`🎉 Total Indexable URLs across all sitemaps: ${total}`);
}

main().catch(console.error);
