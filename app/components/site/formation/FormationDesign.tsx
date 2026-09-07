import type { ReactNode } from "react";
import type { SectionTone } from "../PageSection";
import { sectionSizeClasses, type SectionSize } from "../PageSection";

/** Palette 100 % marque L'Atelier des Méthodes */
export const F = {
  cream: "#FAF8F5",
  alt: "#F9F9FB",
  text: "#0B0B0B",
  textSecondary: "#515154",
  pink: "#EE6B6E",
  pinkSoft: "#fde8e8",
  indigo: "#6366F1",
  indigoSoft: "#EEF2FF",
  blue: "#2ec8dc",
  blueSoft: "#ddf6f8",
  yellow: "#fcaf45",
  yellowSoft: "#fff8e7",
  warm: "#f58529",
  warmSoft: "#fef3e8",
} as const;

export const PASTEL_BLOCKS = [
  "bg-[#fde8e8]",
  "bg-[#EEF2FF]",
  "bg-[#ddf6f8]",
  "bg-[#fff8e7]",
] as const;

/** Couleurs sémantiques fixes par module */
export const MODULE_THEME = [
  { bg: "bg-[#6366F1]", light: "bg-[#EEF2FF]", border: "border-[#6366F1]/30" },
  { bg: "bg-[#EE6B6E]", light: "bg-[#fde8e8]", border: "border-[#EE6B6E]/30" },
  { bg: "bg-[#2ec8dc]", light: "bg-[#ddf6f8]", border: "border-[#2ec8dc]/30" },
  { bg: "bg-[#fcaf45]", light: "bg-[#fff8e7]", border: "border-[#fcaf45]/30" },
] as const;

/** Fond de carte contrasté avec le ton de section parent */
export function cardSurfaceForSection(tone: SectionTone, rounded = "rounded-[28px]"): string {
  if (tone === "white") {
    return `${rounded} border border-slate-200/70 bg-[#FAF8F5] shadow-sm`;
  }
  if (tone === "dark") {
    return `${rounded} border border-white/25 bg-[#161616] shadow-[0_8px_32px_rgba(0,0,0,0.35)]`;
  }
  return `${rounded} border border-slate-200/70 bg-white shadow-sm`;
}

/** Ordre fixe : Rose → Indigo → Bleu → Jaune */
export const SECTION_COLOR_ORDER = ["pink", "indigo", "blue", "yellow"] as const;
export type SectionColor = (typeof SECTION_COLOR_ORDER)[number];
export type BrandSectionColor = SectionColor | "purple" | "red";

export const HIGHLIGHT_PILL_ORDER = SECTION_COLOR_ORDER;
export type HighlightPillColor = SectionColor;

/** Décalage de départ par page live (chaque page commence par une couleur différente) */
export const PAGE_HIGHLIGHT_OFFSET = {
  formation: 0, // Rose
  stages: 1, // Indigo
  cours: 2, // Bleu
  accompagnement: 3, // Jaune
  contact: 0, // Rose (cycle)
  methodologie: 0, // Rose
} as const;

export type SitePage = keyof typeof PAGE_HIGHLIGHT_OFFSET;

export function sectionColorAt(page: SitePage, sectionIndex: number): SectionColor {
  const offset = PAGE_HIGHLIGHT_OFFSET[page];
  return SECTION_COLOR_ORDER[(offset + sectionIndex) % SECTION_COLOR_ORDER.length];
}

export const highlightPillAt = sectionColorAt;

/** Fonds de section légers — 1 variante par couleur (colonnes 1→5 du picker) */
export type SectionTint = { className: string; overlay?: string };

