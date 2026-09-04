import PageSection, { type SectionTone } from "./PageSection";
import SectionHeader from "./SectionHeader";
import { cardHover, pastelSoft } from "./tokens";

type Pillar = {
  title: string;
  text: string;
  color?: "orange" | "pink" | "purple" | "yellow" | "green" | "blue" | "coral";
};

type PillarCardsProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  text?: string;
  pillars: Pillar[];
  tone?: SectionTone;
};

const legacyColorMap: Record<string, keyof typeof pastelSoft> = {
  blue: "orange",
  coral: "pink",
  purple: "purple",
  green: "green",
  yellow: "yellow",
  orange: "orange",
  pink: "pink",
};

const pillarNumbers = ["01", "02", "03", "04", "05", "06"];

export default function PillarCards({
  eyebrow,
  title,
  subtitle,
  text,
  pillars,
  tone = "alt",
}: PillarCardsProps) {
  return (
    <PageSection tone={tone}>
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle ?? text}
        accent="purple"
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar, i) => {
          const defaults = ["orange", "pink", "purple", "yellow", "green"] as const;
          const raw = pillar.color ?? defaults[i % defaults.length];
          const color = legacyColorMap[raw] ?? raw;
          return (
            <article
              key={pillar.title}
              className={`group relative overflow-hidden rounded-3xl border p-6 ${pastelSoft[color]} ${cardHover}`}
            >
              <span
                className="pointer-events-none absolute -right-1 -top-2 text-5xl font-extrabold font-heading leading-none opacity-20"
                aria-hidden
              >
                {pillarNumbers[i] ?? String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="relative text-lg font-bold text-[#0B0B0B]">{pillar.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-[#515154]">{pillar.text}</p>
            </article>
          );
        })}
      </div>
    </PageSection>
  );
}
