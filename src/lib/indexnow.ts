// ============================================================
// ACS — IndexNow Instant Indexing Helper (Bing, ChatGPT Search, Copilot, DDG)
// Submits canonical URLs in batches up to 10,000 per POST request.
// ============================================================

export const DEFAULT_INDEXNOW_KEY = "a8f4c2e91b7d40389e6f1c5a2d8b4e71";
export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
export const CANONICAL_HOST = "advancecorporatesecurity.com";
export const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

export interface IndexNowBatchResult {
  batchIndex: number;
  count: number;
  status: number;
  ok: boolean;
  message: string;
}

export function getIndexNowKey(): string {
  return process.env.NEXT_PUBLIC_INDEXNOW_KEY?.trim() || DEFAULT_INDEXNOW_KEY;
}

export function normalizeCanonicalUrls(urls: string[]): string[] {
  const valid: string[] = [];
  const seen = new Set<string>();

  for (const raw of urls) {
    if (typeof raw !== "string") continue;
    const trimmed = raw.trim();
    if (!trimmed.startsWith(`${CANONICAL_ORIGIN}/`) && trimmed !== CANONICAL_ORIGIN) {
      continue;
    }
    if (!seen.has(trimmed)) {
      seen.add(trimmed);
      valid.push(trimmed);
    }
  }

  return valid;
}

export async function submitToIndexNow(
  urls: string[],
  options: { dryRun?: boolean } = {}
): Promise<{
  totalSubmitted: number;
  keyLocation: string;
  batches: IndexNowBatchResult[];
}> {
  const key = getIndexNowKey();
  const keyLocation = `${CANONICAL_ORIGIN}/${key}.txt`;
  const cleanUrls = normalizeCanonicalUrls(urls);
  const batches: IndexNowBatchResult[] = [];

  for (let i = 0; i < cleanUrls.length; i += 10000) {
    const chunk = cleanUrls.slice(i, i + 10000);
    const batchIndex = Math.floor(i / 10000) + 1;

    if (options.dryRun) {
      batches.push({
        batchIndex,
        count: chunk.length,
        status: 200,
        ok: true,
        message: "Dry run verified payload structure",
      });
      continue;
    }

    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: CANONICAL_HOST,
        key,
        keyLocation,
        urlList: chunk,
      }),
    });

    batches.push({
      batchIndex,
      count: chunk.length,
      status: res.status,
      ok: res.ok,
      message: res.ok ? "Accepted by IndexNow" : await res.text().catch(() => res.statusText),
    });
  }

  return {
    totalSubmitted: cleanUrls.length,
    keyLocation,
    batches,
  };
}
