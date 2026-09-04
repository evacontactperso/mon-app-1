import { formationContent } from "./formation";

export const etablissementsMeta = {
  title: "Formation méthode de travail pour collèges et lycées",
  description:
    "Interventions clé en main pour établissements scolaires : concentration, organisation, révisions, autonomie, Devoirs faits et préparation aux examens.",
};

export const etablissementsContent = {
  hero: {
    badge: "Collèges • Lycées • Équipes éducatives",
    title: "Une formation clé en main pour apprendre aux élèves à travailler",
    subtitle:
      "Des interventions concrètes pour développer concentration, organisation, méthode de travail, révisions et autonomie",
    ctaPrimary: { label: "Demander un devis établissement", href: "/contact?type=etablissement" },
    ctaSecondary: { label: "Découvrir le programme", href: "#programme" },
  },
  problem: {
    eyebrow: "Le constat",
    title: "Sans méthode, l'effort ne suffit pas",
    subtitle:
      "Les difficultés de méthode creusent les inégalités. La formation rend les codes du travail scolaire explicites, accessibles et entraînables pour tous",
    problemLabel: "Situation",
    consequenceLabel: "Impact",
    rows: [
      {
        problem: "Élèves désorganisés",
        consequence: "Devoirs oubliés, travail irrégulier, sentiment de retard permanent.",
      },
      {
        problem: "Révisions inefficaces",
        consequence: "Temps passé important, mais résultats décevants.",
      },
      {
        problem: "Fiches mal construites",
        consequence: "Copie excessive, surcharge, faible mémorisation.",
      },
      {
        problem: "Stress avant les contrôles",
        consequence: "Dernière minute, panique, conflits avec les familles.",
      },
      {
        problem: "Inégalités de méthode",
        consequence: "Les élèves les mieux accompagnés disposent d'un avantage invisible.",
      },
    ],
  },
  deploymentKit: formationContent.deploymentKit,
  formation: {
    overviewTitle: formationContent.overview.title,
    overview: formationContent.overview.modules,
    module1: formationContent.module1,
    module2: formationContent.module2,
    module3: formationContent.module3,
    module4: formationContent.module4,
  },
  proposals: {
    a: {
      label: "Proposition A",
      title: "Ce que votre établissement gagne concrètement",
      subtitle: "Un langage commun, des outils durables et un vrai levier pour réduire les inégalités de méthode",
      cards: [
        {
          title: "Un langage commun",
          text: "Tous les élèves entendent les mêmes repères : planifier, ficher, se tester, prioriser.",
          icon: "🎯",
        },
        {
          title: "Des outils réutilisables",
          text: "Chaque séance laisse un support applicable dans toutes les matières.",
          icon: "📋",
        },
        {
          title: "Un soutien Devoirs faits",
          text: "Les élèves apprennent à utiliser ce temps pour avancer efficacement.",
          icon: "⏱️",
        },
        {
          title: "Moins d'inégalités",
          text: "Les méthodes implicites deviennent explicites pour tous.",
          icon: "⚖️",
        },
        {
          title: "Un appui aux équipes",
          text: "Intégration à la vie de classe, l'AP ou les temps forts de l'année.",
          icon: "🤝",
        },
        {
          title: "Un lien avec les familles",
          text: "Des repères simples pour aider sans faire à la place.",
          icon: "🏠",
        },
      ],
    },
    b: {
      label: "Proposition B",
      title: "Les formats d'intervention possibles",
      subtitle: "Du atelier classe à la journée établissement, selon vos objectifs et votre calendrier",
      cards: [
        {
          title: "Atelier classe — 1h",
          text: "Une intervention ciblée : devoirs, fiches, concentration ou révisions.",
        },
        {
          title: "Intervention niveau — 1h",
          text: "Un message commun pour tout un niveau, avec des outils simples.",
        },
        {
          title: "Grand format élèves — 1h",
          text: "Conférence interactive avec démonstrations et méthode applicable tout de suite.",
        },
        {
          title: "Intervention équipe éducative — 1h",
          text: "Repères communs pour PP, CPE, vie scolaire et accompagnateurs.",
        },
        {
          title: "Demi-journée établissement",
          text: "Articulation intervention élèves, équipe éducative et outils de suivi.",
        },
        {
          title: "Journée établissement",
          text: "Déployer une culture commune de la méthode de travail.",
        },
      ],
    },
    c: {
      label: "Proposition C",
      title: "Un déploiement structuré sur l'année",
      subtitle: "Exemple de parcours pour ancrer la méthode au-delà de l'intervention",
      steps: [
        {
          step: 1,
          title: "Échange de cadrage",
          text: "Identification du niveau, des besoins et du format.",
        },
        {
          step: 2,
          title: "Intervention élèves",
          text: "Séance concrète avec outils, exemples et exercices.",
        },
        {
          step: 3,
          title: "Relance courte",
          text: "5 à 15 minutes en vie de classe pour ancrer la méthode.",
        },
        {
          step: 4,
          title: "Questionnaire de suivi",
          text: "Mesure des usages, retours élèves et pistes d'amélioration.",
        },
        {
          step: 5,
          title: "Bilan",
          text: "Retour synthétique pour l'établissement.",
        },
      ],
    },
  },
  finalCta: {
    title: "Vous souhaitez adapter la formation à votre établissement ?",
    text: "Indiquez le niveau, le nombre d'élèves et le besoin principal. Une proposition claire vous sera envoyée.",
    button: { label: "Demander un devis établissement", href: "/contact?type=etablissement" },
  },
};
