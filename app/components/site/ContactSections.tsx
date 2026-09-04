"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Button from "./Button";
import { SectionSubtitle } from "./SectionHeader";
import ContactForm from "./ContactForm";
import {
  FormationEyebrow,
  FormationSectionTitle,
  SECTION_ACCENT_BG,
  SECTION_ACCENT_SOFT,
  TintedPageSection,
  cardSurfaceOnTintedBg,
  sectionColorAt,
  type SitePage,
} from "./formation/FormationDesign";
import { CONTACT_EMAIL } from "@/app/data/content/site";
import { OFFRE_TO_MOTIF, type ContactMotifId } from "@/app/data/content/contact";

const PAGE: SitePage = "contact";
const color = (i: number) => sectionColorAt(PAGE, i);

type MotifCard = {
  id: ContactMotifId;
  icon: string;
  title: string;
  text: string;
};

type OfferCard = {
  title: string;
  description: string;
  cta: { label: string; href: string };
};

function SectionHeader({
  sectionIndex,
  title,
  subtitle,
  highlight,
}: {
  sectionIndex: number;
  title: string;
  subtitle?: string;
  highlight?: string;
}) {
  const sectionColor = color(sectionIndex);
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mt-4">
        <FormationSectionTitle highlight={highlight} pill={sectionColor}>
          {title}
        </FormationSectionTitle>
      </div>
      {subtitle && (
        <SectionSubtitle align="center" className="mt-5">
          {subtitle}
        </SectionSubtitle>
      )}
    </div>
  );
}

export function ContactMotifSection({
  title,
  cards,
}: {
  title: string;
  cards: MotifCard[];
}) {
  const searchParams = useSearchParams();
  const motifParam = searchParams.get("motif");
  const offreParam = searchParams.get("offre");
  const activeMotif: ContactMotifId | "" =
    (motifParam as ContactMotifId) ||
    (offreParam ? (OFFRE_TO_MOTIF[offreParam] ?? "") : "");
  const sectionColor = color(2);
  const accent = SECTION_ACCENT_SOFT[sectionColor];

  return (
    <TintedPageSection pillColor={sectionColor}>
      <SectionHeader sectionIndex={2} title={title} highlight="besoin" />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => {
          const isActive = activeMotif === card.id;
          return (
            <Link
              key={card.id}
              href={`/contact?motif=${card.id}#formulaire`}
              className={`group flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 ${
                isActive
                  ? `${cardSurfaceOnTintedBg("rounded-2xl")} ring-2 ring-[#6366F1]/20`
                  : cardSurfaceOnTintedBg("rounded-2xl")
              }`}
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-2xl transition-transform group-hover:scale-110 ${accent.bg}`}>
                {card.icon}
              </span>
              <h3 className="mt-4 text-lg font-bold leading-snug text-[#0B0B0B]">{card.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#515154]">{card.text}</p>
              <span className={`mt-4 text-sm font-semibold ${accent.text} group-hover:underline`}>
                Sélectionner ce motif →
              </span>
            </Link>
          );
        })}
      </div>
    </TintedPageSection>
  );
}

export function ContactFormSection({
  title,
  intro,
}: {
  title: string;
  intro: string;
}) {
  const sectionColor = color(3);

  return (
    <TintedPageSection id="formulaire" pillColor={sectionColor}>
      <SectionHeader sectionIndex={3} title={title} subtitle={intro} highlight="message" />
      <div className={`mx-auto mt-12 max-w-3xl p-6 md:p-10 ${cardSurfaceOnTintedBg("rounded-[32px]")}`}>
        <Suspense fallback={<div className="text-center text-[#515154]">Chargement…</div>}>
          <ContactForm />
        </Suspense>
      </div>
    </TintedPageSection>
  );
}

export function ContactExamplesSection({
  title,
  intro,
  examples,
}: {
  title: string;
  intro: string;
  examples: string[];
}) {
  const sectionColor = color(4);

  return (
    <TintedPageSection pillColor={sectionColor}>
      <SectionHeader sectionIndex={4} title={title} subtitle={intro} highlight="écrire" />
      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {examples.map((example, i) => (
          <blockquote
            key={i}
            className={`relative p-6 ${cardSurfaceOnTintedBg("rounded-2xl")}`}
          >
            <span
              className="absolute -left-1 -top-3 text-5xl font-serif leading-none text-[#EE6B6E]/20"
              aria-hidden
            >
              &ldquo;
            </span>
            <p className="relative text-sm italic leading-relaxed text-[#515154] md:text-base">
              {example}
            </p>
          </blockquote>
        ))}
      </div>
    </TintedPageSection>
  );
}

