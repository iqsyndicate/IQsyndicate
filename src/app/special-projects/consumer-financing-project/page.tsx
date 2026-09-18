import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ConsumerFinancingPage from "./page.client";

export const metadata: Metadata = {
  title: "Consumer Financing Project",
  description:
    "A consumer financing initiative supporting Nigerian households and MSMEs with affordable solar energy solutions backed by structured repayment and impact finance.",
  keywords: [
    "consumer financing",
    "solar financing",
    "energy access Nigeria",
    "MSME energy loans",
    "clean cooking finance",
  ],
  alternates: {
    canonical: "https://iqsyndicate.org/special-projects/consumer-financing-project",
  },
};

export const dynamic = "force-static";

export default function Page() {
  notFound();

  return <ConsumerFinancingPage />;
}
