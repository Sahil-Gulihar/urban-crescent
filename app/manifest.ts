import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Urban Crescent",
    short_name: "Urban Crescent",
    description: "End-to-end interior design and execution.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F4EE",
    theme_color: "#F8F4EE",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
