import type { Metadata } from "next";
import PublicationReader from "./page.client";

export const metadata: Metadata = {
  title: "Publication",
  description: "Read perspectives and publications from IQ Syndicate.",
};

export default function PublicationPage() {
  return <PublicationReader />;
}
