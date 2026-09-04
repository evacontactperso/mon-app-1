import PageSection, { type SectionSize, type SectionTone } from "./PageSection";
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

type OutcomeCard = { title: string; text: string; icon: string };

type OutcomeGridProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cards: OutcomeCard[];
  closing?: string;
  variant?: "school" | "parent";
  size?: SectionSize;
  tone?: SectionTone;
  align?: "left" | "center";
  layout?: "default" | "prominent";
  page?: SitePage;
  sectionIndex?: number;
  highlight?: string;
};

export default function OutcomeGrid({
  eyebrow,
  title,
  subtitle,
  cards,
  closing,
  variant = "school",
  size = "immersive",
  tone = "pink",
  align = "left",
  page,
  sectionIndex = 0,
  highlight,
}: OutcomeGridProps) {
  const sectionColor = page ? sectionColorAt(page, sectionIndex) : null;
  const accent = sectionColor ? SECTION_ACCENT_SOFT[sectionColor] : null;

  const content = (
    <>
      <div className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : ""}`}>
        {eyebrow && <FormationEyebrow>{eyebrow}</FormationEyebrow>}
        <div className="mt-4">
          {sectionColor ? (
            <FormationSectionTitle highlight={highlight} pill={sectionColor}>
              {title}
            </FormationSectionTitle>
          ) : (
            <h2 className="text-3xl font-bold text-[#0B0B0B] md:text-4xl">{title}</h2>
          )}
        </div>
        {subtitle && (
          <SectionSubtitle align={align} className="mt-5">
            {subtitle}
          </SectionSubtitle>
        )}
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.title}
            className={`group p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
              sectionColor
                ? cardSurfaceOnTintedBg()
                : "rounded-[28px] border border-slate-200/60 bg-white shadow-sm"
            }`}
          >
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-2xl text-2xl ${
                accent
                  ? accent.bg
                  : variant === "parent"
                    ? "bg-gradient-to-br from-[#fde8e8] to-[#fdf0f0]"
                    : "bg-gradient-to-br from-[#EEF2FF] to-[#e0e7ff]"
              }`}
            >
              {card.icon}
            </span>
            <h3 className="mt-4 text-lg font-bold text-[#0B0B0B]">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#515154]">{card.text}</p>
          </article>
        ))}
      </div>

      {closing && (
        <p className={`mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed ${accent?.text ?? "text-[#515154]"}`}>
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
    <PageSection tone={tone} size={size}>
      {content}
    </PageSection>
  );
}
