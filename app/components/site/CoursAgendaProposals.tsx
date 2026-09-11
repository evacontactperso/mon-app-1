import PageSection from "./PageSection";
import SectionHeader from "./SectionHeader";
import {
  sectionColorAt,
  sectionHeaderAccent,
} from "./formation/FormationDesign";

const PAGE = "cours" as const;
const accentAt = (sectionIndex: number) =>
  sectionHeaderAccent(sectionColorAt(PAGE, sectionIndex));

export type AgendaWeek = {
  weekend: string;
  theme: string;
  skills: string;
  activities: string;
  deliverable: string;
};

export type AgendaProposalProps = {
  id?: string;
  title: string;
  subtitle: string;
  highlight: string;
  rowLabels: {
    theme: string;
    skills: string;
    activities: string;
    deliverable: string;
  };
  weeks: AgendaWeek[];
};

const TONES = [
  { ink: "#6366F1", glow: "#818cf8" },
  { ink: "#EE6B6E", glow: "#F58A8D" },
  { ink: "#2ec8dc", glow: "#5dd9e8" },
  { ink: "#fcaf45", glow: "#fbbf24" },
  { ink: "#10b981", glow: "#34d399" },
] as const;

function parseWeekend(weekend: string) {
  const match = weekend.match(/(?:WK du\s+)?(\d{1,2})-(\d{1,2})\s+(\S+)/i);
  const start = match?.[1] ?? "";
  const end = match?.[2] ?? "";
  const month = match?.[3] ?? "";
  return {
    start,
    end,
    month,
    range: `${start}–${end}`,
  };
}

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

function stripStars(text: string) {
  return text.replace(/\*/g, "");
}

function FieldBlock({
  label,
  text,
}: {
  label: string;
  text: string;
}) {
  return (
    <p className="text-sm leading-relaxed md:text-[15px]">
      <span className="font-bold text-white">{label}</span>
      <span className="font-normal text-white/65"> - {stripStars(text)}</span>
    </p>
  );
}

/** Agenda « Tournée plus » — fil vertical, compétences puis activités, livrable en pastille */
export function AgendaProposalTourneePlus({
  id,
  title,
  subtitle,
  highlight,
  rowLabels,
  weeks,
}: AgendaProposalProps) {
  return (
    <PageSection
      id={id}
      tone="dark"
      size="comfortable"
      innerClassName="mx-auto max-w-5xl px-5 md:px-8"
      overlay={
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.14)_0%,_transparent_48%)]" />
      }
    >
      <SectionHeader
        title={title}
        subtitle={subtitle}
        highlight={highlight}
        align="center"
        accent={accentAt(1)}
        dark
      />

      <ul className="relative mt-16">
        <span
          className="absolute bottom-12 left-[1.15rem] top-12 w-px bg-gradient-to-b from-white/40 via-white/18 to-transparent md:left-[1.35rem]"
          aria-hidden
        />
        {weeks.map((week, index) => {
          const date = parseWeekend(week.weekend);
          const tone = TONES[index % TONES.length];
          return (
            <li key={week.weekend} className="relative py-9 last:pb-0 md:py-11">
              <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] items-start gap-x-4 md:grid-cols-[3rem_minmax(0,1fr)] md:gap-x-8">
                <div className="relative z-10 flex justify-center pt-1">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-extrabold text-white md:h-11 md:w-11 md:text-xs"
                    style={{
                      backgroundColor: tone.ink,
                      boxShadow: `0 0 0 5px #0B0B0B, 0 0 28px ${tone.ink}40`,
                    }}
                  >
                    {pad(index)}
                  </span>
                </div>

                <div className="grid min-w-0 grid-cols-1 items-baseline gap-y-3 sm:grid-cols-[15rem_minmax(0,1fr)] sm:gap-x-6 md:grid-cols-[16.5rem_minmax(0,1fr)] md:gap-x-8">
                  <p className="flex flex-nowrap items-baseline gap-x-2 whitespace-nowrap font-[family-name:var(--font-heading)] leading-none tracking-tight">
                    <span className="text-sm font-semibold uppercase tracking-[0.14em] text-white/65 md:text-base">
                      WK
                    </span>
                    <span className="text-2xl font-extrabold text-white md:text-[1.75rem]">
                      {date.range}
                    </span>
                    <span className="text-sm font-semibold capitalize text-white/65 md:text-base">
                      {date.month.toLowerCase()}
                    </span>
                  </p>

                  <h3 className="min-w-0 text-xl font-extrabold leading-snug text-white md:text-2xl">
                    {week.theme}
                  </h3>
                </div>
              </div>

              <div className="mt-5 space-y-4 pl-[calc(2.5rem+1rem)] md:pl-[calc(3rem+2rem)]">
                <FieldBlock label={rowLabels.skills} text={week.skills} />
                <FieldBlock label={rowLabels.activities} text={week.activities} />
                <span
                  className="inline-flex max-w-full flex-wrap whitespace-normal rounded-2xl px-3.5 py-1.5 text-left text-xs font-semibold leading-snug md:rounded-full md:text-sm"
                  style={{
                    backgroundColor: `${tone.ink}33`,
                    boxShadow: `inset 0 0 0 1px ${tone.ink}55`,
                    color: tone.glow,
                  }}
                >
                  {stripStars(week.deliverable)}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </PageSection>
  );
}
