"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Sprout,
  Building2,
  Handshake,
  ChevronDown,
  Send,
  CheckCircle2,
  Mail,
  MapPin,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const pathways = [
  {
    id: "founders",
    icon: Sprout,
    label: "For Founders",
    headline: "Apply for the Technical Assistance Programme",
    description:
      "our TA programme is designed for indigenous African climate entrepreneurs at the pre-Series A stage who are operating above the concept stage but below the bankability threshold required for institutional capital.",
    tone: "bg-primary text-white",
    iconTone: "bg-white/15 text-white",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
    imageTone: "photo-duotone-burgundy",
    accentColor: "#6f1c28",
    href: "#founders",
  },
  {
    id: "investors",
    icon: Building2,
    label: "For Investors",
    headline: "Request the LP Information Pack",
    description:
      "If you represent a philanthropic foundation, development finance institution, or impact-aligned investor interested in the Mobilist Facility, we would welcome a conversation.",
    tone: "bg-forest text-white",
    iconTone: "bg-white/15 text-white",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    imageTone: "photo-duotone-forest",
    accentColor: "#1f3d2b",
    href: "#investors",
  },
  {
    id: "partners",
    icon: Handshake,
    label: "For Partners",
    headline: "Partner With we",
    description:
      "We work with accelerators, bilateral agencies, multilateral institutions, and ecosystem organisations through referral agreements, TA co-delivery arrangements, and data and intelligence partnerships.",
    tone: "bg-gold-dark text-white",
    iconTone: "bg-white/15 text-white",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=1200&q=80",
    imageTone: "photo-duotone-gold",
    accentColor: "#8a6a45",
    href: "#partners",
  },
];

const founderEligibility = [
  "Your founding team is majority African-led, with the CEO and at least one co-founder being African nationals resident or operationally based in Africa.",
  "Your venture operates within one of our six priority sectors: off-grid energy, climate-smart agriculture, clean cooking, climate adaptation, circular economy, or sustainable mobility.",
  "Your venture is generating some level of commercial revenue or has completed at least one pilot with validated customer uptake.",
  "You have been actively operating your venture for a minimum of 12 months.",
  "You are willing to participate in a 6–18 month technical assistance programme with an embedded we specialist.",
];

const sectors = [
  "Off-grid & Distributed Energy",
  "Climate-Smart Agriculture",
  "Clean Cooking",
  "Climate Adaptation & Resilience",
  "Circular Economy & Waste",
  "Sustainable Mobility & Transport",
];

const revenueStages = [
  "Pre-revenue (concept / prototype)",
  "Early revenue (< USD 50K ARR)",
  "Growing revenue (USD 50K–500K ARR)",
  "Established revenue (> USD 500K ARR)",
];

const partnershipTypes = [
  "Referral Agreement",
  "Co-delivery TA",
  "Data & Intelligence",
  "Other",
];

// ─── Reusable form field components ──────────────────────────────────────────
function Field({
  label, name, type = "text", required = true, placeholder = "",
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/60">
        {label}{required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-[14px] text-charcoal placeholder-ink/30 outline-none ring-0 transition focus:border-primary focus:ring-2 focus:ring-primary/15"
      />
    </div>
  );
}

function SelectField({
  label, name, options, required = true,
}: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/60">
        {label}{required && " *"}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          required={required}
          defaultValue=""
          className="w-full appearance-none rounded-xl border border-border bg-white px-4 py-3 pr-10 text-[14px] text-charcoal outline-none ring-0 transition focus:border-primary focus:ring-2 focus:ring-primary/15"
        >
          <option value="" disabled className="text-ink/30">Select…</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
      </div>
    </div>
  );
}

function TextareaField({
  label, name, rows = 4, maxLength, placeholder = "",
}: { label: string; name: string; rows?: number; maxLength?: number; placeholder?: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/60">
        {label} *
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        required
        maxLength={maxLength}
        placeholder={placeholder}
        className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-[14px] text-charcoal placeholder-ink/30 outline-none ring-0 transition focus:border-primary focus:ring-2 focus:ring-primary/15"
      />
      {maxLength && (
        <p className="text-right text-[10.5px] text-ink/40">{maxLength} word max</p>
      )}
    </div>
  );
}

