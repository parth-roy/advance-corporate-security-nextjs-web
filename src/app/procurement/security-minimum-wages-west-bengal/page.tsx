import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import {
  WB_WAGES_ZONE_A,
  WB_WAGES_ZONE_B,
  WB_CURRENT_PERIOD,
  WB_EPF_EMPLOYER_RATE,
  WB_ESIC_EMPLOYER_RATE,
  WB_BONUS_RATE,
} from "@/lib/wb-wages";

export const metadata: Metadata = {
  title: "West Bengal Minimum Wage Calculator 2026 | ACS Procurement",
  description: "Official Labour Commissioner Zone A & Zone B minimum wage guidelines for security guards & blue-collar workers in West Bengal. Calculate PF, ESIC, and statutory bonuses.",
  alternates: {
    canonical: `${siteConfig.url}/procurement/security-minimum-wages-west-bengal`,
  },
};

export default function MinimumWagePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-16">
        <div className="container-acs">
          <h1 className="text-3xl md:text-5xl font-black font-roboto mb-4">
            West Bengal Minimum Wage for Security &amp; Manpower (2026)
          </h1>
          <p className="text-sky-200 text-lg max-w-2xl">
            Official statutory compliance guidelines, Form IV/V requirements, and Zone A/B calculations (January &amp; July VDA Cycle) for enterprise procurement officers.
          </p>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-acs max-w-4xl">
          <h2 className="text-2xl font-bold text-navy mb-6">Current Wage Slabs ({WB_CURRENT_PERIOD})</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-10">
            <table className="w-full text-left text-sm">
              <thead className="bg-sky-50 text-navy">
                <tr>
                  <th className="px-6 py-4 font-bold border-b border-gray-200">Category</th>
                  <th className="px-6 py-4 font-bold border-b border-gray-200">Zone A (Monthly / Daily)</th>
                  <th className="px-6 py-4 font-bold border-b border-gray-200">Zone B (Monthly / Daily)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-800">Unskilled (Security Guard, Loader/Hamali, Helper, Sweeper)</td>
                  <td className="px-6 py-4 text-gray-600">₹{WB_WAGES_ZONE_A.unskilled.monthly.toLocaleString("en-IN")} (₹{WB_WAGES_ZONE_A.unskilled.daily}/day)</td>
                  <td className="px-6 py-4 text-gray-600">₹{WB_WAGES_ZONE_B.unskilled.monthly.toLocaleString("en-IN")} (₹{WB_WAGES_ZONE_B.unskilled.daily}/day)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-800">Semi-Skilled (Head Guard, Packer, Machine Helper, Asst. MEP)</td>
                  <td className="px-6 py-4 text-gray-600">₹{WB_WAGES_ZONE_A.semiSkilled.monthly.toLocaleString("en-IN")} (₹{WB_WAGES_ZONE_A.semiSkilled.daily}/day)</td>
                  <td className="px-6 py-4 text-gray-600">₹{WB_WAGES_ZONE_B.semiSkilled.monthly.toLocaleString("en-IN")} (₹{WB_WAGES_ZONE_B.semiSkilled.daily}/day)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-800">Skilled (Armed Guard, HT/LT Electrician, HVAC Tech, Welder)</td>
                  <td className="px-6 py-4 text-gray-600">₹{WB_WAGES_ZONE_A.skilled.monthly.toLocaleString("en-IN")} (₹{WB_WAGES_ZONE_A.skilled.daily}/day)</td>
                  <td className="px-6 py-4 text-gray-600">₹{WB_WAGES_ZONE_B.skilled.monthly.toLocaleString("en-IN")} (₹{WB_WAGES_ZONE_B.skilled.daily}/day)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-800">Highly Skilled (Chief Supervisor, Fire Marshal, PLC Technician)</td>
                  <td className="px-6 py-4 text-gray-600">₹{WB_WAGES_ZONE_A.highlySkilled.monthly.toLocaleString("en-IN")} (₹{WB_WAGES_ZONE_A.highlySkilled.daily}/day)</td>
                  <td className="px-6 py-4 text-gray-600">₹{WB_WAGES_ZONE_B.highlySkilled.monthly.toLocaleString("en-IN")} (₹{WB_WAGES_ZONE_B.highlySkilled.daily}/day)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-navy mb-4">Statutory Load Calculations</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            When floating tenders on portals like GeM or wbtenders.gov.in, procurement officers must ensure that bidders comply with the mandatory statutory loads on top of the basic minimum wage (revised every January &amp; July by the West Bengal Labour Commissionerate):
          </p>
          <ul className="space-y-3 text-gray-600 mb-8">
            <li className="flex gap-2"><span className="text-sky font-bold">✓</span> <strong>EPF (Employee Provident Fund):</strong> {(WB_EPF_EMPLOYER_RATE * 100).toFixed(0)}% of basic wage (12% EPF + 0.5% EDLI + 0.5% Admin Employer Contribution).</li>
            <li className="flex gap-2"><span className="text-sky font-bold">✓</span> <strong>ESIC (State Insurance):</strong> {(WB_ESIC_EMPLOYER_RATE * 100).toFixed(2)}% of gross wage.</li>
            <li className="flex gap-2"><span className="text-sky font-bold">✓</span> <strong>Bonus:</strong> Minimum {(WB_BONUS_RATE * 100).toFixed(2)}% annually.</li>
          </ul>

          <div className="bg-sky-50 border border-sky-100 rounded-xl p-6 text-center">
            <h4 className="text-navy font-bold text-lg mb-2">Need a verified quotation?</h4>
            <p className="text-gray-600 text-sm mb-4">Our compliance team generates accurate, 100% statutory-compliant proposals with EMD and Bank Guarantee details within 24 hours.</p>
            <Link href="/contact" className="btn-primary">Request Procurement Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
