import type { Metadata } from "next";
import InsightsLanding from "./page.client";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives, research, and practical ideas on African climate finance and locally led infrastructure.",
  alternates: { canonical: "https://iqsyndicate.org/insights" },
};

export default function InsightsPage() {
  return <InsightsLanding />;
}
