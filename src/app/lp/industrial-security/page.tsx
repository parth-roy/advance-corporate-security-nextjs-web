import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { buildBreadcrumbSchema, serializeJsonLd, buildWebPageSchema } from "@/lib/schema";
import IndustrialSecurityLeadForm from "@/components/forms/IndustrialSecurityLeadForm";
import ClientMarquee from "@/components/common/ClientMarquee";
import {
  ShieldCheck,
  Phone,
  MessageSquare,
  CheckCircle2,
  Truck,
  ScanLine,
  Fingerprint,
  Radio,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Security & Plant Guarding | Audit-Ready PSARA Agency | ACS",
  description:
    "Audit-ready industrial security and plant guarding for manufacturing plants, logistics hubs, and infrastructure facilities. PSARA Form-V licensed, ISO 9001:2015 certified, 1:15 supervisory ratio, zero Section 7A EPF liability, and 24–48h mobilization across Eastern India.",
  keywords: [
    "Industrial security services",
    "Plant security guard agency",
    "Manufacturing plant guarding",
    "Warehouse security contractors",
    "Weighbridge security guards",
    "Industrial security Eastern India",
    "PSARA licensed industrial security Kolkata",
    "Factory gate pass security system",
    "QRT emergency security team",
  ],
  alternates: {
    canonical: `${siteConfig.url}/lp/industrial-security`,
  },
  openGraph: {
    title: "Audit-Ready Industrial Security & Plant Guarding | Advance Corporate Security",
    description:
      "Enterprise security solutions for plant heads, operations directors, and procurement chiefs. 24–48h mobilization with 100% statutory indemnity.",
    url: `${siteConfig.url}/lp/industrial-security`,
    images: [{ url: "/images/guarding.jpg", width: 1200, height: 630 }],
  },
};

const OPERATIONAL_PILLARS = [
  {
    number: "01",
    title: "24/7 Gate & Weighbridge Tare/Gross Calibration Control",
    icon: Truck,
    subtitle: "Zero-Tolerance Scrap, Raw Material & Finished Goods Protection",
    description:
      "Dual-operator physical and digital reconciliation of gross and tare weight at inbound and outbound weighbridges. We eliminate driver collusion, empty-load tampering, invoice duplication, and clandestine scrap diversion.",
    features: [
      "Gross & tare calibration cross-checked with ERP delivery orders",
      "Driver biometric validation, cabin search, and undercarriage mirror sweep",
      "Tamper-proof container seal logging and high-resolution CCTV snapshotting",
      "Daily scrap segregation and unauthorized material exit deterrence",
    ],
  },
  {
    number: "02",
    title: "RFID Patrol Wand Perimeter Monitoring",
    icon: ScanLine,
    subtitle: "Time-Stamped Electronic Verification Across Critical Boundaries",
    description:
      "Guards equipped with ruggedized RFID patrol wands scan electronic checkpoints every 45 minutes along boundary walls, dark corners, transformer yards, and storage zones. Cloud-synced muster logs guarantee zero skipped rounds.",
    features: [
      "GPS-tagged patrol waypoints spaced every 50 meters along perimeters",
      "Automated SMS/Email alerts to Field Officers on missed waypoints",
      "Anti-intrusion fence integrity inspection and anti-scaling monitoring",
      "Daily automated compliance reports shared with Plant Security In-Charge",
    ],
  },
  {
    number: "03",
    title: "Biometric Contractor & Visitor Access Logging",
    icon: Fingerprint,
    subtitle: "Strict CLRA Gate Pass Enforcement & Headcount Accountability",
    description:
      "High-speed biometric fingerprint and facial recognition gates verify all contract labour against approved CLRA quota ceilings. Eliminate proxy attendance, unvetted casual workers, and unauthorized floor access.",
    features: [
      "Real-time integration with Contract Labour Act (CLRA) Form-V passes",
      "Segregated visitor badging with mandatory host escort protocols",
      "Instant live digital muster roll for emergency fire evacuation roll-call",
      "Zero tolerance for intoxicated or non-PPE compliant worker entry",
    ],
  },
  {
    number: "04",
    title: "Quick Reaction Team (QRT) Emergency Deterrence",
    icon: Radio,
    subtitle: "Tactical Crisis Containment & Industrial Strike De-Escalation",
    description:
      "Dedicated motorized rapid response squads trained in crowd containment, gate blockade de-escalation, fire suppression, and local community liaison. Ready to deploy within 15 minutes of any security emergency.",
    features: [
      "Tactical unarmed and armed personnel with riot control batons and shields",
      "VHF/UHF multi-channel two-way wireless radio network",
      "High-intensity searchlights and motorized reconnaissance vehicles",
      "Direct protocol liaison with local Police Station and Fire Station",
    ],
  },
];

