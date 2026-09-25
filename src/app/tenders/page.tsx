import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildWebPageSchema,
  serializeJsonLd,
} from "@/lib/schema";
import ClientMarquee from "@/components/common/ClientMarquee";

// ─────────────────────────────────────────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "Security Guard Tender & Government Contract Bids | ACS Procurement Hub",
  description:
    "ACS monitors CPPP, GeM & state e-procurement portals for security guard tenders. Pre-qualified PSARA-licensed vendor for government security service contracts. View active government tenders.",
  keywords: [
    "Security Guard Tender",
    "Government Security Contract Bid",
    "CPPP Security Tender",
    "GeM Security Services Tender",
    "PSARA Licensed Security Agency Tender",
    "Government Security Guard Tender India",
    "Railway Security Tender IREPS",
    "Defence Security Tender",
    "Hospital Security Tender",
    "University Security Contract",
    "Central Government Security Bid",
    "State Government Security Tender",
    "QCBS Security Tender",
    "Security Agency Pre-Qualification",
    "EPF ESIC Compliant Security Vendor",
    "ISO 9001 Security Agency Tender",
  ],
  alternates: {
    canonical: `${siteConfig.url}/tenders`,
  },
  openGraph: {
    title:
      "Security Guard Tender & Government Contract Bids | ACS Procurement Hub",
    description:
      "ACS monitors CPPP, GeM & state e-procurement portals for security guard tenders. PSARA-licensed, GeM-registered, ISO 9001:2015 certified — bid-ready for all government security service contracts.",
    url: `${siteConfig.url}/tenders`,
    images: [{ url: "/images/guarding.jpg", width: 1200, height: 630 }],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Static Data
// ─────────────────────────────────────────────────────────────────────────────

/** Active tender categories ACS participates in */
const TENDER_CATEGORIES = [
  {
    icon: "🏛️",
    title: "Central Govt & PSU Security Tenders",
    description:
      "Tenders from Central Ministries, CPWD premises, PSU complexes (Maharatna / Navratna / Miniratna), Income Tax Bhavans, autonomous bodies, and Central Secretariats floated via CPPP and GeM portals.",
    tags: ["CPPP", "GeM", "QCBS", "L1 Bidding"],
    highlight: "Most Active",
    highlightColor: "bg-sky-100 text-sky-800",
  },
  {
    icon: "🏢",
    title: "State Government Security Tenders",
    description:
      "Tenders from State Secretariats, District Collectorates, Zilla Parishads, State PSUs, Municipal Corporations, and Court Complexes via state e-procurement portals and direct tenders.",
    tags: ["State e-Proc", "Direct Tender", "Rate Contract"],
    highlight: "High Volume",
    highlightColor: "bg-emerald-100 text-emerald-800",
  },
  {
    icon: "🚆",
    title: "Railway & Defence Security Tenders",
    description:
      "IREPS-listed tenders from Railway Divisions, Zonal Headquarters, Metro Corporations, and non-core Defence establishment security bids via DPSUs and MES depots.",
    tags: ["IREPS", "DefPro", "Ex-Servicemen", "MES"],
    highlight: "Specialized",
    highlightColor: "bg-amber-100 text-amber-800",
  },
  {
    icon: "🏥",
    title: "Hospital & University Security Tenders",
    description:
      "Government-run AIIMS, Central/State Medical Colleges, ESI Hospitals, IITs, NITs, Central Universities, and Kendriya Vidyalayas floating security tenders with PSARA-compliant vendors.",
    tags: ["AIIMS", "ESI", "Kendriya Vidyalaya", "IIT/NIT"],
    highlight: "Growing Segment",
    highlightColor: "bg-violet-100 text-violet-800",
  },
] as const;

/** 12-point tender qualification checklist ACS satisfies */
const QUALIFICATION_CHECKLIST = [
  {
    point: "Valid PSARA License in relevant state",
    detail: "Form-V issued by Home Department; mandatory statutory permit.",
  },
  {
    point: "ISO 9001:2015 Quality Certification",
    detail: "IAF-accredited QMS covering recruitment, training & SLA delivery.",
  },
  {
    point: "EPF / ESIC Registration & monthly challans",
    detail:
      "13% EPF (incl. EDLI + admin) and 3.25% ESIC deposited without default.",
  },
  {
    point: "Labour License (CLRA Form IV / Form V)",
    detail:
      "Contract Labour (Regulation & Abolition) Act 1970 license for all deployments.",
  },
  {
    point: "PAN & GST Registration with GSTR filings",
    detail:
      "Active GSTIN with regular GSTR-1 & GSTR-3B; full ITC-eligible tax invoices.",
  },
  {
    point: "Audited Balance Sheet — 3 consecutive years",
    detail:
      "UDIN-verified CA turnover certificates and net worth statements available.",
  },
  {
    point: "Experience Certificate from Govt / PSU clients",
    detail:
      "Satisfactory performance certificates from central / state bodies and PSUs.",
  },
  {
    point: "Technical Bid Compliance (non-blacklisting affidavit)",
    detail:
      "Notarised affidavit affirming unblemished 25+ year record with no debarment.",
  },
  {
    point: "Performance Bank Guarantee (PBG) capacity",
    detail:
      "Nationalized bank solvency certificate and PBG issuance track record.",
  },
  {
    point: "Minimum Wage Compliance Track Record",
    detail:
      "Zero wage-theft history; full Central & State gazette wage adherence.",
  },
  {
    point: "Background Verification System in place",
    detail:
      "Police verification, antecedent screening, and reference checks for all deployed personnel.",
  },
  {
    point: "24×7 Control Room Operations",
    detail:
      "Round-the-clock command centre with motorized QRT supervisor patrolling.",
  },
] as const;

/** Government procurement portals */
const GOVT_PORTALS = [
  {
    name: "Central Public Procurement Portal (CPPP)",
    short: "CPPP",
    url: "https://cppp.gov.in",
    domain: "cppp.gov.in",
    icon: "🏛️",
    description:
      "Mandatory portal for all Central Government Ministry and Department tenders above prescribed thresholds. Real-time NIT / RFP notifications.",
    badgeClass: "bg-blue-100 text-blue-800",
  },
  {
    name: "Government e-Marketplace (GeM)",
    short: "GeM",
    url: "https://gem.gov.in",
    domain: "gem.gov.in",
    icon: "🛒",
    description:
      "ACS is an active GeM Seller for Guarding Services (SAC 998525). Supports Direct Purchase, L1 Comparison, Custom Bids, and Reverse Auction (RA).",
    badgeClass: "bg-emerald-100 text-emerald-800",
  },
  {
    name: "IREPS — Indian Railway e-Procurement System",
    short: "IREPS",
    url: "https://ireps.gov.in",
    domain: "ireps.gov.in",
    icon: "🚆",
    description:
      "Exclusive tender platform for Indian Railway workshops, zonal HQs, Metro Rail, and production units requiring security and labour services.",
    badgeClass: "bg-amber-100 text-amber-800",
  },
  {
    name: "DefPro — Defence Procurement Portal",
    short: "DefPro",
    url: "https://defpro.gov.in",
    domain: "defpro.gov.in",
    icon: "⭐",
    description:
      "Ministry of Defence portal for non-core area security, facility management, and housekeeping tenders at cantonment and MES locations.",
    badgeClass: "bg-red-100 text-red-800",
  },
] as const;

/** Government clients shown in the marquee text strip */
const GOVT_CLIENTS_MARQUEE = [
  "Indian Air Force",
  "Border Security Force (BSF)",
  "Central Pollution Control Board (CPCB)",
  "Indian Oil Corporation",
  "HAL Barrackpore",
  "ESI Hospital",
  "Metro Railway Kolkata",
  "Kendriya Vidyalaya Sangathan",
  "Indian Navy",
  "ICMR",
  "BSNL",
  "Ordnance Factory",
] as const;

/** FAQs for JSON-LD schema */
const TENDER_FAQS = [
  {
    question:
      "How does ACS stay updated on new government security tenders?",
    answer:
      "ACS monitors Central Public Procurement Portal (CPPP), Government e-Marketplace (GeM), IREPS, DefPro, and all major state e-procurement portals on a daily basis through dedicated procurement intelligence software and a full-time B2G bid management team.",
  },
  {
    question:
      "What makes ACS eligible to bid for Central Government security tenders?",
    answer:
      "ACS holds a valid PSARA Form-V license, ISO 9001:2015 certification, EPF/ESIC/CLRA registrations, active GSTIN with full ITC filings, 3+ years of UDIN-verified audited financials, a nationalized bank solvency certificate, and satisfactory work experience certificates from Central Government and PSU clients — making ACS fully pre-qualified for Central and State Government tender bids.",
  },
  {
    question:
      "Can ACS bid for QCBS-based security tenders under Quality and Cost Based Selection?",
    answer:
      "Yes. ACS participates in QCBS tenders where both technical quality scores and financial bids are evaluated. Our documented training programs, ISO compliance, ex-servicemen deployment, 24×7 control room, and low attrition metrics typically yield high technical scores.",
  },
  {
    question:
      "Does ACS have experience with GeM Custom Bids and Reverse Auctions?",
    answer:
      "Yes. ACS is an active GeM registered seller and has participated in GeM Custom Bids, L1 comparison procurement, and Reverse Auctions (RA) for Central and State government bodies. We comply with MoF guidelines on viable service charges and statutory minimum wages.",
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Page Component (Server Component — no 'use client')
// ─────────────────────────────────────────────────────────────────────────────
export default function TendersPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Tender & Procurement Hub", url: `${siteConfig.url}/tenders` },
  ];

  const webPageSchema = buildWebPageSchema({
    title:
      "Security Guard Tender & Government Contract Bids | ACS Procurement Hub",
    description: metadata.description as string,
    url: `${siteConfig.url}/tenders`,
  });

  const faqSchema = buildFaqSchema(TENDER_FAQS);

  return (
    <>
      {/* ── JSON-LD Schemas ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(buildBreadcrumbSchema(breadcrumbs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(webPageSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
        />
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          1. HERO — bg-navy dark
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white py-14 sm:py-20 relative overflow-hidden">
        {/* Subtle dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Blurred accent blobs */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-acs relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-400">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.url} className="flex items-center gap-1.5">
                  {i < breadcrumbs.length - 1 ? (
                    <>
                      <Link
                        href={crumb.url}
                        className="hover:text-sky transition-colors"
                      >
                        {crumb.name}
                      </Link>
                      <span aria-hidden="true" className="text-gray-600">
                        /
                      </span>
                    </>
                  ) : (
                    <span className="text-sky font-medium">{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* Credential badges */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="badge-gold">✅ PSARA Licensed</span>
            <span className="badge-sky">🛒 GeM Registered</span>
            <span className="badge-navy border border-white/20">
              ISO 9001:2015
            </span>
            <span className="badge-navy border border-white/20">
              25+ Years | Zero Blacklisting
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-white font-roboto font-black text-3xl sm:text-5xl lg:text-6xl leading-tight mb-4 max-w-5xl">
            Government Security{" "}
            <span className="text-sky">Tender Intelligence</span> &amp; Bid
            Support
          </h1>

          {/* Subtitle */}
          <p className="text-sky-200 font-roboto text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-4xl">
            ACS actively monitors <strong className="text-white">CPPP</strong>,{" "}
            <strong className="text-white">GeM</strong>, and all state
            e-procurement portals for security guard tenders — including{" "}
            <strong className="text-white">QCBS</strong> bids, Rate Contracts,
            and Custom Bids. As a pre-qualified PSARA-licensed vendor, ACS is
            bid-ready for Central Ministries, PSUs, Railways, Defence, Hospitals
            &amp; Universities.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap gap-4 items-center mb-10">
            <Link
              href="/contact"
              className="btn-primary text-sm px-7 py-3.5 shadow-lg"
              aria-label="Submit tender interest to ACS"
            >
              Submit Tender Interest
            </Link>
            <Link href="/procurement" className="btn-secondary text-sm px-6 py-3.5">
              Full Procurement Center →
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
              className="text-white font-medium text-sm hover:text-sky transition-colors flex items-center gap-2"
            >
              📞 B2G Bid Desk: {siteConfig.phone}
            </a>
          </div>

          {/* Quick stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/15 max-w-5xl">
            <div className="bg-white/10 border border-white/15 rounded-xl p-3.5 backdrop-blur-xs">
              <div className="text-gold font-bold text-sm mb-0.5">
                CPPP Registered
              </div>
              <div className="text-slate-200 text-xs">
                Central Govt NIT monitoring daily
              </div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-xl p-3.5 backdrop-blur-xs">
              <div className="text-sky font-bold text-sm mb-0.5">
                GeM Active Seller
              </div>
              <div className="text-slate-200 text-xs">
                Direct Purchase, RA &amp; Custom Bids
              </div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-xl p-3.5 backdrop-blur-xs">
              <div className="text-white font-bold text-sm mb-0.5">
                12/12 Checklist Met
              </div>
              <div className="text-slate-200 text-xs">
                Full pre-qualification dossier ready
              </div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-xl p-3.5 backdrop-blur-xs">
              <div className="text-gold font-bold text-sm mb-0.5">
                25+ Govt Clients
              </div>
              <div className="text-slate-200 text-xs">
                Defence, PSU, Hospital, University
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          2. ACTIVE TENDER CATEGORIES — bg-white
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="section-py bg-white" aria-labelledby="categories-heading">
        <div className="container-acs">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="section-label">Where ACS Actively Bids</p>
            <h2
              id="categories-heading"
              className="text-navy text-2xl sm:text-4xl font-roboto font-extrabold"
            >
              Active Tender Categories
            </h2>
            <div className="divider-sky mx-auto my-3" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              ACS participates across all major government security tender
              categories — from Central Ministries to state hospitals and
              railway workshops.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TENDER_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="card-acs bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col hover:border-sky-300"
              >
                {/* Icon + highlight badge row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{cat.icon}</span>
                  <span
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${cat.highlightColor}`}
                  >
                    {cat.highlight}
                  </span>
                </div>

                <h3 className="font-roboto font-bold text-navy text-base leading-snug mb-3">
                  {cat.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 flex-1">
                  {cat.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          3. TENDER QUALIFICATION CHECKLIST — bg-slate-50
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="section-py bg-slate-50 border-t border-b border-slate-200"
        aria-labelledby="checklist-heading"
      >
        <div className="container-acs">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="badge-gold text-xs uppercase mb-3 inline-block">
              Pre-Qualified &amp; Audit-Ready
            </span>
            <h2
              id="checklist-heading"
              className="text-navy text-2xl sm:text-4xl font-roboto font-extrabold"
            >
              Tender Qualification Checklist
            </h2>
            <div className="divider-sky mx-auto my-3" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              ACS meets all 12 standard tender pre-qualification parameters
              stipulated by Central and State government tender evaluation
              committees.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {QUALIFICATION_CHECKLIST.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 flex items-start gap-4 hover:border-emerald-300 hover:shadow-sm transition-all"
              >
                {/* Checkmark badge */}
                <span className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm flex items-center justify-center">
                  ✔
                </span>
                <div>
                  <p className="font-roboto font-bold text-navy text-sm leading-snug mb-1">
                    {item.point}
                  </p>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 bg-emerald-50 border border-emerald-200 rounded-2xl p-5 max-w-5xl mx-auto">
            <div>
              <p className="font-roboto font-bold text-emerald-900 text-sm sm:text-base">
                Need certified copies of these documents for your tender evaluation?
              </p>
              <p className="text-emerald-700 text-xs mt-0.5">
                Our pre-qualification dossier is ready for immediate submission.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-primary text-xs py-2.5 px-5 shrink-0"
            >
              Request Full Tender Dossier
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          4. KEY GOVERNMENT PORTALS — bg-white
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="section-py bg-white" aria-labelledby="portals-heading">
        <div className="container-acs">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="badge-sky text-xs uppercase mb-3 inline-block">
              Where Tenders Are Published
            </span>
            <h2
              id="portals-heading"
              className="text-navy text-2xl sm:text-4xl font-roboto font-extrabold"
            >
              Key Government Procurement Portals
            </h2>
            <div className="divider-sky mx-auto my-3" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              ACS tracks all four primary procurement portals where security
              guard and facility management tenders are published by the
              Government of India.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GOVT_PORTALS.map((portal) => (
              <div
                key={portal.short}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col hover:border-sky-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{portal.icon}</span>
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${portal.badgeClass}`}
                  >
                    {portal.short}
                  </span>
                </div>

                <h3 className="font-roboto font-bold text-navy text-sm leading-snug mb-2">
                  {portal.name}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-5 flex-1">
                  {portal.description}
                </p>

                <a
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold text-sky hover:text-navy transition-colors group-hover:underline"
                  aria-label={`Visit ${portal.name}`}
                >
                  🔗 {portal.domain}
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* Note box */}
          <div className="mt-10 bg-sky-50 border border-sky-200 rounded-2xl p-5 sm:p-6 flex gap-4 items-start max-w-4xl mx-auto">
            <span className="text-2xl shrink-0">💡</span>
            <div>
              <h4 className="font-roboto font-bold text-navy text-sm sm:text-base mb-1">
                ACS Actively Monitors All 4 Portals — Daily
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Our dedicated procurement intelligence team tracks new NITs,
                RFPs, and GeM Custom Bids published on these portals every
                business day. If your department has an upcoming security
                tender, contact our B2G desk — we may already be aware of
                your requirement and can respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          5. GOVERNMENT CLIENTS MARQUEE — bg-navy dark
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-navy py-10 sm:py-12 overflow-hidden" aria-label="Our government clients">
        <div className="container-acs mb-6">
          <div className="text-center">
            <p className="section-label text-sky-300">
              Trusted By Government Establishments
            </p>
            <h2 className="text-white font-roboto font-extrabold text-xl sm:text-2xl">
              Our Government Clients
            </h2>
          </div>
        </div>

        {/* Infinite scroll marquee — pure CSS, no JS, no hydration */}
        <div className="relative w-full overflow-hidden">
          {/* Left / right fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee whitespace-nowrap gap-0">
            {/* Duplicate items for seamless loop */}
            {[...GOVT_CLIENTS_MARQUEE, ...GOVT_CLIENTS_MARQUEE].map(
              (client, idx) => (
                <span
                  key={`${client}-${idx}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3 mx-2 bg-white/10 border border-white/15 rounded-full text-white font-roboto font-semibold text-sm whitespace-nowrap shrink-0 backdrop-blur-xs"
                >
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                  {client}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          6. CLIENT MARQUEE (logo cards) — reuse existing component
      ═══════════════════════════════════════════════════════════════════ */}
      <ClientMarquee bgClass="bg-white border-b border-gray-100" showCta={false} />

      {/* ═══════════════════════════════════════════════════════════════════
          7. TENDER BID SUPPORT FORM — bg-slate-50
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        id="tender-bid-support"
        className="section-py bg-slate-50 border-t border-slate-200"
        aria-labelledby="bid-support-heading"
      >
        <div className="container-acs">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Left: context */}
            <div>
              <span className="badge-sky text-xs uppercase mb-4 inline-block">
                B2G Tender Enquiry
              </span>
              <h2
                id="bid-support-heading"
                className="text-navy text-2xl sm:text-3xl lg:text-4xl font-roboto font-extrabold leading-tight mb-4"
              >
                Tender Bid Support &amp;{" "}
                <span className="text-sky">Procurement Desk</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Share your tender reference number and our senior procurement
                officers will review it, prepare a compliance checklist, and
                revert with ACS&apos;s capabilities and bid-readiness within
                24 hours.
              </p>

              {/* What we offer */}
              <ul className="space-y-3 text-sm text-slate-700">
                {[
                  "Technical bid documentation assistance",
                  "PSARA &amp; statutory compliance dossier",
                  "Manpower mobilisation plan for your location",
                  "Statutory wage &amp; financial bid preparation",
                  "Performance Bank Guarantee (PBG) arrangement",
                  "EMD / Earnest Money Deposit facilitation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="shrink-0 text-sky font-bold mt-0.5">✓</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>

              {/* Contact snippets */}
              <div className="mt-8 p-4 bg-white border border-slate-200 rounded-xl text-xs text-slate-600 space-y-2">
                <p className="flex items-center gap-2">
                  <span className="text-gold">📞</span>
                  <a
                    href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                    className="hover:text-navy font-medium transition-colors"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-gold">✉️</span>
                  <a
                    href={`mailto:${siteConfig.email}?subject=Government%20Tender%20Bid%20Enquiry`}
                    className="hover:text-navy font-medium transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-gold">📍</span>
                  <span>
                    {siteConfig.address.streetAddress},{" "}
                    {siteConfig.address.addressLocality},{" "}
                    {siteConfig.address.addressRegion} —{" "}
                    {siteConfig.address.postalCode}
                  </span>
                </p>
              </div>
            </div>

            {/* Right: form — native HTML, server-side, full SEO compatibility */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="font-roboto font-bold text-navy text-lg mb-1">
                Submit Tender Interest
              </h3>
              <p className="text-slate-500 text-xs mb-6">
                Fill in your details and we will respond within 24 business hours.
              </p>

              {/*
               * This is a plain HTML form for maximum SSR / SEO compatibility.
               * Submission is handled by the existing contact API route or can be
               * upgraded to a Client Component form action later.
               */}
              <form
                action="/api/contact"
                method="POST"
                className="space-y-4"
                aria-label="Tender interest enquiry form"
              >
                {/* Hidden field to distinguish source */}
                <input type="hidden" name="source" value="tenders-page" />
                <input type="hidden" name="subject" value="Government Tender Bid Enquiry" />

                {/* Name */}
                <div>
                  <label
                    htmlFor="tender-name"
                    className="block text-xs font-semibold text-slate-700 mb-1.5"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="tender-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky/50 focus:border-sky transition"
                  />
                </div>

                {/* Organisation */}
                <div>
                  <label
                    htmlFor="tender-org"
                    className="block text-xs font-semibold text-slate-700 mb-1.5"
                  >
                    Organisation / Department <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="tender-org"
                    name="organisation"
                    type="text"
                    required
                    autoComplete="organization"
                    placeholder="e.g. Kendriya Vidyalaya, Eastern Railway, CPCB"
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky/50 focus:border-sky transition"
                  />
                </div>

                {/* Tender Reference Number */}
                <div>
                  <label
                    htmlFor="tender-ref"
                    className="block text-xs font-semibold text-slate-700 mb-1.5"
                  >
                    Tender Reference Number
                  </label>
                  <input
                    id="tender-ref"
                    name="tender_reference"
                    type="text"
                    autoComplete="off"
                    placeholder="e.g. CPPP/2026/SEC/00123 (optional)"
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky/50 focus:border-sky transition"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="tender-phone"
                    className="block text-xs font-semibold text-slate-700 mb-1.5"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="tender-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky/50 focus:border-sky transition"
                  />
                </div>

                {/* Message (optional) */}
                <div>
                  <label
                    htmlFor="tender-message"
                    className="block text-xs font-semibold text-slate-700 mb-1.5"
                  >
                    Additional Notes
                  </label>
                  <textarea
                    id="tender-message"
                    name="message"
                    rows={3}
                    placeholder="Describe scope, location, guard strength required, or any special conditions..."
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky/50 focus:border-sky transition resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-primary w-full justify-center text-sm py-3 mt-1"
                >
                  Submit Tender Enquiry
                </button>

                <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                  By submitting, you agree to ACS contacting you regarding this
                  tender enquiry. We do not share your data with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          8. FAQ — bg-white
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="section-py bg-white border-t border-slate-100" aria-labelledby="faq-heading">
        <div className="container-acs max-w-4xl">
          <div className="text-center mb-10">
            <span className="badge-sky text-xs uppercase mb-3 inline-block">
              Common Questions
            </span>
            <h2
              id="faq-heading"
              className="text-navy text-2xl sm:text-3xl font-roboto font-extrabold"
            >
              Government Tender FAQs
            </h2>
            <div className="divider-sky mx-auto my-3" />
          </div>

          <div className="space-y-4">
            {TENDER_FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-slate-200 rounded-xl overflow-hidden bg-slate-50 shadow-2xs"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-roboto font-bold text-navy hover:bg-sky-50/50 transition-colors list-none text-sm sm:text-base">
                  <span>{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-sky shrink-0 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-4 bg-white">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          9. BOTTOM CTA — bg-navy
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="section-py bg-navy text-white text-center">
        <div className="container-acs max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-gold text-xs font-bold uppercase tracking-wider mb-5">
            🏛️ India&apos;s Trusted Government Security Partner
          </div>
          <h2 className="text-white font-roboto font-black text-2xl sm:text-4xl mb-4">
            Have a Tender? ACS is Bid-Ready.
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether it&apos;s a CPPP NIT, GeM Custom Bid, IREPS tender, or a
            direct state government contract — our B2G procurement desk is
            available 24×7 to assist with technical documentation, BOQ
            specifications, and formal bid submissions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary text-sm sm:text-base px-8 py-3.5 shadow-xl"
            >
              Submit Tender Interest
            </Link>
            <a
              href={`mailto:${siteConfig.email}?subject=Government%20Tender%20Bid%20Enquiry%20-%20ACS`}
              className="btn-secondary text-sm sm:text-base px-8 py-3.5"
            >
              Email Our Tender Desk
            </a>
          </div>
          <p className="text-gray-400 text-xs mt-6">
            Direct Helpline:{" "}
            <a
              href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
              className="hover:text-white transition-colors"
            >
              {siteConfig.phoneDisplay}
            </a>{" "}
            | {siteConfig.address.streetAddress},{" "}
            {siteConfig.address.addressLocality},{" "}
            {siteConfig.address.addressRegion} —{" "}
            {siteConfig.address.postalCode}
          </p>
        </div>
      </section>
    </>
  );
}
