// src/app/services/integrated-facility-management/page.tsx
// ============================================================
// ACS Integrated Facility Management (IFM) Enterprise Solutions Page
// Section 18 & 32 Implementation — High-Margin Service Bundling
// Hard Security + Corporate Housekeeping + MEP + Pest Control + Horticulture
// ============================================================

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { buildBreadcrumbSchema, buildServiceSchema, buildFaqSchema, serializeJsonLd } from "@/lib/schema";
import { ShieldCheck, Sparkles, Wrench, Bug, Trees, Building2, CheckCircle2, ArrowRight, Layers, FileCheck, PhoneCall, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Integrated Facility Management (IFM) Services India | ACS Enterprise Solutions",
  description:
    "Single-vendor integrated facility management bundling PSARA security guarding, mechanized housekeeping, MEP maintenance, pest control, and facade cleaning with unified SLA accountability.",
  keywords: [
    "Integrated facility management India",
    "IFM solutions Kolkata",
    "Corporate facility management bundling",
    "Commercial housekeeping and security vendor",
    "Single vendor facility management SLA",
    "Hard and soft facility management",
    "Hospital IFM services",
    "IT park facility management West Bengal",
    "Mechanized cleaning and guarding contract",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/integrated-facility-management`,
  },
  openGraph: {
    title: "Integrated Facility Management (IFM) Services | Advance Corporate Security",
    description:
      "Bundle security, corporate housekeeping, and MEP maintenance under a single contract with zero statutory liability.",
    url: `${siteConfig.url}/services/integrated-facility-management`,
    images: [{ url: "/images/facility-management-image.jpg", width: 1200, height: 630 }],
  },
};

const IFM_PILLARS = [
  {
    title: "1. PSARA-Licensed Security & Access Control",
    icon: <ShieldCheck className="w-6 h-6 text-sky" />,
    badge: "Hard Security",
    description:
      "24×7 manned guarding, CCTV control room operators, biometric contractor gate passes, under-vehicle scanning, and GPS night wand patrolling.",
    benefits: ["Zero perimeter trespassing", "Material shrinkage < 0.05%", "Discreet dispute de-escalation"],
  },
  {
    title: "2. Mechanized Housekeeping & Sanitization",
    icon: <Sparkles className="w-6 h-6 text-emerald-600" />,
    badge: "Soft Services",
    description:
      "Automated ride-on scrubber-driers, high-pressure washing, hospital-grade deep sanitization, washroom hygiene consumables, and waste segregation.",
    benefits: ["NABH/JCI hospital compliance", "Odor-free, gleaming corporate floors", "Color-coded microfibre sanitization"],
  },
  {
    title: "3. MEP Engineering & Infrastructure Maintenance",
    icon: <Wrench className="w-6 h-6 text-amber-600" />,
    badge: "Engineering Support",
    description:
      "Preventive and reactive maintenance for HT/LT electrical panels, diesel generators (DG sets), central HVAC chillers, STP/WTP plants, and plumbing.",
    benefits: ["99.9% power uptime continuity", "Quarterly preventive maintenance (PPM)", "First-responder emergency repairs"],
  },
  {
    title: "4. Specialized Pest Control & Facade Cleaning",
    icon: <Bug className="w-6 h-6 text-red-600" />,
    badge: "Specialized Services",
    description:
      "Herbal cockroach gel baiting, rodent glue traps for warehouses, subterranean termite treatment, and cradle-operated high-rise exterior glass facade cleaning.",
    benefits: ["HACCP compliant pest safety", "Certified cradle rope-access riggers", "Zero chemical residue or toxicity"],
  },
  {
    title: "5. Corporate Horticulture & Grounds Keeping",
    icon: <Trees className="w-6 h-6 text-emerald-700" />,
    badge: "Green Solutions",
    description:
      "Lawn mowing, automated drip irrigation, seasonal floral plantation, tree pruning, indoor desk planters, and manicured green grounds maintenance.",
    benefits: ["Pristine corporate aesthetics", "Eco-friendly organic manures", "Daily grounds maintenance crew"],
  },
];

const ifmFaqs = [
  {
    question: "What is Integrated Facility Management (IFM) and why should we bundle services?",
    answer:
      "Integrated Facility Management (IFM) consolidates all hard services (security guarding, MEP engineering) and soft services (housekeeping, pest control, facade cleaning, horticulture) under a single master service contract. Instead of coordinating with 4 or 5 separate contractors who point fingers during incidents, you get single-vendor accountability, one consolidated monthly invoice, and an integrated compliance dossier.",
  },
  {
    question: "How does bundling services with ACS reduce operational costs?",
    answer:
      "Clients achieve 15% to 20% in cost efficiencies through shared management overhead, synchronized supervisor rounds, consolidated procurement of industrial cleaning chemicals and machinery, and unified PF/ESIC payroll administration.",
  },
  {
    question: "How does ACS handle Service Level Agreements (SLAs) across multiple services?",
    answer:
      "We assign a dedicated On-Site Facility Operations Manager as your single point of contact. All services operate under measurable Key Performance Indicators (KPIs) reviewed during monthly and quarterly governance meetings.",
  },
  {
    question: "Can ACS scale from a single corporate office to nationwide multi-site facilities?",
    answer:
      "Yes. With operational presence across 800+ cities in India and centralized corporate command in Barrackpore, Kolkata, ACS seamlessly standardizes facility management across your headquarters, regional branches, and manufacturing hubs.",
  },
];

export default function IntegratedFacilityManagementPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: "Integrated Facility Management", url: `${siteConfig.url}/services/integrated-facility-management` },
  ];

  const serviceSchema = buildServiceSchema({
    name: "Integrated Facility Management (IFM)",
    description:
      "Single-vendor bundled security, corporate housekeeping, MEP engineering, and specialized soft services with zero statutory liability.",
    slug: "integrated-facility-management",
  });

  const faqSchema = buildFaqSchema(ifmFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildBreadcrumbSchema(breadcrumbs)) }}
      />
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(serviceSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
        />
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-[#0d2458] to-[#012154] text-white pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(0,82,204,0.22),transparent)] pointer-events-none" />
        <div className="container-acs relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-sky-300 mb-4">
              <Layers className="w-4 h-4 text-gold" />
              Unified Enterprise Facility Solutions
            </div>
            <h1 className="text-3xl md:text-5xl font-black font-roboto leading-tight mb-5">
              Integrated Facility Management <br />
              <span className="text-gold">(IFM) Solutions</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
              Consolidate security, mechanized housekeeping, MEP maintenance, and soft services under a single, audit-proof contract. Eliminate vendor blame-shifting and reduce facility overheads by up to 20%.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Single-Vendor SLA Accountability
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> One Consolidated Monthly Invoice
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Employer-of-Record Indemnity
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Consolidate: Comparison Table */}
      <section className="section-py bg-white">
        <div className="container-acs">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-sky">Operational Efficiency</span>
            <h2 className="text-2xl md:text-3xl font-black text-navy mt-1 font-roboto">
              Fragmented Vendors vs. ACS Integrated Management
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Managing 4 different contractors drains administrative hours and creates dangerous compliance blind spots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* The Disparate Model (Pain) */}
            <div className="bg-red-50/60 rounded-2xl p-6 md:p-8 border border-red-200">
              <div className="flex items-center gap-2 mb-4 text-red-700 font-bold text-sm uppercase tracking-wider">
                <span>The Traditional Fragmented Model</span>
              </div>
              <ul className="space-y-3.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span>Multiple vendor contracts with conflicting supervisor lines and blame-shifting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span>Uncoordinated shift handovers leaving gates and critical utility rooms unmanned.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span>Multiple PF/ESIC compliance checks; exponential risk of Section 7A liability.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span>Duplicated administrative fees and conflicting chemical/machinery procurement.</span>
                </li>
              </ul>
            </div>

            {/* The ACS IFM Model (Solution) */}
            <div className="bg-blue-50/80 rounded-2xl p-6 md:p-8 border border-blue-200">
              <div className="flex items-center gap-2 mb-4 text-navy font-bold text-sm uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-sky" />
                <span>The ACS Integrated Model</span>
              </div>
              <ul className="space-y-3.5 text-xs text-slate-800">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dedicated On-Site Facility Manager as your single operational point of contact.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Synchronized shift handovers with integrated security watch and housekeeping logbooks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>One unified "Monthly Compliance Pack" verifying 100% PF/ESIC deposits across all staff.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Consolidated rate card yielding up to 20% in direct administrative and equipment savings.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 IFM Pillars */}
      <section className="section-py bg-slate-50 border-t border-slate-200">
        <div className="container-acs">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-sky">Comprehensive Capabilities</span>
            <h2 className="text-2xl md:text-3xl font-black text-navy mt-1 font-roboto">
              The 5 Pillars of ACS Integrated Facility Management
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              End-to-end hard and soft services delivered by trained, background-verified workforce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {IFM_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-sky/50 hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                      {pillar.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider bg-blue-50 text-sky px-2.5 py-1 rounded-full">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-navy text-base mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                  {pillar.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Quick Quote Card */}
            <div className="bg-gradient-to-br from-navy to-[#012154] text-white rounded-2xl p-6 flex flex-col justify-between shadow-md">
              <div>
                <span className="text-xs font-bold text-gold uppercase tracking-wider">
                  Custom Enterprise Proposal
                </span>
                <h3 className="text-xl font-black font-roboto mt-1 mb-3">
                  Tailored IFM Blueprint for Your Facility
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Request a comprehensive walk-through by our Technical Director to model the exact manpower, equipment, and cost savings for your premises.
                </p>
              </div>

              <div className="space-y-2">
                <Link
                  href="/request-audit"
                  className="w-full block text-center py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl transition shadow-md"
                >
                  Request Facility Walk-Through &amp; Audit →
                </Link>
                <Link
                  href="/rate-card-calculator"
                  className="w-full block text-center py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl transition"
                >
                  Calculate Bundled Rate Card
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-py bg-white border-t border-slate-200">
        <div className="container-acs max-w-4xl">
          <div className="text-center mb-10">
            <span className="text-xs font-black uppercase tracking-wider text-sky">Procurement Clarity</span>
            <h2 className="text-2xl md:text-3xl font-black text-navy mt-1 font-roboto">
              Integrated Facility Management FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {ifmFaqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-5 border border-slate-200 shadow-xs">
                <h3 className="text-sm md:text-base font-bold text-navy mb-2 flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-sky/10 text-sky text-xs flex items-center justify-center shrink-0 mt-0.5">
                    Q
                  </span>
                  {faq.question}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
