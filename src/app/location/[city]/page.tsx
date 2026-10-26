// src/app/location/[city]/page.tsx
// ============================================================
// ACS — City Hub Page (580+ routes)
// Scenario 3: /location/[city]
// All ACS services for one city
// ============================================================
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/config";
import { ACS_SERVICES } from "@/lib/services";
import { ACS_CITIES, getCityBySlug } from "@/lib/cities";
import {
  generateCityHubFaqs,
  getLocalDeploymentZones,
  getStateWageFramework,
  getCityRiskAssessment,
} from "@/lib/locationFaqHelper";
import { buildFaqSchema, buildBreadcrumbSchema, buildCityLocalBusinessSchema, serializeJsonLd } from "@/lib/schema";
import CityMap from "@/components/common/CityMap";
import EvidenceTrustEngine from "@/components/common/EvidenceTrustEngine";

interface Params { city: string; }

const HIGH_PRIORITY_HUBS = [
  "kolkata", "dankuni", "howrah", "barrackpore", "durgapur",
  "asansol", "haldia", "siliguri", "delhi", "noida",
  "gurgaon", "ranchi", "jamshedpur", "bhubaneswar", "guwahati",
  "patna", "mumbai", "bengaluru", "hyderabad", "chennai",
  "pune", "ahmedabad", "jaipur", "lucknow", "chandigarh",
];

export async function generateStaticParams(): Promise<Params[]> {
  // Prerender the top 25 high-priority commercial & industrial hubs for fast ISR caching
  return HIGH_PRIORITY_HUBS.map((city) => ({ city }));
}
export const dynamicParams = true;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { city: citySlug } = await params;
  const cityData = getCityBySlug(citySlug);
  if (!cityData) return {};
  const { name: cityName, state: stateName } = cityData;
  const isDirectPsaraState = ["West Bengal", "Delhi", "Jharkhand"].includes(stateName);
  const title = isDirectPsaraState
    ? `PSARA Form-V Licensed Security & Facility Management in ${cityName} | ACS`
    : `Enterprise Security & Facility Management Services in ${cityName} | ACS`;
  const description = isDirectPsaraState
    ? `Advance Corporate Security in ${cityName}, ${stateName} — Direct PSARA Form-V licensed security guards, corporate housekeeping, facility management & manpower. ISO 9001:2015 certified.`
    : `Advance Corporate Security in ${cityName}, ${stateName} — ISO 9001:2015 certified facility management, corporate housekeeping, and compliant partner-network security deployment across ${cityName}.`;
  const canonical = `${siteConfig.url}/location/${citySlug}`;

  // Indexing strategy: Full indexing enabled across ALL city pages (Zero noindex)
  const robotsMeta: Metadata['robots'] = {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  };

  return {
    title,
    description,
    keywords: [
      `security services in ${cityName}`,
      `facility management ${cityName}`,
      `manpower outsourcing ${cityName}`,
      `security guard agency ${cityName}`,
      `corporate housekeeping ${cityName}`,
      `PSARA licensed security ${cityName}`,
      `contract staffing ${cityName}`,
      `minimum wage compliance ${cityName}`,
    ],
    alternates: { canonical },
    openGraph: { title, description, url: canonical },
    robots: robotsMeta,
  };
}

