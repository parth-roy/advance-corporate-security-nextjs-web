"use client";

// src/components/common/WhatsAppIntentModal.tsx
// ============================================================
// ACS — Smart WhatsApp Intent Modal (MetroMitra Architecture)
// Dynamic intent switcher, quick service chips, real-time WhatsApp
// bubble preview, pre-filled location from CityContext, and 1-click wa.me dispatch.
// ============================================================

import React, { useState, useEffect } from "react";
import { X, Shield, Building2, Users, PhoneCall, Check } from "lucide-react";
import { useCity } from "@/context/CityContext";

export interface IntentItem {
  id: "SECURITY" | "FACILITY" | "MANPOWER" | "SUPPORT";
  title: string;
  badge: string;
  badgeColor: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  subtitle: string;
  defaultService: string;
  options: string[];
}

const INTENTS: IntentItem[] = [
  {
    id: "SECURITY",
    title: "Deploy Security Guards / PSARA",
    badge: "Security & Safety",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
    icon: Shield,
    subtitle: "PSARA licensed security guards, surveillance, VIP protection & cash management",
    defaultService: "Security Guards",
    options: [
      "Security Guards",
      "Investigation & Surveillance",
      "Executive Protection",
      "Cash Management",
      "Event Assignments",
    ],
  },
  {
    id: "FACILITY",
    title: "Corporate Facility Management",
    badge: "Facility Management",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    icon: Building2,
    subtitle: "Housekeeping, payroll services, building maintenance, janitorial & waste management",
    defaultService: "Housekeeping",
    options: [
      "Housekeeping",
      "PayRoll Services",
      "Building Maintenance",
      "Cleaning & Janitorial",
      "Waste Management",
      "Event Management",
    ],
  },
  {
    id: "MANPOWER",
    title: "Placement Services & Staffing",
    badge: "Placement Services",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    icon: Users,
    subtitle: "Career, employment, executive, and direct placement staffing solutions",
    defaultService: "Career Placement Services",
    options: [
      "Career Placement Services",
      "Employment Placement Services",
      "Executive Placement Services",
      "Direct Placement Services",
    ],
  },
  {
    id: "SUPPORT",
    title: "Horticulture & 24×7 Support",
    badge: "Horticulture & Help",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    icon: PhoneCall,
    subtitle: "Landscaping, groundskeeping, garden planning, and 24×7 control room help",
    defaultService: "Landscaping & Groundskeeping",
    options: [
      "Landscaping & Groundskeeping",
      "Space Planning & Designing of Garden or Lawns",
      "Development of Farms",
      "Emergency Deployment",
      "Billing & Quotation",
    ],
  },
];

interface WhatsAppIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIntent?: "SECURITY" | "FACILITY" | "MANPOWER" | "SUPPORT";
}

