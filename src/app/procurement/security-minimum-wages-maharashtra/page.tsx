import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import {
  MH_WAGES_ZONE_I,
  MH_WAGES_ZONE_II,
  MH_WAGES_ZONE_III,
  MH_WAGES_ENG_ZONE_I,
  MH_WAGES_ENG_ZONE_II,
  MH_WAGES_ENG_ZONE_III,
  MH_CURRENT_PERIOD,
  MH_EPF_EMPLOYER_RATE,
  MH_ESIC_EMPLOYER_RATE,
  MH_BONUS_RATE,
  MH_GRATUITY_RATE,
  MH_LWF,
} from "@/lib/mh-wages";

export const metadata: Metadata = {
  title: "Maharashtra Minimum Wage Calculator 2026 | ACS Procurement",
  description:
    "Official Maharashtra Labour Commissionerate Zone I, II & III minimum wage guidelines for security, factory workers, and warehouse logistics. Calculate EPF, ESIC, MLWF, and Mathadi Act exemptions.",
  alternates: {
    canonical: `${siteConfig.url}/procurement/security-minimum-wages-maharashtra`,
  },
};

export default function MaharashtraMinimumWagePage() {
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
              <li className="text-white font-medium">Maharashtra Minimum Wages</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black font-roboto mb-4">
            Maharashtra Minimum Wage for Industrial Manpower &amp; Security (2026)
          </h1>
          <p className="text-sky-200 text-lg max-w-3xl">
            Official statutory wage schedules, VDA notifications (January &amp; July cycle), MLWF rules, and Mathadi Act Section 5 mechanized cargo handling guidelines for enterprise procurement officers and plant occupiers across MIDC hubs.
          </p>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-acs max-w-5xl">
          {/* Schedule 1 — Shops & Commercial Establishments */}
          <div className="mb-12">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
              <div>
                <span className="text-xs font-bold text-sky uppercase tracking-wider font-roboto">Schedule 1</span>
                <h2 className="text-2xl font-bold text-navy">
                  Shops &amp; Commercial Establishments ({MH_CURRENT_PERIOD})
                </h2>
              </div>
              <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-medium">
                Security Guards, Housekeeping, Warehouse Logistics, Office Peons
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Applicable across commercial offices, corporate IT parks, retail distribution centers, and warehouse logistics facilities across Maharashtra. VDA component is <strong>₹4,134.00/mo</strong> across all zones.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-xs">
              <table className="w-full text-left text-sm">
                <thead className="bg-sky-50 text-navy">
                  <tr>
                    <th className="px-5 py-3.5 font-bold border-b border-gray-200">Trade Category</th>
                    <th className="px-5 py-3.5 font-bold border-b border-gray-200">Zone I (Mumbai, Pune, Thane)</th>
                    <th className="px-5 py-3.5 font-bold border-b border-gray-200">Zone II (Nashik, Chhatrapati Sambhajinagar)</th>
                    <th className="px-5 py-3.5 font-bold border-b border-gray-200">Zone III (Rural / Gram Panchayat)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  <tr>
                    <td className="px-5 py-3.5 font-medium text-gray-900">
                      Unskilled
                      <span className="block text-xs text-gray-400">Security Guard, Sweeper, Hamal, Helper</span>
                    </td>
                    <td className="px-5 py-3.5 font-semibold text-navy">₹{MH_WAGES_ZONE_I.unskilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500 font-normal"> (₹{MH_WAGES_ZONE_I.unskilled.daily}/day)</span></td>
                    <td className="px-5 py-3.5">₹{MH_WAGES_ZONE_II.unskilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500"> (₹{MH_WAGES_ZONE_II.unskilled.daily}/day)</span></td>
                    <td className="px-5 py-3.5">₹{MH_WAGES_ZONE_III.unskilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500"> (₹{MH_WAGES_ZONE_III.unskilled.daily}/day)</span></td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-medium text-gray-900">
                      Semi-Skilled
                      <span className="block text-xs text-gray-400">Head Guard, Warehouse Picker/Packer</span>
                    </td>
                    <td className="px-5 py-3.5 font-semibold text-navy">₹{MH_WAGES_ZONE_I.semiSkilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500 font-normal"> (₹{MH_WAGES_ZONE_I.semiSkilled.daily}/day)</span></td>
                    <td className="px-5 py-3.5">₹{MH_WAGES_ZONE_II.semiSkilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500"> (₹{MH_WAGES_ZONE_II.semiSkilled.daily}/day)</span></td>
                    <td className="px-5 py-3.5">₹{MH_WAGES_ZONE_III.semiSkilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500"> (₹{MH_WAGES_ZONE_III.semiSkilled.daily}/day)</span></td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-medium text-gray-900">
                      Skilled
                      <span className="block text-xs text-gray-400">Armed Sentry, Forklift Driver, Commercial Plumber</span>
                    </td>
                    <td className="px-5 py-3.5 font-semibold text-navy">₹{MH_WAGES_ZONE_I.skilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500 font-normal"> (₹{MH_WAGES_ZONE_I.skilled.daily}/day)</span></td>
                    <td className="px-5 py-3.5">₹{MH_WAGES_ZONE_II.skilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500"> (₹{MH_WAGES_ZONE_II.skilled.daily}/day)</span></td>
                    <td className="px-5 py-3.5">₹{MH_WAGES_ZONE_III.skilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500"> (₹{MH_WAGES_ZONE_III.skilled.daily}/day)</span></td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-medium text-gray-900">
                      Highly Skilled
                      <span className="block text-xs text-gray-400">Security Supervisor, EHS Officer, HVAC Tech</span>
                    </td>
                    <td className="px-5 py-3.5 font-semibold text-navy">₹{MH_WAGES_ZONE_I.highlySkilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500 font-normal"> (₹{MH_WAGES_ZONE_I.highlySkilled.daily}/day)</span></td>
                    <td className="px-5 py-3.5">₹{MH_WAGES_ZONE_II.highlySkilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500"> (₹{MH_WAGES_ZONE_II.highlySkilled.daily}/day)</span></td>
                    <td className="px-5 py-3.5">₹{MH_WAGES_ZONE_III.highlySkilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500"> (₹{MH_WAGES_ZONE_III.highlySkilled.daily}/day)</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Schedule 2 — Engineering Industry */}
          <div className="mb-12">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
              <div>
                <span className="text-xs font-bold text-sky uppercase tracking-wider font-roboto">Schedule 2</span>
                <h2 className="text-2xl font-bold text-navy">
                  Engineering &amp; Manufacturing Industry ({MH_CURRENT_PERIOD})
                </h2>
              </div>
              <span className="text-xs text-amber-700 bg-amber-50 px-3 py-1 rounded-full font-medium border border-amber-200">
                Factory Blue-Collar, CNC Helpers, Welders, Electricians, Riggers
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Mandatory for automotive manufacturing, sheet metal, heavy forging, plastic molding, and chemical plants in MIDC corridors (Chakan, Butibori, Ranjangaon, Waluj). VDA component is <strong>₹2,790.00/mo</strong>.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-xs">
              <table className="w-full text-left text-sm">
                <thead className="bg-sky-50 text-navy">
                  <tr>
                    <th className="px-5 py-3.5 font-bold border-b border-gray-200">Trade Category</th>
                    <th className="px-5 py-3.5 font-bold border-b border-gray-200">Zone I (Core MIDC Belts)</th>
                    <th className="px-5 py-3.5 font-bold border-b border-gray-200">Zone II (Tier-2 Municipal Councils)</th>
                    <th className="px-5 py-3.5 font-bold border-b border-gray-200">Zone III (Rural Pockets)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  <tr>
                    <td className="px-5 py-3.5 font-medium text-gray-900">
                      Unskilled
                      <span className="block text-xs text-gray-400">Assembly Line Feeder, Material Loader, Scrap Handler</span>
                    </td>
                    <td className="px-5 py-3.5 font-semibold text-navy">₹{MH_WAGES_ENG_ZONE_I.unskilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500 font-normal"> (₹{MH_WAGES_ENG_ZONE_I.unskilled.daily}/day)</span></td>
                    <td className="px-5 py-3.5">₹{MH_WAGES_ENG_ZONE_II.unskilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500"> (₹{MH_WAGES_ENG_ZONE_II.unskilled.daily}/day)</span></td>
                    <td className="px-5 py-3.5">₹{MH_WAGES_ENG_ZONE_III.unskilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500"> (₹{MH_WAGES_ENG_ZONE_III.unskilled.daily}/day)</span></td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-medium text-gray-900">
                      Semi-Skilled
                      <span className="block text-xs text-gray-400">Drill Press Operator, CNC Helper, Grinder, Painter</span>
                    </td>
                    <td className="px-5 py-3.5 font-semibold text-navy">₹{MH_WAGES_ENG_ZONE_I.semiSkilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500 font-normal"> (₹{MH_WAGES_ENG_ZONE_I.semiSkilled.daily}/day)</span></td>
                    <td className="px-5 py-3.5">₹{MH_WAGES_ENG_ZONE_II.semiSkilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500"> (₹{MH_WAGES_ENG_ZONE_II.semiSkilled.daily}/day)</span></td>
                    <td className="px-5 py-3.5">₹{MH_WAGES_ENG_ZONE_III.semiSkilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500"> (₹{MH_WAGES_ENG_ZONE_III.semiSkilled.daily}/day)</span></td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-medium text-gray-900">
                      Skilled
                      <span className="block text-xs text-gray-400">Licensed Electrician (Wireman), TIG Welder, STP Operator</span>
                    </td>
                    <td className="px-5 py-3.5 font-semibold text-navy">₹{MH_WAGES_ENG_ZONE_I.skilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500 font-normal"> (₹{MH_WAGES_ENG_ZONE_I.skilled.daily}/day)</span></td>
                    <td className="px-5 py-3.5">₹{MH_WAGES_ENG_ZONE_II.skilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500"> (₹{MH_WAGES_ENG_ZONE_II.skilled.daily}/day)</span></td>
                    <td className="px-5 py-3.5">₹{MH_WAGES_ENG_ZONE_III.skilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500"> (₹{MH_WAGES_ENG_ZONE_III.skilled.daily}/day)</span></td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-medium text-gray-900">
                      Highly Skilled
                      <span className="block text-xs text-gray-400">Tool &amp; Die Maker, Maintenance Incharge, PLC Programmer</span>
                    </td>
                    <td className="px-5 py-3.5 font-semibold text-navy">₹{MH_WAGES_ENG_ZONE_I.highlySkilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500 font-normal"> (₹{MH_WAGES_ENG_ZONE_I.highlySkilled.daily}/day)</span></td>
                    <td className="px-5 py-3.5">₹{MH_WAGES_ENG_ZONE_II.highlySkilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500"> (₹{MH_WAGES_ENG_ZONE_II.highlySkilled.daily}/day)</span></td>
                    <td className="px-5 py-3.5">₹{MH_WAGES_ENG_ZONE_III.highlySkilled.monthly.toLocaleString("en-IN")}<span className="text-xs text-gray-500"> (₹{MH_WAGES_ENG_ZONE_III.highlySkilled.daily}/day)</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Statutory On-Cost Compliance Framework */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10">
            <h3 className="text-xl font-bold text-navy mb-4">
              Maharashtra Mandatory Employer Statutory Burdens
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs text-gray-700">
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <span className="font-bold text-navy block text-sm mb-1">EPF (13.00%)</span>
                <span>12% EPF + 0.5% EDLI + 0.5% Admin Charges deposited monthly via verifiable EPFO ECR.</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <span className="font-bold text-navy block text-sm mb-1">ESIC (3.25%)</span>
                <span>Mandatory employer contribution on gross monthly wages up to ₹21,000 for full medical coverage.</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <span className="font-bold text-navy block text-sm mb-1">Statutory Bonus (8.33%)</span>
                <span>Minimum annual bonus floor under Payment of Bonus Act, 1965 accrued monthly.</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <span className="font-bold text-navy block text-sm mb-1">Gratuity (4.81%)</span>
                <span>Actuarial statutory reserve (15/312 days) under Payment of Gratuity Act, 1972.</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <span className="font-bold text-navy block text-sm mb-1">MLWF (₹75 Employer)</span>
                <span>Maharashtra Labour Welfare Board bi-annual remittance (June &amp; December: ₹25 worker / ₹75 employer).</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <span className="font-bold text-navy block text-sm mb-1">Occupier Legal Indemnity</span>
                <span>100% legal indemnity protecting factory Occupier under Factories Act Section 2(n) and BNS Section 106.</span>
              </div>
            </div>
          </div>

          {/* Critical Maharashtra Legal Differentiator: Mathadi Act Defense */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
            <h3 className="text-xl font-bold text-navy mb-2">
              ⚖️ Maharashtra Mathadi Act Section 5 / 22 Defense for Warehouses &amp; Factories
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              In industrial hubs like Chakan, Bhiwandi, and Taloja, rogue manual headloader tolis frequently disrupt operations demanding unauthorized loading levies. Under <strong>Section 5 and Section 22 of the Maharashtra Mathadi, Hamal and Other Manual Workers Act, 1969</strong>, operations using mechanized material handling (reach trucks, battery-operated pallet trucks, overhead cranes, forklifts) are <strong>legally exempt</strong> from Mathadi board toli jurisdictions.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              ACS deploys certified mechanized handling operators with formal employer-employee contracts and CLRA licenses, fully safeguarding principal employers against extortion and work stoppages.
            </p>
          </div>

          {/* Procurement CTA Box */}
          <div className="bg-gradient-to-r from-navy to-navy-light text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold font-roboto mb-2">
              Request an Itemized Maharashtra Statutory Quotation
            </h3>
            <p className="text-sky-200 text-sm max-w-xl mx-auto mb-6">
              Our Maharashtra industrial desk prepares transparent cost-plus commercial quotations with complete ECR challans, TRRN receipts, and MIDC mobilization SLAs within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/quote" className="btn-primary text-base px-8 py-3.5">
                Generate Instant Commercial Quote
              </Link>
              <Link href="/contact" className="btn-secondary text-base px-8 py-3.5">
                Speak to Maharashtra Compliance Head
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
