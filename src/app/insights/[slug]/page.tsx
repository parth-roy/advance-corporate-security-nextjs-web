import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/config";
import { ACS_INSIGHTS } from "@/lib/insights";
import { buildBreadcrumbSchema, serializeJsonLd } from "@/lib/schema";
import { Clock, UserCheck, ArrowLeft, ShieldCheck, CheckCircle2, AlertTriangle, FileText } from "lucide-react";

interface Params {
  slug: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  return ACS_INSIGHTS.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const article = ACS_INSIGHTS.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} | ACS Regulatory Insights`,
    description: article.excerpt,
    keywords: article.keywords,
    alternates: {
      canonical: `${siteConfig.url}/insights/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${siteConfig.url}/insights/${article.slug}`,
      images: [{ url: "/images/guarding.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function InsightDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = ACS_INSIGHTS.find((a) => a.slug === slug);
  if (!article) notFound();

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Insights", url: `${siteConfig.url}/insights` },
    { name: article.title, url: `${siteConfig.url}/insights/${article.slug}` },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: article.author.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/acs-official-logo.avif`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/insights/${article.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildBreadcrumbSchema(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleSchema) }}
      />

      <article className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-slate-900 text-white pt-14 pb-16 border-b border-slate-800">
          <div className="container-acs max-w-4xl mx-auto px-4">
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-sky-400 transition mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Insights
            </Link>

            <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
              <span className="font-semibold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                {article.category}
              </span>
              <span className="text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{article.date}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-roboto tracking-tight text-white leading-tight mb-6">
              {article.title}
            </h1>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-800 text-xs text-slate-300">
              <div className="w-8 h-8 rounded-full bg-sky-600/20 text-sky-400 flex items-center justify-center font-bold">
                ACS
              </div>
              <div>
                <p className="font-bold text-white">{article.author.name}</p>
                <p className="text-slate-400">{article.author.role}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="container-acs max-w-4xl mx-auto px-4 py-12 md:py-16">
          {/* Lead Paragraph */}
          <div className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed mb-10 pb-8 border-b border-slate-100">
            {article.content.lead}
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {article.content.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black font-roboto text-slate-900 tracking-tight">
                  {section.heading}
                </h2>

                <div className="space-y-4 text-slate-600 leading-relaxed text-base md:text-lg">
                  {section.body.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {section.callout && (
                  <div className="my-6 rounded-2xl bg-amber-50/80 border border-amber-200/80 p-5 md:p-6 flex items-start gap-4">
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-amber-900 text-sm mb-1">{section.callout.title}</h3>
                      <p className="text-amber-800 text-sm leading-relaxed">{section.callout.text}</p>
                    </div>
                  </div>
                )}

                {section.keyTakeaways && (
                  <div className="my-6 rounded-2xl bg-slate-50 border border-slate-200 p-6">
                    <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Key Audit Checklist:
                    </h3>
                    <ul className="space-y-2">
                      {section.keyTakeaways.map((takeaway, tIdx) => (
                        <li key={tIdx} className="text-sm text-slate-700 flex items-start gap-2">
                          <span className="text-sky-600 font-bold">•</span>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Verification CTA Box */}
          <div className="mt-16 rounded-2xl bg-slate-900 text-white p-8 md:p-10 shadow-lg">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Statutory Shield Guarantee</span>
            <h3 className="text-2xl md:text-3xl font-black font-roboto mt-2 mb-4 text-white">
              Verify Your Vendor&apos;s Compliance Status
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
              Advance Corporate Security provides comprehensive statutory indemnification backed by monthly ECR challan proofs, verified TRRN settlement receipts, and direct Form-V PSARA licenses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/request-audit"
                className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition"
              >
                Request Facility Compliance Audit →
              </Link>
              <Link
                href="/credentials"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition"
              >
                View Regulatory Credentials Vault
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
