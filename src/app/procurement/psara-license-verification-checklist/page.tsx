import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { buildBreadcrumbSchema, buildFaqSchema, serializeJsonLd } from "@/lib/schema";
import { ShieldCheck, FileCheck2, AlertTriangle, Scale, CheckCircle2, ArrowRight, ExternalLink, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "PSARA License Verification Checklist for Corporate Buyers (2026) | ACS Procurement",
  description:
    "Complete PSARA Form-V verification guide for enterprise procurement heads, plant managers, and CFOs. Learn how to verify state controlling authority licenses, guard training credentials, and eliminate principal employer co-liability under PSARA Act 2005.",
  keywords: [
    "PSARA license verification checklist",
    "How to verify PSARA license",
    "PSARA Form V verification West Bengal",
    "Security vendor onboarding checklist",
    "Principal employer liability private security",
    "PSARA controlling authority verification",
    "Security guard police verification rules",
    "Contract labour statutory compliance security",
    "GeM security service tender checklist",
  ],
  alternates: {
    canonical: `${siteConfig.url}/procurement/psara-license-verification-checklist`,
  },
  openGraph: {
    title: "PSARA License Verification Checklist for Corporate Buyers | Advance Corporate Security",
    description:
      "Enterprise audit protocol for verifying private security agencies under the PSARA Act 2005. Essential reading for procurement and compliance committees.",
    url: `${siteConfig.url}/procurement/psara-license-verification-checklist`,
    images: [{ url: "/images/guarding.jpg", width: 1200, height: 630 }],
  },
};

const guideFaqs = [
  {
    question: "Can a private security agency operate across India on a single PSARA license?",
    answer:
      "No. Under the Private Security Agencies (Regulation) Act, 2005, PSARA licenses (Form-V) are strictly state-specific. Every agency must obtain a separate license from the respective State Controlling Authority (usually the Home Department or State Police Licensing Unit) for each state or Union Territory it operates in. Beware of vendors claiming a single 'pan-India PSARA license'.",
  },
  {
    question: "What is the legal risk to the client (Principal Employer) if a security agency is unlicensed?",
    answer:
      "Deploying guards from an unlicensed security agency violates Section 4 of the PSARA Act 2005 (which makes operating without a license a punishable offense). Additionally, under the Contract Labour (Regulation & Abolition) Act, 1970, the client organization is legally deemed the Principal Employer and carries joint and severable liability for wage defaults, workplace injuries, and statutory non-compliance.",
  },
  {
    question: "How can procurement verify the authenticity of a PSARA Form-V license?",
    answer:
      "Procurement teams should request: (1) A certified copy of the Form-V license; (2) The official verification letter or license number match on the State Home Department PSARA portal; (3) Proof of MoHA-approved guard training facility empanelment; and (4) The agency's official controlling authority renewal status if within the renewal cycle.",
  },
  {
    question: "What mandatory training must guards complete under PSARA rules?",
    answer:
      "As per Section 9 of the PSARA Act 2005, security personnel must complete minimum 100 hours of classroom instruction and 60 hours of field training (ex-servicemen require 40 hours) conducted by a recognized security training institute before physical site deployment.",
  },
];

