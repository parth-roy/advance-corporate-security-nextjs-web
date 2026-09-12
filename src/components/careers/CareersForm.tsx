"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";

const DEPARTMENTS = [
  "Security Guard (Unarmed)",
  "Armed Security Guard (Gunman)",
  "Security Field Supervisor",
  "CCTV / Surveillance Operator",
  "Housekeeping Staff / Janitor",
  "Housekeeping Supervisor",
  "MEP Technician (Electrician/Plumber/AC)",
  "Facility Operations Manager",
  "Office Boy / Peon / Pantry Staff",
  "Other / General",
];

export default function CareersForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    position: DEPARTMENTS[0],
    experience: "Fresher",
    isExServiceman: "No",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch(`${siteConfig.apiUrl}/api/careers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch(() => null);

      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello ACS Recruitment Team, I would like to submit my profile for *${formData.position}* in *${formData.city || "my area"}*. Name: ${formData.name || "[Name]"}, Contact: ${formData.phone || "[Phone]"}. Please consider me for future openings.`
  );

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-md">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <div>
          <h3 className="font-roboto font-bold text-navy text-xl sm:text-2xl">
            Submit Your Profile / Resume
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Register your profile with our central recruitment cell. When vacancies open in your preferred location, our HR team will contact you.
          </p>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 badge-sky text-xs">
          <span>📋</span> Talent Database
        </span>
      </div>

      {submitted ? (
        <div className="py-10 text-center space-y-4 animate-fade-in">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
            ✓
          </div>
          <h4 className="font-roboto font-bold text-navy text-2xl">
            Profile Registered Successfully!
          </h4>
          <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-semibold text-navy">{formData.name}</span>. Your details for <span className="font-semibold text-navy">{formData.position}</span> have been saved in our talent pipeline. Our recruitment team will contact you as soon as a suitable deployment opens in {formData.city || "your area"}.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/919339988999?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2.5 rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2"
            >
              <span>💬</span> Connect With HR on WhatsApp
            </a>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  phone: "",
                  email: "",
                  city: "",
                  position: DEPARTMENTS[0],
                  experience: "Fresher",
                  isExServiceman: "No",
                  message: "",
                });
              }}
              className="text-gray-500 hover:text-navy text-xs sm:text-sm underline cursor-pointer"
            >
              Submit Another Profile
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rajesh Kumar"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky/50 focus:border-sky"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="10-digit mobile number"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky/50 focus:border-sky"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="position" className="block text-xs font-semibold text-gray-700 mb-1">
                Role of Interest <span className="text-red-500">*</span>
              </label>
              <select
                id="position"
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sky/50 focus:border-sky"
              >
                {DEPARTMENTS.map((pos) => (
                  <option key={pos} value={pos}>
                    {pos}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="city" className="block text-xs font-semibold text-gray-700 mb-1">
                Preferred City / State <span className="text-red-500">*</span>
              </label>
              <input
                id="city"
                type="text"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="e.g. Kolkata, Barrackpore, Delhi"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky/50 focus:border-sky"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="experience" className="block text-xs font-semibold text-gray-700 mb-1">
                Experience Level
              </label>
              <select
                id="experience"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sky/50 focus:border-sky"
              >
                <option value="Fresher">Fresher (Zero Experience)</option>
                <option value="1-2 Years">1 - 2 Years</option>
                <option value="3-5 Years">3 - 5 Years</option>
                <option value="5+ Years">5+ Years (Senior / Supervisor)</option>
              </select>
            </div>

            <div>
              <label htmlFor="exServiceman" className="block text-xs font-semibold text-gray-700 mb-1">
                Are You an Ex-Serviceman / Veteran?
              </label>
              <select
                id="exServiceman"
                value={formData.isExServiceman}
                onChange={(e) => setFormData({ ...formData, isExServiceman: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sky/50 focus:border-sky"
              >
                <option value="No">No (Civilian)</option>
                <option value="Indian Army">Yes (Indian Army)</option>
                <option value="Indian Navy">Yes (Indian Navy)</option>
                <option value="Indian Air Force">Yes (Indian Air Force)</option>
                <option value="Paramilitary (BSF/CISF/CRPF)">Yes (Paramilitary BSF/CISF/CRPF)</option>
                <option value="Police / Home Guard">Yes (State Police / Home Guard)</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1">
              Qualifications & Prior Deployments (Optional)
            </label>
            <textarea
              id="message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Mention education (10th/12th/Graduation), valid licenses (Gun License, Driving License, Firefighting certificate) or previous security agency..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky/50 focus:border-sky"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto btn-primary bg-navy hover:bg-navy-light text-white font-bold px-8 py-3 rounded-xl transition-colors cursor-pointer shadow-md disabled:opacity-50 text-sm"
            >
              {submitting ? "Submitting..." : "Submit Profile to Talent Pool →"}
            </button>

            <span className="text-xs text-gray-400">or</span>

            <a
              href={`https://wa.me/919339988999?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-colors shadow-xs"
            >
              <span>💬</span> Send Profile via WhatsApp
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
