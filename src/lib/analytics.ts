// src/lib/analytics.ts
// ============================================================
// ACS — Enterprise B2B Analytics & Micro-conversion Tracking
// Integrates with Google Tag Manager dataLayer
// Tracks: quote_request, whatsapp_click, phone_click, document_download
// ============================================================

export type AnalyticsEventType =
  | "quote_request"
  | "whatsapp_click"
  | "phone_click"
  | "document_download"
  | "city_change";

export interface AnalyticsEventParams {
  category?: string;
  label?: string;
  value?: string | number;
  city?: string;
  service?: string;
  source?: string;
  [key: string]: unknown;
}

/**
 * Safely push an analytics event to Google Tag Manager dataLayer
 */
export function trackEvent(event: AnalyticsEventType, params: AnalyticsEventParams = {}) {
  if (typeof window === "undefined") return;

  try {
    const dataLayer = ((window as unknown as { dataLayer?: Record<string, unknown>[] }).dataLayer =
      (window as unknown as { dataLayer?: Record<string, unknown>[] }).dataLayer || []);

    dataLayer.push({
      event,
      timestamp: new Date().toISOString(),
      ...params,
    });
  } catch (err) {
    console.debug("[Analytics] Failed to push event:", event, err);
  }
}
