import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { buildBreadcrumbSchema, buildWebPageSchema, serializeJsonLd } from "@/lib/schema";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
  title: "Official Photo Gallery — Operations, Training & Drills | Advance Corporate Security (ACS)",
  description:
    "Explore real on-ground photos of Advance Corporate Security (ACS). View security guard deployments, PSARA training drills, VIP protection details, facility management, and awards across India.",
  alternates: { canonical: `${siteConfig.url}/gallery` },
};

export default function GalleryPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Gallery", url: `${siteConfig.url}/gallery` },
  ];

  const webPageSchema = buildWebPageSchema({
    title: "Official Photo Gallery | Advance Corporate Security",
    description: metadata.description as string,
    url: `${siteConfig.url}/gallery`,
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

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-navy via-navy to-navy-light text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-acs relative z-10">
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex items-center gap-2 text-xs sm:text-sm text-gray-400" role="list">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li aria-hidden="true"><span>/</span></li>
              <li className="text-gold font-medium" aria-current="page">Gallery</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 badge-gold mb-3">
            <span>📸</span>
            <span>25+ Years of Operational Discipline</span>
          </div>
          <h1 className="font-roboto font-black text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-3">
            On-Ground <span className="text-sky">Action & Deployments</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Witness our rigorously trained security forces, facility management teams, fire drills, and executive protection details in action across critical infrastructure, PSUs, and corporate landmarks.
          </p>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="section-py bg-off-white" aria-labelledby="gallery-heading">
        <div className="container-acs">
          <div className="text-center mb-8">
            <p className="section-label">Field Portfolio</p>
            <h2 id="gallery-heading" className="text-navy font-roboto font-black text-2xl sm:text-3xl md:text-4xl">
              Visual <span className="text-sky">Excellence in Motion</span>
            </h2>
            <div className="divider-sky mx-auto" />
            <p className="text-gray-600 max-w-2xl mx-auto text-xs sm:text-sm">
              Filter through our categorized operational photo archives below. Click any image to view in high resolution.
            </p>
          </div>

          <GalleryClient />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy text-white py-14">
        <div className="container-acs text-center max-w-3xl">
          <h2 className="font-roboto font-black text-white text-2xl sm:text-3xl md:text-4xl mb-4">
            Need High-Vigilance <span className="text-gold">Security or Facility</span> Management?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
            ACS delivers PSARA-licensed security guards, disciplined supervisors, and ISO 9001:2015 certified operations with rapid pan-India deployment.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
              className="btn-primary text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="btn-secondary text-sm sm:text-base px-7 py-3.5 rounded-xl inline-flex items-center gap-2"
            >
              Request Free Proposal →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
