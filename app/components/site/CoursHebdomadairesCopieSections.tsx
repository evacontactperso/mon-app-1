"use client";

import Link from "next/link";
import Button from "./Button";
import { SectionSubtitle } from "./SectionHeader";
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

const PAGE: SitePage = "cours";
const color = (i: number) => sectionColorAt(PAGE, i);

function SectionHeader({
  page = PAGE,
  sectionIndex,
  eyebrow,
  title,
  subtitle,
  highlight,
}: {
  page?: SitePage;
  sectionIndex: number;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  highlight?: string;
}) {
  const sectionColor = sectionColorAt(page, sectionIndex);
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <FormationEyebrow>{eyebrow}</FormationEyebrow>}
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

type StepCard = { icon: string; title: string; text: string };

export function WeeklyPrincipleSection({
  eyebrow,
  title,
  steps,
  closing,
}: {
  eyebrow?: string;
  title: string;
  steps: StepCard[];
  closing: string;
}) {
  const sectionColor = color(1);
  const accent = SECTION_ACCENT_SOFT[sectionColor];

  return (
    <TintedPageSection pillColor={sectionColor}>
      <SectionHeader sectionIndex={1} eyebrow={eyebrow} title={title} highlight="pack" />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {steps.map((step, i) => (
          <article
            key={step.title}
            className={`group p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${cardSurfaceOnTintedBg()}`}
          >
            <span className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-3xl transition-transform group-hover:scale-110 ${accent.bg}`}>
              {step.icon}
            </span>
            <p className={`mt-4 text-xs font-bold uppercase tracking-widest ${accent.text}`}>
              Étape {i + 1}
            </p>
            <h3 className="mt-2 text-lg font-bold text-[#0B0B0B]">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#515154]">{step.text}</p>
          </article>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-bold text-[#0B0B0B]">
        {closing}
      </p>
    </TintedPageSection>
  );
}

export function WeeklyFormatCompareSection({
  page = PAGE,
  sectionIndex,
  eyebrow,
  title,
  subtitle,
  cards,
  callout,
  highlight = "format",
}: {
  page?: SitePage;
  sectionIndex: number;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cards: { icon: string; title: string; text: string }[];
  callout: string;
  highlight?: string;
}) {
  const sectionColor = sectionColorAt(page, sectionIndex);

  return (
    <TintedPageSection pillColor={sectionColor}>
      <SectionHeader
        page={page}
        sectionIndex={sectionIndex}
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        highlight={highlight}
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        {cards.map((card) => (
          <article
            key={card.title}
            className={`p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${cardSurfaceOnTintedBg()}`}
          >
            <span className="text-3xl">{card.icon}</span>
            <h3 className="mt-4 font-bold text-[#0B0B0B]">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#515154]">{card.text}</p>
          </article>
        ))}
      </div>
      <p className={`mx-auto mt-10 max-w-2xl p-6 text-center text-sm leading-relaxed text-[#515154] ${cardSurfaceOnTintedBg()}`}>
        {callout}
      </p>
    </TintedPageSection>
  );
}

export function SessionTimelineSection({
  page = PAGE,
  sectionIndex,
  eyebrow,
  title,
  phases,
  closing,
  highlight = "rythme",
}: {
  page?: SitePage;
  sectionIndex: number;
  eyebrow?: string;
  title: string;
  phases: { time: string; title: string; text: string }[];
  closing: string;
  highlight?: string;
}) {
  const sectionColor = sectionColorAt(page, sectionIndex);

  return (
    <TintedPageSection pillColor={sectionColor}>
      <SectionHeader page={page} sectionIndex={sectionIndex} eyebrow={eyebrow} title={title} highlight={highlight} />
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {phases.map((phase, i) => (
          <article key={phase.time} className={`relative p-5 ${cardSurfaceOnTintedBg("rounded-[28px]")}`}>
            <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold text-white ${SECTION_ACCENT_BG[sectionColor]}`}>
              {phase.time}
            </span>
            <h3 className="mt-4 font-bold text-[#0B0B0B]">{phase.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#515154]">{phase.text}</p>
            {i < phases.length - 1 && (
              <span className={`absolute -right-2 top-1/2 hidden -translate-y-1/2 lg:block ${SECTION_ACCENT_SOFT[sectionColor].text}`} aria-hidden>
                →
              </span>
            )}
          </article>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-bold text-[#0B0B0B]">
        {closing}
      </p>
    </TintedPageSection>
  );
}

export function SessionPathsSection({
  eyebrow,
  title,
  items,
  cta,
}: {
  eyebrow?: string;
  title: string;
  items: { profile: string; sessions: string[] }[];
  cta: { label: string; href: string };
}) {
  const sectionColor = color(6);

  return (
    <TintedPageSection pillColor={sectionColor}>
      <SectionHeader sectionIndex={6} eyebrow={eyebrow} title={title} highlight="séances" />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <article key={item.profile} className={`p-6 ${cardSurfaceOnTintedBg()}`}>
            <span className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-white ${SECTION_ACCENT_BG[sectionColor]}`}>
              {i + 1}
            </span>
            <h3 className="mt-4 font-bold text-[#0B0B0B]">{item.profile}</h3>
            <p className="mt-2 text-xs font-bold uppercase tracking-widest text-[#6366F1]">
              Commencer par
            </p>
            <ul className="mt-2 space-y-1.5">
              {item.sessions.map((s) => (
                <li key={s} className="text-sm text-[#515154]">
                  • {s}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button href={cta.href} variant="parent">
          {cta.label}
        </Button>
      </div>
    </TintedPageSection>
  );
}

export function GroupBenefitsSection({
  eyebrow,
  title,
  cards,
  closing,
}: {
  eyebrow?: string;
  title: string;
  cards: { icon: string; title: string; text: string }[];
  closing: string;
}) {
  const sectionColor = color(7);
  const accent = SECTION_ACCENT_SOFT[sectionColor];

  return (
    <TintedPageSection pillColor={sectionColor}>
      <SectionHeader sectionIndex={7} eyebrow={eyebrow} title={title} highlight="groupe" />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {cards.map((card) => (
          <article key={card.title} className={`p-6 text-center ${cardSurfaceOnTintedBg()}`}>
            <span className="text-4xl">{card.icon}</span>
            <h3 className="mt-4 font-bold text-[#0B0B0B]">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#515154]">{card.text}</p>
          </article>
        ))}
      </div>
      <p className={`mx-auto mt-10 max-w-2xl text-center text-lg font-bold ${accent.text}`}>
        {closing}
      </p>
    </TintedPageSection>
  );
}

export function SessionOutcomesSection({
  eyebrow,
  title,
  items,
  closing,
}: {
  eyebrow?: string;
  title: string;
  items: string[];
  closing: string;
}) {
  const sectionColor = color(8);

  return (
    <TintedPageSection pillColor={sectionColor}>
      <SectionHeader sectionIndex={8} eyebrow={eyebrow} title={title} highlight="concret" />
      <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item}
            className={`flex items-start gap-3 px-4 py-3.5 ${cardSurfaceOnTintedBg("rounded-2xl")}`}
          >
            <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white ${SECTION_ACCENT_BG[sectionColor]}`}>
              ✓
            </span>
            <span className="text-sm text-[#0B0B0B]">{item}</span>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-bold text-[#0B0B0B]">
        {closing}
      </p>
    </TintedPageSection>
  );
}

export function NotForSection({
  page = PAGE,
  sectionIndex,
  eyebrow,
  title,
  items,
  closing,
  highlight = "adapté",
}: {
  page?: SitePage;
  sectionIndex: number;
  eyebrow?: string;
  title: string;
  items: { title: string; text: string; href: string; linkLabel: string }[];
  closing: string;
  highlight?: string;
}) {
  const sectionColor = sectionColorAt(page, sectionIndex);

  return (
    <TintedPageSection pillColor={sectionColor}>
      <SectionHeader page={page} sectionIndex={sectionIndex} eyebrow={eyebrow} title={title} highlight={highlight} />
      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <article key={item.title} className={`p-6 ${cardSurfaceOnTintedBg()}`}>
            <h3 className="font-bold text-[#0B0B0B]">{item.title}</h3>
            <p className="mt-2 text-sm text-[#515154]">{item.text}</p>
            <Link
              href={item.href}
              className="mt-4 inline-block text-sm font-bold text-[#EE6B6E] hover:underline"
            >
              → {item.linkLabel}
            </Link>
          </article>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-[#515154]">
        {closing}
      </p>
    </TintedPageSection>
  );
}

type PackItem = {
  title: string;
  sessions: string;
  description: string;
  idealFor: string[];
  cta: { label: string; href: string };
  badge?: string;
};

export function WeeklyPacksSection({
  id,
  eyebrow,
  title,
  subtitle,
  items,
  callout,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: PackItem[];
  callout: string;
}) {
  const sectionColor = color(11);

  return (
    <TintedPageSection id={id} pillColor={sectionColor}>
      <SectionHeader sectionIndex={11} eyebrow={eyebrow} title={title} subtitle={subtitle} highlight="pack" />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {items.map((pack) => (
          <article
            key={pack.title}
            className={`relative flex flex-col p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)] ${
              pack.badge
                ? "border-[#6366F1]/20 bg-white ring-2 ring-[#6366F1]/10"
                : cardSurfaceOnTintedBg()
            }`}
          >
            {pack.badge && (
              <span className={`absolute -top-3 right-6 rounded-full px-3 py-1 text-xs font-bold text-white ${SECTION_ACCENT_BG[sectionColor]}`}>
                {pack.badge}
              </span>
            )}
            <h3 className="text-xl font-bold text-[#0B0B0B]">{pack.title}</h3>
            <p className="mt-2 text-sm font-semibold text-[#6366F1]">
              Nombre de séances : {pack.sessions}
            </p>
            <p className="mt-2 text-sm text-[#515154]">{pack.description}</p>
            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#515154]">
              Idéal pour
            </p>
            <ul className="mt-3 flex flex-1 flex-col gap-2">
              {pack.idealFor.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#0B0B0B]">
                  <span className="text-[#EE6B6E]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={pack.cta.href} variant="parent">
                {pack.cta.label}
              </Button>
            </div>
          </article>
        ))}
      </div>
      <p className={`mx-auto mt-10 max-w-2xl p-6 text-center text-sm leading-relaxed text-[#515154] ${cardSurfaceOnTintedBg()}`}>
        {callout}
      </p>
    </TintedPageSection>
  );
}

export function PackExamplesSection({
  eyebrow,
  title,
  items,
}: {
  eyebrow?: string;
  title: string;
  items: { title: string; steps: string[] }[];
}) {
  const sectionColor = color(12);

  return (
    <TintedPageSection pillColor={sectionColor}>
      <SectionHeader sectionIndex={12} eyebrow={eyebrow} title={title} highlight="exemples" />
      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {items.map((item, i) => (
          <article key={item.title} className={`p-6 ${cardSurfaceOnTintedBg()}`}>
            <span className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-white ${SECTION_ACCENT_BG[sectionColor]}`}>
              {i + 1}
            </span>
            <h3 className="mt-4 font-bold text-[#0B0B0B]">{item.title}</h3>
            <ol className="mt-4 space-y-2">
              {item.steps.map((step, j) => (
                <li key={step} className="flex items-start gap-2 text-sm text-[#515154]">
                  <span className="font-bold text-[#6366F1]">{j + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </TintedPageSection>
  );
}
