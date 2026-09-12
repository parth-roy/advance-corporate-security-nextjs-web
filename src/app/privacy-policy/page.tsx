import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { buildBreadcrumbSchema, buildWebPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy | Advance Corporate Security (ACS)",
  description:
    "Privacy Policy of Advance Corporate Security (ACS). Learn how we protect, handle, and safeguard customer, client, and employee data in accordance with applicable Indian laws.",
  alternates: { canonical: `${siteConfig.url}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Privacy Policy", url: `${siteConfig.url}/privacy-policy` },
  ];

  const webPageSchema = buildWebPageSchema({
    title: "Privacy Policy | Advance Corporate Security",
    description: metadata.description as string,
    url: `${siteConfig.url}/privacy-policy`,
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
              <li className="text-gold font-medium" aria-current="page">Privacy Policy</li>
            </ol>
          </nav>
          <h1 className="font-roboto font-black text-white text-3xl sm:text-4xl md:text-5xl mb-3">
            Privacy <span className="text-gold">Policy</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Last Updated: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })} · Advance Corporate Security (ACS)
          </p>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-acs max-w-4xl space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-navy font-roboto font-bold text-xl sm:text-2xl mb-3">1. Information We Collect</h2>
            <p className="mb-3">
              Advance Corporate Security (&ldquo;ACS&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and is committed to protecting the personal information of visitors, clients, and employment candidates. We collect information through our website contact forms, career applications, and customer service inquiries.
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-600">
              <li>Contact details: Name, mobile number, email address, physical location, and company affiliation.</li>
              <li>Job applicant information: Employment history, educational qualifications, ID proof details, and CV/resumes.</li>
              <li>Operational records: Service site locations, visitor logs, and facility specifications necessary for security deployment.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-navy font-roboto font-bold text-xl sm:text-2xl mb-3">2. How We Use Your Information</h2>
            <p className="mb-3">We utilize collected data strictly for lawful business and operational requirements, including:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-600">
              <li>Responding to commercial quote requests and customized service proposals.</li>
              <li>Fulfilling PSARA, EPF, ESIC, and labor department statutory compliance checks for workforce deployment.</li>
              <li>Communicating deployment updates, invoice billing, and customer service follow-ups.</li>
              <li>Verifying candidate background clearances and physical fitness credentials for security guarding roles.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-navy font-roboto font-bold text-xl sm:text-2xl mb-3">3. Data Protection & Confidentiality</h2>
            <p>
              ACS implements industry-standard technical and organizational security controls to prevent unauthorized access, disclosure, or alteration of personal data. We never sell, lease, or rent customer or applicant information to any third-party advertisers. Data is disclosed only to authorized personnel, regulatory authorities when mandated by Indian law, or trusted statutory auditors.
            </p>
          </div>

          <div>
            <h2 className="text-navy font-roboto font-bold text-xl sm:text-2xl mb-3">4. Cookies & Web Analytics</h2>
            <p>
              Our website uses basic performance and security cookies to monitor site functionality, load times, and user experience. You can choose to disable cookies through your browser settings without affecting core browsing functionality.
            </p>
          </div>

          <div>
            <h2 className="text-navy font-roboto font-bold text-xl sm:text-2xl mb-3">5. Contact Our Privacy Officer</h2>
            <p>
              If you have any questions or concerns regarding our privacy practices or wish to review or update your submitted personal details, please contact us at:
            </p>
            <div className="bg-off-white rounded-2xl p-5 border border-gray-200/80 mt-3 space-y-1 text-sm">
              <p className="font-semibold text-navy">Advance Corporate Security</p>
              <p>Address: {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion} — {siteConfig.address.postalCode}</p>
              <p>Email: <a href={`mailto:${siteConfig.email}`} className="text-sky hover:underline">{siteConfig.email}</a></p>
              <p>Phone: {siteConfig.phone}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
