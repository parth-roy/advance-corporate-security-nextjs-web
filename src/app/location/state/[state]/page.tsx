// src/app/location/state/[state]/page.tsx
// State Hub PSEO pages — 28 routes
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/config";
import { ACS_CITIES } from "@/lib/cities";
import { buildBreadcrumbSchema, serializeJsonLd } from "@/lib/schema";

interface Params { state: string; }

const STATE_NAMES: Record<string, string> = {
  "andaman-nicobar-islands": "Andaman & Nicobar Islands", "andhra-pradesh": "Andhra Pradesh", "assam": "Assam",
  "bihar": "Bihar", "chandigarh": "Chandigarh", "chhattisgarh": "Chhattisgarh", "delhi": "Delhi",
  "gujarat": "Gujarat", "haryana": "Haryana", "himachal-pradesh": "Himachal Pradesh",
  "jammu-and-kashmir": "Jammu & Kashmir", "jharkhand": "Jharkhand", "karnataka": "Karnataka",
  "kerala": "Kerala", "madhya-pradesh": "Madhya Pradesh", "maharashtra": "Maharashtra",
  "manipur": "Manipur", "meghalaya": "Meghalaya", "odisha": "Odisha", "puducherry": "Puducherry",
  "punjab": "Punjab", "rajasthan": "Rajasthan", "sikkim": "Sikkim", "tamil-nadu": "Tamil Nadu",
  "telangana": "Telangana", "tripura": "Tripura", "uttar-pradesh": "Uttar Pradesh",
  "uttarakhand": "Uttarakhand", "west-bengal": "West Bengal",
};

export async function generateStaticParams(): Promise<Params[]> {
  const stateSlugSet = new Set(ACS_CITIES.map((c) => c.stateSlug));
  return Array.from(stateSlugSet).map((state) => ({ state }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const stateName = STATE_NAMES[stateSlug] ?? stateSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const title = `Security & Facility Management Services in ${stateName} | ACS`;
  const description = `ACS provides PSARA-licensed security guard services, facility management, and manpower outsourcing across all major cities in ${stateName}. ISO 9001:2015 certified. 25+ years. Get free quote.`;
  return {
    title, description,
    keywords: [`security services ${stateName}`, `facility management ${stateName}`, `manpower outsourcing ${stateName}`, `security guard agency ${stateName}`],
    alternates: { canonical: `${siteConfig.url}/location/state/${stateSlug}` },
  };
}

export default async function StateHubPage({ params }: { params: Promise<Params> }) {
  const { state: stateSlug } = await params;
  const stateName = STATE_NAMES[stateSlug];
  if (!stateName) notFound();
  const stateCities = ACS_CITIES.filter((c) => c.stateSlug === stateSlug);
  if (!stateCities.length) notFound();

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Locations", url: `${siteConfig.url}/location` },
    { name: stateName, url: `${siteConfig.url}/location/state/${stateSlug}` },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildBreadcrumbSchema(breadcrumbs)) }} />

      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-16">
        <div className="container-acs">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-400">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.url} className="flex items-center gap-1.5">
                  {i < breadcrumbs.length - 1 ? (
                    <><Link href={crumb.url} className="hover:text-sky-400">{crumb.name}</Link><span>/</span></>
                  ) : (
                    <span className="text-sky-400 font-medium">{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <span className="badge-sky mb-4 inline-block">🗺️ {stateName}</span>
          <h1 className="text-white font-roboto font-black text-3xl sm:text-5xl leading-tight mb-4">
            Security &amp; Facility Management Services in {stateName}
          </h1>
          <p className="text-sky-200 text-lg mb-8 max-w-2xl">
            ACS provides PSARA-licensed security guard services, integrated facility management, and manpower outsourcing across {stateCities.length}+ cities in {stateName}.
          </p>
          <Link href="/contact" className="btn-primary">Get Free Quote</Link>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-acs">
          <div className="text-center mb-10">
            <p className="section-label">Cities We Serve</p>
            <h2 className="text-navy">ACS Services Across <span className="text-sky">{stateName}</span></h2>
            <div className="divider-sky mx-auto" />
            <p className="text-gray-500 mt-3 text-sm">{stateCities.length} cities served across {stateName}</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {stateCities.sort((a, b) => a.tier - b.tier || a.name.localeCompare(b.name)).map((city) => (
              <Link
                key={city.slug}
                href={`/location/${city.slug}`}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all hover:shadow-md ${
                  city.tier === 1
                    ? "bg-navy text-white border-navy hover:bg-navy-light"
                    : city.tier === 2
                    ? "bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100"
                    : "bg-white text-gray-700 border-gray-200 hover:border-sky-300 hover:text-sky-700"
                }`}
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-navy text-white text-center">
        <div className="container-acs">
          <h2 className="text-white font-roboto font-bold text-2xl mb-3">Need ACS Services in {stateName}?</h2>
          <p className="text-gray-300 mb-6 text-sm max-w-lg mx-auto">PSARA licensed · ISO 9001:2015 · 25+ years · Full statutory compliance · 24-72 hour deployment</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Get Free Consultation</Link>
            <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="btn-secondary">📞 {siteConfig.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}