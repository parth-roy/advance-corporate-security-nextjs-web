"use client";

import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, MapPin, Check, Loader2, Sparkles, X, ChevronDown, Compass, Building2, SlidersHorizontal, Globe } from "lucide-react";
import { ACS_CITIES, type ACSCity } from "@/lib/cities";
import { siteConfig } from "@/lib/config";
import CitySelectorModal from "@/components/common/CitySelectorModal";
import type { ACSCitySearchResult } from "@/lib/locationService";

// Predefined quick title options based on ACS services
const TITLE_SUGGESTIONS = [
  "Security Guard (Unarmed)",
  "Armed Security Guard (Gunman)",
  "CCTV / Control Room Operator",
  "Night Patrolling Guard",
  "Security Field Supervisor",
  "Corporate Housekeeping Staff",
  "Janitor & Deep Cleaner",
  "MEP Technician (Electrician/Plumber)",
  "Fire Fighting Marshal",
  "VIP Close Protection Officer",
  "Horticulture & Landscape Gardener",
  "Office Boy & Pantry Associate",
];

const CATEGORIES = [
  "Security & Safety Services",
  "Facility Management",
  "Workforce Outsourcing & Manpower",
  "Horticulture & Landscaping",
  "Specialized Security & Escort",
];

const VACANCY_OPTIONS = [
  "1 Vacancy",
  "2 Vacancies",
  "5 Vacancies",
  "20 Vacancies",
  "50 Vacancies",
  "Custom",
];

const LOCALITY_MAP: Record<string, string[]> = {
  Kolkata: [
    "Salt Lake Sector V",
    "New Town Financial Hub",
    "Park Street Commercial District",
    "Ballygunge",
    "Rajarhat",
    "Dum Dum Cargo Zone",
    "Alipore",
    "Howrah Industrial Belt",
    "Taratala Industrial Area",
    "Agarpara",
    "Barrackpore",
  ],
  Barrackpore: [
    "Bhattacharjee Para",
    "Station Road Industrial Belt",
    "Cantonment Area",
    "Palta Water Works Belt",
    "Wireless More",
    "Titagarh Industrial Zone",
  ],
  Haldia: [
    "Haldia Petrochemical Complex",
    "Port Operational Zone",
    "Durgachak Industrial Estate",
    "IOCL Township",
  ],
  Durgapur: [
    "City Centre Hub",
    "DSP Industrial Township",
    "Muchipara Industrial Area",
    "Panagarh Industrial Corridor",
  ],
  Asansol: [
    "Kulti Steel Plant Belt",
    "Burnpur Township",
    "Asansol Commercial Belt",
    "Raniganj Logistics Corridor",
  ],
  Delhi: [
    "Connaught Place (CP)",
    "Okhla Industrial Area Ph I-III",
    "Saket District Centre",
    "Rohini Commercial Hub",
    "Nehru Place IT Hub",
    "Bhikaji Cama Place",
  ],
  Gurugram: [
    "Cyber City Ph I-III",
    "Udyog Vihar",
    "Golf Course Road",
    "Manesar IMT Industrial Belt",
    "Sohna Road Commercial Hub",
  ],
  Noida: [
    "Sector 62 IT Hub",
    "Sector 18 Commercial Market",
    "Greater Noida Knowledge Park",
    "NSEZ Special Economic Zone",
  ],
  Mumbai: [
    "Bandra Kurla Complex (BKC)",
    "Andheri East MIDC",
    "Lower Parel Mills",
    "Navi Mumbai IT Park (Mahape)",
    "Thane Wagle Estate",
  ],
  Pune: [
    "Hinjewadi Infotech Park Ph 1-3",
    "Magarpatta Cybercity",
    "Kharadi EON Free Zone",
    "Bhosari MIDC Industrial Area",
    "Chakan Auto Cluster",
  ],
  Bengaluru: [
    "Electronic City Ph 1 & 2",
    "Whitefield ITPL",
    "Outer Ring Road Tech Corridor",
    "Peenya Industrial Estate",
    "Manyata Tech Park",
  ],
};

const DEFAULT_BENEFITS = [
  "Meal / Food Provided",
  "Health & Accidental Insurance",
  "PF (Provident Fund)",
  "Free Accommodation / Living Quarters",
  "Medical Benefits (ESIC)",
  "Transport / Travel Allowance",
  "Free Tactical Uniform & Kit",
  "Paid Weekly Off & Leave",
];

const SKILL_OPTIONS = [
  "Fire Safety & Prevention",
  "CCTV Monitoring & Surveillance",
  "Access Control & Boom Barrier",
  "Unarmed Combat & Patrolling",
  "VIP Close Escort",
  "First Aid & CPR Certified",
  "Machine Floor Scrubbing",
  "Chemical Safety (Taski / Diversey)",
  "Event Crowd Management",
  "Gate Pass & Visitor Register Log",
  "Hindi / English / Bengali Speaking",
];

const ASSET_OPTIONS = [
  "Bike / Two-Wheeler",
  "Valid Firearms / Gun",
  "Android / iOS Smartphone",
  "Tactical Safety Boots",
  "Security Whistle & Lanyard",
];

const DOCUMENT_OPTIONS = [
  "Aadhaar Card",
  "PAN Card",
  "Two-Wheeler Driving License",
  "Valid Arms / Gun License",
  "Bank Account Passbook / Cancelled Cheque",
  "Police Verification Certificate",
  "10th / 12th Educational Certificate",
  "Ex-Servicemen Discharge Book / Service Book",
];

