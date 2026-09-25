import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { buildBreadcrumbSchema, buildFaqSchema, serializeJsonLd } from "@/lib/schema";
import EvidenceTrustEngine from "@/components/common/EvidenceTrustEngine";
import ClientMarquee from "@/components/common/ClientMarquee";

export const metadata: Metadata = {
  title: "Government & PSU Security Procurement Center | GeM Empanelled PSARA Contractor",
  description:
    "Government & PSU Security Procurement Center by Advance Corporate Security (ACS). GeM registered vendor, PSARA licensed, ISO 9001:2015 certified. Complete tender guide, bid checklist, pre-qualification matrix, statutory wage costing, and B2G compliance documentation.",
  keywords: [
    "Government Security Services",
    "PSU Security Services",
    "Central Government Security Services",
    "State Government Security Services",
    "Defence Security Services",
    "Railway Security Services",
    "Airport Security Services",
    "Hospital Security Services",
    "University Security Services",
    "Municipal Security Services",
    "Government Tender Security Services",
    "GeM Security Services Guide",
    "Security Tender Documentation",
    "Security Agency Pre-Qualification",
    "Security Agency Compliance Documents",
    "PSARA Documentation",
    "EPF ESI Labour Compliance",
    "Security Tender Bid Checklist",
    "Security Tender Pricing Guide",
  ],
  alternates: {
    canonical: `${siteConfig.url}/procurement`,
  },
  openGraph: {
    title: "Government & PSU Security Procurement Center | ACS",
    description: "Official B2G / PSU security procurement portal: GeM bids, tender documentation, PSARA licensing, statutory wage calculator, and bid checklists.",
    url: `${siteConfig.url}/procurement`,
    images: [{ url: "/images/guarding.jpg", width: 1200, height: 630 }],
  },
};

