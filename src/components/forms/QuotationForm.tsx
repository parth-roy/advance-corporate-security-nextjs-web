"use client";

import React, { useState, useRef } from "react";
import { siteConfig } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

// ─── Types ────────────────────────────────────────────────────────────────────

interface QuoteFormData {
  companyName: string;
  pinCode: string;
  serviceType: string;
  siteType: string;
  numberOfPosts: string;
  shiftCoverage: string;
  manpowerCount: string;
  startDate: string;
  contractDuration: string;
  contactName: string;
  phone: string;
  email: string;
  additionalRequirements: string;
  contactConsent: boolean;
}

interface QuoteFormErrors {
  companyName?: string;
  pinCode?: string;
  serviceType?: string;
  siteType?: string;
  numberOfPosts?: string;
  shiftCoverage?: string;
  manpowerCount?: string;
  startDate?: string;
  contactName?: string;
  phone?: string;
}

interface AuditFormData {
  name: string;
  phone: string;
  city: string;
  siteType: string;
}

interface AuditFormErrors {
  name?: string;
  phone?: string;
  city?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Build a dynamic API base that falls back gracefully in local dev */
function resolveApiBase(): string {
  if (typeof window !== "undefined" && window.location.hostname === "localhost") {
    return process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
  }
  return process.env.NEXT_PUBLIC_API_URL || siteConfig.apiUrl;
}

// ─── Toast Component ──────────────────────────────────────────────────────────

function Toast({
  toast,
  onDismiss,
}: {
  toast: { type: "success" | "error"; message: string };
  onDismiss: () => void;
}) {
  return (
    <div
      role="alert"
      className={`fixed top-5 right-5 z-50 max-w-md p-4 rounded-xl shadow-2xl border flex items-start gap-3 transition-all duration-300 animate-slide-down ${
        toast.type === "success"
          ? "bg-emerald-900/95 border-emerald-500 text-white"
          : "bg-red-900/95 border-red-500 text-white"
      }`}
    >
      <div className="shrink-0 mt-0.5">
        {toast.type === "success" ? (
          <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        )}
      </div>
      <div className="text-sm font-medium leading-relaxed pr-2">{toast.message}</div>
      <button
        onClick={onDismiss}
        className="ml-auto text-white/70 hover:text-white transition-colors"
        aria-label="Dismiss notification"
      >
        ✕
      </button>
    </div>
  );
}

// ─── Field Error Message ───────────────────────────────────────────────────────

function FieldError({ id, message }: { id?: string; message: string | undefined }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
      <span aria-hidden="true">⚠️</span> {message}
    </p>
  );
}

// ─── Input class helper ────────────────────────────────────────────────────────

function inputCls(hasError: boolean) {
  return `w-full border rounded-lg px-4 py-3 text-gray-800 transition-all focus:outline-none focus:ring-2 bg-white ${
    hasError
      ? "border-red-500 bg-red-50/40 focus:ring-red-400"
      : "border-gray-300 focus:ring-gold focus:border-transparent"
  }`;
}

// ─────────────────────────────────────────────────────────────────────────────
//  ENTERPRISE QUOTATION FORM
// ─────────────────────────────────────────────────────────────────────────────

