import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Landmark,
  TrendingDown,
  Users,
  Target,
  Search,
  Layers,
  Hourglass,
  Home as HomeIcon,
  Cloud,
  Briefcase,
  UserCheck,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import HeroSlider, { type HeroSlide } from "@/components/ui/HeroSlider";

export const metadata: Metadata = {
  title: "African Climate Finance",
  description:
    "We bridge the financing gap between indigenous climate founders and institutional capital, through technical assistance, patient capital, and structured aggregation.",
  keywords: [
    "African climate finance",
    "technical assistance",
    "blended finance",
    "portfolio aggregation",
    "climate venture support",
  ],
  alternates: {
    canonical: "https://iqsyndicate.org/",
  },
};

export const dynamic = "force-static";

const heroSlides: HeroSlide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=2400&q=80",
    alt: "Solar infrastructure under construction in Nigeria",
    eyebrow: "Africa First Climate Finance",
    headlineLines: ["Enabling African-Led", "Climate Infrastructure to Scale"],
    body: "We bridge the financing gap between indigenous climate founders and institutional capital, through technical assistance, patient capital, and structured aggregation.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=2400&q=80",
    alt: "Aerial view of agricultural land in Nigeria",
    eyebrow: "Closing the Climate Finance Gap",
    headlineLines: ["$250 Billion in Unmet", "Climate Finance, Every Year"],
    body: "Indigenous climate entrepreneurs are systematically excluded from capital calibrated for mature businesses. We exist to close that gap.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=2400&q=80",
    alt: "Wind turbines at sunset",
    eyebrow: "Patient Capital, Structured Risk",
    headlineLines: ["Built for Founders the", "Market Was Never Designed For"],
    body: "We absorb early-stage risk that conventional finance won't price, so institutional capital can safely follow where it's needed most.",
  },
];

const stats = [
  {
    icon: Landmark,
    value: 250,
    decimals: 0,
    prefix: "$",
    suffix: "B",
    label: "Annual climate finance gap in Africa",
    tone: "burgundy" as const,
    direction: "left" as const,
  },
  {
    icon: TrendingDown,
    value: 23,
    decimals: 0,
    prefix: "< ",
    suffix: "%",
    label: "Of global climate finance directly reaches indigenous ventures",
    tone: "neutral" as const,
    direction: "up" as const,
  },
  {
    icon: Users,
    value: null,
    prefix: "> ",
    display: "> 10,000",
    label: "Active climate ventures in Africa",
    tone: "gold" as const,
    direction: "right" as const,
  },
];

const services = [
  {
    n: "01",
    title: "Climate Advisory",
    body: "Strategic support across project design, market intelligence, and product validation for climate project developers and institutional partners.",
    image: "/images/services/climate.png",
    tone: "burgundy" as const,
    size: "lg" as const,
    href: "/services#advisory",
    direction: "left" as const,
  },
  {
    n: "02",
    title: "Technical Assistance",
    body: "A 6–18-month bespoke programme deploying transaction specialists in financial modelling, product structuring, legal, operations, and market strategy.",
    image: "/images/services/technical.jpg",
    tone: "forest" as const,
    size: "sm" as const,
    href: "/services#technical-assistance",
    direction: "right" as const,
  },
  {
    n: "03",
    title: "Capital Mobilization",
    body: "We structure investment vehicles and mobilize patient capital tailored to the investment needs and stage of small- to medium-scale climate infrastructure projects in Africa.",
    image: "/images/services/capital.png",
    tone: "gold" as const,
    size: "sm" as const,
    href: "/services#capital-mobilization",
    direction: "up" as const,
  },
  {
    n: "04",
    title: "Portfolio Aggregation",
    body: "Connecting project developers to investment opportunities and bundling performing projects into institutional-grade vehicles for large-scale capital.",
    image: "/images/services/portfolio.JPG",
    tone: "burgundy" as const,
    size: "lg" as const,
    href: "/services#aggregation",
    direction: "down" as const,
  },
];

const pillars = [
  {
    icon: Target,
    title: "Risk-First Thinking",
    body: "We seek to understand, absorb, and effectively price early-stage risk, not avoid it. Our returns are compensation for genuine risk-taking.",
    tone: "bg-primary text-white",
    iconTone: "bg-white/15 text-white",
  },
  {
    icon: Search,
    title: "Deep Diligence",
    body: "We work alongside climate innovations for months to learn before structuring capital. Our due diligence is qualitative, AI-driven, and longitudinal.",
    tone: "bg-forest text-white",
    iconTone: "bg-white/15 text-white",
  },
  {
    icon: Layers,
    title: "Aligned Instruments",
    body: "We design instruments that are aligned with the cash flow and investment needs of climate projects. The instrument must fit the venture's stage, and not the other way around.",
    tone: "bg-gold-dark text-white",
    iconTone: "bg-white/15 text-white",
  },
  {
    icon: Hourglass,
    title: "Patient Capital",
    body: "We define success over a 5–10-year horizon, not a 24-month return cycle. Our partners must share this horizon.",
    tone: "bg-ink text-white",
    iconTone: "bg-gold-light/20 text-gold-light",
  },
];

const audiences = [
  {
    label: "For Founders",
    headline: "Are you an indigenous African climate entrepreneur?",
    body: "If you are building a climate infrastructure venture in Nigeria and need technical assistance and patient capital to reach institutional readiness, we were designed for you.",
    cta: "Apply for Support",
    href: "/apply",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
    tone: "burgundy" as const,
  },
  {
    label: "For Investors",
    headline: "Invest in Africa's Climate Future",
    body: "Capital Mobilization deploys philanthropic and concessional capital into well-prepared climate ventures generating measurable impact and risk-adjusted financial returns.",
    cta: "View Capital Mobilization",
    href: "/special-projects/capital-mobilization",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    tone: "forest" as const,
  },
  {
    label: "For Partners",
    headline: "Partner with us",
    body: "Development agencies, bilateral institutions, and accelerators can co-deliver our technical assistance programme or refer high-potential ventures from your networks.",
    cta: "Partner With Us",
    href: "/apply",
    image:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=1200&q=80",
    tone: "gold" as const,
  },
];

