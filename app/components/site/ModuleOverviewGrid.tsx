import PageSection, { type SectionTone } from "./PageSection";
import SectionHeader from "./SectionHeader";

type Module = {
  title: string;
  subtitle: string;
  text: string;
  chapters: string[];
};

type ModuleOverviewGridProps = {
  title: string;
  modules: Module[];
  tone?: SectionTone;
};

const colors = [
  "from-[#fef3e8] to-[#fff8e7] border-[#f58529]/25",
  "from-[#EEF2FF] to-[#e0e7ff] border-[#6366F1]/25",
  "from-[#fde8e8] to-[#fdf0f0] border-[#EE6B6E]/25",
  "from-[#f3e5f5] to-[#ede9fe] border-[#8134af]/25",
];

export default function ModuleOverviewGrid({
  title,
  modules,
  tone = "alt",
}: ModuleOverviewGridProps) {
  return (
    <PageSection tone={tone}>
      <SectionHeader title={title} align="center" accent="purple" />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {modules.map((mod, i) => (
          <article
            key={mod.title}
            className={`rounded-[28px] border bg-gradient-to-br p-7 shadow-sm ${colors[i % colors.length]}`}
          >
            <p className="text-xs font-bold uppercase tracking-wide text-[#6366F1]">
              Module {i + 1}
            </p>
            <h3 className="mt-2 text-xl font-bold text-[#0B0B0B]">{mod.title}</h3>
            <p className="mt-1 text-sm font-semibold text-[#515154]">{mod.subtitle}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#515154]">{mod.text}</p>
            <ul className="mt-4 space-y-1.5 border-t border-slate-200/40 pt-4">
              {mod.chapters.map((ch) => (
                <li key={ch} className="flex items-center gap-2 text-sm text-[#0B0B0B]">
                  <span className="text-[#EE6B6E]">✓</span> {ch}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PageSection>
  );
}
