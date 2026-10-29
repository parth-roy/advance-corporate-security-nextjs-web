"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, ArrowRight, Phone, Clock, ShieldCheck, Copy, Check } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface IndustrialLeadState {
  fullName: string;
  designation: string;
  companyName: string;
  email: string;
  phone: string;
  plantLocation: string;
  industrySector: string;
  headcountNeeded: string;
  timeline: string;
  priorities: string[];
  fax_or_website: string; // Honeypot field
}

const INITIAL_STATE: IndustrialLeadState = {
  fullName: "",
  designation: "",
  companyName: "",
  email: "",
  phone: "",
  plantLocation: "",
  industrySector: "Manufacturing / Heavy Engineering",
  headcountNeeded: "16-30 Guards",
  timeline: "Immediate (Within 48 Hours)",
  priorities: ["Gate & Weighbridge Control", "RFID Perimeter Patrol"],
  fax_or_website: "",
};

const PRIORITY_OPTIONS = [
  "Gate & Weighbridge Control",
  "RFID Perimeter Patrol",
  "Biometric Contractor / CLRA Access",
  "Quick Reaction Team (QRT)",
  "Scrap & Material Theft Prevention",
  "Fire Fighting & First Aid Guards",
];

export default function IndustrialSecurityLeadForm() {
  const [formData, setFormData] = useState<IndustrialLeadState>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    leadId?: string;
    assignedOwner?: string;
    assignedOwnerTitle?: string;
    assignedOwnerDesk?: string;
    slaTarget?: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const togglePriority = (item: string) => {
    setFormData((prev) => {
      const exists = prev.priorities.includes(item);
      return {
        ...prev,
        priorities: exists
          ? prev.priorities.filter((p) => p !== item)
          : [...prev.priorities, item],
      };
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    // Basic client validation
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMessage("Please fill in your name, official email, and phone number.");
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = {
        name: `${formData.fullName.trim()} (${formData.designation.trim() || "Operations Head"})`,
        organization: formData.companyName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        city: formData.plantLocation.trim() || "Industrial Hub",
        service: "Industrial Plant Security & Weighbridge Guarding",
        manpowerCount: formData.headcountNeeded,
        shiftType: "24x7 Industrial Continuous Shifts",
        fax_or_website: formData.fax_or_website, // honeypot
        landingUrl: typeof window !== "undefined" ? window.location.href : "/lp/industrial-security",
        utm_source: typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("utm_source") || "google_ads" : "google_ads",
        utm_campaign: typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("utm_campaign") || "industrial_security" : "industrial_security",
        message: `B2B INDUSTRIAL SECURITY SURVEY & COMMERCIAL PROPOSAL REQUEST:
Designation: ${formData.designation}
Company / Plant: ${formData.companyName}
Location: ${formData.plantLocation}
Industry Sector: ${formData.industrySector}
Headcount Required: ${formData.headcountNeeded}
Mobilization Timeline: ${formData.timeline}
Priority Defense Pillars: ${formData.priorities.join(", ")}`,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to submit proposal request. Please call directly.");
      }

      const returnedLeadId = data.data?.leadId || data.data?.id;
      setSubmittedData({
        leadId: returnedLeadId,
        assignedOwner: data.data?.assignedOwner || "Debabrata Sen",
        assignedOwnerTitle: data.data?.assignedOwnerTitle || "Senior Lead – Enterprise Accounts",
        assignedOwnerDesk: data.data?.assignedOwnerDesk || "Eastern Industrial Operations Desk",
        slaTarget: data.data?.slaTarget || "Within 60 Minutes (Urgent Industrial SLA)",
      });

      // ─── Analytics & Google Ads Conversion Tracking (Enterprise Blueprint §11) ───
      trackEvent("quote_request", {
        source: "google_ads_industrial_lp",
        service: "industrial_security",
        leadId: returnedLeadId,
        value: formData.headcountNeeded,
      });

      if (typeof window !== "undefined") {
        const win = window as unknown as { gtag?: (...args: unknown[]) => void; dataLayer?: Record<string, unknown>[] };
        if (typeof win.gtag === "function") {
          win.gtag("event", "conversion", {
            send_to: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || "AW-CONVERSION_LEAD",
            value: 1.0,
            currency: "INR",
            transaction_id: returnedLeadId,
          });
        }
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      console.error("[IndustrialLeadForm]", err);
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Unable to submit your proposal request. Please call our 24×7 hotline at +91 94770 06681."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyLeadId = () => {
    if (!submittedData?.leadId) return;
    navigator.clipboard.writeText(submittedData.leadId);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-3xl p-8 border border-emerald-200 shadow-2xl text-center space-y-5 animate-fade-in">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 size={36} />
        </div>

        {submittedData?.leadId && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/5 border border-navy/15 text-navy font-mono text-xs font-bold">
            <span className="text-slate-500">Lead Reference:</span>
            <span className="text-gold-dark font-black tracking-wider">{submittedData.leadId}</span>
            <button
              onClick={handleCopyLeadId}
              className="ml-1 p-1 hover:bg-navy/10 rounded transition-colors text-slate-600"
              title="Copy Reference ID"
            >
              {copied ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
            </button>
          </div>
        )}

        <div className="space-y-2">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Request Received • SLA Active
          </span>
          <h3 className="text-2xl font-roboto font-black text-navy">
            Plant Security Survey Requested!
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your requirement has been assigned to our designated Enterprise Accounts team for <strong>{formData.companyName || "your plant"}</strong>.
          </p>
        </div>

        {/* Assigned Account Desk */}
        {submittedData?.assignedOwner && (
          <div className="bg-navy/5 border border-navy/15 rounded-2xl p-4 text-left flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-navy text-gold flex items-center justify-center text-sm font-black shrink-0 mt-0.5">
              {submittedData.assignedOwner.split(" ").map((n) => n[0]).join("")}
            </div>
            <div className="text-xs">
              <div className="text-[10px] font-bold uppercase tracking-wider text-gold-dark mb-0.5">Assigned Operations Lead</div>
              <div className="font-bold text-navy text-sm">{submittedData.assignedOwner}</div>
              <div className="text-slate-600">{submittedData.assignedOwnerTitle}</div>
              <div className="text-slate-500 text-[11px] mt-0.5">{submittedData.assignedOwnerDesk}</div>
            </div>
          </div>
        )}

        <div className="bg-slate-50 rounded-2xl p-4 text-xs text-slate-600 text-left border border-slate-200 space-y-2">
          <div className="flex items-center justify-between font-bold text-navy">
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-sky" />
              <span>Priority Response SLA:</span>
            </span>
            <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-mono">
              {submittedData?.slaTarget || "⚡ Within 60 Minutes"}
            </span>
          </div>
          <ul className="space-y-1 list-disc list-inside text-slate-500 pt-1 border-t border-slate-200">
            <li>Physical or aerial site perimeter risk reconnaissance</li>
            <li>Headcount optimization ({formData.headcountNeeded}) with weighbridge &amp; gate SOPs</li>
            <li>Itemized statutory rate card (Basic, EPF 13%, ESIC 3.25%, Bonus 8.33%, Relievers)</li>
          </ul>
        </div>

        <div className="pt-2">
          <a
            href="tel:+919477006681"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg transition-all"
          >
            <Phone size={16} />
            <span>Need Urgent 24-Hour Deployment? Call +91 94770 06681</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl relative overflow-hidden" id="proposal-form">
      {/* Top Banner */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-sky bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
            Commercial Proposal &amp; Survey
          </span>
          <h3 className="text-xl sm:text-2xl font-roboto font-black text-navy mt-1">
            Request Plant Security Survey
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Receive an itemized statutory quote &amp; site survey within 24 hours.
          </p>
        </div>
        <div className="hidden sm:flex flex-col items-end text-right">
          <span className="text-[10px] text-slate-400 font-medium">Direct Hotline</span>
          <a href="tel:+919477006681" className="text-xs font-mono font-bold text-navy hover:text-sky">
            +91 94770 06681
          </a>
        </div>
      </div>

      {errorMessage && (
        <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
          <AlertCircle size={15} className="shrink-0 text-rose-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Anti-spam honeypot */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="fax_or_website"
            value={formData.fax_or_website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Row 1: Name & Designation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Your Full Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rajesh Sengupta"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-sky focus:ring-2 focus:ring-sky/20 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Designation / Role
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder="e.g. Plant Head / VP Operations"
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-sky focus:ring-2 focus:ring-sky/20 outline-none transition-all"
            />
          </div>
        </div>

        {/* Row 2: Company & Plant Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Company / Industrial Unit <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Eastern Steel Works Ltd"
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-sky focus:ring-2 focus:ring-sky/20 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Plant Location / City <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              name="plantLocation"
              required
              value={formData.plantLocation}
              onChange={handleChange}
              placeholder="e.g. Haldia / Kharagpur / Durgapur"
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-sky focus:ring-2 focus:ring-sky/20 outline-none transition-all"
            />
          </div>
        </div>

        {/* Row 3: Official Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Official Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-sky focus:ring-2 focus:ring-sky/20 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Direct Mobile Phone <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98300 00000"
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-sky focus:ring-2 focus:ring-sky/20 outline-none transition-all"
            />
          </div>
        </div>

        {/* Row 4: Industry & Guard Headcount */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Facility Sector
            </label>
            <select
              name="industrySector"
              value={formData.industrySector}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white focus:border-sky focus:ring-2 focus:ring-sky/20 outline-none transition-all text-slate-700"
            >
              <option value="Manufacturing / Heavy Engineering">Manufacturing / Heavy Engineering</option>
              <option value="Logistics Park / Warehouse Hub">Logistics Park / Warehouse Hub</option>
              <option value="Steel, Metals & Foundries">Steel, Metals &amp; Foundries</option>
              <option value="Chemical, Petroleum & Pharma">Chemical, Petroleum &amp; Pharma</option>
              <option value="Port, Rail Yard & Infrastructure">Port, Rail Yard &amp; Infrastructure</option>
              <option value="Food Processing & FMCG">Food Processing &amp; FMCG</option>
              <option value="Other Commercial Facility">Other Commercial Facility</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Estimated Guard Deployment
            </label>
            <select
              name="headcountNeeded"
              value={formData.headcountNeeded}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white focus:border-sky focus:ring-2 focus:ring-sky/20 outline-none transition-all text-slate-700"
            >
              <option value="5-15 Guards (Small Plant / Depot)">5–15 Guards (Small Plant / Depot)</option>
              <option value="16-30 Guards (Mid Manufacturing)">16–30 Guards (Mid Manufacturing)</option>
              <option value="31-60 Guards (Large Complex)">31–60 Guards (Large Complex)</option>
              <option value="60+ Guards (Heavy Industrial Township)">60+ Guards (Heavy Township / Multi-Gate)</option>
            </select>
          </div>
        </div>

        {/* Security Priorities Checkbox Pills */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-2">
            Priority Defense Focus (Select all that apply):
          </label>
          <div className="flex flex-wrap gap-1.5">
            {PRIORITY_OPTIONS.map((item) => {
              const isSelected = formData.priorities.includes(item);
              return (
                <button
                  type="button"
                  key={item}
                  onClick={() => togglePriority(item)}
                  className={`text-[11px] font-semibold px-2.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-sky-50 text-sky-800 border-sky-300 font-bold"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {isSelected ? "✓ " : "+ "}
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* Job Seeker Negative Qualification Filter (Enterprise Blueprint §11) */}
        <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-left text-[11px] text-amber-900 leading-snug flex items-start gap-2">
          <AlertCircle size={14} className="text-amber-700 shrink-0 mt-0.5" />
          <span>
            <strong>Procurement Intake Notice:</strong> This portal is exclusively for enterprise B2B plant security and workforce procurement. Looking for employment or security guard jobs? Please visit our <a href="/careers" className="text-navy font-bold underline hover:text-gold">Careers Portal</a> or <a href="/post-job" className="text-navy font-bold underline hover:text-gold">Candidate Submission Desk</a>.
          </span>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-xl bg-navy hover:bg-navy-light text-white font-roboto font-bold text-sm shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
          >
            {isSubmitting ? (
              <span>Preparing Proposal Request...</span>
            ) : (
              <>
                <span>Request Plant Security Survey &amp; Commercial Proposal</span>
                <ArrowRight size={15} />
              </>
            )}
          </button>
        </div>

        {/* Reassurance text */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
          <span>🔒 Strict NDA &amp; Privacy Safeguarded</span>
          <span>⚡ 24–48h Site Mobilization Available</span>
        </div>
      </form>
    </div>
  );
}
