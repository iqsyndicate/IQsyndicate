"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Mail, Users, Handshake, ArrowUpRight } from "lucide-react";

type FormKey = "founders" | "investors" | "partners";

type Field =
  | {
      name: string;
      label: string;
      type: "text" | "email" | "select";
      required?: boolean;
      placeholder?: string;
      options?: string[];
    }
  | {
      name: string;
      label: string;
      type: "textarea";
      required?: boolean;
      placeholder?: string;
    };

type FormConfig = {
  key: FormKey;
  title: string;
  eyebrow: string;
  icon: React.ComponentType<{ className?: string }>;
  summary: string;
  success: string;
  description: string;
  fields: Field[];
};

const configs: FormConfig[] = [
  {
    key: "founders",
    title: "Apply for the Technical Assistance Programme",
    eyebrow: "For founders",
    icon: Users,
    summary:
      "For indigenous African climate entrepreneurs at the pre-Series A stage.",
    success:
      "Thank you for your application. We review all submissions and aim to respond within 15 business days.",
    description:
      "Tell us about the venture, the stage you are at, and the support you are seeking.",
    fields: [
      { name: "ventureName", label: "Venture name", type: "text", required: true },
      { name: "founderName", label: "Founder name(s)", type: "text", required: true },
      { name: "email", label: "Email address", type: "email", required: true },
      {
        name: "sector",
        label: "Sector",
        type: "select",
        required: true,
        options: [
          "Off-grid energy",
          "Climate-smart agriculture",
          "Clean cooking",
          "Climate adaptation",
          "Circular economy",
          "Sustainable mobility",
        ],
      },
      { name: "country", label: "Country of operation", type: "text", required: true },
      {
        name: "revenueStage",
        label: "Revenue stage",
        type: "select",
        required: true,
        options: ["Pilot validated", "Early revenue", "Scaling revenue", "Asset deployed"],
      },
      {
        name: "ventureDescription",
        label: "Brief venture description",
        type: "textarea",
        required: true,
        placeholder: "Maximum 300 words.",
      },
      {
        name: "support",
        label: "What support are you seeking?",
        type: "textarea",
        required: true,
      },
    ],
  },
  {
    key: "investors",
    title: "Request the LP Information Pack",
    eyebrow: "For investors / LPs",
    icon: Mail,
    summary:
      "For philanthropic foundations, DFIs, and impact-aligned capital partners.",
    success:
      "Thank you. We will share the information pack and follow up with the relevant materials.",
    description:
      "Share your organisation details and the area of interest that brought you here.",
    fields: [
      { name: "fullName", label: "Full name", type: "text", required: true },
      { name: "organisation", label: "Organisation", type: "text", required: true },
      { name: "role", label: "Role / Title", type: "text", required: true },
      { name: "email", label: "Email address", type: "email", required: true },
      {
        name: "interest",
        label: "Area of interest",
        type: "select",
        required: true,
        options: [
          "LP commitment",
          "Facility overview",
          "Term sheet review",
          "General conversation",
        ],
      },
      {
        name: "message",
        label: "Message or specific area of interest",
        type: "textarea",
        required: true,
      },
    ],
  },
  {
    key: "partners",
    title: "Partner With we",
    eyebrow: "For partners",
    icon: Handshake,
    summary:
      "For accelerators, bilateral agencies, multilateral institutions, and ecosystem organisations.",
    success:
      "Thank you for reaching out. We will review the partnership note and respond with next steps.",
    description:
      "Tell us how you would like to collaborate and which portfolio areas matter most to you.",
    fields: [
      { name: "fullName", label: "Full name", type: "text", required: true },
      { name: "organisation", label: "Organisation", type: "text", required: true },
      {
        name: "partnership",
        label: "Nature of partnership",
        type: "select",
        required: true,
        options: [
          "Referral agreement",
          "Co-delivery TA",
          "Data and intelligence",
          "Other",
        ],
      },
      { name: "email", label: "Email address", type: "email", required: true },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        required: true,
      },
    ],
  },
];

