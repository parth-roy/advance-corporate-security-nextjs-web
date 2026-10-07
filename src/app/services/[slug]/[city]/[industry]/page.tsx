// ============================================================
// ACS — Service × City × Industry 3-Tier/4-Tier PSEO Page
// Hyper-Local West Bengal B2B Enterprise & Institutional Matrix
// Integrates 8 Thick Content Modules, FAQ Schema & Localized SLAs
// ============================================================

import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { siteConfig } from '@/lib/config';
import { ACS_SERVICES, getServiceBySlug } from '@/lib/services';
import { ACS_CITIES } from '@/lib/cities';
import { ACS_INDUSTRIES, getIndustryBySlug } from '@/lib/industries';
import { getWBLocationProfile } from '@/lib/data/wb-zone-dictionary';
import { getIndustryRiskProfile } from '@/lib/data/industry-painpoints';
import { getServiceBlueprint } from '@/lib/data/service-blueprints';
import { BuyerIntentType, generatePageMetadata } from '@/lib/data/buyer-intents';
import { getWBHubsForCity } from '@/lib/wb-industrial-hubs';

// Common search & industry aliases mapped to canonical database slugs
const INDUSTRY_ALIASES: Record<string, string> = {
  // Manufacturing & Industrial
  manufacturing: 'industrial-zones',
  factories: 'industrial-zones',
  factory: 'industrial-zones',
  industrial: 'industrial-zones',
  industry: 'industrial-zones',
  'heavy-industry': 'industrial-zones',
  'steel-plants': 'industrial-zones',
  petrochemicals: 'industrial-zones',
  chemical: 'industrial-zones',
  textile: 'industrial-zones',

  // Corporate & IT Parks
  'it-parks': 'corporate',
  'it-park': 'corporate',
  'tech-parks': 'corporate',
  'tech-park': 'corporate',
  offices: 'corporate',
  office: 'corporate',
  'it-companies': 'corporate',
  commercial: 'corporate',
  bpo: 'corporate',
  software: 'corporate',

  // Warehouses & Logistics
  logistics: 'warehouses',
  'supply-chain': 'warehouses',
  'cold-storage': 'warehouses',
  godown: 'warehouses',
  godowns: 'warehouses',
  fulfillment: 'warehouses',

  // Healthcare
  healthcare: 'hospitals',
  clinics: 'hospitals',
  clinic: 'hospitals',
  'nursing-homes': 'hospitals',
  medical: 'hospitals',

  // Hospitality
  hospitality: 'hotels',
  resorts: 'hotels',
  resort: 'hotels',
  banquets: 'hotels',
  restaurants: 'hotels',

  // Residential
  apartments: 'residential',
  'housing-societies': 'residential',
  societies: 'residential',
  'gated-communities': 'residential',
  townships: 'residential',
  condos: 'residential',

  // Retail & Commercial Malls
  'shopping-malls': 'malls',
  retail: 'malls',
  supermarkets: 'malls',
  showrooms: 'malls',

  // Educational Institutions
  schools: 'educational-institutions',
  colleges: 'educational-institutions',
  universities: 'educational-institutions',
  campus: 'educational-institutions',
  education: 'educational-institutions',

  // Infrastructure & Construction
  builders: 'construction',
  'real-estate': 'construction',
  infrastructure: 'construction',
  contractors: 'construction',
};

const SERVICE_ALIASES: Record<string, string> = {
  'facility-management': 'housekeeping',
  'security-safety': 'security-guard',
  security: 'security-guard',
  guards: 'security-guard',
  guard: 'security-guard',
  manpower: 'manpower-outsourcing',
  staffing: 'manpower-outsourcing',
  placement: 'placement-services',
  cctv: 'surveillance-cctv',
  cleaning: 'housekeeping',
  housekeeper: 'housekeeping',
};

const CITY_ALIASES: Record<string, string> = {
  calcutta: 'kolkata',
  haora: 'howrah',
};

