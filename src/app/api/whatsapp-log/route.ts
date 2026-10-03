// src/app/api/whatsapp-log/route.ts
// ============================================================
// ACS — WhatsApp Intent Logger API Route
// Syncs to "WhatsApp Messages" tab in Google Sheets via Apps Script,
// and forwards to ACS backend. Non-blocking & resilient.
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/lib/config";
import { syncToGoogleSheetsBackground } from "@/lib/sheetsSync";

// In-memory rate limiting check (OWASP mitigation)
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 10;
const ipCounts = new Map<string, { count: number; expiresAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = ipCounts.get(ip);
  if (!record || now > record.expiresAt) {
    ipCounts.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  record.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "anonymous";

    if (isRateLimited(clientIp)) {
      return NextResponse.json({ success: true, message: "Rate limit reached" });
    }

    const body = await req.json();
    const {
      name,
      fullName,
      phone,
      contactNumber,
      intent,
      service,
      deploymentLocation,
      headcount,
      organization,
      city,
      source,
    } = body;

    const cleanName = (name || fullName || "").trim();
    const cleanPhone = (phone || contactNumber || "").trim();
    const cleanLocation = (deploymentLocation || city || "").trim();

    // 1. Sync to Google Sheets "WhatsApp Messages" Tab via Apps Script
    syncToGoogleSheetsBackground({
      type: "whatsapp_message",
      name: cleanName,
      fullName: cleanName,
      phone: cleanPhone,
      contactNumber: cleanPhone,
      intent: intent || "SECURITY",
      service: service || "General",
      deploymentLocation: cleanLocation,
      headcount: headcount || "",
      organization: organization || "",
      city: city || "",
      source: source || "WhatsApp Intent Modal",
      submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST",
    });

    // 2. Forward to Backend (non-blocking)
    const backendUrl = process.env.BACKEND_INTERNAL_URL || "http://localhost:4000";
    fetch(`${backendUrl}/api/whatsapp-log`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Forwarded-For": clientIp,
      },
      body: JSON.stringify(body),
    }).catch(() => {
      // Graceful fallback if backend is offline
      try {
        fetch(`${siteConfig.apiUrl}/api/whatsapp-log`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }).catch(() => {});
      } catch {}
    });

    return NextResponse.json({
      success: true,
      message: "WhatsApp intent logged successfully",
      data: {
        name: cleanName,
        phone: cleanPhone,
        deploymentLocation: cleanLocation,
      },
    });
  } catch (err: unknown) {
    console.error("[API/whatsapp-log] Error:", err);
    // Always return 200 so user can proceed to WhatsApp seamlessly
    return NextResponse.json({ success: true, message: "Logged" });
  }
}
