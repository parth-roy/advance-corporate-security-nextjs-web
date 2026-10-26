// src/app/sitemap/page.tsx
// ============================================================
// ACS — Master HTML Sitemap & Pan-India Directory
// Enterprise Directory Architecture — Complete Index of 820+ Cities,
// 17 Enterprise Services, Eastern Logistics Corridors & Procurement Hubs
// ============================================================

import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Building2,
  FileCheck2,
  Scale,
  MapPin,
  Truck,
  FileText,
  Briefcase,
  Layers,
  ArrowRight,
  ExternalLink,
  Award,
  Sparkles,
  Search,
  CheckCircle2,
  Clock,
  Phone,
  FileSpreadsheet,
  Globe,
  SlidersHorizontal,
  ChevronRight,
  Calculator,
  UserCheck,
} from "lucide-react";
import { siteConfig } from "@/lib/config";
import { ACS_CITIES } from "@/lib/cities";
import { ACS_SERVICES } from "@/lib/services";
import { CORRIDORS, getAllCorridors } from "@/lib/corridors";
import { INDUSTRIAL_PARKS, getAllIndustrialParks } from "@/lib/industrialParks";
import { CASE_STUDIES, getAllCaseStudies } from "@/lib/caseStudies";
import { INSIGHTS, getAllInsights } from "@/lib/insights";
import { buildBreadcrumbSchema, serializeJsonLd } from "@/lib/schema";
import SitemapDirectoryClient, { StateGroup } from "./SitemapDirectoryClient";

export const metadata: Metadata = {
  title: "HTML Sitemap & Pan-India Directory | Advance Corporate Security",
  description:
    "Complete index of 820+ cities, 17 industrial services, eastern logistics corridors, and statutory procurement resources by Advance Corporate Security.",
  alternates: {
    canonical: `${siteConfig.url}/sitemap`,
  },
  openGraph: {
    title: "HTML Sitemap & Pan-India Directory | Advance Corporate Security",
    description:
      "Structured enterprise index of all national operating hubs, services, industrial corridors, and statutory procurement resources.",
    url: `${siteConfig.url}/sitemap`,
    images: [{ url: "/images/guarding.jpg", width: 1200, height: 630 }],
  },
};

const REGION_MAP: Record<
  string,
  "Eastern" | "Northern" | "Western" | "Southern" | "Central"
> = {
  "West Bengal": "Eastern",
  Odisha: "Eastern",
  Bihar: "Eastern",
  Jharkhand: "Eastern",
  Assam: "Eastern",
  Sikkim: "Eastern",
  Tripura: "Eastern",
  Meghalaya: "Eastern",
  Manipur: "Eastern",
  Mizoram: "Eastern",
  Nagaland: "Eastern",
  Andaman: "Eastern",

  Delhi: "Northern",
  Haryana: "Northern",
  "Uttar Pradesh": "Northern",
  Punjab: "Northern",
  Chandigarh: "Northern",
  "Himachal Pradesh": "Northern",
  Uttarakhand: "Northern",
  "Jammu and Kashmir": "Northern",
  Rajasthan: "Northern",

  Maharashtra: "Western",
  Gujarat: "Western",

  Karnataka: "Southern",
  "Tamil Nadu": "Southern",
  Telangana: "Southern",
  "Andhra Pradesh": "Southern",
  Kerala: "Southern",
  Puducherry: "Southern",

  "Madhya Pradesh": "Central",
  Chhattisgarh: "Central",
};