export const SECTION_TINT_BY_COLOR: Record<SectionColor, SectionTint> = {
  pink: { className: "bg-gradient-to-br from-[#fde8e8]/55 via-white to-white" },
  indigo: { className: "bg-gradient-to-br from-[#EEF2FF]/45 via-white to-[#EEF2FF]/30" },
  blue: { className: "bg-gradient-to-br from-[#ddf6f8]/45 via-white to-[#ddf6f8]/30" },
  yellow: {
    className: "bg-gradient-to-br from-[#fff8e7]/75 via-[#fffbf2] to-[#fef3e8]/40",
    overlay:
      "bg-[radial-gradient(ellipse_at_top,_rgba(252,175,69,0.14)_0%,_transparent_55%)]",
  },
};

export const SECTION_TINT_BY_PILL = SECTION_TINT_BY_COLOR;

export function sectionTintForColor(color: SectionColor): SectionTint {
  return SECTION_TINT_BY_COLOR[color];
}

const BRAND_SECTION_TINT: Record<"purple" | "red", SectionTint> = {
  purple: {
    className: "bg-gradient-to-br from-[#f3e5f5]/70 via-white to-[#faf5ff]/50",
    overlay:
      "bg-[radial-gradient(ellipse_at_top_right,_rgba(129,52,175,0.1)_0%,_transparent_55%)]",
  },
  red: { className: "bg-gradient-to-br from-[#fde8e8]/45 via-white to-[#fde8e8]/30" },
};

export function sectionTintForBrandColor(color: BrandSectionColor): SectionTint {
  if (color === "purple" || color === "red") {
    return BRAND_SECTION_TINT[color];
  }
  return SECTION_TINT_BY_COLOR[color];
}

export const sectionTintForPill = sectionTintForColor;

export const SECTION_ACCENT_BG: Record<SectionColor, string> = {
  pink: "bg-[#EE6B6E]",
  indigo: "bg-[#6366F1]",
  blue: "bg-[#2ec8dc]",
  yellow: "bg-[#fcaf45]",
};

export const SECTION_ACCENT_SOFT: Record<SectionColor, { bg: string; text: string }> = {
  pink: { bg: "bg-[#fde8e8]", text: "text-[#EE6B6E]" },
  indigo: { bg: "bg-[#EEF2FF]", text: "text-[#6366F1]" },
  blue: { bg: "bg-[#ddf6f8]", text: "text-[#0891b2]" },
  yellow: { bg: "bg-[#fff8e7]", text: "text-[#b45309]" },
};

export function cardSurfaceOnTintedBg(rounded = "rounded-[28px]"): string {
  return `${rounded} border border-slate-200/70 bg-white shadow-sm`;
}

export function SectionTintLayer({ tint }: { tint: SectionTint }) {
  return (
    <>
      <div className={`pointer-events-none absolute inset-0 ${tint.className}`} aria-hidden />
      {tint.overlay && (
        <div className={`pointer-events-none absolute inset-0 ${tint.overlay}`} aria-hidden />
      )}
    </>
  );
}

export function TintedPageSection({
  pillColor,
  id,
  children,
  className = "",
  innerClassName = "mx-auto max-w-6xl px-4 md:px-6",
  size = "comfortable",
}: {
  pillColor: BrandSectionColor;
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  size?: SectionSize;
}) {
  return (
    <section
      id={id}
      className={`relative ${sectionSizeClasses[size]} ${className}`}
    >
      <SectionTintLayer tint={sectionTintForBrandColor(pillColor)} />
      <div className={`relative ${innerClassName}`}>{children}</div>
    </section>
  );
}

const HIGHLIGHT_PILL_CLASS: Record<SectionColor, string> = {
  pink: "mx-1 inline-block rounded-full bg-[#EE6B6E] px-3 py-0.5 font-extrabold text-white md:px-4 md:py-1",
  indigo:
    "mx-1 inline-block rounded-full bg-[#6366F1] px-3 py-0.5 font-extrabold text-white md:px-4 md:py-1",
  blue: "mx-1 inline-block rounded-full bg-[#2ec8dc] px-3 py-0.5 font-extrabold text-white md:px-4 md:py-1",
  yellow:
    "mx-1 inline-block rounded-full bg-[#fcaf45] px-3 py-0.5 font-extrabold text-white md:px-4 md:py-1",
};

