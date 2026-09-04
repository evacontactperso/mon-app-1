import type { ReactNode } from "react";

const KEYWORD_PILL_BASE = "mx-1 inline-block px-3 py-0.5 md:px-4 md:py-1";

/** Palette inspirée Lift / Altera — punchy & élégant */
export const F = {
  cream: "#FAF8F5",
  navy: "#1a1f4e",
  coral: "#FF5C5C",
  blue: "#3b46f1",
  pink: "#F58A8D",
  fuchsia: "#EE6B6E",
  peach: "#FFD4BC",
  lavender: "#DDD6FE",
  sky: "#BAE6FD",
  rose: "#FECACA",
} as const;

export const PASTEL_BLOCKS = [
  "bg-[#FFD4BC]", // peach
  "bg-[#DDD6FE]", // lavender
  "bg-[#BAE6FD]", // sky
  "bg-[#FECACA]", // rose
  "bg-[#BBF7D0]", // mint
] as const;

export const MODULE_SQUARES = [
  { bg: "bg-[#3b46f1]", light: "bg-[#EEF2FF]" },
  { bg: "bg-[#F58A8D]", light: "bg-[#fde8e8]" },
  { bg: "bg-[#7DD3FC]", light: "bg-[#e0f2fe]" },
  { bg: "bg-[#FF5C5C]", light: "bg-[#fee2e2]" },
] as const;

/** Pastille corail inclinée — mot-clé dans un titre */
export function CoralPill({ children }: { children: ReactNode }) {
  return (
    <span className={`${KEYWORD_PILL_BASE} -rotate-2 rounded-2xl bg-[#FF5C5C] font-semibold text-white italic`}>
      {children}
    </span>
  );
}

/** Pastille bleue — accent dans un titre de section */
export function BluePill({ children }: { children: ReactNode }) {
  return (
    <span className={`${KEYWORD_PILL_BASE} rounded-full bg-[#3b46f1] font-semibold text-white`}>
      {children}
    </span>
  );
}

/** Titre de section avec mot en surbrillance */
export function FormationSectionTitle({
  children,
  highlight,
  pill = "blue",
  className = "",
}: {
  children: ReactNode;
  highlight?: string;
  pill?: "blue" | "coral";
  className?: string;
}) {
  if (!highlight || typeof children !== "string") {
    return (
      <h2
        className={`text-3xl font-extrabold leading-[1.1] tracking-tight text-[#1a1f4e] md:text-4xl lg:text-[2.75rem] ${className}`}
      >
        {children}
      </h2>
    );
  }

  const text = children as string;
  if (!text.includes(highlight)) {
    return (
      <h2
        className={`text-3xl font-extrabold leading-[1.1] tracking-tight text-[#1a1f4e] md:text-4xl lg:text-[2.75rem] ${className}`}
      >
        {children}
      </h2>
    );
  }

  const [before, after] = text.split(highlight);
  const Pill = pill === "coral" ? CoralPill : BluePill;

  return (
    <h2
      className={`text-3xl font-extrabold leading-[1.15] tracking-tight text-[#1a1f4e] md:text-4xl lg:text-[2.75rem] ${className}`}
    >
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
    <span className="inline-flex rounded-full border border-[#1a1f4e]/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#1a1f4e]">
      {children}
    </span>
  );
}
