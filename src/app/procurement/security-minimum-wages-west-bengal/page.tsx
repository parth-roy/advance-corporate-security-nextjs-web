import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "West Bengal Minimum Wage Calculator 2026 | ACS Procurement",
  description: "Official Labour Commissioner Zone A & Zone B minimum wage guidelines for security guards in West Bengal. Calculate PF, ESIC, and statutory bonuses.",
};

export default function MinimumWagePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-16">
        <div className="container-acs">
          <h1 className="text-3xl md:text-5xl font-black font-roboto mb-4">
            West Bengal Minimum Wage for Security Guards (2026)
          </h1>
          <p className="text-sky-200 text-lg max-w-2xl">
            Official statutory compliance guidelines, Form IV/V requirements, and Zone A/B calculations for enterprise procurement officers.
          </p>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-acs max-w-4xl">
          <h2 className="text-2xl font-bold text-navy mb-6">Current Wage Slabs (July - Dec 2026)</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-10">
            <table className="w-full text-left text-sm">
              <thead className="bg-sky-50 text-navy">
                <tr>
                  <th className="px-6 py-4 font-bold border-b border-gray-200">Category</th>
                  <th className="px-6 py-4 font-bold border-b border-gray-200">Zone A (Monthly)</th>
                  <th className="px-6 py-4 font-bold border-b border-gray-200">Zone B (Monthly)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-800">Unskilled (Security Guard)</td>
                  <td className="px-6 py-4 text-gray-600">₹10,566</td>
                  <td className="px-6 py-4 text-gray-600">₹9,758</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-800">Semi-Skilled (Head Guard)</td>
                  <td className="px-6 py-4 text-gray-600">₹11,624</td>
                  <td className="px-6 py-4 text-gray-600">₹10,733</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-800">Skilled (Armed Guard/Supervisor)</td>
                  <td className="px-6 py-4 text-gray-600">₹12,787</td>
                  <td className="px-6 py-4 text-gray-600">₹11,807</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-navy mb-4">Statutory Load Calculations</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            When floating tenders on portals like GeM or wbtenders.gov.in, procurement officers must ensure that bidders comply with the mandatory statutory loads on top of the basic minimum wage:
          </p>
          <ul className="space-y-3 text-gray-600 mb-8">
            <li className="flex gap-2"><span className="text-sky font-bold">✓</span> <strong>EPF (Employee Provident Fund):</strong> 13% of basic wage (Employer Contribution).</li>
            <li className="flex gap-2"><span className="text-sky font-bold">✓</span> <strong>ESIC (State Insurance):</strong> 3.25% of gross wage.</li>
            <li className="flex gap-2"><span className="text-sky font-bold">✓</span> <strong>Bonus:</strong> Minimum 8.33% annually.</li>
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
