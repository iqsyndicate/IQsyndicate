import { MetadataRoute } from "next";

const siteUrl = "https://iqsyndicate.org";

export default function Sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "about",
    "services",
    // "investment-process",
    // "impact",
    "team",
    "team/advisors",
    "apply",
    "privacy",
    // "special-projects/mobilist-facility",
    // "special-projects/africa-energy-market-intelligence",
    // "special-projects/consumer-financing-project",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}/${route}`.replace(/\/\/$/, ""),
    lastModified: new Date().toISOString(),
  }));
}
