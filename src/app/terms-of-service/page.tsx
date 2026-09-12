import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { buildBreadcrumbSchema, buildWebPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Terms of Service | Advance Corporate Security (ACS)",
  description:
    "Terms and Conditions governing the security guard services, facility management, and workforce outsourcing provided by Advance Corporate Security (ACS).",
  alternates: { canonical: `${siteConfig.url}/terms-of-service` },
};

export default function TermsOfServicePage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Terms of Service", url: `${siteConfig.url}/terms-of-service` },
  ];

  const webPageSchema = buildWebPageSchema({
    title: "Terms of Service | Advance Corporate Security",
    description: metadata.description as string,
    url: `${siteConfig.url}/terms-of-service`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildBreadcrumbSchema(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(webPageSchema) }}
      />

      <section className="bg-navy text-white py-12 md:py-16">
        <div className="container-acs">
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex items-center gap-2 text-xs sm:text-sm text-gray-400" role="list">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li aria-hidden="true"><span>/</span></li>
              <li className="text-gold font-medium" aria-current="page">Terms of Service</li>
            </ol>
          </nav>
          <h1 className="font-roboto font-black text-white text-3xl sm:text-4xl md:text-5xl mb-3">
            Terms of <span className="text-gold">Service</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Standard Service Terms & Operational Conditions · Advance Corporate Security (ACS)
          </p>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-acs max-w-4xl space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-navy font-roboto font-bold text-xl sm:text-2xl mb-3">1. Scope of Agreement</h2>
            <p>
              By accessing the website of Advance Corporate Security (&ldquo;ACS&rdquo;) or engaging our security guard, facility management, housekeeping, or manpower outsourcing services, you agree to comply with and be bound by these Terms of Service. Individual client service contracts and Service Level Agreements (SLAs) executed in writing shall take precedence over general website terms in the event of any conflict.
            </p>
          </div>

          <div>
            <h2 className="text-navy font-roboto font-bold text-xl sm:text-2xl mb-3">2. Statutory Compliance & PSARA Licensing</h2>
            <p>
              All security guard services provided by ACS strictly comply with the Private Security Agencies (Regulation) Act, 2005 (PSARA), state controlling authority guidelines, Minimum Wages Act, Employee Provident Fund (EPF), Employee State Insurance (ESIC), and applicable labor legislations. All security personnel are verified through local police background checks and certified through accredited training institutes before deployment.
            </p>
          </div>

          <div>
            <h2 className="text-navy font-roboto font-bold text-xl sm:text-2xl mb-3">3. Client Responsibilities & Post Orders</h2>
            <p>
              Clients engaging ACS agree to provide reasonable and safe operating conditions at deployed premises, including designated guard shelters, sanitation access, and clear post orders defining visitor protocols and emergency points of contact. ACS reserves the right to withdraw personnel from hazardous environments that violate Indian occupational safety norms.
            </p>
          </div>

          <div>
            <h2 className="text-navy font-roboto font-bold text-xl sm:text-2xl mb-3">4. Intellectual Property</h2>
            <p>
              All website content, trademarks, logos, photographs, diagrams, and written collateral displayed on this site are the exclusive property of Advance Corporate Security. Unauthorized copying, scraping, or commercial republishing is strictly prohibited without prior written consent.
            </p>
          </div>

          <div>
            <h2 className="text-navy font-roboto font-bold text-xl sm:text-2xl mb-3">5. Governing Law & Jurisdiction</h2>
            <p>
              These terms and all commercial service engagements shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the competent courts in Kolkata / Barrackpore, West Bengal.
            </p>
          </div>

          <div>
            <h2 className="text-navy font-roboto font-bold text-xl sm:text-2xl mb-3">6. Contact & Legal Inquiries</h2>
            <div className="bg-off-white rounded-2xl p-5 border border-gray-200/80 space-y-1 text-sm">
              <p className="font-semibold text-navy">Advance Corporate Security</p>
              <p>Barrackpore, Kolkata, West Bengal — 700120</p>
              <p>Phone: {siteConfig.phone}</p>
              <p>Email: <a href={`mailto:${siteConfig.email}`} className="text-sky hover:underline">{siteConfig.email}</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
