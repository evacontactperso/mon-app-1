/* 8 fonctionnalités — badges icônes : couleurs Instagram, plus clair et élégant */

export type FeatureListItem = {
  id: string;
  title: string;
  description: string;
  iconKey:
    | "explanation"
    | "flashcards"
    | "mindmaps"
    | "qcm"
    | "songs"
    | "progress"
    | "organization"
    | "gamification";
  /** Dégradé type Instagram, tons clairs, icône en couleur foncée pour contraste élégant */
  iconBadgeClass: string;
};

export const FEATURE_LIST: FeatureListItem[] = [
  {
    id: "1",
    title: "Explication de cours",
    description: "Résumés clairs et structurés pour comprendre chaque leçon.",
    iconKey: "explanation",
    iconBadgeClass:
      "bg-gradient-to-br from-violet-200 to-fuchsia-200 text-violet-600 shadow-[0_2px_10px_rgba(192,132,252,0.2)]",
  },
  {
    id: "2",
    title: "Chansons & Podcast",
    description: "Apprenez en musique et à l'écoute de contenus audio.",
    iconKey: "songs",
    iconBadgeClass:
      "bg-gradient-to-br from-orange-200 to-amber-200 text-orange-600 shadow-[0_2px_10px_rgba(251,146,60,0.18)]",
  },
  {
    id: "3",
    title: "Mindmaps",
    description: "Visualisez les idées et les liens entre les notions.",
    iconKey: "mindmaps",
    iconBadgeClass:
      "bg-gradient-to-br from-[#fde8e8] to-[#fdd5d5] text-[#D65558] shadow-[0_2px_10px_rgba(238,107,110,0.2)]",
  },
  {
    id: "4",
    title: "QCM",
    description: "Testez vos connaissances avec des quiz variés.",
    iconKey: "qcm",
    iconBadgeClass:
      "bg-gradient-to-br from-[#fde8e8] to-orange-200 text-[#D65558] shadow-[0_2px_10px_rgba(238,107,110,0.2)]",
  },
  {
    id: "5",
    title: "Flashcards",
    description: "Mémorisez l'essentiel avec des cartes personnalisables.",
    iconKey: "flashcards",
    iconBadgeClass:
      "bg-gradient-to-br from-[#fde8e8] to-[#fdd5d5] text-[#D65558] shadow-[0_2px_10px_rgba(238,107,110,0.18)]",
  },
  {
    id: "6",
    title: "Suivi des progrès",
    description: "Une vision simple de votre évolution et des points à travailler.",
    iconKey: "progress",
    iconBadgeClass:
      "bg-gradient-to-br from-amber-200 to-yellow-200 text-amber-700 shadow-[0_2px_10px_rgba(251,191,36,0.2)]",
  },
  {
    id: "7",
    title: "Aide à l'organisation",
    description: "Plans de travail et rappels pour ne rien oublier.",
    iconKey: "organization",
    iconBadgeClass:
      "bg-gradient-to-br from-indigo-200 to-violet-200 text-indigo-600 shadow-[0_2px_10px_rgba(129,140,248,0.2)]",
  },
  {
    id: "8",
    title: "Gamification",
    description: "Badges et défis pour apprendre en restant motivé.",
    iconKey: "gamification",
    iconBadgeClass:
      "bg-gradient-to-br from-purple-200 via-[#fde8e8] to-[#fdd5d5] text-purple-600 shadow-[0_2px_10px_rgba(192,132,252,0.2)]",
  },
];
