import PageSection, { type SectionTone } from "./PageSection";
import SectionHeader from "./SectionHeader";
import { cardBase, cardHover } from "./tokens";

type ChecklistItem = { step: number; text: string };

type LearningChecklistProps = {
  title: string;
  subtitle?: string;
  items: ChecklistItem[];
  tone?: SectionTone;
};

const stepColors = [
  "from-[#6366F1] to-[#818cf8]",
  "from-[#EE6B6E] to-[#F58A8D]",
  "from-[#8134af] to-[#a78bfa]",
  "from-[#f58529] to-[#fbbf24]",
  "from-[#059669] to-[#34d399]",
  "from-[#6366F1] to-[#818cf8]",
  "from-[#EE6B6E] to-[#F58A8D]",
  "from-[#8134af] to-[#a78bfa]",
];

export default function LearningChecklist({
  title,
  subtitle,
  items,
  tone = "indigo",
}: LearningChecklistProps) {
  return (
    <PageSection tone={tone}>
      <SectionHeader title={title} subtitle={subtitle} accent="indigo" />
      <ol className="mt-14 grid gap-4 sm:grid-cols-2">
        {items.map((item, i) => (
          <li
            key={item.step}
            className={`group flex items-start gap-4 ${cardBase} px-5 py-5 ${cardHover}`}
          >
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${stepColors[i % stepColors.length]} text-sm font-bold text-white shadow-md transition-transform group-hover:scale-110`}
            >
              {item.step}
            </span>
            <span className="pt-1.5 text-sm font-medium leading-relaxed text-[#0B0B0B]">
              {item.text}
            </span>
          </li>
        ))}
      </ol>
    </PageSection>
  );
}
