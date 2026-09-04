import { formationContent } from "./formation";

export const parentsMeta = {
  title: "Aider son enfant à s'organiser, faire ses devoirs et réviser",
  description:
    "Formation et accompagnement pour aider les collégiens et lycéens à mieux travailler, préparer leurs contrôles et gagner en autonomie.",
};

export const parentsContent = {
  hero: {
    badge: "Collège • Lycée • Autonomie",
    title: "Votre enfant travaille, mais ne sait pas toujours comment s'y prendre ?",
    subtitle:
      "Une formation pour l'aider à se concentrer, organiser ses devoirs, faire de bonnes fiches, réviser efficacement et préparer ses contrôles",
    ctaPrimary: { label: "Réserver un bilan méthode", href: "/contact?type=parent" },
    ctaSecondary: { label: "Voir les offres parents", href: "#offres" },
  },
  painPoints: {
    title: "Vous reconnaissez peut-être ces situations",
    items: [
      "Il commence ses devoirs trop tard.",
      "Il dit qu'il a travaillé, mais ne retient pas.",
      "Il relit ses cours sans se tester.",
      "Il fait des fiches beaucoup trop longues.",
      "Il oublie des devoirs ou des feuilles.",
      "Il panique avant les contrôles.",
      "Il dépend beaucoup de vous.",
      "Les devoirs créent des tensions à la maison.",
    ],
  },
  promise: {
    title: "Le but n'est pas de faire à sa place",
    text: "Le but est de lui transmettre une méthode qu'il pourra réutiliser seul : comprendre ce qui est demandé, organiser son travail, apprendre efficacement, vérifier qu'il sait et reprendre confiance.",
  },
  formation: {
    introTitle: "Ce que votre enfant apprend concrètement",
    introSubtitle:
      "Quatre modules pour installer une méthode de travail complète, de la concentration aux révisions",
    overviewTitle: formationContent.overview.title,
    overview: formationContent.overview.modules,
    module1: formationContent.module1,
    module2: formationContent.module2,
    module3: formationContent.module3,
    module4: formationContent.module4,
  },
  offers: {
    title: "Les offres pour les parents",
    items: [
      {
        title: "Formation — 1 module",
        price: "199 €",
        text: "Un module ciblé pour travailler une difficulté précise : concentration, organisation, fiches ou révisions.",
        cta: { label: "Choisir 1 module", href: "/contact?type=parent&offre=1-module" },
      },
      {
        title: "Pack formation — 4 modules",
        price: "497 € au lieu de 796 €",
        badge: "-38 %",
        text: "Le parcours complet pour installer une vraie méthode de travail : concentration, organisation, fiches et révisions.",
        cta: { label: "Choisir le pack 4 modules", href: "/contact?type=parent&offre=pack-4-modules" },
      },
      {
        title: "Pack bilan",
        price: "250 €",
        text: "Un bilan individuel pour comprendre les habitudes de travail, identifier les blocages et repartir avec un plan d'action.",
        cta: { label: "Réserver un bilan", href: "/contact?type=parent&offre=pack-bilan" },
      },
      {
        title: "Pack 3 mois",
        price: "1 790 €",
        text: "Bilan individuel, 3 séances thématiques et 12 séances de suivi pour installer progressivement organisation et motivation.",
        cta: { label: "Demander un échange", href: "/contact?type=parent&offre=pack-3-mois" },
      },
      {
        title: "Pack annuel",
        price: "4 990 €",
        text: "Bilan individuel, 10 séances thématiques et 18 séances de suivi d'organisation et de motivation sur l'année.",
        cta: { label: "Demander un échange", href: "/contact?type=parent&offre=pack-annuel" },
      },
    ],
  },
  steps: {
    title: "Comment se déroule l'accompagnement ?",
    items: [
      {
        step: 1,
        title: "Diagnostic",
        text: "On observe les cours, devoirs, supports, habitudes, difficultés et objectifs.",
      },
      {
        step: 2,
        title: "Choix de la priorité",
        text: "Concentration, organisation, fiches, révisions ou préparation d'un contrôle.",
      },
      {
        step: 3,
        title: "Méthode",
        text: "L'élève apprend une méthode simple, étape par étape.",
      },
      {
        step: 4,
        title: "Application",
        text: "On applique la méthode sur ses vrais cours et devoirs.",
      },
      {
        step: 5,
        title: "Suivi",
        text: "On ajuste pour que la méthode soit réellement utilisée.",
      },
    ],
  },
  changes: {
    title: "Ce que cela peut changer à la maison",
    cards: [
      {
        title: "Moins de conflits autour des devoirs",
        text: "Le cadre devient plus clair et l'enfant sait mieux ce qu'il doit faire.",
      },
      {
        title: "Plus d'autonomie",
        text: "L'élève apprend à lancer son travail sans attendre qu'un parent organise tout.",
      },
      {
        title: "Des révisions plus efficaces",
        text: "Il apprend à se tester au lieu de simplement relire.",
      },
      {
        title: "Plus de confiance",
        text: "Il comprend que progresser ne dépend pas seulement du niveau, mais aussi de la méthode.",
      },
    ],
  },
  finalCta: {
    title: "Vous voulez comprendre pourquoi votre enfant bloque ?",
    text: "Un premier échange permet d'identifier les habitudes, les blocages et le format le plus adapté.",
    button: { label: "Réserver un bilan méthode", href: "/contact?type=parent" },
  },
};
