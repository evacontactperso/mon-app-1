import Button from "./Button";
import { HighlightPill, type SectionColor } from "./formation/FormationDesign";

const ACCENT: Record<
  SectionColor,
  {
    solid: string;
    softFrom: string;
    glow: string;
    border: string;
    text: string;
  }
> = {
  yellow: {
    solid: "#fcaf45",
    softFrom: "from-[#fff8e7]/80",
    glow: "bg-[#fcaf45]",
    border: "border-[#fcaf45]",
    text: "text-[#fcaf45]",
  },
  blue: {
    solid: "#2ec8dc",
    softFrom: "from-[#ddf6f8]/80",
    glow: "bg-[#2ec8dc]",
    border: "border-[#2ec8dc]",
    text: "text-[#0891b2]",
  },
  indigo: {
    solid: "#6366F1",
    softFrom: "from-[#EEF2FF]/80",
    glow: "bg-[#6366F1]",
    border: "border-[#6366F1]",
    text: "text-[#6366F1]",
  },
  pink: {
    solid: "#EE6B6E",
    softFrom: "from-[#fde8e8]/80",
    glow: "bg-[#EE6B6E]",
    border: "border-[#EE6B6E]",
    text: "text-[#EE6B6E]",
  },
};

function TripleStroke({
  x1,
  y1,
  x2,
  y2,
  color,
  gap = 2.4,
  strokeWidth = 1.35,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  gap?: number;
  strokeWidth?: number;
}) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;

  return (
    <>
      {([-gap, 0, gap] as const).map((offset) => (
        <line
          key={offset}
          x1={x1 + nx * offset}
          y1={y1 + ny * offset}
          x2={x2 + nx * offset}
          y2={y2 + ny * offset}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="butt"
        />
      ))}
    </>
  );
}

function LogoM({ className = "", color }: { className?: string; color: string }) {
  const L = 34;
  const R = 86;
  const top = 32;
  const bot = 88;
  const midX = 60;
  const valley = 78;

  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect x="10" y="10" width="100" height="100" stroke={color} strokeWidth="3" fill="none" />
      <TripleStroke color={color} x1={L} y1={top} x2={L} y2={bot} />
      <TripleStroke color={color} x1={L} y1={top} x2={midX} y2={valley} />
      <TripleStroke color={color} x1={R} y1={top} x2={midX} y2={valley} />
      <TripleStroke color={color} x1={R} y1={top} x2={R} y2={bot} />
    </svg>
  );
}

function ColorStripe({ color }: { color: string }) {
  return (
    <div
      className="relative hidden min-h-[6rem] lg:block lg:min-h-[88svh]"
      style={{ backgroundColor: color }}
      aria-hidden
    />
  );
}

function renderHighlighted(
  text: string,
  highlightWord: string | undefined,
  accent: SectionColor,
) {
  const lines = text.split("\n");
  return lines.map((line, lineIndex) => {
    const content =
      highlightWord && line.includes(highlightWord)
        ? (() => {
            const i = line.indexOf(highlightWord);
            return (
              <>
                {line.slice(0, i)}
                <HighlightPill color={accent}>{highlightWord}</HighlightPill>
                {line.slice(i + highlightWord.length)}
              </>
            );
          })()
        : line;

    return (
      <span key={lineIndex} className={lines.length > 1 ? "block" : undefined}>
        {content}
      </span>
    );
  });
}

export type OfferSplitHeroProps = {
  eyebrow: string;
  title: string;
  highlightWord?: string;
  lead: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  /** 0 = rose, 2 = jaune, 3 = bleu clair, 4 = bleu-violet foncé */
  accent?: SectionColor;
  /**
   * Largeur max du titre (en ch) pour forcer ~2 lignes de longueur proche.
   * Plus la valeur est basse, plus les lignes se rapprochent en longueur.
   */
  titleMaxCh?: number;
};

export default function OfferSplitHero({
  eyebrow,
  title,
  highlightWord,
  lead,
  ctaPrimary,
  ctaSecondary,
  accent = "yellow",
  titleMaxCh = 36,
}: OfferSplitHeroProps) {
  const theme = ACCENT[accent];

  return (
    <section className="relative grid w-full overflow-x-clip lg:min-h-[88svh] lg:grid-cols-[minmax(2.75rem,5vw)_minmax(0,1fr)_minmax(2.75rem,5vw)]">
      <ColorStripe color={theme.solid} />
      <div
        className={`relative flex flex-col justify-center bg-gradient-to-br ${theme.softFrom} via-white to-white px-4 py-14 sm:py-16 md:px-6 lg:min-h-[88svh] lg:px-8`}
      >
        <div
          className={`pointer-events-none absolute -right-16 top-10 h-64 w-64 rounded-full ${theme.glow} opacity-40 blur-3xl md:h-96 md:w-96`}
          aria-hidden
        />
        <div className="relative mx-auto w-full max-w-none text-center">
          <div className="mb-5 flex justify-center sm:mb-6 md:mb-8">
            <LogoM
              color={theme.solid}
              className="aspect-square h-[3.85rem] w-[3.85rem] sm:h-[4.65rem] sm:w-[4.65rem] md:h-[5.35rem] md:w-[5.35rem] lg:h-24 lg:w-24"
            />
            <span className="sr-only">L&apos;Atelier des Méthodes</span>
          </div>
          <p
            className={`mx-auto inline-block rounded-md border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] md:text-xs ${theme.border} ${theme.text}`}
          >
            {eyebrow}
          </p>
          <h1
            className="mx-auto mt-4 text-balance text-[1.7rem] font-extrabold leading-[1.25] tracking-tight text-[#0B0B0B] outline-none sm:mt-5 sm:text-3xl md:text-4xl lg:text-[2.85rem]"
            style={{ maxWidth: `min(100%, ${titleMaxCh}ch)` }}
          >
            {renderHighlighted(title, highlightWord, accent)}
          </h1>
          <p
            className={`mx-auto mt-4 text-[15px] leading-relaxed text-[#515154] sm:mt-5 sm:text-base md:text-lg ${
              lead.includes("\n")
                ? "max-w-[68ch] whitespace-pre-line"
                : "max-w-[42ch] text-balance"
            }`}
          >
            {lead}
          </p>
          <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
            <Button href={ctaPrimary.href} variant="parent" className="w-full sm:w-auto">
              {ctaPrimary.label}
            </Button>
            <Button href={ctaSecondary.href} variant="parentOutline" className="w-full sm:w-auto">
              {ctaSecondary.label}
            </Button>
          </div>
        </div>
      </div>
      <ColorStripe color={theme.solid} />
    </section>
  );
}
