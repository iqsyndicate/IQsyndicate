import type { Metadata } from "next";
import AdminStudio from "./page.client";

export const metadata: Metadata = {
  title: "Insights Studio",
  robots: { index: false, follow: false },
};

export default function InsightsAdminPage() {
  return <AdminStudio />;
}
