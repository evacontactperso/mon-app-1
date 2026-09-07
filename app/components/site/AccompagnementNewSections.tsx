import Button from "./Button";
import PageSection from "./PageSection";
import SectionHeader from "./SectionHeader";
import TableCellContent from "./TableCellContent";

/* ── Tableaux ── */

const rowColorPalette = [
  { label: "from-[#6366F1] to-[#818cf8]", cell: "bg-[#EEF2FF]/95 border-[#6366F1]/20", dot: "bg-[#6366F1]" },
  { label: "from-[#EE6B6E] to-[#F58A8D]", cell: "bg-[#fde8e8]/95 border-[#EE6B6E]/20", dot: "bg-[#EE6B6E]" },
  { label: "from-[#2ec8dc] to-[#5dd9e8]", cell: "bg-[#ddf6f8]/95 border-[#2ec8dc]/25", dot: "bg-[#2ec8dc]" },
  { label: "from-[#fcaf45] to-[#fbbf24]", cell: "bg-[#fff8e7]/95 border-[#fcaf45]/25", dot: "bg-[#fcaf45]" },
  { label: "from-[#10b981] to-[#34d399]", cell: "bg-[#ecfdf5]/95 border-emerald-300/40", dot: "bg-emerald-500" },
];

/** Couleurs fixes par colonne — problème / solution */
const problemColumnStyle = rowColorPalette[1];
const solutionColumnStyle = rowColorPalette[4];

type BilanRow = {
  axis: string;
  observe: string;
  questions: string;
  outcome: string;
};