export default function WhatsAppIntentModal({
  isOpen,
  onClose,
  initialIntent = "SECURITY",
}: WhatsAppIntentModalProps) {
  const { currentCity } = useCity();
  const [selectedIntent, setSelectedIntent] = useState<
    "SECURITY" | "FACILITY" | "MANPOWER" | "SUPPORT"
  >(initialIntent);

  // Quick-fill states
  const [secService, setSecService] = useState("Security Guards");
  const [secGuardsCount, setSecGuardsCount] = useState("3 - 5 Guards (24x7)");
  const [secLocation, setSecLocation] = useState("");

  const [facService, setFacService] = useState("Housekeeping");
  const [facPremises, setFacPremises] = useState("Corporate Office / IT Park");
  const [facLocation, setFacLocation] = useState("");

  const [manService, setManService] = useState("Career Placement Services");
  const [manCount, setManCount] = useState("10 - 25 Workers");
  const [manLocation, setManLocation] = useState("");

  const [supportTopic, setSupportTopic] = useState("Landscaping & Groundskeeping");
  const [supportPhone, setSupportPhone] = useState("");
  const [supportOrg, setSupportOrg] = useState("");

  // Sync initialIntent and location when currentCity changes
  useEffect(() => {
    if (initialIntent) {
      setSelectedIntent(initialIntent);
    }
  }, [initialIntent]);

  useEffect(() => {
    if (currentCity?.name) {
      const locStr = `${currentCity.name}, ${currentCity.state}`;
      setSecLocation(locStr);
      setFacLocation(locStr);
      setManLocation(locStr);
    }
  }, [currentCity]);

  // Prevent background scroll and support ESC key
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Build the pre-formatted WhatsApp template
  const getWhatsAppMessage = () => {
    if (selectedIntent === "SECURITY") {
      return `👋 Hello Advance Corporate Security (ACS) Team,

I would like to enquire about *Security Guard Deployment*:
🛡️ Service Needed: ${secService}
👥 Guard Requirement: ${secGuardsCount}
📍 Deployment Location: ${secLocation.trim() || currentCity.name}
🏛️ Compliance: PSARA Licensed & ISO 9001:2015

Please connect with me and share a customized commercial quotation!`;
    }

    if (selectedIntent === "FACILITY") {
      return `👋 Hello Advance Corporate Security (ACS) Team,

I need a quotation for *Corporate Facility Management*:
🧹 Service Needed: ${facService}
🏢 Premises Type: ${facPremises}
📍 Location / City: ${facLocation.trim() || currentCity.name}
📋 Standard: ISO 9001:2015 Documented SOPs

Please arrange a site inspection and share quotation details!`;
    }

    if (selectedIntent === "MANPOWER") {
      return `👋 Hello Advance Corporate Security (ACS) Team,

I have a *Contract Labour & Manpower Supply requirement*:
👷 Workforce Type: ${manService}
👥 Headcount Needed: ${manCount}
📍 Work Site Location: ${manLocation.trim() || currentCity.name}
📜 Statutory: 100% PF, ESIC & Minimum Wage Compliant

Please share deployment timeline and contract labour terms!`;
    }

    // SUPPORT
    return `👋 Hello Advance Corporate Security (ACS) Team,

I am contacting the *24×7 Central Control Room*:
🚨 Topic: ${supportTopic}
🏢 Organization: ${supportOrg.trim() || "Enterprise Client"}
📱 Contact Number: ${supportPhone.trim() || "[My Phone Number]"}
📍 Hub: ${currentCity.name}

Kindly attend to this request promptly. Thank you!`;
  };

  const handleOpenWhatsApp = () => {
    const text = getWhatsAppMessage();
    // ACS WhatsApp contact number: +91 79801 47044
    const url = `https://wa.me/917980147044?text=${encodeURIComponent(text)}`;
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
    onClose();
  };

  const currentIntentConfig = INTENTS.find((i) => i.id === selectedIntent) || INTENTS[0];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-intent-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl max-h-[92vh] flex flex-col bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header — WhatsApp Green & ACS Navy branding */}
        <div className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-800 text-white p-4 sm:p-5 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <span className="p-1 rounded-lg bg-white/20 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </span>
            <span className="text-[11px] font-black uppercase tracking-wider text-emerald-200">
              Advance Corporate Security — Official WhatsApp Desk
            </span>
          </div>

          <h2 id="whatsapp-intent-title" className="text-lg sm:text-xl font-black tracking-tight text-white">
            Connect with ACS Operations Team
          </h2>
          <p className="text-xs text-emerald-100 font-medium">
            Select your requirement below to dispatch an immediate quotation &amp; compliance summary.
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-5 space-y-4">
          {/* Step 1: Select Intent */}
          <div>
            <label className="block text-[11px] font-black uppercase tracking-wider text-slate-500 mb-2">
              1. Select Service Category:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {INTENTS.map((intent) => {
                const Icon = intent.icon;
                const isSelected = selectedIntent === intent.id;
                return (
                  <button
                    key={intent.id}
                    type="button"
                    onClick={() => setSelectedIntent(intent.id)}
                    className={`p-3 rounded-xl border-2 text-left transition-all cursor-pointer flex items-start gap-2.5 relative ${
                      isSelected
                        ? "border-emerald-600 bg-emerald-50/70 shadow-xs"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected
                          ? "bg-emerald-600 text-white shadow-xs"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0 pr-4">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {intent.title}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 leading-tight line-clamp-1">
                        {intent.subtitle}
                      </p>
                    </div>

                    {/* Radio Indicator */}
                    <div className="absolute top-3 right-3">
                      <div
                        className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all ${
                          isSelected
                            ? "border-emerald-600 bg-emerald-600"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {isSelected && <Check size={9} className="text-white stroke-[3]" />}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Quick Details Form */}
          <div className="bg-slate-50 p-3 sm:p-3.5 rounded-2xl border border-slate-200 space-y-2.5">
            <label className="block text-[11px] font-black uppercase tracking-wider text-slate-600">
              2. Quick Details ({currentIntentConfig.badge}):
            </label>

            {/* Customizer for SECURITY */}
            {selectedIntent === "SECURITY" && (
              <div className="space-y-2.5">
                <div>
                  <span className="text-[11px] font-bold text-slate-600 block mb-1">
                    Choose Security Service:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentIntentConfig.options.map((svc) => (
                      <button
                        key={svc}
                        type="button"
                        onClick={() => setSecService(svc)}
                        className={`text-xs px-2.5 py-1 rounded-lg font-bold border transition-all cursor-pointer ${
                          secService === svc
                            ? "bg-emerald-600 text-white border-emerald-600 shadow-2xs"
                            : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        {svc}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1">
                      Guard Headcount / Shift:
                    </label>
                    <select
                      value={secGuardsCount}
                      onChange={(e) => setSecGuardsCount(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-emerald-500"
                    >
                      <option>1 - 2 Guards (Day/Night)</option>
                      <option>3 - 5 Guards (24x7)</option>
                      <option>6 - 10 Guards (Industrial)</option>
                      <option>10+ Guards (Large Campus / Plant)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1">
                      Deployment Location:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Barrackpore, Kolkata"
                      value={secLocation}
                      onChange={(e) => setSecLocation(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Customizer for FACILITY */}
            {selectedIntent === "FACILITY" && (
              <div className="space-y-2.5">
                <div>
                  <span className="text-[11px] font-bold text-slate-600 block mb-1">
                    Choose Facility Service:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentIntentConfig.options.map((svc) => (
                      <button
                        key={svc}
                        type="button"
                        onClick={() => setFacService(svc)}
                        className={`text-xs px-2.5 py-1 rounded-lg font-bold border transition-all cursor-pointer ${
                          facService === svc
                            ? "bg-emerald-600 text-white border-emerald-600 shadow-2xs"
                            : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        {svc}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1">
                      Premises Type:
                    </label>
                    <select
                      value={facPremises}
                      onChange={(e) => setFacPremises(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-emerald-500"
                    >
                      <option>Corporate Office / IT Park</option>
                      <option>Hospital / Healthcare Centre</option>
                      <option>Industrial Plant / Warehouse</option>
                      <option>Shopping Mall / Commercial Tower</option>
                      <option>Educational Institution</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1">
                      Facility Location:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Barrackpore, Kolkata"
                      value={facLocation}
                      onChange={(e) => setFacLocation(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Customizer for MANPOWER */}
            {selectedIntent === "MANPOWER" && (
              <div className="space-y-2.5">
                <div>
                  <span className="text-[11px] font-bold text-slate-600 block mb-1">
                    Choose Workforce Category:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentIntentConfig.options.map((svc) => (
                      <button
                        key={svc}
                        type="button"
                        onClick={() => setManService(svc)}
                        className={`text-xs px-2.5 py-1 rounded-lg font-bold border transition-all cursor-pointer ${
                          manService === svc
                            ? "bg-emerald-600 text-white border-emerald-600 shadow-2xs"
                            : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        {svc}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1">
                      Headcount Required:
                    </label>
                    <select
                      value={manCount}
                      onChange={(e) => setManCount(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-emerald-500"
                    >
                      <option>3 - 5 Workers</option>
                      <option>10 - 25 Workers</option>
                      <option>25 - 50 Workers</option>
                      <option>50+ Bulk Crew</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1">
                      Work Site Location:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Barrackpore, Kolkata"
                      value={manLocation}
                      onChange={(e) => setManLocation(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Customizer for SUPPORT */}
            {selectedIntent === "SUPPORT" && (
              <div className="space-y-2.5">
                <div>
                  <span className="text-[11px] font-bold text-slate-600 block mb-1">
                    Select Topic:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentIntentConfig.options.map((top) => (
                      <button
                        key={top}
                        type="button"
                        onClick={() => setSupportTopic(top)}
                        className={`text-xs px-2.5 py-1 rounded-lg font-bold border transition-all cursor-pointer ${
                          supportTopic === top
                            ? "bg-emerald-600 text-white border-emerald-600 shadow-2xs"
                            : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        {top}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1">
                      Organization Name:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ABC Industries / PSU"
                      value={supportOrg}
                      onChange={(e) => setSupportOrg(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1">
                      Your Contact Mobile:
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={supportPhone}
                      onChange={(e) => setSupportPhone(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Step 3: Live WhatsApp Bubble Preview */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                3. Live WhatsApp Message Preview:
              </span>
              <span className="text-[10px] font-bold text-emerald-700 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Ready to Send
              </span>
            </div>

            <div className="bg-[#e5ddd5] p-3 rounded-2xl border border-slate-200">
              <div className="bg-white rounded-xl rounded-tl-none p-3 shadow-xs max-w-lg border border-slate-100">
                <p className="text-[11px] sm:text-xs text-slate-800 whitespace-pre-line font-mono leading-relaxed">
                  {getWhatsAppMessage()}
                </p>
                <div className="text-right mt-1">
                  <span className="text-[9px] text-slate-400">Just now ✓✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-center sm:text-left">
            <span className="text-xs font-bold text-slate-800 block">
              Official Desk: +91 79801 47044
            </span>
            <span className="text-[11px] text-slate-500">
              Average WhatsApp response time: &lt; 5 minutes
            </span>
          </div>

          <button
            type="button"
            onClick={handleOpenWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-95 cursor-pointer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            <span>Open WhatsApp &amp; Send Message →</span>
          </button>
        </div>
      </div>
    </div>
  );
}
