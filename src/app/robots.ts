import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/"],
    },
    host: "https://thepadivalgrand.com/",
    sitemap: "https://thepadivalgrand.com/sitemap.xml",
  };
}