export function DiagnosticHighlightSection({
  title,
  subtitle,
  text,
  bulletsTitle,
  bullets,
  cta,
}: {
  title: string;
  subtitle: string;
  text: string;
  bulletsTitle: string;
  bullets: string[];
  cta: { label: string; href: string };
}) {
  const sectionColor = color(5);

  return (
    <TintedPageSection pillColor={sectionColor}>
      <div className={`p-8 md:p-14 ${cardSurfaceOnTintedBg("rounded-[34px]")}`}>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <FormationSectionTitle highlight="diagnostic" pill={sectionColor}>
              {title}
            </FormationSectionTitle>
            <p className="mt-4 text-lg font-semibold text-[#6366F1]">{subtitle}</p>
            <p className="mt-4 text-base leading-relaxed text-[#515154] md:text-lg">{text}</p>
            <div className="mt-8">
              <Button href={cta.href} variant="parent">
                {cta.label}
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-[#6366F1]/15 bg-[#EEF2FF]/40 p-6">
            <p className="text-sm font-bold uppercase tracking-widest text-[#6366F1]">
              {bulletsTitle}
            </p>
            <ul className="mt-4 space-y-3">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm text-[#0B0B0B]">
                  <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white ${SECTION_ACCENT_BG[sectionColor]}`}>
                    ?
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </TintedPageSection>
  );
}

export function ContactOffersSection({
  title,
  cards,
}: {
  title: string;
  cards: OfferCard[];
}) {
  const sectionColor = color(6);

  return (
    <TintedPageSection pillColor={sectionColor}>
      <SectionHeader sectionIndex={6} title={title} highlight="offres" />
      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {cards.map((card) => (
          <article
            key={card.title}
            className={`group flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 ${cardSurfaceOnTintedBg("rounded-2xl")}`}
          >
            <h3 className="text-xl font-bold text-[#0B0B0B]">{card.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[#515154]">
              {card.description}
            </p>
            <div className="mt-6">
              <Button href={card.cta.href} variant="parentOutline">
                {card.cta.label}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </TintedPageSection>
  );
}

export function ContactDirectSection({
  title,
  zone,
  responseTime,
  socials,
}: {
  title: string;
  zone: string;
  responseTime: string;
  socials: string[];
}) {
  const sectionColor = color(8);

  return (
    <TintedPageSection pillColor={sectionColor}>
      <SectionHeader sectionIndex={8} title={title} highlight="direct" />
      <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
        <div className={`flex items-start gap-4 p-6 ${cardSurfaceOnTintedBg("rounded-2xl")}`}>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#fde8e8] text-xl">
            ✉️
          </span>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#515154]">Email</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-1 block text-lg font-bold text-[#EE6B6E] hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
        <div className={`flex items-start gap-4 p-6 ${cardSurfaceOnTintedBg("rounded-2xl")}`}>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EEF2FF] text-xl">
            📍
          </span>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#515154]">
              Zone / format
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[#0B0B0B]">{zone}</p>
          </div>
        </div>
        <div className={`flex items-start gap-4 p-6 ${cardSurfaceOnTintedBg("rounded-2xl")}`}>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ecfdf5] text-xl">
            ⏱️
          </span>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#515154]">
              Horaires de réponse
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[#0B0B0B]">{responseTime}</p>
          </div>
        </div>
        <div className={`flex items-start gap-4 p-6 ${cardSurfaceOnTintedBg("rounded-2xl")}`}>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#fff8e7] text-xl">
            🌐
          </span>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#515154]">
              Réseaux sociaux
            </p>
            <p className="mt-1 text-sm text-[#8E8E93]">{socials.join(" · ")}</p>
          </div>
        </div>
      </div>
    </TintedPageSection>
  );
}

export function ContactMotifSectionWithSuspense(
  props: Parameters<typeof ContactMotifSection>[0],
) {
  return (
    <Suspense fallback={null}>
      <ContactMotifSection {...props} />
    </Suspense>
  );
}