function SuccessBanner({ message }: { message: string }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-forest/8 p-6 ring-1 ring-forest/20">
      <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-forest" strokeWidth={1.75} />
      <p className="text-[14px] leading-6 text-forest">{message}</p>
    </div>
  );
}

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState<Record<string, boolean>>({});
  const [error, setError] = useState<Record<string, string | null>>({});
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(null), 4000);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  function handleSubmit(pathwayId: string) {
    return async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSubmitting((prev) => ({ ...prev, [pathwayId]: true }));
      setError((prev) => ({ ...prev, [pathwayId]: null }));

      const form = e.currentTarget;
      const formData = new FormData(form);
      formData.set("form", pathwayId);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.message || "Unable to send message.");
        }

        setSubmitted((prev) => ({ ...prev, [pathwayId]: true }));
        setToast("Message received. Thank you for reaching out. If you do not see the confirmation email soon, please check your spam folder.");
        form.reset();
      } catch (err) {
        setError((prev) => ({ ...prev, [pathwayId]: err instanceof Error ? err.message : "Unable to send message." }));
      } finally {
        setSubmitting((prev) => ({ ...prev, [pathwayId]: false }));
      }
    };
  }

  return (
    <>
      {toast ? (
        <div className="fixed right-4 top-4 z-50 max-w-sm rounded-2xl border border-forest/20 bg-white px-5 py-4 shadow-2xl shadow-black/10">
          <p className="text-[13px] font-semibold text-charcoal">{toast}</p>
          <p className="mt-1 text-[12px] text-ink/60">A confirmation email has been sent to you.</p>
        </div>
      ) : null}

      {/* ─────────────────────────────────────────────
          HERO - action-first: cream bg, headline,
          three large pathway cards as immediate anchors.
      ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-cream pb-5 pt-20 md:pt-24">
        <div
          className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-primary/6 blur-3xl"
          aria-hidden
        />
        <Container className="relative z-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="institutional-eyebrow">Get in Touch</p>
            <h1 className="mt-5 text-charcoal">Get in Touch</h1>
            <p className="mx-auto mt-6 max-w-xl text-[15.5px] leading-7 text-ink/72">
              Whether you are a climate founder, an institutional investor,
              or a partner organisation, we would like to hear from you.
            </p>
          </Reveal>

          {/* Pathway navigation cards */}
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {pathways.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.id} direction="up" delay={i * 100}>
                  <Link
                    href={p.href}
                    className={`card-float group block overflow-hidden rounded-2xl shadow-xl shadow-black/12`}
                  >
                    <div className="relative h-44">
                      <Image
                        src={p.image}
                        alt={p.label}
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className={`absolute inset-0 ${p.imageTone}`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 flex items-end gap-3 p-5">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${p.iconTone} ${p.tone.split(" ")[0]}`}>
                          <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                        </div>
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/65">Apply</p>
                          <p className="font-heading text-lg text-white">{p.label}</p>
                        </div>
                      </div>
                    </div>
                    <div className={`px-5 py-4 ${p.tone}`}>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/80">
                        {p.headline} →
                      </p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          PATHWAY 1 - FOUNDERS
      ───────────────────────────────────────────── */}
      <section id="founders" className="scroll-mt-28 bg-white py-10 md:py-14">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            {/* Left: intro + eligibility */}
            <Reveal direction="left">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Sprout className="h-5 w-5" strokeWidth={1.75} />
                </div>
              <p className="institutional-eyebrow">Pathway 01: Founders</p>
              </div>
              <h2 className="mt-5 text-charcoal">
                Apply for the Technical Assistance Programme
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-ink/74">
                Our TA programme is designed for indigenous
                African climate entrepreneurs at the pre-Series A stage
                who are operating above the concept stage but below the
                bankability threshold required for institutional capital.
              </p>

              <p className="mt-8 text-[12px] font-semibold uppercase tracking-[0.16em] text-ink/50">
                Eligibility Conditions
              </p>
              <ul className="mt-4 space-y-3">
                {founderEligibility.map((item, i) => (
                  <Reveal key={i} direction="left" delay={i * 60}>
                    <li className="flex items-start gap-3 text-[13.5px] leading-6 text-ink/70">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                      {item}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </Reveal>

            {/* Right: form */}
            <Reveal direction="right">
              <div className="rounded-3xl bg-cream p-8 shadow-lg shadow-black/6 md:p-10">
                <p className="font-heading text-2xl text-charcoal">Submit Your Application</p>

                {submitted["founders"] ? (
                  <div className="mt-8">
                    <SuccessBanner message="Thank you for your application. We review all submissions and aim to respond within 15 business days." />
                  </div>
                ) : (
                  <form onSubmit={handleSubmit("founders")} className="mt-7 space-y-5">
                    <Field label="Venture Name" name="venture_name" placeholder="Your venture's trading name" />
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Founder Name(s)" name="founder_names" placeholder="Full name(s)" />
                      <Field label="Email Address" name="email" type="email" placeholder="you@venture.com" />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <SelectField label="Sector" name="sector" options={sectors} />
                      <Field label="Country of Operation" name="country" placeholder="e.g. Nigeria" />
                    </div>
                    <SelectField label="Revenue Stage" name="revenue_stage" options={revenueStages} />
                    <TextareaField
                      label="Brief Venture Description"
                      name="description"
                      rows={5}
                      maxLength={300}
                      placeholder="Describe your venture, the climate problem it solves, and your traction to date…"
                    />
                    <TextareaField
                      label="What Support Are You Seeking?"
                      name="support_needed"
                      rows={3}
                      placeholder="Financial modelling, legal structuring, market strategy, etc."
                    />
                    {error["founders"] ? (
                      <p className="rounded-xl border border-primary/15 bg-primary/8 px-4 py-3 text-[13px] text-primary">{error["founders"]}</p>
                    ) : null}
                    <button
                      type="submit"
                      disabled={submitting["founders"]}
                      className="group inline-flex w-full items-center justify-center gap-2 bg-primary px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {submitting["founders"] ? "Sending…" : "Submit Application"}
                      <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          PATHWAY 2 - INVESTORS
      ───────────────────────────────────────────── */}
      <section id="investors" className="scroll-mt-28 bg-forest py-10 text-white md:py-14">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            {/* Left: intro */}
            <Reveal direction="left">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white">
                  <Building2 className="h-5 w-5" strokeWidth={1.75} />
                </div>
              <p className="eyebrow-on-dark">Pathway 02: Investors</p>
              </div>
              <h2 className="mt-5 text-white">
                Request the LP Information Pack
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-white/78">
                If you represent a philanthropic foundation, development
                finance institution, or impact-aligned investor interested
                in the Mobilist Facility, we would welcome a conversation.
              </p>
              <p className="mt-6 text-[15px] leading-7 text-white/78">
                The LP Information Pack includes the full facility term
                sheet, capital structure details, impact framework, and
                indicative return projections.
              </p>

              <div className="card-float mt-8 glass-card rounded-2xl p-6 shadow-xl shadow-black/20">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-light">
                  Anchor LP Target
                </p>
                <p className="mt-2 font-heading text-2xl text-white">
                  Philanthropic foundations and DFIs
                </p>
                <p className="mt-2 text-[13px] leading-5 text-white/68">
                  Open to deploying first-loss or concessional capital at
                  the facility level.
                </p>
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal direction="right">
              <div className="rounded-3xl bg-white/8 p-8 shadow-lg shadow-black/20 ring-1 ring-white/12 md:p-10">
                <p className="font-heading text-2xl text-white">Request Information Pack</p>

                {submitted["investors"] ? (
                  <div className="mt-8">
                    <div className="flex items-start gap-4 rounded-2xl bg-white/10 p-6 ring-1 ring-white/20">
                      <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-gold-light" strokeWidth={1.75} />
                      <p className="text-[14px] leading-6 text-white/85">
                        Thank you for your enquiry. We will send the LP
                        Information Pack to you within 5 business days.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit("investors")} className="mt-7 space-y-5">
                    {[
                      { label: "Full Name", name: "full_name", placeholder: "Your full name" },
                      { label: "Organisation", name: "organisation", placeholder: "Foundation / DFI / fund name" },
                      { label: "Role / Title", name: "role", placeholder: "e.g. Director of Investments" },
                      { label: "Email Address", name: "email", type: "email", placeholder: "you@institution.org" },
                    ].map((f) => (
                      <div key={f.name} className="flex flex-col gap-1.5">
                        <label htmlFor={f.name} className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
                          {f.label} *
                        </label>
                        <input
                          id={f.name}
                          name={f.name}
                          type={f.type ?? "text"}
                          required
                          placeholder={f.placeholder}
                          className="w-full rounded-xl border border-white/20 bg-white/8 px-4 py-3 text-[14px] text-white placeholder-white/25 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/15"
                        />
                      </div>
                    ))}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="investor_message" className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
                        Message or Specific Area of Interest *
                      </label>
                      <textarea
                        id="investor_message"
                        name="investor_message"
                        rows={4}
                        required
                        placeholder="Tell us about your mandate, ticket size range, or specific questions about the Mobilist Facility…"
                        className="w-full resize-none rounded-xl border border-white/20 bg-white/8 px-4 py-3 text-[14px] text-white placeholder-white/25 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/15"
                      />
                    </div>
                    {error["investors"] ? (
                      <p className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-[13px] text-white/90">{error["investors"]}</p>
                    ) : null}
                    <button
                      type="submit"
                      disabled={submitting["investors"]}
                      className="group inline-flex w-full items-center justify-center gap-2 bg-white px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-forest shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gold-light hover:text-ink disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {submitting["investors"] ? "Sending…" : "Request Information Pack"}
                      <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          PATHWAY 3 - PARTNERS
      ───────────────────────────────────────────── */}
      <section id="partners" className="scroll-mt-28 bg-cream py-10 md:py-14">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            {/* Left: intro */}
            <Reveal direction="left">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-dark/12 text-gold-dark">
                  <Handshake className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <p className="institutional-eyebrow" style={{ color: "#8a6a45" }}>Pathway 03: Partners</p>
              </div>
              <h2 className="mt-5 text-charcoal">
                Partner With Us
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-ink/74">
                We work with accelerators, bilateral agencies,
                multilateral institutions, and ecosystem organisations
                through referral agreements, TA co-delivery arrangements,
                and data and intelligence partnerships.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  { type: "Referral Agreement", body: "Refer high-potential climate ventures from your networks to our pipeline." },
                  { type: "Co-delivery TA", body: "Deploy your specialists alongside our team within the TA programme." },
                  { type: "Data & Intelligence", body: "Share origination data, market intelligence, or research with the we team." },
                  { type: "Other", body: "Open to bespoke arrangements that create value for the African climate ecosystem." },
                ].map((item, i) => (
                  <Reveal key={item.type} direction={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                    <div className="card-float h-full rounded-2xl bg-white p-5 shadow-md shadow-black/6">
                      <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-gold-dark">
                        {item.type}
                      </p>
                      <p className="mt-2 text-[13px] leading-5 text-ink/65">{item.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal direction="right">
              <div className="rounded-3xl bg-white p-8 shadow-lg shadow-black/8 md:p-10">
                <p className="font-heading text-2xl text-charcoal">Send an Enquiry</p>

                {submitted["partners"] ? (
                  <div className="mt-8">
                    <SuccessBanner message="Thank you for your enquiry. A member of our team will be in touch within 10 business days." />
                  </div>
                ) : (
                  <form onSubmit={handleSubmit("partners")} className="mt-7 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Full Name" name="partner_name" placeholder="Your full name" />
                      <Field label="Organisation" name="partner_org" placeholder="Your organisation" />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <SelectField
                        label="Nature of Partnership"
                        name="partnership_type"
                        options={partnershipTypes}
                      />
                      <Field label="Email Address" name="partner_email" type="email" placeholder="you@org.com" />
                    </div>
                    <TextareaField
                      label="Message"
                      name="partner_message"
                      rows={4}
                      placeholder="Tell us about your organisation, what you are working on, and how you see the partnership working…"
                    />
                    {error["partners"] ? (
                      <p className="rounded-xl border border-gold-dark/15 bg-gold-dark/8 px-4 py-3 text-[13px] text-gold-dark">{error["partners"]}</p>
                    ) : null}
                    <button
                      type="submit"
                      disabled={submitting["partners"]}
                      className="group inline-flex w-full items-center justify-center gap-2 bg-gold-dark px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gold-dark/90 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {submitting["partners"] ? "Sending…" : "Send Enquiry"}
                      <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          CONTACT INFO + LEGAL DISCLAIMER
      ───────────────────────────────────────────── */}
      <section className="bg-white py-10 md:py-14">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <Reveal direction="left">
              <p className="institutional-eyebrow">Contact Information</p>
              <h2 className="mt-4 max-w-sm text-charcoal">
                Reach us directly.
              </h2>
              <div className="mt-8 space-y-5">
                {[
                  {
                    icon: Mail,
                    label: "General Enquiries",
                    value: "hello@iqsyndicate.org",
                    href: "mailto:hello@iqsyndicate.org",
                  },
                  {
                    icon: MapPin,
                    label: "Office",
                    value: "Abuja, Nigeria",
                    href: null,
                  },
                  // {
                  //   icon: Linkedin,
                  //   label: "LinkedIn",
                  //   value: "we",
                  //   href: "https://linkedin.com",
                  // },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream text-primary">
                        <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink/50">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-0.5 text-[14.5px] text-charcoal transition-colors hover:text-primary"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-[14.5px] text-charcoal">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="card-float rounded-2xl bg-cream p-7 shadow-md shadow-black/5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/40">
                  Legal Disclaimer
                </p>
                <p className="mt-4 text-[13.5px] leading-7 text-ink/62">
                  we do not provide personalised financial
                  investment advice. Information provided on this website
                  is for general informational purposes only and does not
                  constitute an offer or solicitation to invest.
                </p>
                <p className="mt-4 text-[13.5px] leading-7 text-ink/62">
                  we are incorporated in Nigeria as a private
                  limited liability company. This website does not
                  constitute financial advice or an offer to invest.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
