import type { MetadataRoute } from "next";
import { blogs } from "@/data/blogs";
import { rooms } from "@/data/rooms";

const FALLBACK_SITE_URL = "https://thepadivalgrand.com";

function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const url = envUrl && envUrl.length > 0 ? envUrl : FALLBACK_SITE_URL;

  try {
    return new URL(url).origin;
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  // 1. Static Pages mapped from original public/sitemap.xml configuration
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/dining`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rooms`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  // 2. Dynamic Room Pages generated dynamically from src/data/rooms.ts
  const roomRoutes = rooms.map((room) => ({
    url: `${baseUrl}/rooms/${room.slug}`,
    lastModified: new Date("2026-03-16"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // 3. Dynamic Blog Pages generated dynamically from src/data/blogs.ts
  const blogRoutes = blogs.map((blog) => {
    let lastModDate = new Date("2026-03-16");
    if (blog.date) {
      const parsedDate = new Date(blog.date);
      if (!isNaN(parsedDate.getTime())) {
        lastModDate = parsedDate;
      }
    }
    return {
      url: `${baseUrl}/blogs/${blog.slug}`,
      lastModified: lastModDate,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    };
  });

  return [...staticRoutes, ...roomRoutes, ...blogRoutes];
}