export function EnterpriseQuotationForm() {
  const [formData, setFormData] = useState<QuoteFormData>({
    companyName: "",
    pinCode: "",
    serviceType: "",
    siteType: "",
    numberOfPosts: "",
    shiftCoverage: "",
    manpowerCount: "",
    startDate: "",
    contractDuration: "",
    contactName: "",
    phone: "",
    email: "",
    additionalRequirements: "",
    contactConsent: true,
  });

  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<{
    contactName: string;
    companyName: string;
    phone: string;
    serviceType: string;
    siteType?: string;
    id?: string;
    assignedOwner?: string;
    assignedOwnerTitle?: string;
    assignedOwnerDesk?: string;
    slaTarget?: string;
    numberOfPosts?: string;
    shiftCoverage?: string;
    startDate?: string;
  } | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  // Field refs for auto-focusing the first error field
  const companyNameRef = useRef<HTMLInputElement>(null);
  const pinCodeRef = useRef<HTMLInputElement>(null);
  const serviceTypeRef = useRef<HTMLSelectElement>(null);
  const siteTypeRef = useRef<HTMLSelectElement>(null);
  const numberOfPostsRef = useRef<HTMLSelectElement>(null);
  const shiftCoverageRef = useRef<HTMLSelectElement>(null);
  const manpowerCountRef = useRef<HTMLSelectElement>(null);
  const startDateRef = useRef<HTMLSelectElement>(null);
  const contactNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  // ─── Validation ───────────────────────────────────────────────────────────

  const validateField = (name: keyof QuoteFormErrors, value: string): string | undefined => {
    switch (name) {
      case "companyName":
        if (!value.trim()) return "Company name is required";
        if (value.trim().length < 2) return "Company name must be at least 2 characters";
        return undefined;
      case "pinCode":
        if (!value.trim()) return "Pin code / location is required";
        return undefined;
      case "serviceType":
        if (!value) return "Please select the service type you require";
        return undefined;
      case "siteType":
        if (!value) return "Please select the site archetype / facility type";
        return undefined;
      case "numberOfPosts":
        if (!value) return "Please select the number of guard posts required";
        return undefined;
      case "shiftCoverage":
        if (!value) return "Please specify the shift coverage / hours";
        return undefined;
      case "manpowerCount":
        if (!value) return "Please specify the manpower count or range";
        return undefined;
      case "startDate":
        if (!value) return "Please indicate your target deployment timeline";
        return undefined;
      case "contactName":
        if (!value.trim()) return "Contact person name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        return undefined;
      case "phone": {
        if (!value.trim()) return "Phone number is required";
        const digits = value.replace(/\D/g, "");
        if (digits.length < 10) return "Please enter a valid 10-digit phone number";
        return undefined;
      }
      default:
        return undefined;
    }
  };

  const validateAll = (): boolean => {
    const requiredFields: (keyof QuoteFormErrors)[] = [
      "companyName",
      "pinCode",
      "serviceType",
      "siteType",
      "numberOfPosts",
      "shiftCoverage",
      "manpowerCount",
      "startDate",
      "contactName",
      "phone",
    ];

    const newErrors: QuoteFormErrors = {};
    const newTouched: Record<string, boolean> = { ...touched };

    for (const field of requiredFields) {
      const err = validateField(field, (formData as unknown as Record<string, string>)[field]);
      if (err) newErrors[field] = err;
      newTouched[field] = true;
    }

    setErrors(newErrors);
    setTouched(newTouched);

    // Auto-focus first invalid field
    if (newErrors.companyName && companyNameRef.current) companyNameRef.current.focus();
    else if (newErrors.pinCode && pinCodeRef.current) pinCodeRef.current.focus();
    else if (newErrors.serviceType && serviceTypeRef.current) serviceTypeRef.current.focus();
    else if (newErrors.siteType && siteTypeRef.current) siteTypeRef.current.focus();
    else if (newErrors.numberOfPosts && numberOfPostsRef.current) numberOfPostsRef.current.focus();
    else if (newErrors.shiftCoverage && shiftCoverageRef.current) shiftCoverageRef.current.focus();
    else if (newErrors.manpowerCount && manpowerCountRef.current) manpowerCountRef.current.focus();
    else if (newErrors.startDate && startDateRef.current) startDateRef.current.focus();
    else if (newErrors.contactName && contactNameRef.current) contactNameRef.current.focus();
    else if (newErrors.phone && phoneRef.current) phoneRef.current.focus();

    return Object.keys(newErrors).length === 0;
  };

  // ─── Handlers ─────────────────────────────────────────────────────────────

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Live-clear validation errors once the user starts correcting
    if (touched[name]) {
      const fieldError = validateField(name as keyof QuoteFormErrors, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldError = validateField(name as keyof QuoteFormErrors, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  // ─── Submit (AJAX, no page reload) ────────────────────────────────────────

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validateAll()) {
      setToast({ type: "error", message: "Please correct the highlighted fields before submitting." });
      setTimeout(() => setToast(null), 5000);
      return;
    }

    setIsSubmitting(true);
    setToast(null);

    const endpoint = "/api/contact";

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      // Extract UTM tracking and landing URL for closed-loop attribution
      const urlParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
      const utm_source = urlParams?.get("utm_source") || "";
      const utm_medium = urlParams?.get("utm_medium") || "";
      const utm_campaign = urlParams?.get("utm_campaign") || "";
      const utm_term = urlParams?.get("utm_term") || "";
      const utm_content = urlParams?.get("utm_content") || "";
      const landingUrl = typeof window !== "undefined" ? window.location.href : "";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          // Identification
          name: formData.contactName.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim() || undefined,
          organization: formData.companyName.trim(),
          city: formData.pinCode.trim(),
          // Quote-specific fields (Section 1 & 7 Procurement Engine)
          service: formData.serviceType || "Enterprise Security Quotation",
          siteType: formData.siteType || "Commercial / Industrial Facility",
          statutoryResponsibility: "Full ACS Statutory Scope (PF/ESIC/Bonus/Gratuity)",
          contactConsent: formData.contactConsent,
          numberOfPosts: formData.numberOfPosts,
          shiftCoverage: formData.shiftCoverage,
          shiftType: formData.shiftCoverage, // backward compatibility
          manpowerCount: formData.manpowerCount,
          startDate: formData.startDate,
          contractDuration: formData.contractDuration || "Not specified",
          message:
            formData.additionalRequirements.trim() ||
            `Enterprise procurement request for ${formData.serviceType || "security services"} at ${formData.siteType || "facility"} (${formData.numberOfPosts}, ${formData.shiftCoverage}, start: ${formData.startDate}).`,
          // Form source tag for CRM triage
          formType: "enterprise_quotation",
          // Attribution metadata
          utm_source,
          utm_medium,
          utm_campaign,
          utm_term,
          utm_content,
          landingUrl,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setSubmitSuccess(true);
        const resolvedLeadId = data.data?.id || data.data?.leadId;
        trackEvent("quote_submit", {
          leadId: resolvedLeadId,
          opportunityId: data.data?.opportunityId,
          service: formData.serviceType || "Enterprise Security",
          siteType: formData.siteType,
          numberOfPosts: formData.numberOfPosts,
          shiftCoverage: formData.shiftCoverage,
          assignedOwner: data.data?.assignedOwner,
          source: "enterprise_quotation_funnel",
        });

        setSubmittedLead({
          contactName: formData.contactName,
          companyName: formData.companyName,
          serviceType: formData.serviceType || "Enterprise Security Quotation",
          siteType: formData.siteType,
          phone: formData.phone,
          id: data.data?.id || data.data?.leadId,
          assignedOwner: data.data?.assignedOwner,
          assignedOwnerTitle: data.data?.assignedOwnerTitle,
          assignedOwnerDesk: data.data?.assignedOwnerDesk,
          slaTarget: data.data?.slaTarget,
          numberOfPosts: formData.numberOfPosts,
          shiftCoverage: formData.shiftCoverage,
          startDate: formData.startDate,
        });
        setShowSuccessModal(true);
        setToast({ type: "success", message: "Your quotation request has been dispatched to ACS operations!" });

        // Reset form
        setFormData({
          companyName: "",
          pinCode: "",
          serviceType: "",
          siteType: "",
          numberOfPosts: "",
          shiftCoverage: "",
          manpowerCount: "",
          startDate: "",
          contractDuration: "",
          contactName: "",
          phone: "",
          email: "",
          additionalRequirements: "",
          contactConsent: true,
        });
        setErrors({});
        setTouched({});
      } else {
        const errorMessage =
          data.message || "Failed to send your request. Please try again or call our hotline.";
        setToast({ type: "error", message: errorMessage });
      }
    } catch (err: unknown) {
      console.error("[QuotationForm] Submit error:", err);
      const isTimeout = (err as { name?: string })?.name === "AbortError";
      setToast({
        type: "error",
        message: isTimeout
          ? "Request timed out. Please check your connection or call +91 93399 88999."
          : "Network error. Please call us directly at +91 93399 88999.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetModal = () => {
    setShowSuccessModal(false);
    setSubmitSuccess(false);
    setSubmittedLead(null);
  };

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="relative">
      {/* Floating Toast */}
      {toast && <Toast toast={toast} onDismiss={() => setToast(null)} />}

      <form onSubmit={handleSubmit} className="space-y-6" noValidate aria-label="Enterprise quotation request form">

        {/* ── Section 1: Organisation Details ── */}
        <fieldset className="space-y-5">
          <legend className="flex items-center gap-2 font-roboto font-bold text-navy text-sm uppercase tracking-wide mb-4 pb-2 border-b border-gray-100 w-full">
            <span className="w-6 h-6 rounded-full bg-navy text-white text-xs flex items-center justify-center font-black">1</span>
            Organisation &amp; Location
          </legend>

          {/* Company Name */}
          <div>
            <label htmlFor="companyName" className="block text-sm font-semibold text-gray-800 mb-1.5">
              Company / Organisation Name <span className="text-red-500">*</span>
            </label>
            <input
              ref={companyNameRef}
              type="text"
              id="companyName"
              name="companyName"
              required
              aria-required="true"
              aria-invalid={!!(errors.companyName && touched.companyName)}
              aria-describedby={errors.companyName && touched.companyName ? "companyName-error" : undefined}
              value={formData.companyName}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              autoComplete="organization"
              placeholder="e.g. Tata Steel Ltd., Apollo Hospitals, Delhi Metro Rail"
              className={inputCls(!!(errors.companyName && touched.companyName))}
            />
            {touched.companyName && <FieldError id="companyName-error" message={errors.companyName} />}
          </div>

          {/* Pin Code */}
          <div>
            <label htmlFor="pinCode" className="block text-sm font-semibold text-gray-800 mb-1.5">
              Pin Code / Deployment Location <span className="text-red-500">*</span>
            </label>
            <input
              ref={pinCodeRef}
              type="text"
              id="pinCode"
              name="pinCode"
              required
              aria-required="true"
              aria-invalid={!!(errors.pinCode && touched.pinCode)}
              aria-describedby={errors.pinCode && touched.pinCode ? "pinCode-error" : undefined}
              value={formData.pinCode}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              autoComplete="postal-code"
              placeholder="e.g. 700120 or Barrackpore, West Bengal"
              className={inputCls(!!(errors.pinCode && touched.pinCode))}
            />
            {touched.pinCode && <FieldError id="pinCode-error" message={errors.pinCode} />}
          </div>
        </fieldset>

        {/* ── Section 2: Service Requirements ── */}
        <fieldset className="space-y-5">
          <legend className="flex items-center gap-2 font-roboto font-bold text-navy text-sm uppercase tracking-wide mb-4 pb-2 border-b border-gray-100 w-full">
            <span className="w-6 h-6 rounded-full bg-navy text-white text-xs flex items-center justify-center font-black">2</span>
            Service Requirements
          </legend>

          {/* Service Type */}
          <div>
            <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-800 mb-1.5">
              Service Type <span className="text-red-500">*</span>
            </label>
            <select
              ref={serviceTypeRef}
              id="serviceType"
              name="serviceType"
              required
              aria-required="true"
              aria-invalid={!!(errors.serviceType && touched.serviceType)}
              aria-describedby={errors.serviceType && touched.serviceType ? "serviceType-error" : undefined}
              value={formData.serviceType}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              className={`${inputCls(!!(errors.serviceType && touched.serviceType))} cursor-pointer`}
            >
              <option value="">— Select the primary service required —</option>
              <optgroup label="Security Services">
                <option value="Security Guards">Security Guards (PSARA Licensed)</option>
                <option value="Armed Guards">Armed Guards / Gunman Services</option>
                <option value="Event Security">Event Security &amp; Crowd Management</option>
                <option value="Industrial Security">Industrial &amp; Plant Security</option>
                <option value="Executive VIP Protection">Executive / VIP Close Protection</option>
                <option value="Night Patrolling">Night Patrolling &amp; Perimeter Security</option>
                <option value="Surveillance CCTV">Surveillance &amp; CCTV Monitoring</option>
                <option value="Fire Fighting Safety">Fire Fighting &amp; NBC Safety Teams</option>
              </optgroup>
              <optgroup label="Facility Management">
                <option value="Facility Management">Integrated Facility Management</option>
                <option value="Corporate Housekeeping">Corporate Housekeeping &amp; Cleaning</option>
                <option value="Pest Control">Commercial Pest Control (IPM)</option>
                <option value="MEP Maintenance">MEP Maintenance</option>
                <option value="Horticulture Landscaping">Horticulture &amp; Landscaping</option>
              </optgroup>
              <optgroup label="Manpower &amp; Staffing">
                <option value="Manpower Outsourcing">Contract Labour &amp; Manpower Outsourcing</option>
                <option value="Permanent Placement">Permanent / Executive Staffing</option>
                <option value="Payroll Compliance">Payroll &amp; Statutory Compliance (PF/ESIC)</option>
              </optgroup>
              <optgroup label="Government / PSU">
                <option value="Government PSU Contract">Government / PSU Security Contract</option>
                <option value="Defence Establishment">Defence Establishment Security</option>
              </optgroup>
              <option value="Integrated Multi-Service">Integrated Security + Facility Contract</option>
              <option value="Other Consultation">Other / General Consultation</option>
            </select>
            {touched.serviceType && <FieldError id="serviceType-error" message={errors.serviceType} />}
          </div>

          {/* Site Archetype / Facility Type */}
          <div>
            <label htmlFor="siteType" className="block text-sm font-semibold text-gray-800 mb-1.5">
              Site Archetype / Facility Type <span className="text-red-500">*</span>
            </label>
            <select
              ref={siteTypeRef}
              id="siteType"
              name="siteType"
              required
              aria-required="true"
              aria-invalid={!!(errors.siteType && touched.siteType)}
              aria-describedby={errors.siteType && touched.siteType ? "siteType-error" : undefined}
              value={formData.siteType}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              className={`${inputCls(!!(errors.siteType && touched.siteType))} cursor-pointer`}
            >
              <option value="">— Select facility or establishment type —</option>
              <option value="Manufacturing & Industrial Plant">Manufacturing &amp; Industrial Plant</option>
              <option value="Warehouse & Logistics Hub">Warehouse &amp; Logistics Hub</option>
              <option value="Corporate Office & IT Park">Corporate Office &amp; IT Park</option>
              <option value="Hospital & Healthcare Facility">Hospital &amp; Healthcare Facility</option>
              <option value="Residential Complex & Township">Residential Complex &amp; Township</option>
              <option value="Educational Campus & University">Educational Campus &amp; University</option>
              <option value="Commercial Mall & Retail Hub">Commercial Mall &amp; Retail Hub</option>
              <option value="Government & PSU Establishment">Government &amp; PSU Establishment</option>
              <option value="Construction & Infrastructure Site">Construction &amp; Infrastructure Site</option>
            </select>
            {touched.siteType && <FieldError id="siteType-error" message={errors.siteType} />}
          </div>

          {/* Posts & Shift Coverage Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Number of Posts */}
            <div>
              <label htmlFor="numberOfPosts" className="block text-sm font-semibold text-gray-800 mb-1.5">
                Number of Guard Posts / Points <span className="text-red-500">*</span>
              </label>
              <select
                ref={numberOfPostsRef}
                id="numberOfPosts"
                name="numberOfPosts"
                required
                aria-required="true"
                aria-invalid={!!(errors.numberOfPosts && touched.numberOfPosts)}
                aria-describedby={errors.numberOfPosts && touched.numberOfPosts ? "numberOfPosts-error" : undefined}
                value={formData.numberOfPosts}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={`${inputCls(!!(errors.numberOfPosts && touched.numberOfPosts))} cursor-pointer`}
              >
                <option value="">— Select number of posts —</option>
                <option value="1 Post (Single Point / Main Gate)">1 Post (e.g. Main Gate / Reception)</option>
                <option value="2 Posts (Main Gate + Loading Bay)">2 Posts (e.g. Main Gate + Material Bay)</option>
                <option value="3 - 5 Posts (Perimeter, Gate, CCTV)">3 – 5 Posts (Perimeter, Gate &amp; CCTV)</option>
                <option value="6 - 10 Posts (Industrial Plant / Hospital)">6 – 10 Posts (Industrial Plant / Hospital / IT Park)</option>
                <option value="10+ Posts (Multi-Acre Facility / Cluster)">10+ Posts (Multi-Acre Logistics / Enterprise Complex)</option>
              </select>
              {touched.numberOfPosts && <FieldError id="numberOfPosts-error" message={errors.numberOfPosts} />}
            </div>

            {/* Shift Coverage */}
            <div>
              <label htmlFor="shiftCoverage" className="block text-sm font-semibold text-gray-800 mb-1.5">
                Daily Shift Coverage <span className="text-red-500">*</span>
              </label>
              <select
                ref={shiftCoverageRef}
                id="shiftCoverage"
                name="shiftCoverage"
                required
                aria-required="true"
                aria-invalid={!!(errors.shiftCoverage && touched.shiftCoverage)}
                aria-describedby={errors.shiftCoverage && touched.shiftCoverage ? "shiftCoverage-error" : undefined}
                value={formData.shiftCoverage}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={`${inputCls(!!(errors.shiftCoverage && touched.shiftCoverage))} cursor-pointer`}
              >
                <option value="">— Select shift coverage —</option>
                <option value="24x7 Continuous (Round-the-clock with relievers)">24×7 Continuous (Round-the-clock + mandatory relievers)</option>
                <option value="12 Hours Day Shift (Single guard vigil)">12 Hours Day Shift (Daytime commercial / gate)</option>
                <option value="12 Hours Night Shift (Perimeter lockdown)">12 Hours Night Shift (Perimeter &amp; warehouse vigil)</option>
                <option value="8 Hours Day Shift (Standard office hours)">8 Hours Day Shift (Standard commercial/office)</option>
                <option value="8 Hours Night Shift">8 Hours Night Shift</option>
                <option value="Custom Split Shifts / Rotating Rosters">Custom Split Shifts / Rotating Rosters</option>
              </select>
              {touched.shiftCoverage && <FieldError id="shiftCoverage-error" message={errors.shiftCoverage} />}
            </div>
          </div>

          {/* Manpower Count + Start Date Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Manpower Count */}
            <div>
              <label htmlFor="manpowerCount" className="block text-sm font-semibold text-gray-800 mb-1.5">
                Total Manpower Headcount Needed <span className="text-red-500">*</span>
              </label>
              <select
                ref={manpowerCountRef}
                id="manpowerCount"
                name="manpowerCount"
                required
                aria-required="true"
                aria-invalid={!!(errors.manpowerCount && touched.manpowerCount)}
                aria-describedby={errors.manpowerCount && touched.manpowerCount ? "manpowerCount-error" : undefined}
                value={formData.manpowerCount}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={`${inputCls(!!(errors.manpowerCount && touched.manpowerCount))} cursor-pointer`}
              >
                <option value="">— Select personnel count —</option>
                <option value="1-5">1 – 5 personnel</option>
                <option value="5-20">5 – 20 personnel</option>
                <option value="20-50">20 – 50 personnel</option>
                <option value="50-100">50 – 100 personnel</option>
                <option value="100-500">100 – 500 personnel</option>
                <option value="500+">500+ personnel</option>
              </select>
              {touched.manpowerCount && <FieldError id="manpowerCount-error" message={errors.manpowerCount} />}
            </div>

            {/* Target Start Date */}
            <div>
              <label htmlFor="startDate" className="block text-sm font-semibold text-gray-800 mb-1.5">
                Target Deployment Start Date <span className="text-red-500">*</span>
              </label>
              <select
                ref={startDateRef}
                id="startDate"
                name="startDate"
                required
                aria-required="true"
                aria-invalid={!!(errors.startDate && touched.startDate)}
                aria-describedby={errors.startDate && touched.startDate ? "startDate-error" : undefined}
                value={formData.startDate}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={`${inputCls(!!(errors.startDate && touched.startDate))} cursor-pointer`}
              >
                <option value="">— Select deployment timeline —</option>
                <option value="Immediate (24-48 Hours Rapid Mobilisation)">Immediate (24–48 Hours Rapid Mobilisation)</option>
                <option value="Within 7 Days (Standard Mobilisation)">Within 7 Days (Standard Mobilisation)</option>
                <option value="Within 15-30 Days (Planned Transition)">Within 15–30 Days (Planned Transition)</option>
                <option value="Next Month / Future Financial Quarter">Next Month / Future Financial Quarter</option>
              </select>
              {touched.startDate && <FieldError id="startDate-error" message={errors.startDate} />}
            </div>
          </div>

          {/* Contract Duration */}
          <div>
            <label htmlFor="contractDuration" className="block text-sm font-semibold text-gray-800 mb-1.5">
              Contract Duration
            </label>
            <select
              id="contractDuration"
              name="contractDuration"
              value={formData.contractDuration}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all bg-white cursor-pointer"
            >
              <option value="">— Select duration —</option>
              <option value="1 month">1 Month (Trial)</option>
              <option value="3 months">3 Months</option>
              <option value="6 months">6 Months</option>
              <option value="1 year">1 Year</option>
              <option value="Long-term">Long-Term / Ongoing</option>
            </select>
          </div>
        </fieldset>

        {/* ── Section 3: Contact Details ── */}
        <fieldset className="space-y-5">
          <legend className="flex items-center gap-2 font-roboto font-bold text-navy text-sm uppercase tracking-wide mb-4 pb-2 border-b border-gray-100 w-full">
            <span className="w-6 h-6 rounded-full bg-navy text-white text-xs flex items-center justify-center font-black">3</span>
            Your Contact Details
          </legend>

          {/* Contact Name */}
          <div>
            <label htmlFor="contactName" className="block text-sm font-semibold text-gray-800 mb-1.5">
              Contact Person Name <span className="text-red-500">*</span>
            </label>
            <input
              ref={contactNameRef}
              type="text"
              id="contactName"
              name="contactName"
              required
              aria-required="true"
              aria-invalid={!!(errors.contactName && touched.contactName)}
              aria-describedby={errors.contactName && touched.contactName ? "contactName-error" : undefined}
              value={formData.contactName}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              autoComplete="name"
              placeholder="e.g. Rajesh Kumar (HR Manager / Admin)"
              className={inputCls(!!(errors.contactName && touched.contactName))}
            />
            {touched.contactName && <FieldError id="contactName-error" message={errors.contactName} />}
          </div>

          {/* Phone + Email grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-1.5">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                ref={phoneRef}
                type="tel"
                id="phone"
                name="phone"
                required
                aria-required="true"
                aria-invalid={!!(errors.phone && touched.phone)}
                aria-describedby={errors.phone && touched.phone ? "phone-error" : undefined}
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                autoComplete="tel"
                placeholder="+91 98765 43210"
                className={inputCls(!!(errors.phone && touched.phone))}
              />
              {touched.phone && <FieldError id="phone-error" message={errors.phone} />}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                autoComplete="email"
                placeholder="hr@company.com (optional)"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all bg-white"
              />
            </div>
          </div>
        </fieldset>

        {/* Additional Requirements */}
        <div>
          <label htmlFor="additionalRequirements" className="block text-sm font-semibold text-gray-800 mb-1.5">
            Additional Requirements
          </label>
          <textarea
            id="additionalRequirements"
            name="additionalRequirements"
            rows={4}
            value={formData.additionalRequirements}
            onChange={handleChange}
            disabled={isSubmitting}
            placeholder="e.g. Specific compliance needs (armed guards, ex-servicemen), CCTV integration, specific certifications, or any other details that help us quote accurately..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all bg-white resize-none"
          />
        </div>

        {/* ── Statutory Compliance Guarantee & Buyer Consent (Section 7 Procurement Engine) ── */}
        <div className="p-4 bg-navy/5 border border-navy/10 rounded-xl space-y-3">
          <div className="flex items-start gap-2.5">
            <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <div className="text-xs text-gray-700 leading-relaxed">
              <strong className="text-navy font-bold">100% Statutory Compliance Guarantee:</strong> Every quotation adheres strictly to official State Gazette Minimum Wage Orders, EPF (13%), ESIC (3.25%), Statutory Bonus (8.33%), and PSARA Form-V operating licensing.
            </div>
          </div>
          <label className="flex items-start gap-2.5 cursor-pointer text-xs text-gray-700 select-none pt-2 border-t border-navy/10">
            <input
              type="checkbox"
              name="contactConsent"
              checked={formData.contactConsent}
              onChange={(e) => setFormData((prev) => ({ ...prev, contactConsent: e.target.checked }))}
              className="mt-0.5 w-4 h-4 text-navy rounded border-gray-300 focus:ring-gold"
            />
            <span>
              I authorize ACS Regional Operations Desk to contact me via Phone, Email, or WhatsApp for technical requirement scoping and complimentary physical site assessment.
            </span>
          </label>
        </div>

        {/* ── Submit Button ── */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full relative py-4 px-6 rounded-xl font-roboto font-black text-base tracking-wide transition-all duration-300 flex items-center justify-center gap-3 shadow-lg group overflow-hidden ${
              isSubmitting
                ? "bg-navy-dark text-gold cursor-wait border border-gold/40"
                : submitSuccess
                ? "bg-emerald-600 text-white shadow-emerald-500/20"
                : "bg-gradient-to-r from-gold via-gold-light to-gold hover:from-gold-light hover:to-gold text-navy-dark hover:shadow-xl hover:shadow-gold/30 active:scale-[0.99]"
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Dispatching Your Request…</span>
              </>
            ) : submitSuccess ? (
              <>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span>Quotation Request Sent!</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Request Enterprise Quotation</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1.5">
          <span className="text-emerald-600 font-bold" aria-hidden="true">🔒</span>
          <span>We respond within <strong>24 hours</strong>. Your information is 100% confidential &amp; secure.</span>
        </p>
      </form>

      {/* ── Success Modal ── */}
      {showSuccessModal && submittedLead && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-success-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/80 backdrop-blur-sm animate-fade-in"
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 border border-gold/30 text-center relative animate-fade-in-up">
            {/* Close */}
            <button
              onClick={handleResetModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-navy transition-colors text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100"
              aria-label="Close dialog"
            >
              ✕
            </button>

            {/* Checkmark */}
            <div className="w-16 h-16 bg-emerald-100 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-emerald-500/20">
              <svg className="w-9 h-9 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {submittedLead.id && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/5 border border-navy/10 text-navy font-mono text-xs font-bold mb-3">
                <span className="text-gray-500">Lead Reference:</span>
                <span className="text-gold-dark font-black tracking-wider">{submittedLead.id}</span>
              </div>
            )}

            <h3 id="quote-success-title" className="font-roboto font-black text-navy text-2xl mb-2">
              Quotation Request Dispatched!
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Thank you, <strong className="text-navy">{submittedLead.contactName}</strong> from{" "}
              <strong className="text-navy">{submittedLead.companyName}</strong>. Your requirement has been assigned to our designated enterprise procurement team.
            </p>

            {/* Designated Internal Sales / Account Owner */}
            {submittedLead.assignedOwner && (
              <div className="bg-navy/5 border border-navy/15 rounded-xl p-3.5 mb-5 text-left flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-navy text-gold flex items-center justify-center text-sm font-black shrink-0 mt-0.5 shadow-sm">
                  {submittedLead.assignedOwner.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="text-xs">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gold-dark mb-0.5">Assigned Account Manager</div>
                  <div className="font-bold text-navy text-sm">{submittedLead.assignedOwner}</div>
                  <div className="text-gray-600 font-medium">{submittedLead.assignedOwnerTitle || "Enterprise Accounts Lead"}</div>
                  <div className="text-gray-500 text-[11px] mt-0.5">{submittedLead.assignedOwnerDesk}</div>
                </div>
              </div>
            )}

            {/* Summary card */}
            <div className="bg-off-white rounded-xl p-4 text-left text-xs text-gray-600 space-y-2 mb-6 border border-gray-200">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-500">Service:</span>
                <span className="font-medium text-navy">{submittedLead.serviceType}</span>
              </div>
              {submittedLead.siteType && (
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-500">Facility / Site Type:</span>
                  <span className="font-medium text-navy">{submittedLead.siteType}</span>
                </div>
              )}
              {submittedLead.numberOfPosts && (
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-500">Posts &amp; Coverage:</span>
                  <span className="font-medium text-navy">{submittedLead.numberOfPosts} ({submittedLead.shiftCoverage})</span>
                </div>
              )}
              {submittedLead.startDate && (
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-500">Target Start:</span>
                  <span className="font-medium text-navy">{submittedLead.startDate}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="font-semibold text-gray-500">Response SLA:</span>
                <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                  {submittedLead.slaTarget || "⚡ Within 24 Hours"}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5">
              <a
                href={`https://wa.me/919339988999?text=${encodeURIComponent(
                  `Hello ACS Team, I just submitted a quotation request for ${submittedLead.serviceType} on your website (Company: ${submittedLead.companyName}). Please connect with me at ${submittedLead.phone}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                💬 Chat with Our Team on WhatsApp
              </a>

              <a
                href="tel:+919339988999"
                className="w-full py-3 px-4 rounded-xl bg-navy hover:bg-navy-dark text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                📞 Call Now: +91 93399 88999
              </a>

              <button
                type="button"
                onClick={handleResetModal}
                className="w-full py-2.5 text-xs text-gray-500 hover:text-navy transition-colors font-medium"
              >
                Close &amp; Submit Another Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  FREE SECURITY SITE AUDIT FORM
// ─────────────────────────────────────────────────────────────────────────────

export function FreeSiteAuditForm() {
  const [formData, setFormData] = useState<AuditFormData>({
    name: "",
    phone: "",
    city: "",
    siteType: "",
  });

  const [errors, setErrors] = useState<AuditFormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);

  const validateField = (name: keyof AuditFormErrors, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Your name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        return undefined;
      case "phone": {
        if (!value.trim()) return "Phone number is required";
        const digits = value.replace(/\D/g, "");
        if (digits.length < 10) return "Please enter a valid 10-digit phone number";
        return undefined;
      }
      case "city":
        if (!value.trim()) return "City / site location is required";
        return undefined;
      default:
        return undefined;
    }
  };

  const validateAll = (): boolean => {
    const newErrors: AuditFormErrors = {};
    const newTouched: Record<string, boolean> = { name: true, phone: true, city: true };

    const nameErr = validateField("name", formData.name);
    const phoneErr = validateField("phone", formData.phone);
    const cityErr = validateField("city", formData.city);

    if (nameErr) newErrors.name = nameErr;
    if (phoneErr) newErrors.phone = phoneErr;
    if (cityErr) newErrors.city = cityErr;

    setErrors(newErrors);
    setTouched(newTouched);

    if (nameErr && nameRef.current) nameRef.current.focus();
    else if (phoneErr && phoneRef.current) phoneRef.current.focus();
    else if (cityErr && cityRef.current) cityRef.current.focus();

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const err = validateField(name as keyof AuditFormErrors, value);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name as keyof AuditFormErrors, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validateAll()) {
      setToast({ type: "error", message: "Please fill in the required fields." });
      setTimeout(() => setToast(null), 5000);
      return;
    }

    setIsSubmitting(true);
    setToast(null);

    const endpoint = `${resolveApiBase()}/api/contact`;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          city: formData.city.trim(),
          service: `Free Security Site Audit — ${formData.siteType || "Site type not specified"}`,
          message: `FREE SITE AUDIT REQUEST. Site type: ${formData.siteType || "Not specified"}. Location: ${formData.city.trim()}.`,
          formType: "free_site_audit",
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setSubmitSuccess(true);
        setToast({ type: "success", message: "Audit request sent! Our team will contact you within 24 hours." });
        setFormData({ name: "", phone: "", city: "", siteType: "" });
        setErrors({});
        setTouched({});
      } else {
        setToast({
          type: "error",
          message: data.message || "Could not submit your request. Please call +91 93399 88999.",
        });
      }
    } catch (err: unknown) {
      const isTimeout = (err as { name?: string })?.name === "AbortError";
      setToast({
        type: "error",
        message: isTimeout
          ? "Request timed out. Please call +91 93399 88999."
          : "Network error. Please call us directly at +91 93399 88999.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-emerald-100 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-9 h-9 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-roboto font-black text-navy text-xl mb-2">Audit Scheduled!</h3>
        <p className="text-gray-600 text-sm mb-4">
          Our security consultant will reach out within 24 hours to confirm your free on-site audit.
        </p>
        <a
          href={`https://wa.me/919339988999?text=${encodeURIComponent("Hello ACS, I just requested a free security site audit from your website. Please confirm my appointment.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 py-2.5 px-5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors"
        >
          💬 Confirm on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="relative">
      {toast && <Toast toast={toast} onDismiss={() => setToast(null)} />}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate aria-label="Free security site audit request">
        {/* Name + Phone */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="audit-name" className="block text-sm font-semibold text-gray-800 mb-1.5">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              ref={nameRef}
              type="text"
              id="audit-name"
              name="name"
              required
              aria-required="true"
              aria-invalid={!!(errors.name && touched.name)}
              aria-describedby={errors.name && touched.name ? "audit-name-error" : undefined}
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              autoComplete="name"
              placeholder="Full name"
              className={inputCls(!!(errors.name && touched.name))}
            />
            {touched.name && <FieldError id="audit-name-error" message={errors.name} />}
          </div>

          <div>
            <label htmlFor="audit-phone" className="block text-sm font-semibold text-gray-800 mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              ref={phoneRef}
              type="tel"
              id="audit-phone"
              name="phone"
              required
              aria-required="true"
              aria-invalid={!!(errors.phone && touched.phone)}
              aria-describedby={errors.phone && touched.phone ? "audit-phone-error" : undefined}
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              autoComplete="tel"
              placeholder="+91 98765 43210"
              className={inputCls(!!(errors.phone && touched.phone))}
            />
            {touched.phone && <FieldError id="audit-phone-error" message={errors.phone} />}
          </div>
        </div>

        {/* City + Site Type */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="audit-city" className="block text-sm font-semibold text-gray-800 mb-1.5">
              City / Location <span className="text-red-500">*</span>
            </label>
            <input
              ref={cityRef}
              type="text"
              id="audit-city"
              name="city"
              required
              aria-required="true"
              aria-invalid={!!(errors.city && touched.city)}
              aria-describedby={errors.city && touched.city ? "audit-city-error" : undefined}
              value={formData.city}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              placeholder="e.g. Kolkata, Delhi, Ranchi"
              className={inputCls(!!(errors.city && touched.city))}
            />
            {touched.city && <FieldError id="audit-city-error" message={errors.city} />}
          </div>

          <div>
            <label htmlFor="audit-siteType" className="block text-sm font-semibold text-gray-800 mb-1.5">
              Site Type
            </label>
            <select
              id="audit-siteType"
              name="siteType"
              value={formData.siteType}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all bg-white cursor-pointer"
            >
              <option value="">— Select site type —</option>
              <option value="Office / Corporate">Office / Corporate Campus</option>
              <option value="Factory / Industrial">Factory / Industrial Plant</option>
              <option value="Hospital / Healthcare">Hospital / Healthcare Facility</option>
              <option value="Warehouse / Logistics">Warehouse / Logistics Hub</option>
              <option value="Government Building">Government / PSU Building</option>
              <option value="Residential Complex">Residential Complex / Gated Community</option>
              <option value="Educational Institution">Educational Institution / School</option>
              <option value="Retail / Mall">Retail Store / Shopping Mall</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3.5 px-6 rounded-xl font-roboto font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
            isSubmitting
              ? "bg-navy-dark text-gold cursor-wait border border-gold/30"
              : "bg-navy hover:bg-navy-light text-white hover:shadow-lg active:scale-[0.99]"
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-4 w-4 text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Scheduling Audit…</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Schedule Free Security Audit</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
