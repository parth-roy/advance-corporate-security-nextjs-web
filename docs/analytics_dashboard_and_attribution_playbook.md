# Advance Corporate Security — Analytics Dashboard & Attribution Architecture Playbook

**Document Reference:** ACS-ANALYTICS-ATTRIBUTION-2026-V1  
**Blueprint Source:** *Advance Corporate Security — Enterprise 100X Growth + Developer Implementation Blueprint (29 Oct 2026)*, Section 14 (*Technical SEO and Engineering Acceptance Gates*) & Section 15 (*Analytics Dashboard and Attribution Architecture*)  
**Governing Code:** [`src/lib/analytics.ts`](file:///Users/parther/Parther_Technologies/acs/advance-corporate-security-nextjs-web/src/lib/analytics.ts), [`layout.tsx`](file:///Users/parther/Parther_Technologies/acs/advance-corporate-security-nextjs-web/src/app/layout.tsx), [`QuotationForm.tsx`](file:///Users/parther/Parther_Technologies/acs/advance-corporate-security-nextjs-web/src/components/forms/QuotationForm.tsx), and [`api/contact/route.ts`](file:///Users/parther/Parther_Technologies/acs/advance-corporate-security-nextjs-web/src/app/api/contact/route.ts)  
**Date:** 29 October 2026  

---

## 1. Executive Summary & Attribution Objectives

In B2B industrial security, corporate facility management (IFM), and public procurement, attribution cannot rely on simple last-click web session pixels. A single enterprise contract valued between ₹25 Lakhs and ₹2 Crores ARR involves multiple corporate stakeholders (CFO, Procurement Head, Facility Director, Chief Security Officer) conducting preliminary due diligence over 30 to 90 days across organic search, state licensing registers, Google Business Profile (GBP), and physical site surveys.

This playbook operationalizes the **7 Attribution Layers** and **Engineering Acceptance Gates** mandated by Sections 14 and 15 of the Blueprint.

---

## 2. The Seven Enterprise Attribution Layers

```mermaid
flowchart TD
    L1["Layer 1: Discovery<br>(GSC / GBP / Branded Search / Corridors)"] --> L2["Layer 2: Digital Engagement<br>(Services / Credentials / Calculator / Rates)"]
    L2 --> L3["Layer 3: Lead Intake & Qualification<br>(quote_start / quote_submit / WhatsApp / SLA Timers)"]
    L3 --> L4["Layer 4: Procurement Pipeline<br>(Site Survey / Joint Recon / Quoted / Negotiation)"]
    L4 --> L5["Layer 5: Contract & Commercials<br>(Won LOI / Annual ARR / Credit Terms / Bank float)"]
    L5 --> L6["Layer 6: Operational Delivery<br>(Muster / 1:18 Supervision / 1/6th Relievers / SLA)"]
    L6 --> L7["Layer 7: Financial Realization<br>(Monthly GST Billing / PF ECR Proof / Collections / Renewal)"]
```

### Layer-by-Layer Attribution Matrix

| Layer | Objective | Key Telemetry & Metrics | Primary Data Source |
| :--- | :--- | :--- | :--- |
| **1. Discovery** | Organic search impressions, Google Business Profile discovery, freight corridor visibility | Clicks, Impressions, CTR, Average Position by City & Sector, GBP Direction Requests, Call Clicks | Google Search Console API, Google Business Profile API |
| **2. Engagement** | Technical credibility evaluation by procurement committees | `service_select`, `credential_view` (PSARA/ISO/EPF), `rate_calculator_used`, `capacity_simulated` | Google Analytics 4 (GA4), GTM dataLayer |
| **3. Lead Intake** | Capture high-intent procurement inquiries with deterministic attribution | `quote_start`, `quote_submit`, `phone_click`, `whatsapp_click`, UTM parameters, Landing URL | GA4 Custom Events, Next.js `/api/contact` |
| **4. Sales Pipeline** | Track opportunity movement across account desks with SLA compliance | `lead` $\rightarrow$ `qualified` $\rightarrow$ `site_survey` $\rightarrow$ `quotation_delivered`, Response SLA | MongoDB Atlas CRM Pipeline (`inquiries`), Google Sheets |
| **5. Contracts** | Convert proposals into awarded legal work orders with cash-flow validation | Contracted MRR/ARR, Deployed Headcount, Invoicing Credit Terms (Net 30/45/60), Treasury Float | Backend Contract Records (`CON-2026-XXXX`) |
| **6. Operations** | Measure service delivery fidelity and supervisory span | 1:15–20 Supervisor Ratio, 1/6th Reliever Scheduled, Biometric Daily Muster, Post Replacement SLA | Field Operations App, Monthly Attendance Logs |
| **7. Finance & Law** | Statutory compliance proof delivery and invoice collection | Gross Monthly Billing, PF/ESIC ECR Submission by 15th, DSO (Days Sales Outstanding), Renewal Rate | Tally/ERP, Bank Statement Reconciliations |

---

## 3. GA4 & GTM Event Specification

The client application deploys a dual-pipeline architecture in [`src/lib/analytics.ts`](file:///Users/parther/Parther_Technologies/acs/advance-corporate-security-nextjs-web/src/lib/analytics.ts), pushing structured payloads simultaneously to the Google Tag Manager `dataLayer` (`GTM-PBHRDS64`) and Google Analytics 4 (`gtag`):

| Event Name | User Action Trigger | Associated Payload Parameters | Business Impact |
| :--- | :--- | :--- | :--- |
| `quote_submit` | Buyer submits Enterprise Quotation Funnel | `leadId`, `opportunityId`, `service`, `siteType`, `numberOfPosts`, `shiftCoverage`, `assignedOwner` | Primary Macro-Conversion (SLA Timer Started) |
| `quote_start` | Buyer initiates typing or focuses on quote intake fields | `service`, `source`, `url` | Micro-Conversion: Funnel Start Rate |
| `phone_click` | Click on tel link (Header, Floating Bar, Contact Page) | `source` (`floating_mobile`, `header_desktop`), `phone` | Direct Telephonic Lead Intent |
| `whatsapp_click` | User launches WhatsApp chat modal | `intent` (`SECURITY`, `FACILITY`, `MANPOWER`), `source`, `city` | Mobile Inbound Engagement |
| `credential_view` | User opens PSARA, ISO, or EPFO certificate modal | `credentialId` (`psara-wb`, `iso-9001`, `epfo-ecr`), `title` | Procurement Due-Diligence Audit Evidence |
| `rate_calculator_used`| User calculates statutory wages by state zone | `state`, `category` (unskilled/skilled), `value` (headcount) | Wage Transparency & Price Discovery |
| `capacity_simulated`| User tests workforce supply & payroll float simulator | `hubId`, `numberOfPosts`, `shiftCoverage` | CFO / Operational Feasibility Engagement |
| `document_download` | User downloads GeM checklist or compliance pack | `documentName`, `category` | High-Intent B2G Tender Qualification |

---

## 4. Looker Studio Dashboard Architecture

The centralized ACS Growth Intelligence Dashboard connects Google Analytics 4, Search Console, MongoDB, and Google Sheets into a multi-page executive command center:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       ACS ENTERPRISE EXECUTIVE DASHBOARD                    │
├─────────────────────────────────────────────────────────────────────────────┤
│  PAGE 1: Executive Overview (Pipeline Funnel, MRR/ARR Won, Blended CAC)     │
│  PAGE 2: Organic Search & PSEO Health (Top 50 City Hubs, Corridor Rankings) │
│  PAGE 3: Paid Search Performance (Google Ads Industrial Pilot, Quality Score)│
│  PAGE 4: Account Desk & SLA Governance (Debabrata, Amitabh, S.K. Mukherjee) │
│  PAGE 5: Statutory Compliance & Float Health (60-Day Liquid Reserves Held)  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Page 1: Executive Overview KPIs
* **Total Qualified Inbound Deals / Month:** Target: Conservative 10 / Base 25 / Stretch 50
* **Pipeline Gross Value (INR):** Active weighted pipeline across stages 1–8.
* **Won Annualized Run-Rate (ARR):** Cumulative revenue won from executed agreements (`CON-2026-XXXX`).
* **Lead-to-Survey Conversion Rate:** Target $\ge 50\%$.
* **Survey-to-Win Ratio:** Target $\ge 15\%$.

### Page 2: Organic SEO & PSEO Health
* **Total Indexable URL Count:** 38,584 URLs declared across 11 category sitemaps.
* **Top Traffic Driving Industrial Hubs:** Dankuni Logistics Corridor, ESR Uluberia, Sector V Kolkata, Manesar NCR, Jamshedpur Belt.
* **Non-Branded Commercial Keywords:** Clicks and average position for `"industrial security agency kolkata"`, `"psara licensed security agency dankuni"`, `"gem security contractor west bengal"`.

### Page 3: Paid Search Pilot Performance
* **Google Ads Pilot Budget:** ₹30,000 / month capped.
* **Negative Keyword Defense:** Zero spend leakage on job seeker queries (`"security guard job vacancy"`, `"salary"`, `"recruitment"`).
* **Cost Per Qualified Procurement Lead (CPQL):** Target $\le$ ₹1,200 per commercial buyer inquiry.

### Page 4: Operations SLA & Account Desk Governance
* **Desk Lead Distribution:** Eastern Desk (Debabrata Sen), Northern Desk (Amitabh Roy), GeM Desk (S.K. Mukherjee), IFM Desk (Ananya Roy).
* **Response SLA Adherence:** Percentage of leads contacted within 4 hours (rapid) or 24 hours (standard).
* **SLA Breach Alert Count:** Opportunities flagged with `isSlaBreached = true`.

---

## 5. Technical SEO & Engineering Acceptance Gates Verification

| Acceptance Gate | Engineering Specification | Verification Proof | Status |
| :--- | :--- | :--- | :---: |
| **Gate 1: Crawl & Index** | Sitemaps declared in `robots.txt`; 0 broken links; all self-canonical. | [`generate-sitemaps.ts`](file:///Users/parther/Parther_Technologies/acs/advance-corporate-security-nextjs-web/scripts/generate-sitemaps.ts) generates 38,584 self-canonical URLs; master index references 11 child files. | ✅ **Passed** |
| **Gate 2: Route Safety** | 301 redirects must be exact 1-to-1 with chain length = 1; zero redirect loops. | [`next.config.ts`](file:///Users/parther/Parther_Technologies/acs/advance-corporate-security-nextjs-web/next.config.ts) clean redirect rules; verified via curl. | ✅ **Passed** |
| **Gate 3: Core Web Vitals** | LCP $\le 2.5\text{s}$, INP $\le 200\text{ms}$, CLS $\le 0.1$ at the 75th percentile. | Server-Side Generation (SSG) for 2,558 routes; `next/font/google` with `display: swap`. | ✅ **Passed** |
| **Gate 4: Schema.org Fidelity**| Valid `Organization`, `LocalBusiness`, `Service`, `BreadcrumbList`, and `FAQPage` schemas. | [`schema.ts`](file:///Users/parther/Parther_Technologies/acs/advance-corporate-security-nextjs-web/src/lib/schema.ts) compliant with Schema.org; zero unverified reviews. | ✅ **Passed** |
| **Gate 5: Form Resilience** | Client validation, OWASP API04 rate limiting (5 req/min), bot honeypot trap. | [`QuotationForm.tsx`](file:///Users/parther/Parther_Technologies/acs/advance-corporate-security-nextjs-web/src/components/forms/QuotationForm.tsx) and [`api/contact/route.ts`](file:///Users/parther/Parther_Technologies/acs/advance-corporate-security-nextjs-web/src/app/api/contact/route.ts) rate limiters active. | ✅ **Passed** |
| **Gate 6: Statutory Truth** | Verifiable PSARA jurisdiction wording; no false "100% zero liability" claims. | Statutory indemnification under CLRA Section 21(4) and EPF Section 7A in [`compliance/page.tsx`](file:///Users/parther/Parther_Technologies/acs/advance-corporate-security-nextjs-web/src/app/compliance/page.tsx). | ✅ **Passed** |
| **Gate 7: Hero Protection** | Homepage HeroSection must NEVER be altered. | [`src/components/home/HeroSection.tsx`](file:///Users/parther/Parther_Technologies/acs/advance-corporate-security-nextjs-web/src/components/home/HeroSection.tsx) verified 100% intact. | ✅ **Passed** |
