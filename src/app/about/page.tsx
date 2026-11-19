import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Target as TargetIcon,
  Eye,
  Compass,
  Settings2,
  Shuffle,
  Boxes,
  Search,
  Layers,
  Hourglass,
  Scale,
  ShieldCheck,
  Users,
  BookOpen,
  Quote,
  Sprout,
  TrendingUp,
  Globe2,
  Lightbulb,
  Briefcase,
  Handshake,
  Sun,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import AfricaMap from "@/components/ui/AfricaMap";

export const metadata: Metadata = {
  title: "About IQ Syndicate",
  description:
    "We work alongside institutions, investment platforms, governments and project developers to strengthen climate and infrastructure projects across African markets.",
  keywords: [
    "climate infrastructure advisory",
    "African impact investing",
    "technical assistance",
    "private credit",
    "climate venture support",
  ],
  alternates: {
    canonical: "https://iqsyndicate.org/about",
  },
};

export const dynamic = "force-static";

const modelStages = [
  {
    icon: Compass,
    title: "Climate Advisory",
    body: "Strategic support across project design, market intelligence, and product validation for climate project developers and institutional partners.",
    tone: "bg-primary text-white",
    iconTone: "bg-white/15 text-white",
  },
  {
    icon: Settings2,
    title: "Technical Assistance",
    body: "A 6–18-month bespoke programme deploying transaction specialists in financial modelling, product structuring, legal, operations, and market strategy to assist project developers in closing the commercial gap.",
    tone: "bg-forest text-white",
    iconTone: "bg-white/15 text-white",
  },
  {
    icon: Shuffle,
    title: "Capital Mobilisation",
    body: "We structure investment vehicles and mobilize capital that are patient and tailored to the investment needs and stage of small- to medium-scale climate infrastructure projects in Africa.",
    tone: "bg-gold-dark text-white",
    iconTone: "bg-white/15 text-white",
  },
  {
    icon: Boxes,
    title: "Investment Facilitation and Portfolio Aggregation",
    body: "We connect project developers to investment opportunities, and bundle performing projects into institutional-grade vehicles and connect them to large-scale capital through structured deal rooms and roadshows.",
    tone: "bg-ink text-white",
    iconTone: "bg-gold-light/20 text-gold-light",
  },
];

const modelDirections: ("up" | "down" | "left" | "right")[] = [
  "left",
  "right",
  "up",
  "down",
];

const pillars = [
  {
    icon: TargetIcon,
    title: "Risk-Informed Investment",
    body: "We seek to identify, assess, and appropriately allocate climate risks, while developing strategies to mitigate them. Through project preparation and appropriate risk allocation, we help make viable investment opportunities more attractive to capital providers.",
    tone: "bg-primary text-white",
    iconTone: "bg-white/15 text-white",
  },
  {
    icon: Search,
    title: "Rigorous Due Diligence",
    body: "We examine the technical, commercial, and market fundamentals underpinning each opportunity. We engage closely with partners to identify constraints, validate assumptions, and address gaps that may affect project viability and investment performance.",
    tone: "bg-forest text-white",
    iconTone: "bg-white/15 text-white",
  },
  {
    icon: Layers,
    title: "Fit-for-Purpose Financing",
    body: "Our instruments respond to the specific characteristics, development stages, cash flows and risk profiles of projects. Rather than applying standardised financing instruments, we structure solutions that appropriately align the needs of projects with the expectations and risk appetites of capital providers.",
    tone: "bg-gold-dark text-white",
    iconTone: "bg-white/15 text-white",
  },
  {
    icon: Hourglass,
    title: "Long-Term Value Creation",
    body: "Our approach balances appropriate financial returns with long-term development outcomes, recognising the importance of responsible capital deployment, sustained institutional support and environmental value.",
    tone: "bg-ink text-white",
    iconTone: "bg-gold-light/20 text-gold-light",
  },
];

const pillarDirections: ("up" | "down" | "left" | "right")[] = [
  "left",
  "right",
  "up",
  "down",
];

const theoryOfChange = [
  {
    icon: Sprout,
    label: "If",
    body: "Early-stage African climate infrastructures receive structured technical assistance and fit-for-purpose capital,",
  },
  {
    icon: TrendingUp,
    label: "Then",
    body: "They will achieve the project maturity, revenue scale, and documentation standards required to attract commercial capital,"
  },
  {
    icon: Globe2,
    label: "Therefore",
    body: "The communities they serve will gain sustained access to clean energy, climate adaptation tools, and economic opportunity.",
  },
];

const cultureValues = [
  { icon: Lightbulb, title: "Idea Meritocracy", body: "We promote the best idea regardless of where it comes from, without regard to hierarchy." },
  { icon: Briefcase, title: "Meaningful Work", body: "We consider our work important and produce greatness together with those we serve." },
  { icon: Handshake, title: "Meaningful Relationships", body: "We build lasting engagement with communities and partners through mutual caring." },
  { icon: ShieldCheck, title: "Truthfulness", body: "We conduct ourselves in ways that promote and guarantee trust at all times." },
  { icon: Sun, title: "Radical Optimism", body: "We believe in positive thinking and reflect that belief in the work we do and the instruments we structure." },
];

