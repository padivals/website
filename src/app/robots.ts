import type { MetadataRoute } from "next";

const FALLBACK_SITE_URL = "https://thepadivalgrand.com";

function getSiteUrl() {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const url = envUrl && envUrl.length > 0 ? envUrl : FALLBACK_SITE_URL;

  try {
    return new URL(url);
  } catch {
    return new URL(FALLBACK_SITE_URL);
  }
}

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api", "/_next"],
    },
    sitemap: `${siteUrl.origin}/sitemap.xml`,
    host: siteUrl.origin,
  };
}
