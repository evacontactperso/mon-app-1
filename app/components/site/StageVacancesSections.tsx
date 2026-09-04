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

export function StageDeliverablesSection({
  page = "accompagnement",
  sectionIndex = 7,
  eyebrow,
  title,
  items,
  closing,
  highlight = "concret",
}: {
  page?: SitePage;
  sectionIndex?: number;
  eyebrow?: string;
  title: string;
  items: { icon: string; title: string; text: string }[];
  closing?: string;
  highlight?: string;
}) {
  const sectionColor = sectionColorAt(page, sectionIndex);

  return (
    <TintedPageSection pillColor={sectionColor}>
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow && <FormationEyebrow>{eyebrow}</FormationEyebrow>}
        <div className="mt-4">
          <FormationSectionTitle highlight={highlight} pill={sectionColor}>
            {title}
          </FormationSectionTitle>
        </div>
      </div>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className={`p-6 ${cardSurfaceOnTintedBg("rounded-2xl")}`}>
            <span className="text-3xl">{item.icon}</span>
            <h3 className="mt-4 text-base font-bold text-[#0B0B0B]">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#515154]">{item.text}</p>
          </article>
        ))}
      </div>
      {closing && (
        <p className="mx-auto mt-12 max-w-2xl text-center text-lg font-semibold text-[#0B0B0B]">
          {closing}
        </p>
      )}
    </TintedPageSection>
  );
}

export function StageFitSection({
  page = "accompagnement",
  sectionIndex = 8,
  eyebrow,
  title,
  criteria,
  highlight = "idéal",
}: {
  page?: SitePage;
  sectionIndex?: number;
  eyebrow?: string;
  title: string;
  criteria: { icon: string; title: string; text: string }[];
  highlight?: string;
}) {
  const sectionColor = sectionColorAt(page, sectionIndex);
  const accent = SECTION_ACCENT_SOFT[sectionColor];

  return (
    <TintedPageSection pillColor={sectionColor}>
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow && <FormationEyebrow>{eyebrow}</FormationEyebrow>}
        <div className="mt-4">
          <FormationSectionTitle highlight={highlight} pill={sectionColor}>
            {title}
          </FormationSectionTitle>
        </div>
      </div>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {criteria.map((item) => (
          <article key={item.title} className={`flex gap-4 p-6 ${cardSurfaceOnTintedBg("rounded-2xl")}`}>
            <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ${accent.bg}`}>
              {item.icon}
            </span>
            <div>
              <h3 className="font-bold text-[#0B0B0B]">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#515154]">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </TintedPageSection>
  );
}
