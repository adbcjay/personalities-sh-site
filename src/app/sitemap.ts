import type { MetadataRoute } from "next";
import { personas } from "@/data/registry";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://personas.sh";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/browse`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/docs`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/submit`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    ...personas.map((p) => ({
      url: `${base}/persona/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