// Modular Components
import HeroIntentSection from '@/components/matrix/HeroIntentSection';
import LocalRiskProfile from '@/components/matrix/LocalRiskProfile';
import StatutoryComplianceEngine from '@/components/matrix/StatutoryComplianceEngine';
import ServiceBlueprintSOP from '@/components/matrix/ServiceBlueprintSOP';
import DeploymentSLASection from '@/components/matrix/DeploymentSLASection';
import LocalCaseEvidence from '@/components/matrix/LocalCaseEvidence';
import InteractiveComplianceWidget from '@/components/matrix/InteractiveComplianceWidget';
import HyperLocalFAQ from '@/components/matrix/HyperLocalFAQ';
import ClientMarquee from '@/components/common/ClientMarquee';

interface Params {
  slug: string;
  city: string;
  industry: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  // Pre-render West Bengal major industrial and commercial hubs at build time
  const priorityCities = [
    'kolkata',
    'howrah',
    'durgapur',
    'asansol',
    'siliguri',
    'haldia',
    'salt-lake',
    'new-town',
    'barrackpore',
  ];

  const params: Params[] = [];
  for (const city of priorityCities) {
    for (const service of ACS_SERVICES) {
      for (const industry of ACS_INDUSTRIES) {
        params.push({
          slug: service.slug,
          city,
          industry: industry.slug,
        });
      }
    }
  }
  return params;
}

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug, city: citySlug, industry: industrySlug } = await params;

  const resolvedSlug = SERVICE_ALIASES[slug] || slug;
  const resolvedCity = CITY_ALIASES[citySlug] || citySlug;
  const resolvedIndustry = INDUSTRY_ALIASES[industrySlug] || industrySlug;

  const service = getServiceBySlug(resolvedSlug);
  const cityObj = ACS_CITIES.find((c) => c.slug === resolvedCity);
  const industry = getIndustryBySlug(resolvedIndustry);

  if (!service || !cityObj || !industry) return {};

  const wbProfile = getWBLocationProfile(resolvedCity);
  const districtName = wbProfile ? wbProfile.district : cityObj.state;
  const wageZone = wbProfile ? wbProfile.wageZone : 'A';

  const meta = generatePageMetadata({
    serviceName: service.name,
    cityName: cityObj.name,
    districtName,
    industryName: industry.name,
    wageZone,
    intent: 'transactional',
  });

  const pageUrl = `${siteConfig.url}/services/${resolvedSlug}/${resolvedCity}/${resolvedIndustry}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: pageUrl,
      siteName: siteConfig.name,
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function ServiceCityIndustryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug, city: citySlug, industry: industrySlug } = await params;

  const resolvedSlug = SERVICE_ALIASES[slug] || slug;
  const resolvedCity = CITY_ALIASES[citySlug] || citySlug;
  const resolvedIndustry = INDUSTRY_ALIASES[industrySlug] || industrySlug;

  // Seamless 301 / redirect from aliases (e.g. /manufacturing -> /industrial-zones, /it-parks -> /corporate)
  if (resolvedSlug !== slug || resolvedCity !== citySlug || resolvedIndustry !== industrySlug) {
    redirect(`/services/${resolvedSlug}/${resolvedCity}/${resolvedIndustry}`);
  }

  const service = getServiceBySlug(resolvedSlug);
  const cityObj = ACS_CITIES.find((c) => c.slug === resolvedCity);
  const industry = getIndustryBySlug(resolvedIndustry);

  if (!service || !cityObj || !industry) {
    notFound();
  }

  // West Bengal localized data resolution
  const wbProfile = getWBLocationProfile(resolvedCity);
  const districtName = wbProfile ? wbProfile.district : cityObj.state;
  const wageZone = wbProfile ? wbProfile.wageZone : 'A';
  const nearestHQ = wbProfile
    ? wbProfile.nearestCommandHQ
    : 'Barrackpore Corporate HQ (North 24 Parganas)';
  const slaHours = wbProfile ? wbProfile.deploymentSlaHours : 4;
  const policeJurisdiction = wbProfile
    ? wbProfile.policeJurisdiction
    : 'District Police Administration';
  const labourOffice = wbProfile
    ? wbProfile.labourDepartmentOffice
    : 'Deputy Labour Commissioner Office';
  const labourWelfareRule = wbProfile
    ? wbProfile.labourWelfareFundRule
    : 'West Bengal Labour Welfare Fund (Employee ₹3 / Employer ₹30)';

  const industryProfile = getIndustryRiskProfile(resolvedIndustry);
  const serviceBlueprint = getServiceBlueprint(resolvedSlug);

  const rawHubs = getWBHubsForCity(resolvedCity);
  const nearbyHubs = rawHubs.map((h) => `${h.name} (${h.type})`);

  const intentId: BuyerIntentType = 'transactional';
  const meta = generatePageMetadata({
    serviceName: service.name,
    cityName: cityObj.name,
    districtName,
    industryName: industry.name,
    wageZone,
    intent: intentId,
  });

  // Breadcrumbs schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: `${siteConfig.url}/services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.name,
        item: `${siteConfig.url}/services/${slug}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: `${service.name} in ${cityObj.name}`,
        item: `${siteConfig.url}/services/${slug}/${citySlug}`,
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: industry.name,
        item: `${siteConfig.url}/services/${slug}/${citySlug}/${industrySlug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Module 1: The Intent-Optimized Hero Section */}
      <HeroIntentSection
        serviceName={service.name}
        serviceSlug={slug}
        cityName={cityObj.name}
        citySlug={citySlug}
        districtName={districtName}
        industryName={industry.name}
        industrySlug={industrySlug}
        wageZone={wageZone}
        nearestHQ={nearestHQ}
        slaHours={slaHours}
        intentId={intentId}
        h1={meta.h1}
        nearbyHubs={nearbyHubs}
      />

      {/* Module 2: Local Industrial Risk Profile */}
      {industryProfile && (
        <LocalRiskProfile
          cityName={cityObj.name}
          districtName={districtName}
          industryName={industry.name}
          wbRiskContext={industryProfile.wbRiskContext}
          criticalLiabilities={industryProfile.criticalLiabilities}
          statutoryRegulations={industryProfile.statutoryRegulations}
          nearbyHubs={nearbyHubs}
        />
      )}

      {/* Module 3: Statutory & Regulatory Compliance Engine */}
      <StatutoryComplianceEngine
        cityName={cityObj.name}
        districtName={districtName}
        wageZone={wageZone}
        labourOffice={labourOffice}
        labourWelfareRule={labourWelfareRule}
      />

      {/* Module 4: The Service Blueprint (SOPs & Equipment) */}
      {serviceBlueprint && (
        <ServiceBlueprintSOP
          serviceName={service.name}
          industryName={industry.name}
          sopSteps={serviceBlueprint.sopSteps}
          deployedEquipment={serviceBlueprint.deployedEquipment}
          personnelProfiles={serviceBlueprint.personnelProfiles}
          complianceGuarantees={serviceBlueprint.complianceGuarantees}
          reportingCadence={serviceBlueprint.reportingCadence}
        />
      )}

      {/* Module 5: Deployment Capability & Guaranteed SLAs */}
      <DeploymentSLASection
        cityName={cityObj.name}
        districtName={districtName}
        nearestHQ={nearestHQ}
        deploymentSlaHours={slaHours}
        policeJurisdiction={policeJurisdiction}
      />

      {/* Module 6: Local Case Evidence & KPIs */}
      {industryProfile && (
        <LocalCaseEvidence
          cityName={cityObj.name}
          districtName={districtName}
          industryName={industry.name}
          kpisGuaranteed={industryProfile.kpisGuaranteed}
          caseStudy={industry.caseStudy}
          procurementChecklist={industryProfile.procurementChecklist}
        />
      )}

      {/* Module 7: Interactive Compliance & Wage Estimator Widget */}
      <InteractiveComplianceWidget
        cityName={cityObj.name}
        serviceName={service.name}
        industryName={industry.name}
        defaultZone={wageZone}
      />

      {/* Module 8: Hyper-Local FAQs with FAQPage JSON-LD */}
      <HyperLocalFAQ
        serviceName={service.name}
        cityName={cityObj.name}
        districtName={districtName}
        industryName={industry.name}
        wageZone={wageZone}
        nearestHQ={nearestHQ}
        slaHours={slaHours}
      />

      {/* Trust Badges Marquee */}
      <div className="py-12 bg-white">
        <ClientMarquee />
      </div>
    </main>
  );
}