export default function HtmlSitemapPage() {
  const corridors = getAllCorridors();
  const industrialParks = getAllIndustrialParks();
  const caseStudies = getAllCaseStudies();
  const insights = getAllInsights();

  // Group cities by state
  const stateMap = new Map<string, StateGroup>();

  for (const city of ACS_CITIES) {
    if (!stateMap.has(city.state)) {
      stateMap.set(city.state, {
        state: city.state,
        stateSlug: city.stateSlug,
        isHQ: city.state === "West Bengal",
        region: REGION_MAP[city.state] || "Eastern",
        cities: [],
      });
    }

    stateMap.get(city.state)!.cities.push({
      name: city.name,
      slug: city.slug,
      tier: city.tier,
      aliases: city.aliases,
    });
  }

  // Sort: West Bengal first, then remaining states alphabetically
  const sortedStateGroups: StateGroup[] = Array.from(stateMap.values()).sort(
    (a, b) => {
      if (a.isHQ) return -1;
      if (b.isHQ) return 1;
      return a.state.localeCompare(b.state);
    }
  );

  // Group services by category
  const securityServices = ACS_SERVICES.filter((s) => s.category === "security");
  const facilityServices = ACS_SERVICES.filter((s) => s.category === "facility");
  const manpowerServices = ACS_SERVICES.filter((s) => s.category === "manpower");
  const horticultureServices = ACS_SERVICES.filter(
    (s) => s.category === "horticulture"
  );

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    {
      name: "HTML Sitemap & Pan-India Directory",
      url: `${siteConfig.url}/sitemap`,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(buildBreadcrumbSchema(breadcrumbs)),
        }}
      />

      <main className="min-h-screen bg-slate-50 text-slate-800">
        {/* ============================================================ */}
        {/* HERO SECTION                                                */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden bg-[#071429] text-white pt-16 pb-20 sm:pt-20 sm:pb-24 border-b border-slate-800">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-slate-400 mb-6"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-sky-400 font-medium">
                Website Directory & Site Index
              </span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-5">
                <Globe className="w-3.5 h-3.5" />
                <span>Enterprise Site Index & Pan-India Navigation Hub</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
                Website Directory &amp; Site Index
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8 max-w-3xl">
                Structured master index of all national operating hubs, services, industrial
                corridors, and procurement resources. Designed for enterprise buyers,
                statutory auditors, and search engine crawlers to navigate any operational
                hub or specialized service in two clicks.
              </p>

              {/* High-Level Enterprise Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2 border-t border-slate-800/80">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono">
                    820+
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Operational Cities in 31 States &amp; UTs
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    17
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Specialized Enterprise Services
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">
                    4 + 3
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Eastern Corridors &amp; Logistics Parks
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                    100%
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    PSARA, EPF &amp; ESIC Audited
                  </div>
                </div>
              </div>
            </div>

            {/* Quick In-Page Section Anchor Links */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400 font-semibold mr-1">
                Jump to Section:
              </span>
              <a
                href="#core-navigation"
                className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700"
              >
                Core Navigation
              </a>
              <a
                href="#enterprise-services"
                className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700"
              >
                17 Enterprise Services
              </a>
              <a
                href="#industrial-corridors"
                className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700"
              >
                Corridors &amp; Logistics Parks
              </a>
              <a
                href="#procurement-insights"
                className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700"
              >
                Procurement &amp; Regulatory Insights
              </a>
              <a
                href="#case-studies"
                className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700"
              >
                Case Studies
              </a>
              <a
                href="#geographic-directory"
                className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium transition-colors border border-sky-400 shadow-xs"
              >
                Pan-India Cities (820+)
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 1: CORE NAVIGATION & ENTERPRISE GOVERNANCE          */}
        {/* ============================================================ */}
        <section
          id="core-navigation"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 scroll-mt-20 border-b border-slate-200"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">
                <Building2 className="w-3.5 h-3.5" />
                <span>Primary Architecture</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Core Navigation &amp; Procurement Hubs
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Primary portals, statutory compliance documentation, and procurement decision tools.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* Home */}
            <Link
              href="/"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-sky-500 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold text-slate-400 group-hover:text-sky-600">
                  /
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-sky-500 group-hover:translate-x-0.5 transition-transform" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-700">
                Home Portal
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Main enterprise portal, executive leadership, client roster &amp; national capabilities.
              </p>
            </Link>

            {/* About */}
            <Link
              href="/about"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-sky-500 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold text-slate-400 group-hover:text-sky-600">
                  /about
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-sky-500 group-hover:translate-x-0.5 transition-transform" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-700">
                About Advance Corporate Security
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Founded 2000 in Kolkata by Jai Gopal Roy. Corporate ethos, ISO 9001:2015 track record.
              </p>
            </Link>

            {/* Credentials */}
            <Link
              href="/credentials"
              className="p-4 rounded-xl bg-white border border-amber-300/80 bg-amber-50/20 hover:border-amber-500 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold text-amber-700">
                  /credentials
                </span>
                <ShieldCheck className="w-4 h-4 text-amber-600" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-800">
                Statutory Credentials Vault
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Form-V PSARA licenses (WB, Delhi, Jharkhand), ISO certificates, GSTIN &amp; EPFO codes.
              </p>
            </Link>

            {/* Compliance */}
            <Link
              href="/compliance"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-sky-500 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold text-slate-400 group-hover:text-sky-600">
                  /compliance
                </span>
                <Scale className="w-4 h-4 text-slate-300 group-hover:text-sky-500" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-700">
                Statutory Compliance
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Zero-liability principal employer governance, ECR monthly receipts &amp; CLRA licensing.
              </p>
            </Link>

            {/* Procurement */}
            <Link
              href="/procurement"
              className="p-4 rounded-xl bg-white border border-sky-300/80 bg-sky-50/20 hover:border-sky-500 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold text-sky-700">
                  /procurement
                </span>
                <FileCheck2 className="w-4 h-4 text-sky-600" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-800">
                Enterprise Procurement Center
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                RFP tender drafting assistance, vendor onboarding documentation &amp; SLAs.
              </p>
            </Link>

            {/* Agency Comparison */}
            <Link
              href="/procurement/agency-comparison"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-sky-500 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold text-slate-400 group-hover:text-sky-600">
                  /procurement/agency-comparison
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-sky-500" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-700">
                Agency Comparison Matrix
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Technical benchmark: ACS vs. Local Unorganized Vendors vs. Tier-1 Multinational FM.
              </p>
            </Link>

            {/* Rate Card Calculator */}
            <Link
              href="/rate-card-calculator"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-sky-500 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold text-slate-400 group-hover:text-sky-600">
                  /rate-card-calculator
                </span>
                <Calculator className="w-4 h-4 text-slate-300 group-hover:text-sky-500" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-700">
                Manpower Cost &amp; Wage Calculator
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Instant statutory cost computation: Basic + VDA, EPF, ESIC, Bonus &amp; Service Charge.
              </p>
            </Link>

            {/* Request Audit */}
            <Link
              href="/request-audit"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-sky-500 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold text-slate-400 group-hover:text-sky-600">
                  /request-audit
                </span>
                <UserCheck className="w-4 h-4 text-slate-300 group-hover:text-sky-500" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-700">
                Request Facility &amp; Security Audit
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Schedule a complimentary on-site physical security vulnerability and compliance check.
              </p>
            </Link>

            {/* Tenders */}
            <Link
              href="/tenders"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-sky-500 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold text-slate-400 group-hover:text-sky-600">
                  /tenders
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-sky-500" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-700">
                Tender Empanelment &amp; GeM
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Public procurement empanelment, GeM 4.0 vendor code, PSU technical bidding.
              </p>
            </Link>

            {/* Case Studies */}
            <Link
              href="/case-studies"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-sky-500 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold text-slate-400 group-hover:text-sky-600">
                  /case-studies
                </span>
                <FileText className="w-4 h-4 text-slate-300 group-hover:text-sky-500" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-700">
                Enterprise Case Studies
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Empirical evidence across logistics parks, tech parks, and super-specialty hospitals.
              </p>
            </Link>

            {/* Insights */}
            <Link
              href="/insights"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-sky-500 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold text-slate-400 group-hover:text-sky-600">
                  /insights
                </span>
                <Sparkles className="w-4 h-4 text-slate-300 group-hover:text-sky-500" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-700">
                Regulatory Insights &amp; Articles
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Expert analysis on EPF Section 7A, West Bengal wage revisions, and GeM guidelines.
              </p>
            </Link>

            {/* Careers */}
            <Link
              href="/careers"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-sky-500 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold text-slate-400 group-hover:text-sky-600">
                  /careers
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-sky-500" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-700">
                Careers &amp; Guard Recruitment
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Training center in Barrackpore, guard verification, field officer recruitment.
              </p>
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-sky-500 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold text-slate-400 group-hover:text-sky-600">
                  /contact
                </span>
                <Phone className="w-4 h-4 text-slate-300 group-hover:text-sky-500" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-700">
                Operating Bases &amp; 24/7 Desk
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Kolkata HQ (Barrackpore), regional field hubs, 24/7 emergency dispatch helpline.
              </p>
            </Link>

            {/* Privacy Policy */}
            <Link
              href="/privacy-policy"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-sky-500 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold text-slate-400 group-hover:text-sky-600">
                  /privacy-policy
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-sky-500" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-700">
                Privacy Policy
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Data protection principles, NDA compliance, and corporate information handling.
              </p>
            </Link>

            {/* Terms of Service */}
            <Link
              href="/terms-of-service"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-sky-500 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold text-slate-400 group-hover:text-sky-600">
                  /terms-of-service
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-sky-500" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-700">
                Terms of Service
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Contractual agreements, jurisdiction terms, SLA parameters &amp; service conditions.
              </p>
            </Link>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 2: 17 ENTERPRISE SERVICES                            */}
        {/* ============================================================ */}
        <section
          id="enterprise-services"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 scroll-mt-20 border-b border-slate-200"
        >
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>17 Enterprise Offerings</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Enterprise Services Directory
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Direct access to our 17 ISO-certified and PSARA-governed service divisions.
            </p>
          </div>

          <div className="space-y-8">
            {/* 1. Security Services (8) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-600" />
                  <h3 className="text-base font-bold text-slate-900">
                    Physical Security &amp; Guarding Services
                  </h3>
                </div>
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 font-semibold">
                  8 Services
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {securityServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="p-3.5 rounded-xl border border-slate-150 bg-slate-50/50 hover:bg-white hover:border-sky-500 hover:shadow-xs transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-lg">{service.icon}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-sky-500 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-sky-700 leading-snug">
                        {service.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-sky-600 font-medium">
                      <span>/services/{service.slug}</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* 2. Facility Management Services (5 + Hub) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                  <h3 className="text-base font-bold text-slate-900">
                    Corporate Facility Management &amp; Engineering
                  </h3>
                </div>
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                  5 Services + Hub
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {facilityServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="p-3.5 rounded-xl border border-slate-150 bg-slate-50/50 hover:bg-white hover:border-emerald-500 hover:shadow-xs transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-lg">{service.icon}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 leading-snug">
                        {service.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-emerald-600 font-medium">
                      <span>/services/{service.slug}</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                ))}

                {/* Integrated Facility Management Core Hub */}
                <Link
                  href="/services/integrated-facility-management"
                  className="p-3.5 rounded-xl border border-emerald-300 bg-emerald-50/30 hover:bg-white hover:border-emerald-600 hover:shadow-xs transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-lg">🏢</span>
                      <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        Integrated Master Hub
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-800 leading-snug">
                      Integrated Facility Management (IFM)
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Comprehensive single-vendor soft and hard FM services for Grade-A tech parks and campuses.
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-emerald-100 flex items-center justify-between text-[11px] text-emerald-700 font-medium">
                    <span>/services/integrated-facility-management</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </div>
            </div>

            {/* 3. Manpower Outsourcing & Payroll (3) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                  <h3 className="text-base font-bold text-slate-900">
                    Manpower Outsourcing &amp; Statutory Payroll
                  </h3>
                </div>
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold">
                  3 Services
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {manpowerServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="p-3.5 rounded-xl border border-slate-150 bg-slate-50/50 hover:bg-white hover:border-indigo-500 hover:shadow-xs transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-lg">{service.icon}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-indigo-700 leading-snug">
                        {service.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-indigo-600 font-medium">
                      <span>/services/{service.slug}</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* 4. Horticulture & Specialized Engineering (1) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-600" />
                  <h3 className="text-base font-bold text-slate-900">
                    Horticulture &amp; Landscape Maintenance
                  </h3>
                </div>
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200 font-semibold">
                  1 Service
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {horticultureServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="p-3.5 rounded-xl border border-slate-150 bg-slate-50/50 hover:bg-white hover:border-teal-500 hover:shadow-xs transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-lg">{service.icon}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-teal-500 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-teal-700 leading-snug">
                        {service.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-teal-600 font-medium">
                      <span>/services/{service.slug}</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 3: INDUSTRIAL CORRIDORS & LOGISTICS PARKS            */}
        {/* ============================================================ */}
        <section
          id="industrial-corridors"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 scroll-mt-20 border-b border-slate-200"
        >
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
              <Truck className="w-3.5 h-3.5" />
              <span>Eastern India Infrastructure</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Eastern Industrial Corridors &amp; Logistics Parks
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Specialized security protocols, gate SOPs, and shrinkage mitigation across major eastern economic arteries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Corridors Column */}
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  4 Major Industrial Corridors
                </h3>
                <span className="font-mono text-xs text-slate-500">4 Routes</span>
              </div>

              <div className="space-y-3">
                {corridors.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/corridors/${c.slug}`}
                    className="block p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-500 hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                        {c.state} Corridor
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-800">
                      {c.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {c.description}
                    </p>
                    <div className="mt-2 text-[11px] text-amber-700 font-mono">
                      /corridors/{c.slug}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Logistics Parks Column */}
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                  3 Grade-A Logistics Parks
                </h3>
                <span className="font-mono text-xs text-slate-500">3 Hubs</span>
              </div>

              <div className="space-y-3">
                {industrialParks.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/industrial-parks/${p.slug}`}
                    className="block p-4 rounded-xl bg-white border border-slate-200 hover:border-sky-500 hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-sky-50 text-sky-800 border border-sky-200">
                        {p.location}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-sky-500 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-800">
                      {p.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {p.overview}
                    </p>
                    <div className="mt-2 text-[11px] text-sky-700 font-mono">
                      /industrial-parks/{p.slug}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 4: PROCUREMENT GUIDES & REGULATORY INSIGHTS          */}
        {/* ============================================================ */}
        <section
          id="procurement-insights"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 scroll-mt-20 border-b border-slate-200"
        >
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-1">
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Advisory &amp; Compliance Hub</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Procurement Decision Guides &amp; Regulatory Insights
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Authoritative briefings on EPF Section 7A liability, GeM 4.0 minimum service charge guidelines, and wage rate structuring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 4 Regulatory Insights */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-3 mb-4 border-b border-slate-100 flex items-center justify-between">
                <span>Regulatory Briefings &amp; Analysis</span>
                <span className="font-mono text-xs text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                  4 Articles
                </span>
              </h3>

              <div className="space-y-4">
                {insights.map((insight) => (
                  <Link
                    key={insight.slug}
                    href={`/insights/${insight.slug}`}
                    className="block p-3.5 rounded-xl border border-slate-150 bg-slate-50/50 hover:bg-white hover:border-indigo-500 hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                      <span className="font-semibold text-indigo-600">
                        {insight.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {insight.readTime}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-indigo-800 leading-snug">
                      {insight.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                      {insight.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* 5 Specialized Procurement Guides */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-3 mb-4 border-b border-slate-100 flex items-center justify-between">
                <span>Procurement Frameworks &amp; Checklists</span>
                <span className="font-mono text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  5 Guides
                </span>
              </h3>

              <div className="space-y-3">
                <Link
                  href="/procurement/agency-comparison"
                  className="block p-3.5 rounded-xl border border-slate-150 bg-slate-50/50 hover:bg-white hover:border-emerald-500 hover:shadow-xs transition-all group"
                >
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-800">
                    Security &amp; Facility Agency Comparison Matrix
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    10-point audit matrix contrasting ACS with unorganized local contractors and multinational FM providers.
                  </p>
                </Link>

                <Link
                  href="/procurement/gem-security-tender-checklist"
                  className="block p-3.5 rounded-xl border border-slate-150 bg-slate-50/50 hover:bg-white hover:border-emerald-500 hover:shadow-xs transition-all group"
                >
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-800">
                    GeM Security Services Tender Checklist (2026)
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    DoE OM F.6/1/2023-PPD 3.85% floor rate compliance, GFR 170/171 rules, and technical scoring guidelines.
                  </p>
                </Link>

                <Link
                  href="/procurement/how-to-read-a-manpower-cost-sheet"
                  className="block p-3.5 rounded-xl border border-slate-150 bg-slate-50/50 hover:bg-white hover:border-emerald-500 hover:shadow-xs transition-all group"
                >
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-800">
                    How to Read an Industrial Manpower Cost Sheet
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Line-by-line statutory breakdown: Basic, VDA, HRA, EPF (13%), ESIC (3.25%), Bonus, Gratuity, and Uniform allowances.
                  </p>
                </Link>

                <Link
                  href="/procurement/psara-license-verification-checklist"
                  className="block p-3.5 rounded-xl border border-slate-150 bg-slate-50/50 hover:bg-white hover:border-emerald-500 hover:shadow-xs transition-all group"
                >
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-800">
                    PSARA Form-V License Verification Checklist
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    7-step legal checklist to verify security agency Form-V validity, controlling authority seals, and jurisdiction coverage.
                  </p>
                </Link>

                <Link
                  href="/procurement/security-minimum-wages-west-bengal"
                  className="block p-3.5 rounded-xl border border-slate-150 bg-slate-50/50 hover:bg-white hover:border-emerald-500 hover:shadow-xs transition-all group"
                >
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-800">
                    West Bengal Security Minimum Wages Schedule (Zone A &amp; B)
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Official wage gazette circulars for security guards, head guards, and supervisors across Zone A and Zone B.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 5: ENTERPRISE CASE STUDIES                           */}
        {/* ============================================================ */}
        <section
          id="case-studies"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 scroll-mt-20 border-b border-slate-200"
        >
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">
              <Award className="w-3.5 h-3.5" />
              <span>Measurable Outcomes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Enterprise Case Studies
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Empirical evidence detailing risk mitigation, 100% statutory ECR compliance, and SLA execution across Eastern India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-sky-500 hover:shadow-xs transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      Case Study
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-sky-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-800 leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-3">
                    {study.executiveSummary}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-sky-700 font-medium">
                  <span>Read Full Audit</span>
                  <span className="font-mono text-[11px] text-slate-400">
                    /case-studies/{study.slug}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 6: PAN-INDIA GEOGRAPHIC DIRECTORY (820+ CITIES)     */}
        {/* ============================================================ */}
        <section
          id="geographic-directory"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 scroll-mt-20"
        >
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>National Footprint</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Pan-India Geographic Directory ({ACS_CITIES.length} Cities)
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Complete index of operational hubs across 28 states and union territories. Click any
              city link for localized PSARA licensing details, wage frameworks, and rapid deployment options.
            </p>
          </div>

          {/* Interactive Client Search & Filter Component */}
          <SitemapDirectoryClient
            initialStateGroups={sortedStateGroups}
            totalCities={ACS_CITIES.length}
          />
        </section>

        {/* ============================================================ */}
        {/* TECHNICAL SEARCH ENGINE DIRECTORY & FAST INDEX STRIP         */}
        {/* ============================================================ */}
        <section className="bg-slate-100 border-t border-slate-200 py-10 text-xs text-slate-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-slate-200">
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  Machine-Readable Sitemaps &amp; AI Crawler Resources
                </h4>
                <p className="text-slate-500 max-w-2xl">
                  Advance Corporate Security maintains dedicated, automated XML sitemaps partitioned
                  by service vertical and geography to adhere strictly to search engine crawl budget guidelines.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 font-mono">
                <Link
                  href="/sitemap.xml"
                  className="px-2.5 py-1 rounded bg-white border border-slate-200 hover:border-sky-400 text-sky-700 hover:text-sky-800 transition-colors"
                >
                  sitemap.xml
                </Link>
                <Link
                  href="/sitemap-cities.xml"
                  className="px-2.5 py-1 rounded bg-white border border-slate-200 hover:border-sky-400 text-sky-700 hover:text-sky-800 transition-colors"
                >
                  sitemap-cities.xml
                </Link>
                <Link
                  href="/sitemap-security.xml"
                  className="px-2.5 py-1 rounded bg-white border border-slate-200 hover:border-sky-400 text-sky-700 hover:text-sky-800 transition-colors"
                >
                  sitemap-security.xml
                </Link>
                <Link
                  href="/sitemap-west-bengal.xml"
                  className="px-2.5 py-1 rounded bg-white border border-slate-200 hover:border-sky-400 text-sky-700 hover:text-sky-800 transition-colors"
                >
                  sitemap-west-bengal.xml
                </Link>
                <Link
                  href="/robots.txt"
                  className="px-2.5 py-1 rounded bg-white border border-slate-200 hover:border-sky-400 text-slate-700 hover:text-sky-800 transition-colors"
                >
                  robots.txt
                </Link>
                <Link
                  href="/llms.txt"
                  className="px-2.5 py-1 rounded bg-white border border-slate-200 hover:border-sky-400 text-slate-700 hover:text-sky-800 transition-colors"
                >
                  llms.txt
                </Link>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-[11px]">
              <div>
                © {new Date().getFullYear()} {siteConfig.name} ({siteConfig.shortName}). All rights reserved. GSTIN: {siteConfig.gstin}.
              </div>
              <div className="flex items-center gap-4 font-medium">
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                  className="text-slate-700 hover:text-sky-700 transition-colors flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-sky-600" />
                  <span>24/7 Operations: {siteConfig.phone}</span>
                </a>
                <Link
                  href="/quote"
                  className="px-3 py-1 rounded bg-[#0b1f3f] text-white hover:bg-[#1a3660] transition-colors"
                >
                  Request Fast Proposal
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
