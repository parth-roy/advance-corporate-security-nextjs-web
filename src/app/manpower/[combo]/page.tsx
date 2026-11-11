import { notFound, permanentRedirect } from "next/navigation";
import { ACS_SERVICES, getServiceBySlug } from "@/lib/services";
import { getCityBySlug } from "@/lib/cities";

export const dynamicParams = true;

/**
 * High-intent vernacular and B2B procurement shorthand aliases mapped to
 * canonical ACS_SERVICES slugs so incoming `/manpower/[service]-in-[city]`
 * links consolidate permanently into `/services/[service]/[city]` without
 * creating duplicate indexable pages.
 */
const SERVICE_SLUG_ALIASES: Record<string, string> = {
  // Warehouse & Material Handling
  "loading-unloading": "loading-unloading-labour",
  "loading-unloading-labour-contractor": "loading-unloading-labour",
  "hamali": "loading-unloading-labour",
  "hamali-contractor": "loading-unloading-labour",
  "warehouse-loading": "loading-unloading-labour",
  "material-handling": "loading-unloading-labour",
  "godown-labour": "loading-unloading-labour",
  "mutia-labour": "loading-unloading-labour",
  "warehouse-helpers": "warehouse-manpower-supply",
  "warehouse-staff": "warehouse-manpower-supply",
  "warehouse-manpower": "warehouse-manpower-supply",
  "packers-and-pickers": "warehouse-manpower-supply",

  // Factory, Karkhana & General Bulk Manpower
  "manpower-supply": "manpower-outsourcing",
  "labour-contractor": "industrial-factory-workers",
  "bulk-manpower": "manpower-outsourcing",
  "bulk-labour-supply": "industrial-factory-workers",
  "factory-helpers": "industrial-factory-workers",
  "factory-labour": "industrial-factory-workers",
  "factory-workers": "industrial-factory-workers",
  "karkhana-labour": "industrial-factory-workers",
  "mazdoor-contractor": "industrial-factory-workers",
  "third-party-payroll": "payroll-management",
  "contract-staffing": "manpower-outsourcing",

  // MEP & Technical Trades
  "electricians": "industrial-electrician-contractors",
  "industrial-electrician": "industrial-electrician-contractors",
  "electrical-contractor": "industrial-electrician-contractors",
  "dg-operator": "industrial-electrician-contractors",
  "plumbers": "commercial-plumbing-contractors",
  "commercial-plumber": "commercial-plumbing-contractors",
  "industrial-plumber": "commercial-plumbing-contractors",
  "stp-wtp-operator": "commercial-plumbing-contractors",
  "hvac": "hvac-ac-maintenance-staffing",
  "hvac-technician": "hvac-ac-maintenance-staffing",
  "ac-repair": "hvac-ac-maintenance-staffing",
  "ac-technician": "hvac-ac-maintenance-staffing",
  "chiller-technician": "hvac-ac-maintenance-staffing",
  "cold-storage-technician": "hvac-ac-maintenance-staffing",

  // Carpentry, Painting, Office Support & Commercial Shifting
  "carpenter": "carpentry-painting-civil-labour",
  "carpenters": "carpentry-painting-civil-labour",
  "painter": "carpentry-painting-civil-labour",
  "painters": "carpentry-painting-civil-labour",
  "civil-labour": "carpentry-painting-civil-labour",
  "epoxy-flooring-labour": "carpentry-painting-civil-labour",
  "office-boys": "office-support-peon-pantry-staff",
  "office-boy": "office-support-peon-pantry-staff",
  "peon": "office-support-peon-pantry-staff",
  "pantry-boy": "office-support-peon-pantry-staff",
  "office-support": "office-support-peon-pantry-staff",
  "shifting": "commercial-shifting-relocation-labour",
  "relocation": "commercial-shifting-relocation-labour",
  "machinery-shifting": "commercial-shifting-relocation-labour",
  "factory-shifting": "commercial-shifting-relocation-labour",
  "commercial-shifting": "commercial-shifting-relocation-labour",

  // Security & Facility Aliases
  "security-guards": "security-guard",
  "psara-guards": "security-guard",
  "guards": "security-guard",
  "armed-guards": "armed-guard",
  "gunman": "armed-guard",
  "cleaning": "housekeeping",
  "facility-management": "housekeeping",
  "mep": "mep-maintenance",
};

const CITY_SLUG_ALIASES: Record<string, string> = {
  calcutta: "kolkata",
  haora: "howrah",
  berhampore: "baharampur",
  barrackpur: "barrackpore",
  darjiling: "darjeeling",
  khardah: "khardaha",
  dumdum: "dum-dum",
  "salt-lake-sector-v": "salt-lake",
  "sector-v": "salt-lake",
  "new-town-rajarhat": "new-town",
  "rajarhat-new-town": "new-town",
  "bardhaman-town": "burdwan",
};

function resolveServiceSlug(rawService: string): string | null {
  const exact = getServiceBySlug(rawService);
  if (exact) return exact.slug;

  const aliased = SERVICE_SLUG_ALIASES[rawService];
  if (aliased && getServiceBySlug(aliased)) {
    return aliased;
  }

  return null;
}

function resolveCitySlug(rawCity: string): string | null {
  const normalized = CITY_SLUG_ALIASES[rawCity] ?? rawCity;
  const city = getCityBySlug(normalized);
  return city ? city.slug : null;
}

function parseCombo(combo: string): { serviceSlug: string; citySlug: string | null } | null {
  const normalized = combo.toLowerCase().trim();
  if (!normalized) return null;

  // 1. Direct service-only path (e.g., `/manpower/loading-unloading-labour`)
  const directService = resolveServiceSlug(normalized);
  if (directService) {
    return { serviceSlug: directService, citySlug: null };
  }

  // 2. Try all `-in-` boundary split points (longest prefix candidate first)
  //    so both `[service-slug]-in-[city-slug]` and multi-hyphen aliases work cleanly.
  const allKnownServiceKeys = Array.from(
    new Set([
      ...ACS_SERVICES.map((s) => s.slug),
      ...Object.keys(SERVICE_SLUG_ALIASES),
    ])
  ).sort((a, b) => b.length - a.length);

  for (const key of allKnownServiceKeys) {
    const marker = `${key}-in-`;
    if (normalized.startsWith(marker)) {
      const rawCity = normalized.slice(marker.length);
      const serviceSlug = resolveServiceSlug(key);
      const citySlug = resolveCitySlug(rawCity);
      if (serviceSlug && citySlug) {
        return { serviceSlug, citySlug };
      }
    }
  }

  return null;
}

export function generateStaticParams() {
  return [];
}

export default async function ManpowerComboRedirectPage({
  params,
}: {
  params: Promise<{ combo: string }>;
}) {
  const { combo } = await params;
  const parsed = parseCombo(combo);

  if (!parsed) {
    notFound();
  }

  if (parsed.citySlug) {
    permanentRedirect(`/services/${parsed.serviceSlug}/${parsed.citySlug}`);
  }

  permanentRedirect(`/services/${parsed.serviceSlug}`);
}
