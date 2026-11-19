import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-11-17"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/privacidade`,
      lastModified: new Date("2026-11-17"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
