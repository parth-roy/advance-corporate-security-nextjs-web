// src/lib/analytics.ts
// ============================================================
// ACS — Enterprise B2B Analytics & Attribution Engine (Blueprint §14 & §15)
// Dual-pipeline telemetry: Google Tag Manager (GTM) + Google Analytics 4 (GA4)
// Tracks the 7 Attribution Layers:
//   1. Discovery (GSC/GBP query & city hub)
//   2. Engagement (Service select, Credential view, Calculator simulation)
//   3. Lead Intake (quote_start, quote_submit, phone_click, whatsapp_click)
//   4. Sales & Pipeline Qualification
// ============================================================

export type AnalyticsEventType =
  | "service_select"
  | "quote_start"
  | "quote_submit"
  | "quote_request"
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "document_download"
  | "city_change"
  | "post_job_click"
  | "job_apply"
  | "credential_view"
  | "rate_calculator_used"
  | "capacity_simulated"
  | "tender_checklist_download";

export interface AnalyticsEventParams {
  category?: string;
  label?: string;
  value?: string | number;
  city?: string;
  service?: string;
  siteType?: string;
  numberOfPosts?: string;
  shiftCoverage?: string;
  leadId?: string;
  opportunityId?: string;
  assignedOwner?: string;
  source?: string;
  intent?: string;
  credentialId?: string;
  hubId?: string;
  state?: string;
  [key: string]: unknown;
}

/**
 * Safely dispatches an analytics event to GTM dataLayer and GA4 gtag
 */
export function trackEvent(event: AnalyticsEventType, params: AnalyticsEventParams = {}) {
  if (typeof window === "undefined") return;

  const eventPayload = {
    event,
    timestamp: new Date().toISOString(),
    url: window.location.pathname,
    ...params,
  };

  // 1. Google Tag Manager (GTM dataLayer)
  try {
    const win = window as unknown as { dataLayer?: Record<string, unknown>[] };
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push(eventPayload);
  } catch (gtmErr) {
    console.debug("[Analytics] GTM push notice:", gtmErr);
  }

  // 2. Google Analytics 4 (gtag direct telemetry)
  try {
    const winGtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof winGtag === "function") {
      winGtag("event", event, {
        event_category: params.category || "enterprise_conversion",
        event_label: params.label || params.service || event,
        value: typeof params.value === "number" ? params.value : undefined,
        ...params,
      });
    }
  } catch (ga4Err) {
    console.debug("[Analytics] GA4 gtag notice:", ga4Err);
  }

  // 3. Local Development Telemetry Log
  if (process.env.NODE_ENV === "development") {
    console.log(`[ACS Analytics Telemetry] 📊 ${event}:`, eventPayload);
  }
}
