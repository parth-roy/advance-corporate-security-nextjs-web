"use client";

import React, { useState } from "react";
import { ShieldCheck, CheckCircle2, AlertCircle, ArrowRight, Building, User, Mail, Phone, MapPin, Briefcase } from "lucide-react";
import { siteConfig } from "@/lib/config";

interface AuditFormState {
  companyName: string;
  contactPerson: string;
  designation: string;
  email: string;
  phone: string;
  city: string;
  industry: string;
  serviceType: string;
  headcount: string;
  shiftType: string;
  currentVendorStatus: string;
  contractExpiry: string;
  auditScope: string;
}

const INITIAL_STATE: AuditFormState = {
  companyName: "",
  contactPerson: "",
  designation: "",
  email: "",
  phone: "",
  city: "",
  industry: "manufacturing",
  serviceType: "security-guard",
  headcount: "15-50",
  shiftType: "24x7",
  currentVendorStatus: "dissatisfied-compliance",
  contractExpiry: "1-3-months",
  auditScope: "both",
};

export default function AuditRequestForm() {
  const [formData, setFormData] = useState<AuditFormState>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.contactPerson} (${formData.designation})`,
          companyName: formData.companyName,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          service: `Enterprise Audit: ${formData.serviceType} | Industry: ${formData.industry}`,
          message: `ENTERPRISE STATUTORY COMPLIANCE & SECURITY AUDIT REQUEST:
Company: ${formData.companyName}
Designation: ${formData.designation}
Headcount Required: ${formData.headcount}
Shift: ${formData.shiftType}
Current Vendor Status: ${formData.currentVendorStatus}
Contract Expiry: ${formData.contractExpiry}
Audit Scope: ${formData.auditScope}`,
        }),
      });

      if (!res.ok) {
        throw new Error("Unable to submit audit request. Please try calling directly.");
      }

      setIsSuccess(true);
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to submit request. Please try calling +91 93399 88999.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center max-w-xl mx-auto shadow-sm">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4 text-emerald-600">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-black text-navy font-roboto mb-2">
          Audit Request Confirmed
        </h3>
        <p className="text-slate-700 text-sm mb-6 leading-relaxed">
          Thank you, <strong>{formData.contactPerson}</strong>. Our Senior Compliance Officer and Area Operations Manager will review your details and contact you within <strong>4 hours</strong> to schedule your on-site audit.
        </p>
        <div className="bg-white p-4 rounded-xl border border-emerald-200 text-xs text-left space-y-2 mb-6">
          <p className="font-bold text-navy">Next Steps:</p>
          <p className="text-slate-600">1. Verification call from our Corporate HQ (+91 93399 88999).</p>
          <p className="text-slate-600">2. Deployment of Area Manager for physical site survey &amp; gate access inspection.</p>
          <p className="text-slate-600">3. Delivery of confidential Statutory Risk &amp; Security Scorecard within 48 hours.</p>
        </div>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData(INITIAL_STATE);
          }}
          className="px-6 py-2.5 bg-navy text-white text-xs font-bold rounded-xl hover:bg-navy-light transition"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
      {errorMessage && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Section 1: Enterprise Profile */}
      <div className="mb-8 pb-6 border-b border-slate-100">
        <h3 className="text-base font-black text-navy uppercase tracking-wider mb-4 flex items-center gap-2 font-roboto">
          <Building className="w-4 h-4 text-sky" />
          1. Enterprise &amp; Facility Profile
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-navy mb-1.5">
              Company / Entity Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Apex Logistics Park / Tata Steel Vendor"
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky/40 text-navy"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-navy mb-1.5">
              Facility City &amp; Industrial Corridor <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              placeholder="e.g. Kolkata / Howrah / Haldia / Dankuni"
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky/40 text-navy"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-navy mb-1.5">
              Industry Vertical <span className="text-red-500">*</span>
            </label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-navy font-medium focus:outline-none focus:ring-2 focus:ring-sky/40"
            >
              <option value="manufacturing">Manufacturing &amp; Heavy Engineering</option>
              <option value="warehouses">Warehousing, Logistics &amp; Supply Chain</option>
              <option value="hospitals">Hospitals &amp; Healthcare Facilities</option>
              <option value="corporate">IT Parks, Corporate Campuses &amp; SEZs</option>
              <option value="hotels">Hotels, Resorts &amp; Hospitality</option>
              <option value="construction">Construction Sites &amp; Real Estate Projects</option>
              <option value="educational-institutions">Universities &amp; Educational Campuses</option>
              <option value="malls">Retail Malls &amp; Commercial Complexes</option>
              <option value="government">Govt / PSU / Defense Establishment</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-navy mb-1.5">
              Primary Service Scope <span className="text-red-500">*</span>
            </label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-navy font-medium focus:outline-none focus:ring-2 focus:ring-sky/40"
            >
              <option value="security-guard">PSARA Security Guarding &amp; Patrols</option>
              <option value="housekeeping">Corporate Housekeeping &amp; Sanitization</option>
              <option value="integrated-fm">Integrated Facility Management (IFM Bundled)</option>
              <option value="manpower-outsourcing">Workforce Outsourcing &amp; Contract Labour</option>
            </select>
          </div>
        </div>
      </div>

      {/* Section 2: Contact Person */}
      <div className="mb-8 pb-6 border-b border-slate-100">
        <h3 className="text-base font-black text-navy uppercase tracking-wider mb-4 flex items-center gap-2 font-roboto">
          <User className="w-4 h-4 text-sky" />
          2. Decision-Maker Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-bold text-navy mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="contactPerson"
              required
              value={formData.contactPerson}
              onChange={handleChange}
              placeholder="e.g. Rajesh Mukherjee"
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky/40 text-navy"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-navy mb-1.5">
              Designation <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="designation"
              required
              value={formData.designation}
              onChange={handleChange}
              placeholder="e.g. Head of HR / Admin / Procurement"
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky/40 text-navy"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-navy mb-1.5">
              Official Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky/40 text-navy"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-navy mb-1.5">
              Direct Mobile Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky/40 text-navy"
            />
          </div>
        </div>
      </div>

      {/* Section 3: Operational Deployment Scope */}
      <div className="mb-8">
        <h3 className="text-base font-black text-navy uppercase tracking-wider mb-4 flex items-center gap-2 font-roboto">
          <Briefcase className="w-4 h-4 text-sky" />
          3. Deployment Scale &amp; Vendor Context
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-bold text-navy mb-1.5">
              Headcount Required
            </label>
            <select
              name="headcount"
              value={formData.headcount}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-navy font-medium focus:outline-none focus:ring-2 focus:ring-sky/40"
            >
              <option value="15-50">15 – 50 Personnel</option>
              <option value="50-100">50 – 100 Personnel</option>
              <option value="100-300">100 – 300 Personnel</option>
              <option value="300-500">300 – 500 Personnel</option>
              <option value="500+">500+ Enterprise Scale</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-navy mb-1.5">
              Shift Patterns
            </label>
            <select
              name="shiftType"
              value={formData.shiftType}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-navy font-medium focus:outline-none focus:ring-2 focus:ring-sky/40"
            >
              <option value="24x7">24×7 Continuous (3 Shifts + Relievers)</option>
              <option value="12-hour">12-Hour Day / Night Split</option>
              <option value="8-hour-day">8-Hour Standard General Shift</option>
              <option value="mixed">Mixed Guarding + Housekeeping Roster</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-navy mb-1.5">
              Current Vendor Status
            </label>
            <select
              name="currentVendorStatus"
              value={formData.currentVendorStatus}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-navy font-medium focus:outline-none focus:ring-2 focus:ring-sky/40"
            >
              <option value="dissatisfied-compliance">Incumbent has compliance/PF concerns</option>
              <option value="contract-expiring">Contract expiring soon (inviting quotes)</option>
              <option value="new-facility">New facility / greenfield deployment</option>
              <option value="benchmarking">Benchmarking market rates &amp; audit</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-navy mb-1.5">
              Target Takeover Window
            </label>
            <select
              name="contractExpiry"
              value={formData.contractExpiry}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-navy font-medium focus:outline-none focus:ring-2 focus:ring-sky/40"
            >
              <option value="immediate">Immediate (within 15 days)</option>
              <option value="1-3-months">1 – 3 Months</option>
              <option value="3-6-months">3 – 6 Months</option>
              <option value="exploratory">Planning next fiscal cycle</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-xs font-bold text-navy mb-1.5">
            Primary Audit Focus / Site Vulnerabilities
          </label>
          <textarea
            name="auditScope"
            rows={3}
            value={formData.auditScope}
            onChange={handleChange}
            placeholder="Mention any specific concerns (e.g. material pilferage at dispatch gates, unverified contractor labour, pending EPF inspection, lack of lady guards)..."
            className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky/40 text-navy"
          />
        </div>
      </div>

      {/* Submit CTA */}
      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-500">
          <p className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            100% Confidential • Zero Obligation • 48-Hour Turnaround
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-3.5 bg-red-600 hover:bg-red-700 disabled:bg-slate-400 text-white font-black text-sm rounded-xl transition shadow-lg flex items-center justify-center gap-2 cursor-pointer"
        >
          {isSubmitting ? (
            <span>Scheduling Audit...</span>
          ) : (
            <>
              <span>Schedule Free On-Site Audit</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
