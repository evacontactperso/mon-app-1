import PageSection, { type SectionTone } from "./PageSection";
import { statCard } from "./tokens";

type Stat = { value: string; label: string; accent?: string };

type StatsBarProps = {
  stats: Stat[];
  variant?: "school" | "parent";
  tone?: SectionTone;
};

const statAccents = [
  "from-[#6366F1] to-[#818cf8]",
  "from-[#EE6B6E] to-[#F58A8D]",
  "from-[#8134af] to-[#a78bfa]",
  "from-[#f58529] to-[#fbbf24]",
];

export default function StatsBar({
  stats,
  variant = "school",
  tone = "indigo",
}: StatsBarProps) {
  const accentDefault = variant === "parent" ? "text-[#EE6B6E]" : "text-[#6366F1]";

  return (
    <PageSection tone={tone}>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
        {stats.map((stat, i) => (
          <div key={stat.label} className={statCard}>
            <div
              className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${statAccents[i % statAccents.length]}`}
              aria-hidden
            />
            <p
              className={`mt-2 text-4xl font-extrabold font-heading tracking-tight md:text-5xl lg:text-6xl ${
                stat.accent ?? accentDefault
              }`}
            >
              {stat.value}
            </p>
            <p className="mt-3 text-sm font-medium leading-snug text-[#515154]">{stat.label}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