export default function IndustrialSecurityLandingPage() {
  const pageUrl = `${siteConfig.url}/lp/industrial-security`;
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Industrial Security & Plant Guarding", url: pageUrl },
  ];

  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);
  const webPageSchema = buildWebPageSchema({
    title: "Industrial Security & Plant Guarding | Audit-Ready PSARA Agency | ACS",
    description:
      "Audit-ready industrial security and plant guarding for manufacturing plants, logistics hubs, and infrastructure facilities. PSARA Form-V licensed, ISO 9001:2015 certified, 1:15 supervisory ratio.",
    url: pageUrl,
  });

  const whatsappMessage = encodeURIComponent(
    "Hi Advance Corporate Security (ACS), I am an operations/procurement head requesting an urgent industrial security survey and commercial proposal for our facility."
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(webPageSchema) }}
      />

      {/* ── TOP CONVERSION BAR (Sticky, Minimalist, Direct) ── */}
      <div className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-40 shadow-md">
        <div className="container-acs max-w-7xl py-2.5 px-4 flex items-center justify-between gap-4">
          {/* Left: Brand & Trust Pill */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-roboto font-black text-white text-base sm:text-lg tracking-tight">
                ACS <span className="text-sky font-semibold text-xs sm:text-sm hidden sm:inline">| INDUSTRIAL DEFENSE</span>
              </span>
            </Link>
            <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              <ShieldCheck size={12} />
              <span>PSARA Form-V • ISO 9001:2015</span>
            </span>
          </div>

          {/* Right: Direct Emergency Contact & WhatsApp CTA */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="tel:+919477006681"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-roboto font-bold text-slate-200 hover:text-white transition-colors"
            >
              <Phone size={14} className="text-sky animate-pulse" />
              <span className="hidden sm:inline text-slate-400 font-normal">24×7 Operations:</span>
              <span className="text-sky-300 font-mono">+91 94770 06681</span>
            </a>

            <span className="text-slate-700 hidden sm:inline">|</span>

            <a
              href="tel:+919339988999"
              className="hidden lg:flex items-center gap-1 text-xs font-mono font-bold text-slate-300 hover:text-white transition-colors"
            >
              <span>+91 93399 88999</span>
            </a>

            <a
              href={`https://wa.me/919477006681?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-sm"
            >
              <MessageSquare size={13} />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>

            <a
              href="#proposal-form"
              className="hidden md:inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-sky hover:bg-sky-dark text-white font-bold text-xs transition-colors shadow-sm"
            >
              <span>Request Quote</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── HERO SECTION WITH 2-COLUMN CONVERSION LAYOUT ── */}
      <section className="bg-gradient-to-b from-navy-dark via-navy to-slate-900 text-white py-12 sm:py-16 lg:py-20 border-b border-slate-800 relative overflow-hidden">
        {/* Subtle background ambient glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-acs max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left 7 Columns: High-Authority Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck size={14} className="text-sky-400" />
                <span>Enterprise Industrial Security Specification</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-roboto font-black text-white tracking-tight leading-[1.15]">
                Audit-Ready Industrial Security &amp; Plant Guarding for Manufacturing, Logistics &amp; Infrastructure Enterprises
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
                <strong className="text-white font-semibold">PSARA Form-V Licensed • ISO 9001:2015 Certified • Zero Section 7A EPF Liability • 24–48 Hour Mobilization across Eastern India &amp; Key National Hubs.</strong>
              </p>

              {/* Key Value Deliverables with Green Badges */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-snug">
                    <strong className="text-white">Zero Section 7A Client Liability:</strong> Pre-billing monthly employee-wise ECR and bank TRRN payment receipts delivered with every invoice.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-snug">
                    <strong className="text-white">1:15 Tight Supervisory Density:</strong> Dedicated motorized field officers conduct mandatory surprise night rounds (01:00 AM – 04:30 AM).
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-snug">
                    <strong className="text-white">24/7 Weighbridge &amp; Scrap Theft Containment:</strong> Dual tare/gross reconciliation, biometric contractor gates, and RFID boundary wands.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-snug">
                    <strong className="text-white">24–48 Hour Mobilization Guarantee:</strong> Pre-screened, PSARA-trained manpower deployed across WB, Odisha, Jharkhand &amp; Bihar.
                  </p>
                </div>
              </div>

              {/* Direct Call / Contact Action Bar */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="tel:+919477006681"
                  className="px-6 py-3.5 rounded-xl bg-sky hover:bg-sky-dark text-white font-bold text-xs sm:text-sm transition-all shadow-xl flex items-center gap-2 hover:scale-105"
                >
                  <Phone size={15} />
                  <span>Call Operations Director: +91 94770 06681</span>
                </a>

                <a
                  href={`https://wa.me/919477006681?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2"
                >
                  <MessageSquare size={15} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="pt-2 text-[11px] text-slate-400">
                ⚡ Direct Founder / Director escalation access within 30–60 minutes. Zero ticketing delays.
              </div>
            </div>

            {/* Right 5 Columns: Lead Capture Form (Above the fold) */}
            <div className="lg:col-span-5">
              <IndustrialSecurityLeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR (Data-Backed Metrics) ── */}
      <section className="bg-slate-900 border-b border-slate-800 py-6 sm:py-8 text-white">
        <div className="container-acs max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="p-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-roboto font-black text-sky">
                25+ Years
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Since Inception (2000)
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Pioneering Eastern Security
              </div>
            </div>

            <div className="p-2 pt-4 md:pt-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-roboto font-black text-sky">
                5,000+
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Trained Personnel
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Guards, Supervisors, Armed Escorts
              </div>
            </div>

            <div className="p-2 pt-4 md:pt-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-roboto font-black text-emerald-400">
                100%
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Statutory ECR Pass Rate
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Zero Section 7A EPF Default
              </div>
            </div>

            <div className="p-2 pt-4 md:pt-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-roboto font-black text-sky">
                1:15
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Supervisory Ratio
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Surprise Night Motorized Rounds
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 OPERATIONAL DEFENSE PILLARS ── */}
      <section className="py-16 sm:py-20 bg-white" id="defense-pillars">
        <div className="container-acs max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-extrabold tracking-widest text-sky px-3 py-1 bg-sky-50 rounded-full border border-sky-100">
              Perimeter &amp; Asset Protection SOP
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-roboto font-black text-navy mt-3 tracking-tight">
              The 4 Operational Defense Pillars of Plant Security
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Engineered specifically for heavy engineering, steel mills, logistics parks, petrochemical plants, and large industrial townships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {OPERATIONAL_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="p-7 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/90 hover:border-sky-300 transition-all shadow-sm hover:shadow-xl group space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-navy text-sky flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                        <Icon size={22} />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono font-bold text-sky uppercase tracking-wider block">
                          Pillar {pillar.number}
                        </span>
                        <h3 className="font-roboto font-bold text-navy text-lg leading-tight">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                    {pillar.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-slate-200/60 text-xs text-slate-600">
                    {pillar.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STATUTORY INDEMNITY & GOVERNANCE COMPLIANCE ── */}
      <section className="py-14 bg-slate-50 border-t border-b border-slate-200">
        <div className="container-acs max-w-7xl">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Zero Co-Liability Guarantee
                </span>
                <h3 className="text-2xl sm:text-3xl font-roboto font-black text-navy tracking-tight">
                  100% Statutory Immunity for Principal Employers
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Under the Contract Labour (Regulation &amp; Abolition) Act 1970 and Section 7A of the EPF Act, Principal Employers are held jointly liable if a contractor cuts corners. ACS neutralizes this threat through a strict <strong className="text-navy">Pre-Billing Statutory Compliance Dossier</strong>:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <strong className="text-navy block mb-0.5">EPFO ECR &amp; Bank TRRN</strong>
                    Delivered with every monthly invoice matching actual site roster.
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <strong className="text-navy block mb-0.5">ESIC Pehchan Biometric Cards</strong>
                    All guards covered for accidental medical &amp; disability indemnity.
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <strong className="text-navy block mb-0.5">PSARA Form-V Verified</strong>
                    Valid Home Department licenses in state jurisdiction.
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <strong className="text-navy block mb-0.5">Notarized Legal Indemnity</strong>
                    Signed certificate protecting client Board of Directors.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-gradient-to-br from-navy to-navy-dark rounded-2xl p-6 sm:p-7 text-white text-center space-y-4">
                <ShieldCheck size={40} className="text-gold mx-auto" />
                <h4 className="font-roboto font-bold text-lg text-white">
                  Audit Your Current Security Vendor
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Concerned about missing TRRN receipts, ghost guards, or 0% service charge traps? Our Senior Compliance Officers conduct confidential third-party audits.
                </p>
                <div className="pt-2">
                  <Link
                    href="/procurement/agency-comparison"
                    className="inline-block w-full py-3 px-5 rounded-xl bg-sky hover:bg-sky-dark text-white font-bold text-xs sm:text-sm transition-colors shadow-md"
                  >
                    View Agency Comparison Matrix
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENT VERIFICATION MARQUEE ── */}
      <ClientMarquee bgClass="bg-white" showHeading={true} />

      {/* ── REGIONAL MOBILIZATION CORRIDORS ── */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="container-acs max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-slate-500">
              Immediate Geographic Reach
            </span>
            <h2 className="text-2xl sm:text-3xl font-roboto font-black text-navy mt-2 tracking-tight">
              24–48 Hour Mobilization Corridors Across Eastern India
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Active barracks, pre-screened guard reserves, and local operations commanders stationed across major industrial nodes.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 text-center">
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              <MapPin size={18} className="text-sky mx-auto mb-1.5" />
              <strong className="text-xs sm:text-sm font-bold text-navy block">Haldia Port</strong>
              <span className="text-[11px] text-slate-500">Chemicals &amp; Petrochem</span>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              <MapPin size={18} className="text-sky mx-auto mb-1.5" />
              <strong className="text-xs sm:text-sm font-bold text-navy block">Kharagpur</strong>
              <span className="text-[11px] text-slate-500">Engineering &amp; Logistics</span>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              <MapPin size={18} className="text-sky mx-auto mb-1.5" />
              <strong className="text-xs sm:text-sm font-bold text-navy block">Durgapur - Asansol</strong>
              <span className="text-[11px] text-slate-500">Steel &amp; Heavy Foundries</span>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              <MapPin size={18} className="text-sky mx-auto mb-1.5" />
              <strong className="text-xs sm:text-sm font-bold text-navy block">Dankuni - Hooghly</strong>
              <span className="text-[11px] text-slate-500">FMCG &amp; Warehousing</span>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              <MapPin size={18} className="text-sky mx-auto mb-1.5" />
              <strong className="text-xs sm:text-sm font-bold text-navy block">Jamshedpur - Kalinganagar</strong>
              <span className="text-[11px] text-slate-500">Mining &amp; Metals</span>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              <MapPin size={18} className="text-sky mx-auto mb-1.5" />
              <strong className="text-xs sm:text-sm font-bold text-navy block">Siliguri &amp; Assam</strong>
              <span className="text-[11px] text-slate-500">Tea &amp; Border Logistics</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIRECT CALL-TO-ACTION BAR & FINAL CONVERSION BAR ── */}
      <section className="py-16 bg-navy text-white text-center border-t border-slate-800">
        <div className="container-acs max-w-4xl">
          <span className="text-xs uppercase font-extrabold tracking-widest text-gold bg-gold/10 px-3.5 py-1 rounded-full border border-gold/30">
            Rapid Procurement Desk
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-roboto font-black text-white mt-4 mb-3">
            Deploy Audit-Ready Industrial Guarding at Your Facility
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm sm:leading-relaxed max-w-2xl mx-auto mb-8">
            Connect directly with our Operations Director. We carry out site security reconnaissance within 24 hours and issue a comprehensive, GFR-compliant commercial proposal.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <a
              href="#proposal-form"
              className="px-8 py-4 rounded-xl bg-sky hover:bg-sky-dark text-white font-bold text-sm shadow-xl transition-all hover:scale-105"
            >
              Request Plant Security Survey
            </a>
            <a
              href="tel:+919477006681"
              className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors flex items-center gap-2 shadow-lg"
            >
              <Phone size={16} />
              <span>Call Hotline: +91 94770 06681</span>
            </a>
            <a
              href={`https://wa.me/919477006681?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors flex items-center gap-2"
            >
              <MessageSquare size={16} />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-400 flex flex-wrap justify-center gap-6">
            <span>Corporate Office: 1/2, Bhattacharjee Para, Barrackpore, Kolkata — 700120</span>
            <span>Email: {siteConfig.email}</span>
            <span>Helpline: +91 93399 88999 / +91 94770 06681</span>
          </div>
        </div>
      </section>

      {/* ── STICKY BOTTOM MOBILE CONVERSION BAR ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2.5 sm:hidden flex items-center gap-2">
        <a
          href="tel:+919477006681"
          className="flex-1 py-3 rounded-xl bg-sky text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
        >
          <Phone size={14} />
          <span>Call +91 94770 06681</span>
        </a>
        <a
          href={`https://wa.me/919477006681?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
        >
          <MessageSquare size={14} />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
