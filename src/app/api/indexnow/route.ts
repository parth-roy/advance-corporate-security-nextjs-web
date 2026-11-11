import fs from "node:fs/promises";
import path from "node:path";
import { timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { submitToIndexNow } from "@/lib/indexnow";

const DEFAULT_PRIORITY_SITEMAPS = [
  "sitemap-corridors.xml",
  "sitemap-industrial-parks.xml",
  "sitemap-manpower-combos.xml",
  "sitemap-west-bengal.xml",
];

function extractLocsFromXml(xml: string): string[] {
  const matches = xml.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g);
  return Array.from(matches, (m) => m[1]);
}

function tokensMatch(expected: string, provided: string): boolean {
  const a = Buffer.from(expected);
  const b = Buffer.from(provided);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function POST(request: Request) {
  const secretToken = process.env.INDEXNOW_SECRET_TOKEN?.trim();
  if (!secretToken) {
    return NextResponse.json(
      { error: "INDEXNOW_SECRET_TOKEN is not configured on the server" },
      { status: 503 }
    );
  }

  const authHeader = request.headers.get("authorization") || "";
  const provided = authHeader.startsWith("Bearer ") ? authHeader.slice(7).trim() : "";

  if (!provided || !tokensMatch(secretToken, provided)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { urls?: string[]; dryRun?: boolean } = {};
  try {
    body = (await request.json()) as { urls?: string[]; dryRun?: boolean };
  } catch {
    body = {};
  }

  let urlsToSubmit = Array.isArray(body.urls) ? body.urls : [];

  if (urlsToSubmit.length === 0) {
    const publicDir = path.resolve(process.cwd(), "public");
    const collected: string[] = [];
    for (const file of DEFAULT_PRIORITY_SITEMAPS) {
      try {
        const xml = await fs.readFile(path.join(publicDir, file), "utf8");
        collected.push(...extractLocsFromXml(xml));
      } catch {
        // Ignore if sitemap hasn't been generated yet
      }
    }
    urlsToSubmit = collected;
  }

  if (urlsToSubmit.length === 0) {
    return NextResponse.json(
      { error: "No valid canonical URLs found to submit" },
      { status: 400 }
    );
  }

  const result = await submitToIndexNow(urlsToSubmit, { dryRun: Boolean(body.dryRun) });
  const allOk = result.batches.every((b) => b.ok);

  return NextResponse.json(result, { status: allOk ? 200 : 502 });
}