export default function PsaraVerificationChecklistPage() {
  const pageUrl = `${siteConfig.url}/procurement/psara-license-verification-checklist`;
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Procurement Center", url: `${siteConfig.url}/procurement` },
    { name: "PSARA Verification Checklist", url: pageUrl },
  ];

  const faqSchema = buildFaqSchema(guideFaqs);

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

      {/* ── HERO BANNER ── */}
      <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white py-12 sm:py-16 border-b border-sky-900/30">
        <div className="container-acs max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs text-sky-200/80 flex-wrap">
              {breadcrumbs.map((b, i) => (
                <li key={b.url} className="flex items-center gap-2">
                  {i > 0 && <span className="text-sky-400/50">/</span>}
                  {i < breadcrumbs.length - 1 ? (
                    <Link href={b.url} className="hover:text-white transition-colors">
                      {b.name}
                    </Link>
                  ) : (
                    <span className="text-white font-medium">{b.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck size={14} className="text-gold" />
            <span>Enterprise Procurement Advisory (2026 Edition)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-roboto font-black text-white mb-4 tracking-tight leading-tight">
            PSARA License Verification Checklist for Corporate &amp; Industrial Buyers
          </h1>

          <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed max-w-3xl font-normal">
            A comprehensive, 5-point statutory audit framework for CFOs, Procurement Officers, and Facility Directors to authenticate private security agency licensing, evaluate guard training standards, and eliminate co-liability risks under Indian labour law.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-300 border-t border-white/10 pt-4">
            <span>⏱️ <strong>Read Time:</strong> 6 Mins</span>
            <span>📅 <strong>Updated:</strong> October 2026</span>
            <span>🏛️ <strong>Regulatory Basis:</strong> PSARA Act 2005 &amp; CLRA 1970</span>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ARTICLE ── */}
      <article className="py-12 bg-white">
        <div className="container-acs max-w-4xl space-y-10">

          {/* Alert Box: Executive Warning */}
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-amber-900 text-xs sm:text-sm leading-relaxed flex items-start gap-3.5">
            <AlertTriangle size={22} className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-amber-950 block mb-1">
                Statutory Notice for Tender Evaluation Committees:
              </strong>
              Engaging a private security agency that operates without a valid Form-V license in your establishment&apos;s state jurisdiction exposes your enterprise to prosecution under Section 4 of the PSARA Act 2005. Furthermore, under the Contract Labour (R&amp;A) Act 1970, the Principal Employer becomes strictly liable for all minimum wage arrears, EPF defaults, and workplace incident claims.
            </div>
          </div>

          {/* Section 1: The 5-Point Verification Protocol */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-roboto font-black text-navy mb-4 tracking-tight">
              The 5-Point PSARA Verification Protocol
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              Before issuing a Letter of Intent (LOI) or signing a security services agreement, procurement officers must mandate the following 5 verification checkpoints in their technical envelope:
            </p>

            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "Inspect the Form-V Certificate & Issuing Authority",
                  desc: "Request the original or certified copy of the PSARA Form-V license. Confirm that the issuing authority corresponds to the State Controlling Authority (e.g., Controlling Authority, Private Security Agencies, Govt. of West Bengal or Delhi Police Licensing Unit). Note the exact validity start date and expiry date.",
                },
                {
                  step: "02",
                  title: "Verify District Jurisdiction Boundaries",
                  desc: "PSARA licenses can be granted either for specific named districts or for the entire state. Ensure your facility's physical district is explicitly included in the territorial schedule of the agency's license.",
                },
                {
                  step: "03",
                  title: "Validate Section 9 Security Guard Training Certification",
                  desc: "By law, every guard must undergo 100 hours of classroom curriculum and 60 hours of field training at a state-recognized security training institute. Request batch training completion certificates and syllabus compliance records.",
                },
                {
                  step: "04",
                  title: "Examine Police Verification & Character Records",
                  desc: "Under Section 10 of PSARA, security personnel must possess a formal police verification report or character clearance certificate issued by the competent police commissionerate/SP office prior to site deployment.",
                },
                {
                  step: "05",
                  title: "Audit Monthly Statutory Filings (EPF, ESIC, LWF)",
                  desc: "A licensed vendor must demonstrate flawless statutory discipline. Request current Electronic Challan cum Returns (ECR) for EPF, monthly ESIC contribution challans, and proof of state Labour Welfare Fund compliance.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="p-5 rounded-2xl border border-gray-200/90 bg-slate-50/50 hover:bg-white hover:border-sky-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-xl bg-navy text-gold font-roboto font-black text-sm flex items-center justify-center shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-roboto font-bold text-navy text-base mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Red Flags Table */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-roboto font-black text-navy mb-4 tracking-tight">
              Common Red Flags in Security Bids
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-sky-50 text-navy font-roboto font-bold">
                  <tr>
                    <th className="px-5 py-3.5 border-b border-gray-200">Vendor Claim / Red Flag</th>
                    <th className="px-5 py-3.5 border-b border-gray-200">Statutory Reality</th>
                    <th className="px-5 py-3.5 border-b border-gray-200">Recommended Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  <tr className="hover:bg-slate-50/70">
                    <td className="px-5 py-3.5 font-semibold text-rose-700">&ldquo;We hold a Pan-India PSARA License&rdquo;</td>
                    <td className="px-5 py-3.5">PSARA is strictly state-governed. No single central license exists.</td>
                    <td className="px-5 py-3.5 font-medium">Require separate state-specific Form-V certificates for each deployment state.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70">
                    <td className="px-5 py-3.5 font-semibold text-rose-700">&ldquo;Our renewal application is pending indefinitely&rdquo;</td>
                    <td className="px-5 py-3.5">Rule varies by state, but expired licenses without official receipt create client audit exposure.</td>
                    <td className="px-5 py-3.5 font-medium">Verify official controlling authority renewal submission receipt within prescribed window.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70">
                    <td className="px-5 py-3.5 font-semibold text-rose-700">Quoting 0% or Abnormally Low Service Charges</td>
                    <td className="px-5 py-3.5">Violates Ministry of Finance GeM directives (OM No. F.6/1/2023-PPD); leads to wage cuts.</td>
                    <td className="px-5 py-3.5 font-medium">Reject bid as financially non-viable; adhere to minimum 5%–10% administrative margin.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Verification Resources Box */}
          <section className="bg-gradient-to-br from-navy to-navy-light text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <span className="text-gold font-bold text-xs uppercase tracking-wider mb-2 block">
                Audited Transparency
              </span>
              <h3 className="text-2xl font-roboto font-bold mb-3 text-white">
                Inspect ACS&apos;s Verified Statutory Credentials
              </h3>
              <p className="text-sky-200 text-xs sm:text-sm leading-relaxed mb-6">
                Advance Corporate Security maintains an active, public statutory document repository. Procurement committees can verify our State PSARA licenses (West Bengal, Delhi NCR, Jharkhand), ISO 9001:2015 certificates, EPFO establishment codes, and GeM seller empanelment.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/credentials"
                  className="btn-primary text-xs sm:text-sm py-2.5 px-5 flex items-center gap-2"
                >
                  <FileCheck2 size={16} />
                  <span>Open Credentials Vault</span>
                </Link>
                <Link
                  href="/rate-card-calculator"
                  className="btn-secondary text-xs sm:text-sm py-2.5 px-5 flex items-center gap-2"
                >
                  <span>Interactive Rate Card</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </section>

          {/* Section 4: FAQs */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-roboto font-black text-navy mb-6 tracking-tight">
              Frequently Asked Questions on PSARA Compliance
            </h2>
            <div className="space-y-3">
              {guideFaqs.map((faq) => (
                <div
                  key={faq.question}
                  className="p-5 rounded-2xl border border-gray-200/90 bg-white shadow-2xs"
                >
                  <h3 className="font-roboto font-bold text-navy text-sm sm:text-base mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </article>
    </>
  );
}