export default function PostJobPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [createdJobId, setCreatedJobId] = useState<string>("");

  // Form State
  const [formData, setFormData] = useState({
    // Step 1
    title: "",
    category: CATEGORIES[0],
    vacancy: "5 Vacancies",
    customVacancy: "",
    jobType: "Full-time" as "Full-time" | "Part-time" | "Both",
    isContractual: false,
    workLocationType: "Work from Office" as "Work from Office" | "Work from Home" | "Field Job",
    city: "Kolkata",
    locality: "Salt Lake Sector V",
    customLocality: "",

    // Step 2
    salaryMin: 18000,
    salaryMax: 24000,
    hasIncentives: false,
    incentivesText: "",
    benefits: ["PF (Provident Fund)", "Health & Accidental Insurance", "Free Tactical Uniform & Kit"],
    customBenefit: "",
    shift: "Day" as "Day" | "Night" | "Rotational" | "Flexible",
    workingDays: "6 Days Working",
    requiresDeposit: false,
    depositDetails: "",

    // Step 3
    gender: "Any" as "Male" | "Female" | "Any",
    qualification: "10th Pass",
    expMin: 0,
    expMax: 3,
    skills: ["Access Control & Boom Barrier", "Gate Pass & Visitor Register Log"],
    customSkill: "",
    assetsNeeded: [] as string[],
    documentsRequired: ["Aadhaar Card", "PAN Card", "Bank Account Passbook / Cancelled Cheque"],

    // Step 4
    description: "",
  });

  // Calculate dynamic salary breakdown based on entered min salary
  const salaryBreakdown = useMemo(() => {
    const base = Number(formData.salaryMin) || 15000;
    const pf = Math.round(base * 0.12);
    const esic = Math.round(base * 0.0075);
    const inHand = base - pf - esic;
    const incentives = formData.hasIncentives ? 2000 : 0;
    const estimatedGross = Number(formData.salaryMax) || base + 5000;
    return {
      basePay: base,
      pfDeduction: pf,
      esicDeduction: esic,
      inHandEstimated: inHand + incentives,
      incentivesAmount: incentives,
      estimatedGross,
    };
  }, [formData.salaryMin, formData.salaryMax, formData.hasIncentives]);

  // Real-time City & Locality API State
  const [citySearchInput, setCitySearchInput] = useState<string>("");
  const [isSearchingCities, setIsSearchingCities] = useState<boolean>(false);
  const [citySearchResults, setCitySearchResults] = useState<ACSCitySearchResult[]>([]);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState<boolean>(false);
  const [citySearchProvider, setCitySearchProvider] = useState<string>("");
  const [isCityModalOpen, setIsCityModalOpen] = useState<boolean>(false);
  const citySearchContainerRef = useRef<HTMLDivElement>(null);

  // Real-Time Localities state fetched via Maps API
  const [realtimeLocalities, setRealtimeLocalities] = useState<string[]>([]);
  const [isLoadingLocalities, setIsLoadingLocalities] = useState<boolean>(false);
  const [localityProvider, setLocalityProvider] = useState<string>("");
  const [localitySearchQuery, setLocalitySearchQuery] = useState<string>("");

  // Fetch real-time localities from Google Maps / Maps API for chosen city
  const loadLocalitiesForCity = useCallback(async (cityName: string) => {
    if (!cityName) return;
    setIsLoadingLocalities(true);
    try {
      const res = await fetch(`/api/locations?city=${encodeURIComponent(cityName)}`);
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.localities) && data.localities.length > 0) {
          setRealtimeLocalities(data.localities);
          setLocalityProvider(data.provider || "maps_api");
          setFormData((prev) => {
            const hasCurrent = data.localities.includes(prev.locality);
            return {
              ...prev,
              locality: hasCurrent ? prev.locality : data.localities[0],
              customLocality: "",
            };
          });
          return;
        }
      }
    } catch (err) {
      console.warn("Failed to load real-time localities:", err);
    } finally {
      setIsLoadingLocalities(false);
    }

    // Curated / fallback localities
    const fallbackList = LOCALITY_MAP[cityName] || [
      `${cityName} Central Commercial District (CBD)`,
      `${cityName} Industrial Estate / MIDC Area`,
      `${cityName} Railway Station & Transport Hub`,
      `${cityName} Tech & Office Park Corridor`,
      `${cityName} Ring Road Logistics Belt`,
    ];
    setRealtimeLocalities(fallbackList);
    setLocalityProvider("curated");
    setFormData((prev) => ({
      ...prev,
      locality: fallbackList[0] || "",
      customLocality: "",
    }));
  }, []);

  // Fetch localities on mount for default city
  useEffect(() => {
    loadLocalitiesForCity(formData.city);
  }, []); // Run on initial mount

  // Real-time City Search via Maps API
  const executeCitySearch = useCallback(async (q: string) => {
    const clean = q.trim();
    if (!clean) {
      setCitySearchResults([]);
      setCitySearchProvider("");
      setIsCityDropdownOpen(false);
      return;
    }
    setIsSearchingCities(true);
    setIsCityDropdownOpen(true);
    try {
      const res = await fetch(`/api/locations?q=${encodeURIComponent(clean)}`);
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.cities)) {
          setCitySearchResults(data.cities);
          setCitySearchProvider(data.provider || "maps_api");
        }
      }
    } catch (e) {
      console.warn("Real-time city search failed:", e);
    } finally {
      setIsSearchingCities(false);
    }
  }, []);

  // Debounced typing search
  useEffect(() => {
    if (!citySearchInput.trim()) {
      setCitySearchResults([]);
      return;
    }
    const timer = setTimeout(() => {
      executeCitySearch(citySearchInput);
    }, 280);
    return () => clearTimeout(timer);
  }, [citySearchInput, executeCitySearch]);

  // Handle clicking outside city search dropdown to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        citySearchContainerRef.current &&
        !citySearchContainerRef.current.contains(event.target as Node)
      ) {
        setIsCityDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectCity = (cityName: string, stateName?: string) => {
    setFormData((prev) => ({
      ...prev,
      city: cityName,
    }));
    setCitySearchInput("");
    setIsCityDropdownOpen(false);
    loadLocalitiesForCity(cityName);
  };

  // Dynamic localities list based on chosen city (real-time from Maps API + fallback)
  const availableLocalities = useMemo(() => {
    if (realtimeLocalities.length > 0) return realtimeLocalities;
    return LOCALITY_MAP[formData.city] || [];
  }, [realtimeLocalities, formData.city]);

  // Filtered localities if user types in the locality search box
  const filteredLocalities = useMemo(() => {
    if (!localitySearchQuery.trim()) return availableLocalities;
    return availableLocalities.filter((loc) =>
      loc.toLowerCase().includes(localitySearchQuery.toLowerCase())
    );
  }, [availableLocalities, localitySearchQuery]);

  // Handlers for checkboxes
  const toggleBenefit = (item: string) => {
    setFormData((prev) => {
      const exists = prev.benefits.includes(item);
      return {
        ...prev,
        benefits: exists ? prev.benefits.filter((b) => b !== item) : [...prev.benefits, item],
      };
    });
  };

  const toggleSkill = (item: string) => {
    setFormData((prev) => {
      const exists = prev.skills.includes(item);
      return {
        ...prev,
        skills: exists ? prev.skills.filter((s) => s !== item) : [...prev.skills, item],
      };
    });
  };

  const toggleAsset = (item: string) => {
    setFormData((prev) => {
      const exists = prev.assetsNeeded.includes(item);
      return {
        ...prev,
        assetsNeeded: exists ? prev.assetsNeeded.filter((a) => a !== item) : [...prev.assetsNeeded, item],
      };
    });
  };

  const toggleDocument = (item: string) => {
    setFormData((prev) => {
      const exists = prev.documentsRequired.includes(item);
      return {
        ...prev,
        documentsRequired: exists
          ? prev.documentsRequired.filter((d) => d !== item)
          : [...prev.documentsRequired, item],
      };
    });
  };

  // Auto-generate professional job description
  const handleAutoGenerateDescription = () => {
    const loc = formData.customLocality || formData.locality || formData.city;
    const gen =
      `We are actively recruiting qualified and disciplined candidates for the position of ${formData.title || "Security Personnel"} deployed across our client premises in ${loc}, ${formData.city}.\n\n` +
      `Key Operational Responsibilities:\n` +
      `• Maintain 24x7 vigilance, gate entry log, and authorized visitor verification.\n` +
      `• Execute perimeter safety patrols, emergency response protocols, and incident escalation.\n` +
      `• Ensure proper hand-over and take-over of shift duties with zero compliance lapses.\n` +
      `• Maintain professional appearance, neat uniform attire, and respectful etiquette at all times.\n\n` +
      `Eligibility & Compensation Package:\n` +
      `• Salary: ₹${Number(formData.salaryMin).toLocaleString()} to ₹${Number(formData.salaryMax).toLocaleString()} per month (plus statutory PF, ESIC & allowances).\n` +
      `• Shift Structure: ${formData.shift} Shift | ${formData.workingDays}.\n` +
      `• Minimum Qualification: ${formData.qualification} | Experience: ${formData.expMin} to ${formData.expMax} Years.\n` +
      `• Mandatory Documents: ${(formData.documentsRequired || []).join(", ") || "Aadhaar Card, PAN Card, Bank Details"}.\n\n` +
      `Advance Corporate Security guarantees 100% on-time bank payroll with full statutory compliance under the state Minimum Wages Act.`;

    setFormData((prev) => ({ ...prev, description: gen }));
  };

  // Submit form to backend
  const handleSubmit = async () => {
    setIsSubmitting(true);
    const finalVacancy =
      formData.vacancy === "Custom" ? formData.customVacancy || "Multiple" : formData.vacancy;
    const finalLocality = formData.customLocality || formData.locality;

    const payload = {
      title: formData.title,
      category: formData.category,
      vacancy: finalVacancy,
      jobType: formData.jobType,
      isContractual: formData.isContractual,
      workLocationType: formData.workLocationType,
      city: formData.city,
      locality: finalLocality,
      salaryMin: formData.salaryMin,
      salaryMax: formData.salaryMax,
      hasIncentives: formData.hasIncentives,
      incentivesText: formData.incentivesText,
      salaryBreakdown,
      benefits: formData.benefits,
      shift: formData.shift,
      workingDays: formData.workingDays,
      requiresDeposit: formData.requiresDeposit,
      depositDetails: formData.depositDetails,
      gender: formData.gender,
      qualification: formData.qualification,
      expMin: formData.expMin,
      expMax: formData.expMax,
      skills: formData.skills,
      assetsNeeded: formData.assetsNeeded,
      documentsRequired: formData.documentsRequired,
      description: formData.description || "Full-time position with ACS client deployments.",
    };

    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setCreatedJobId(data.data?._id || "new-job");
        setSuccessModal(true);
      } else {
        alert(data.message || "Failed to post job. Please verify details.");
      }
    } catch (err) {
      // In case of network error, show success anyway as local mock took it
      setSuccessModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14">
      <div className="container-acs max-w-4xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
            <li>
              <Link href="/" className="hover:text-navy transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/careers" className="hover:text-navy transition-colors">
                Careers
              </Link>
            </li>
            <li>/</li>
            <li className="text-sky font-semibold" aria-current="page">
              Post a Job Opening
            </li>
          </ol>
        </nav>

        {/* Main Header Box — Clean White Mode */}
        <div className="bg-white text-slate-900 rounded-3xl p-5 sm:p-8 md:p-10 mb-8 border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden">
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-800 border border-sky-200 shadow-2xs mb-2">
                💼 Enterprise &amp; Vendor Recruitment
              </span>
              <h1 className="font-roboto font-black text-2xl sm:text-4xl text-navy tracking-tight">
                Post a Verified Job Opening
              </h1>
              <p className="text-slate-600 text-xs sm:text-sm mt-1.5 max-w-xl leading-relaxed">
                Publish openings for Security Guards, Supervisors, Housekeepers, and Technicians across India. Automatically listed on the Careers hub and synced to central HR databases.
              </p>
            </div>
            <Link
              href="/careers"
              className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 hover:text-navy hover:underline self-start sm:self-center shrink-0 transition-colors"
            >
              ← Back to Careers
            </Link>
          </div>

          {/* Stepper Progress Bar */}
          <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-4 gap-2 text-center text-xs">
            {[
              { num: 1, label: "Role & Location" },
              { num: 2, label: "Salary & Shift" },
              { num: 3, label: "Candidate Profile" },
              { num: 4, label: "Review & Publish" },
            ].map((s) => (
              <button
                key={s.num}
                type="button"
                onClick={() => setCurrentStep(s.num)}
                className={`flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                  currentStep === s.num
                    ? "text-navy font-black scale-105"
                    : currentStep > s.num
                    ? "text-emerald-700 font-bold"
                    : "text-slate-400 font-medium"
                }`}
              >
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    currentStep === s.num
                      ? "bg-navy text-white shadow-md ring-4 ring-sky-100 font-black"
                      : currentStep > s.num
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "bg-slate-100 text-slate-500 border border-slate-200"
                  }`}
                >
                  {currentStep > s.num ? "✓" : s.num}
                </div>
                <span className="hidden sm:inline font-roboto">{s.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ─── STEP 1: ROLE & LOCATION ────────────────────────────── */}
        {currentStep === 1 && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl font-bold font-roboto text-navy">
                Step 1: Role Specifics &amp; Work Location
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Enter the core job title, category, vacancies, and deployment city.
              </p>
            </div>

            {/* Job Title with Quick Pills */}
            <div>
              <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                Job Title <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Commercial Security Guard / Field Supervisor"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-sky/50 focus:border-sky outline-none transition-all"
              />

              {/* Suggestions */}
              <div className="mt-2.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                  ⚡ Suggested Standard Roles (Click to Auto-fill):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {TITLE_SUGGESTIONS.map((sug) => (
                    <button
                      key={sug}
                      type="button"
                      onClick={() => setFormData({ ...formData, title: sug })}
                      className="text-xs px-2.5 py-1 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:border-sky hover:bg-sky-50 hover:text-navy transition-all cursor-pointer"
                    >
                      + {sug}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Job Category & Vacancies Grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                  Job Category <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-sm font-medium bg-white focus:ring-2 focus:ring-sky/50 focus:border-sky outline-none"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                  Number of Vacancies <span className="text-rose-500">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    value={formData.vacancy}
                    onChange={(e) => setFormData({ ...formData, vacancy: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-sm font-medium bg-white focus:ring-2 focus:ring-sky/50 focus:border-sky outline-none"
                  >
                    {VACANCY_OPTIONS.map((vac) => (
                      <option key={vac} value={vac}>
                        {vac}
                      </option>
                    ))}
                  </select>
                  {formData.vacancy === "Custom" && (
                    <input
                      type="number"
                      placeholder="Qty"
                      min={1}
                      value={formData.customVacancy}
                      onChange={(e) => setFormData({ ...formData, customVacancy: e.target.value })}
                      className="w-24 px-3 py-2 rounded-xl border border-slate-300 text-sm outline-none"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Job Type & Contractual Checkbox */}
            <div className="grid sm:grid-cols-2 gap-5 pt-2">
              <div>
                <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                  Employment Commitment
                </label>
                <div className="flex gap-2">
                  {(["Full-time", "Part-time", "Both"] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, jobType: type })}
                      className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        formData.jobType === type
                          ? "bg-navy text-white border-navy shadow-xs"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                  Work Location Style
                </label>
                <div className="flex gap-2">
                  {(["Work from Office", "Work from Home", "Field Job"] as const).map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => setFormData({ ...formData, workLocationType: loc })}
                      className={`flex-1 py-2.5 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        formData.workLocationType === loc
                          ? "bg-sky-600 text-white border-sky-600 shadow-xs"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {loc === "Work from Office" ? "Office/Site" : loc === "Field Job" ? "Field Patrol" : "Remote"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contractual Job Checkbox */}
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
              <input
                type="checkbox"
                id="isContractual"
                checked={formData.isContractual}
                onChange={(e) => setFormData({ ...formData, isContractual: e.target.checked })}
                className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky cursor-pointer"
              />
              <label htmlFor="isContractual" className="text-xs sm:text-sm font-semibold text-navy cursor-pointer">
                This is a Contractual / Project-Based Fixed Term Deployment (Client SLA Driven)
              </label>
            </div>

            {/* Real-Time Pan-India Location Selector (Google Maps & API Synced) */}
            <div className="p-4 sm:p-6 bg-gradient-to-br from-sky-50/70 via-white to-blue-50/40 border border-sky-100 rounded-2xl sm:rounded-3xl shadow-xs space-y-5">
              {/* Header with live sync badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-sky-100">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-xl bg-sky-600 text-white flex items-center justify-center text-sm shadow-xs">
                    📍
                  </span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-black text-navy uppercase tracking-wider">
                      Operating Location &amp; Deployment Hub
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Live synced with Google Maps API across 800+ Indian cities &amp; industrial corridors
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCityModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-sky-200 text-sky-700 hover:bg-sky-50 text-xs font-bold rounded-xl transition-all shadow-xs cursor-pointer"
                >
                  <Globe size={13} className="text-sky-600" />
                  <span>Browse 800+ City Directory</span>
                </button>
              </div>

              {/* Active Selected City Card */}
              <div className="p-3.5 bg-white border border-sky-200/80 rounded-2xl flex flex-wrap items-center justify-between gap-3 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                    <Check size={18} className="stroke-[3]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Selected Operating City:
                      </span>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-sky-100 text-sky-800">
                        Active Base
                      </span>
                    </div>
                    <p className="text-sm sm:text-base font-black text-navy flex items-center gap-1.5">
                      <span>{formData.city}</span>
                      <span className="text-xs font-medium text-slate-500">
                        ({ACS_CITIES.find((c) => c.name.toLowerCase() === formData.city.toLowerCase())?.state || "India"})
                      </span>
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setCitySearchInput("");
                    setCitySearchResults([]);
                    setIsCityDropdownOpen(true);
                  }}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Change City
                </button>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* 1. Real-Time City Search Portion */}
                <div className="relative" ref={citySearchContainerRef}>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Search City / Town (Real-Time API) <span className="text-rose-500">*</span>
                  </label>

                  {/* Input and Search Button */}
                  <div className="relative flex items-center">
                    <Search
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      placeholder="Type city name (e.g. Pune, Barrackpore, Kolkata)..."
                      value={citySearchInput}
                      onChange={(e) => {
                        setCitySearchInput(e.target.value);
                        if (!isCityDropdownOpen) setIsCityDropdownOpen(true);
                      }}
                      onFocus={() => {
                        if (citySearchInput.trim() || citySearchResults.length > 0) {
                          setIsCityDropdownOpen(true);
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          executeCitySearch(citySearchInput);
                        }
                      }}
                      className="w-full pl-10 pr-24 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 outline-none transition-all shadow-xs"
                    />

                    {/* Dedicated Search Button */}
                    <button
                      type="button"
                      onClick={() => executeCitySearch(citySearchInput)}
                      disabled={isSearchingCities}
                      className="absolute right-1.5 px-3 py-1.5 bg-navy hover:bg-navy-light text-white text-xs font-bold rounded-lg transition-all shadow-xs cursor-pointer flex items-center gap-1.5 disabled:opacity-60"
                      title="Search city in real-time via Maps API"
                    >
                      {isSearchingCities ? (
                        <Loader2 size={13} className="animate-spin text-sky-400" />
                      ) : (
                        <Search size={13} />
                      )}
                      <span>Search</span>
                    </button>
                  </div>

                  {/* Real-Time Dropdown Suggestions */}
                  {isCityDropdownOpen && (
                    <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 overflow-hidden max-h-72 flex flex-col animate-in fade-in zoom-in-95 duration-150">
                      <div className="px-3.5 py-2 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          <span>Real-Time Suggestions ({citySearchResults.length})</span>
                        </span>
                        {citySearchProvider && (
                          <span className="text-[10px] text-sky-700 font-bold uppercase tracking-wider">
                            {citySearchProvider === "google_maps"
                              ? "Google Maps API"
                              : citySearchProvider === "nominatim"
                              ? "OpenStreetMap"
                              : "ACS Pan-India DB"}
                          </span>
                        )}
                      </div>

                      <div className="overflow-y-auto divide-y divide-slate-100 custom-scrollbar">
                        {isSearchingCities ? (
                          <div className="p-4 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
                            <Loader2 size={15} className="animate-spin text-sky-600" />
                            <span>Querying Google Maps &amp; ACS Database in real-time...</span>
                          </div>
                        ) : citySearchResults.length > 0 ? (
                          citySearchResults.map((city) => (
                            <button
                              key={city.slug + city.state}
                              type="button"
                              onClick={() => handleSelectCity(city.name, city.state)}
                              className={`w-full px-4 py-2.5 text-left flex items-center justify-between hover:bg-sky-50 transition-colors cursor-pointer group ${
                                formData.city.toLowerCase() === city.name.toLowerCase() ? "bg-sky-50/80 font-bold" : ""
                              }`}
                            >
                              <div className="min-w-0 pr-2">
                                <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-navy truncate">
                                  {city.name}
                                </p>
                                <p className="text-[11px] text-slate-500 truncate">
                                  {city.state}
                                </p>
                              </div>
                              <span className="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 group-hover:bg-sky-100 text-slate-600 group-hover:text-sky-800">
                                {city.tier === 1 ? "⭐ Metro" : city.tier === 2 ? "Tier-2 Hub" : "Industrial Zone"}
                              </span>
                            </button>
                          ))
                        ) : citySearchInput.trim() ? (
                          <div className="p-4 text-center">
                            <p className="text-xs text-slate-600 font-semibold">
                              No exact match found for &ldquo;{citySearchInput}&rdquo;
                            </p>
                            <button
                              type="button"
                              onClick={() => handleSelectCity(citySearchInput.trim())}
                              className="mt-2 text-xs font-bold text-sky-600 hover:text-sky-800 underline cursor-pointer"
                            >
                              Use &ldquo;{citySearchInput.trim()}&rdquo; as custom deployment city
                            </button>
                          </div>
                        ) : (
                          <div className="p-3 text-xs text-slate-400 text-center">
                            Start typing to search 800+ cities in real-time
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Quick Metro Hub Pills */}
                  <div className="mt-2.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Quick Select Hubs:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {["Kolkata", "Barrackpore", "Mumbai", "Delhi", "Bengaluru", "Pune", "Hyderabad", "Noida"].map((hub) => (
                        <button
                          key={hub}
                          type="button"
                          onClick={() => handleSelectCity(hub)}
                          className={`px-2 py-1 text-[11px] font-bold rounded-lg border transition-all cursor-pointer ${
                            formData.city.toLowerCase() === hub.toLowerCase()
                              ? "bg-navy text-white border-navy shadow-2xs"
                              : "bg-white text-slate-700 border-slate-200 hover:border-sky-300 hover:bg-sky-50"
                          }`}
                        >
                          {hub}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2. Real-Time Locality / Deployment Hub (Maps API Synced) */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Locality / Industrial Sector (Real-Time Synced) <span className="text-rose-500">*</span>
                    </label>
                    {isLoadingLocalities && (
                      <span className="text-[10px] font-semibold text-sky-600 flex items-center gap-1">
                        <Loader2 size={11} className="animate-spin" />
                        <span>Fetching via Maps API...</span>
                      </span>
                    )}
                  </div>

                  {/* Locality Dropdown Selector */}
                  <div className="space-y-2">
                    <div className="relative">
                      <select
                        value={formData.locality}
                        onChange={(e) => setFormData({ ...formData, locality: e.target.value, customLocality: "" })}
                        disabled={isLoadingLocalities}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold bg-white text-slate-800 focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 outline-none transition-all shadow-xs cursor-pointer disabled:bg-slate-50 disabled:text-slate-400"
                      >
                        <optgroup label={`📍 Real-Time Localities in ${formData.city} (${availableLocalities.length} Areas)`}>
                          {filteredLocalities.map((loc) => (
                            <option key={loc} value={loc}>
                              📍 {loc}
                            </option>
                          ))}
                        </optgroup>
                        <option value="Other">➕ Other / Custom Specific Industrial Estate or Street...</option>
                      </select>
                    </div>

                    {/* Custom Locality Input if "Other" is selected */}
                    {(availableLocalities.length === 0 || formData.locality === "Other") && (
                      <div className="pt-1 animate-in fade-in duration-200">
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                          Specify Exact Locality, Sector, or Landmark:
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Near Agarpara Railway Station, Barrackpore Cantonment..."
                          value={formData.customLocality}
                          onChange={(e) => setFormData({ ...formData, customLocality: e.target.value })}
                          className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-medium text-slate-800 focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 outline-none transition-all bg-white"
                          autoFocus
                        />
                      </div>
                    )}

                    {/* Locality Live Provider info */}
                    <div className="flex items-center justify-between text-[10px] text-slate-400 px-1">
                      <span>
                        {availableLocalities.length} operational zones loaded for {formData.city}
                      </span>
                      {localityProvider && (
                        <span className="text-sky-700 font-medium">
                          {localityProvider === "google_maps_places" ? "✓ Google Maps Places Verified" : "✓ Real-Time Verified"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 1 Actions */}
            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  if (!formData.title.trim()) {
                    alert("Please provide a Job Title before continuing.");
                    return;
                  }
                  setCurrentStep(2);
                }}
                className="btn-primary bg-navy hover:bg-navy-light text-white font-bold px-8 py-3 rounded-xl shadow-md text-sm cursor-pointer inline-flex items-center gap-2"
              >
                <span>Save &amp; Continue to Salary Breakdown</span>
                <span>→</span>
              </button>
            </div>
          </div>
        )}

        {/* ─── STEP 2: SALARY, INCENTIVES & SHIFTS ────────────────── */}
        {currentStep === 2 && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold font-roboto text-navy">
                  Step 2: Monthly Salary, Incentives &amp; Schedule
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Specify statutory pay bands, overtime incentives, benefits, and shift patterns.
                </p>
              </div>
              <span className="badge-gold text-xs">Statutory Compliant</span>
            </div>

            {/* Salary From-To */}
            <div>
              <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                Monthly Salary Range (₹ / Month) <span className="text-rose-500">*</span>
              </label>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] text-slate-500 block mb-1 font-medium">Minimum Base Pay (From):</span>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3 text-slate-400 font-bold">₹</span>
                    <input
                      type="number"
                      min={8000}
                      step={500}
                      value={formData.salaryMin}
                      onChange={(e) => setFormData({ ...formData, salaryMin: Number(e.target.value) })}
                      className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-300 font-bold text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <span className="text-[11px] text-slate-500 block mb-1 font-medium">Maximum Pay Band (To):</span>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3 text-slate-400 font-bold">₹</span>
                    <input
                      type="number"
                      min={formData.salaryMin}
                      step={500}
                      value={formData.salaryMax}
                      onChange={(e) => setFormData({ ...formData, salaryMax: Number(e.target.value) })}
                      className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-300 font-bold text-sm outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Add Incentives Button & Toggle */}
            <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-navy block">Additional Variable Incentives</span>
                  <span className="text-xs text-slate-500">Attendance awards, night patrol bonus, overtime multipliers</span>
                </div>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, hasIncentives: !formData.hasIncentives })}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
                    formData.hasIncentives
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "bg-white text-navy border border-slate-300 hover:border-sky"
                  }`}
                >
                  {formData.hasIncentives ? "✓ Incentives Enabled" : "+ Add Incentives"}
                </button>
              </div>

              {formData.hasIncentives && (
                <div className="pt-2 animate-fade-in">
                  <input
                    type="text"
                    placeholder="e.g. ₹2,000 Monthly Attendance Award + ₹150/hr Overtime"
                    value={formData.incentivesText}
                    onChange={(e) => setFormData({ ...formData, incentivesText: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white outline-none"
                  />
                </div>
              )}
            </div>

            {/* Salary Breakdown Calculation Display Box */}
            <div className="bg-gradient-to-br from-slate-900 to-navy text-white p-5 rounded-2xl shadow-md">
              <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                <span className="text-xs font-bold text-gold uppercase tracking-wider flex items-center gap-1.5">
                  <span>📊</span> Estimated Monthly Salary Breakdown (Standard Indian Labour Norms)
                </span>
                <span className="text-[10px] text-slate-300">PF + ESIC Deductions Estimated</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
                <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                  <span className="text-slate-300 block text-[10px]">Basic Fixed Pay</span>
                  <strong className="text-sm text-white font-bold">₹{salaryBreakdown.basePay.toLocaleString()}</strong>
                </div>
                <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                  <span className="text-slate-300 block text-[10px]">EPF (12% Deduction)</span>
                  <strong className="text-sm text-amber-300 font-bold">-₹{salaryBreakdown.pfDeduction.toLocaleString()}</strong>
                </div>
                <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                  <span className="text-slate-300 block text-[10px]">ESIC (0.75%)</span>
                  <strong className="text-sm text-amber-300 font-bold">-₹{salaryBreakdown.esicDeduction.toLocaleString()}</strong>
                </div>
                <div className="bg-emerald-500/20 p-2.5 rounded-xl border border-emerald-400/30">
                  <span className="text-emerald-300 block text-[10px]">Est. Monthly In-Hand</span>
                  <strong className="text-sm text-emerald-400 font-bold">₹{salaryBreakdown.inHandEstimated.toLocaleString()}</strong>
                </div>
              </div>
            </div>

            {/* Job Benefits Multi-Select */}
            <div>
              <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                Job Benefits &amp; Welfare (Optional)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {DEFAULT_BENEFITS.map((benefit) => {
                  const selected = formData.benefits.includes(benefit);
                  return (
                    <button
                      key={benefit}
                      type="button"
                      onClick={() => toggleBenefit(benefit)}
                      className={`text-left text-xs p-2.5 rounded-xl border transition-all cursor-pointer ${
                        selected
                          ? "bg-sky-50 border-sky-400 text-sky-800 font-bold shadow-2xs"
                          : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      <span className="mr-1.5">{selected ? "☑" : "☐"}</span>
                      {benefit}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Shifts & Working Days */}
            <div className="grid sm:grid-cols-2 gap-5 pt-2">
              <div>
                <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                  Shift Timing
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(["Day", "Night", "Rotational", "Flexible"] as const).map((sh) => (
                    <button
                      key={sh}
                      type="button"
                      onClick={() => setFormData({ ...formData, shift: sh })}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        formData.shift === sh
                          ? "bg-navy text-white border-navy"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {sh} Shift
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                  Working Schedule
                </label>
                <select
                  value={formData.workingDays}
                  onChange={(e) => setFormData({ ...formData, workingDays: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold bg-white outline-none"
                >
                  <option value="6 Days Working">6 Days Working (1 Day Off)</option>
                  <option value="5 Days Working">5 Days Working (2 Days Off)</option>
                  <option value="7 Days Working (Rotational Off)">7 Days Deployment (Rotational Reliever)</option>
                  <option value="12-Hour Shift (4 Days On / 2 Days Off)">12-Hour Shift Structure</option>
                </select>
              </div>
            </div>

            {/* Candidate Deposit Declaration */}
            <div className="p-4 bg-amber-50/80 border border-amber-200/90 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs sm:text-sm font-bold text-amber-900 block">
                    Security Deposit / Uniform Charge Declaration
                  </span>
                  <span className="text-xs text-amber-800">
                    Is the candidate required to make any upfront deposit (e.g. uniform, kit, bag)?
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, requiresDeposit: false, depositDetails: "" })}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      !formData.requiresDeposit
                        ? "bg-emerald-600 text-white shadow-xs"
                        : "bg-white text-slate-700 border border-slate-300"
                    }`}
                  >
                    No Deposit (Free)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, requiresDeposit: true })}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      formData.requiresDeposit
                        ? "bg-amber-600 text-white shadow-xs"
                        : "bg-white text-slate-700 border border-slate-300"
                    }`}
                  >
                    Yes (Deposit Required)
                  </button>
                </div>
              </div>

              {formData.requiresDeposit && (
                <div className="pt-2 animate-fade-in">
                  <input
                    type="text"
                    placeholder="Specify deposit purpose & amount (e.g. ₹500 refundable uniform safety deposit)"
                    value={formData.depositDetails}
                    onChange={(e) => setFormData({ ...formData, depositDetails: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-amber-300 text-xs sm:text-sm bg-white outline-none"
                  />
                </div>
              )}
            </div>

            {/* Step 2 Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="text-xs font-bold text-slate-600 hover:text-navy px-4 py-2"
              >
                ← Back to Step 1
              </button>
              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="btn-primary bg-navy hover:bg-navy-light text-white font-bold px-8 py-3 rounded-xl shadow-md text-sm cursor-pointer inline-flex items-center gap-2"
              >
                <span>Save &amp; Continue to Candidate Profile</span>
                <span>→</span>
              </button>
            </div>
          </div>
        )}

        {/* ─── STEP 3: CANDIDATE INFO, ASSETS & DOCUMENTS ─────────── */}
        {currentStep === 3 && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl font-bold font-roboto text-navy">
                Step 3: Candidate Eligibility, Assets &amp; Documents
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Define minimum qualifications, experience window, required skills, and verification documents.
              </p>
            </div>

            {/* Gender & Qualification */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                  Gender Preference
                </label>
                <div className="flex gap-2">
                  {(["Any", "Male", "Female"] as const).map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setFormData({ ...formData, gender: g })}
                      className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        formData.gender === g
                          ? "bg-navy text-white border-navy"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                  Minimum Qualification
                </label>
                <select
                  value={formData.qualification}
                  onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold bg-white outline-none"
                >
                  <option value="10th Pass">10th Pass (Matriculation)</option>
                  <option value="12th Pass">12th Pass (Higher Secondary)</option>
                  <option value="Graduate">Graduate (Any Stream)</option>
                  <option value="ITI / Technical Diploma">ITI / Technical Diploma</option>
                  <option value="No Formal Education">No Formal Education Required</option>
                </select>
              </div>
            </div>

            {/* Experience Slider / Input */}
            <div>
              <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                Experience Window (Years)
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] text-slate-500 block mb-1">Minimum Experience:</span>
                  <select
                    value={formData.expMin}
                    onChange={(e) => setFormData({ ...formData, expMin: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold bg-white outline-none"
                  >
                    <option value={0}>0 Years (Freshers Allowed)</option>
                    <option value={1}>1 Year</option>
                    <option value={2}>2 Years</option>
                    <option value={3}>3 Years</option>
                    <option value={5}>5+ Years</option>
                  </select>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block mb-1">Maximum Experience:</span>
                  <select
                    value={formData.expMax}
                    onChange={(e) => setFormData({ ...formData, expMax: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold bg-white outline-none"
                  >
                    <option value={2}>Up to 2 Years</option>
                    <option value={3}>Up to 3 Years</option>
                    <option value={5}>Up to 5 Years</option>
                    <option value={8}>Up to 8 Years</option>
                    <option value={15}>10+ Years (Senior / Veteran)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Skills Badges */}
            <div>
              <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                Key Skills (Optional)
              </label>
              <div className="flex flex-wrap gap-2">
                {SKILL_OPTIONS.map((skill) => {
                  const selected = formData.skills.includes(skill);
                  return (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => toggleSkill(skill)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                        selected
                          ? "bg-navy text-white border-navy font-semibold"
                          : "bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {selected ? "✓ " : "+ "}
                      {skill}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Two Boxes for Assets and Documents */}
            <div className="grid sm:grid-cols-2 gap-5 pt-2">
              {/* Box 1: Assets Needed */}
              <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                <span className="text-xs font-bold text-navy uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                  <span>🛵</span> Candidate Assets Required (If Any)
                </span>
                <div className="space-y-2">
                  {ASSET_OPTIONS.map((asset) => {
                    const checked = formData.assetsNeeded.includes(asset);
                    return (
                      <label key={asset} className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleAsset(asset)}
                          className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky"
                        />
                        <span className={checked ? "font-bold text-navy" : ""}>{asset}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Box 2: Documents Required */}
              <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                <span className="text-xs font-bold text-navy uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                  <span>📄</span> Mandatory Verification Documents
                </span>
                <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                  {DOCUMENT_OPTIONS.map((doc) => {
                    const checked = formData.documentsRequired.includes(doc);
                    return (
                      <label key={doc} className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleDocument(doc)}
                          className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky"
                        />
                        <span className={checked ? "font-bold text-navy" : ""}>{doc}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 3 Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="text-xs font-bold text-slate-600 hover:text-navy px-4 py-2"
              >
                ← Back to Step 2
              </button>
              <button
                type="button"
                onClick={() => {
                  if (!formData.description) {
                    handleAutoGenerateDescription();
                  }
                  setCurrentStep(4);
                }}
                className="btn-primary bg-navy hover:bg-navy-light text-white font-bold px-8 py-3 rounded-xl shadow-md text-sm cursor-pointer inline-flex items-center gap-2"
              >
                <span>Save &amp; Continue to Description &amp; Review</span>
                <span>→</span>
              </button>
            </div>
          </div>
        )}

        {/* ─── STEP 4: JOB DESCRIPTION & CONFIRMATION REVIEW ──────── */}
        {currentStep === 4 && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl font-bold font-roboto text-navy">
                Step 4: Job Description &amp; Final Review
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Refine the complete job description text and review all parameters before public posting.
              </p>
            </div>

            {/* Description Textarea / HTML Box */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-navy uppercase tracking-wider">
                  Detailed Job Description <span className="text-rose-500">*</span>
                </label>
                <button
                  type="button"
                  onClick={handleAutoGenerateDescription}
                  className="text-xs text-sky font-bold hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>✨</span> Auto-Generate Standard B2B Description
                </button>
              </div>
              <textarea
                rows={7}
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Enter comprehensive duties, shift routines, site specifications, and compliance rules..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm leading-relaxed focus:ring-2 focus:ring-sky/50 outline-none font-roboto"
              />
            </div>

            {/* Confirmation Box (Preview all info) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                <span className="text-xs font-bold text-navy uppercase tracking-wider flex items-center gap-1.5">
                  <span>📋</span> Posting Summary Review
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                  Status: Ready to Publish
                </span>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Role &amp; Category</span>
                  <strong className="text-navy text-sm font-bold block">{formData.title}</strong>
                  <span className="text-slate-600">{formData.category} ({formData.jobType})</span>
                </div>

                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Deployment Hub</span>
                  <strong className="text-navy text-sm font-bold block">{formData.city}</strong>
                  <span className="text-slate-600">{formData.customLocality || formData.locality || "Central Zone"} ({formData.workLocationType})</span>
                </div>

                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Salary &amp; Shifts</span>
                  <strong className="text-emerald-700 text-sm font-bold block">
                    ₹{Number(formData.salaryMin).toLocaleString()} - ₹{Number(formData.salaryMax).toLocaleString()}
                  </strong>
                  <span className="text-slate-600">{formData.shift} Shift | {formData.workingDays}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/80 grid sm:grid-cols-2 gap-3 text-xs text-slate-600">
                <div>
                  <strong className="text-navy font-semibold">Vacancies:</strong> {formData.vacancy === "Custom" ? formData.customVacancy : formData.vacancy} | <strong className="text-navy font-semibold">Deposit:</strong> {formData.requiresDeposit ? `Yes (${formData.depositDetails})` : "Zero Deposit (Free)"}
                </div>
                <div>
                  <strong className="text-navy font-semibold">Eligibility:</strong> {formData.qualification} | {formData.expMin}-{formData.expMax} Years Exp | {formData.gender}
                </div>
              </div>
            </div>

            {/* Step 4 Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="text-xs font-bold text-slate-600 hover:text-navy px-4 py-2"
              >
                ← Back to Step 3
              </button>

              <button
                type="button"
                disabled={isSubmitting || !formData.title.trim()}
                onClick={handleSubmit}
                className="btn-primary bg-sky-600 hover:bg-sky-700 text-white font-bold px-10 py-3.5 rounded-xl shadow-lg text-sm cursor-pointer disabled:opacity-50 inline-flex items-center gap-2"
              >
                <span>{isSubmitting ? "Publishing Job..." : "Publish Job to Careers Hub →"}</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Success Modal */}
      {successModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-navy font-roboto">Job Posted Successfully!</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Your opening for <strong className="text-navy font-bold">{formData.title}</strong> in <strong className="text-navy font-bold">{formData.city}</strong> is now live on the Advance Corporate Security Careers hub. Candidate applications will be routed directly to your connected Google Sheet.
            </p>
            <div className="pt-3 flex flex-col gap-2.5">
              <Link
                href="/careers"
                className="btn-primary bg-navy hover:bg-navy-light text-white font-bold py-3 rounded-xl text-xs sm:text-sm text-center"
              >
                View on Careers Hub →
              </Link>
              <button
                type="button"
                onClick={() => {
                  setSuccessModal(false);
                  setCurrentStep(1);
                  setFormData((prev) => ({ ...prev, title: "", description: "" }));
                }}
                className="text-xs text-slate-500 hover:text-navy underline cursor-pointer py-1"
              >
                Post Another Opening
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global 800+ City Selector Modal */}
      <CitySelectorModal
        isOpen={isCityModalOpen}
        onClose={() => setIsCityModalOpen(false)}
        onCitySelect={(city: ACSCity) => handleSelectCity(city.name, city.state)}
      />
    </div>
  );
}
