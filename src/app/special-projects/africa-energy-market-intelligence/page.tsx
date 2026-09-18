import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AfricaEnergyMarketIntelligencePage from "./page.client";

export const metadata: Metadata = {
  title: "Africa Energy Market Intelligence",
  description:
    "Real-time intelligence for African energy markets, project pipelines, policy changes, and investor opportunities in the climate sector.",
  keywords: [
    "energy market intelligence",
    "African energy data",
    "climate investment research",
    "renewable energy intelligence",
    "market monitoring",
  ],
  alternates: {
    canonical: "https://iqsyndicate.org/special-projects/africa-energy-market-intelligence",
  },
};

export const dynamic = "force-static";

export default function Page() {
  notFound();

  return <AfricaEnergyMarketIntelligencePage />;
}
