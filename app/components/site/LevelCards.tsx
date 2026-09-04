import PageSection, { type SectionTone } from "./PageSection";
import SectionHeader from "./SectionHeader";

type Level = { title: string; text: string; grade: string };

type LevelCardsProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  levels: Level[];
  tone?: SectionTone;
};

const gradeStyles = [
  {
    bg: "from-[#fef3e8] to-[#fff8e7] border-[#f58529]/30",
    badge: "bg-[#f58529] text-white",
  },
  {
    bg: "from-[#fde8e8] to-[#fdf0f0] border-[#EE6B6E]/30",
    badge: "bg-[#EE6B6E] text-white",
  },
  {
    bg: "from-[#EEF2FF] to-[#e0e7ff] border-[#6366F1]/30",
    badge: "bg-[#6366F1] text-white",
  },
  {
    bg: "from-[#f3e5f5] to-[#ede9fe] border-[#8134af]/30",
    badge: "bg-[#8134af] text-white",
  },
];

export default function LevelCards({
  eyebrow,
  title,
  subtitle,
  levels,
  tone = "indigo",
}: LevelCardsProps) {
  return (
    <PageSection tone={tone}>
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} accent="indigo" />
      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {levels.map((level, i) => {
          const style = gradeStyles[i % gradeStyles.length];
          return (
            <article
              key={level.title}
              className={`group rounded-3xl border bg-gradient-to-br p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${style.bg}`}
            >
              <span
                className={`inline-flex rounded-full px-4 py-1.5 text-sm font-extrabold font-heading uppercase tracking-wide ${style.badge}`}
              >
                {level.grade}
              </span>
              <h3 className="mt-5 text-xl font-bold text-[#0B0B0B]">{level.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#515154]">{level.text}</p>
            </article>
          );
        })}
      </div>
    </PageSection>
  );
}
