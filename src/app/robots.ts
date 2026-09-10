import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/"],
      },
      // Unblock modern AI answer engines (GEO/AEO strategy)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
    sitemap: [
      "https://www.advancecorporatesecurity.com/sitemap.xml",
      "https://www.advancecorporatesecurity.com/sitemap-security.xml",
      "https://www.advancecorporatesecurity.com/sitemap-facility.xml",
      "https://www.advancecorporatesecurity.com/sitemap-manpower.xml",
      "https://www.advancecorporatesecurity.com/sitemap-cities.xml",
      "https://www.advancecorporatesecurity.com/sitemap-states.xml",
      "https://www.advancecorporatesecurity.com/sitemap-core.xml",
    ],
  };
}