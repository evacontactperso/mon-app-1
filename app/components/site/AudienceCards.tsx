import Button from "./Button";
import PageSection, { type SectionTone } from "./PageSection";
import SectionHeader from "./SectionHeader";

type AudienceCard = {
  badge: string;
  title: string;
  subtitle: string;
  bullets: string[];
  cta: { label: string; href: string };
  variant: "school" | "parent";
};

type AudienceCardsProps = {
  title: string;
  cards: AudienceCard[];
  tone?: SectionTone;
};

const cardThemes = {
  school: {
    wrapper:
      "border-[#6366F1]/25 bg-gradient-to-br from-[#EEF2FF] via-white to-[#E0E7FF]/60",
    glow: "group-hover:shadow-[0_24px_60px_rgba(99,102,241,0.18)]",
    bullet: "bg-[#6366F1] text-white",
    accent: "text-[#6366F1]",
    icon: "🏫",
    buttonVariant: "school" as const,
  },
  parent: {
    wrapper:
      "border-[#EE6B6E]/25 bg-gradient-to-br from-[#fde8e8]/60 via-white to-[#fef3e8]/50",
    glow: "group-hover:shadow-[0_24px_60px_rgba(238,107,110,0.15)]",
    bullet: "bg-[#EE6B6E] text-white",
    accent: "text-[#EE6B6E]",
    icon: "👨‍👩‍👧",
    buttonVariant: "parent" as const,
  },
};

export default function AudienceCards({
  title,
  cards,
  tone = "alt",
}: AudienceCardsProps) {
  return (
    <PageSection tone={tone}>
      <SectionHeader title={title} align="center" accent="indigo" />
      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {cards.map((card) => {
          const theme = cardThemes[card.variant];
          return (
            <article
              key={card.title}
              className={`group relative flex flex-col overflow-hidden rounded-[28px] border p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 ${theme.wrapper} ${theme.glow}`}
            >
              <div className="flex items-start justify-between gap-4">
                <p className={`text-xs font-bold uppercase tracking-widest ${theme.accent}`}>
                  {card.badge}
                </p>
                <span className="text-3xl" aria-hidden>
                  {theme.icon}
                </span>
              </div>
              <h3 className="mt-3 text-2xl font-bold text-[#0B0B0B] md:text-[1.75rem]">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#515154]">{card.subtitle}</p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-[#0B0B0B]">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${theme.bullet}`}
                    >
                      ✓
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-slate-200/50 pt-6">
                <Button href={card.cta.href} variant={theme.buttonVariant}>
                  {card.cta.label}
                </Button>
              </div>
            </article>
          );
        })}
      </div>
    </PageSection>
  );
}
