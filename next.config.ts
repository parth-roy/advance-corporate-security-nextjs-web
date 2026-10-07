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
