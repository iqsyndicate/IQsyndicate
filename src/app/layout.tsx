import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import SiteFooter from "@/components/layout/SiteFooter";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iqsyndicate.vercel.app"),
  icons: {
    icon: "/images/favicon.png",
  },
  title: {
    default: "we",
    template: "%s | we",
  },
  description:
    "we are an African-led climate finance platform focused on advisory, technical assistance, blended finance, and portfolio aggregation.",
  openGraph: {
    title: "we",
    description:
      "Enabling African-led climate ventures to scale through patient capital and structured support.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${cormorant.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
