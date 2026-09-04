"use client";

import { useState } from "react";
import PageSection, { type SectionSize, type SectionTone } from "./PageSection";
import {
  ChevronDown,
  FormationSectionTitle,
  SECTION_ACCENT_SOFT,
  TintedPageSection,
  cardSurfaceOnTintedBg,
  sectionColorAt,
  type SitePage,
} from "./formation/FormationDesign";

type FAQItem = { question: string; answer: string };

type FAQSectionProps = {
  title?: string;
  items: FAQItem[];
  size?: SectionSize;
  tone?: SectionTone;
  page?: SitePage;
  sectionIndex?: number;
  highlight?: string;
};

export default function FAQSection({
  title = "Questions fréquentes",
  items,
  size = "immersive",
  tone = "alt",
  page,
  sectionIndex = 0,
  highlight = "fréquentes",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionColor = page ? sectionColorAt(page, sectionIndex) : null;
  const accent = sectionColor ? SECTION_ACCENT_SOFT[sectionColor] : null;

  const content = (
    <>
      <div className="text-center">
        {sectionColor ? (
          <FormationSectionTitle highlight={highlight} pill={sectionColor}>
            {title}
          </FormationSectionTitle>
        ) : (
          <h2 className="text-3xl font-bold text-[#0B0B0B] md:text-4xl">{title}</h2>
        )}
      </div>
      <div className="mt-12 flex flex-col gap-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.question}
              className={`overflow-hidden transition-all duration-200 ${
                sectionColor
                  ? cardSurfaceOnTintedBg("rounded-2xl")
                  : `rounded-2xl border bg-white shadow-sm ${
                      isOpen ? "border-[#EE6B6E]/30" : "border-slate-200/60"
                    }`
              }`}
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                      isOpen && accent
                        ? `${accent.bg} ${accent.text}`
                        : isOpen
                          ? "bg-[#EE6B6E] text-white"
                          : "bg-[#F6F7FB] text-[#515154]"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span className="font-semibold text-[#0B0B0B]">{item.question}</span>
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform ${
                    accent ? accent.text : "text-[#EE6B6E]"
                  } ${isOpen ? `rotate-180 ${accent?.bg ?? "bg-[#fde8e8]"}` : "bg-[#F6F7FB]"}`}
                  aria-hidden
                >
                  <ChevronDown />
                </span>
              </button>
              {isOpen && (
                <div className={`border-t px-5 py-4 ${accent ? accent.bg + "/30" : "border-[#EE6B6E]/10 bg-[#fef5f5]/50"}`}>
                  <p className="pl-10 text-sm leading-relaxed text-[#515154]">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );

  if (sectionColor) {
    return (
      <TintedPageSection
        pillColor={sectionColor}
        size={size}
        innerClassName="mx-auto max-w-3xl px-4 md:px-6"
      >
        {content}
      </TintedPageSection>
    );
  }

  return (
    <PageSection tone={tone} size={size} innerClassName="mx-auto max-w-3xl px-4 md:px-6">
      {content}
    </PageSection>
  );
}
