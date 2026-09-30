"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, CirclePlus, FileText } from "lucide-react";
import Container from "@/components/ui/Container";
import { isFirebaseConfigured } from "@/lib/firebase";
import { getPublishedPublications, type Publication, type PublicationSection } from "@/lib/insights";

const sections: { id: PublicationSection; label: string }[] = [
  { id: "introduction", label: "Introduction" },
  { id: "insights", label: "Insights" },
];

const editorialThemes = [
  {
    number: "01",
    title: "Climate finance",
    body: "How capital can move further, reach earlier, and work harder for African-led climate ventures.",
    tone: "border-primary",
  },
  {
    number: "02",
    title: "Market intelligence",
    body: "Clear-eyed analysis of the markets, policy shifts, and technologies reshaping the continent.",
    tone: "border-forest",
  },
  {
    number: "03",
    title: "Locally led growth",
    body: "Evidence and perspectives grounded in the people building Africa's climate future.",
    tone: "border-gold-dark",
  },
];

const quoteTones = ["bg-primary", "bg-forest", "bg-forest-deep"];

function articleText(value: unknown): string {
  if (Array.isArray(value)) return value.map(articleText).filter(Boolean).join(" ");
  if (!value || typeof value !== "object") return "";
  const node = value as { type?: string; text?: string; content?: unknown[] };
  if (node.type === "text") return node.text ?? "";
  return node.content ? articleText(node.content) : "";
}

