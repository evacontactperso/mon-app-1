import PageSection, { type SectionTone } from "./PageSection";
import SectionHeader from "./SectionHeader";

type JourneyBlock = { title: string; text: string };

type JourneySectionProps = {
  title: string;
  blocks: JourneyBlock[];
  tone?: SectionTone;
};

const blockColors = [
  "from-[#fef3e8] to-[#fff8e7] border-[#f58529]/25",
  "from-[#EEF2FF] to-[#e0e7ff] border-[#6366F1]/25",
  "from-[#fde8e8] to-[#fdf0f0] border-[#EE6B6E]/25",
  "from-[#f3e5f5] to-[#ede9fe] border-[#8134af]/25",
];

export default function JourneySection({
  title,
  blocks,
  tone = "indigo",
}: JourneySectionProps) {
  return (
    <PageSection tone={tone}>
      <SectionHeader title={title} align="center" accent="indigo" />
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {blocks.map((block, i) => (
          <article
            key={block.title}
            className={`rounded-[28px] border bg-gradient-to-br p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${blockColors[i % blockColors.length]}`}
          >
            <h3 className="text-lg font-bold leading-snug text-[#0B0B0B]">{block.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#515154]">{block.text}</p>
          </article>
        ))}
      </div>
    </PageSection>
  );
}
