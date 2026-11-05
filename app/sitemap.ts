import type { MetadataRoute } from "next";

const base = "https://www.urbancrescentdesign.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    ...["/contact", "/privacy", "/terms", "/warranty"].map((path) => ({
      url: `${base}${path}`,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
