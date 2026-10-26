import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { ACS_INSIGHTS } from "@/lib/insights";
import { buildBreadcrumbSchema, serializeJsonLd } from "@/lib/schema";
import { BookOpen, ShieldCheck, Scale, FileText, ArrowRight, Clock, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Security & Statutory Insights | Regulatory Compliance Whitepapers | ACS",
  description:
    "Authoritative regulatory guides, labour law updates, and industrial security operational blueprints for facility managers, plant heads, and procurement directors by Advance Corporate Security.",
  keywords: [
    "Security industry insights India",
    "Statutory labour law updates security agency",
    "EPF Section 7A compliance guide",
    "West Bengal minimum wage gazette breakdown",
    "GeM security procurement guidelines",
    "Logistics warehouse security SOP",
  ],
  alternates: {
    canonical: `${siteConfig.url}/insights`,
  },
  openGraph: {
    title: "Enterprise Security & Statutory Insights | Advance Corporate Security",
    description:
      "Expert regulatory and operational intelligence for enterprise security and facility management.",
    url: `${siteConfig.url}/insights`,
    images: [{ url: "/images/guarding.jpg", width: 1200, height: 630 }],
  },
};

export default function InsightsIndexPage() {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Enterprise Insights", url: `${siteConfig.url}/insights` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildBreadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white pt-16 pb-16 relative overflow-hidden border-b border-slate-800">
        <div className="container-acs relative z-10 max-w-5xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs text-slate-400">
              <li><Link href="/" className="hover:text-sky-400 transition">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-sky-400 font-medium" aria-current="page">Insights</li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            Executive Intelligence &amp; Statutory Research
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-roboto tracking-tight mb-4 text-white">
            Enterprise Security &amp; Regulatory Insights
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            In-depth operational analyses, labour compliance gazette interpretations, and technical procurement frameworks curated by the statutory and operations directorship of Advance Corporate Security.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-py bg-slate-50 min-h-screen">
        <div className="container-acs max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ACS_INSIGHTS.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-7">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-semibold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-black text-slate-900 group-hover:text-sky-700 transition leading-snug mb-3">
                    <Link href={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="px-7 py-4 bg-slate-50/60 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <UserCheck className="w-4 h-4 text-sky-600" />
                    <span>{article.author.name}</span>
                  </div>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1 text-sky-600 font-bold group-hover:translate-x-0.5 transition"
                  >
                    Read Paper <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Compliance Assurance Box */}
          <div className="mt-16 bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Enterprise Due Diligence</span>
              <h3 className="text-2xl font-black text-slate-900 mt-1 mb-3">
                Need a Custom Regulatory Opinion for Your Facility?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Our statutory compliance desk provides complimentary contract labour liability reviews, minimum wage audit verifications, and site risk assessments for manufacturing plants and commercial properties across Eastern India.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/request-audit"
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition"
                >
                  Book Statutory Facility Audit →
                </Link>
                <Link
                  href="/credentials"
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition"
                >
                  View Statutory Credentials Vault
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
