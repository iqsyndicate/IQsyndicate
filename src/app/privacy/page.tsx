import type { Metadata } from "next";
import { Lock, Eye, Share2, Shield, Clock, FileText, Mail, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Our commitment to protecting your privacy. Learn how we collect, use, and safeguard your personal information.",
};

const overview = [
  { icon: Lock, title: "Data Collection", body: "We collect information you provide directly and data gathered automatically when you use our website.", tone: "bg-primary text-white" },
  { icon: Eye, title: "Transparency", body: "We are transparent about what data we collect and how we use it to improve your experience.", tone: "bg-forest text-white" },
  { icon: Share2, title: "Sharing Policy", body: "We do not sell your data. We only share information with trusted providers and when legally required.", tone: "bg-gold-dark text-white" },
  { icon: Shield, title: "Security", body: "Your information is protected with encryption and layered security controls.", tone: "bg-ink text-white" },
];

const rights = [
  { icon: Eye, title: "Access", body: "Request a copy of your personal information" },
  { icon: FileText, title: "Correction", body: "Request corrections to inaccurate information" },
  { icon: Lock, title: "Deletion", body: "Request deletion of your personal information" },
  { icon: Mail, title: "Opt-Out", body: "Opt out of promotional communications" },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="grain bg-cream py-14 md:py-18">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <Reveal direction="down">
              <p className="institutional-eyebrow">Privacy Policy</p>
              <h1 className="mt-5 text-charcoal">Your data and how it is handled.</h1>
              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-ink/74">
                We are committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard your personal information.
              </p>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/45">
                Effective Date: July 12, 2026
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-10 md:py-14">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {overview.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} direction={i % 2 === 0 ? "up" : "right"} delay={i * 70}>
                  <div className={`flex h-full min-h-[230px] flex-col rounded-2xl p-6 shadow-lg shadow-black/5 ${item.tone}`}>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                      <Icon className="h-5.5 w-5.5" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-5 font-semibold">{item.title}</h3>
                    <p className="mt-3 text-[13.5px] leading-6 opacity-90">{item.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-10 md:py-14">
        <Container>
          <div className="space-y-8">
            <Reveal direction="left">
              <p className="institutional-eyebrow">Information We Collect</p>
              <p className="mt-4 max-w-3xl text-[15px] leading-7 text-ink/72">
                We collect information that you provide directly to us, as well as information that is gathered automatically when you use our website.
              </p>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { title: "Personal Information", items: ["Full name or founder name(s) and email address", "Organization or company name, professional title, and role", "Venture-specific information and revenue stage", "Account login credentials and communication preferences"] },
                { title: "Automatic Data", items: ["IP address and device identifiers", "Pages viewed and time spent on website", "Cookies and tracking technologies", "Referring URL and search terms"] },
              ].map((group, i) => (
                <Reveal key={group.title} direction={i === 0 ? "left" : "right"} delay={i * 70}>
                  <div className="flex h-full min-h-[260px] flex-col rounded-2xl border border-border bg-white p-6 shadow-sm shadow-black/5">
                    <h3 className="font-semibold text-charcoal">{group.title}</h3>
                    <ul className="mt-5 space-y-3">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-3 text-[13.5px] leading-6 text-ink/72">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-10 md:py-14">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="institutional-eyebrow">How We Use Your Information</p>
          </Reveal>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {[
              "To provide, maintain, and improve our services",
              "To create and manage your account and authenticate your identity",
              "To respond to your inquiries and customer support needs",
              "To send service-related communications and updates",
              "To analyze usage trends and improve user experience",
              "To detect, prevent, and address fraud and security issues",
            ].map((item, i) => (
              <Reveal key={item} direction={i % 2 === 0 ? "left" : "right"} delay={i * 45}>
                <div className="flex gap-3 rounded-2xl border border-border bg-cream p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
                  <p className="text-[14px] leading-6 text-ink/72">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-10 md:py-14">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="institutional-eyebrow">Your Rights</p>
          </Reveal>
              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {rights.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Reveal key={item.title} delay={i * 60}>
                      <div className="flex h-full min-h-[170px] flex-col rounded-2xl border border-border bg-white p-6 shadow-sm shadow-black/5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </div>
                        <h3 className="mt-4 font-semibold text-charcoal">{item.title}</h3>
                        <p className="mt-2 text-[13px] leading-5 text-ink/68">{item.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-10 md:py-14">
        <Container>
          <Reveal>
            <div className="rounded-[2rem] bg-primary p-8 text-white shadow-2xl shadow-primary/20 md:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">Contact</p>
              <h2 className="mt-4 text-white">Questions about this policy?</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">Email</p>
                  <a href="mailto:hello@iqsyndicate.org" className="mt-2 inline-flex items-center gap-2 font-semibold text-white">
                    hello@iqsyndicate.org
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">Headquarters</p>
                  <p className="mt-2 text-[14px] leading-6 text-white/82">IQ Syndicate, Abuja, Nigeria</p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
