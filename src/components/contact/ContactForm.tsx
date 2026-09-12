"use client";

import React, { useState, useRef } from "react";
import { siteConfig } from "@/lib/config";

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  service: string;
  city: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "",
    city: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<{ name: string; service: string; phone: string; id?: string } | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  // Field refs for auto-focusing the first error
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // ─── Field Validation Logic ────────────────────────────────
  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Full name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        return undefined;
      case "email":
        if (!value.trim()) return "Email address is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return "Please enter a valid email address (e.g. name@company.com)";
        return undefined;
      case "phone":
        if (!value.trim()) return "Phone number is required";
        const digitsOnly = value.replace(/\D/g, "");
        if (digitsOnly.length < 10) return "Please enter a valid 10-digit phone number";
        return undefined;
      case "message":
        if (!value.trim()) return "Please describe your requirements";
        if (value.trim().length < 5) return "Please provide at least a brief description (min 5 characters)";
        return undefined;
      default:
        return undefined;
    }
  };

  const validateAll = (): boolean => {
    const newErrors: FormErrors = {};
    const nameErr = validateField("name", formData.name);
    const emailErr = validateField("email", formData.email);
    const phoneErr = validateField("phone", formData.phone);
    const msgErr = validateField("message", formData.message);

    if (nameErr) newErrors.name = nameErr;
    if (emailErr) newErrors.email = emailErr;
    if (phoneErr) newErrors.phone = phoneErr;
    if (msgErr) newErrors.message = msgErr;

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
      organization: true,
      service: true,
      city: true,
    });

    // Auto-focus first invalid field
    if (nameErr && nameRef.current) {
      nameRef.current.focus();
    } else if (emailErr && emailRef.current) {
      emailRef.current.focus();
    } else if (phoneErr && phoneRef.current) {
      phoneRef.current.focus();
    } else if (msgErr && messageRef.current) {
      messageRef.current.focus();
    }

    return Object.keys(newErrors).length === 0;
  };

  // ─── Input Handlers ────────────────────────────────────────
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time validation clearance
    if (touched[name]) {
      const fieldError = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldError = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  // ─── Form Submit (AJAX Fetch — No Page Reload!) ─────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!validateAll()) {
      setToast({
        type: "error",
        message: "Please correct the highlighted errors before submitting.",
      });
      setTimeout(() => setToast(null), 5000);
      return;
    }

    setIsSubmitting(true);
    setToast(null);

    // Dynamic endpoint fallback (supports local dev and live production API)
    const isLocalhost = typeof window !== "undefined" && window.location.hostname === "localhost";
    const apiBase = process.env.NEXT_PUBLIC_API_URL || (isLocalhost ? "http://localhost:4000" : siteConfig.apiUrl);
    const endpoint = `${apiBase}/api/contact`;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000); // 12s timeout

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          organization: formData.organization.trim(),
          service: formData.service.trim() || "General Enquiry",
          city: formData.city.trim(),
          message: formData.message.trim(),
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        // Success State
        setSubmitSuccess(true);
        setSubmittedLead({
          name: formData.name,
          service: formData.service || "General Enquiry",
          phone: formData.phone,
          id: data.data?.id,
        });
        setShowSuccessModal(true);
        setToast({
          type: "success",
          message: "Your message has been delivered to ACS operations team!",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          service: "",
          city: "",
          message: "",
        });
        setErrors({});
        setTouched({});
      } else {
        // Server returned 4xx or 5xx
        const errorMessage = data.message || "Failed to send message. Please try again or call our hotline.";
        setToast({
          type: "error",
          message: errorMessage,
        });
      }
    } catch (err: any) {
      console.error("[ContactForm] Submit error:", err);
      const isTimeout = err?.name === "AbortError";
      setToast({
        type: "error",
        message: isTimeout
          ? "Request timed out. Please check your connection or call +91 94770 06681."
          : "Network error connecting to ACS server. Please call us directly at +91 94770 06681.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setShowSuccessModal(false);
    setSubmitSuccess(false);
    setSubmittedLead(null);
  };

  return (
    <div className="relative">
      {/* ── Floating Notification Toast ── */}
      {toast && (
        <div
          role="alert"
          className={`fixed top-5 right-5 z-50 max-w-md p-4 rounded-xl shadow-2xl border flex items-start gap-3 transition-all duration-300 animate-slide-in ${
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
            onClick={() => setToast(null)}
            className="ml-auto text-white/70 hover:text-white transition-colors"
            aria-label="Dismiss toast"
          >
            ✕
          </button>
        </div>
      )}

      {/* ── Form Container ── */}
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              ref={nameRef}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              autoComplete="name"
              placeholder="e.g. Ramesh Chandra Sharma"
              className={`w-full border rounded-lg px-4 py-3 text-gray-800 transition-all focus:outline-none focus:ring-2 ${
                errors.name && touched.name
                  ? "border-red-500 bg-red-50/40 focus:ring-red-400"
                  : "border-gray-300 focus:ring-gold focus:border-transparent bg-white"
              }`}
            />
          </div>
          {errors.name && touched.name && (
            <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
              <span>⚠️</span> {errors.name}
            </p>
          )}
        </div>

        {/* Email & Phone Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              autoComplete="email"
              placeholder="corporate@company.com"
              className={`w-full border rounded-lg px-4 py-3 text-gray-800 transition-all focus:outline-none focus:ring-2 ${
                errors.email && touched.email
                  ? "border-red-500 bg-red-50/40 focus:ring-red-400"
                  : "border-gray-300 focus:ring-gold focus:border-transparent bg-white"
              }`}
            />
            {errors.email && touched.email && (
              <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                <span>⚠️</span> {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                ref={phoneRef}
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                autoComplete="tel"
                placeholder="+91 98765 43210"
                className={`w-full border rounded-lg px-4 py-3 text-gray-800 transition-all focus:outline-none focus:ring-2 ${
                  errors.phone && touched.phone
                    ? "border-red-500 bg-red-50/40 focus:ring-red-400"
                    : "border-gray-300 focus:ring-gold focus:border-transparent bg-white"
                }`}
              />
            </div>
            {errors.phone && touched.phone && (
              <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                <span>⚠️</span> {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Organisation & City */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="organization" className="block text-sm font-semibold text-gray-800 mb-1.5">
              Organisation / Company
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              disabled={isSubmitting}
              autoComplete="organization"
              placeholder="e.g. Tata Motors / Apollo Hospitals"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all bg-white"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-semibold text-gray-800 mb-1.5">
              City / Deployment Location
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="e.g. Kolkata, Barrackpore, Delhi"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all bg-white"
            />
          </div>
        </div>

        {/* Service Required */}
        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-gray-800 mb-1.5">
            Service Required
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all bg-white cursor-pointer"
          >
            <option value="">-- Select Required Service (or General Consultation) --</option>
            <optgroup label="Security & Safety Services">
              <option value="Security Guard Services">Security Guard Services (PSARA Licensed)</option>
              <option value="Armed Guard Services">Armed Guard & Gunman Services</option>
              <option value="Surveillance & CCTV Monitoring">Surveillance & CCTV Control Room</option>
              <option value="Night Patrolling Services">Night Patrolling & Perimeter Security</option>
              <option value="Executive & VIP Protection">Executive & VIP Close Protection</option>
              <option value="Fire Fighting & Safety">Fire Fighting & NBC Safety Teams</option>
              <option value="Event Security Management">Event Security & Crowd Management</option>
              <option value="Industrial Security">Industrial & Plant Security</option>
            </optgroup>
            <optgroup label="Facility Management">
              <option value="Corporate Housekeeping">Corporate Housekeeping & Office Cleaning</option>
              <option value="Janitorial & Deep Cleaning">Janitorial & Deep Cleaning Services</option>
              <option value="Commercial Pest Control">Commercial Integrated Pest Control (IPM)</option>
              <option value="Facade & Glass Cleaning">High-Rise Facade & Glass Cleaning</option>
              <option value="MEP Maintenance">MEP (Mechanical, Electrical, Plumbing) Maintenance</option>
            </optgroup>
            <optgroup label="Manpower & Placement">
              <option value="Manpower Outsourcing">Contract Labour & Manpower Outsourcing</option>
              <option value="Permanent & Temporary Placement">Permanent & Executive Staffing</option>
              <option value="Payroll & Compliance Management">Payroll & Statutory Compliance (PF/ESIC)</option>
            </optgroup>
            <optgroup label="Horticulture">
              <option value="Horticulture & Landscaping">Horticulture, Garden Design & Grounds Keeping</option>
            </optgroup>
            <option value="Integrated Multi-Service Contract">Integrated Facility + Security Contract</option>
            <option value="Other / General Consultation">Other / General Consultation</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-1.5">
            Message / Specific Requirements <span className="text-red-500">*</span>
          </label>
          <textarea
            ref={messageRef}
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            placeholder="Tell us about the number of personnel needed, shift hours (day/night/24x7), site type, or any specific compliance needs..."
            className={`w-full border rounded-lg px-4 py-3 text-gray-800 transition-all focus:outline-none focus:ring-2 resize-none ${
              errors.message && touched.message
                ? "border-red-500 bg-red-50/40 focus:ring-red-400"
                : "border-gray-300 focus:ring-gold focus:border-transparent bg-white"
            }`}
          />
          {errors.message && touched.message && (
            <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
              <span>⚠️</span> {errors.message}
            </p>
          )}
        </div>

        {/* ── Animated Submit Button ── */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full relative py-4 px-6 rounded-xl font-roboto font-bold text-base transition-all duration-300 flex items-center justify-center gap-3 shadow-lg group overflow-hidden ${
              isSubmitting
                ? "bg-navy-dark text-gold cursor-wait border border-gold/40 shadow-gold/10"
                : submitSuccess
                ? "bg-emerald-600 text-white shadow-emerald-500/20"
                : "bg-gradient-to-r from-gold via-gold-light to-gold hover:from-gold-light hover:to-gold text-navy-dark hover:shadow-xl hover:shadow-gold/25 active:scale-[0.99]"
            }`}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-gold"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span className="tracking-wide">Dispatching Enquiry...</span>
              </>
            ) : submitSuccess ? (
              <>
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span>Enquiry Sent Successfully!</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </>
            )}
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1.5">
          <span className="text-emerald-600 font-bold">🔒</span>
          <span>We respond within 24 hours. Your information is 100% confidential &amp; encrypted.</span>
        </p>
      </form>

      {/* ── Celebratory Success Modal ── */}
      {showSuccessModal && submittedLead && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/80 backdrop-blur-sm animate-fade-in"
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 border border-gold/30 text-center relative animate-scale-up">
            {/* Close Button */}
            <button
              onClick={handleResetForm}
              className="absolute top-4 right-4 text-gray-400 hover:text-navy transition-colors text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Big Animated Success Checkmark */}
            <div className="w-16 h-16 bg-emerald-100 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600 shadow-lg shadow-emerald-500/20">
              <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h3 className="font-roboto font-black text-navy text-2xl mb-2">
              Enquiry Submitted Successfully!
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Thank you, <strong className="text-navy">{submittedLead.name}</strong>. Your enquiry for{" "}
              <strong className="text-gold">{submittedLead.service}</strong> has been received by Advance Corporate Security.
              Our enterprise team will reach out to you at <strong className="text-navy">{submittedLead.phone}</strong> within <strong>24 hours</strong>.
            </p>

            {/* Submitted Reference Details */}
            <div className="bg-off-white rounded-xl p-4 text-left text-xs text-gray-600 space-y-1.5 mb-6 border border-gray-200">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-500">Service:</span>
                <span className="font-medium text-navy">{submittedLead.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-500">Contact:</span>
                <span className="font-medium text-navy">{submittedLead.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-500">Status:</span>
                <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">⚡ Priority 1 Dispatch</span>
              </div>
            </div>

            {/* Direct Escalation Action Buttons */}
            <div className="space-y-2.5">
              <a
                href={`https://wa.me/919339988999?text=${encodeURIComponent(
                  `Hello ACS Team, I just submitted an enquiry for ${submittedLead.service} on your website. My phone is ${submittedLead.phone}. Please connect with me.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <span>💬 Chat with Operations on WhatsApp</span>
              </a>

              <a
                href="tel:+919477006681"
                className="w-full py-3 px-4 rounded-xl bg-navy hover:bg-navy-dark text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <span>📞 Immediate Assistance: +91 94770 06681</span>
              </a>

              <button
                type="button"
                onClick={handleResetForm}
                className="w-full py-2.5 text-xs text-gray-500 hover:text-navy transition-colors font-medium"
              >
                Done / Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
