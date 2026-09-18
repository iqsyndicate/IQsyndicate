import type { Metadata } from "next";
import { TeamDirectory } from "@/app/team/page";

export const metadata: Metadata = {
  title: "Advisors",
  description: "Meet the advisors supporting IQ Syndicate across climate finance, governance, clean energy, and global partnerships.",
  alternates: {
    canonical: "https://iqsyndicate.org/team/advisors",
  },
};

export const dynamic = "force-static";

export default function AdvisorsPage() {
  return <TeamDirectory section="advisors" />;
}