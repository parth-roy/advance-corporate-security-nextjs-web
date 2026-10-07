'use client';

import React, { useState } from 'react';

interface HyperLocalFAQProps {
  serviceName: string;
  cityName: string;
  districtName: string;
  industryName: string;
  wageZone: 'A' | 'B';
  nearestHQ: string;
  slaHours: number;
}

export default function HyperLocalFAQ({
  serviceName,
  cityName,
  districtName,
  industryName,
  wageZone,
  nearestHQ,
  slaHours,
}: HyperLocalFAQProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: `Does ACS hold a valid PSARA license to provide ${serviceName.toLowerCase()} in ${cityName}, West Bengal?`,
      a: `Yes. Advance Corporate Security (ACS) holds an active, legally verified PSARA License issued by the Controlling Authority, Private Security Agencies, Government of West Bengal. Our license fully covers ${districtName} District and all jurisdictions of ${cityName}, authorizing both armed and unarmed security operations.`,
    },
    {
      q: `What are the statutory minimum wage rates for security personnel in ${cityName} (${districtName})?`,
      a: `${cityName} falls under West Bengal Minimum Wages Act Zone ${wageZone}. As per the latest Government of West Bengal Labour Department notification, the minimum wage for unskilled security personnel is ${wageZone === 'A' ? '₹11,615+' : '₹9,800+'} per month, with statutory EPF (12%), ESIC (3.25%), Bonus (8.33%), and West Bengal Labour Welfare Fund (LWF) contributions. ACS strictly adheres to these mandates with 100% bank-credited wages.`,
    },
    {
      q: `How quickly can ACS mobilize ${serviceName.toLowerCase()} for an enterprise in ${cityName}?`,
      a: `Backed by our regional operational base at ${nearestHQ}, ACS provides a guaranteed rapid deployment mobilization timeline of ${slaHours} to 24 hours from contract finalization. Emergency reinforcement guards or replacement sentries can be mobilized in less than 4 hours.`,
    },
    {
      q: `What specialized security protocols does ACS deploy for the ${industryName} sector in ${cityName}?`,
      a: `For ${industryName} establishments in ${cityName}, ACS deploys sector-specific protocols including computerized gate pass registers, weighbridge dual-verification, anti-pilferage frisking, emergency evacuation marshals, and round-the-clock patrol wands with RFID checkpoint verification.`,
    },
    {
      q: `How does ACS protect the Principal Employer from labour law liabilities in West Bengal?`,
      a: `Under Section 21 of the Contract Labour (R&A) Act, 1970, Principal Employers can be held liable if contractors default on statutory dues. ACS completely eliminates this risk by submitting audited EPFO ECR challans, ESIC monthly payment receipts, and bank wage debit slips with every monthly invoice, accompanied by a comprehensive corporate legal indemnity guarantee.`,
    },
    {
      q: `How are deployed security personnel in ${cityName} supervised and audited?`,
      a: `ACS operates a two-tier oversight model. On-site Security Supervisors oversee daily shift turnarounds, while mobile Field Officers conduct surprise day and midnight inspections twice weekly. Night patrol sentries carry GPS-enabled electronic patrol wands, and digital attendance logs are synchronized daily with our central operations control room.`,
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      {/* FAQPage JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-200 mb-3">
            ❓ Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
            B2B Procurement FAQs: {serviceName} in {cityName}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Clear, authoritative answers to statutory, operational, and commercial questions regarding deployments in {districtName} District.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/80 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-4 sm:py-5 px-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-sky-700 transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-mono text-sm shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
