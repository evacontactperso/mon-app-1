"use client";

import { useState } from "react";
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

type SessionItem = {
  number: number;
  title: string;
  category: string;
  question: string;
  topics: string[];
  practice: string;
};

type SessionsCatalogSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  items: SessionItem[];
  page?: SitePage;
  sectionIndex?: number;
  highlight?: string;
};

const categoryColors: Record<string, string> = {
  Organisation: "bg-[#EEF2FF] text-[#6366F1]",
  Concentration: "bg-[#fff8e7] text-[#b45309]",
  Fiches: "bg-[#fde8e8] text-[#EE6B6E]",
  Révisions: "bg-[#ddf6f8] text-[#0891b2]",
  Mémorisation: "bg-[#ecfdf5] text-[#047857]",
  Entraînement: "bg-[#fff8e7] text-[#b45309]",
};

export default function SessionsCatalogSection({
  id,
  eyebrow,
  title,
  items,
  page = "cours",
  sectionIndex = 5,
  highlight = "séances",
}: SessionsCatalogSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("Tous");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionColor = sectionColorAt(page, sectionIndex);
  const accent = SECTION_ACCENT_SOFT[sectionColor];

  const categories = [...new Set(items.map((item) => item.category))];
  const filtered =
    activeFilter === "Tous"
      ? items
      : items.filter((item) => item.category === activeFilter);

  return (
    <TintedPageSection id={id} pillColor={sectionColor}>
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow && <FormationEyebrow>{eyebrow}</FormationEyebrow>}
        <div className="mt-4">
          <FormationSectionTitle highlight={highlight} pill={sectionColor}>
            {title}
          </FormationSectionTitle>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setActiveFilter("Tous")}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            activeFilter === "Tous"
              ? `${SECTION_ACCENT_BG[sectionColor]} text-white`
              : "border border-slate-200/60 bg-white text-[#515154] hover:border-slate-300"
          }`}
        >
          Tous
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveFilter(cat)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeFilter === cat
                ? `${SECTION_ACCENT_BG[sectionColor]} text-white`
                : "border border-slate-200/60 bg-white text-[#515154] hover:border-slate-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((session) => {
          const isOpen = openIndex === session.number;
          return (
            <article
              key={session.number}
              className={`overflow-hidden transition-all duration-300 ${
                isOpen
                  ? `${cardSurfaceOnTintedBg()} ring-2 ring-[#6366F1]/10`
                  : cardSurfaceOnTintedBg()
              }`}
            >
              <button
                type="button"
                className="flex w-full flex-col items-start p-5 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : session.number)}
              >
                <div className="flex w-full items-start justify-between gap-3">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white ${SECTION_ACCENT_BG[sectionColor]}`}>
                    {session.number}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform ${accent.text} ${
                      isOpen ? `rotate-180 ${accent.bg}` : "bg-[#F6F7FB]"
                    }`}
                    aria-hidden
                  >
                    ▼
                  </span>
                </div>
                <span
                  className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-bold ${categoryColors[session.category] ?? accent.bg}`}
                >
                  {session.category}
                </span>
                <h3 className="mt-3 font-bold leading-snug text-[#0B0B0B]">{session.title}</h3>
                <p className="mt-2 text-sm italic text-[#515154]">« {session.question} »</p>
              </button>
              {isOpen && (
                <div className={`border-t px-5 py-4 ${accent.bg}/30`}>
                  <p className={`text-xs font-bold uppercase tracking-widest ${accent.text}`}>
                    Ce qu&apos;on travaille
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {session.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2 text-sm text-[#515154]">
                        <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${SECTION_ACCENT_BG[sectionColor]}`} />
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#EE6B6E]">
                    Pratique
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#515154]">{session.practice}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </TintedPageSection>
  );
}