export function HighlightPill({
  color,
  children,
}: {
  color: SectionColor;
  children: ReactNode;
}) {
  return <span className={HIGHLIGHT_PILL_CLASS[color]}>{children}</span>;
}

/** Pastille rose — hero uniquement */
export function BrandPill({ children }: { children: ReactNode }) {
  return (
    <span className="mx-1 inline-block rounded-2xl bg-[#EE6B6E] px-3 py-0.5 font-semibold text-white md:px-4 md:py-1">
      {children}
    </span>
  );
}

/** Pastille indigo — titres de section */
export function IndigoPill({ children }: { children: ReactNode }) {
  return (
    <span className="mx-1 inline-block rounded-full bg-[#6366F1] px-3 py-0.5 text-white md:px-4 md:py-1">
      {children}
    </span>
  );
}

/** Pastille rose — titres de section (variante) */
export function PinkPill({ children }: { children: ReactNode }) {
  return (
    <span className="mx-1 inline-block rounded-full bg-[#EE6B6E] px-3 py-0.5 text-white md:px-4 md:py-1">
      {children}
    </span>
  );
}

/** Pastille jaune — titres de section */
export function YellowPill({ children }: { children: ReactNode }) {
  return (
    <span className="mx-1 inline-block rounded-full bg-[#fcaf45] px-3 py-0.5 font-semibold text-white md:px-4 md:py-1">
      {children}
    </span>
  );
}

/** Pastille violette — titres de section */
export function PurplePill({ children }: { children: ReactNode }) {
  return (
    <span className="mx-1 inline-block rounded-full bg-[#8134af] px-3 py-0.5 text-white md:px-4 md:py-1">
      {children}
    </span>
  );
}

/** Pastille rouge — titres de section */
export function RedPill({ children }: { children: ReactNode }) {
  return (
    <span className="mx-1 inline-block rounded-full bg-[#f26e6e] px-3 py-0.5 text-white md:px-4 md:py-1">
      {children}
    </span>
  );
}

/** Pastille bleue — titres de section */
export function BluePill({ children }: { children: ReactNode }) {
  return (
    <span className="mx-1 inline-block rounded-full bg-[#2ec8dc] px-3 py-0.5 font-semibold text-white md:px-4 md:py-1">
      {children}
    </span>
  );
}

/** @deprecated Utiliser BluePill */
export const SkyPill = BluePill;

/** @deprecated Utiliser YellowPill */
export const OrangePill = YellowPill;

export function FormationSectionTitle({
  children,
  highlight,
  pill = "indigo",
  className = "",
}: {
  children: ReactNode;
  highlight?: string;
  pill?: BrandSectionColor;
  className?: string;
}) {
  const baseClass = `text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0B0B0B] md:text-4xl lg:text-[2.75rem] ${className}`;

  if (!highlight || typeof children !== "string") {
    return <h2 className={baseClass}>{children}</h2>;
  }

  const text = children as string;
  if (!text.includes(highlight)) {
    return <h2 className={baseClass}>{children}</h2>;
  }

  const [before, after] = text.split(highlight);
  const pillMap = {
    pink: PinkPill,
    indigo: IndigoPill,
    blue: BluePill,
    yellow: YellowPill,
    purple: PurplePill,
    red: RedPill,
  } as const;
  const Pill = pillMap[pill];

  return (
    <h2 className={`${baseClass} leading-[1.15]`}>
      {before}
      <Pill>{highlight}</Pill>
      {after}
    </h2>
  );
}

export function FormationEyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#8E8E93]">
      {children}
    </span>
  );
}

export function PillTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-[#0B0B0B]/15 px-3 py-1 text-sm font-medium text-[#0B0B0B]">
      {children}
    </span>
  );
}

export function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
