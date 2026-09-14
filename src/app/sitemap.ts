import type { MetadataRoute } from "next";
import { RESUME_DATA } from "@/data/resume-data";

// Required by `output: "export"` — the sitemap is emitted once at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = RESUME_DATA.personalWebsiteUrl;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
