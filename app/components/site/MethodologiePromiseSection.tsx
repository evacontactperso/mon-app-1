import PageSection, { type SectionSize, type SectionTone } from "./PageSection";
import SectionHeader from "./SectionHeader";

type PromiseColumn = {
  title: string;
  icon: string;
  items: string[];
};

type MethodologiePromiseSectionProps = {
  eyebrow?: string;
  title: string;
  text: string;
  student: PromiseColumn;
  parents: PromiseColumn;
  tone?: SectionTone;
  size?: SectionSize;
};

function PromiseColumnCard({
  column,
  accent,
}: {
  column: PromiseColumn;
  accent: "orange" | "emerald";
}) {
  const accentStyles = {
    orange: {
      border: "border-[#f58529]/25",
      bg: "from-[#fef3e8]/80 via-white to-[#fff8e7]/50",
      title: "text-[#c2410c]",
      bullet: "bg-[#f58529]",
    },
    emerald: {
      border: "border-emerald-300/40",
      bg: "from-emerald-50/80 via-white to-emerald-50/30",
      title: "text-emerald-700",
      bullet: "bg-emerald-600",
    },
  };
  const styles = accentStyles[accent];

  return (
    <article
      className={`rounded-[28px] border ${styles.border} bg-gradient-to-br ${styles.bg} p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)]`}
    >
      <div className="flex items-center gap-3">
        <span className="text-3xl" aria-hidden>
          {column.icon}
        </span>
        <h3 className={`text-xl font-bold ${styles.title}`}>{column.title}</h3>
      </div>
      <ul className="mt-6 space-y-4">
        {column.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-base text-[#515154] md:text-lg">
            <span
              className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${styles.bullet} text-xs font-bold text-white`}
            >
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function MethodologiePromiseSection({
  eyebrow,
  title,
  text,
  student,
  parents,
  tone = "white",
  size = "comfortable",
}: MethodologiePromiseSectionProps) {
  return (
    <PageSection tone={tone} size={size}>
      <SectionHeader eyebrow={eyebrow} title={title} align="center" accent="warm" />
      <p className="mx-auto mt-4 max-w-3xl text-center font-body text-lg leading-relaxed text-[#515154]">
        {text}
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
        <PromiseColumnCard column={student} accent="orange" />
        <PromiseColumnCard column={parents} accent="emerald" />
      </div>
    </PageSection>
  );
}
