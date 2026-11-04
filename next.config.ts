import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false, // Suppress X-Powered-By: Next.js
  devIndicators: false, // Hide dev status badge that blocks mobile bottom buttons
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "advancecorporatesecurity.com",
      },
      {
        protocol: "https",
        hostname: "advancecorporate.in",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://maps.gstatic.com https://maps.googleapis.com https://www.googletagmanager.com https://*.google-analytics.com; connect-src 'self' https://maps.googleapis.com https://www.googletagmanager.com https://*.google-analytics.com https://analytics.google.com; frame-src 'self' https://www.google.com https://maps.google.com https://*.openstreetmap.org https://openstreetmap.org https://www.googletagmanager.com; frame-ancestors 'self';",
          },
        ],
      },
      {
        source: "/downloads/(.*)",
        headers: [
          {
            key: "Content-Disposition",
            value: "inline",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=43200",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Core alias redirects (prevent 404 on plural/shorthand URLs)
      { source: "/locations", destination: "/location", permanent: true },
      { source: "/locations/", destination: "/location", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/privacy/", destination: "/privacy-policy", permanent: true },
      { source: "/terms", destination: "/terms-of-service", permanent: true },
      { source: "/terms/", destination: "/terms-of-service", permanent: true },
      { source: "/service", destination: "/services", permanent: true },
      { source: "/service/", destination: "/services", permanent: true },
      { source: "/industries", destination: "/sectors", permanent: true },
      { source: "/industries/", destination: "/sectors", permanent: true },

      // Blueprint Enterprise Target IA Aliases (Section 4)
      { source: "/industries/manufacturing", destination: "/sectors/industrial-zones", permanent: true },
      { source: "/industries/manufacturing/", destination: "/sectors/industrial-zones", permanent: true },
      { source: "/industries/healthcare", destination: "/sectors/hospitals", permanent: true },
      { source: "/industries/healthcare/", destination: "/sectors/hospitals", permanent: true },
      { source: "/industries/warehousing-logistics", destination: "/sectors/warehouses", permanent: true },
      { source: "/industries/warehousing-logistics/", destination: "/sectors/warehouses", permanent: true },
      { source: "/industries/warehousing", destination: "/sectors/warehouses", permanent: true },
      { source: "/industries/warehousing/", destination: "/sectors/warehouses", permanent: true },
      { source: "/industries/:slug", destination: "/sectors/:slug", permanent: true },
      { source: "/industries/:slug/", destination: "/sectors/:slug", permanent: true },
      { source: "/locations/west-bengal/kolkata", destination: "/location/kolkata", permanent: true },
      { source: "/locations/west-bengal/kolkata/", destination: "/location/kolkata", permanent: true },
      { source: "/location/west-bengal/kolkata", destination: "/location/kolkata", permanent: true },
      { source: "/location/west-bengal/kolkata/", destination: "/location/kolkata", permanent: true },

      // pSEO Canonical City & NCR Alias Redirects (301 Permanent)
      { source: "/location/gurgaon", destination: "/location/gurugram", permanent: true },
      { source: "/location/gurgaon/", destination: "/location/gurugram", permanent: true },
      { source: "/location/gurugram-hr", destination: "/location/gurugram", permanent: true },
      { source: "/location/gurugram-hr/", destination: "/location/gurugram", permanent: true },
      { source: "/location/faridabad-hr", destination: "/location/faridabad", permanent: true },
      { source: "/location/faridabad-hr/", destination: "/location/faridabad", permanent: true },
      { source: "/location/noida-up", destination: "/location/noida", permanent: true },
      { source: "/location/noida-up/", destination: "/location/noida", permanent: true },
      { source: "/location/ghaziabad-up", destination: "/location/ghaziabad", permanent: true },
      { source: "/location/ghaziabad-up/", destination: "/location/ghaziabad", permanent: true },
      { source: "/services/:slug/gurgaon", destination: "/services/:slug/gurugram", permanent: true },
      { source: "/services/:slug/gurgaon/", destination: "/services/:slug/gurugram", permanent: true },
      { source: "/services/:slug/gurugram-hr", destination: "/services/:slug/gurugram", permanent: true },
      { source: "/services/:slug/gurugram-hr/", destination: "/services/:slug/gurugram", permanent: true },
      { source: "/services/:slug/faridabad-hr", destination: "/services/:slug/faridabad", permanent: true },
      { source: "/services/:slug/faridabad-hr/", destination: "/services/:slug/faridabad", permanent: true },
      { source: "/services/:slug/noida-up", destination: "/services/:slug/noida", permanent: true },
      { source: "/services/:slug/noida-up/", destination: "/services/:slug/noida", permanent: true },
      { source: "/services/:slug/ghaziabad-up", destination: "/services/:slug/ghaziabad", permanent: true },
      { source: "/services/:slug/ghaziabad-up/", destination: "/services/:slug/ghaziabad", permanent: true },

      // Sanitized City Variant Redirects (Consolidation of Duplicate & Doorway Slugs)
      { source: "/location/barrackpur", destination: "/location/barrackpore", permanent: true },
      { source: "/location/barrackpur/", destination: "/location/barrackpore", permanent: true },
      { source: "/services/:slug/barrackpur", destination: "/services/:slug/barrackpore", permanent: true },
      { source: "/services/:slug/barrackpur/", destination: "/services/:slug/barrackpore", permanent: true },

      { source: "/location/hardwar", destination: "/location/haridwar", permanent: true },
      { source: "/location/hardwar/", destination: "/location/haridwar", permanent: true },
      { source: "/services/:slug/hardwar", destination: "/services/:slug/haridwar", permanent: true },
      { source: "/services/:slug/hardwar/", destination: "/services/:slug/haridwar", permanent: true },

      { source: "/location/darjiling", destination: "/location/darjeeling", permanent: true },
      { source: "/location/darjiling/", destination: "/location/darjeeling", permanent: true },
      { source: "/services/:slug/darjiling", destination: "/services/:slug/darjeeling", permanent: true },
      { source: "/services/:slug/darjiling/", destination: "/services/:slug/darjeeling", permanent: true },

      { source: "/location/khardah", destination: "/location/khardaha", permanent: true },
      { source: "/location/khardah/", destination: "/location/khardaha", permanent: true },
      { source: "/services/:slug/khardah", destination: "/services/:slug/khardaha", permanent: true },
      { source: "/services/:slug/khardah/", destination: "/services/:slug/khardaha", permanent: true },

      { source: "/location/davanagere", destination: "/location/davangere", permanent: true },
      { source: "/location/davanagere/", destination: "/location/davangere", permanent: true },
      { source: "/services/:slug/davanagere", destination: "/services/:slug/davangere", permanent: true },
      { source: "/services/:slug/davanagere/", destination: "/services/:slug/davangere", permanent: true },

      { source: "/location/tumakuru", destination: "/location/tumkur", permanent: true },
      { source: "/location/tumakuru/", destination: "/location/tumkur", permanent: true },
      { source: "/services/:slug/tumakuru", destination: "/services/:slug/tumkur", permanent: true },
      { source: "/services/:slug/tumakuru/", destination: "/services/:slug/tumkur", permanent: true },

      { source: "/location/ranebennur", destination: "/location/ranibennur", permanent: true },
      { source: "/location/ranebennur/", destination: "/location/ranibennur", permanent: true },
      { source: "/services/:slug/ranebennur", destination: "/services/:slug/ranibennur", permanent: true },
      { source: "/services/:slug/ranebennur/", destination: "/services/:slug/ranibennur", permanent: true },

      { source: "/location/kolapur", destination: "/location/kolhapur", permanent: true },
      { source: "/location/kolapur/", destination: "/location/kolhapur", permanent: true },
      { source: "/services/:slug/kolapur", destination: "/services/:slug/kolhapur", permanent: true },
      { source: "/services/:slug/kolapur/", destination: "/services/:slug/kolhapur", permanent: true },

      { source: "/location/ahmadnagar", destination: "/location/ahmednagar", permanent: true },
      { source: "/location/ahmadnagar/", destination: "/location/ahmednagar", permanent: true },
      { source: "/services/:slug/ahmadnagar", destination: "/services/:slug/ahmednagar", permanent: true },
      { source: "/services/:slug/ahmadnagar/", destination: "/services/:slug/ahmednagar", permanent: true },

      { source: "/location/badalapur", destination: "/location/badlapur", permanent: true },
      { source: "/location/badalapur/", destination: "/location/badlapur", permanent: true },
      { source: "/services/:slug/badalapur", destination: "/services/:slug/badlapur", permanent: true },
      { source: "/services/:slug/badalapur/", destination: "/services/:slug/badlapur", permanent: true },

      { source: "/location/bid", destination: "/location/beed", permanent: true },
      { source: "/location/bid/", destination: "/location/beed", permanent: true },
      { source: "/services/:slug/bid", destination: "/services/:slug/beed", permanent: true },
      { source: "/services/:slug/bid/", destination: "/services/:slug/beed", permanent: true },

      { source: "/location/gondiya", destination: "/location/gondia", permanent: true },
      { source: "/location/gondiya/", destination: "/location/gondia", permanent: true },
      { source: "/services/:slug/gondiya", destination: "/services/:slug/gondia", permanent: true },
      { source: "/services/:slug/gondiya/", destination: "/services/:slug/gondia", permanent: true },

      { source: "/location/raurkela", destination: "/location/rourkela", permanent: true },
      { source: "/location/raurkela/", destination: "/location/rourkela", permanent: true },
      { source: "/services/:slug/raurkela", destination: "/services/:slug/rourkela", permanent: true },
      { source: "/services/:slug/raurkela/", destination: "/services/:slug/rourkela", permanent: true },

      { source: "/location/chittaurgarh", destination: "/location/chittorgarh", permanent: true },
      { source: "/location/chittaurgarh/", destination: "/location/chittorgarh", permanent: true },
      { source: "/services/:slug/chittaurgarh", destination: "/services/:slug/chittorgarh", permanent: true },
      { source: "/services/:slug/chittaurgarh/", destination: "/services/:slug/chittorgarh", permanent: true },

      { source: "/location/thoothukkudi", destination: "/location/thoothukudi", permanent: true },
      { source: "/location/thoothukkudi/", destination: "/location/thoothukudi", permanent: true },
      { source: "/services/:slug/thoothukkudi", destination: "/services/:slug/thoothukudi", permanent: true },
      { source: "/services/:slug/thoothukkudi/", destination: "/services/:slug/thoothukudi", permanent: true },

      // WordPress legacy URL → New clean URLs (301 Permanent)
      { source: "/home/", destination: "/", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/about-us-3/", destination: "/about", permanent: true },
      { source: "/about-us-3", destination: "/about", permanent: true },
      { source: "/our-mission-2/", destination: "/about#mission", permanent: true },
      { source: "/our-mission-2", destination: "/about#mission", permanent: true },
      { source: "/our-vision-2/", destination: "/about#vision", permanent: true },
      { source: "/our-vision-2", destination: "/about#vision", permanent: true },
      { source: "/core-value-2/", destination: "/about#values", permanent: true },
      { source: "/core-value-2", destination: "/about#values", permanent: true },
      { source: "/from-the-desk-of-founder/", destination: "/about#founder", permanent: true },
      { source: "/from-the-desk-of-founder", destination: "/about#founder", permanent: true },
      { source: "/our-team-our-forte/", destination: "/about#team", permanent: true },
      { source: "/our-team-our-forte", destination: "/about#team", permanent: true },
      { source: "/security-safety-services/", destination: "/services/security-safety", permanent: true },
      { source: "/security-safety-services", destination: "/services/security-safety", permanent: true },
      { source: "/facility-management-services/", destination: "/services/facility-management", permanent: true },
      { source: "/facility-management-services", destination: "/services/facility-management", permanent: true },
      { source: "/placement-services/", destination: "/services/placement-services", permanent: true },
      { source: "/placement-services", destination: "/services/placement-services", permanent: true },
      { source: "/horticulture-2/", destination: "/services/horticulture", permanent: true },
      { source: "/horticulture-2", destination: "/services/horticulture", permanent: true },
      { source: "/our-clients/", destination: "/clients", permanent: true },
      { source: "/our-clients", destination: "/clients", permanent: true },
      { source: "/our-gallery/", destination: "/gallery", permanent: true },
      { source: "/our-gallery", destination: "/gallery", permanent: true },
      { source: "/contact-us-2/", destination: "/contact", permanent: true },
      { source: "/contact-us-2", destination: "/contact", permanent: true },
      { source: "/career", destination: "/careers", permanent: true },
      { source: "/career/", destination: "/careers", permanent: true },
    ];
  },
};

export default nextConfig;
