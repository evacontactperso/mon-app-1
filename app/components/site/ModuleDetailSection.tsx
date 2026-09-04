import PageSection, { type SectionTone } from "./PageSection";
import SectionHeader from "./SectionHeader";

type Subsection = {
  title: string;
  text: string;
  bullets?: string[];
  outcomes?: string[];
};

type ModuleDetailSectionProps = {
  title: string;
  intro?: string;
  subsections?: Subsection[];
  timeline?: { title: string; steps: string[] };
  sheetTypes?: {
    cards: { title: string; text: string }[];
    rulesTitle: string;
    rules: string[];
  };
  tone?: SectionTone;
};

export default function ModuleDetailSection({
  title,
  intro,
  subsections,
  timeline,
  sheetTypes,
  tone = "white",
}: ModuleDetailSectionProps) {
  return (
    <PageSection tone={tone}>
      <SectionHeader title={title} subtitle={intro} accent="indigo" />
      {subsections && (
        <div className="mt-14 space-y-8">
          {subsections.map((sub) => (
            <article
              key={sub.title}
              className="rounded-[28px] border border-slate-200/60 bg-white p-6 shadow-sm md:p-8"
            >
              <h3 className="text-xl font-bold text-[#0B0B0B]">{sub.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#515154]">{sub.text}</p>
              {sub.outcomes && (
                <ul className="mt-4 space-y-2">
                  {sub.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm text-[#0B0B0B]">
                      <span className="text-[#6366F1]">→</span> {o}
                    </li>
                  ))}
                </ul>
              )}
              {sub.bullets && (
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {sub.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-[#515154]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#EE6B6E]" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      )}
      {timeline && (
        <div className="mt-10 rounded-[28px] border border-[#6366F1]/20 bg-[#EEF2FF]/40 p-6 md:p-8">
          <h3 className="text-lg font-bold text-[#6366F1]">{timeline.title}</h3>
          <ol className="mt-6 space-y-3">
            {timeline.steps.map((step, i) => (
              <li key={step} className="flex gap-4 text-sm text-[#515154]">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#6366F1] text-xs font-bold text-white">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      )}
      {sheetTypes && (
        <div className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sheetTypes.cards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm"
              >
                <h4 className="font-bold text-[#0B0B0B]">{card.title}</h4>
                <p className="mt-2 text-sm text-[#515154]">{card.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-dashed border-[#8134af]/30 bg-[#f3e5f5]/30 p-6">
            <h4 className="font-bold text-[#8134af]">{sheetTypes.rulesTitle}</h4>
            <ul className="mt-4 flex flex-wrap gap-2">
              {sheetTypes.rules.map((rule) => (
                <li
                  key={rule}
                  className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-[#0B0B0B] shadow-sm"
                >
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </PageSection>
  );
}
