// src/lib/gallery.ts
// Single source of truth for ACS Photo Gallery

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: "Security Operations" | "Training & Drills" | "VIP & Events" | "Facility Management" | "Team & Honors";
  description: string;
}

export const GALLERY_CATEGORIES = [
  "All",
  "Security Operations",
  "Training & Drills",
  "VIP & Events",
  "Facility Management",
  "Team & Honors",
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export const ACS_GALLERY: GalleryItem[] = [
  // --- Security Operations ---
  {
    id: "sec-1",
    src: "/images/guarding.jpg",
    title: "Security Guard Deployment",
    category: "Security Operations",
    description: "Trained security personnel stationed at primary corporate access points.",
  },
  {
    id: "sec-2",
    src: "/images/IMG-20220523-WA0003.jpg",
    title: "Industrial Plant Access Control",
    category: "Security Operations",
    description: "Strict visitor logging, boom-barrier inspection, and material gate verification.",
  },
  {
    id: "sec-3",
    src: "/images/IMG-20220523-WA0004.jpg",
    title: "Corporate Campus Night Patrolling",
    category: "Security Operations",
    description: "24/7 continuous guard patrol ensuring zero breach of commercial perimeters.",
  },
  {
    id: "sec-4",
    src: "/images/IMG-20220523-WA0005.jpg",
    title: "Perimeter Security & Watch",
    category: "Security Operations",
    description: "High-vigilance boundary monitoring for manufacturing units and logistics yards.",
  },
  {
    id: "sec-5",
    src: "/images/IMG-20220523-WA0006.jpg",
    title: "Commercial Facility Reception Security",
    category: "Security Operations",
    description: "Professional front-desk security officers screening visitor flow and credentials.",
  },
  {
    id: "sec-6",
    src: "/images/IMG-20220523-WA0007.jpg",
    title: "Logistics Hub Cargo Guarding",
    category: "Security Operations",
    description: "Round-the-clock dock guarding and seal checks for inbound and outbound fleet.",
  },
  {
    id: "sec-7",
    src: "/images/IMG-20220523-WA0008.jpg",
    title: "Factory Premises Security Force",
    category: "Security Operations",
    description: "Dedicated industrial security team protecting heavy machinery and assets.",
  },
  {
    id: "sec-8",
    src: "/images/IMG-20220730-WA0005.jpg",
    title: "Shift Muster & Operational Briefing",
    category: "Security Operations",
    description: "Daily pre-duty parade and site-specific threat briefing conducted by field officers.",
  },
  {
    id: "sec-9",
    src: "/images/IMG-20220730-WA0006.jpg",
    title: "Security Guard Line-Up & Inspection",
    category: "Security Operations",
    description: "Rigorous uniform, grooming, and equipment check before shift handovers.",
  },

  // --- Training & Drills ---
  {
    id: "trn-1",
    src: "/images/training.jpg",
    title: "Fire Safety & Extinguisher Drills",
    category: "Training & Drills",
    description: "Hands-on fire fighting, evacuation protocols, and emergency response simulations.",
  },
  {
    id: "trn-2",
    src: "/images/RTC-10.jpg",
    title: "Recruitment & Training Academy",
    category: "Training & Drills",
    description: "PSARA-mandated formal physical conditioning and classroom instruction academy.",
  },
  {
    id: "trn-3",
    src: "/images/IMG-20220523-WA0009.jpg",
    title: "Disaster Management & Evacuation",
    category: "Training & Drills",
    description: "Live evacuation coordination exercise for multistory corporate buildings.",
  },
  {
    id: "trn-4",
    src: "/images/IMG-20220523-WA0010.jpg",
    title: "First Aid & Medical Emergency Response",
    category: "Training & Drills",
    description: "Certified CPR and first-aid response training conducted by medical instructors.",
  },
  {
    id: "trn-5",
    src: "/images/IMG-20220523-WA0011.jpg",
    title: "Physical Conditioning & Agility Drills",
    category: "Training & Drills",
    description: "Daily physical fitness standards maintained across all guard batches.",
  },
  {
    id: "trn-6",
    src: "/images/IMG-20220730-WA0007.jpg",
    title: "Parade & Discipline Practice",
    category: "Training & Drills",
    description: "Military-grade drill practice instilling alert posture, discipline, and quick reaction.",
  },
  {
    id: "trn-7",
    src: "/images/IMG-20220730-WA0008.jpg",
    title: "Wireless Comms & Radio Protocol",
    category: "Training & Drills",
    description: "Standard operating codes for walkie-talkie and central control room dispatch.",
  },

  // --- VIP & Events ---
  {
    id: "vip-1",
    src: "/images/specialevent.jpg",
    title: "High-Profile Event Bandobast",
    category: "VIP & Events",
    description: "Special event crowd management, metal detector screening, and perimeter lockdown.",
  },
  {
    id: "vip-2",
    src: "/images/executionprotection.jpg",
    title: "Executive Protection & Bodyguards",
    category: "VIP & Events",
    description: "Armed and unarmed close protection officers for dignitaries and corporate executives.",
  },
  {
    id: "vip-3",
    src: "/images/investigation.jpg",
    title: "Corporate Surveillance & Vigilance",
    category: "VIP & Events",
    description: "Discreet investigation, fraud prevention, and asset tracing security team.",
  },
  {
    id: "vip-4",
    src: "/images/IMG-20220523-WA0012.jpg",
    title: "Exhibition & Trade Fair Security",
    category: "VIP & Events",
    description: "Large-scale public exhibition security and entry ticket validation management.",
  },
  {
    id: "vip-5",
    src: "/images/IMG-20220523-WA0013.jpg",
    title: "Corporate Conclave Security",
    category: "VIP & Events",
    description: "Security and ushering management for annual corporate shareholder summits.",
  },
  {
    id: "vip-6",
    src: "/images/IMG-20220523-WA0014.jpg",
    title: "Stadium & Arena Security Squad",
    category: "VIP & Events",
    description: "Crowd segregation, gate management, and rapid intervention during major events.",
  },

  // --- Facility Management ---
  {
    id: "fac-1",
    src: "/images/facility-management-image.jpg",
    title: "Corporate Facility Management",
    category: "Facility Management",
    description: "Complete commercial housekeeping and mechanized maintenance operations.",
  },
  {
    id: "fac-2",
    src: "/images/horticulture.jpg",
    title: "Horticulture & Green Campus Care",
    category: "Facility Management",
    description: "Professional landscape maintenance, lawn grooming, and garden beautification.",
  },
  {
    id: "fac-3",
    src: "/images/IMG-20220523-WA0015.jpg",
    title: "Mechanized Floor Scrubbing",
    category: "Facility Management",
    description: "Heavy-duty ride-on scrubbing and sanitization for airport and mall terminals.",
  },
  {
    id: "fac-4",
    src: "/images/IMG-20220523-WA0016.jpg",
    title: "Commercial Waste & Sanitation",
    category: "Facility Management",
    description: "Strict eco-compliant waste sorting and sanitization across IT parks.",
  },
  {
    id: "fac-5",
    src: "/images/IMG-20220523-WA0017.jpg",
    title: "Healthcare Hygiene Support",
    category: "Facility Management",
    description: "Hospital-grade sterile housekeeping and infection prevention management.",
  },
  {
    id: "fac-6",
    src: "/images/IMG-20220523-WA0018.jpg",
    title: "Warehouse Facility Upkeep",
    category: "Facility Management",
    description: "Dust-free maintenance and high-bay cleaning for mega distribution centers.",
  },

  // --- Team & Honors ---
  {
    id: "team-1",
    src: "/images/team.jpg",
    title: "ACS Field Operations & Officer Corps",
    category: "Team & Honors",
    description: "Experienced operational commanders, area managers, and supervisory officers.",
  },
  {
    id: "team-2",
    src: "/images/licenses.jpg",
    title: "Government Licenses & Accreditations",
    category: "Team & Honors",
    description: "Official PSARA licenses, ISO 9001:2015 certifications, and central statutory permits.",
  },
  {
    id: "team-3",
    src: "/images/IMG-20220523-WA0019.jpg",
    title: "Annual Security Excellence Awards",
    category: "Team & Honors",
    description: "Honoring exemplary courage, alertness, and integrity in the line of duty.",
  },
  {
    id: "team-4",
    src: "/images/IMG-20220523-WA0020.jpg",
    title: "Senior Management Site Inspection",
    category: "Team & Honors",
    description: "Leadership teams conducting surprise night audits across key client deployments.",
  },
  {
    id: "team-5",
    src: "/images/IMG-20220523-WA0021.jpg",
    title: "Client Commendation Ceremony",
    category: "Team & Honors",
    description: "Certificates of appreciation presented by defence and public sector clients.",
  },
];