export function BilanDiagnosticTableSection({
  title,
  subtitle,
  exampleTitle,
  columnLabels,
  rows,
}: {
  title: string;
  subtitle: string;
  exampleTitle: string;
  columnLabels: { axis: string; observe: string; questions: string; outcome: string };
  rows: BilanRow[];
}) {
  const colKeys = ["axis", "observe", "questions", "outcome"] as const;

  return (
    <PageSection tone="alt" size="comfortable" innerClassName="mx-auto max-w-7xl px-3 md:px-4">
      <SectionHeader title={title} subtitle={subtitle} align="center" accent="warm" />
      <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-semibold uppercase tracking-widest text-[#515154]">
        {exampleTitle}
      </p>

      <div className="mt-10 hidden lg:block">
        <div
          className="grid gap-3 xl:gap-4"
          style={{ gridTemplateColumns: "minmax(8rem, 1fr) repeat(3, minmax(0, 1fr))" }}
        >
          {colKeys.map((key) => (
            <div
              key={`header-${key}`}
              className="flex min-h-[3rem] items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-3 py-3 text-center text-[10px] font-bold uppercase tracking-widest text-[#515154]"
            >
              {columnLabels[key]}
            </div>
          ))}
          {rows.map((row, rowIndex) => {
            const color = rowColorPalette[rowIndex % rowColorPalette.length];
            return (
              <div key={row.axis} className="contents">
                <div
                  className={`flex min-h-[5rem] items-center rounded-2xl bg-gradient-to-br px-4 py-4 text-sm font-bold leading-snug text-white shadow-md ${color.label}`}
                >
                  {row.axis}
                </div>
                <div
                  className={`flex min-h-[5rem] items-start rounded-2xl border px-4 py-4 text-sm leading-relaxed text-[#0B0B0B] transition hover:-translate-y-0.5 hover:shadow-md ${color.cell}`}
                >
                  <TableCellContent text={row.observe} bulletClassName={color.dot} />
                </div>
                <div
                  className={`flex min-h-[5rem] items-start rounded-2xl border px-4 py-4 text-sm leading-relaxed text-[#0B0B0B] transition hover:-translate-y-0.5 hover:shadow-md ${color.cell}`}
                >
                  <TableCellContent text={row.questions} bulletClassName={color.dot} />
                </div>
                <div
                  className={`flex min-h-[5rem] items-start rounded-2xl border px-4 py-4 text-sm leading-relaxed text-[#0B0B0B] transition hover:-translate-y-0.5 hover:shadow-md ${color.cell}`}
                >
                  <TableCellContent text={row.outcome} bulletClassName={color.dot} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 space-y-4 lg:hidden">
        {rows.map((row, rowIndex) => {
          const color = rowColorPalette[rowIndex % rowColorPalette.length];
          return (
            <article key={row.axis} className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              <div className={`px-4 py-3 text-sm font-bold text-white bg-gradient-to-r ${color.label}`}>
                {row.axis}
              </div>
              <dl className="space-y-3 p-4">
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-widest text-[#515154]">
                    {columnLabels.observe}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-[#0B0B0B]">
                    <TableCellContent text={row.observe} bulletClassName={color.dot} />
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-widest text-[#515154]">
                    {columnLabels.questions}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-[#0B0B0B]">
                    <TableCellContent text={row.questions} bulletClassName={color.dot} />
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-widest text-[#515154]">
                    {columnLabels.outcome}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-[#0B0B0B]">
                    <TableCellContent text={row.outcome} bulletClassName={color.dot} />
                  </dd>
                </div>
              </dl>
            </article>
          );
        })}
      </div>
    </PageSection>
  );
}

type SolutionRow = { problem: string; solution: string };

export function CoachingSolutionsTableSection({
  title,
  subtitle,
  problemLabel,
  solutionLabel,
  rows,
}: {
  title: string;
  subtitle: string;
  problemLabel: string;
  solutionLabel: string;
  rows: SolutionRow[];
}) {
  return (
    <PageSection
      tone="white"
      size="comfortable"
      innerClassName="mx-auto max-w-5xl px-4 md:px-6"
      overlay={
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(252,175,69,0.06)_0%,_transparent_55%)]" />
      }
    >
      <SectionHeader title={title} subtitle={subtitle} align="center" accent="indigo" />
      <div className="mt-12 space-y-3">
        {rows.map((row) => (
            <div
              key={row.problem}
              className="grid gap-3 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm md:grid-cols-2"
            >
              <div className={`flex items-start gap-3 border-b border-slate-100 p-5 md:border-b-0 md:border-r ${problemColumnStyle.cell}`}>
                <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${problemColumnStyle.dot}`} />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#EE6B6E]">
                    {problemLabel}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#0B0B0B] md:text-base">
                    <TableCellContent text={row.problem} bulletClassName={problemColumnStyle.dot} />
                  </p>
                </div>
              </div>
              <div className={`flex items-start gap-3 p-5 ${solutionColumnStyle.cell}`}>
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                  ✓
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                    {solutionLabel}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#515154] md:text-base">
                    <TableCellContent text={row.solution} bulletClassName={solutionColumnStyle.dot} />
                  </p>
                </div>
              </div>
            </div>
        ))}
      </div>
    </PageSection>
  );
}

/* ── Exemple méthode en 10 étapes ── */

export function MethodStepsExampleSection({
  title,
  subtitle,
  exampleTitle,
  intro,
  stepsTitle,
  steps,
  closing,
}: {
  title: string;
  subtitle: string;
  exampleTitle: string;
  intro: string;
  stepsTitle: string;
  steps: string[];
  closing: string;
}) {
  return (
    <PageSection tone="alt" size="comfortable" innerClassName="mx-auto max-w-4xl px-4 md:px-6">
      <SectionHeader title={title} subtitle={subtitle} align="center" accent="pink" />
      <div className="mt-10 rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)] md:p-8">
        <h3 className="text-xl font-bold text-[#0B0B0B]">{exampleTitle}</h3>
        <p className="mt-4 text-base leading-relaxed text-[#515154]">{intro}</p>
        <h4 className="mt-8 text-lg font-bold text-[#0B0B0B]">{stepsTitle}</h4>
        <ol className="mt-6 space-y-3">
          {steps.map((step, i) => (
            <li key={step} className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#fcaf45] to-[#fbbf24] text-sm font-bold text-white shadow-sm">
                {i + 1}
              </span>
              <p className="pt-1 text-sm leading-relaxed text-[#515154] md:text-base">{step}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 rounded-2xl bg-[#fff8e7]/80 px-5 py-4 text-sm font-medium leading-relaxed text-[#0B0B0B] md:text-base">
          {closing}
        </p>
      </div>
    </PageSection>
  );
}

/* ── Suivi régulier (design format intensif / stages) ── */

const followUpCardAccents = [
  {
    icon: "bg-gradient-to-br from-[#fff8e7] to-[#fde68a] border-[#fcaf45]/25",
    bar: "bg-[#fcaf45]",
    emphasis: "font-extrabold text-[#b45309]",
  },
  {
    icon: "bg-gradient-to-br from-[#EEF2FF] to-[#C7D2FE] border-[#6366F1]/20",
    bar: "bg-[#6366F1]",
    emphasis: "font-extrabold text-[#6366F1]",
  },
  {
    icon: "bg-gradient-to-br from-[#ecfdf5] to-[#a7f3d0] border-emerald-300/40",
    bar: "bg-emerald-500",
    emphasis: "font-extrabold text-[#059669]",
  },
  {
    icon: "bg-gradient-to-br from-[#ddf6f8] to-[#a5f3fc] border-[#2ec8dc]/25",
    bar: "bg-[#2ec8dc]",
    emphasis: "font-extrabold text-[#0891b2]",
  },
  {
    icon: "bg-gradient-to-br from-[#fde8e8] to-[#fbcfe8] border-[#EE6B6E]/20",
    bar: "bg-[#EE6B6E]",
    emphasis: "font-extrabold text-[#EE6B6E]",
  },
] as const;

function renderFollowUpTitle(title: string, emphasisClassName: string) {
  const parts = title.split(/(\*[^*]+\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <span key={index} className={emphasisClassName}>
          {part.slice(1, -1)}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export function CoachingFollowUpSection({
  title,
  subtitle,
  cards,
  highlight = "suivi régulier",
  accent = "indigo",
}: {
  title: string;
  subtitle: string;
  cards: { icon: string; title: string; text: string }[];
  highlight?: string;
  accent?: "indigo" | "pink" | "purple" | "warm";
}) {
  return (
    <PageSection tone="white" size="comfortable" innerClassName="mx-auto w-full max-w-[100rem] px-4 md:px-3">
      <SectionHeader
        title={title}
        subtitle={subtitle}
        highlight={highlight}
        align="center"
        accent={accent}
      />

      <div className="mt-14 hidden gap-3 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-5">
        {cards.map((card, i) => {
          const cardAccent = followUpCardAccents[i % followUpCardAccents.length];
          return (
            <div key={card.title} className="relative pt-7">
              <span
                className={`absolute left-1/2 top-7 z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-2xl shadow-[0_8px_24px_rgba(15,23,42,0.12)] ${cardAccent.icon}`}
                aria-hidden
              >
                {card.icon}
              </span>
              <article className="group flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white px-4 pb-5 pt-10 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)] lg:px-5 lg:pb-6">
                <div className={`mx-auto mb-4 h-1 w-10 rounded-full ${cardAccent.bar}`} />
                <h3 className="text-center text-sm font-bold leading-snug text-[#0B0B0B] lg:text-base">
                  {renderFollowUpTitle(card.title, cardAccent.emphasis)}
                </h3>
                <p className="mt-2 flex-1 text-center text-xs leading-relaxed text-[#515154] lg:text-sm">
                  {card.text}
                </p>
              </article>
            </div>
          );
        })}
      </div>

      <div className="mt-12 space-y-8 md:hidden">
        {cards.map((card, i) => {
          const cardAccent = followUpCardAccents[i % followUpCardAccents.length];
          return (
            <div key={card.title} className="relative pt-7">
              <span
                className={`absolute left-1/2 top-7 z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-2xl shadow-[0_8px_24px_rgba(15,23,42,0.12)] ${cardAccent.icon}`}
                aria-hidden
              >
                {card.icon}
              </span>
              <article className="rounded-2xl border border-slate-200/70 bg-white px-5 pb-5 pt-10 shadow-sm">
                <div className={`mx-auto mb-4 h-1 w-10 rounded-full ${cardAccent.bar}`} />
                <h3 className="text-center text-base font-bold leading-snug text-[#0B0B0B]">
                  {renderFollowUpTitle(card.title, cardAccent.emphasis)}
                </h3>
                <p className="mt-2 text-center text-sm leading-relaxed text-[#515154]">
                  {card.text}
                </p>
              </article>
            </div>
          );
        })}
      </div>
    </PageSection>
  );
}

const cardAccents = [
  { icon: "bg-gradient-to-br from-[#EEF2FF] to-[#C7D2FE] border-[#6366F1]/20", bar: "bg-[#6366F1]" },
  { icon: "bg-gradient-to-br from-[#fde8e8] to-[#fbcfe8] border-[#EE6B6E]/20", bar: "bg-[#EE6B6E]" },
  { icon: "bg-gradient-to-br from-[#ddf6f8] to-[#a5f3fc] border-[#2ec8dc]/25", bar: "bg-[#2ec8dc]" },
  { icon: "bg-gradient-to-br from-[#fff8e7] to-[#fde68a] border-[#fcaf45]/25", bar: "bg-[#fcaf45]" },
  { icon: "bg-gradient-to-br from-[#ecfdf5] to-[#a7f3d0] border-emerald-300/40", bar: "bg-emerald-500" },
] as const;

export function CoachingSessionsGridSection({
  title,
  subtitle,
  cards,
}: {
  title: string;
  subtitle: string;
  cards: { icon: string; title: string; text: string }[];
}) {
  return (
    <PageSection tone="alt" size="comfortable" innerClassName="mx-auto max-w-6xl px-4 md:px-6">
      <SectionHeader title={title} subtitle={subtitle} align="center" accent="warm" />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => {
          const accent = cardAccents[i % cardAccents.length];
          return (
            <article
              key={card.title}
              className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className={`h-1 w-full ${accent.bar}`} />
              <div className="p-5">
                <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border text-xl ${accent.icon}`} aria-hidden>
                  {card.icon}
                </span>
                <h3 className="mt-4 text-base font-bold leading-snug text-[#0B0B0B]">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#515154]">{card.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </PageSection>
  );
}

/* ── Packs tarifaires ── */

const packStyles = {
  pink: {
    border: "border-[#EE6B6E]/30",
    bg: "from-[#fde8e8]/60 via-white to-white",
    button: "bg-[#EE6B6E] hover:bg-[#E05558]",
  },
  indigo: {
    border: "border-[#6366F1]/30",
    bg: "from-[#EEF2FF]/60 via-white to-white",
    button: "bg-[#6366F1] hover:bg-[#4F46E5]",
  },
  yellow: {
    border: "border-[#fcaf45]/30",
    bg: "from-[#fff8e7]/80 via-white to-white",
    button: "bg-[#fcaf45] hover:bg-[#ea580c]",
  },
};

type Pack = {
  slug: string;
  title: string;
  price: string;
  rate: string;
  description: string;
  idealFor: string;
  cta: { label: string; href: string };
  accent: keyof typeof packStyles;
  featured?: boolean;
};

export function CoachingPacksSection({
  id,
  title,
  subtitle,
  packs,
}: {
  id?: string;
  title: string;
  subtitle: string;
  packs: Pack[];
}) {
  return (
    <PageSection id={id} tone="white" size="comfortable" innerClassName="mx-auto max-w-6xl px-4 md:px-6">
      <SectionHeader title={title} subtitle={subtitle} align="center" accent="pink" />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {packs.map((pack) => {
          const style = packStyles[pack.accent];
          return (
            <article
              key={pack.slug}
              className={`relative flex flex-col overflow-visible rounded-[28px] border bg-gradient-to-br p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 ${style.border} ${style.bg} ${
                pack.featured
                  ? "border-[#fcaf45] ring-2 ring-[#fcaf45]/35 shadow-[0_16px_48px_rgba(252,175,69,0.2)]"
                  : ""
              }`}
            >
              {pack.featured && (
                <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-[#fcaf45] px-3 py-1 text-xs font-bold text-white shadow-sm">
                  Le plus complet
                </span>
              )}
              <h3 className={`text-lg font-bold text-[#0B0B0B] ${pack.featured ? "mt-2" : ""}`}>
                {pack.title}
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-[#0B0B0B]">{pack.price}</span>
                <span className="text-sm text-[#515154]">{pack.rate}</span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#515154]">{pack.description}</p>
              <p className="mt-4 text-sm text-[#0B0B0B]">
                <span className="font-bold">Idéal pour : </span>
                {pack.idealFor}
              </p>
              <div className="mt-6 border-t border-slate-200/60 pt-5">
                <Button
                  href={pack.cta.href}
                  variant="primary"
                  className={`w-full text-center text-sm text-white ${style.button}`}
                >
                  {pack.cta.label}
                </Button>
              </div>
            </article>
          );
        })}
      </div>
    </PageSection>
  );
}

export function CoachingInscriptionSection({
  id,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  footnote,
}: {
  id?: string;
  title: string;
  subtitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  footnote: string;
}) {
  return (
    <PageSection
      id={id}
      tone="alt"
      size="comfortable"
      innerClassName="mx-auto max-w-3xl px-4 text-center md:px-6"
      overlay={
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(252,175,69,0.08)_0%,_transparent_70%)]" />
      }
    >
      <SectionHeader title={title} subtitle={subtitle} align="center" accent="warm" />
      <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
        <Button href={ctaPrimary.href} variant="parent">
          {ctaPrimary.label}
        </Button>
        <Button href={ctaSecondary.href} variant="parentOutline">
          {ctaSecondary.label}
        </Button>
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-[#515154] md:text-base">{footnote}</p>
    </PageSection>
  );
}
