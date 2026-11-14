import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import {
  KA_WAGES_ZONE_1,
  KA_WAGES_ZONE_2,
  KA_WAGES_ZONE_3,
  KA_CURRENT_PERIOD,
  KA_EPF_EMPLOYER_RATE,
  KA_ESIC_EMPLOYER_RATE,
  KA_WC_GPA_RATE,
  KA_BONUS_RATE,
  KA_GRATUITY_RATE,
  KA_LWF,
} from "@/lib/ka-wages";

export const metadata: Metadata = {
  title: "Karnataka Minimum Wage Calculator 2026 | ACS Procurement",
  description:
    "Official Karnataka Consolidated Notification No. KAE 411 LWA 2023 minimum wage guidelines for security, aerospace, IT parks, and KIADB industrial workforce. Calculate EPF, ESIC, and KLWF statutory burdens.",
  alternates: {
    canonical: `${siteConfig.url}/procurement/security-minimum-wages-karnataka`,
  },
};

export default function KarnatakaMinimumWagePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-16">
        <div className="container-acs">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-sky-200">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li><Link href="/procurement" className="hover:text-white">Procurement</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Karnataka Minimum Wages</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black font-roboto mb-4">
            Karnataka Minimum Wage for Security &amp; Industrial Manpower (2026)
          </h1>
          <p className="text-sky-200 text-lg max-w-3xl">
            Official statutory wage schedules under Consolidated Notification No. KAE 411 LWA 2023 (effective May 2026), VDA notifications, KLWF rules, and KIADB industrial compliance for enterprise procurement officers and plant heads.
          </p>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-acs max-w-5xl">
          {/* Karnataka Consolidated Notification Slabs */}
          <div className="mb-12">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
              <div>
                <span className="text-xs font-bold text-sky uppercase tracking-wider font-roboto">Unified Gazette</span>
                <h2 className="text-2xl font-bold text-navy">
                  Unified Minimum Wage Slabs ({KA_CURRENT_PERIOD})
                </h2>
              </div>
              <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-medium">
                Notification No. KAE 411 LWA 2023 (Gazetted 25 May 2026)
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Karnataka&apos;s landmark reform superseded 81 fragmented industry schedules into 3 unified territorial zones. The unified Variable Dearness Allowance (VDA) is <strong>₹1,030.80/mo</strong> across all zones (reviewed annually in April).
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-xs">
              <table className="w-full text-left text-sm">
                <thead className="bg-sky-50 text-navy">
                  <tr>
                    <th className="px-5 py-3.5 font-bold border-b border-gray-200">Trade Category</th>
                    <th className="px-5 py-3.5 font-bold border-b border-gray-200">Zone 1 (Greater Bengaluru / BBMP)</th>
                    <th className="px-5 py-3.5 font-bold border-b border-gray-200">Zone 2 (Mysuru, Hubballi, Belagavi, Mangaluru)</th>
                    <th className="px-5 py-3.5 font-bold border-b border-gray-200">Zone 3 (Other Areas &amp; Rural Belts)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  <tr>
                    <td className="px-5 py-3.5 font-medium text-gray-900">
                      Unskilled
                      <span className="block text-xs text-gray-400">Security Guard, Sweeper, Hamali Loader, Factory Helper</span>
                    </td>
                    <td className="px-5 py-3.5 font-semibold text-navy">₹{KA_WAGES_ZONE_1.unskilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500 font-normal"> (₹{KA_WAGES_ZONE_1.unskilled.daily}/day)</span></td>
                    <td className="px-5 py-3.5">₹{KA_WAGES_ZONE_2.unskilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500"> (₹{KA_WAGES_ZONE_2.unskilled.daily}/day)</span></td>
                    <td className="px-5 py-3.5">₹{KA_WAGES_ZONE_3.unskilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500"> (₹{KA_WAGES_ZONE_3.unskilled.daily}/day)</span></td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-medium text-gray-900">
                      Semi-Skilled
                      <span className="block text-xs text-gray-400">Head Guard, Warehouse Picker/Packer, Drill Machine Helper</span>
                    </td>
                    <td className="px-5 py-3.5 font-semibold text-navy">₹{KA_WAGES_ZONE_1.semiSkilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500 font-normal"> (₹{KA_WAGES_ZONE_1.semiSkilled.daily}/day)</span></td>
                    <td className="px-5 py-3.5">₹{KA_WAGES_ZONE_2.semiSkilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500"> (₹{KA_WAGES_ZONE_2.semiSkilled.daily}/day)</span></td>
                    <td className="px-5 py-3.5">₹{KA_WAGES_ZONE_3.semiSkilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500"> (₹{KA_WAGES_ZONE_3.semiSkilled.daily}/day)</span></td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-medium text-gray-900">
                      Skilled
                      <span className="block text-xs text-gray-400">Armed Guard, ITI Electrician, CNC Operator, Welder, Plumber</span>
                    </td>
                    <td className="px-5 py-3.5 font-semibold text-navy">₹{KA_WAGES_ZONE_1.skilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500 font-normal"> (₹{KA_WAGES_ZONE_1.skilled.daily}/day)</span></td>
                    <td className="px-5 py-3.5">₹{KA_WAGES_ZONE_2.skilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500"> (₹{KA_WAGES_ZONE_2.skilled.daily}/day)</span></td>
                    <td className="px-5 py-3.5">₹{KA_WAGES_ZONE_3.skilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500"> (₹{KA_WAGES_ZONE_3.skilled.daily}/day)</span></td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-medium text-gray-900">
                      Highly Skilled
                      <span className="block text-xs text-gray-400">Chief Security Officer, Chiller Tech, Aerospace Cleanroom Sup</span>
                    </td>
                    <td className="px-5 py-3.5 font-semibold text-navy">₹{KA_WAGES_ZONE_1.highlySkilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500 font-normal"> (₹{KA_WAGES_ZONE_1.highlySkilled.daily}/day)</span></td>
                    <td className="px-5 py-3.5">₹{KA_WAGES_ZONE_2.highlySkilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500"> (₹{KA_WAGES_ZONE_2.highlySkilled.daily}/day)</span></td>
                    <td className="px-5 py-3.5">₹{KA_WAGES_ZONE_3.highlySkilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500"> (₹{KA_WAGES_ZONE_3.highlySkilled.daily}/day)</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Statutory On-Cost Compliance Framework */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10">
            <h3 className="text-xl font-bold text-navy mb-4">
              Karnataka Mandatory Employer Statutory Burdens
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs text-gray-700">
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <span className="font-bold text-navy block text-sm mb-1">EPF (13.00%)</span>
                <span>12% EPF + 0.5% EDLI + 0.5% Admin Charges deposited monthly with EPFO ECR verification.</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <span className="font-bold text-navy block text-sm mb-1">ESIC / Workmen Comp</span>
                <span>3.25% ESIC for wages &le; ₹21,000; 2.0% Workmen Compensation &amp; Group Personal Accident (GPA) for wages &gt; ₹21,000.</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <span className="font-bold text-navy block text-sm mb-1">Statutory Bonus (8.33%)</span>
                <span>Payment of Bonus Act, 1965 statutory floor accrued on monthly billings.</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <span className="font-bold text-navy block text-sm mb-1">Gratuity (4.81%)</span>
                <span>Statutory actuarial provision (15/312 days) under Payment of Gratuity Act, 1972.</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <span className="font-bold text-navy block text-sm mb-1">KLWF (₹100 Employer)</span>
                <span>Karnataka Labour Welfare Board annual remittance (₹50 employee / ₹100 employer) by December 31.</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <span className="font-bold text-navy block text-sm mb-1">Occupier Legal Shield</span>
                <span>Principal Employer indemnification under CLRA Section 21(4) and Factories Act Section 2(n).</span>
              </div>
            </div>
          </div>

          {/* Peenya & KIADB Industrial Mitigation */}
          <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 mb-10">
            <h3 className="text-xl font-bold text-navy mb-2">
              🏭 Industrial Belt Assurance: Peenya &amp; KIADB Single-Window Compliance
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              Deploying industrial labor in Karnataka hubs like <strong>Peenya Industrial Area</strong>, <strong>Bidadi</strong>, <strong>Narasapura</strong>, and <strong>Vasanthanarasapura (Tumakuru)</strong> requires strict alignment with local industrial associations (PIA) and KIADB single-window regulations.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              ACS maintains regional recruitment centers, verified biometric time-and-attendance terminals, and strict non-unionized deployment protocols ensuring uninterrupted manufacturing shifts and zero production loss.
            </p>
          </div>

          {/* Procurement CTA Box */}
          <div className="bg-gradient-to-r from-navy to-navy-light text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold font-roboto mb-2">
              Request an Itemized Karnataka Statutory Quotation
            </h3>
            <p className="text-sky-200 text-sm max-w-xl mx-auto mb-6">
              Our Bengaluru commercial desk generates transparent rate-analysis dockets with exact take-home wage breakdowns and monthly compliance dossiers within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/quote" className="btn-primary text-base px-8 py-3.5">
                Generate Instant Commercial Quote
              </Link>
              <Link href="/contact" className="btn-secondary text-base px-8 py-3.5">
                Speak to Karnataka Procurement Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
