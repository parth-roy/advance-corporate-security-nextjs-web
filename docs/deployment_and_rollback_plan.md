# ACS Enterprise Routing Governance, Deployment & Rollback Plan

**Target Application:** Advance Corporate Security (`advancecorporatesecurity.com`)  
**Standard:** Enterprise 100X Growth Blueprint — Section 3 (*Preserve, Consolidate or Improve — No Blind Redirects*) & Section 17 (Phase 3 & Phase 8)  
**Status:** Enforced & Validated  
**Last Updated:** 29 October 2026  

---

## 1. Core Principles: No Blind Redirects Policy

Per Section 3 of the *ACS Enterprise 100X Growth Blueprint*, arbitrary or bulk automated URL redirection is strictly prohibited:
1. **Preserve Current URL Equity:** Never delete, drop, or mass-redirect high-intent pages without verified 6–12 months Google Search Console (GSC) performance and traffic audit data.
2. **Zero Blind Wildcard Catch-Alls:** Patterns such as `/:city -> /location` or `/:service/:city -> /quote` are barred. Wildcard redirects erase localized relevance, trigger soft-404 algorithmic classifications in Google Search, and cause severe crawl-budget wastage.
3. **Exact 1-to-1 Intent Mapping:** Every redirect defined in `next.config.ts` must map to an identical user intent with a maximum chain length of **1** (Source ➔ Final Destination; zero intermediate hops).
4. **Self-Canonical Indexation:** All 824 city hubs, 17 service hubs, 6,601 service-city hubs, and matrix combinations specify self-referential canonical tags (`alternates: { canonical: url }`) and are accessible via static HTML (top 25 commercial nodes) or on-demand Incremental Static Regeneration (ISR).

---

## 2. Route Family Classifications

| Page Family | Blueprint Action | Production Implementation | Verification Standard |
| :--- | :---: | :--- | :--- |
| **Homepage, Core Services, `/quote`** | `KEEP + CRO` | Maintained without URL churn; conversion forms hardened with post/shift/start-date inputs & lead routing. | 0 redirect latency; mobile validation passing; honeypot active. |
| **Security & Facility Core Hubs** | `KEEP + UPGRADE` | Dedicated landing pages for Industrial Security & IFM; 17 specialized services mapped with technical procurement scopes. | 160h PSARA/MHA training standards; gear checklists; SLA escalation matrix. |
| **City × Service Templated Pages** | `KEEP + ENRICH` | All 824 cities enriched with localized minimum wage gazettes, industrial cluster mapping, and risk frameworks. | Zero thin-doorway boilerplate; fully indexable metadata; Schema.org LocalBusiness markup. |
| **Low-Value / Duplicate Locations** | `CONSOLIDATE SELECTIVELY` | Only confirmed municipal aliases (e.g. Gurgaon ➔ Gurugram) are 301 redirected. Zero bulk geographic drops. | Exact 1-to-1 mapping verified in `redirects_proposal.csv`. |
| **Compliance & Credentials** | `REVIEW + FACTUAL` | Effective-dated gazette notifications, statutory audit disclaimers, and CLRA Section 21(4) indemnification active. | Published circular numbers; EPFO/ESIC ceiling qualifiers displayed. |
| **Legacy WordPress Paths** | `REDIRECT (301)` | Clean 1-to-1 mappings in `next.config.ts` preserving historic external backlink equity and preventing 404 errors. | 0 redirect chains; 0 redirect loops; HTTP 301 response headers. |

---

## 3. Automated Route Health & Chain Verification

All redirects declared in `next.config.ts` adhere to the following automated validation rules:
- **Max Chain Length:** `<= 1`
- **Redirect Type:** `permanent: true` (HTTP 301)
- **Loop Prevention:** No redirect destination may match a source path.
- **Sitemap Consistency:** No redirected URL may appear in any XML sitemap. Every URL in `sitemap.xml` and child sitemaps must resolve with HTTP 200.

---

## 4. Rollback and Disaster Recovery Procedures

In the event of an unintended route collision, crawl degradation, or indexation anomaly:
1. **Source Control Rollback:**
   - All routing configurations are version-controlled in `next.config.ts`.
   - To roll back a route change, revert the specific commit:
     ```bash
     git revert <commit-hash>
     npm run build
     ```
2. **Zero Downtime Deployment:**
   - Next.js standalone output (`output: "standalone"`) ensures the new server artifact compiles and validates in isolation before PM2 reload or container swap.
3. **Edge Cache Invalidation:**
   - Invalidate CDN / edge cache for the affected paths immediately post-rollback:
     ```bash
     # Example CDN cache purge
     curl -X POST "https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/purge_cache" \
       -H "Authorization: Bearer ${CF_TOKEN}" \
       -d '{"files": ["https://advancecorporatesecurity.com/path-to-purge"]}'
     ```
4. **GSC URL Inspection & Re-crawl Request:**
   - Submit priority re-crawl for restored canonical URLs via Google Search Console URL Inspection tool.
