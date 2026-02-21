import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://verity.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${baseUrl}/en`, lastModified: now, changeFrequency: "monthly" as const, priority: 1 },
    { url: `${baseUrl}/pt`, lastModified: now, changeFrequency: "monthly" as const, priority: 1 },
  ];
}
