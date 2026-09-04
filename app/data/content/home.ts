export const homeMeta = {
  title: "L'Atelier des Méthodes — Formation méthode de travail pour collégiens et lycéens",
  description:
    "Une formation concrète pour aider les collégiens et lycéens à se concentrer, s'organiser, faire leurs devoirs, réviser efficacement et gagner en autonomie.",
};

export const homeContent = {
  hero: {
    badge: "Formation méthode • Collège • Lycée",
    title: "La méthode scolaire, enfin enseignée clairement",
    subtitle:
      "J'aide les collégiens et lycéens à mieux s'organiser, apprendre plus efficacement, préparer leurs contrôles et gagner en autonomie",
    reassurance:
      "Pour les établissements scolaires, les familles et les élèves qui veulent transformer le travail scolaire en méthode simple, concrète et durable.",
    highlightWord: "clairement",
    tags: ["Concentration", "Devoirs", "Révisions", "Autonomie"],
    ctaPrimary: { label: "Je suis un établissement", href: "/etablissements" },
    ctaSecondary: { label: "Je suis parent", href: "/parents" },
    planning: {
      title: "Planning de la semaine",
      footer: "Méthode claire, étape par étape",
      cards: ["Devoirs", "Révisions", "Fiches", "Contrôle", "Pause"],
    },
  },
  problem: {
    title: "Le problème n'est pas toujours le manque de travail",
    subtitle: "Souvent, ce n'est pas l'effort qui manque — c'est la méthode",
    text: "Beaucoup d'élèves passent du temps sur leurs devoirs sans obtenir les résultats attendus. Ils relisent sans mémoriser, recopient des fiches trop longues, commencent trop tard et finissent par associer le travail scolaire au stress.",
    cards: [
      {
        title: "Devoirs faits au dernier moment",
        text: "L'élève sait qu'il doit travailler, mais ne sait pas toujours par quoi commencer.",
      },
      {
        title: "Fiches trop longues ou inutiles",
        text: "Il recopie au lieu de sélectionner, organiser et reformuler.",
      },
      {
        title: "Révisions passives",
        text: "Il relit plusieurs fois, mais ne se teste pas vraiment.",
      },
      {
        title: "Stress avant les contrôles",
        text: "La charge de travail devient floue, urgente et décourageante.",
      },
      {
        title: "Dépendance aux parents",
        text: "Les adultes doivent rappeler, organiser, vérifier, relancer.",
      },
      {
        title: "Perte de confiance",
        text: "L'élève finit par croire qu'il n'est pas capable, alors qu'il manque surtout de méthode.",
      },
    ],
  },
  solution: {
    title: "Une méthode simple pour apprendre à travailler",
    subtitle: "5 étapes claires pour transformer le travail scolaire",
    text: "L'objectif n'est pas de travailler plus. L'objectif est d'apprendre à travailler mieux — avec une progression visible, concrète et réutilisable dans toutes les matières.",
    steps: [
      {
        step: 1,
        title: "S'organiser",
        text: "Transformer les devoirs en plan d'action clair.",
        color: "orange" as const,
      },
      {
        step: 2,
        title: "Comprendre",
        text: "Repérer l'essentiel d'un cours, d'une consigne ou d'un chapitre.",
        color: "pink" as const,
      },
      {
        step: 3,
        title: "Ficher",
        text: "Créer des fiches courtes, utiles et vraiment mémorisables.",
        color: "purple" as const,
      },
      {
        step: 4,
        title: "Réviser",
        text: "Utiliser le rappel actif, les quiz et la répétition espacée.",
        color: "yellow" as const,
      },
      {
        step: 5,
        title: "Gagner en autonomie",
        text: "Installer des routines simples pour travailler sans dépendre d'un adulte.",
        color: "green" as const,
      },
    ],
  },
  audience: {
    title: "Deux parcours selon votre besoin",
    cards: [
      {
        badge: "Établissements",
        title: "Pour les établissements",
        subtitle:
          "Des interventions clé en main pour aider les élèves à acquérir les méthodes de travail qui conditionnent leur réussite",
        bullets: [
          "Atelier classe — 1h",
          "Intervention niveau — 1h",
          "Grand format élèves — 1h",
          "Intervention équipe éducative",
          "Demi-journée ou journée établissement",
        ],
        cta: { label: "Voir l'offre établissements", href: "/etablissements" },
        variant: "school" as const,
      },
      {
        badge: "Parents",
        title: "Pour les parents",
        subtitle:
          "Un accompagnement concret pour aider votre enfant à s'organiser, apprendre ses cours, préparer ses contrôles et retrouver confiance",
        bullets: [
          "1 module",
          "Pack 4 modules",
          "Bilan individuel",
          "Pack 3 mois",
          "Pack annuel",
        ],
        cta: { label: "Voir l'offre parents", href: "/parents" },
        variant: "parent" as const,
      },
    ],
  },
  finalCta: {
    title: "Et si la méthode devenait enfin un apprentissage à part entière ?",
    text: "Que vous soyez parent ou établissement, l'objectif est le même : aider les élèves à comprendre comment travailler, pour gagner en autonomie, en efficacité et en confiance.",
    buttons: [
      { label: "Demander un devis établissement", href: "/contact?type=etablissement", variant: "school" as const },
      { label: "Réserver un échange parent", href: "/contact?type=parent", variant: "parent" as const },
    ],
  },
};
