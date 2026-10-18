import type { MetadataRoute } from "next";

const base = "https://urban-crescent.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    ...["/privacy", "/terms", "/warranty"].map((path) => ({
      url: `${base}${path}`,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
