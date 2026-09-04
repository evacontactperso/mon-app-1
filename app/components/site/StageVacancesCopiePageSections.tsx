import Button from "./Button";
import { SectionSubtitle } from "./SectionHeader";
import TableCellContent from "./TableCellContent";
import {
  ChevronDown,
  FormationEyebrow,
  FormationSectionTitle,
  SECTION_ACCENT_BG,
  SECTION_ACCENT_SOFT,
  TintedPageSection,
  cardSurfaceOnTintedBg,
  sectionColorAt,
  type SectionColor,
} from "./formation/FormationDesign";

const PAGE = "stages" as const;
const color = (sectionIndex: number): SectionColor => sectionColorAt(PAGE, sectionIndex);

function StageSectionHeader({
  eyebrow,
  title,
  subtitle,
  highlight,
  sectionIndex,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  highlight?: string;
  sectionIndex: number;
}) {
  const sectionColor = color(sectionIndex);
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

export function WhyVacancesSection({
  eyebrow,
  title,
  subtitle,
  cards,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  cards: { title: string; text: string }[];
}) {
  const sectionColor = color(1);
  const accent = SECTION_ACCENT_SOFT[sectionColor];

  return (
    <TintedPageSection pillColor={sectionColor}>
      <StageSectionHeader
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        highlight="vacances"
        sectionIndex={1}
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {cards.map((card, i) => (
          <article
            key={card.title}
            className={`flex gap-5 p-6 ${cardSurfaceOnTintedBg()}`}
          >
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-lg font-bold ${accent.bg} ${accent.text}`}>
              {i + 1}
            </span>
            <div>
              <h3 className="text-lg font-bold text-[#0B0B0B]">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#515154]">{card.text}</p>
            </div>
          </article>
        ))}
      </div>
    </TintedPageSection>
  );
}

export function StageFormatOverviewSection({
  eyebrow,
  title,
  subtitle,
  stats,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  stats: { value: string; label: string; detail: string }[];
}) {
  return (
    <TintedPageSection pillColor={color(2)}>
      <StageSectionHeader
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        highlight="intensif"
        sectionIndex={2}
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className={`p-6 text-center ${cardSurfaceOnTintedBg()}`}
          >
            <p className="text-3xl font-extrabold font-heading text-[#6366F1] md:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm font-bold uppercase tracking-wide text-[#0B0B0B]">
              {stat.label}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[#515154]">{stat.detail}</p>
          </article>
        ))}
      </div>
    </TintedPageSection>
  );
}

export function StageDifferentSection({
  eyebrow,
  title,
  subtitle,
  cards,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  cards: { title: string; text: string }[];
}) {
  return (
    <TintedPageSection pillColor={color(3)}>
      <StageSectionHeader
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        highlight="stage"
        sectionIndex={3}
      />
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => (
          <article key={card.title} className={`p-6 ${cardSurfaceOnTintedBg()}`}>
            <p className="text-sm font-bold text-[#6366F1]">0{i + 1}</p>
            <h3 className="mt-2 text-base font-bold leading-snug text-[#0B0B0B]">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#515154]">{card.text}</p>
          </article>
        ))}
      </div>
    </TintedPageSection>
  );
}

export function StageSessionFlowSection({
  eyebrow,
  title,
  subtitle,
  phases,
  closing,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  phases: { time: string; title: string; text: string }[];
  closing: string;
}) {
  return (
    <TintedPageSection pillColor={color(4)}>
      <StageSectionHeader
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        highlight="séance"
        sectionIndex={4}
      />
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {phases.map((phase, i) => (
          <article key={phase.time} className={`relative p-5 ${cardSurfaceOnTintedBg("rounded-2xl")}`}>
            <span className="inline-flex rounded-full bg-[#6366F1] px-3 py-1 text-xs font-bold text-white">
              {phase.time}
            </span>
            <h3 className="mt-4 font-bold text-[#0B0B0B]">{phase.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#515154]">{phase.text}</p>
            {i < phases.length - 1 && (
              <span
                className={`absolute -right-2 top-8 hidden lg:block ${SECTION_ACCENT_SOFT[color(4)].text}`}
                aria-hidden
              >
                →
              </span>
            )}
          </article>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-[#515154]">
        {closing}
      </p>
    </TintedPageSection>
  );
}

type StageAxis = {
  number: number;
  title: string;
  objective: string;
  highlights: string[];
  deliverable: string;
};

export function StageAxesSection({
  eyebrow,
  title,
  subtitle,
  note,
  axes,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  note: string;
  axes: StageAxis[];
}) {
  const sectionColor = color(5);
  const accentBg = SECTION_ACCENT_BG[sectionColor];

  return (
    <TintedPageSection pillColor={sectionColor}>
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow && <FormationEyebrow>{eyebrow}</FormationEyebrow>}
        <div className="mt-4">
          <FormationSectionTitle highlight="parcours" pill={sectionColor}>
            {title}
          </FormationSectionTitle>
        </div>
        <SectionSubtitle align="center" className="mt-5">
          {subtitle}
        </SectionSubtitle>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-sm font-medium text-[#515154]">{note}</p>
      <div className="relative mt-12 -mx-4 flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory md:mx-0 md:grid md:grid-cols-5 md:overflow-visible md:px-0 md:pb-0">
        {axes.map((axis) => (
          <article
            key={axis.number}
            className={`flex min-w-[240px] snap-center flex-col p-5 md:min-w-0 ${cardSurfaceOnTintedBg("rounded-[24px]")}`}
          >
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white ${accentBg}`}
            >
              {axis.number}
            </span>
            <h3 className="mt-4 text-base font-bold leading-snug text-[#0B0B0B]">{axis.title}</h3>
            <p className="mt-2 text-sm text-[#515154]">{axis.objective}</p>
            <ul className="mt-4 flex-1 space-y-1.5">
              {axis.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-[#515154]">
                  <span className={accentBg.replace("bg-", "text-")}>•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-xl border border-slate-200/70 bg-slate-50 px-3 py-2 text-xs font-medium text-[#0B0B0B]">
              {axis.deliverable}
            </p>
          </article>
        ))}
      </div>
    </TintedPageSection>
  );
}

export function StageDeliverablesSection({
  eyebrow,
  title,
  subtitle,
  groups,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  groups: { label: string; items: string[] }[];
}) {
  const sectionColor = color(6);

  return (
    <TintedPageSection pillColor={sectionColor}>
      <StageSectionHeader
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        highlight="outils"
        sectionIndex={6}
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group.label}
            className={`p-6 ${cardSurfaceOnTintedBg()}`}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-[#515154]">{group.label}</p>
            <ul className="mt-4 space-y-3">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#0B0B0B]">
                  <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${SECTION_ACCENT_BG[sectionColor]}`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </TintedPageSection>
  );
}

export function StageBeforeAfterSection({
  eyebrow,
  title,
  subtitle,
  rows,
  problemLabel,
  consequenceLabel,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  rows: { problem: string; consequence: string }[];
  problemLabel: string;
  consequenceLabel: string;
}) {
  return (
    <TintedPageSection pillColor={color(7)}>
      <StageSectionHeader
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        highlight="changer"
        sectionIndex={7}
      />
      <div className="mt-14 space-y-4">
        {rows.map((row, i) => (
          <div
            key={row.problem}
            className={`overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${cardSurfaceOnTintedBg("rounded-2xl")}`}
          >
            <div className="grid md:grid-cols-2">
              <div className="flex items-start gap-4 border-b border-slate-100 bg-gradient-to-br from-red-50/80 to-white p-5 md:border-b-0 md:border-r md:p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-100 text-sm font-bold text-red-500">
                  {i + 1}
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-red-400">
                    {problemLabel}
                  </p>
                  <p className="mt-1 font-bold text-[#0B0B0B]">
                    <TableCellContent text={row.problem} bulletClassName="bg-red-400" />
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gradient-to-br from-[#EEF2FF]/60 to-white p-5 md:p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#6366F1] text-sm font-bold text-white">
                  →
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#6366F1]">
                    {consequenceLabel}
                  </p>
                  <p className="mt-1 text-[#515154]">
                    <TableCellContent text={row.consequence} bulletClassName="bg-[#6366F1]" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </TintedPageSection>
  );
}

export function SmallGroupSection({
  eyebrow,
  title,
  points,
  closing,
}: {
  eyebrow?: string;
  title: string;
  points: { title: string; text: string }[];
  closing: string;
}) {
  return (
    <TintedPageSection pillColor={color(8)}>
      <StageSectionHeader
        eyebrow={eyebrow}
        title={title}
        highlight="accompagné"
        sectionIndex={8}
      />
      <div className={`mx-auto mt-14 max-w-3xl p-8 md:p-10 ${cardSurfaceOnTintedBg("rounded-[32px]")}`}>
        <div className="space-y-6">
          {points.map((point, i) => (
            <div key={point.title} className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EE6B6E] text-sm font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="font-bold text-[#0B0B0B]">{point.title}</h3>
                <p className="mt-1 text-sm text-[#515154]">{point.text}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-lg font-bold text-[#EE6B6E]">{closing}</p>
      </div>
    </TintedPageSection>
  );
}

export function StagePricingSection({
  id,
  eyebrow,
  title,
  price,
  subtitle,
  includes,
  badge,
  microText,
  ctaPrimary,
  ctaSecondary,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  price: string;
  subtitle: string;
  includes: string[];
  badge: string;
  microText: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}) {
  return (
    <TintedPageSection id={id} pillColor={color(9)}>
      <StageSectionHeader eyebrow={eyebrow} title={title} highlight="vacances" sectionIndex={9} />
      <div className="mx-auto mt-14 max-w-2xl">
        <div className={`relative p-8 md:p-10 ${cardSurfaceOnTintedBg("rounded-[36px]")}`}>
          <span className="absolute -top-3 right-6 rounded-full bg-[#EE6B6E] px-3 py-1 text-xs font-bold text-white">
            {badge}
          </span>
          <p className="text-sm font-semibold text-[#6366F1]">{subtitle}</p>
          <p className="mt-2 text-4xl font-extrabold font-heading text-[#0B0B0B]">{price}</p>
          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#515154]">
            Inclus
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#0B0B0B]">
                <span className="text-[#EE6B6E]">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href={ctaPrimary.href} variant="parent">
              {ctaPrimary.label}
            </Button>
            <Button href={ctaSecondary.href} variant="parentOutline">
              {ctaSecondary.label}
            </Button>
          </div>
          <p className="mt-6 text-center text-xs leading-relaxed text-[#515154]">{microText}</p>
        </div>
      </div>
    </TintedPageSection>
  );
}

export function StageFAQSection({
  title,
  items,
}: {
  title: string;
  items: { question: string; answer: string }[];
}) {
  const faqColor = color(10);
  const faqAccent = SECTION_ACCENT_SOFT[faqColor];

  return (
    <TintedPageSection pillColor={faqColor} innerClassName="mx-auto max-w-3xl px-4 md:px-6">
      <div className="text-center">
          <FormationSectionTitle highlight="fréquentes" pill={faqColor}>
            {title}
          </FormationSectionTitle>
        </div>
        <div className="mt-12 divide-y divide-[#0B0B0B]/10">
          {items.map((item, index) => (
            <details key={item.question} className="group py-5" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                <span className="flex items-start gap-4">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-extrabold font-heading ${faqAccent.bg} ${faqAccent.text}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-2 font-bold text-[#0B0B0B]">{item.question}</span>
                </span>
                <span className={`mt-2 transition-transform group-open:rotate-180 ${faqAccent.text}`}>
                  <ChevronDown />
                </span>
              </summary>
              <p className="ml-14 mt-3 text-sm leading-relaxed text-[#515154]">{item.answer}</p>
            </details>
          ))}
        </div>
    </TintedPageSection>
  );
}

export function StageContactSection({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  footnote,
}: {
  title: string;
  subtitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  footnote?: string;
}) {
  return (
    <TintedPageSection
      pillColor={color(11)}
      innerClassName="mx-auto max-w-3xl px-4 text-center md:px-6"
    >
      <FormationSectionTitle highlight="stage" pill={color(11)}>
        {title}
      </FormationSectionTitle>
      <SectionSubtitle align="center" className="mt-5">
        {subtitle}
      </SectionSubtitle>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button href={ctaPrimary.href} variant="parent">
          {ctaPrimary.label}
        </Button>
        <Button href={ctaSecondary.href} variant="parentOutline">
          {ctaSecondary.label}
        </Button>
      </div>
      {footnote && (
        <p className="mt-6 text-sm text-[#515154]">{footnote}</p>
      )}
    </TintedPageSection>
  );
}