export default function ProcurementCenterPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Govt & PSU Procurement Center", url: `${siteConfig.url}/procurement` },
  ];

  const faqs = [
    {
      question: "Is Advance Corporate Security (ACS) registered on GeM (Government e-Marketplace)?",
      answer: "Yes. ACS is an active, registered GeM Seller offering Guarding Services, Armed Guards, Unarmed Guards, Security Supervisors, and Integrated Facility Management across all Central and State Government departments with full GFR 2017 compliance.",
    },
    {
      question: "What compliance documents are included in ACS's Technical Bid submission?",
      answer: "Our standard Technical Bid envelope contains PSARA Form V License, EPF Registration & Monthly ECR Challans, ESIC Monthly Payment Receipts, CLRA (Contract Labour Act) Form V / Form VI, GSTIN Filings (GSTR-1 & GSTR-3B), ISO 9001:2015 Certification, 3-5 Year Audited Balance Sheets with CA Turnover Certificates (UDIN verified), Bank Solvency Certificate, and a Notarized Non-Blacklisting Affidavit.",
    },
    {
      question: "How does ACS handle Central Sphere vs State Sphere Minimum Wages in government tenders?",
      answer: "ACS strictly bids and executes contracts per the designated wage notification authority. For Central Ministries, Railways, Defence, and CPWD tenders, we compute wages per the latest Chief Labour Commissioner (Central) gazette. For State Government secretariats, collectorates, and state universities, we adhere to the applicable State Minimum Wages Act including Variable Dearness Allowance (VDA), 13% EPF, 3.25% ESIC, and 8.33% statutory bonus.",
    },
    {
      question: "Why does GeM reject bids with zero or unrealistically low service charges?",
      answer: "Per Ministry of Finance and GeM Office Memorandums, bids with 0% or abnormally low service charges (e.g. 0.001%) are classified as financially unviable and non-responsive. Such bids lead to illegal wage deductions and vendor abandonment. ACS advocates and bids transparent, viable administrative service charges (typically 5%–10%) to guarantee 100% SLA compliance and zero labour unrest.",
    },
    {
      question: "Can government departments request customized BOQ tenders or PAC direct purchases?",
      answer: "Yes. Government buyers can procure through GeM via Direct Purchase (up to applicable threshold), L1 Comparison, Custom Bids with specialized SLA criteria, or CPPP (Central Public Procurement Portal) tenders. Our B2G Procurement Desk assists procurement officers with BOQ formulations and technical specification drafting.",
    },
  ];

  const govtSectors = [
    {
      title: "Central Government Security Services",
      icon: "🏛️",
      scope: "Ministries, Central Secretariats, CPWD premises, Income Tax & GST Bhavans, and Autonomous Bodies.",
      features: ["Armed & Unarmed Guarding", "Metal Detector Frisking", "VIP Movement Protocols", "Visitor Badge Provisioning"],
    },
    {
      title: "PSU Security Services",
      icon: "⚡",
      scope: "Maharatna, Navratna, and Miniratna industrial complexes, oil terminals, power stations, and mining belts.",
      features: ["Perimeter Watchtowers", "Hazmat Transport Escort", "Turnaround Labour Vetting", "Weighbridge Monitoring"],
    },
    {
      title: "State Government Security Services",
      icon: "🏢",
      scope: "State Secretariats, District Collectorates, Zilla Parishads, Directorate Offices, and Court Complexes.",
      features: ["Public Grievance Crowd Control", "Executive Floor Security", "Entry/Exit Barricade Guarding", "24x7 Control Room"],
    },
    {
      title: "Defence Security Services",
      icon: "⭐",
      scope: "Military cantonments, Military Engineer Services (MES) depots, Air Force non-core areas, and Ordnance camps.",
      features: ["Ex-Servicemen (ESM) Cadres", "Licensed Armed Sentries", "Ammunition Dump Watch", "Joint Boundary Patrols"],
    },
    {
      title: "Railway Security Services",
      icon: "🚆",
      scope: "Railway workshops, locomotive sheds, goods loading yards, metro corridors, and station perimeters.",
      features: ["Scrap Mafia Deterrence", "Track Fitting Protection", "Passenger Flow Marshaling", "Coordination with RPF/GRP"],
    },
    {
      title: "Airport Security Services",
      icon: "✈️",
      scope: "Landside passenger concourses, aviation cargo complexes, aircraft hangars, and commercial parking bays.",
      features: ["BCAS Cleared Guards", "Bonded Cargo Escort", "Traffic Ramp Management", "Under-Vehicle Scanning"],
    },
    {
      title: "Hospital Security Services",
      icon: "🏥",
      scope: "AIIMS, Central/State Medical Colleges, District Hospitals, Emergency Triage, and Neonatal Wards.",
      features: ["Doctor Violence Prevention", "ICU Triage Access Control", "Ambulance Bay Clearance", "Crowd De-escalation"],
    },
    {
      title: "University Security Services",
      icon: "🎓",
      scope: "Central Universities, IITs, NITs, State Campuses, Research Laboratories, and Student Hostels.",
      features: ["Hostel Female Wardens", "Campus Perimeter Patrols", "Convocation Crowd Safety", "Student Anti-Ragging Watch"],
    },
    {
      title: "Municipal Security Services",
      icon: "🏙️",
      scope: "Municipal Corporations, Water Treatment Plants, Solid Waste Facilities, Urban Parks, and Ward Offices.",
      features: ["Civic Asset Protection", "Public Office Order", "Gate Pass Registration", "Night Patrolling Vehicles"],
    },
    {
      title: "Government Tender Security Services",
      icon: "📑",
      scope: "Turnkey tender execution across CPPP, GeM, State e-Procurement portals, and Rate Contracts.",
      features: ["EMD & PBG Facilitation", "UDIN CA Net Worth Proof", "Pan-India Mobilization", "Zero Statutory Deviation"],
    },
  ];

  const faqSchema = buildFaqSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildBreadcrumbSchema(breadcrumbs)) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
        />
      )}

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="container-acs relative z-10">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-400">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.url} className="flex items-center gap-1.5">
                  {i < breadcrumbs.length - 1 ? (
                    <>
                      <Link href={crumb.url} className="hover:text-sky transition-colors">{crumb.name}</Link>
                      <span aria-hidden="true" className="text-gray-600">/</span>
                    </>
                  ) : (
                    <span className="text-sky font-medium">{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="badge-sky">🏛️ B2G Procurement Portal</span>
            <span className="badge-gold">GeM Registered Seller</span>
            <span className="badge-navy border border-white/20">PSARA Form-V Licensed</span>
            <span className="badge-navy border border-white/20">ISO 9001:2015</span>
          </div>

          <h1 className="text-white font-roboto font-black text-3xl sm:text-5xl lg:text-6xl leading-tight mb-4 max-w-5xl">
            Government &amp; PSU Security <span className="text-sky">Procurement Center</span>
          </h1>

          <p className="text-sky-200 font-roboto text-base sm:text-lg md:text-xl font-normal mb-8 max-w-4xl leading-relaxed">
            Pan-India empanelled, PSARA-licensed, and ISO 9001:2015 certified security guarding and workforce partner for Central Ministries, State Secretariats, Maharatna/Navratna PSUs, Defence, Railways, and Municipal Bodies.
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-10">
            <Link href="#tender-dossier" className="btn-primary text-sm px-7 py-3.5 shadow-lg">
              Download Tender Compliance Dossier
            </Link>
            <Link href="#pricing-guide" className="btn-secondary text-sm px-6 py-3.5">
              Statutory Tender Pricing Guide
            </Link>
            <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="text-white font-medium text-sm hover:text-sky flex items-center gap-2">
              📞 Direct B2G Procurement Desk: {siteConfig.phone}
            </a>
          </div>

          {/* Quick Credential Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/15 max-w-5xl">
            <div className="bg-white/10 border border-white/15 rounded-xl p-3.5 backdrop-blur-xs">
              <div className="text-gold font-bold text-sm mb-0.5">GeM Empanelled</div>
              <div className="text-slate-200 text-xs">Direct Purchase, Custom Bids &amp; RA</div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-xl p-3.5 backdrop-blur-xs">
              <div className="text-sky font-bold text-sm mb-0.5">100% Statutory Law</div>
              <div className="text-slate-200 text-xs">Central &amp; State Minimum Wages + PF/ESI</div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-xl p-3.5 backdrop-blur-xs">
              <div className="text-white font-bold text-sm mb-0.5">25+ Years Operations</div>
              <div className="text-slate-200 text-xs">Zero Litigation &amp; CAG Audit Clean</div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-xl p-3.5 backdrop-blur-xs">
              <div className="text-gold font-bold text-sm mb-0.5">5,000+ Guard Force</div>
              <div className="text-slate-200 text-xs">Ex-Servicemen &amp; Certified Civilians</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 1. SPECIALIZED GOVERNMENT & PSU VERTICALS ── */}
      <section className="section-py bg-white">
        <div className="container-acs">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="section-label">Public Sector Competencies</p>
            <h2 className="text-navy text-2xl sm:text-4xl font-roboto font-extrabold">
              Specialized Government &amp; PSU Security Offerings
            </h2>
            <div className="divider-sky mx-auto my-3" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Every public establishment requires tailored security postures. ACS delivers specialized guarding cadres engineered to withstand the operational demands of government infrastructures.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {govtSectors.map((sector) => (
              <div
                key={sector.title}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl p-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      {sector.icon}
                    </span>
                    <h3 className="font-roboto font-bold text-navy text-base leading-snug">
                      {sector.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {sector.scope}
                  </p>
                  <div className="space-y-1.5 mb-4">
                    {sector.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-slate-700">
                        <span className="text-sky font-bold">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                    Tender Ready
                  </span>
                  <Link href="/contact" className="text-xs font-bold text-sky hover:underline">
                    Inquire for Tender →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. GeM (GOVERNMENT e-MARKETPLACE) PROCUREMENT GUIDE ── */}
      <section className="section-py bg-slate-50 border-t border-b border-slate-200">
        <div className="container-acs">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="badge-sky text-xs uppercase mb-3 inline-block">GeM Procurement Walkthrough</span>
            <h2 className="text-navy text-2xl sm:text-4xl font-roboto font-extrabold">
              GeM Security Services Procurement Guide
            </h2>
            <div className="divider-sky mx-auto my-3" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Step-by-step guidance for Government Buyers procuring Security Guarding and Facility Management services through the GeM Portal (gem.gov.in).
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              {
                step: "01",
                title: "Procurement Mode Selection",
                desc: "Choose between Direct Purchase (up to allowed thresholds), L1 Comparison across 3+ empanelled vendors, or Custom Bid with specific SLA criteria.",
              },
              {
                step: "02",
                title: "Defining Scope of Work (SOW)",
                desc: "Specify requirements: Unarmed Security Guards, Armed Guards (with firearm licenses), Security Supervisors, 8-Hour or 12-Hour shift rosters.",
              },
              {
                step: "03",
                title: "Statutory Wage Gazette Lock",
                desc: "Ensure the tender locks latest Chief Labour Commissioner (Central) or State Minimum Wages + VDA, eliminating illegal contractor underbidding.",
              },
              {
                step: "04",
                title: "Technical Scrutiny & RA",
                desc: "Verify mandatory PSARA, EPF/ESIC challans, and ISO credentials before financial evaluation or executing Reverse Auctions (RA).",
              },
            ].map((s) => (
              <div key={s.step} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs relative">
                <div className="text-sky font-black text-2xl mb-2 font-roboto">{s.step}</div>
                <h3 className="font-roboto font-bold text-navy text-base mb-2">{s.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* GeM Buyer Tip Callout */}
          <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="text-4xl">💡</div>
            <div className="flex-1">
              <h4 className="font-roboto font-bold text-navy text-base sm:text-lg mb-1">
                Notice on Zero Service Charge Bids (GeM Office Memorandum OM No. F.6/1/2023-PPD)
              </h4>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                Procuring entities are explicitly instructed to reject bids offering 0% or sub-penny service charges. In accordance with Ministry of Finance guidelines, minimum viable administrative overheads must be maintained to prevent contractor default, statutory wage theft, and EPF/ESIC non-remittance. ACS strictly complies with viable pricing frameworks.
              </p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0 text-xs px-5 py-3">
              Consult Our GeM Desk
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. PRE-QUALIFICATION MATRIX & STATUTORY COMPLIANCE DOSSIER ── */}
      <section id="tender-dossier" className="section-py bg-white">
        <div className="container-acs">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="badge-gold text-xs uppercase mb-3 inline-block">Audit-Ready Documentation</span>
            <h2 className="text-navy text-2xl sm:text-4xl font-roboto font-extrabold">
              Security Agency Pre-Qualification &amp; Compliance Matrix
            </h2>
            <div className="divider-sky mx-auto my-3" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Complete statutory dossier ready for immediate inspection by Tender Evaluation Committees, Vigilance Officers, and Internal Auditors.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm mb-8">
            <table className="w-full text-xs sm:text-sm text-left text-slate-700 bg-white">
              <thead className="bg-navy text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Compliance Parameter</th>
                  <th className="p-4">Statutory Act &amp; Authority</th>
                  <th className="p-4">Mandate for Public Tenders</th>
                  <th className="p-4">ACS Status &amp; Verification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/80">
                  <td className="p-4 font-bold text-navy">PSARA License (Form V)</td>
                  <td className="p-4">Private Security Agencies (Regulation) Act 2005 / Home Dept.</td>
                  <td className="p-4 text-xs">Mandatory statutory permit. Operating without PSARA is a non-bailable offense.</td>
                  <td className="p-4 text-emerald-700 font-bold">✓ Form-V Certified &amp; Pan-India Valid</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-4 font-bold text-navy">EPF Registration &amp; ECR</td>
                  <td className="p-4">Employees&apos; Provident Funds &amp; Misc. Provisions Act 1952</td>
                  <td className="p-4 text-xs">13% employer contribution (including admin charges) deposited monthly.</td>
                  <td className="p-4 text-emerald-700 font-bold">✓ Monthly TRRN ECR Receipts Available</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-4 font-bold text-navy">ESIC Registration &amp; Form 5</td>
                  <td className="p-4">Employees&apos; State Insurance Act 1948</td>
                  <td className="p-4 text-xs">3.25% employer medical and disability insurance contribution.</td>
                  <td className="p-4 text-emerald-700 font-bold">✓ 100% Monthly Compliance Dockets</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-4 font-bold text-navy">CLRA License (Form V / VI)</td>
                  <td className="p-4">Contract Labour (Regulation &amp; Abolition) Act 1970</td>
                  <td className="p-4 text-xs">Mandatory contractor license for deployments exceeding statutory worker thresholds.</td>
                  <td className="p-4 text-emerald-700 font-bold">✓ Duly Registered &amp; Maintained</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-4 font-bold text-navy">GSTIN Registration</td>
                  <td className="p-4">Central Goods and Services Tax Act 2017 (CBIC)</td>
                  <td className="p-4 text-xs">Regular filing of GSTR-1 and GSTR-3B with zero default track record.</td>
                  <td className="p-4 text-emerald-700 font-bold">✓ Active GSTIN with Full ITC Invoicing</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-4 font-bold text-navy">ISO 9001:2015 Certification</td>
                  <td className="p-4">International Organization for Standardization / IAF Accredited</td>
                  <td className="p-4 text-xs">Certified Quality Management Systems for Security &amp; Facilities.</td>
                  <td className="p-4 text-emerald-700 font-bold">✓ ISO 9001:2015 Certified</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-4 font-bold text-navy">Audited Financials &amp; CA Certificate</td>
                  <td className="p-4">ICAI / Registered Chartered Accountant with UDIN</td>
                  <td className="p-4 text-xs">3 to 5 financial years audited balance sheets, P&amp;L, and turnover certificate.</td>
                  <td className="p-4 text-emerald-700 font-bold">✓ UDIN Verified Strong Balance Sheet</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-4 font-bold text-navy">Bank Solvency Certificate</td>
                  <td className="p-4">Scheduled Commercial / Nationalized Bank</td>
                  <td className="p-4 text-xs">Demonstrating financial liquidity to disburse salaries prior to client invoice clearance.</td>
                  <td className="p-4 text-emerald-700 font-bold">✓ Issued by Nationalized Bank</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-4 font-bold text-navy">Non-Blacklisting Affidavit</td>
                  <td className="p-4">First Class Magistrate / Notary Public</td>
                  <td className="p-4 text-xs">Declaration affirming zero blacklisting by any Central/State Govt or PSU entity.</td>
                  <td className="p-4 text-emerald-700 font-bold">✓ Unblemished 25-Year Record</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700">
            <span>📄 Need certified copies of these documents for your upcoming technical bid evaluation?</span>
            <Link href="/contact" className="btn-primary text-xs py-2 px-4">
              Request Full Tender Dossier
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. 12-POINT SECURITY TENDER BID CHECKLIST ── */}
      <section className="section-py bg-slate-50 border-t border-b border-slate-200">
        <div className="container-acs">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="badge-sky text-xs uppercase mb-3 inline-block">Evaluation Committee Framework</span>
            <h2 className="text-navy text-2xl sm:text-4xl font-roboto font-extrabold">
              12-Point Security Tender Bid Checklist
            </h2>
            <div className="divider-sky mx-auto my-3" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Use this standardized 12-point checklist to assess agency suitability across Technical and Financial evaluation envelopes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Checklist */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <h3 className="font-roboto font-bold text-navy text-lg">Envelope A: Technical Evaluation</h3>
                <span className="badge-sky text-xs">6 Key Points</span>
              </div>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">1</span>
                  <div>
                    <strong>Valid PSARA Jurisdiction:</strong> Verify that the agency holds an active Form-V license in the state where the deployment is mandated.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">2</span>
                  <div>
                    <strong>Audited Annual Turnover:</strong> Minimum 30%–50% of the estimated contract value over the last 3 financial years verified via CA UDIN certificate.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">3</span>
                  <div>
                    <strong>Similar Work Experience:</strong> Satisfactory completion certificates from Central/State Government, PSUs, or reputed corporate institutions.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">4</span>
                  <div>
                    <strong>Active Guard Strength:</strong> Proof of maintaining an active workforce of 500+ security personnel to ensure immediate relief deployment.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">5</span>
                  <div>
                    <strong>Training Institute Affiliation:</strong> Written proof of certified security guard training per PSARA syllabus (fire safety, first aid, drill, frisking).
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">6</span>
                  <div>
                    <strong>24x7 Control Room &amp; QRT:</strong> Operational inspection of round-the-clock command centers and supervisor motorized patrolling units.
                  </div>
                </li>
              </ul>
            </div>

            {/* Financial Checklist */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <h3 className="font-roboto font-bold text-navy text-lg">Envelope B: Financial Evaluation</h3>
                <span className="badge-gold text-xs">6 Key Points</span>
              </div>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">7</span>
                  <div>
                    <strong>Minimum Wage Parity:</strong> Quote must be based on the latest Central or State gazetted rate (Basic + VDA). Below-minimum quotes are invalid.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">8</span>
                  <div>
                    <strong>Statutory EPF Calculation:</strong> 13.00% (12% EPF + 0.5% EDLI + 0.5% Admin) computed accurately on basic wages up to the statutory ceiling.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">9</span>
                  <div>
                    <strong>Statutory ESIC Calculation:</strong> 3.25% calculated on gross wages for employees earning up to the current ESIC wage ceiling (₹21,000/mo).
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">10</span>
                  <div>
                    <strong>Statutory Bonus (8.33%):</strong> Inclusion of statutory annual bonus under the Payment of Bonus Act 1965 or monthly provisions.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">11</span>
                  <div>
                    <strong>Relieving Charges (1/6th):</strong> Mandatory 1/6th reliever cost for 24x7 posts to provide statutory weekly offs without leaving posts vacant.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">12</span>
                  <div>
                    <strong>Viable Service Charge:</strong> Ensuring the agency&apos;s administrative fee is reasonable (5%–10%) and not a predatory 0% bid.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. STATUTORY WAGE & TENDER PRICING GUIDE ── */}
      <section id="pricing-guide" className="section-py bg-white">
        <div className="container-acs">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="badge-sky text-xs uppercase mb-3 inline-block">Transparent Mathematical Costing</span>
            <h2 className="text-navy text-2xl sm:text-4xl font-roboto font-extrabold">
              Security Tender Pricing &amp; Statutory Wage Guide
            </h2>
            <div className="divider-sky mx-auto my-3" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Tender pricing for security services in India must adhere to non-negotiable statutory formulas. Below is the standard statutory wage structure formulated by the Chief Labour Commissioner:
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="font-roboto font-bold text-navy text-lg mb-4 text-center sm:text-left">
              Components of an All-Inclusive Security Guard Manday Rate
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-200">
                <span className="font-semibold text-navy">1. Basic Wage + Variable Dearness Allowance (VDA)</span>
                <span className="font-mono text-slate-700">As per Central / State Gazette Notification</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-200">
                <span className="font-semibold text-navy">2. Employee Provident Fund (EPF @ 13%)</span>
                <span className="font-mono text-slate-700">12% EPF + 0.5% EDLI + 0.5% Admin Charges</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-200">
                <span className="font-semibold text-navy">3. Employees&apos; State Insurance (ESIC @ 3.25%)</span>
                <span className="font-mono text-slate-700">3.25% of Gross Wages (Medical &amp; Accident Cover)</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-200">
                <span className="font-semibold text-navy">4. Statutory Annual Bonus (@ 8.33%)</span>
                <span className="font-mono text-slate-700">Payment of Bonus Act 1965 Mandate</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-200">
                <span className="font-semibold text-navy">5. Paid National &amp; Festival Holidays (NFH)</span>
                <span className="font-mono text-slate-700">Annualized Provision (3 to 8 Days / Year)</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-200">
                <span className="font-semibold text-navy">6. Weekly Off Relieving Charges (1/6th)</span>
                <span className="font-mono text-slate-700">16.66% to fund mandatory 7th day reliever</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-200">
                <span className="font-semibold text-navy">7. Uniform, Washing &amp; Tactical Equipment Allowance</span>
                <span className="font-mono text-slate-700">2 Sets Uniform, Boots, Lanyard, Whistle, Torches</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-sky-50 rounded-lg border border-sky-200">
                <span className="font-bold text-sky-900">8. Contractor Administrative &amp; Supervisory Charge</span>
                <span className="font-mono font-bold text-sky-900">5% to 10% Viable Operating Fee</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-navy text-white rounded-lg">
                <span className="font-bold">9. Goods and Services Tax (GST @ 18%)</span>
                <span className="font-mono font-bold">SAC 998525 (100% Eligible for Input Tax Credit)</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
              <strong className="text-slate-800">Note for Tender Drafting Committees:</strong> Tenders that fail to include itemized line items for Relieving Charges (1/6th) or Bonus (8.33%) force vendors to unlawfully deduct these amounts from guard salaries, creating high operational turnover, absenteeism, and vicarious legal liability for the Principal Employer. ACS ensures every quotation guarantees 100% statutory dignity to the workforce.
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. TRUST & EVIDENCE DATABASE (15 PARAMETERS) ── */}
      <EvidenceTrustEngine showTitle={true} />

      {/* Clients Marquee */}
      <ClientMarquee bgClass="bg-white" />

      {/* ── 7. FREQUENTLY ASKED QUESTIONS (FAQ) ── */}
      <section className="section-py bg-slate-50 border-t border-slate-200">
        <div className="container-acs max-w-4xl">
          <div className="text-center mb-12">
            <span className="badge-sky text-xs uppercase mb-3 inline-block">Clarifications &amp; Guidelines</span>
            <h2 className="text-navy text-2xl sm:text-3xl font-roboto font-extrabold">
              Government Procurement FAQs
            </h2>
            <div className="divider-sky mx-auto my-3" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-roboto font-bold text-navy hover:bg-sky-50/50 transition-colors list-none text-sm sm:text-base">
                  <span>{faq.question}</span>
                  <svg className="w-5 h-5 text-sky shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. DIRECT B2G / PSU PROCUREMENT CALLOUT CTA ── */}
      <section className="section-py bg-navy text-white text-center">
        <div className="container-acs max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-gold text-xs font-bold uppercase tracking-wider mb-4">
            🏛️ Dedicated B2G &amp; PSU Tenders Desk
          </div>
          <h2 className="text-white font-roboto font-black text-2xl sm:text-4xl mb-4">
            Issue an RFI / RFP or Invite ACS to Your GeM Tender
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Our Senior Government Procurement Officers are available 24x7 to assist with BOQ specifications, PSARA verification dockets, site security audits, and formal bid submissions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-sm sm:text-base px-8 py-3.5 shadow-xl">
              Submit Tender Enquiry / RFP
            </Link>
            <a
              href={`mailto:${siteConfig.email}?subject=Government%20Tender%20Inquiry%20-%20ACS`}
              className="btn-secondary text-sm sm:text-base px-8 py-3.5"
            >
              Email: {siteConfig.email}
            </a>
          </div>
          <p className="text-gray-400 text-xs mt-6">
            Direct Helpline: {siteConfig.phoneDisplay} | Address: {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion} — {siteConfig.address.postalCode}
          </p>
        </div>
      </section>
    </>
  );
}
