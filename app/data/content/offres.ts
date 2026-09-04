export type OfferContent = {
  slug: string;
  meta: { title: string; description: string };
  hero: { badge: string; title: string; subtitle: string };
  forWho: { title: string; items: string[] };
  program: {
    title: string;
    sections: { title: string; text: string; bullets?: string[] }[];
  };
  format: { title: string; items: { label: string; value: string }[] };
  outcomes: { title: string; cards: { title: string; text: string }[] };
  faq?: { question: string; answer: string }[];
  cta: { label: string; href: string };
};

export const OFFER_SLUGS = [
  "formation-en-ligne",
  "stage-vacances",
  "cours-hebdomadaires",
  "accompagnement-personnalise",
] as const;

export type OfferSlug = (typeof OFFER_SLUGS)[number];

const placeholderProgram = (theme: string) => ({
  title: "Programme",
  sections: [
    {
      title: "Contenu à préciser",
      text: `Le détail du programme « ${theme} » sera complété prochainement. La structure de cette page est prête à recevoir le contenu définitif.`,
      bullets: [
        "Objectifs pédagogiques",
        "Déroulé des séances",
        "Supports remis aux familles",
        "Modalités de suivi",
      ],
    },
  ],
});

export const offresContent: Record<OfferSlug, OfferContent> = {
  "formation-en-ligne": {
    slug: "formation-en-ligne",
    meta: {
      title: "Formation en ligne — L'Atelier des Méthodes",
      description:
        "Parcours guidé en ligne pour aider votre enfant à s'organiser, faire des fiches utiles, réviser efficacement et gagner en autonomie.",
    },
    hero: {
      badge: "À distance • À son rythme",
      title: "Formation en ligne",
      subtitle:
        "Un parcours structuré pour installer une vraie méthode de travail — concentration, organisation, fiches et révisions — depuis la maison",
    },
    forWho: {
      title: "Pour qui ?",
      items: [
        "Collégiens et lycéens qui travaillent sans vraie méthode",
        "Familles qui veulent un cadre clair sans contrainte de déplacement",
        "Élèves qui ont besoin de repères progressifs et réutilisables",
      ],
    },
    program: placeholderProgram("Formation en ligne"),
    format: {
      title: "Format",
      items: [
        { label: "Modalité", value: "En ligne" },
        { label: "Public", value: "Collège et lycée" },
        { label: "Rythme", value: "À préciser" },
        { label: "Tarif", value: "À préciser" },
      ],
    },
    outcomes: {
      title: "Ce que votre enfant peut en retirer",
      cards: [
        {
          title: "Une méthode claire",
          text: "Des gestes simples pour transformer le travail scolaire en actions concrètes.",
        },
        {
          title: "Plus d'autonomie",
          text: "Moins de dépendance aux rappels et à l'organisation parentale.",
        },
        {
          title: "Des outils réutilisables",
          text: "Plannings, fiches et routines applicables dans toutes les matières.",
        },
      ],
    },
    faq: [
      {
        question: "Est-ce adapté si mon enfant manque de motivation ?",
        answer:
          "Oui, surtout si la démotivation vient du flou ou du sentiment de ne pas savoir comment s'y prendre.",
      },
    ],
    cta: { label: "Demander des informations", href: "/contact?offre=formation-en-ligne" },
  },
  "stage-vacances": {
    slug: "stage-vacances",
    meta: {
      title: "Stages de vacances — L'Atelier des Méthodes",
      description:
        "5 jours pour remettre de la méthode dans le travail scolaire. Stage intensif en petit groupe (5 élèves max) : 5 séances de 2h, 499 €, en ligne.",
    },
    hero: {
      badge: "Vacances • Format intensif",
      title: "Stages de vacances",
      subtitle:
        "5 séances de 2h en petit groupe pour remettre les bases à plat et repartir avec des outils concrets",
    },
    forWho: {
      title: "Pour qui ?",
      items: [
        "Élèves qui repartent de zéro en organisation",
        "Familles qui veulent un coup d'accélérateur méthodologique",
        "Collégiens et lycéens avant une période chargée ou des examens",
      ],
    },
    program: placeholderProgram("Stage de vacances"),
    format: {
      title: "Format",
      items: [
        { label: "Modalité", value: "En ligne, petit groupe" },
        { label: "Durée", value: "5 séances de 2h (10h total)" },
        { label: "Public", value: "Collège et lycée, 5 élèves max" },
        { label: "Tarif", value: "499 €" },
      ],
    },
    outcomes: {
      title: "Ce que votre enfant peut en retirer",
      cards: [
        {
          title: "Des bases solides",
          text: "Organisation, fiches et révisions posées en quelques jours structurés.",
        },
        {
          title: "Un élan pour la rentrée",
          text: "Repartir avec un cadre de travail déjà en place.",
        },
        {
          title: "Moins de stress",
          text: "Savoir par quoi commencer quand la charge de travail augmente.",
        },
      ],
    },
    cta: { label: "Voir les prochaines dates", href: "/offres/stage-vacances#dates" },
  },
  "cours-hebdomadaires": {
    slug: "cours-hebdomadaires",
    meta: {
      title: "Cours collectif — L'Atelier des Méthodes",
      description:
        "Séances thématiques en petit groupe : 45 minutes de méthode, 45 minutes de pratique. Inscription flexible selon l'agenda de votre enfant.",
    },
    hero: {
      badge: "Hebdomadaire • Petit groupe",
      title: "Cours collectif",
      subtitle:
        "Un rendez-vous vivant chaque semaine pour apprendre une méthode et l'appliquer tout de suite sur les vrais cours",
    },
    forWho: {
      title: "Pour qui ?",
      items: [
        "Élèves qui ont besoin d'un cadre régulier sans coaching individuel",
        "Familles qui veulent choisir les séances selon l'agenda et les besoins",
        "Collégiens et lycéens qui progressent mieux en pratiquant en direct",
      ],
    },
    program: placeholderProgram("Cours hebdomadaires"),
    format: {
      title: "Format",
      items: [
        { label: "Durée", value: "1h30 par séance (45 min + 45 min)" },
        { label: "Modalité", value: "En ligne, petit groupe" },
        { label: "Inscription", value: "Flexible selon l'agenda" },
        { label: "Tarif", value: "Packs de séances — voir la page" },
      ],
    },
    outcomes: {
      title: "Ce que votre enfant peut en retirer",
      cards: [
        {
          title: "Une méthode appliquée",
          text: "Chaque séance se termine par un travail concret sur ses propres supports.",
        },
        {
          title: "De la flexibilité",
          text: "Il choisit les thèmes et les créneaux selon ses besoins du moment.",
        },
        {
          title: "Un rythme régulier",
          text: "Un rendez-vous hebdomadaire pour installer de meilleures habitudes.",
        },
      ],
    },
    cta: { label: "Voir les séances", href: "/offres/cours-hebdomadaires#seances" },
  },
  "accompagnement-personnalise": {
    slug: "accompagnement-personnalise",
    meta: {
      title: "Coaching individuel — L'Atelier des Méthodes",
      description:
        "Accompagnement individuel d'1h par semaine. Bilan en profondeur offert. Packs 5h (450 €) ou 10h (750 €).",
    },
    hero: {
      badge: "Sur mesure • Suivi individuel",
      title: "Coaching individuel",
      subtitle:
        "Un parcours adapté aux cours, devoirs et difficultés réelles de votre enfant — pour installer une méthode qui tient dans le temps",
    },
    forWho: {
      title: "Pour qui ?",
      items: [
        "Élèves avec des blocages multiples ou anciens",
        "Familles qui veulent un suivi rapproché",
        "Situations où un format standard ne suffit pas",
      ],
    },
    program: {
      title: "Déroulement type",
      sections: [
        {
          title: "Diagnostic",
          text: "On observe les habitudes actuelles : devoirs, révisions, fiches, organisation, stress.",
        },
        {
          title: "Priorité",
          text: "On choisit un objectif concret : concentration, organisation, fiches ou préparation d'un contrôle.",
        },
        {
          title: "Mise en pratique",
          text: "On applique la méthode sur les vrais cours et devoirs de l'élève.",
        },
        {
          title: "Suivi",
          text: "On ajuste pour que la méthode soit réellement utilisée au quotidien.",
        },
      ],
    },
    format: {
      title: "Format",
      items: [
        { label: "Modalité", value: "Individuel" },
        { label: "Fréquence", value: "À définir ensemble" },
        { label: "Public", value: "Collège et lycée" },
        { label: "Tarif", value: "À préciser" },
      ],
    },
    outcomes: {
      title: "Ce que cela peut changer à la maison",
      cards: [
        {
          title: "Moins de conflits",
          text: "Un cadre plus clair autour des devoirs.",
        },
        {
          title: "Plus d'autonomie",
          text: "L'élève sait lancer et structurer son travail.",
        },
        {
          title: "Plus de confiance",
          text: "Progresser grâce à la méthode, pas seulement au niveau.",
        },
      ],
    },
    cta: { label: "Réserver un bilan", href: "/contact?offre=accompagnement-personnalise" },
  },
};

export function getOfferBySlug(slug: string): OfferContent | undefined {
  if (OFFER_SLUGS.includes(slug as OfferSlug)) {
    return offresContent[slug as OfferSlug];
  }
  return undefined;
}
