// scripts/submit-indexnow.ts
// ============================================================
// Post-deploy CLI utility to push priority West Bengal sitemaps
// to Bing / ChatGPT Search / Copilot via IndexNow.
//
// Usage:
//   node --experimental-strip-types scripts/submit-indexnow.ts --dry-run
//   node --experimental-strip-types scripts/submit-indexnow.ts
// ============================================================

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, "../public");

const CANONICAL_HOST = "advancecorporatesecurity.com";
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;
const INDEXNOW_KEY =
  process.env.NEXT_PUBLIC_INDEXNOW_KEY?.trim() || "a8f4c2e91b7d40389e6f1c5a2d8b4e71";

const TARGET_SITEMAPS = [
  "sitemap-core.xml",
  "sitemap-corridors.xml",
  "sitemap-industrial-parks.xml",
  "sitemap-manpower-combos.xml",
  "sitemap-west-bengal.xml",
];

function extractLocs(xml: string): string[] {
  return Array.from(xml.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g), (m) => m[1]);
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const limitArg = args.find((a) => a.startsWith("--limit="));
  const limit = limitArg ? Number.parseInt(limitArg.split("=")[1], 10) : Infinity;

  const seen = new Set<string>();
  const urlList: string[] = [];

  for (const file of TARGET_SITEMAPS) {
    const filePath = path.join(PUBLIC_DIR, file);
    try {
      const xml = await fs.readFile(filePath, "utf8");
      for (const u of extractLocs(xml)) {
        if (!seen.has(u) && u.startsWith(`${CANONICAL_ORIGIN}/`)) {
          seen.add(u);
          urlList.push(u);
        }
      }
    } catch {
      console.warn(`⚠️ Missing sitemap file skipped: ${file}`);
    }
  }

  const finalUrls = Number.isFinite(limit) ? urlList.slice(0, limit) : urlList;
  const keyLocation = `${CANONICAL_ORIGIN}/${INDEXNOW_KEY}.txt`;

  console.log(`🚀 IndexNow URL Queue: ${finalUrls.length} canonical URLs`);
  console.log(`   Key Location: ${keyLocation}`);

  if (dryRun) {
    console.log("   Mode: DRY RUN (no external HTTP request sent)");
    console.log("   Sample first 5 URLs:", finalUrls.slice(0, 5));
    return;
  }

  for (let i = 0; i < finalUrls.length; i += 10000) {
    const chunk = finalUrls.slice(i, i + 10000);
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: CANONICAL_HOST,
        key: INDEXNOW_KEY,
        keyLocation,
        urlList: chunk,
      }),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => res.statusText);
      throw new Error(`IndexNow batch ${i / 10000 + 1} failed (${res.status}): ${errText}`);
    }
    console.log(`✅ Batch ${i / 10000 + 1} (${chunk.length} URLs) accepted (HTTP ${res.status})`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
