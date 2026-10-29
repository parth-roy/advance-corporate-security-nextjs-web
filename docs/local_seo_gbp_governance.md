# Google Business Profile (GBP) & Local SEO Governance Framework
**Advance Corporate Security (ACS)**  
*Document Version:* 1.0.0  
*Effective Date:* 29 October 2026  
*Governing Standard:* Google Business Profile Guidelines & Enterprise Blueprint §9  

---

## 1. Single Source of Truth — Canonical NAP Identity

ACS maintains a **single authoritative headquarters location** on Google Business Profile to protect domain reputation and prevent policy suspensions for multi-location spam.

| Entity Attribute | Canonical Value | Code Source of Truth |
| :--- | :--- | :--- |
| **Business Name** | Advance Corporate Security | [`siteConfig.name`](../src/lib/config.ts) |
| **Primary Category** | Security Guard Service | Schema: `SecurityService` / `LocalBusiness` |
| **Secondary Categories** | Security Service, Corporate Facility Management | OfferCatalog Schema |
| **Street Address** | 1/2, Bhattacharjee Para Lane, Barrackpore | [`siteConfig.address.streetAddress`](../src/lib/config.ts) |
| **City / Locality** | Kolkata | [`siteConfig.address.addressLocality`](../src/lib/config.ts) |
| **State / Region** | West Bengal | [`siteConfig.address.addressRegion`](../src/lib/config.ts) |
| **Postal Code** | 700120 | [`siteConfig.address.postalCode`](../src/lib/config.ts) |
| **Country** | India (IN) | [`siteConfig.address.addressCountry`](../src/lib/config.ts) |
| **Primary Phone** | +91 93399 88999 | [`siteConfig.phones[0]`](../src/lib/config.ts) |
| **Operations Desk** | +91 79801 47044 | [`siteConfig.phones[1]`](../src/lib/config.ts) |
| **Emergency / Tenders** | +91 94770 06681 | [`siteConfig.phones[2]`](../src/lib/config.ts) |
| **Geo Coordinates** | Lat: 22.7591° N, Lng: 88.3655° E | [`siteConfig.geo`](../src/lib/config.ts) |
| **Operating Hours** | Open 24 Hours / 7 Days a week | LocalBusiness `OpeningHoursSpecification` |

---

## 2. Strict Anti-Suspension Rules (Doorway & Virtual Office Ban)

Google enforces severe algorithmic and manual penalties against service businesses creating phantom physical listings. ACS strictly enforces the following boundaries:

1. **Zero Virtual Office Listings:** Never register Regus, shared co-working desks, residential addresses, or virtual mailbox services as secondary Google Business Profiles in Howrah, Dankuni, Durgapur, Siliguri, Delhi, or Ranchi.
2. **Service-Area Business (SAB) Model:** All coverage outside Barrackpore is managed as an authorized Service Area within the primary profile, defining designated radii across West Bengal, Delhi NCR, and Jharkhand.
3. **Physical Eligibility Threshold for New Profiles:** A new GBP pin may ONLY be opened if ACS possesses:
   - A dedicated registered lease agreement in the company's name.
   - Permanent physical exterior signage visible from the street.
   - Dedicated on-site operations and recruitment staff during declared business hours.

---

## 3. Monthly Visual Proof Schedule (Authentic Media Cadence)

Stock photography triggers lower engagement and algorithmic deprioritization. The regional marketing team uploads 4–6 genuine field photos on the 1st of every month:

| Cadence | Photo Category | Description & Guidelines |
| :--- | :--- | :--- |
| **Week 1** | **Office & Central Control Room** | Real photos of the Barrackpore headquarters, dispatch desks, and 24×7 monitoring screens. |
| **Week 2** | **Tactical Guard Training** | Physical drills, fire safety demonstrations, crowd management simulations, and classroom instruction. |
| **Week 3** | **Mobile Supervision & Vehicles** | Marked patrol inspection cars/motorcycles with GPS antennas, supervisor field briefing, and equipment audits. |
| **Week 4** | **Approved Client Site Operations** | Guard posts at industrial gates, weighbridges, and corporate receptions (**strictly with prior written client sign-off**). |

---

## 4. Ethical Client Review Management

### 4.1 Collection Protocol
- **Target Audience:** Commercial plant heads, procurement managers, warehouse facility leads, and HR directors.
- **Timing:** Following the first successful quarterly SLA review or contract milestone.
- **Strict Compliance:** Zero monetary incentives, zero gift cards, zero employee-written reviews, zero review gating (filtering unhappy clients).

### 4.2 Standard Response Templates (Signed by ACS Management)

#### Positive Feedback Response:
> *"Thank you [Client Name / Company] for your trust in Advance Corporate Security. Delivering rigorous PSARA-compliant guarding, 100% statutory ECR transparency, and active mobile supervisor oversight across your [Site Type / Facility] remains our highest priority. We look forward to our continued partnership. — Debabrata Sen, Enterprise Operations Desk, Advance Corporate Security."*

#### Critical / Issue Resolution Response:
> *"Thank you for bringing this to our direct attention. At Advance Corporate Security, we operate with a strict 3-tier escalation framework and zero tolerance for service deviation. Our Area Operations Manager has been dispatched to investigate this matter directly with your site supervisor. Please connect with our Head of Operations at +91 94770 06681 so we can resolve this immediately. — Management Desk, Advance Corporate Security."*

---

## 5. Campaign Tracking & Closed-Loop Attribution

All links embedded in Google Business Profile buttons and posts MUST include standard UTM tags for accurate attribution in Google Analytics 4 (GA4):

| GBP Link Target | Canonical URL with UTM Parameters |
| :--- | :--- |
| **Website Button** | `https://advancecorporatesecurity.com/?utm_source=google&utm_medium=gbp&utm_campaign=primary_listing` |
| **Request Quote Button** | `https://advancecorporatesecurity.com/quote?utm_source=google&utm_medium=gbp&utm_campaign=primary_listing_quote` |
| **Services Link** | `https://advancecorporatesecurity.com/services/security-guard?utm_source=google&utm_medium=gbp&utm_campaign=primary_listing_service` |
