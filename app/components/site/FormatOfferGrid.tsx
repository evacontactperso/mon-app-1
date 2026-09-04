import Button from "./Button";
import PageSection, { type SectionSize, type SectionTone } from "./PageSection";
import SectionHeader from "./SectionHeader";

type AccentColor = "indigo" | "pink" | "orange" | "purple";

type FormatOfferCard = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  idealFor: string;
  topics: string;
  cta: { label: string; href: string };
  badge?: string;
  accentColor?: AccentColor;
};

type FormatOfferGridProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cards: FormatOfferCard[];
  tone?: SectionTone;
  size?: SectionSize;
  layout?: "grid" | "row";
  wide?: boolean;
};

const accentStyles: Record<
  AccentColor,
  {
    border: string;
    bg: string;
    iconBg: string;
    bullet: string;
    divider: string;
    buttonClass: string;
    badge: string;
    hover: string;
  }
> = {
  indigo: {
    border: "border-[#6366F1]/30",
    bg: "from-[#EEF2FF]/80 via-white to-[#E0E7FF]/40",
    iconBg: "from-[#EEF2FF] to-[#C7D2FE]",
    bullet: "bg-[#6366F1]",
    divider: "border-[#6366F1]/10",
    buttonClass:
      "bg-[#6366F1] hover:bg-[#4F46E5] shadow-[0_4px_14px_rgba(99,102,241,0.3)]",
    badge: "bg-[#6366F1]",
    hover: "hover:shadow-[0_24px_60px_rgba(99,102,241,0.18)]",
  },
  pink: {
    border: "border-[#EE6B6E]/30",
    bg: "from-[#fde8e8]/60 via-white to-[#fef3e8]/50",
    iconBg: "from-[#fde8e8] to-[#fbcfe8]",
    bullet: "bg-[#EE6B6E]",
    divider: "border-[#EE6B6E]/10",
    buttonClass:
      "bg-[#EE6B6E] hover:bg-[#E05558] shadow-[0_4px_14px_rgba(238,107,110,0.25)]",
    badge: "bg-[#EE6B6E]",
    hover: "hover:shadow-[0_24px_60px_rgba(238,107,110,0.15)]",
  },
  orange: {
    border: "border-[#f58529]/30",
    bg: "from-[#fef3e8]/80 via-white to-[#fff8e7]/50",
    iconBg: "from-[#fef3e8] to-[#fed7aa]",
    bullet: "bg-[#f58529]",
    divider: "border-[#f58529]/10",
    buttonClass:
      "bg-[#f58529] hover:bg-[#ea580c] shadow-[0_4px_14px_rgba(245,133,41,0.3)]",
    badge: "bg-[#f58529]",
    hover: "hover:shadow-[0_24px_60px_rgba(245,133,41,0.15)]",
  },
  purple: {
    border: "border-[#8134af]/30",
    bg: "from-[#f3e5f5]/80 via-white to-[#ede9fe]/40",
    iconBg: "from-[#f3e5f5] to-[#ddd6fe]",
    bullet: "bg-[#8134af]",
    divider: "border-[#8134af]/10",
    buttonClass:
      "bg-[#8134af] hover:bg-[#6b21a8] shadow-[0_4px_14px_rgba(129,52,175,0.3)]",
    badge: "bg-[#8134af]",
    hover: "hover:shadow-[0_24px_60px_rgba(129,52,175,0.15)]",
  },
};

const defaultAccent: AccentColor = "pink";

export default function FormatOfferGrid({
  id,
  eyebrow,
  title,
  subtitle,
  cards,
  tone = "alt",
  size = "immersive",
  layout = "grid",
  wide = false,
}: FormatOfferGridProps) {
  const gridClass =
    layout === "row"
      ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
      : "lg:grid-cols-2";

  const gapClass = wide ? "gap-4" : "gap-6";
  const containerClass = wide
    ? "mx-auto max-w-7xl px-3 md:px-4"
    : undefined;

  return (
    <PageSection id={id} tone={tone} size={size} innerClassName={containerClass}>
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        align="center"
        accent="indigo"
      />
      <div className={`mt-14 grid ${gapClass} ${gridClass}`}>
        {cards.map((card) => {
          const accent = accentStyles[card.accentColor ?? defaultAccent];
          return (
            <article
              key={card.slug}
              className={`group relative flex flex-col overflow-hidden rounded-[28px] border bg-gradient-to-br p-5 shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 md:p-6 ${accent.border} ${accent.bg} ${accent.hover} ${
                card.badge ? "ring-2 ring-[#EE6B6E]/10" : ""
              }`}
            >
              {card.badge && (
                <span
                  className={`absolute -top-3 right-4 rounded-full px-3 py-1 text-xs font-bold text-white ${accent.badge}`}
                >
                  {card.badge}
                </span>
              )}
              <div className="flex flex-col gap-3">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-2xl transition-transform group-hover:scale-110 ${accent.iconBg}`}
                >
                  {card.icon}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#0B0B0B] xl:text-xl">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#515154]">{card.description}</p>
                </div>
              </div>
              <ul className="mt-4 flex flex-1 flex-col gap-2.5">
                <li className="flex items-start gap-2 text-sm text-[#0B0B0B]">
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white ${accent.bullet}`}
                  >
                    ✓
                  </span>
                  <span>
                    <span className="font-bold">Idéal pour : </span>
                    {card.idealFor}
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#0B0B0B]">
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white ${accent.bullet}`}
                  >
                    ✓
                  </span>
                  <span>
                    <span className="font-bold">Ce qu&apos;on travaille : </span>
                    {card.topics}
                  </span>
                </li>
              </ul>
              <div className={`mt-6 border-t pt-5 ${accent.divider}`}>
                <Button
                  href={card.cta.href}
                  variant="primary"
                  className={`w-full text-center text-sm text-white ${accent.buttonClass}`}
                >
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
