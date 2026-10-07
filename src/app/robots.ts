import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      // Explicitly allow all major AI crawlers
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Amazonbot', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'Applebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
    ],
    sitemap: [
      `${siteConfig.url}/sitemap.xml`,
      `${siteConfig.url}/sitemap-security.xml`,
      `${siteConfig.url}/sitemap-facility.xml`,
      `${siteConfig.url}/sitemap-manpower.xml`,
      `${siteConfig.url}/sitemap-horticulture.xml`,
      `${siteConfig.url}/sitemap-cities.xml`,
      `${siteConfig.url}/sitemap-states.xml`,
      `${siteConfig.url}/sitemap-core.xml`,
      `${siteConfig.url}/sitemap-west-bengal.xml`,
      `${siteConfig.url}/sitemap-wb-matrix-security.xml`,
      `${siteConfig.url}/sitemap-wb-matrix-facility.xml`,
      `${siteConfig.url}/sitemap-wb-matrix-manpower.xml`,
    ],
    host: siteConfig.url,
  };
}