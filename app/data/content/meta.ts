/**
 * Archives pubs Meta conservées (page /meta retirée).
 * À réutiliser : MetaAd00 (grille 1080×1350) + MetaAd00legacy (rose avant corrections).
 */
export const META_AD = {
  width: 1080,
  height: 1350,
  displayWidth: 420,
  bottomSafePct: 8,
  colors: {
    pink: "#EE6B6E",
    pinkSoft: "#fde8e8",
    indigo: "#6366F1",
    indigoSoft: "#EEF2FF",
    purple: "#8134af",
    purpleSoft: "#f3e5f5",
    blue: "#2ec8dc",
    yellow: "#fcaf45",
    cream: "#FAF8F5",
    ink: "#0B0B0B",
    muted: "#515154",
    white: "#FFFFFF",
  },
} as const;

export const META_AD_BRAND = "L'Atelier des Méthodes";

export const META_AD_FEATURED = {
  line1: "Votre ado travaille beaucoup…",
  line2: "mais manque de méthode ?",
  intro:
    "Diplômée d'HEC Paris, je propose des accompagnements en méthodologie scolaire pour aider les collégiens et lycéens à devenir plus efficaces et autonomes.",
  learnTitle: "Concrètement, on apprend à :",
  learnItems: [
    "organiser ses devoirs et ses révisions",
    "se concentrer et limiter les distractions",
    "structurer sa pensée",
    "mémoriser efficacement",
    "mieux gérer la charge de travail et le stress",
  ] as const,
  footerOffers: "Stages de vacances & soutien scolaire",
  phone: "06 51 85 32 75",
} as const;

/** Les 2 pubs à conserver. */
export const META_AD_ARCHIVED = [
  {
    id: "00" as const,
    label: "00",
    name: "Pub complète — grille 1080×1350",
    note: "Marge 64, grille stricte, logo M + HEC, photo colonne droite",
  },
  {
    id: "00legacy" as const,
    label: "00 · copie",
    name: "Pub complète — rose (avant corrections)",
    note: "HEC haut droite, carte Concrètement, photo bas-droite",
  },
] as const;
