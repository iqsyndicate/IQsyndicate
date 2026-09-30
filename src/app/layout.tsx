import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL("https://iqsyndicate.org"),
  alternates: {
    canonical: "https://iqsyndicate.org",
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  title: {
    default: "IQ Syndicate",
    template: "%s | IQ Syndicate",
  },
  description:
    "IQ Syndicate is an African-led climate finance platform focused on advisory, technical assistance, blended finance, and portfolio aggregation.",
  keywords: [
    "African climate finance",
    "blended finance",
    "technical assistance",
    "impact investing",
    "climate infrastructure",
    "Nigeria climate ventures",
    "African founders",
  ],
  creator: "IQ Syndicate",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    url: "https://iqsyndicate.org",
    siteName: "IQ Syndicate",
    title: "IQ Syndicate",
    description:
      "Enabling African-led climate ventures to scale through patient capital and structured support.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://iqsyndicate.org/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "IQ Syndicate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IQ Syndicate",
    description:
      "Enabling African-led climate ventures to scale through patient capital and structured support.",
    images: ["https://iqsyndicate.org/images/logo.svg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://iqsyndicate.org/#organization",
      name: "IQ Syndicate",
      url: "https://iqsyndicate.org",
      logo: "https://iqsyndicate.org/images/logo.svg",
      description:
        "IQ Syndicate is an African-led climate finance platform focused on advisory, technical assistance, blended finance, and portfolio aggregation.",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "mailto:contact@iqsyndicate.org",
          availableLanguage: ["English"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://iqsyndicate.org/#website",
      url: "https://iqsyndicate.org",
      name: "IQ Syndicate",
      description:
        "Enabling African-led climate ventures to scale through patient capital and structured support.",
      publisher: {
        "@id": "https://iqsyndicate.org/#organization",
      },
    },
  ],
};

export const viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${manrope.variable} ${cormorant.variable} antialiased`}
      >
        <Header />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
