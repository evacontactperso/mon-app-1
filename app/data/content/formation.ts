export const formationMeta = {
  title: "La formation — concentration, organisation, fiches et révisions",
  description:
    "Découvrez le parcours pédagogique complet : se concentrer, organiser ses devoirs, faire des fiches utiles et réviser efficacement.",
};

export const formationContent = {
  meta: {
    title: "La formation — concentration, organisation, fiches et révisions",
    description:
      "Découvrez le parcours pédagogique complet : se concentrer, organiser ses devoirs, faire des fiches utiles et réviser efficacement.",
  },
  hero: {
    badge: "Parcours pédagogique complet",
    title: "Une formation structurée pour apprendre à travailler",
    subtitle:
      "Quatre grands modules pour aider les élèves à se concentrer, s'organiser, créer de bonnes fiches et réviser efficacement",
    highlightWord: "apprendre",
    ctaPrimary: { label: "Demander le programme", href: "/contact" },
    ctaSecondary: { label: "Demander le programme", href: "/contact?type=etablissement" },
  },
  overview: {
    title: "Le parcours en 4 grands modules",
    modules: [
      {
        title: "Se concentrer en classe et à la maison",
        subtitle: "Suivre, noter, ranger, se mettre au travail",
        text: "Avant même de réviser, l'élève doit pouvoir suivre en cours, garder des supports propres et créer de bonnes conditions de travail à la maison.",
        chapters: [
          "Se concentrer en classe",
          "Prendre des notes et tenir des cahiers propres",
          "Se motiver et se mettre au travail à la maison",
        ],
      },
      {
        title: "S'organiser",
        subtitle: "Devoirs, planning, routine et contrôles",
        text: "L'élève apprend à transformer ses devoirs en actions concrètes, à répartir son travail et à préparer un contrôle sans tout faire au dernier moment.",
        chapters: [
          "Organiser ses devoirs",
          "Organiser ses révisions pour un contrôle ou un examen",
        ],
      },
      {
        title: "Faire des fiches de cours et de méthodes",
        subtitle: "Créer des supports utiles, pas des copies du cours",
        text: "L'élève découvre les différents types de fiches et apprend à choisir le bon format selon la tâche : cours, exercice, méthode, lecture ou vocabulaire.",
        chapters: [
          "Fiche de cours",
          "Fiche de résolution d'exercices",
          "Fiche de méthode",
          "Fiche de lecture",
          "Fiche de vocabulaire",
        ],
      },
      {
        title: "Réviser un contrôle",
        subtitle: "Comprendre, retenir, s'entraîner, se corriger",
        text: "L'élève apprend à préparer un contrôle en plusieurs étapes : comprendre le cours, mémoriser, trouver les bons supports, s'entraîner et se corriger.",
        chapters: [
          "Comprendre un cours difficile",
          "Retenir et apprendre",
          "S'exercer et s'entraîner",
        ],
      },
    ],
  },
  module1: {
    title: "Module 1 — Se concentrer en classe et à la maison",
    subsections: [
      {
        title: "Se concentrer en classe",
        text: "L'élève apprend à identifier ce qui l'aide à suivre en cours : posture, attention, écoute active, matériel prêt, repères dans le cours, gestion des moments de décrochage.",
        outcomes: [
          "Savoir se remettre dans le cours après une distraction",
          "Comprendre pourquoi l'attention baisse",
          "Mettre en place de petits réflexes pour rester actif",
        ],
      },
      {
        title: "Prendre des notes et tenir des cahiers propres",
        text: "L'élève apprend à choisir et utiliser les bons supports : classeur, lutin, trieur, pochette ou cahier. Il comprend les avantages et inconvénients de chaque support.",
        bullets: [
          "Choisir le bon support selon son profil",
          "Sélectionner l'information importante en cours",
          "Écrire un cours lisible et réutilisable",
          "Ranger ses documents à la maison",
          "Éviter les feuilles perdues et les cahiers incomplets",
        ],
      },
      {
        title: "Se motiver et se mettre au travail à la maison",
        text: "L'élève apprend à réduire la friction du démarrage : créer une zone de travail, limiter les distractions, préparer son matériel et utiliser des pauses efficaces.",
        bullets: [
          "Se mettre au travail sans attendre la motivation parfaite",
          "Limiter les distractions",
          "Créer une routine de début",
          "Prendre des pauses utiles",
          "Reprendre après une pause sans perdre le fil",
        ],
      },
    ],
  },
  module2: {
    title: "Module 2 — S'organiser",
    subsections: [
      {
        title: "Organiser ses devoirs",
        text: "L'élève apprend à transformer une liste de devoirs en plan de travail clair. Il choisit un support d'organisation adapté : liste de tâches, agenda, planning imprimé ou plateforme numérique.",
        bullets: [
          "Trouver le bon support d'organisation",
          "Faire un emploi du temps avec les blocs impératifs",
          "Définir la bonne quantité de travail",
          "Mettre en place une routine régulière",
          "Répartir les devoirs sur les 7 prochains jours",
          "Cocher, déplacer, chronométrer et ajuster",
          "Donner un temps approximatif à chaque tâche",
        ],
      },
      {
        title: "Organiser ses révisions pour un contrôle ou un examen",
        text: "L'élève apprend à anticiper un contrôle sur environ 14 jours et à répartir les étapes au lieu de tout concentrer la veille.",
      },
    ],
    revisionTimeline: {
      title: "Les étapes d'une révision réussie",
      steps: [
        "Identifier la nature du contrôle et le programme",
        "Rassembler le cours complet",
        "Vérifier ce qui est compris ou non",
        "Chercher de l'aide si besoin : manuel, vidéo, cours en ligne, professeur",
        "Faire une fiche",
        "Apprendre",
        "Vérifier que l'on sait : récitation, quiz, questions",
        "Répartir chaque étape dans le temps",
      ],
    },
  },
  module3: {
    title: "Module 3 — Faire des fiches de cours et de méthodes",
    intro:
      "Une bonne fiche n'est pas un cours recopié. C'est un outil qui aide à comprendre, retenir et s'entraîner.",
    sheetTypes: {
      cards: [
        {
          title: "Fiche de cours",
          text: "Pour résumer les notions essentielles : définitions, idées principales, dates, personnages, formules, exemples.",
        },
        {
          title: "Fiche de résolution d'exercices",
          text: "Pour apprendre une démarche en mathématiques, grammaire, sciences ou toute matière qui demande des étapes.",
        },
        {
          title: "Fiche de méthode",
          text: "Pour mémoriser une procédure : rédaction, étude de documents, commentaire composé, dissertation, analyse de texte.",
        },
        {
          title: "Fiche de lecture",
          text: "Pour garder une trace claire d'un livre : résumé, personnages, thèmes, citations, avis, liens avec le cours.",
        },
        {
          title: "Fiche de vocabulaire",
          text: "Pour apprendre des mots, définitions, expressions, exemples et traductions de manière active.",
        },
      ],
      rulesTitle: "Les règles d'une fiche utile",
      rules: [
        "Courte",
        "Structurée",
        "Lisible",
        "Active",
        "Réutilisable",
        "Pensée pour se tester, pas seulement pour relire",
      ],
    },
  },
  module4: {
    title: "Module 4 — Réviser un contrôle",
    subsections: [
      {
        title: "Comprendre un cours difficile",
        text: "Avant d'apprendre, il faut comprendre. L'élève apprend à vérifier qu'il possède le cours en entier et à utiliser les bons supports pour éclaircir les passages difficiles.",
        bullets: [
          "Avoir le cours complet",
          "Identifier les passages incompris",
          "Utiliser le manuel",
          "Chercher une vidéo ou un cours en ligne",
          "Poser une question précise au professeur",
          "Demander de l'aide sans attendre la veille",
        ],
      },
      {
        title: "Retenir et apprendre",
        text: "L'élève découvre plusieurs techniques de mémorisation et apprend à choisir celles qui fonctionnent selon la matière.",
        bullets: [
          "Surligner avec parcimonie",
          "Utiliser des flashcards",
          "Créer des textes à trous",
          "Réciter",
          "Cacher le cours et retrouver l'information",
          "Faire des quiz",
          "Espacer les révisions",
        ],
      },
      {
        title: "S'exercer et s'entraîner",
        text: "Un contrôle se prépare aussi par l'entraînement. L'élève apprend à trouver les bons exercices, à s'entraîner dans des conditions proches du contrôle et à se corriger.",
        bullets: [
          "Trouver les bons supports",
          "S'entraîner dans les conditions réelles du contrôle",
          "Se chronométrer si nécessaire",
          "Comparer sa réponse avec la correction",
          "Comprendre ses erreurs",
          "Revoir uniquement ce qui bloque",
        ],
      },
    ],
  },
  deploymentKit: {
    title: "Kit de déploiement pour les établissements",
    text: "Pour faciliter l'intégration dans un collège ou un lycée, la formation peut être accompagnée d'un kit de déploiement prêt à l'emploi.",
    cards: [
      {
        title: "Page explicative",
        text: "Une présentation claire de la formation, de ses objectifs et de son intérêt pour l'équipe éducative.",
      },
      {
        title: "Calendrier de déploiement",
        text: "Un planning pour organiser les séances, les relances et les temps de suivi.",
      },
      {
        title: "Messages prêts à envoyer",
        text: "Des textes prêts à transmettre aux familles, élèves ou équipes éducatives.",
      },
      {
        title: "Activités de suivi en vie de classe",
        text: "Des mini-activités simples pour prolonger la formation après l'intervention.",
      },
      {
        title: "Relances professeur principal",
        text: "Des formats courts : 5 minutes pour rappeler, 10 minutes pour discuter, 15 minutes pour appliquer une mini-méthode.",
      },
      {
        title: "Questionnaire avant / après",
        text: "Un outil pour mesurer l'évolution des habitudes et recueillir les retours.",
      },
    ],
  },
  finalCta: {
    title: "Vous voulez recevoir le programme détaillé ?",
    buttons: [
      { label: "Demander le programme", href: "/contact" },
      { label: "Demander un devis", href: "/contact?type=etablissement" },
    ],
  },
};
