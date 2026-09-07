import PageSection, { type SectionSize, type SectionTone } from "./PageSection";
import SectionHeader from "./SectionHeader";
import { SectionSubtitle } from "./SectionHeader";
import {
  FormationEyebrow,
  FormationSectionTitle,
  SECTION_ACCENT_SOFT,
  TintedPageSection,
  cardSurfaceOnTintedBg,
  sectionColorAt,
  type SitePage,
} from "./formation/FormationDesign";

type ProblemCard = { title: string; text: string; icon?: string };

type ProblemCardsProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  text?: string;
  closing?: string;
  cards: ProblemCard[];
  tone?: SectionTone;
  size?: SectionSize;
  variant?: "default" | "icon" | "problem";
  layout?: "grid" | "stack" | "row";
  accentEdge?: "left" | "top";
  stagger?: boolean;
  page?: SitePage;
  sectionIndex?: number;
  highlight?: string;
};

export default function ProblemCards({
  eyebrow,
  title,
  subtitle,
  text,
  closing,
  cards,
  tone = "warm",
  size = "immersive",
  variant = "default",
  layout = "grid",
  accentEdge = "left",
  stagger = false,
  page,
  sectionIndex = 0,
  highlight,
}: ProblemCardsProps) {
  const isIcon = variant === "icon";
  const isProblem = variant === "problem";
  const sectionColor = page ? sectionColorAt(page, sectionIndex) : null;

  const isRow = layout === "row";

  const gridClass =
    layout === "stack"
      ? "mx-auto max-w-3xl grid-cols-1"
      : "sm:grid-cols-2 lg:grid-cols-3";

  const problemCardClass =
    accentEdge === "top"
      ? "rounded-2xl border border-slate-200/80 border-t-4 border-t-red-400 bg-white shadow-sm hover:shadow-md"
      : "rounded-2xl border border-slate-200/80 border-l-4 border-l-red-400 bg-white shadow-sm hover:shadow-md";

  const renderCard = (card: ProblemCard, i: number, compact = false) => (
    <article
      key={card.title}
      className={`group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        compact ? "h-full" : ""
      } ${
        sectionColor
          ? cardSurfaceOnTintedBg("rounded-2xl") + " p-6"
          : isProblem
            ? problemCardClass + (compact ? " p-4 lg:p-5" : " p-6")
            : isIcon
              ? "rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm hover:border-[#EE6B6E]/20 hover:shadow-md"
              : "rounded-2xl border border-red-100/80 bg-white p-6 shadow-sm hover:border-red-200 hover:shadow-md"
      }`}
      style={stagger && !compact ? { animationDelay: `${i * 80}ms` } : undefined}
    >
      <div
        className={`relative ${isRow || compact ? "flex flex-col gap-3" : "flex items-start gap-4"}`}
      >
        <span
          className={`flex shrink-0 items-center justify-center rounded-xl text-lg ${
            isRow || compact ? "h-10 w-10" : "h-11 w-11"
          } ${
            isIcon && sectionColor
              ? `${SECTION_ACCENT_SOFT[sectionColor].bg} text-xl`
              : isIcon
                ? "bg-gradient-to-br from-[#fde8e8] to-[#EEF2FF] text-xl"
                : isProblem
                  ? "bg-red-50 text-xl"
                  : "bg-red-100 text-red-500"
          }`}
          aria-hidden
        >
          {isIcon || isProblem ? card.icon : "✕"}
        </span>
        <div>
          <h3
            className={`font-bold leading-snug text-[#0B0B0B] ${
              isRow || compact ? "text-sm lg:text-base" : "text-lg"
            }`}
          >
            {card.title}
          </h3>
          <p
            className={`mt-2 leading-relaxed text-[#515154] ${
              isRow || compact ? "text-xs lg:text-sm" : "text-sm"
            }`}
          >
            {card.text}
          </p>
        </div>
      </div>
    </article>
  );

  const content = (
    <>
      {sectionColor ? (
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && <FormationEyebrow>{eyebrow}</FormationEyebrow>}
          <div className="mt-4">
            <FormationSectionTitle highlight={highlight} pill={sectionColor}>
              {title}
            </FormationSectionTitle>
          </div>
          {(subtitle || text) && (
            <SectionSubtitle align="center" className="mt-5">
              {subtitle ?? text}
            </SectionSubtitle>
          )}
        </div>
      ) : (
        <SectionHeader
          eyebrow={eyebrow ?? subtitle}
          title={title}
          subtitle={text ?? subtitle}
          accent="warm"
        />
      )}

      <div
        className={`${isRow ? "mt-12" : "mt-14 grid gap-4"} ${!isRow ? gridClass : ""} ${stagger && !isRow ? "stagger-children" : ""}`}
      >
        {isRow ? (
          <>
            <div className={`hidden gap-3 md:grid md:grid-cols-5 md:gap-4 ${stagger ? "stagger-children" : ""}`}>
              {cards.map((card, i) => renderCard(card, i))}
            </div>
            <div className="space-y-4 md:hidden">
              {cards.map((card, i) => (
                <div key={card.title}>{renderCard(card, i, true)}</div>
              ))}
            </div>
          </>
        ) : (
          cards.map((card, i) => renderCard(card, i))
        )}
      </div>
      {closing && (
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-[#515154]">
          {closing}
        </p>
      )}
    </>
  );

  if (sectionColor) {
    return (
      <TintedPageSection pillColor={sectionColor} size={size}>
        {content}
      </TintedPageSection>
    );
  }

  return (
    <PageSection
      tone={tone}
      size={size}
      innerClassName={isRow ? "mx-auto max-w-7xl px-4 md:px-6" : undefined}
    >
      {content}
    </PageSection>
  );
}