function publicationDate(publication: Publication) {
  return publication.publishedAt?.toDate().toLocaleDateString("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }) ?? "Recently published";
}

function ArticleCard({ publication, featured = false }: { publication: Publication; featured?: boolean }) {
  return (
    <article className={`group grid overflow-hidden border border-border bg-white ${featured ? "md:grid-cols-[1.02fr_0.98fr]" : "md:grid-cols-[0.72fr_1.28fr]"}`}>
      <Link href={`/insights/${publication.slug}`} className={`relative block overflow-hidden bg-sand ${featured ? "min-h-64 md:min-h-[360px]" : "min-h-56 md:min-h-64"}`} aria-label={`Read ${publication.title}`}>
        {publication.coverImage ? (
          <Image
            src={publication.coverImage}
            alt=""
            fill
            unoptimized
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-forest text-white/80">
            <BookOpen size={38} strokeWidth={1.2} />
          </div>
        )}
        <span className="absolute left-5 top-5 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
          {publication.section === "introduction" ? "Introduction" : "Publication"}
        </span>
      </Link>
      <div className="flex flex-col justify-center p-6 md:p-9 lg:p-12">
        <p className="text-[10px] font-bold uppercase tracking-[0.19em] text-gold-dark">
          {publicationDate(publication)} <span className="px-1.5 text-ink/25">/</span> {publication.authorName}
        </p>
        <h2 className={`mt-4 max-w-2xl text-charcoal ${featured ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"}`}>
          {publication.title}
        </h2>
        <p className="mt-4 max-w-2xl text-[14px] leading-7 text-ink/68 md:text-[15px]">
          {publication.excerpt}
        </p>
        <Link
          href={`/insights/${publication.slug}`}
          className="group/read mt-7 inline-flex w-fit items-center gap-3 border-b border-primary/35 pb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-primary transition-colors hover:border-primary"
        >
          Read publication <ArrowRight className="h-4 w-4 transition-transform group-hover/read:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

function IntroductionCard({ publication, index }: { publication: Publication; index: number }) {
  const isReversed = index % 2 === 1;
  const body = articleText(publication.content).trim() || publication.excerpt;

  return (
    <article className={`grid overflow-hidden bg-stone md:min-h-[330px] ${isReversed ? "md:grid-cols-[minmax(250px,0.48fr)_minmax(0,1fr)]" : "md:grid-cols-[minmax(0,1fr)_minmax(250px,0.48fr)]"}`}>
      <div className={`flex flex-col justify-center px-6 py-8 md:px-8 lg:px-10 ${isReversed ? "md:order-2" : ""}`}>
        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-gold-dark">Introduction / {publicationDate(publication)}</p>
        <h2 className="mt-3 text-2xl text-charcoal md:text-3xl">{publication.title}</h2>
        <p className="mt-4 border-b border-border pb-4 font-heading text-xl leading-snug text-forest">{publication.excerpt}</p>
        <p className="mt-5 line-clamp-4 text-[12px] leading-6 text-ink/62">{body}</p>
        <div className="mt-6 flex items-center justify-between gap-4">
          <Link href={`/insights/${publication.slug}`} className="text-[9px] font-bold uppercase tracking-[0.14em] text-ink/50 transition-colors hover:text-primary">Read more</Link>
          <Link href={`/insights/${publication.slug}`} aria-label={`Read ${publication.title}`} className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/35 text-ink/55 transition-colors hover:border-primary hover:text-primary"><CirclePlus size={17} strokeWidth={1.4} /></Link>
        </div>
      </div>
      <aside className={`flex flex-col justify-between px-7 py-7 text-white md:px-8 md:py-8 ${quoteTones[index % quoteTones.length]} ${isReversed ? "md:order-1" : ""}`}>
        <div className="border-t border-white/55 pt-4">
          <span aria-hidden="true" className="font-heading text-3xl leading-none text-gold-light">”</span>
          <blockquote className="mt-3 font-heading text-xl leading-snug md:text-2xl">{publication.pullQuote || publication.excerpt}</blockquote>
        </div>
        <div className="mt-8 border-b border-white/35 pb-3">
          <p className="text-[10px] font-semibold text-white/90">{publication.authorName}</p>
          <p className="mt-1 text-[9px] text-white/55">IQ Syndicate / {publicationDate(publication)}</p>
        </div>
      </aside>
    </article>
  );
}

export default function InsightsLanding() {
  const [activeSection, setActiveSection] = useState<PublicationSection>("introduction");
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(isFirebaseConfigured);
  const [loadError, setLoadError] = useState(isFirebaseConfigured ? "" : "Insights are being prepared. Please check back soon.");

  useEffect(() => {
    let active = true;
    if (!isFirebaseConfigured) return;
    getPublishedPublications()
      .then((items) => {
        if (active) setPublications(items);
      })
      .catch((queryError: unknown) => {
        const code = (queryError as { code?: string })?.code ?? "unknown";
        console.error("Insights publications query failed", code);
        if (active) {
          setLoadError(code === "failed-precondition"
            ? "The Insights database index is being prepared. A Firebase owner can deploy firestore.indexes.json, then retry."
            : "Publications could not be loaded right now. Please check back soon.");
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => { active = false; };
  }, []);

  const visiblePublications = publications.filter((item) => item.section === activeSection);
  const introFeatured = visiblePublications[0];

  return (
    <div className="min-h-screen bg-white">
      <section className="grain relative overflow-hidden border-b border-white/10 bg-ink text-center text-white">
        <Container className="relative z-10 flex min-h-[205px] flex-col items-center justify-center py-10 md:min-h-[255px] md:py-12">
          <p className="eyebrow-on-dark">IQ Syndicate / Knowledge</p>
          <h1 className="mt-3 text-white">Insights</h1>
          <p className="mt-4 max-w-4xl text-[14px] leading-6 text-white/70 md:text-[15px] md:leading-7">
            Research, field notes, and ideas on financing the infrastructure and enterprises shaping Africa&apos;s climate transition.
          </p>
        </Container>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gold-dark/70" aria-hidden="true" />
      </section>

      <Container>
        <nav aria-label="Insights sections" className="-mx-5 flex justify-center border-b border-border px-5 md:mx-0 md:px-0">
          <div role="tablist" aria-label="Publication sections" className="flex border-t border-border">
          {sections.map((section) => (
            <button
              key={section.id}
              id={`tab-${section.id}`}
              type="button"
              role="tab"
              aria-selected={activeSection === section.id}
              aria-controls={`panel-${section.id}`}
              onClick={() => setActiveSection(section.id)}
              className={`relative min-w-36 border-b-2 px-5 py-4 text-[11px] font-semibold transition-colors ${activeSection === section.id ? "border-forest text-forest" : "border-transparent text-ink/50 hover:text-ink"}`}
            >
              {section.label}
            </button>
          ))}
          </div>
        </nav>

        {activeSection === "introduction" ? (
          <section id="panel-introduction" role="tabpanel" tabIndex={0} aria-labelledby="tab-introduction" className="py-14 md:py-20">
            <div className="mb-10 flex items-center justify-center gap-4 text-center">
              <span className="hidden h-px w-16 bg-forest/65 sm:block" />
              <h2 id="introduction-heading" className="max-w-2xl text-[20px] leading-snug text-forest md:text-2xl">Africa&apos;s climate future will be shaped by connected ideas, people, and capital.</h2>
              <span className="hidden h-px w-16 bg-forest/65 sm:block" />
            </div>
            <div className="grid border-y border-border md:grid-cols-3">
              {editorialThemes.map((theme) => (
                <article key={theme.number} className={`border-b-2 ${theme.tone} px-5 py-5 md:border-b-0 md:border-r md:px-6 md:py-6 last:md:border-r-0`}>
                  <p className="font-heading text-2xl text-gold-dark">{theme.number}</p>
                  <h3 className="mt-2 text-lg text-charcoal">{theme.title}</h3>
                  <p className="mt-2 text-[11px] leading-5 text-ink/62">{theme.body}</p>
                </article>
              ))}
            </div>
            <div className="my-10 flex items-center justify-center gap-4 text-center">
              <span className="hidden h-px w-16 bg-forest/65 sm:block" />
              <p className="max-w-2xl text-[14px] leading-6 text-forest">Perspectives from the work of financing African-led climate infrastructure.</p>
              <span className="hidden h-px w-16 bg-forest/65 sm:block" />
            </div>
            <div className="space-y-7">
              {loading ? <LoadingRows /> : loadError ? <StatusMessage>{loadError}</StatusMessage> : introFeatured ? (
                visiblePublications.map((publication, index) => <IntroductionCard key={publication.id} publication={publication} index={index} />)
              ) : (
                <StatusMessage icon={<FileText size={20} />}>Introduction publications will appear here.</StatusMessage>
              )}
            </div>
          </section>
        ) : (
          <section id="panel-insights" role="tabpanel" tabIndex={0} aria-labelledby="tab-insights" className="py-14 md:py-20">
            <div className="grid items-end gap-5 border-b border-border pb-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="institutional-eyebrow">Analysis / Research / Field notes</p>
                <h2 id="insights-heading" className="mt-3 max-w-3xl text-charcoal">Evidence for decisions that move capital.</h2>
              </div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/45">
                {loading ? "Loading" : `${visiblePublications.length} ${visiblePublications.length === 1 ? "publication" : "publications"}`}
              </p>
            </div>
            <div className="mt-8 space-y-6">
              {loading ? <LoadingRows /> : loadError ? <StatusMessage>{loadError}</StatusMessage> : visiblePublications.length ? (
                visiblePublications.map((publication, index) => <ArticleCard key={publication.id} publication={publication} featured={index === 0} />)
              ) : (
                <StatusMessage icon={<FileText size={20} />}>
                  New research and perspectives will be published here.
                </StatusMessage>
              )}
            </div>
          </section>
        )}
      </Container>
    </div>
  );
}

function LoadingRows() {
  return <div className="h-64 animate-pulse border border-border bg-cream" aria-label="Loading publications" />;
}

function StatusMessage({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <div className="flex min-h-52 flex-col items-center justify-center border border-dashed border-border bg-stone/50 px-6 text-center">
      <span className="mb-4 text-gold-dark">{icon ?? <BookOpen size={21} />}</span>
      <p className="max-w-md text-[14px] leading-6 text-ink/60">{children}</p>
    </div>
  );
}
