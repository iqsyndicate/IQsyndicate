"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Zap,
  TrendingUp,
  Shield,
  FileText,
  MessageSquare,
  Globe2,
  CheckCircle2,
  Send,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const deliverables = [
  { icon: Zap,           title: "Live Project Tracking",             body: "Monitor renewable energy projects across Africa in real time, from development through commissioning." },
  { icon: TrendingUp,    title: "Investment Pipeline Intelligence",  body: "Discover funding opportunities, track capital flows, and benchmark comparable transactions." },
  { icon: Shield,        title: "Policy & Regulatory Monitoring",    body: "Stay current on regulatory changes across multiple jurisdictions with AI-powered alerts." },
  { icon: FileText,      title: "Market Reports & Briefs",           body: "Automated country-level intelligence briefs, thematic deep dives, and annual market reports." },
  { icon: MessageSquare, title: "Custom Queries",                    body: "Ask the platform exactly what you need, natural-language queries across the full data corpus." },
  { icon: Globe2,        title: "Open Community Access",             body: "A free public tier ensures energy-poor communities can track investment commitments in their regions." },
];

const markets = [
  { name: "Nigeria",  desc: "Largest economy, active pipeline, energy transition leadership" },
  { name: "Uganda",   desc: "High energy access gap, strong donor engagement; growing solar market" },
  { name: "Tanzania", desc: "Significant rural electrification need." },
  { name: "Ethiopia", desc: "Large population, Amharic data coverage, hydropower transition" },
];

const stats = [
  { value: "200+",   label: "Data sources monitored continuously" },
  { value: "300+",   label: "Validated project records" },
  { value: "2,000+", label: "Intelligence items published annually" },
  { value: "3",      label: "Languages at launch: English, Swahili, Amharic" },
];

const audiences = [
  "Development partners",
  "Impact investors & private capital providers",
  "Government energy agencies",
  "Donor organisations",
  "Project developers",
  "Local community organisations",
];

export default function AfricaEnergyIntelligencePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(null), 4000);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  async function handleSubscribe() {
    if (!email.trim()) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.set("form", "subscribe");
      formData.set("email", email.trim());

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to subscribe.");
      }

      setSubmitted(true);
      setToast("Message received. Thank you for subscribing. If you do not see the confirmation email soon, please check your spam folder.");
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to subscribe.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {toast ? (
        <div className="fixed right-4 top-4 z-50 max-w-sm rounded-2xl border border-forest/20 bg-white px-5 py-4 shadow-2xl shadow-black/10">
          <p className="text-[13px] font-semibold text-charcoal">{toast}</p>
          <p className="mt-1 text-[12px] text-ink/60">A confirmation email has been sent to you.</p>
        </div>
      ) : null}

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="grain relative flex min-h-[72vh] items-end overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=2400&q=80"
            alt="Solar energy infrastructure across Africa"
            fill
            priority
            className="ken-burns object-cover"
          />
          <div className="hero-scrim absolute inset-0" />
        </div>

        <Container className="relative z-10 pb-12 pt-32 md:pb-16 md:pt-36">
          <Reveal direction="down">
            <span className="eyebrow-pill mb-7 inline-flex">
              Special Projects
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="max-w-4xl text-white">
              Africa Energy Market Intelligence Project
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl text-[16px] leading-7 text-white/88">
              The first AI-powered platform purpose-built to close information
              gaps, connect capital with clean energy projects, and accelerate
              energy access across Africa.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ── The Challenge ─────────────────────────────────────── */}
      <section className="bg-white py-10 md:py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal direction="left">
              <p className="institutional-eyebrow">The Challenge</p>
              <h2 className="mt-4 text-charcoal">
                Africa holds immense potential. Capital still doesn&apos;t follow.
              </h2>
            </Reveal>
            <Reveal direction="right">
              <p className="text-[15.5px] leading-7 text-ink/74">
                Africa holds immense renewable energy potential, yet attracts
                less than 3% of global energy investment. The data needed to
                unlock capital exists, but it is scattered across hundreds of
                sources: government portals, donor databases, news outlets, and
                institutional reports. This delays projects, leads to missed
                funding windows, and leaves{" "}
                <span className="font-semibold text-charcoal">
                  600 million people still without electricity.
                </span>
              </p>
            </Reveal>
          </div>

          {/* Stat strip */}
          <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">
            {[
              { v: "3%",   l: "Of global energy investment reaches Africa" },
              { v: "600M", l: "People across Africa without electricity" },
              { v: "100+", l: "Government and donor data sources fragmented" },
              { v: "0",    l: "Unified, real-time intelligence platforms before this" },
            ].map((s, i) => (
              <Reveal key={s.l} direction="up" delay={i * 90}>
                <div className="card-float rounded-2xl bg-cream p-6 shadow-md shadow-black/5">
                  <p className="font-heading text-4xl text-primary md:text-5xl">{s.v}</p>
                  <p className="mt-3 text-[12.5px] leading-5 text-ink/60">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Our Solution ──────────────────────────────────────── */}
      <section className="bg-forest py-10 text-white md:py-14">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <Reveal direction="left">
              <p className="eyebrow-on-dark">Our Solution</p>
              <h2 className="mt-4 text-white">
                Fragmented data transformed into decision-ready intelligence.
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-white/76">
                The Africa Energy Market Intelligence Platform uses artificial
                intelligence to collect, validate, and structure renewable energy
                data from across African markets, transforming scattered
                information into real-time, actionable intelligence for capital
                providers, policymakers, and project developers.
              </p>
            </Reveal>
            <Reveal direction="right">
              <div className="space-y-4">
                {[
                  ["AI-Powered Collection",    "Automated ingestion from 200+ sources including government portals, donor databases, news feeds, and institutional reports."],
                  ["Validation & Structuring", "Machine-learning models validate, deduplicate, and structure raw data into comparable, reliable project records."],
                  ["Real-Time Intelligence",   "Continuous updates ensure decision-makers always work from the most current market picture available."],
                ].map(([title, body], i) => (
                  <Reveal key={title} direction="right" delay={i * 100}>
                    <div className="card-float glass-card rounded-2xl p-6 shadow-lg shadow-black/20">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-light" strokeWidth={1.75} />
                        <p className="font-semibold text-white">{title}</p>
                      </div>
                      <p className="mt-2.5 text-[13.5px] leading-6 text-white/72">{body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── What the Platform Delivers ───────────────────────── */}
      <section className="bg-cream py-10 md:py-14">
        <Container>
          <Reveal className="mb-12 max-w-xl">
            <p className="institutional-eyebrow">What the Platform Delivers</p>
            <h2 className="mt-4 text-charcoal">Six capabilities. One unified platform.</h2>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((d, i) => {
              const Icon = d.icon;
              const dirs = ["left","up","right","left","up","right"] as const;
              return (
                <Reveal key={d.title} direction={dirs[i]} delay={i * 80}>
                  <div className="card-float h-full rounded-2xl bg-white p-7 shadow-md shadow-black/6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5.5 w-5.5" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-5 text-xl text-charcoal">{d.title}</h3>
                    <p className="mt-2.5 text-[13.5px] leading-6 text-ink/68">{d.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Who It's For ─────────────────────────────────────── */}
      <section className="bg-white py-10 md:py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal direction="left">
              <p className="institutional-eyebrow">Who It&apos;s For</p>
              <h2 className="mt-4 text-charcoal">
                Built for every stakeholder in the African energy ecosystem.
              </h2>
            </Reveal>
            <Reveal direction="right">
              <div className="flex flex-wrap gap-3">
                {audiences.map((a) => (
                  <span key={a} className="card-float rounded-full border border-border bg-cream px-4 py-2 text-[13px] font-semibold text-charcoal shadow-sm shadow-black/4 transition-shadow hover:shadow-md">
                    {a}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Launching in Four Markets ──────────────────────────── */}
      <section className="bg-primary py-10 text-white md:py-14">
        <Container>
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow-on-dark">Pilot Phase 2026 – 2028</p>
            <h2 className="mt-4 text-white">Launching in Four Markets</h2>
            <p className="mt-5 text-[15px] leading-7 text-white/76">
              Our pilot phase covers four high-priority markets with significant
              energy access gaps, active investment pipelines, and strong data
              availability. Planned expansion to additional African markets follows.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {markets.map((m, i) => (
              <Reveal key={m.name} direction="up" delay={i * 90}>
                <div className="card-float rounded-2xl bg-primary-light p-7 shadow-xl shadow-black/20">
                  <h3 className="mt-4 text-2xl text-white">{m.name}</h3>
                  <p className="mt-2 text-[13px] leading-5 text-white/70">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      {/* ── Stay Informed ────────────────────────────────────── */}
      <section className="bg-white py-10 md:py-14">
        <Container>
          <Reveal>
            <div className="card-float mx-auto max-w-2xl rounded-3xl bg-primary p-10 text-center shadow-2xl shadow-primary/25 md:p-14">
              <p className="eyebrow-on-dark mx-auto">Stay Informed</p>
              <h2 className="mt-4 text-white">Be first to access the platform.</h2>
              <p className="mx-auto mt-4 max-w-lg text-[15px] leading-7 text-white/82">
                Subscribe for launch updates, early access invitations, and
                exclusive market insights from across the African energy sector.
              </p>

              {submitted ? (
                <div className="mt-8 flex items-center justify-center gap-3 rounded-xl bg-white/15 p-5 text-white">
                  <CheckCircle2 className="h-5 w-5 text-gold-light" strokeWidth={1.75} />
                  <p className="text-[14px]">You&apos;re on the list. We&apos;ll be in touch.</p>
                </div>
              ) : (
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-[14px] text-white placeholder-white/40 outline-none focus:border-white/50 focus:bg-white/15"
                  />
                  <button
                    onClick={handleSubscribe}
                    disabled={isSubmitting}
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending…" : "Subscribe"}
                    <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              )}

              {error ? (
                <p className="mt-4 text-[13px] text-white/85">{error}</p>
              ) : null}

              {!submitted && !error ? (
                <p className="mt-5 text-[11px] text-white/45">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              ) : null}

              {submitted ? (
                <p className="mt-5 text-[11px] text-white/45">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              ) : null}
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}