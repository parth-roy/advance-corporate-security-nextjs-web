// src/app/api/contact/route.ts
// ============================================================
// ACS — Unified Internal Contact & Procurement API Route
// Features: Server-side validation, Honeypot bot protection,
// Traceable Lead ID generation, Designated Account Owner routing,
// Internal backend proxy with zero CORS friction
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/lib/config";
import { syncToGoogleSheetsBackground } from "@/lib/sheetsSync";

// In-memory sliding window rate limiter (OWASP API04:2023 mitigation)
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;
const ipRequestCounts = new Map<string, { count: number; expiresAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = ipRequestCounts.get(ip);

  if (!record || now > record.expiresAt) {
    ipRequestCounts.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

// ─── Lead Ownership Routing Engine ───────────────────────────
// Enterprise Blueprint §1, §7, §13: Assign traceable internal account owner
export interface InternalLeadOwner {
  name: string;
  title: string;
  email: string;
  phone: string;
  desk: string;
}

export function assignLeadOwner(params: {
  city?: string;
  service?: string;
  formType?: string;
}): InternalLeadOwner {
  const serviceLower = (params.service || "").toLowerCase();
  const cityLower = (params.city || "").toLowerCase();

  // 1. Institutional / PSU / GeM Tenders
  if (
    serviceLower.includes("government") ||
    serviceLower.includes("psu") ||
    serviceLower.includes("defence") ||
    serviceLower.includes("tender") ||
    serviceLower.includes("gem")
  ) {
    return {
      name: "S. K. Mukherjee",
      title: "Senior Institutional Bids & GeM Procurement Officer",
      email: "tenders@advancecorporatesecurity.com",
      phone: "+91 94770 06681",
      desk: "Government & PSU Institutional Tender Desk",
    };
  }

  // 2. Integrated Facility Management & Corporate Housekeeping
  if (
    serviceLower.includes("facility") ||
    serviceLower.includes("housekeeping") ||
    serviceLower.includes("pest") ||
    serviceLower.includes("mep") ||
    serviceLower.includes("cleaning") ||
    serviceLower.includes("horticulture")
  ) {
    return {
      name: "Ananya Roy",
      title: "Head of Corporate Facility Management & Contracts",
      email: "facility@advancecorporatesecurity.com",
      phone: "+91 94770 06681",
      desk: "Corporate Facility & Housekeeping Solutions Desk",
    };
  }

  // 3. Delhi NCR / Northern Commercial Hub
  if (
    cityLower.includes("delhi") ||
    cityLower.includes("noida") ||
    cityLower.includes("gurgaon") ||
    cityLower.includes("gurugram") ||
    cityLower.includes("faridabad") ||
    cityLower.includes("ghaziabad") ||
    cityLower.includes("haryana")
  ) {
    return {
      name: "Amitabh Roy",
      title: "Regional Commercial Accounts & Operations Lead (Delhi NCR)",
      email: "delhi.desk@advancecorporatesecurity.com",
      phone: "+91 98310 12345",
      desk: "Northern Region Commercial Procurement Desk",
    };
  }

  // 4. Default: West Bengal & Eastern Industrial Corridors (Kolkata, Dankuni, Uluberia, etc.)
  return {
    name: "Debabrata Sen",
    title: "Senior Lead – Enterprise Accounts & Regional Procurement",
    email: "enterprise.east@advancecorporatesecurity.com",
    phone: "+91 94770 06681",
    desk: "Eastern Industrial & West Bengal Regional Operations Desk",
  };
}

export async function POST(req: NextRequest) {
  try {
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "anonymous";

    // ─── 0. Rate Limiting Check (OWASP API04:2023) ────────────
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many submission attempts. Please wait a minute or call our 24×7 hotline at +91 94770 06681.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const {
      name,
      email,
      phone,
      organization,
      service,
      city,
      message,
      fax_or_website,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      landingUrl,
      landing_url,
      shiftType,
    } = body;

    // ─── 1. Anti-Spam Honeypot Check ────────────────────────
    // If hidden bot trap field is filled out, silently return 200 OK
    // without forwarding or storing spam.
    if (fax_or_website) {
      return NextResponse.json({
        success: true,
        message: "Your message has been received.",
      });
    }

    // ─── 2. Server-side Validation ──────────────────────────
    if (!name?.trim()) {
      return NextResponse.json(
        { success: false, message: "Full name is required" },
        { status: 400 }
      );
    }
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "A valid email address is required" },
        { status: 400 }
      );
    }
    if (!phone?.trim() || phone.replace(/\D/g, "").length < 10) {
      return NextResponse.json(
        { success: false, message: "A valid 10-digit phone number is required" },
        { status: 400 }
      );
    }
    if (!message?.trim() || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, message: "Please provide your requirement description (minimum 5 characters)" },
        { status: 400 }
      );
    }

    // ─── 3. Traceable Lead ID & Stable Taxonomy IDs ─────────
    // Enterprise Blueprint §1, §7, §13: Traceable lead ID, stable taxonomy IDs & CRM stage
    const currentYear = new Date().getFullYear();
    const uniqueSuffix = (Date.now().toString(36) + Math.random().toString(36).slice(2, 4)).toUpperCase().slice(-5);
    const leadId = `ACS-${currentYear}-${uniqueSuffix}`;
    const opportunityId = `OPP-${currentYear}-${uniqueSuffix}`;
    const clientBase = (organization || email || "CORP").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6) || "ACS";
    const clientHash = Math.abs(
      (organization || email || "ACS").split("").reduce((acc: number, char: string) => (acc << 5) - acc + char.charCodeAt(0), 0)
    ).toString(16).toUpperCase().slice(0, 4);
    const clientId = `CLI-${clientBase}-${clientHash}`;
    const citySlug = (city || "WB").toUpperCase().replace(/[^A-Z]/g, "").slice(0, 6) || "KOL";
    const branchId = `BRN-${citySlug}-01`;

    const assignedOwner = assignLeadOwner({
      city,
      service,
      formType: body.formType,
    });

    const numberOfPosts = body.numberOfPosts || "";
    const shiftCoverage = body.shiftCoverage || shiftType || body.shiftType || "";
    const startDate = body.startDate || "";
    const siteType = body.siteType || "";
    const statutoryResponsibility = body.statutoryResponsibility || "Full ACS Statutory Scope (PF/ESIC/Bonus/Gratuity)";
    const isImmediate =
      startDate.toLowerCase().includes("immediate") ||
      (body.duration && body.duration.toLowerCase().includes("immediate"));
    const slaTarget = isImmediate
      ? "Within 4 Hours (Priority Rapid Mobilisation SLA)"
      : "Within 24 Hours (Standard Enterprise SLA)";
    const followUpDeadline = new Date(Date.now() + (isImmediate ? 4 : 24) * 60 * 60 * 1000).toISOString();

    // ─── 4. Sync to Google Sheets (Contact Leads or Service Inquiries) ─
    const isServiceInquiry =
      Boolean(body.manpowerCount) ||
      Boolean(body.numberOfPosts) ||
      Boolean(body.siteType) ||
      body.formType === "enterprise_quotation" ||
      Boolean(body.contractDuration) ||
      Boolean(body.duration) ||
      (body.service && body.service !== "General Enquiry" && body.service !== "General Contact");

    const sheetLeadPayload = {
      type: isServiceInquiry ? "inquiry" : "contact",
      id: leadId,
      leadId,
      opportunityId,
      clientId,
      branchId,
      stage: "lead",
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      organization: organization?.trim() || "",
      service: service?.trim() || (isServiceInquiry ? "Enterprise Service Quotation" : "General Enquiry"),
      city: city?.trim() || "",
      siteType: siteType,
      numberOfPosts: numberOfPosts,
      shiftCoverage: shiftCoverage,
      shiftType: shiftCoverage,
      manpowerCount: body.manpowerCount || "",
      startDate: startDate,
      statutoryResponsibility,
      duration: body.contractDuration || body.duration || "",
      message: message.trim(),
      assignedOwner: assignedOwner.name,
      assignedOwnerTitle: assignedOwner.title,
      assignedOwnerDesk: assignedOwner.desk,
      assignedOwnerEmail: assignedOwner.email,
      assignedOwnerPhone: assignedOwner.phone,
      slaTarget: slaTarget,
      followUpDeadline,
      leadStatus: "qualified_intake",
      source: isServiceInquiry ? "Enterprise Quotation / Procurement Funnel" : "Website Contact Form",
      utmSource: utm_source || body.utmSource || "",
      utmMedium: utm_medium || body.utmMedium || "",
      utmCampaign: utm_campaign || body.utmCampaign || "",
      utmTerm: utm_term || body.utmTerm || "",
      utmContent: utm_content || body.utmContent || "",
      landingUrl: landingUrl || landing_url || body.landingUrl || "",
    };

    syncToGoogleSheetsBackground(sheetLeadPayload);

    // ─── 5. Forward to Backend API ───────────────────────────
    const backendUrl = process.env.BACKEND_INTERNAL_URL || "http://localhost:4000";
    const backendPath = isServiceInquiry ? "/api/inquiry" : "/api/contact";
    let backendRes: Response | null = null;

    const backendPayload = {
      leadId,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      organization: organization?.trim() || "",
      service: service?.trim() || "General Enquiry",
      city: city?.trim() || "",
      siteType,
      message: message.trim(),
      numberOfPosts,
      shiftCoverage,
      shiftType: shiftCoverage,
      manpowerCount: body.manpowerCount || "",
      startDate,
      statutoryResponsibility,
      assignedOwner: assignedOwner.name,
      ownerDesk: assignedOwner.desk,
      slaTarget,
      utm_source: utm_source || body.utmSource || "",
      utm_medium: utm_medium || body.utmMedium || "",
      utm_campaign: utm_campaign || body.utmCampaign || "",
      landing_url: landingUrl || landing_url || body.landingUrl || "",
    };

    try {
      backendRes = await fetch(`${backendUrl}${backendPath}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-Forwarded-For": req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "",
        },
        body: JSON.stringify(backendPayload),
      });
    } catch (backendErr) {
      console.warn(`[API/contact] Local backend unavailable at ${backendPath}, attempting public API fallback:`, backendErr);
      try {
        backendRes = await fetch(`${siteConfig.apiUrl}${backendPath}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(backendPayload),
        });
      } catch (fallbackErr) {
        console.error("[API/contact] Public fallback also failed:", fallbackErr);
      }
    }

    if (backendRes && backendRes.ok) {
      const data = await backendRes.json();
      return NextResponse.json({
        ...data,
        data: {
          ...data.data,
          id: leadId,
          leadId,
          opportunityId,
          clientId,
          branchId,
          stage: "lead",
          assignedOwner: assignedOwner.name,
          assignedOwnerTitle: assignedOwner.title,
          assignedOwnerDesk: assignedOwner.desk,
          assignedOwnerEmail: assignedOwner.email,
          slaTarget,
          followUpDeadline,
          siteType,
          numberOfPosts,
          shiftCoverage,
          startDate,
        },
      });
    }

    // Graceful response with traceable lead metadata
    return NextResponse.json({
      success: true,
      message: "Your message has been delivered to ACS operations team!",
      data: {
        id: leadId,
        leadId,
        opportunityId,
        clientId,
        branchId,
        stage: "lead",
        assignedOwner: assignedOwner.name,
        assignedOwnerTitle: assignedOwner.title,
        assignedOwnerDesk: assignedOwner.desk,
        assignedOwnerEmail: assignedOwner.email,
        slaTarget,
        followUpDeadline,
        siteType,
        numberOfPosts,
        shiftCoverage,
        startDate,
      },
    });
  } catch (err: unknown) {
    console.error("[API/contact] Internal error:", err);
    return NextResponse.json(
      { success: false, message: "Unable to send message right now. Please call us directly at +91 94770 06681." },
      { status: 500 }
    );
  }
}
