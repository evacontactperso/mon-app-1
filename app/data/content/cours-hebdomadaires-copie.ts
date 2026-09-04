export const SESSION_CATEGORIES = [
  "Organisation",
  "Concentration",
  "Fiches",
  "Révisions",
  "Mémorisation",
  "Entraînement",
] as const;

export type SessionCategory = (typeof SESSION_CATEGORIES)[number];

export const coursHebdomadairesCopieMeta = {
  title: "Cours collectif — L'Atelier des Méthodes",
  description:
    "Séances thématiques en petit groupe : 45 minutes de méthode, 45 minutes de pratique sur les vrais cours de votre enfant. Inscription flexible selon l'agenda.",
};

export const coursHebdomadairesCopieContent = {
  hero: {
    badge: "Cours collectif",
    highlightWord: "méthode",
    title: "Des cours hebdomadaires pour apprendre une méthode, puis l'appliquer tout de suite",
    subtitle:
      "Chaque semaine, votre enfant peut s'inscrire à une séance thématique selon ses besoins : organisation, concentration, fiches, révisions, mémorisation ou entraînement",
    shortText:
      "Le format est simple : 45 minutes pour comprendre la méthode, 45 minutes pour la mettre en pratique sur ses vrais cours, devoirs ou contrôles.",
    ctaPrimary: { label: "Voir les séances", href: "#seances" },
    ctaSecondary: { label: "Choisir un pack", href: "#packs" },
    proofs: [
      "Séances en petit groupe",
      "1h30 par session",
      "45 min théorie + 45 min pratique",
      "Inscription flexible selon l'agenda",
      "12 thèmes de méthode scolaire",
    ],
    calendarSessions: [
      { day: "Lun", title: "Faire une fiche de cours", color: "indigo" as const },
      { day: "Mar", title: "Préparer un contrôle", color: "pink" as const },
      { day: "Mer", title: "Se mettre au travail", color: "purple" as const },
      { day: "Jeu", title: "Apprendre son cours", color: "orange" as const },
      { day: "Ven", title: "S'exercer efficacement", color: "green" as const },
    ],
  },
  principle: {
    eyebrow: "Le principe",
    title: "Un pack de séances, à utiliser selon les besoins de votre enfant",
    steps: [
      {
        icon: "📦",
        title: "Vous choisissez un pack",
        text: "Votre enfant dispose d'un nombre de séances à utiliser sur les thèmes qui l'intéressent le plus.",
      },
      {
        icon: "📅",
        title: "Il s'inscrit aux sessions qui l'aident vraiment",
        text: "Chaque semaine, il choisit la séance qui correspond à son agenda, à ses difficultés ou à ses contrôles à venir.",
      },
      {
        icon: "✏️",
        title: "Il repart avec une méthode appliquée",
        text: "Pendant chaque cours, il ne se contente pas d'écouter : il applique la méthode à ses propres supports.",
      },
    ],
    closing:
      "Le format est flexible : l'élève ne suit pas forcément tout dans l'ordre. Il rejoint les séances qui répondent à ses besoins du moment.",
  },
  different: {
    eyebrow: "Pourquoi ce format",
    title: "Un format entre autonomie et accompagnement",
    cards: [
      {
        icon: "👥",
        title: "Plus vivant qu'une formation seule",
        text: "L'élève peut poser ses questions, entendre des exemples et avancer avec d'autres élèves.",
      },
      {
        icon: "🗓️",
        title: "Plus flexible qu'un programme fixe",
        text: "Il choisit ses séances selon son emploi du temps et ses priorités du moment.",
      },
      {
        icon: "🎯",
        title: "Plus concret qu'un cours théorique",
        text: "Chaque session se termine par un temps de pratique guidée.",
      },
      {
        icon: "⚖️",
        title: "Moins engageant qu'un coaching individuel",
        text: "C'est un cadre régulier, mais sans suivi lourd ni accompagnement sur mesure.",
      },
    ],
    callout:
      "Idéal pour les élèves qui ont besoin d'un rendez-vous régulier pour appliquer les méthodes, mais qui n'ont pas forcément besoin d'un accompagnement individuel complet.",
  },
  sessionFlow: {
    eyebrow: "Le déroulement",
    title: "Chaque séance suit le même rythme : comprendre, puis pratiquer",
    phases: [
      {
        time: "0–10 min",
        title: "Diagnostic rapide du thème",
        text: "On part d'une situation concrète : contrôle à préparer, fiche inutile, cours difficile, difficulté à commencer, organisation floue.",
      },
      {
        time: "10–45 min",
        title: "Méthode expliquée",
        text: "J'explique la méthode étape par étape avec des exemples simples et directement applicables.",
      },
      {
        time: "45–80 min",
        title: "Mise en pratique",
        text: "Les élèves appliquent la méthode à leurs propres cours, devoirs, fiches ou contrôles.",
      },
      {
        time: "80–90 min",
        title: "Bilan et prochaine action",
        text: "Chaque élève repart avec une action claire à refaire seul dans la semaine.",
      },
    ],
    closing:
      "La séance n'est réussie que si l'élève repart avec quelque chose de commencé, rempli, organisé ou corrigé.",
  },
  bringToSession: {
    eyebrow: "En pratique",
    title: "L'élève travaille sur ses vrais supports",
    cards: [
      {
        icon: "📚",
        title: "Ses cours",
        text: "Pour apprendre à sélectionner, compléter, comprendre ou transformer en fiche.",
      },
      {
        icon: "📅",
        title: "Son agenda ou son ENT",
        text: "Pour organiser les devoirs, les contrôles et la semaine à venir.",
      },
      {
        icon: "📝",
        title: "Un contrôle à préparer",
        text: "Pour construire un plan de révision concret.",
      },
      {
        icon: "📄",
        title: "Une fiche déjà faite",
        text: "Pour apprendre à l'améliorer et la rendre plus utile.",
      },
      {
        icon: "📊",
        title: "Une correction ou une mauvaise note",
        text: "Pour comprendre ses erreurs et préparer la prochaine évaluation.",
      },
      {
        icon: "✏️",
        title: "Un exercice type",
        text: "Pour apprendre à s'entraîner dans les conditions du contrôle.",
      },
    ],
    closing:
      "Si l'élève n'a pas de support adapté le jour de la séance, un exemple guidé peut être fourni. Mais l'objectif reste toujours de revenir à son travail réel.",
  },
  sessions: {
    eyebrow: "Le catalogue",
    id: "seances",
    title: "12 séances pour travailler les gestes essentiels de la méthode scolaire",
    items: [
      {
        number: 1,
        title: "Organiser ses supports de cours",
        category: "Organisation" as SessionCategory,
        question: "Quel support choisir et comment garder des cours utilisables ?",
        topics: [
          "comparer les supports possibles : classeur, lutin, trieur, pochette, cahier",
          "comprendre les avantages et limites de chaque support",
          "sélectionner l'information importante en cours",
          "écrire et tenir un cours propre",
          "ranger ses documents à la maison",
        ],
        practice:
          "L'élève fait le point sur ses supports actuels et construit une règle simple pour ranger, retrouver et utiliser ses cours.",
      },
      {
        number: 2,
        title: "Se mettre au travail sans perdre 40 minutes",
        category: "Concentration" as SessionCategory,
        question: "Comment commencer sans repousser ?",
        topics: [
          "lancer une séance de travail",
          "choisir une première tâche courte",
          "limiter les distractions",
          "organiser son espace",
          "utiliser les pauses sans décrocher complètement",
        ],
        practice:
          "L'élève construit sa routine de démarrage et prépare une séance de travail type.",
      },
      {
        number: 3,
        title: "Organiser sa semaine de devoirs",
        category: "Organisation" as SessionCategory,
        question: "Comment répartir mes devoirs sans tout faire au dernier moment ?",
        topics: [
          "trouver le bon support d'organisation",
          "utiliser une liste de tâches, un emploi du temps imprimé ou une plateforme",
          "placer les blocs impératifs",
          "définir la bonne quantité de travail",
          "mettre en place une routine régulière",
          "regarder les 7 prochains jours chaque soir",
          "cocher, déplacer, chronométrer et ajuster",
          "anticiper sur 14 jours quand un contrôle approche",
        ],
        practice: "L'élève construit son planning réel de la semaine à venir.",
      },
      {
        number: 4,
        title: "Préparer un contrôle étape par étape",
        category: "Révisions" as SessionCategory,
        question: "Comment savoir quoi faire avant un contrôle ?",
        topics: [
          "identifier la nature du contrôle",
          "clarifier le programme",
          "vérifier que le cours est complet",
          "repérer ce qui est compris et ce qui bloque",
          "trouver un support pour comprendre : manuel, vidéo, cours en ligne, professeur",
          "faire une fiche utile",
          "apprendre le cours",
          "vérifier qu'on a appris : récitation, quiz, questions",
          "estimer le temps nécessaire pour chaque étape",
          "répartir les étapes avant le contrôle",
        ],
        practice: "L'élève prépare un vrai contrôle à venir avec un plan d'action daté.",
      },
      {
        number: 5,
        title: "Faire une fiche de cours utile",
        category: "Fiches" as SessionCategory,
        question: "Comment faire une fiche qui m'aide vraiment à apprendre ?",
        topics: [
          "sélectionner l'essentiel",
          "éviter de recopier tout le cours",
          "organiser les idées principales",
          "transformer certaines informations en questions",
          "rendre la fiche utilisable pour réciter",
        ],
        practice:
          "L'élève commence ou améliore une fiche de cours à partir d'un vrai chapitre.",
      },
      {
        number: 6,
        title: "Faire une fiche de résolution d'exercices",
        category: "Fiches" as SessionCategory,
        question: "Comment retenir une méthode pour refaire un exercice ?",
        topics: [
          "identifier les étapes d'un exercice type",
          "comprendre les erreurs fréquentes",
          "formuler une procédure simple",
          "créer une fiche réutilisable en mathématiques, grammaire ou exercices techniques",
          "distinguer exemple, règle et méthode",
        ],
        practice:
          "L'élève construit une fiche de résolution à partir d'un exercice déjà travaillé.",
      },
      {
        number: 7,
        title: "Faire une fiche de méthode",
        category: "Fiches" as SessionCategory,
        question: "Comment retenir les étapes d'un devoir complexe ?",
        topics: [
          "rédiger une méthode pour une rédaction",
          "organiser une étude de documents",
          "construire une méthode de commentaire",
          "identifier les étapes attendues",
          "transformer une consigne complexe en procédure claire",
        ],
        practice:
          "L'élève crée une fiche de méthode pour un type de devoir qu'il rencontre vraiment.",
      },
      {
        number: 8,
        title: "Faire des fiches de correction, lecture et vocabulaire",
        category: "Fiches" as SessionCategory,
        question:
          "Comment utiliser mes erreurs, mes lectures et mon vocabulaire pour progresser ?",
        topics: [
          "faire une fiche de correction après un devoir",
          "repérer les erreurs à ne pas refaire",
          "faire une fiche de lecture utile",
          "organiser une fiche de vocabulaire",
          "réutiliser ces fiches avant un contrôle ou un devoir",
        ],
        practice:
          "L'élève choisit une correction, une lecture ou une liste de vocabulaire et construit une fiche adaptée.",
      },
      {
        number: 9,
        title: "Comprendre un cours difficile",
        category: "Organisation" as SessionCategory,
        question: "Que faire quand je ne comprends pas mon cours ?",
        topics: [
          "vérifier qu'on a le cours en entier",
          "identifier précisément ce qui bloque",
          "utiliser un manuel",
          "trouver une vidéo ou un cours en ligne",
          "poser une bonne question au professeur",
          "compléter son cours sans se noyer dans les ressources",
        ],
        practice:
          "L'élève prend un point difficile de son cours et construit un plan pour le comprendre.",
      },
      {
        number: 10,
        title: "Apprendre son cours : mémoriser activement",
        category: "Mémorisation" as SessionCategory,
        question: "Comment apprendre autrement qu'en relisant ?",
        topics: [
          "comprendre pourquoi relire ne suffit pas toujours",
          "utiliser les surligneurs correctement",
          "transformer un cours en questions",
          "utiliser la récitation",
          "créer des flashcards",
          "utiliser le texte à trous",
        ],
        practice:
          "L'élève teste plusieurs techniques sur un morceau de cours et choisit celle qui fonctionne le mieux pour lui.",
      },
      {
        number: 11,
        title: "Apprendre son cours : vérifier qu'on sait vraiment",
        category: "Mémorisation" as SessionCategory,
        question: "Comment savoir si je connais vraiment ?",
        topics: [
          "réciter sans regarder",
          "faire un quiz",
          "expliquer à voix haute",
          "alterner plusieurs techniques de mémorisation",
          "repérer les zones encore fragiles",
          "programmer une dernière révision",
        ],
        practice:
          "L'élève construit un mini-test à partir de son cours et vérifie ce qui est réellement maîtrisé.",
      },
      {
        number: 12,
        title: "S'exercer efficacement avant un contrôle",
        category: "Entraînement" as SessionCategory,
        question: "Comment s'entraîner pour être prêt le jour du contrôle ?",
        topics: [
          "trouver les bons supports d'entraînement",
          "choisir des exercices adaptés",
          "s'entraîner dans les conditions réelles du contrôle",
          "gérer le temps",
          "se corriger efficacement",
          "repérer ce qu'il faut retravailler",
        ],
        practice:
          "L'élève fait ou prépare une séance d'entraînement type contrôle, puis apprend à se corriger.",
      },
    ],
  },
  sessionPaths: {
    eyebrow: "Choisir ses séances",
    title: "Votre enfant peut choisir les séances selon son besoin du moment",
    items: [
      {
        profile: "S'il est désorganisé",
        sessions: [
          "Séance 1 — Organiser ses supports",
          "Séance 3 — Organiser sa semaine",
          "Séance 4 — Préparer un contrôle",
        ],
      },
      {
        profile: "S'il ne sait pas réviser",
        sessions: [
          "Séance 4 — Préparer un contrôle",
          "Séance 10 — Apprendre son cours",
          "Séance 11 — Vérifier qu'on sait vraiment",
          "Séance 12 — S'exercer",
        ],
      },
      {
        profile: "S'il perd du temps avec ses fiches",
        sessions: [
          "Séance 5 — Fiche de cours",
          "Séance 6 — Fiche de résolution d'exercices",
          "Séance 7 — Fiche de méthode",
          "Séance 8 — Fiches correction / lecture / vocabulaire",
        ],
      },
      {
        profile: "S'il n'arrive pas à commencer",
        sessions: ["Séance 2 — Se mettre au travail", "Séance 3 — Organiser sa semaine"],
      },
      {
        profile: "S'il prépare une période de contrôles",
        sessions: [
          "Séance 3 — Organiser sa semaine",
          "Séance 4 — Préparer un contrôle",
          "Séance 10 — Apprendre son cours",
          "Séance 12 — S'exercer",
        ],
      },
    ],
    cta: {
      label: "Aider mon enfant à choisir ses séances",
      href: "/contact?offre=cours-hebdomadaires",
    },
  },
  groupBenefits: {
    eyebrow: "Le groupe",
    title: "Le groupe aide aussi à progresser",
    cards: [
      {
        icon: "🤝",
        title: "Les élèves se reconnaissent",
        text: "Ils découvrent qu'ils ne sont pas seuls à avoir du mal à s'organiser, réviser ou faire des fiches.",
      },
      {
        icon: "💬",
        title: "Les exemples sont plus variés",
        text: "Chaque élève apporte ses cours, ses devoirs, ses questions et ses manières de travailler.",
      },
      {
        icon: "⚡",
        title: "Le cadre crée de l'élan",
        text: "La séance fixe un moment clair pour apprendre une méthode et l'appliquer, sans repousser.",
      },
    ],
    closing:
      "Le groupe ne remplace pas le travail personnel. Il donne un cadre, un rythme et des exemples concrets.",
  },
  sessionOutcomes: {
    eyebrow: "Résultats concrets",
    title: "À la fin de chaque séance, votre enfant repart avec quelque chose de concret",
    items: [
      "un planning de devoirs rempli",
      "une fiche de cours commencée",
      "une fiche de méthode structurée",
      "une routine de mise au travail",
      "une checklist avant contrôle",
      "une liste de questions pour apprendre son cours",
      "une correction analysée",
      "un plan de révision",
      "une méthode d'entraînement",
      "une action claire à refaire dans la semaine",
    ],
    closing:
      "Chaque séance doit laisser une trace utile dans le travail réel de l'élève.",
  },
  idealFor: {
    eyebrow: "Public concerné",
    title: "Les cours hebdomadaires sont faits pour les élèves qui…",
    cards: [
      {
        icon: "📆",
        title: "Ont besoin d'un rendez-vous régulier",
        text: "Ils progressent mieux quand un temps est prévu chaque semaine.",
      },
      {
        icon: "🎯",
        title: "Veulent choisir selon leurs besoins",
        text: "Ils n'ont pas forcément besoin de tout suivre dans l'ordre.",
      },
      {
        icon: "👂",
        title: "Aiment comprendre avec des exemples",
        text: "Le groupe permet d'entendre plusieurs situations concrètes.",
      },
      {
        icon: "✏️",
        title: "Ont besoin de pratiquer en direct",
        text: "Ils appliquent mieux quand quelqu'un guide le démarrage.",
      },
      {
        icon: "📚",
        title: "Ont un agenda chargé",
        text: "Ils peuvent choisir les séances qui correspondent à leurs disponibilités.",
      },
      {
        icon: "🧭",
        title: "Ne sont pas prêts pour un accompagnement individuel",
        text: "Ils ont besoin d'un cadre, mais pas forcément d'un suivi sur mesure.",
      },
    ],
  },
  notFor: {
    eyebrow: "Orientation",
    title: "Ce format n'est peut-être pas le plus adapté si…",
    items: [
      {
        title: "Votre enfant a besoin d'un suivi très individualisé",
        text: "Dans ce cas, l'accompagnement personnalisé sera plus adapté.",
        href: "/offres/accompagnement-personnalise",
        linkLabel: "Voir l'accompagnement personnalisé",
      },
      {
        title: "Votre enfant veut avancer seul à son rythme",
        text: "La formation en ligne sera peut-être plus confortable.",
        href: "/offres/formation-en-ligne",
        linkLabel: "Voir la formation en ligne",
      },
      {
        title: "Votre enfant veut tout reprendre pendant une période courte",
        text: "Un stage de vacances sera plus intensif.",
        href: "/offres/stage-vacances",
        linkLabel: "Voir les stages de vacances",
      },
      {
        title: "Votre enfant ne veut pas participer en groupe",
        text: "Il vaut mieux envisager un format individuel ou autonome.",
        href: "/offres/accompagnement-personnalise",
        linkLabel: "Voir l'accompagnement personnalisé",
      },
    ],
    closing:
      "Le bon format dépend surtout du niveau d'autonomie, du besoin de cadre et de la disponibilité de votre enfant.",
  },
  packs: {
    eyebrow: "Les packs",
    id: "packs",
    title: "Choisir un pack de séances",
    subtitle:
      "Votre enfant achète un pack, puis s'inscrit librement aux séances thématiques qui l'intéressent, selon son agenda et ses besoins",
    items: [
      {
        title: "Pack Découverte",
        sessions: "À définir",
        description: "Pour tester le format ou travailler un besoin précis.",
        idealFor: [
          "découvrir la méthode",
          "participer à quelques séances ciblées",
          "préparer une période de contrôles",
        ],
        cta: {
          label: "Choisir le pack Découverte",
          href: "/contact?offre=cours-hebdomadaires&formule=decouverte",
        },
      },
      {
        title: "Pack Progression",
        sessions: "À définir",
        description: "Pour installer des méthodes sur plusieurs semaines.",
        idealFor: [
          "travailler plusieurs difficultés",
          "revenir régulièrement",
          "combiner organisation, fiches et révisions",
        ],
        cta: {
          label: "Choisir le pack Progression",
          href: "/contact?offre=cours-hebdomadaires&formule=progression",
        },
        badge: undefined,
      },
      {
        title: "Pack Année",
        sessions: "À définir",
        description: "Pour garder un rendez-vous méthode régulier toute l'année.",
        idealFor: [
          "accompagner les grandes périodes scolaires",
          "anticiper les contrôles",
          "préparer les examens",
          "maintenir de bonnes habitudes",
        ],
        cta: {
          label: "Choisir le pack Année",
          href: "/contact?offre=cours-hebdomadaires&formule=annee",
        },
        badge: "Le plus complet",
      },
    ],
    callout:
      "Les séances ne sont pas imposées : l'élève choisit celles auxquelles il souhaite s'inscrire.",
  },
  packExamples: {
    eyebrow: "Exemples",
    title: "Exemples d'utilisation d'un pack",
    items: [
      {
        title: "Parcours « Je reprends mon organisation »",
        steps: [
          "Organiser ses supports",
          "Se mettre au travail",
          "Organiser sa semaine",
          "Préparer un contrôle",
        ],
      },
      {
        title: "Parcours « Je révise mieux »",
        steps: [
          "Préparer un contrôle",
          "Apprendre son cours 1",
          "Apprendre son cours 2",
          "S'exercer",
        ],
      },
      {
        title: "Parcours « Je fais enfin de bonnes fiches »",
        steps: [
          "Fiche de cours",
          "Fiche de résolution d'exercices",
          "Fiche de méthode",
          "Fiches correction / lecture / vocabulaire",
        ],
      },
      {
        title: "Parcours « Je prépare une période chargée »",
        steps: [
          "Organiser sa semaine",
          "Préparer un contrôle",
          "Apprendre son cours",
          "S'exercer",
        ],
      },
    ],
  },
  faq: {
    title: "Questions fréquentes",
    items: [
      {
        question: "Est-ce que mon enfant doit suivre les 12 séances ?",
        answer:
          "Non. Il peut choisir les séances les plus utiles selon ses besoins.",
      },
      {
        question: "Les séances doivent-elles être suivies dans l'ordre ?",
        answer:
          "Non. Certaines séances se complètent, mais l'élève peut s'inscrire selon son agenda et ses priorités.",
      },
      {
        question: "Est-ce que les séances sont en groupe ?",
        answer:
          "Oui. Les séances sont thématiques et collectives, avec un temps d'explication et un temps de pratique.",
      },
      {
        question: "Est-ce que l'élève pratique vraiment ?",
        answer: "Oui. Chaque séance comprend 45 minutes de pratique guidée.",
      },
      {
        question: "Que doit-il apporter ?",
        answer:
          "Selon la séance : cours, agenda, contrôle à préparer, fiche, correction, exercice ou support de travail.",
      },
      {
        question: "Est-ce adapté si mon enfant est timide ?",
        answer:
          "Oui, il n'a pas besoin de parler constamment. Il peut suivre, appliquer et poser ses questions selon son confort.",
      },
      {
        question: "Est-ce suffisant pour un élève très en difficulté ?",
        answer:
          "Cela dépend. Si la difficulté est installée ou très individuelle, un accompagnement personnalisé peut être plus adapté.",
      },
      {
        question: "Peut-on utiliser le pack sur plusieurs mois ?",
        answer: "À définir selon nos conditions commerciales.",
      },
      {
        question: "Peut-on changer de séance après inscription ?",
        answer: "À définir selon nos règles d'annulation.",
      },
    ],
  },
  finalCta: {
    title: "Chaque semaine, une méthode à comprendre",
    subtitle: "Une heure et demie pour l'appliquer",
    text: "Votre enfant choisit les séances qui l'aident le plus, selon son agenda et ses besoins du moment.",
    closing:
      "Un format souple, concret et régulier pour installer de meilleures habitudes de travail.",
    buttons: [
      {
        label: "Voir le calendrier des séances",
        href: "#seances",
        variant: "parent" as const,
      },
      {
        label: "Choisir un pack",
        href: "#packs",
        variant: "parentOutline" as const,
      },
    ],
  },
};