export default function ApplyForms() {
  const [active, setActive] = useState<FormKey>("founders");
  const [submitted, setSubmitted] = useState<FormKey | null>(null);

  const current = useMemo(
    () => configs.find((config) => config.key === active) ?? configs[0],
    [active]
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(active);
  };

  return (
    <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
      <aside className="space-y-6">
        <div className="rounded-[2rem] border border-border bg-white p-6 shadow-[0_20px_60px_rgba(20,20,20,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Pathways
          </p>
          <div className="mt-5 space-y-3">
            {configs.map((config) => {
              const Icon = config.icon;
              const selected = config.key === active;
              return (
                <button
                  key={config.key}
                  type="button"
                  onClick={() => setActive(config.key)}
                  className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-all ${
                    selected
                      ? "border-primary bg-primary text-white"
                      : "border-border bg-sand/35 text-charcoal hover:border-primary/30"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                      selected ? "bg-white/15" : "bg-white"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${selected ? "text-white" : "text-primary"}`}
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-[0.24em] opacity-70">
                      {config.eyebrow}
                    </span>
                    <span className="mt-1 block text-sm leading-6">
                      {config.summary}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-[#151515] p-6 text-white shadow-[0_20px_60px_rgba(20,20,20,0.18)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
            What happens next
          </p>
          <div className="mt-5 space-y-4 text-sm leading-7 text-white/72">
            <p>{current.description}</p>
            <p>
              Our team reviews each submission carefully and follows up with the
              appropriate next step, whether that is a programme review, an LP
              conversation, or a partnership discussion.
            </p>
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
              Expected response
            </p>
            <p className="mt-2 text-sm leading-6 text-white/80">
              15 business days or less for founder applications. Other enquiries
              are acknowledged as soon as the relevant team has reviewed them.
            </p>
          </div>
        </div>
      </aside>

      <section className="rounded-[2rem] border border-border bg-white p-6 shadow-[0_20px_60px_rgba(20,20,20,0.06)] md:p-8">
        {submitted === active ? (
          <div
            className="mb-6 rounded-2xl border border-primary/20 bg-primary-pale px-5 py-4 text-sm leading-7 text-primary"
            aria-live="polite"
          >
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" />
              <p>{current.success}</p>
            </div>
          </div>
        ) : null}

        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex rounded-full bg-primary-pale px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
            {current.eyebrow}
          </span>
          <p className="text-sm text-ink/55">{current.summary}</p>
        </div>

        <h2 className="mt-5 max-w-2xl font-heading text-4xl leading-[0.98] text-charcoal md:text-5xl">
          {current.title}
        </h2>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            {current.fields.map((field) => (
              <label key={field.name} className="block">
                <span className="mb-2 block text-sm font-medium text-charcoal">
                  {field.label}
                  {field.required ? <span className="text-primary"> *</span> : null}
                </span>
                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    required={field.required}
                    placeholder={field.placeholder}
                    rows={field.name === "ventureDescription" || field.name === "message" ? 5 : 4}
                    className="w-full rounded-2xl border border-border bg-[#fcfaf6] px-4 py-3 text-sm leading-7 text-charcoal outline-none transition-all placeholder:text-ink/35 focus:border-primary focus:bg-white"
                  />
                ) : field.type === "select" ? (
                  <select
                    name={field.name}
                    required={field.required}
                    className="w-full rounded-2xl border border-border bg-[#fcfaf6] px-4 py-3 text-sm text-charcoal outline-none transition-all focus:border-primary focus:bg-white"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {field.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    placeholder={field.placeholder}
                    className="w-full rounded-2xl border border-border bg-[#fcfaf6] px-4 py-3 text-sm text-charcoal outline-none transition-all placeholder:text-ink/35 focus:border-primary focus:bg-white"
                  />
                )}
              </label>
            ))}
          </div>

          <div className="flex flex-col gap-4 pt-2 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-sm leading-7 text-ink/60">
              By submitting this form you confirm that the information provided
              is accurate to the best of your knowledge and that you understand
              we&apos;s review process.
            </p>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-light hover:-translate-y-0.5"
            >
              Submit Application
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
