import { methodologieContent } from "./methodologie";

export const stageVacancesMeta = {
  title: "Stages de vacances — L'Atelier des Méthodes",
  description:
    "Une semaine pour apprendre à mieux travailler. Stage en 5 jours, petit groupe, 499 €.",
};

const piliers = methodologieContent.piliers.items;

export const stageVacancesContent = {
  hero: {
    title: "Une semaine pour apprendre\nà mieux travailler",
    subtitle:
      "Pendant les vacances, votre enfant a enfin le temps de faire une pause, prendre du recul et repartir sur de meilleures bases",
    text: "Ce stage lui apprend à mieux s'organiser, faire des fiches utiles, mémoriser efficacement, s'entraîner avant les contrôles et se remettre au travail avec plus de clarté. En 5 jours, il repart avec des méthodes concrètes, des supports prêts à réutiliser et un plan de travail plus clair pour la rentrée.",
    keywords: ["5 jours", "10 heures", "max. 5 élèves"],
    ctaPrimary: { label: "Contactez-moi pour l'inscription", href: "/contact?offre=stage-vacances" },
    ctaSecondary: { label: "Voir le programme", href: "#programme" },
  },
  program: {
    id: "programme",
    title: "Le programme détaillé du stage",
    subtitle:
      "5 jours pour construire une méthode de travail complète. Chaque journée est consacrée à une compétence essentielle. L'objectif n'est pas seulement de comprendre la méthode, mais de l'appliquer directement à des situations scolaires concrètes",
    rowLabels: {
      theme: "Thèmes",
      skills: "Compétences",
      activities: "Activités",
      deliverable: "Livrables",
    },
    days: [
      {
        day: 1,
        theme: piliers[0].title,
        skills:
          "*Organiser* ses *supports* de cours. *Planifier* sa semaine. *Anticiper* les contrôles.",
        activities:
          "Construire son *planning* de semaine. *Trier* ses devoirs par *priorité*. Préparer un *plan de révision* pour un contrôle.",
        deliverable: "Un *planning* de travail *réaliste*.",
        color: "indigo" as const,
      },
      {
        day: 2,
        theme: piliers[1].title,
        skills:
          "Repérer *l'essentiel*. *Reformuler* avec ses mots. Construire différents types de *fiches*.",
        activities:
          "Transformer un cours en *fiche courte*. Créer une *fiche de méthode*. Faire une *fiche de correction* à partir d'une erreur.",
        deliverable: "Une *fiche utile* et *réutilisable*.",
        color: "pink" as const,
      },
      {
        day: 3,
        theme: piliers[2].title,
        skills:
          "*Comprendre* avant d'apprendre. Utiliser des *techniques actives*. *Vérifier* que le cours est vraiment su.",
        activities:
          "Créer un *quiz* de révision. Tester la *récitation active*. Construire des *flashcards* ou un texte à trous.",
        deliverable: "Une *méthode d'apprentissage active*.",
        color: "blue" as const,
      },
      {
        day: 4,
        theme: piliers[3].title,
        skills:
          "Choisir les *bons exercices*. S'entraîner dans les *conditions du contrôle*. *Corriger* ses erreurs.",
        activities:
          "Refaire un *exercice type*. S'entraîner avec un *temps limité*. *Analyser* une copie ou une correction.",
        deliverable: "Une *stratégie d'entraînement*.",
        color: "yellow" as const,
      },
      {
        day: 5,
        theme: piliers[4].title,
        skills:
          "*Démarrer* sans attendre la motivation. Limiter les *distractions*. Travailler par *blocs efficaces*.",
        activities:
          "Mettre en place une *routine* de démarrage. Créer son *environnement* de travail. Construire son *plan personnel* pour la rentrée.",
        deliverable: "Un *plan personnel* de mise au travail.",
        color: "green" as const,
      },
    ],
  },
  format: {
    title: "Un format intensif, court, et concret pour créer un vrai déclic",
    subtitle:
      "Le stage de vacances n'est pas un cours théorique de méthodologie. C'est un format condensé, pratique et guidé, pensé pour aider l'élève à repartir avec des outils immédiatement applicables",
    cards: [
      {
        icon: "⚡",
        title: "Un *concentré de méthodologie* en 5 jours",
        text: "En une semaine, l'élève travaille les grandes compétences qui structurent toute sa scolarité : organisation, concentration, mémorisation, fiches, entraînement et révisions. Un format court et intensif pour acquérir les fondamentaux d'une méthode de travail efficace.",
      },
      {
        icon: "👥",
        title: "Une *dynamique de groupe*",
        text: "En petit groupe, les élèves avancent ensemble, partagent leurs méthodes et découvrent qu'ils rencontrent souvent les mêmes difficultés. Cette dynamique crée une émulation positive et rend les apprentissages plus vivants.",
      },
      {
        icon: "🧰",
        title: "Des *méthodes concrètes* réutilisables",
        text: "L'élève repart avec des méthodes et des outils qu'il peut appliquer dès son retour à la maison : organiser son travail, construire une fiche, mémoriser un cours, préparer une révision ou analyser ses erreurs. Des acquis pensés pour être utilisés tout au long de l'année.",
      },
      {
        icon: "✏️",
        title: "Des *activités* pour mettre en pratique",
        text: "Chaque notion est immédiatement mise en pratique à travers des exercices et des situations concrètes. L'élève apprend en faisant : il teste les méthodes, les applique à ses propres cours et ajuste ses pratiques avec l'aide de l'intervenant.",
      },
      {
        icon: "🎒",
        title: "Un *meilleur départ* pour la rentrée",
        text: "L'objectif est simple : que l'élève reprenne les cours avec plus de clarté, plus d'autonomie et moins de stress face au travail scolaire.",
      },
    ],
  },
  gains: {
    title: "Les changements\nconcrets après le stage",
    subtitle:
      "Des changements concrets dans la manière de travailler — visibles dès les premières semaines de rentrée",
    rows: [
      {
        before: "Ne sait pas toujours *par quoi commencer*.",
        after: "Sait transformer ses devoirs en *plan d'action*.",
      },
      {
        before: "Révise souvent *au dernier moment*.",
        after: "Sait *répartir ses révisions* sur plusieurs jours.",
      },
      {
        before: "Relit ses cours sans vraiment *les retenir*.",
        after: "Utilise des *techniques actives* pour apprendre.",
      },
      {
        before: "Fait des fiches *trop longues* ou peu utiles.",
        after: "Sait faire des *fiches courtes*, claires et efficaces.",
      },
      {
        before: "Se décourage devant la *charge de travail*.",
        after: "Sait *prioriser*, planifier et avancer étape par étape.",
      },
      {
        before: "Ne sait pas comment progresser après une *mauvaise note*.",
        after: "Apprend à *analyser ses erreurs* et à retravailler précisément ce qui bloque.",
      },
      {
        before: "Vit des *tensions* autour des devoirs à la maison.",
        after: "Travaille de façon plus claire, plus cadrée et plus *autonome*.",
      },
    ],
  },
};
