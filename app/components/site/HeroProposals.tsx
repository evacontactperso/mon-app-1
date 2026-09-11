import Button from "./Button";
import {
  HighlightPill,
  type SectionColor,
} from "./formation/FormationDesign";
import { MENU_NAV_LINKS } from "@/app/data/content/site";

export type HeroAfficheProps = {
  /** Titre de la page (ex. « Cours collectifs »), sans numéro de menu */
  pageTitle: string;
  title: string;
  highlightWord?: string;
  lead: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  accent?: SectionColor;
};

export function firstSentence(text: string) {
  const match = text.match(/^[^.!?]+[.!?]/);
  return match?.[0]?.trim() ?? text;
}

export function pageTitleFromMenu(href: string) {
  const link = MENU_NAV_LINKS.find((item) => item.href === href);
  return link?.label.replace(/^\d+\.\s*/, "") ?? "";
}

/**
 * Largeur max du lead (en ch) pour viser ~2 lignes de longueur proche.
 * Textes courts restent sur 1 ligne ; les longs se coupent près du milieu.
 */
export function leadMaxWidthCh(lead: string): number {
  const len = lead.trim().length;
  if (len === 0) return 40;
  if (len <= 60) {
    return Math.min(Math.max(len + 4, 28), 52);
  }
  return Math.ceil(len / 2) + 8;
}

const ACCENT_SOFT: Record<SectionColor, string> = {
  pink: "from-[#fde8e8]/70 via-white to-white",
  indigo: "from-[#EEF2FF]/70 via-white to-white",
  yellow: "from-[#fff8e7]/80 via-white to-white",
  blue: "from-[#ddf6f8]/70 via-white to-white",
};

const ACCENT_SOLID: Record<SectionColor, string> = {
  pink: "bg-[#EE6B6E]",
  indigo: "bg-[#6366F1]",
  yellow: "bg-[#fcaf45]",
  blue: "bg-[#2ec8dc]",
};

function TitleWithHighlight({
  title,
  highlightWord,
  accent,
  className,
}: {
  title: string;
  highlightWord?: string;
  accent: SectionColor;
  className: string;
}) {
  if (!highlightWord || !title.includes(highlightWord)) {
    return <h1 className={className}>{title}</h1>;
  }
  const index = title.indexOf(highlightWord);
  return (
    <h1 className={className}>
      {title.slice(0, index)}
      <HighlightPill color={accent}>{highlightWord}</HighlightPill>
      {title.slice(index + highlightWord.length)}
    </h1>
  );
}

/** Hero « Affiche » — titre de page dominant, puis accroche */
export default function HeroProposalAffiche({
  pageTitle,
  title,
  highlightWord,
  lead,
  ctaPrimary,
  ctaSecondary,
  accent = "indigo",
}: HeroAfficheProps) {
  return (
    <section
      className={`relative flex min-h-[78svh] flex-col justify-center overflow-hidden bg-gradient-to-br ${ACCENT_SOFT[accent]} py-20 md:py-28`}
    >
      <div
        className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full opacity-40 blur-3xl md:h-96 md:w-96"
        style={{
          background:
            accent === "pink"
              ? "#EE6B6E"
              : accent === "indigo"
                ? "#6366F1"
                : accent === "blue"
                  ? "#2ec8dc"
                  : "#fcaf45",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center md:px-10">
        <p className="font-[family-name:var(--font-heading)] text-3xl font-extrabold leading-none tracking-tight text-[#0B0B0B] md:text-5xl lg:text-6xl">
          {pageTitle}
        </p>
        <div className={`mx-auto mt-8 h-1 w-16 rounded-full ${ACCENT_SOLID[accent]}`} />
        <TitleWithHighlight
          title={title}
          highlightWord={highlightWord}
          accent={accent}
          className="mt-8 text-2xl font-extrabold leading-snug tracking-tight text-[#0B0B0B] md:text-3xl lg:text-4xl"
        />
        <p
          className="mx-auto mt-5 text-base leading-relaxed text-balance text-[#515154] md:text-lg"
          style={{ maxWidth: `min(100%, ${leadMaxWidthCh(lead)}ch)` }}
        >
          {lead}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={ctaPrimary.href} variant="parent">
            {ctaPrimary.label}
          </Button>
          <Button href={ctaSecondary.href} variant="parentOutline">
            {ctaSecondary.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