const impactMetrics = [
  { icon: HomeIcon, value: 150000, label: "Households with improved clean energy access" },
  { icon: Cloud, value: 800, unit: " tCO₂e", label: "Greenhouse gas emissions avoided per year" },
  { icon: Briefcase, value: 500, label: "Full-time equivalent jobs created" },
  { icon: UserCheck, value: 40, display: "40%+", label: "Women-led ventures in our portfolio" },
];

const pillarDirections: ("up" | "down" | "left" | "right")[] = [
  "left",
  "right",
  "up",
  "down",
];

const toneClasses: Record<"burgundy" | "forest" | "gold", string> = {
  burgundy: "photo-duotone-burgundy",
  forest: "photo-duotone-forest",
  gold: "photo-duotone-gold",
};

export default function HomePage() {
  return (
    <>
      {/* ───────────────────────── HERO (Unchanged) ───────────────────────── */}
      <HeroSlider slides={heroSlides} />

      {/* ───────────────────────── CUSTOM CONTENT ───────────────────────── */}
      <section className="bg-white py-12 md:py-16">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Why We Exist</h2>
            <p className="text-[16px] leading-7 text-ink/80 mb-4">
              Africa has significant opportunities across climate and infrastructure sectors. Yet many promising projects remain underdeveloped and unable to attract the capital and institutional support required to reach implementation.
            </p>
            <p className="text-[16px] leading-7 text-ink/80 mb-4">
              The challenge extends beyond access to finance. It involves project preparation, technical capacity, risk allocation, investment structuring and effective programme delivery.
            </p>
            <p className="text-[16px] leading-7 text-ink/80 mb-4">
              IQ Syndicate works with institutions and partners to address these interconnected challenges, helping translate development priorities into investable projects and tangible outcomes.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-cream py-12 md:py-16">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Who We Are</h2>
            <p className="text-[16px] leading-7 text-ink/80 mb-4">
              A climate advisor partner that helps institutions translate their climate ambitions and investment priorities into well-prepared projects, executable programmes and mobilised capital across African markets.
            </p>
            <p className="text-[16px] leading-7 text-ink/80 mb-4">
              We work with development finance institutions, philanthropic organisations, governments, investment platforms and private-sector partners to bridge the gaps between project identification, preparation, financing and implementation.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-12 md:py-16">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Our Services</h2>
            <p className="text-[16px] leading-7 text-ink/80 mb-8">
              Our work span four interconnected service areas:
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              <div className="flex h-full flex-col items-center rounded-2xl bg-primary p-6 text-center text-white shadow-md">
                <Image src="/images/services/portfolio.JPG" alt="Pipeline Development" width={120} height={120} className="mb-4 h-[120px] w-[120px] shrink-0 rounded-xl object-cover" />
                <h3 className="mb-2 flex min-h-14 items-center justify-center text-center text-xl font-semibold leading-tight text-white">Pipeline Development</h3>
                <p className="text-[15px] leading-6 text-white/85">
                  We support partners in identifying, assessing and aggregating climate projects to build credible project pipelines aligned with their institutional investment priorities.
                </p>
              </div>
              <div className="flex h-full flex-col items-center rounded-2xl bg-forest p-6 text-center text-white shadow-md">
                <Image src="/images/services/technical.jpg" alt="Technical Assistance" width={120} height={120} className="mb-4 h-[120px] w-[120px] shrink-0 rounded-xl object-cover" />
                <h3 className="mb-2 flex min-h-14 items-center justify-center text-center text-xl font-semibold leading-tight text-white">Technical Assistance</h3>
                <p className="text-[15px] leading-6 text-white/85">
                  We support our partners in addressing technical, commercial, institutional, and financial gaps to advance projects from early-stage to investment-ready opportunities, while strengthening project fundamentals.
                </p>
              </div>
              <div className="flex h-full flex-col items-center rounded-2xl bg-gold-dark p-6 text-center text-white shadow-md">
                <Image src="/images/services/capital.png" alt="Investment Structuring" width={120} height={120} className="mb-4 h-[120px] w-[120px] shrink-0 rounded-xl object-cover" />
                <h3 className="mb-2 flex min-h-14 items-center justify-center text-center text-xl font-semibold leading-tight text-white">Investment Structuring</h3>
                <p className="text-[15px] leading-6 text-white/90">
                  We design financing solutions, structure investments and develop capital mobilisation strategies to address the financing constraints of climate projects. Our approach recognises that different projects require different financing instruments.
                </p>
              </div>
              <div className="flex h-full flex-col items-center rounded-2xl bg-ink p-6 text-center text-white shadow-md">
                <Image src="/images/services/climate.png" alt="Climate Advisory" width={120} height={120} className="mb-4 h-[120px] w-[120px] shrink-0 rounded-xl object-cover" />
                <h3 className="mb-2 flex min-h-14 items-center justify-center text-center text-xl font-semibold leading-tight text-white">Climate Advisory</h3>
                <p className="text-[15px] leading-6 text-white/85">
                  We serve as a strategic implementation partner to institutions delivering climate research and infrastructure programmes across African markets. We support programme delivery and translate strategic priorities into tangible development outcomes.
                </p>
              </div>
          </div>
        </Container>
      </section>
    </>
  );
}
