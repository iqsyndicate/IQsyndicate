"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft, CalendarDays, UserRound } from "lucide-react";
import Container from "@/components/ui/Container";
import PublicationBody from "@/components/insights/PublicationBody";
import { getPublishedPublicationBySlug, type Publication } from "@/lib/insights";

export default function PublicationReader() {
  const { slug } = useParams<{ slug: string }>();
  const [publication, setPublication] = useState<Publication | null>(null);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    getPublishedPublicationBySlug(slug)
      .then((item) => {
        if (active) setPublication(item);
      })
      .catch(() => {
        if (active) setFailed(true);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => { active = false; };
  }, [slug]);

  if (loading) {
    return <div className="min-h-[65vh] animate-pulse bg-cream" aria-label="Loading publication" />;
  }

  if (failed || !publication) {
    return (
      <section className="min-h-[65vh] bg-cream py-24">
        <Container>
          <p className="institutional-eyebrow">Publication</p>
          <h1 className="mt-4 text-4xl text-charcoal">This article is unavailable.</h1>
          <Link href="/insights" className="mt-8 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
            <ArrowLeft size={15} /> Back to insights
          </Link>
        </Container>
      </section>
    );
  }

  const publishedDate = publication.publishedAt?.toDate().toLocaleDateString("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="bg-white pb-20">
      <Container>
        <div className="border-b border-border py-5">
          <Link href="/insights" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-ink/55 transition-colors hover:text-primary">
            <ArrowLeft size={14} /> Insights library
          </Link>
        </div>
        <header className="mx-auto max-w-4xl py-12 md:py-16">
          <p className="institutional-eyebrow">
            {publication.section === "introduction" ? "Introduction" : "Insights / Publication"}
          </p>
          <h1 className="mt-5 text-charcoal">{publication.title}</h1>
          <p className="mt-6 max-w-3xl font-heading text-2xl leading-snug text-ink/64 md:text-3xl">
            {publication.excerpt}
          </p>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-5 text-[11px] font-semibold uppercase tracking-[0.11em] text-ink/52">
            <span className="inline-flex items-center gap-2"><UserRound size={14} className="text-gold-dark" /> {publication.authorName}</span>
            {publishedDate ? <span className="inline-flex items-center gap-2"><CalendarDays size={14} className="text-gold-dark" /> {publishedDate}</span> : null}
          </div>
        </header>

        {publication.coverImage ? (
          <figure className="relative mx-auto mb-14 aspect-[16/8] max-h-[620px] max-w-6xl overflow-hidden bg-sand">
            <Image src={publication.coverImage} alt="" fill unoptimized priority sizes="(min-width: 1200px) 1152px, 100vw" className="object-cover" />
          </figure>
        ) : null}

        <div className="mx-auto max-w-3xl">
          <PublicationBody content={publication.content} />
        </div>
        <footer className="mx-auto mt-16 max-w-3xl border-t border-border pt-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-dark">More perspectives</p>
          <Link href="/insights" className="mt-4 inline-flex items-center gap-2 font-heading text-2xl text-primary hover:text-primary-light">
            Return to the Insights library <ArrowLeft size={18} />
          </Link>
        </footer>
      </Container>
    </article>
  );
}
