import PageSection from "./PageSection";
import SectionHeader from "./SectionHeader";

export type GapRow = { demand: string; gap: string };

export type GapProposalProps = {
  title: string;
  subtitle: string;
  demandLabel: string;
  gapLabel: string;
  rows: GapRow[];
  accent?: "indigo" | "pink" | "purple" | "warm" | "blue";
};

const TONES = [
  { ink: "#6366F1", soft: "#EEF2FF" },
  { ink: "#EE6B6E", soft: "#fde8e8" },
  { ink: "#2ec8dc", soft: "#ddf6f8" },
  { ink: "#fcaf45", soft: "#fff8e7" },
  { ink: "#10b981", soft: "#ecfdf5" },
] as const;

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

function ProposalLabel({
  index,
  name,
  idea,
}: {
  index: number | string;
  name: string;
  idea: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#8E8E93]">
        Proposition {index} — {name}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-[#515154]">{idea}</p>
    </div>
  );
}

function Header({
  title,
  subtitle,
  accent = "warm",
}: {
  title: string;
  subtitle: string;
  accent?: "indigo" | "pink" | "purple" | "warm" | "blue";
}) {
  return (
    <SectionHeader
      title={title}
      subtitle={subtitle}
      highlight="mode d'emploi"
      align="center"
      accent={accent}
    />
  );
}

function Emph({ text, color }: { text: string; color?: string }) {
  return (
    <>
      {text.split(/(\*[^*]+\*)/g).map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <span key={i} className="font-extrabold" style={color ? { color } : undefined}>
            {part.slice(1, -1)}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function EmphClass({
  text,
  emphasisClassName,
}: {
  text: string;
  emphasisClassName: string;
}) {
  return (
    <>
      {text.split(/(\*[^*]+\*)/g).map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <span key={i} className={emphasisClassName}>
            {part.slice(1, -1)}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function solutionBullets(text: string): string[] {
  return text
    .split(/(?<=\.)\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function SolutionChecklist({
  text,
  color,
  compact = false,
}: {
  text: string;
  color: string;
  compact?: boolean;
}) {
  const items = solutionBullets(text);
  return (
    <ul className={compact ? "space-y-1" : "space-y-1.5"}>
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-start gap-2.5 leading-relaxed text-[#515154] ${
            compact ? "text-xs md:text-sm" : "text-sm md:text-[15px]"
          }`}
        >
          <span
            className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
            style={{ backgroundColor: color }}
            aria-hidden
          >
            ✓
          </span>
          <span className="min-w-0 flex-1">
            <Emph text={item} color={color} />
          </span>
        </li>
      ))}
    </ul>
  );
}

function DualHeaders({
  demandLabel,
  gapLabel,
}: {
  demandLabel: string;
  gapLabel: string;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-6">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EE6B6E] text-lg font-bold text-white">
          ✕
        </span>
        <p className="text-sm font-extrabold text-[#0B0B0B] md:text-base">{demandLabel}</p>
      </div>
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#10b981] text-lg font-bold text-white">
          ✓
        </span>
        <p className="text-sm font-extrabold text-[#0B0B0B] md:text-base">{gapLabel}</p>
      </div>
    </div>
  );
}

/* ── Conservée : Bandes verticales (ex-prop 8) ── */

export function GapProposalBands(props: GapProposalProps) {
  const { title, subtitle, demandLabel, gapLabel, rows } = props;
  return (
    <PageSection tone="white" size="comfortable" innerClassName="mx-auto max-w-7xl px-3 md:px-4">
      <ProposalLabel
        index="8 (gardée)"
        name="Bandes verticales"
        idea="Version conservée — barre colorée ; gauche et droite alignées, même teinte par ligne."
      />
      <Header title={title} subtitle={subtitle} />
      <div className="mt-12">
        <DualHeaders demandLabel={demandLabel} gapLabel={gapLabel} />
        <div className="mt-5 space-y-4">
          {rows.map((row, index) => {
            const tone = TONES[index % TONES.length];
            return (
              <div key={row.demand} className="grid items-stretch gap-4 md:grid-cols-2 md:gap-6">
                <article className="relative flex h-full items-center overflow-hidden rounded-[20px] border border-slate-200/70 bg-white p-5 pl-6 shadow-sm md:p-6 md:pl-7">
                  <span
                    className="absolute inset-y-0 left-0 w-1"
                    style={{ backgroundColor: tone.ink }}
                    aria-hidden
                  />
                  <p className="text-base font-semibold leading-snug text-[#0B0B0B]">
                    «&nbsp;
                    <Emph text={row.demand} color={tone.ink} />
                    &nbsp;»
                  </p>
                </article>
                <article
                  className="relative flex h-full flex-col justify-center overflow-hidden rounded-[20px] p-5 pl-6 md:p-6 md:pl-7"
                  style={{ backgroundColor: tone.soft }}
                >
                  <span
                    className="absolute inset-y-0 left-0 w-1"
                    style={{ backgroundColor: tone.ink }}
                    aria-hidden
                  />
                  <SolutionChecklist text={row.gap} color={tone.ink} />
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </PageSection>
  );
}

/** Alias */
export const GapProposalTickets = GapProposalBands;

/* ── 1. Soft jumelés ── */

export function GapProposalSoftPair(props: GapProposalProps) {
  const { title, subtitle, demandLabel, gapLabel, rows } = props;
  return (
    <PageSection tone="alt" size="comfortable" innerClassName="mx-auto max-w-7xl px-3 md:px-4">
      <ProposalLabel
        index={1}
        name="Soft jumelés"
        idea="Deux cartes pastel de la même teinte, alignées, emphases identiques."
      />
      <Header title={title} subtitle={subtitle} />
      <div className="mt-12">
        <DualHeaders demandLabel={demandLabel} gapLabel={gapLabel} />
        <div className="mt-5 space-y-4">
          {rows.map((row, index) => {
            const tone = TONES[index % TONES.length];
            return (
              <div key={row.demand} className="grid items-stretch gap-4 md:grid-cols-2 md:gap-6">
                <article
                  className="flex h-full items-center rounded-[20px] p-5 md:p-6"
                  style={{ backgroundColor: tone.soft }}
                >
                  <p className="text-base font-semibold leading-snug text-[#0B0B0B]">
                    «&nbsp;
                    <Emph text={row.demand} color={tone.ink} />
                    &nbsp;»
                  </p>
                </article>
                <article
                  className="flex h-full flex-col justify-center rounded-[20px] p-5 md:p-6"
                  style={{ backgroundColor: tone.soft }}
                >
                  <SolutionChecklist text={row.gap} color={tone.ink} />
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </PageSection>
  );
}

/* ── 2. Numéros partagés ── */

export function GapProposalSharedNumber(props: GapProposalProps) {
  const { title, subtitle, demandLabel, gapLabel, rows } = props;
  return (
    <PageSection tone="white" size="comfortable" innerClassName="mx-auto max-w-7xl px-3 md:px-4">
      <ProposalLabel
        index={2}
        name="Numéros partagés"
        idea="Même numéro coloré des deux côtés ; textes et coches dans la même encre."
      />
      <Header title={title} subtitle={subtitle} />
      <div className="mt-12">
        <DualHeaders demandLabel={demandLabel} gapLabel={gapLabel} />
        <div className="mt-5 space-y-4">
          {rows.map((row, index) => {
            const tone = TONES[index % TONES.length];
            return (
              <div key={row.demand} className="grid items-stretch gap-4 md:grid-cols-2 md:gap-6">
                <article className="flex h-full items-start gap-4 rounded-[20px] border border-slate-200/70 bg-white p-5">
                  <span
                    className="font-[family-name:var(--font-heading)] text-2xl font-extrabold leading-none"
                    style={{ color: tone.ink }}
                  >
                    {pad(index)}
                  </span>
                  <p className="pt-0.5 text-base font-semibold leading-snug text-[#0B0B0B]">
                    «&nbsp;
                    <Emph text={row.demand} color={tone.ink} />
                    &nbsp;»
                  </p>
                </article>
                <article className="flex h-full items-start gap-4 rounded-[20px] border border-slate-200/70 bg-white p-5">
                  <span
                    className="font-[family-name:var(--font-heading)] text-2xl font-extrabold leading-none"
                    style={{ color: tone.ink }}
                  >
                    {pad(index)}
                  </span>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <SolutionChecklist text={row.gap} color={tone.ink} compact />
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </PageSection>
  );
}

/* ── Section active : deux colonnes (style « changements après le stage ») ── */

export function GapProposalArrowBridge(props: GapProposalProps) {
  const { title, subtitle, demandLabel, gapLabel, rows, accent } = props;
  return (
    <PageSection tone="white" size="comfortable" innerClassName="mx-auto max-w-5xl px-4 md:px-6">
      <Header title={title} subtitle={subtitle} accent={accent} />

      <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-16">
        <div className="rounded-[28px] border border-[#E5E5EA] bg-white p-6 md:p-8">
          <h3 className="text-center text-lg font-normal text-[#0B0B0B]">{demandLabel}</h3>
          <ul className="mt-6 space-y-4">
            {rows.map((row) => (
              <li
                key={row.demand}
                className="flex items-start gap-3 text-sm leading-relaxed text-[#0B0B0B] md:text-base"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B0B0B]"
                  aria-hidden
                />
                <span>
                  <EmphClass text={row.demand} emphasisClassName="font-normal text-[#0B0B0B]" />
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="rounded-[28px] bg-[#fffdf5] p-6 md:p-8"
          style={{
            boxShadow:
              "0 0 0 1px rgba(252,175,69,0.15), 0 0 24px rgba(252,175,69,0.28), 0 0 48px rgba(252,175,69,0.12)",
          }}
        >
          <h3 className="text-center text-lg font-bold text-[#fcaf45]">{gapLabel}</h3>
          <ul className="mt-6 space-y-5">
            {rows.map((row) => (
              <li key={row.gap} className="flex items-start gap-3">
                <span
                  className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fcaf45] shadow-[0_4px_12px_rgba(252,175,69,0.45)]"
                  aria-hidden
                >
                  <svg
                    viewBox="0 0 12 12"
                    className="h-2.5 w-2.5"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 6.5L5 9l4.5-5.5" />
                  </svg>
                </span>
                <div className="min-w-0 flex-1 space-y-1.5 text-sm leading-relaxed text-[#0B0B0B] md:text-base">
                  {solutionBullets(row.gap).map((item) => (
                    <p key={item}>
                      <EmphClass text={item} emphasisClassName="font-bold text-[#0B0B0B]" />
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageSection>
  );
}

/* ── 4. Cadre unique ── */

export function GapProposalUnifiedFrame(props: GapProposalProps) {
  const { title, subtitle, demandLabel, gapLabel, rows } = props;
  return (
    <PageSection tone="white" size="comfortable" innerClassName="mx-auto max-w-7xl px-3 md:px-4">
      <ProposalLabel
        index={4}
        name="Cadre unique"
        idea="Une seule carte par ligne, coupée en deux, même bordure colorée."
      />
      <Header title={title} subtitle={subtitle} />
      <div className="mt-12">
        <DualHeaders demandLabel={demandLabel} gapLabel={gapLabel} />
        <div className="mt-5 space-y-4">
          {rows.map((row, index) => {
            const tone = TONES[index % TONES.length];
            return (
              <article
                key={row.demand}
                className="grid overflow-hidden rounded-[22px] border-2 md:grid-cols-2"
                style={{ borderColor: `${tone.ink}40` }}
              >
                <div className="flex items-center border-b border-dashed p-5 md:border-b-0 md:border-r md:p-6"
                  style={{ borderColor: `${tone.ink}33` }}
                >
                  <p className="text-base font-semibold leading-snug text-[#0B0B0B]">
                    «&nbsp;
                    <Emph text={row.demand} color={tone.ink} />
                    &nbsp;»
                  </p>
                </div>
                <div className="flex flex-col justify-center p-5 md:p-6" style={{ backgroundColor: tone.soft }}>
                  <SolutionChecklist text={row.gap} color={tone.ink} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </PageSection>
  );
}

/* ── 5. Pastille + ligne ── */

export function GapProposalDotLine(props: GapProposalProps) {
  const { title, subtitle, demandLabel, gapLabel, rows } = props;
  return (
    <PageSection tone="alt" size="comfortable" innerClassName="mx-auto max-w-7xl px-3 md:px-4">
      <ProposalLabel
        index={5}
        name="Pastille + ligne"
        idea="Pastille colorée identique à gauche de chaque colonne ; emphases assorties."
      />
      <Header title={title} subtitle={subtitle} />
      <div className="mt-12">
        <DualHeaders demandLabel={demandLabel} gapLabel={gapLabel} />
        <div className="mt-5 space-y-5">
          {rows.map((row, index) => {
            const tone = TONES[index % TONES.length];
            return (
              <div key={row.demand} className="grid items-stretch gap-4 md:grid-cols-2 md:gap-8">
                <div className="flex h-full items-start gap-3">
                  <span
                    className="mt-1.5 h-3 w-3 shrink-0 rounded-full"
                    style={{ backgroundColor: tone.ink }}
                    aria-hidden
                  />
                  <p className="text-base font-semibold leading-snug text-[#0B0B0B]">
                    «&nbsp;
                    <Emph text={row.demand} color={tone.ink} />
                    &nbsp;»
                  </p>
                </div>
                <div className="flex h-full items-start gap-3">
                  <span
                    className="mt-1.5 h-3 w-3 shrink-0 rounded-full"
                    style={{ backgroundColor: tone.ink }}
                    aria-hidden
                  />
                  <div className="min-w-0 flex-1">
                    <SolutionChecklist text={row.gap} color={tone.ink} compact />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageSection>
  );
}

/* ── 6. Ombres teintées ── */

export function GapProposalTintShadow(props: GapProposalProps) {
  const { title, subtitle, demandLabel, gapLabel, rows } = props;
  return (
    <PageSection tone="white" size="comfortable" innerClassName="mx-auto max-w-7xl px-3 md:px-4">
      <ProposalLabel
        index={6}
        name="Ombres teintées"
        idea="Cartes blanches avec ombre de la même couleur ; emphases assorties."
      />
      <Header title={title} subtitle={subtitle} />
      <div className="mt-12">
        <DualHeaders demandLabel={demandLabel} gapLabel={gapLabel} />
        <div className="mt-5 space-y-4">
          {rows.map((row, index) => {
            const tone = TONES[index % TONES.length];
            const shadow = `0 10px 28px -8px ${tone.ink}40`;
            return (
              <div key={row.demand} className="grid items-stretch gap-4 md:grid-cols-2 md:gap-6">
                <article
                  className="flex h-full items-center rounded-[20px] bg-white p-5 md:p-6"
                  style={{ boxShadow: shadow }}
                >
                  <p className="text-base font-semibold leading-snug text-[#0B0B0B]">
                    «&nbsp;
                    <Emph text={row.demand} color={tone.ink} />
                    &nbsp;»
                  </p>
                </article>
                <article
                  className="flex h-full flex-col justify-center rounded-[20px] bg-white p-5 md:p-6"
                  style={{ boxShadow: shadow }}
                >
                  <SolutionChecklist text={row.gap} color={tone.ink} />
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </PageSection>
  );
}

/* ── 7. Labels colorés ── */

export function GapProposalColoredLabels(props: GapProposalProps) {
  const { title, subtitle, demandLabel, gapLabel, rows } = props;
  return (
    <PageSection tone="alt" size="comfortable" innerClassName="mx-auto max-w-7xl px-3 md:px-4">
      <ProposalLabel
        index={7}
        name="Labels colorés"
        idea="Mini-labels ✕ / ✓ dans la teinte de la ligne, contenus assortis."
      />
      <Header title={title} subtitle={subtitle} />
      <div className="mt-12 space-y-4">
        {rows.map((row, index) => {
          const tone = TONES[index % TONES.length];
          return (
            <div key={row.demand} className="grid items-stretch gap-4 md:grid-cols-2 md:gap-6">
              <article className="flex h-full flex-col justify-center rounded-[20px] border border-slate-200/70 bg-white p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: tone.ink }}>
                  ✕ {demandLabel}
                </p>
                <p className="mt-2 text-base font-semibold leading-snug text-[#0B0B0B]">
                  «&nbsp;
                  <Emph text={row.demand} color={tone.ink} />
                  &nbsp;»
                </p>
              </article>
              <article
                className="flex h-full flex-col justify-center rounded-[20px] p-5"
                style={{ backgroundColor: tone.soft }}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: tone.ink }}>
                  ✓ {gapLabel}
                </p>
                <div className="mt-2">
                  <SolutionChecklist text={row.gap} color={tone.ink} />
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </PageSection>
  );
}

/* ── 8. Contour ink ── */

export function GapProposalInkOutline(props: GapProposalProps) {
  const { title, subtitle, demandLabel, gapLabel, rows } = props;
  return (
    <PageSection tone="white" size="comfortable" innerClassName="mx-auto max-w-7xl px-3 md:px-4">
      <ProposalLabel
        index={8}
        name="Contour ink"
        idea="Même contour coloré des deux côtés ; typo d’emphase identique."
      />
      <Header title={title} subtitle={subtitle} />
      <div className="mt-12">
        <DualHeaders demandLabel={demandLabel} gapLabel={gapLabel} />
        <div className="mt-5 space-y-4">
          {rows.map((row, index) => {
            const tone = TONES[index % TONES.length];
            return (
              <div key={row.demand} className="grid items-stretch gap-4 md:grid-cols-2 md:gap-6">
                <article
                  className="flex h-full items-center rounded-[20px] bg-white p-5 md:p-6"
                  style={{ boxShadow: `inset 0 0 0 2px ${tone.ink}55` }}
                >
                  <p className="text-base font-semibold leading-snug text-[#0B0B0B]">
                    «&nbsp;
                    <Emph text={row.demand} color={tone.ink} />
                    &nbsp;»
                  </p>
                </article>
                <article
                  className="flex h-full flex-col justify-center rounded-[20px] p-5 md:p-6"
                  style={{
                    backgroundColor: tone.soft,
                    boxShadow: `inset 0 0 0 2px ${tone.ink}55`,
                  }}
                >
                  <SolutionChecklist text={row.gap} color={tone.ink} />
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </PageSection>
  );
}
