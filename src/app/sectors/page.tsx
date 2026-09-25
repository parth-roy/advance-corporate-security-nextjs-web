import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { ACS_INDUSTRIES } from "@/lib/industries";
import { buildBreadcrumbSchema, serializeJsonLd } from "@/lib/schema";
import ClientMarquee from "@/components/common/ClientMarquee";

export const metadata: Metadata = {
  title: "Industry Security Sectors & Specialized Guarding Solutions | ACS",
  description:
    "Tailored security guarding and facility management solutions across 13 specialized industry sectors: Construction, Hotels, Warehouses, Residential, Corporate, Hospitals, Industrial Plants, Government, Defence, Railways, and more.",
  keywords: [
    "Construction Security Services",
    "Hotel Security Services",
    "Warehouse Security Guards",
    "Residential Security Services",
    "Corporate Security Agency",
    "Hospital Security Services",
    "Industrial Plant Security",
    "Government Security Services",
    "Defence Security Guards",
    "Railway Security Services",
    "Airport Security Services",
    "University Campus Security",
    "Retail Mall Security",
  ],
  alternates: {
    canonical: `${siteConfig.url}/sectors`,
  },
  openGraph: {
    title: "Specialized Industry Security Sectors | ACS",
    description: "Tailored PSARA-licensed security and facility management solutions across 13 core enterprise industries.",
    url: `${siteConfig.url}/sectors`,
    images: [{ url: "/images/guarding.jpg", width: 1200, height: 630 }],
  },
};

export default function SectorsPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Sectors", url: `${siteConfig.url}/sectors` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildBreadcrumbSchema(breadcrumbs)) }}
      />

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
            <span className="badge-sky">🛡️ Enterprise Sector Portfolios</span>
            <span className="badge-gold">13 Specialized Industries</span>
            <span className="badge-navy border border-white/20">PSARA &amp; ISO Certified</span>
          </div>

          <h1 className="text-white font-roboto font-black text-3xl sm:text-5xl lg:text-6xl leading-tight mb-4 max-w-4xl">
            Specialized Industry <span className="text-sky">Security Solutions</span>
          </h1>

          <p className="text-sky-200 font-roboto text-base sm:text-lg md:text-xl font-normal mb-8 max-w-3xl leading-relaxed">
            Every operational ecosystem has unique threat vectors. ACS designs customized Standard Operating Procedures (SOPs), specialized guard training, and compliant workforce rosters for 13 distinct sectors across India.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/procurement" className="btn-primary text-xs sm:text-sm px-6 py-3.5 shadow-lg">
              Visit Govt &amp; PSU Procurement Center →
            </Link>
            <Link href="/contact" className="btn-secondary text-xs sm:text-sm px-6 py-3.5">
              Request Industry Vulnerability Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* ── 13 SPECIALIZED SECTORS GRID ── */}
      <section className="section-py bg-white">
        <div className="container-acs">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="section-label">Tailored Industry Security</p>
            <h2 className="text-navy text-2xl sm:text-4xl font-roboto font-extrabold">
              Explore Our Sector-Specific Capabilities
            </h2>
            <div className="divider-sky mx-auto my-3" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Click on any sector below to inspect specialized threat challenges, tailored guarding solutions, statutory compliance details, and verifiable client case studies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACS_INDUSTRIES.map((industry) => (
              <Link
                key={industry.slug}
                href={`/sectors/${industry.slug}`}
                className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-sky-300 rounded-2xl p-6 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl p-2.5 rounded-xl bg-white border border-slate-200 group-hover:scale-105 transition-transform">
                      {industry.icon}
                    </span>
                    <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                      {industry.shortName}
                    </span>
                  </div>

                  <h3 className="font-roboto font-bold text-navy text-lg mb-2 group-hover:text-sky transition-colors">
                    {industry.name}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {industry.description}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Key Threats Managed:</p>
                    {industry.keyChallenges.slice(0, 2).map((ch, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <span className="text-red-500 font-bold shrink-0">•</span>
                        <span className="line-clamp-1">{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-sky group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Explore Sector Solutions →
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Case Study Included
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Client Marquee */}
      <ClientMarquee bgClass="bg-slate-50" />

      {/* ── B2G PROCUREMENT LINK CARD ── */}
      <section className="section-py bg-white border-t border-slate-200">
        <div className="container-acs">
          <div className="bg-gradient-to-br from-navy to-navy-dark text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="badge-gold text-xs mb-3 inline-block">For Public Sector Procurement Officers</span>
              <h2 className="text-2xl sm:text-4xl font-roboto font-extrabold mb-3">
                Government &amp; PSU Security Procurement Center
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Are you procuring security, facility management, or workforce outsourcing for a Central Ministry, State Secretariat, Defence base, Railway yard, or Maharatna PSU? Access our full tender documentation dossier, GeM guide, and statutory wage calculation frameworks.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/procurement" className="btn-primary text-sm px-6 py-3">
                  Open Procurement Center
                </Link>
                <Link href="/contact" className="btn-secondary text-sm px-6 py-3">
                  Submit RFP / Tender Enquiry
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full lg:w-auto shrink-0 text-center">
              <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                <div className="text-gold font-bold text-lg">GeM Seller</div>
                <div className="text-xs text-gray-300">Direct &amp; Custom Bids</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                <div className="text-sky font-bold text-lg">PSARA Form V</div>
                <div className="text-xs text-gray-300">State Home Dept.</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                <div className="text-white font-bold text-lg">100% PF &amp; ESI</div>
                <div className="text-xs text-gray-300">Zero Legal Risk</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                <div className="text-gold font-bold text-lg">25+ Years</div>
                <div className="text-xs text-gray-300">Proven Public Record</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