export default async function CityHubPage({ params }: { params: Promise<Params> }) {
  const { city: citySlug } = await params;
  const cityData = getCityBySlug(citySlug);
  if (!cityData) notFound();
  const { name: cityName, state: stateName, stateSlug, tier = 2 } = cityData;
  const isDirectPsaraState = ["West Bengal", "Delhi", "Jharkhand"].includes(stateName);

  const faqs = generateCityHubFaqs(cityName, stateName);
  const wageFramework = getStateWageFramework(stateName);
  const riskAssessment = getCityRiskAssessment(cityName, stateName, tier);
  const faqSchema = buildFaqSchema(faqs);
  const localBusinessSchema = buildCityLocalBusinessSchema({
    cityName,
    stateName,
    citySlug,
  });
  const localZones = getLocalDeploymentZones(cityName, stateName);
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Locations", url: `${siteConfig.url}/location` },
    { name: stateName, url: `${siteConfig.url}/location/state/${stateSlug}` },
    { name: cityName, url: `${siteConfig.url}/location/${citySlug}` },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildBreadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(localBusinessSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }} />}

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-10 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "32px 32px" }} aria-hidden="true" />
        <div className="container-acs relative z-10">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-400">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.url} className="flex items-center gap-1.5">
                  {i < breadcrumbs.length - 1 ? (
                    <><Link href={crumb.url} className="hover:text-sky-400">{crumb.name}</Link><span aria-hidden="true">/</span></>
                  ) : (
                    <span className="text-sky-400 font-medium">{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="badge-sky">📍 {cityName}</span>
            <span className="badge-gold">🏛️ {stateName}</span>
            <span className="badge-navy border border-white/20">
              {isDirectPsaraState ? "PSARA Form-V Licensed" : "Empanelled Partner Network"}
            </span>
          </div>
          <h1 className="text-white font-roboto font-black text-2xl sm:text-4xl lg:text-5xl leading-tight mb-4 max-w-4xl break-words">
            {isDirectPsaraState
              ? `PSARA Form-V Licensed Security & Facility Management Services in ${cityName}`
              : `Enterprise Security & Facility Management Services in ${cityName}`}
          </h1>
          <p className="text-sky-200 text-sm sm:text-lg mb-5 sm:mb-8 max-w-2xl">
            {isDirectPsaraState
              ? `Direct state-licensed security guards, corporate housekeeping, and compliant contract staffing across ${cityName}, ${stateName}.`
              : `ISO 9001:2015 certified corporate housekeeping, facility management, and compliant partner-network security deployed across ${cityName}, ${stateName}.`}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/quote" className="btn-primary text-center">Get Free Quote in {cityName}</Link>
            <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="btn-secondary text-center">📞 {siteConfig.phone}</a>
          </div>
        </div>
      </section>

      {/* GEO Fact Box */}
      <section className="py-5 bg-sky-50 border-b border-sky-100">
        <div className="container-acs">
          <div className="geo-fact-box">
            <p className="text-xs font-bold text-sky-700 uppercase tracking-wider mb-3 font-roboto">📋 ACS in {cityName} — Quick Facts</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {[
                {
                  label: isDirectPsaraState ? "PSARA License" : "Compliance Model",
                  value: isDirectPsaraState ? "Form-V (State Authority)" : "Partner Network / CLRA",
                },
                { label: "ISO Certification", value: "9001:2015 + IAF/IAS" },
                { label: "Experience", value: "25+ Years (Since 2000)" },
                { label: "Statutory Compliance", value: "PF, ESIC, Min. Wage Act" },
              ].map((f) => (
                <div key={f.label} className="bg-white rounded p-2.5 border border-sky-100 text-center">
                  <div className="font-black text-navy text-sm">{f.value}</div>
                  <div className="text-sky-600 text-xs mt-0.5">{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Hyper-Local Industrial & Commercial Deployment Zones (Prevents Scaled Content Abuse) */}
      <section className="py-8 bg-slate-50 border-b border-slate-200/80" aria-label={`Operational sectors in ${cityName}`}>
        <div className="container-acs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <p className="section-label">Verified Regional Presence</p>
              <h2 className="text-navy text-xl sm:text-2xl font-bold font-roboto">
                Key Industrial Corridors &amp; Commercial Hubs in <span className="text-sky">{cityName}</span>
              </h2>
            </div>
            <span className="badge-sky self-start sm:self-auto text-xs">
              ⚡ 24×7 Rapid SLA Mobilization
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {localZones.map((zone, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs hover:border-sky-300 hover:shadow-xs transition-all"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 font-roboto">
                    {zone.type}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-navy font-roboto line-clamp-1">{zone.name}</h3>
                <p className="text-xs text-slate-500 mt-1 flex items-center justify-between">
                  <span>Coverage Range:</span>
                  <span className="font-semibold text-slate-700">{zone.distance}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Industrial Risk Assessment & Security SOP Architecture */}
      <section className="py-12 bg-white border-b border-slate-200" aria-label={`Security risk assessment and SOP architecture in ${cityName}`}>
        <div className="container-acs">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="badge-navy text-xs font-roboto">{riskAssessment.tierLabel}</span>
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                  riskAssessment.riskRating === 'High' 
                    ? 'bg-rose-100 text-rose-800 border border-rose-200' 
                    : 'bg-amber-100 text-amber-800 border border-amber-200'
                }`}>
                  Risk Rating: {riskAssessment.riskRating}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-roboto text-navy">
                Industrial Risk Assessment &amp; Security SOPs — <span className="text-sky">{cityName}</span>
              </h2>
              <p className="text-gray-600 text-sm mt-1 max-w-2xl">
                Operational risk profile: <strong className="text-slate-800">{riskAssessment.economicArchetype}</strong>
              </p>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
              <div className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl text-center">
                <div className="text-xs text-slate-500 font-medium">Deployment SLA</div>
                <div className="text-sm font-bold text-navy font-roboto">⚡ 24–48 Hours</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl text-center">
                <div className="text-xs text-slate-500 font-medium">Supervisory Response</div>
                <div className="text-sm font-bold text-emerald-700 font-roboto">🚨 {riskAssessment.supervisoryResponseTime}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Threat Vulnerabilities Column */}
            <div className="lg:col-span-1 bg-slate-50/70 border border-slate-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-navy font-bold text-sm mb-4 font-roboto">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" />
                Key Local Threat Vectors &amp; Choke Points
              </div>
              <ul className="space-y-3">
                {riskAssessment.primaryVulnerabilities.map((threat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                    <span className="text-rose-500 font-bold shrink-0 mt-0.5">⚠️</span>
                    <span>{threat}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500 space-y-2">
                <div className="flex items-center justify-between">
                  <span>Reliever Pool Reserve:</span>
                  <strong className="text-slate-700 font-semibold">{riskAssessment.relieverPoolBuffer}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Control Room:</span>
                  <strong className="text-slate-700 font-semibold">24×7 Active Monitoring</strong>
                </div>
              </div>
            </div>

            {/* Recommended SOPs Column */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {riskAssessment.recommendedSops.map((sop) => (
                <div key={sop.code} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-sky-300 transition-all shadow-2xs">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold text-sky-700 font-mono bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                      {sop.code}
                    </span>
                    <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                      Enforced SOP
                    </span>
                  </div>
                  <h3 className="font-bold text-navy text-sm font-roboto mb-1">{sop.name}</h3>
                  <p className="text-xs text-slate-500 italic mb-2">{sop.objective}</p>
                  <p className="text-xs text-slate-700 leading-relaxed border-t border-slate-100 pt-2">
                    {sop.implementation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-py bg-white">
        <div className="container-acs">
          <div className="text-center mb-10">
            <p className="section-label">Available Services</p>
            <h2 className="text-navy">All ACS Services in <span className="text-sky">{cityName}</span></h2>
            <div className="divider-sky mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ACS_SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/${citySlug}`}
                className="p-5 border border-gray-200 rounded-xl hover:border-sky-300 hover:bg-sky-50 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0" aria-hidden="true">{service.icon}</span>
                  <div>
                    <div className="font-roboto font-bold text-navy text-sm group-hover:text-sky transition-colors">{service.name}</div>
                    <div className="text-xs text-gray-500 mt-1 line-clamp-2">{service.description}</div>
                  </div>
                </div>
                <div className="mt-3 text-xs text-sky font-medium group-hover:gap-2 transition-all flex items-center gap-1">
                  View in {cityName} →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic City Deployment Map */}
      <section className="section-py bg-gray-50 border-t border-gray-200/70" aria-label={`Operational map of ACS in ${cityName}`}>
        <div className="container-acs">
          <div className="text-center mb-10">
            <p className="section-label">Operational Network</p>
            <h2 className="text-navy text-2xl sm:text-3xl font-roboto font-bold">
              ACS Operational Footprint — <span className="text-sky">{cityName}</span>
            </h2>
            <div className="divider-sky mx-auto" />
            <p className="text-gray-600 text-sm mt-3 max-w-xl mx-auto">
              24×7 rapid deployment coverage across {cityName}, {stateName} commercial districts, tech parks, and industrial corridors.
            </p>
          </div>
          <CityMap cityName={cityName} stateName={stateName} />
        </div>
      </section>

      {/* 15-Parameter Enterprise Trust & Evidence Engine */}
      <EvidenceTrustEngine cityName={cityName} stateName={stateName} />

      {/* State Minimum Wage Framework & Labour Sphere Alignment */}
      <section className="py-12 bg-slate-50 border-t border-b border-slate-200" aria-label={`Statutory wage framework in ${cityName}`}>
        <div className="container-acs">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="section-label">Statutory Governance &amp; Labour Compliance</p>
            <h2 className="text-2xl sm:text-3xl font-bold font-roboto text-navy">
              Statutory Wage Framework &amp; Sphere Alignment — <span className="text-sky">{cityName}</span>
            </h2>
            <div className="divider-sky mx-auto" />
            <p className="text-gray-600 text-sm mt-3">
              100% compliant with the Minimum Wages Act, 1948 and statutory labour notifications for {stateName}. Zero joint liability for principal employers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs text-center">
              <div className="text-xs font-bold text-sky uppercase tracking-wider mb-1">Employees Provident Fund</div>
              <div className="font-roboto font-black text-navy text-2xl">13.00%</div>
              <div className="text-[11px] text-slate-500 mt-1">12% EPF + 0.5% EDLI + 0.5% Admin Charges</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs text-center">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">State Insurance (ESIC)</div>
              <div className="font-roboto font-black text-navy text-2xl">3.25%</div>
              <div className="text-[11px] text-slate-500 mt-1">Employer contribution (Gross wages ≤ ₹21,000/mo)</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs text-center">
              <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">Statutory Bonus</div>
              <div className="font-roboto font-black text-navy text-2xl">8.33%</div>
              <div className="text-[11px] text-slate-500 mt-1">Payment of Bonus Act, 1965 statutory floor</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs text-center">
              <div className="text-xs font-bold text-purple-700 uppercase tracking-wider mb-1">Gratuity Accrual</div>
              <div className="font-roboto font-black text-navy text-2xl">4.81%</div>
              <div className="text-[11px] text-slate-500 mt-1">Payment of Gratuity Act, 1972 statutory reserve</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-bold text-navy font-roboto mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky" />
                  Labour Sphere Jurisdiction ({wageFramework.sphere})
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {wageFramework.sphereDescription}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-navy font-roboto mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  Labour Welfare Fund &amp; Bi-Annual Revisions
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-2">
                  <strong className="text-slate-800">LWF Contribution:</strong> {wageFramework.lwfDetails}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-800">Wage Revision Cycle:</strong> {wageFramework.wageRevisionFrequency}
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
              <p className="italic">
                🛡️ {wageFramework.complianceAssurance}
              </p>
              <Link href="/credentials" className="text-sky font-bold hover:underline shrink-0 flex items-center gap-1">
                Verify Statutory Credentials →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-off-white">
        <div className="container-acs max-w-3xl">
          <div className="text-center mb-8">
            <p className="section-label">FAQs</p>
            <h2 className="text-navy text-2xl font-roboto font-bold">ACS in {cityName} — Common Questions</h2>
            <div className="divider-sky mx-auto" />
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-lg overflow-hidden bg-white">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-roboto font-600 text-navy hover:bg-sky-50 transition-colors list-none">
                  <span>{faq.question}</span>
                  <svg className="w-5 h-5 text-sky shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-navy text-white text-center">
        <div className="container-acs">
          <h2 className="text-white font-roboto font-bold text-2xl mb-3">Get ACS Services in {cityName} Today</h2>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto text-sm">Free site assessment. Customised proposal in 24–48 hours. 25+ years of trusted service.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Request Free Quote</Link>
            <Link href={`/location/state/${stateSlug}`} className="btn-secondary">More cities in {stateName}</Link>
          </div>
        </div>
      </section>
    </>
  );
}