import PageSection, { type SectionTone } from "./PageSection";
import SectionHeader from "./SectionHeader";

type ApproachCard = { title: string; text: string; icon: string };

type ApproachSectionProps = {
  title: string;
  subtitle?: string;
  cards: ApproachCard[];
  microcopy?: string;
  tone?: SectionTone;
};

const cardStyles = [
  {
    bg: "from-[#fef3e8] to-[#fff8e7] border-[#f58529]/30",
    ring: "ring-[#f58529]/20",
  },
  {
    bg: "from-[#fde8e8] to-[#fdf0f0] border-[#EE6B6E]/30",
    ring: "ring-[#EE6B6E]/20",
  },
  {
    bg: "from-[#f3e5f5] to-[#ede9fe] border-[#8134af]/30",
    ring: "ring-[#8134af]/20",
  },
];

export default function ApproachSection({
  title,
  subtitle,
  cards,
  microcopy,
  tone = "purple",
}: ApproachSectionProps) {
  return (
    <PageSection tone={tone}>
      <SectionHeader title={title} subtitle={subtitle} align="center" accent="purple" />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {cards.map((card, i) => {
          const style = cardStyles[i % cardStyles.length];
          return (
            <article
              key={card.title}
              className={`group rounded-3xl border bg-gradient-to-br p-8 shadow-sm ring-1 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${style.bg} ${style.ring}`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-3xl shadow-sm transition-transform group-hover:scale-110">
                {card.icon}
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#0B0B0B]">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#515154]">{card.text}</p>
            </article>
          );
        })}
      </div>
      {microcopy && (
        <p className="mt-14 rounded-2xl border border-dashed border-[#8134af]/25 bg-white/60 px-6 py-4 text-center text-sm italic text-[#515154]">
          {microcopy}
        </p>
      )}
    </PageSection>
  );
}