const governance = [
  {
    icon: Scale,
    title: "Legal Structure",
    body: "Private limited liability company (Ltd.), incorporated in Nigeria.",
  },
  {
    icon: ShieldCheck,
    title: "Investment Committee",
    body: "Minimum three members, including at least one independent member. Sole authority over all capital deployment decisions. No capital may be disbursed without formal IC approval.",
  },
  {
    icon: Users,
    title: "Board of Directors",
    body: "Constituted by a founding partner, the Executive Chairman, and independent non-executive directors. Provides strategic oversight of operations, financial health, and stakeholder obligations.",
  },
  {
    icon: BookOpen,
    title: "Advisory Board",
    body: "Senior practitioners in African infrastructure finance, climate policy, project finance, and international development. Formal terms of reference, bi-annual meetings, and ad hoc transaction support.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream py-16 md:py-24">
        <Container className="relative z-10">
          <Reveal className="mx-auto max-w-4xl text-center">
            <h1 className="text-charcoal">Who We Are</h1>
            <div className="mx-auto mt-6 h-1 w-16 bg-gold-dark" />
            <p className="mx-auto mt-7 max-w-3xl text-[16px] leading-7 text-ink/78 md:text-lg md:leading-8">
              We work alongside institutions, investment platforms, governments and project developers to strengthen project pipelines, improve investment readiness, structure appropriate financing solutions and support programme implementation across African markets.
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-7 text-ink/78 md:text-lg md:leading-8">
              Our approach is collaborative, technically informed and focused on delivering lasting development outcomes.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-12 md:py-16">
        <Container>
          <Reveal className="mb-8 max-w-2xl">
            <h2 className="mt-3 text-charcoal">Our Vision, Mission &amp; Mandate</h2>
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-3">
            <Reveal direction="left">
              <article className="h-full rounded-2xl bg-primary p-7 text-white shadow-lg shadow-primary/15 md:p-8">
                <Eye className="h-7 w-7 text-gold-light" strokeWidth={1.7} />
                <h3 className="mt-6 text-2xl text-white">Our Vision</h3>
                <p className="mt-4 text-[14px] leading-7 text-white/85">
                  An Africa where locally led climate and infrastructure solutions are developed to scale, supported by fit-for-purpose capital and strong institutions, delivering sustainable economic prosperity, environmental resilience and lasting development outcomes.
                </p>
              </article>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <article className="h-full rounded-2xl bg-primary-light p-7 text-white shadow-lg shadow-primary-light/15 md:p-8">
                <TargetIcon className="h-7 w-7 text-gold-light" strokeWidth={1.7} />
                <h3 className="mt-6 text-2xl text-white">Our Mission</h3>
                <p className="mt-4 text-[14px] leading-7 text-white/85">
                  To strengthen Africa's climate and infrastructure ecosystem by helping institutions identify opportunities, develop investment-ready projects, structure appropriate financing solutions and deliver impactful programmes.
                </p>
              </article>
            </Reveal>
            <Reveal direction="right" delay={180}>
              <article className="h-full rounded-2xl bg-gold-dark p-7 text-white shadow-lg shadow-gold-dark/15 md:p-8">
                <Compass className="h-7 w-7 text-white" strokeWidth={1.7} />
                <h3 className="mt-6 text-2xl text-white">Our Mandate</h3>
                <p className="mt-4 text-[14px] leading-7 text-white/90">
                  To strengthen the development and financing of climate and infrastructure projects across African markets by bridging the gaps between institutional priorities, project opportunities, investment readiness and effective implementation.
                </p>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-12 md:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal direction="left" className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="mt-3 text-charcoal">Core Values</h2>
              <p className="mt-5 text-[15px] leading-7 text-ink/75">
                Our values shape how we think, work, engage with partners and deliver on our mandate.
              </p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {cultureValues.map((value, i) => {
                const Icon = value.icon;
                const highlighted = i === 0 || i === 3;
                return (
                  <Reveal
                    key={value.title}
                    direction={i % 2 === 0 ? "up" : "down"}
                    delay={i * 70}
                    className={i === 4 ? "sm:col-span-2" : ""}
                  >
                    <article className={`h-full rounded-2xl p-6 ${highlighted ? "bg-primary text-white" : "bg-white text-charcoal shadow-sm"}`}>
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${highlighted ? "bg-white/15 text-gold-light" : "bg-forest/10 text-forest"}`}>
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </div>
                      <h3 className={`mt-5 text-xl ${highlighted ? "text-white" : "text-charcoal"}`}>
                        {value.title}
                      </h3>
                      <p className={`mt-3 text-[13.5px] leading-6 ${highlighted ? "text-white/82" : "text-ink/72"}`}>
                        {value.body}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative bg-ink py-14 text-white md:py-20">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-white">Our Philosophy</h2>
            <p className="mt-5 text-[15px] leading-7 text-white/75 md:text-base">
              We believe that mobilising capital for Africa's development requires a fundamentally different approach to how projects are assessed, prepared, and financed.
            </p>
            <p className="mt-3 text-[15px] leading-7 text-white/75 md:text-base">
              This philosophy informs four principles that guide our work.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-x-12 md:mt-14 md:grid-cols-2">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} direction={pillarDirections[i]} delay={i * 90}>
                  <article className="h-full border-t border-white/20 py-7 md:py-9">
                    <div className="flex items-start gap-5">
                      <span className="pt-1 font-heading text-2xl text-gold-light/75">
                        0{i + 1}
                      </span>
                      <div>
                        <Icon className="h-6 w-6 text-gold-light" strokeWidth={1.7} />
                        <h3 className="mt-4 text-xl text-white md:text-2xl">
                          {pillar.title}
                        </h3>
                        <p className="mt-3 text-[13.5px] leading-6 text-white/72 md:text-sm">
                          {pillar.body}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-px w-16 -translate-x-1/2 bg-gold-light/75"
        />
      </section>
    </>
  );
}
