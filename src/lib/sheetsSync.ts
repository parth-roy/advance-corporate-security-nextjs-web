// src/lib/sheetsSync.ts
// ============================================================
// ACS Next.js — Unified Google Sheets Webhook Dispatcher
// Syncs to ACS-leads Spreadsheet Tabs:
//   1. "Contact Leads" (General contact queries)
//   2. "Service Inquiries" (Client quotation & booking requests)
//   3. "Posted Jobs" (Jobs posted via /post-job)
//   4. "job applications" (Candidate applications from /careers)
// ============================================================

export const DEFAULT_SHEETS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbwqvCAdwMy-eJDymjoJJh1nLyzueTY5g-CxLNddBFUAA073FXji5BLqGoXdMkhzR2Vi-Q/exec";

export function getGoogleSheetsWebhookUrl(): string {
  const url =
    process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
    process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL;

  if (url && !url.includes("YOUR_APPS_SCRIPT_DEPLOYMENT_ID")) {
    return url.trim();
  }

  // Fallback: Check local .env files if not yet loaded in process.env
  try {
    const fs = require("fs");
    const path = require("path");
    const envPaths = [
      path.resolve(process.cwd(), ".env.local"),
      path.resolve(process.cwd(), ".env"),
      path.resolve(process.cwd(), "advance-corporate-security-nextjs-web/.env.local"),
      path.resolve(process.cwd(), "../advance-corporate-security-nodejs-backend/.env"),
    ];
    for (const p of envPaths) {
      if (fs.existsSync(p)) {
        const raw = fs.readFileSync(p, "utf-8");
        const match = raw.match(/GOOGLE_SHEETS_WEBHOOK_URL\s*=\s*["']?([^"'\r\n]+)/);
        if (match && match[1] && !match[1].includes("YOUR_APPS_SCRIPT_DEPLOYMENT_ID")) {
          return match[1].trim();
        }
      }
    }
  } catch {}

  return DEFAULT_SHEETS_WEBHOOK_URL;
}

/**
 * Dispatches payload to Google Sheets webhook in background (non-blocking).
 * Uses child_process curl for reliable 302 redirect following on servers,
 * with graceful fallback to fetch.
 */
export async function syncToGoogleSheetsBackground(payload: Record<string, any>): Promise<void> {
  const webhookUrl = getGoogleSheetsWebhookUrl();
  if (!webhookUrl) return;

  const dataToSend = {
    ...payload,
    submittedAt:
      payload.submittedAt ||
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST",
  };

  const jsonStr = JSON.stringify(dataToSend);

  // 1. Try background curl (ideal for Node servers as it follows Google 302 redirects natively)
  try {
    const { execFile } = await import("child_process");
    execFile("curl", ["-s", "-L", "-d", jsonStr, webhookUrl], (err, stdout) => {
      if (err) {
        console.warn(`[GoogleSheets] Background curl notice (${payload.type}):`, err.message);
      } else {
        console.log(`[GoogleSheets] ✅ Sheet sync success (${payload.type}):`, stdout.slice(0, 120));
      }
    });
  } catch (curlErr) {
    // 2. Fallback to fetch
    try {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: jsonStr,
      }).catch((fetchErr) => {
        console.warn(`[GoogleSheets] Fallback fetch notice (${payload.type}):`, fetchErr?.message);
      });
    } catch {}
  }
}
