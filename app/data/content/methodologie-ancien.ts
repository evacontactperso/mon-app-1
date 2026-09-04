/** Contenu figé de la page 0 avant refonte — utilisé par /notre-methode-ancien */
export const methodologieAncienMeta = {
  title: "Notre méthode — L'Atelier des Méthodes",
  description:
    "Étudier, ça s'apprend. Une méthode claire pour aider les collégiens et lycéens à s'organiser, réviser et gagner en autonomie.",
};

export const methodologieAncienContent = {
  hero: {
    badge: "Notre méthode",
    highlightWord: "s'apprend",
    title: "Étudier, ça s'apprend",
    subtitle:
      "Une méthode claire pour aider les collégiens et lycéens à s'organiser, réviser efficacement, faire des fiches utiles et devenir plus autonomes",
    shortText:
      "Votre enfant passe du temps à son bureau, mais ne sait pas toujours quoi faire, dans quel ordre, ni comment vérifier qu'il a vraiment appris.",
    ctaPrimary: { label: "Découvrir la méthode", href: "#piliers" },
    ctaSecondary: { label: "Faire le diagnostic", href: "/contact" },
    floatingTags: [
      "Je dois réviser… mais comment ?",
      "Par quoi je commence ?",
      "Est-ce que je suis prêt ?",
    ],
    deskItems: ["Agenda", "Fiche", "Minuteur", "Ordinateur", "Post-it", "Checklist"],
  },
  bandeau: {
    eyebrow: "Le constat",
    line1: "On demande aux élèves de travailler.",
    line2: "Mais on leur donne rarement le mode d'emploi.",
    subtext:
      "Réviser, s'organiser, faire des fiches, être autonome : ces mots paraissent simples, mais ils cachent des méthodes très concrètes que beaucoup d'élèves n'ont jamais apprises.",
  },
  homeSituations: {
    eyebrow: "Le quotidien",
    title: "À la maison, cela ressemble souvent à ça",
    cards: [
      { icon: "🕐", title: "Il repousse", text: "Il attend le dernier moment, commence tard, négocie ou évite." },
      { icon: "📖", title: "Il relit sans retenir", text: "Il passe du temps sur son cours, mais ne sait pas le restituer." },
      { icon: "📄", title: "Il fait des fiches inutiles", text: "Il recopie beaucoup, mais ne se teste pas vraiment." },
      { icon: "🗂️", title: "Il s'éparpille", text: "Il ne sait pas par quoi commencer ni quoi prioriser." },
      { icon: "⚠️", title: "Il panique avant les contrôles", text: "Il découvre trop tard qu'il n'est pas prêt." },
      { icon: "💬", title: "Vous devez tout rappeler", text: "Vous répétez, surveillez, relancez… et les devoirs deviennent une tension." },
    ],
  },
  mirror: {
    eyebrow: "Deux regards",
    title: "Le problème n'est pas vécu de la même façon par le parent et par l'élève",
    parent: {
      title: "Ce que le parent se dit",
      items: [
        "Il ne travaille pas assez.",
        "Il attend toujours la veille.",
        "Il dit qu'il a révisé, mais ce n'est pas solide.",
        "Je ne sais plus comment l'aider sans faire à sa place.",
        "Les devoirs deviennent un conflit.",
      ],
    },
    student: {
      title: "Ce que l'élève vit souvent",
      items: [
        "Je ne sais pas par quoi commencer.",
        "Je ne sais pas si je connais vraiment.",
        "Je travaille, mais ça ne marche pas.",
        "Je me sens nul.",
        "Je préfère éviter plutôt que me confronter à l'échec.",
      ],
    },
    transition: "Entre les deux, il manque souvent une chose : une méthode explicite.",
  },
  declic: {
    eyebrow: "Le déclic",
    title: "Le vrai déclic : transformer « je dois travailler » en actions concrètes",
    questions: [
      "Qu'est-ce que je dois faire exactement ?",
      "Dans quel ordre ?",
      "Comment je saurai que c'est terminé ?",
    ],
    text: "La méthodologie scolaire sert précisément à rendre le travail visible, découpé, vérifiable et moins anxiogène.",
  },
  beforeAfter: {
    eyebrow: "Avant / Après",
    title: "Ce que la méthode change concrètement",
    problemLabel: "Mauvaise habitude",
    consequenceLabel: "Bonne réflexion",
    rows: [
      { before: "« Je relis mon cours plusieurs fois, ça devrait suffire. »", after: "« Je ferme le cahier et j'essaie de restituer sans regarder. »" },
      { before: "« Je surligne tout ce qui semble important. »", after: "« Je repère les idées clés et je les transforme en questions. »" },
      { before: "« Je fais une fiche très complète pour être sûr. »", after: "« Je fais une fiche courte que je peux utiliser pour me tester. »" },
      { before: "« Je révise la veille, sous pression. »", after: "« Je répartis mes révisions sur plusieurs jours. »" },
      { before: "« Je travaille tant que mes parents me le rappellent. »", after: "« J'ai une routine, un planning et une checklist. »" },
      { before: "« Je reste des heures à mon bureau, donc j'ai travaillé. »", after: "« Je sais quelles étapes faire et combien de temps ça prend. »" },
    ],
  },
  highlight: {
    line1: "Le but n'est pas de travailler plus.",
    highlightWord: "mieux",
    line2: "Le but est de travailler mieux.",
  },
  piliers: {
    eyebrow: "Notre approche",
    title: "Une méthode progressive en 5 piliers",
    subtitle: "Chaque pilier répond à une difficulté très concrète du quotidien scolaire",
    steps: [
      { step: 1, icon: "⏱️", title: "Se concentrer", text: "Se mettre au travail, limiter les distractions, travailler par blocs, faire des pauses utiles.", color: "orange" as const },
      { step: 2, icon: "📅", title: "S'organiser", text: "Noter ses devoirs, planifier sa semaine, anticiper les contrôles, répartir les révisions.", color: "pink" as const },
      { step: 3, icon: "📝", title: "Faire des fiches utiles", text: "Construire des fiches qui aident vraiment à comprendre, mémoriser et se tester.", color: "purple" as const },
      { step: 4, icon: "🎯", title: "Réviser activement", text: "Arrêter de seulement relire : réciter, s'entraîner, corriger, recommencer.", color: "yellow" as const },
      { step: 5, icon: "🧭", title: "Devenir autonome", text: "Installer des routines pour avancer avec moins de rappels, moins de stress et plus de confiance.", color: "green" as const },
    ],
  },
  profiles: {
    eyebrow: "Public concerné",
    title: "Pour quels élèves ?",
    cards: [
      { icon: "⏳", title: "Le bon élève qui perd du temps", text: "Il travaille beaucoup, mais pourrait travailler plus efficacement." },
      { icon: "📋", title: "L'élève désorganisé", text: "Il oublie, repousse, s'éparpille ou ne sait pas prioriser." },
      { icon: "😰", title: "L'élève anxieux", text: "Il panique avant les contrôles parce qu'il ne sait pas s'il est prêt." },
      { icon: "🔗", title: "L'élève qui manque d'autonomie", text: "Il dépend beaucoup des rappels, du cadre ou de l'aide parentale." },
      { icon: "🔄", title: "L'élève en transition", text: "Sixième, troisième, seconde, première, terminale : certaines étapes demandent de nouvelles méthodes." },
      { icon: "💪", title: "L'élève qui a perdu confiance", text: "Il a besoin de reprendre pied avec des gestes simples, concrets et progressifs." },
    ],
    reassurance: "La méthode n'est pas réservée aux élèves en difficulté. Elle est utile à tous ceux qui veulent comprendre comment apprendre plus efficacement.",
  },
  promise: {
    eyebrow: "Notre promesse",
    title: "Une méthode plus claire, pour une scolarité plus apaisée",
    text: "Nous ne promettons pas une transformation magique. Nous promettons de rendre le travail scolaire plus concret, plus compréhensible et plus maîtrisable.",
    student: {
      title: "Pour l'élève",
      icon: "🎓",
      items: [
        "Savoir par quoi commencer et dans quel ordre",
        "Réviser avec des gestes concrets, pas seulement relire",
        "Gagner en autonomie et en confiance avant les contrôles",
      ],
    },
    parents: {
      title: "Pour les parents",
      icon: "👨‍👩‍👧",
      items: [
        "Moins de tensions autour des devoirs et des révisions",
        "Des repères clairs pour accompagner sans tout faire",
        "Une méthode partagée, compréhensible par toute la famille",
      ],
    },
  },
  formats: {
    eyebrow: "Nos offres",
    title: "Choisir le bon format pour votre enfant",
    subtitle: "Selon son âge, ses besoins et son niveau d'autonomie, plusieurs formats permettent d'installer progressivement de meilleures méthodes de travail",
    cards: [
      {
        slug: "formation-en-ligne",
        icon: "💻",
        title: "Formation en ligne",
        description: "Un parcours structuré pour apprendre les bases à son rythme.",
        idealFor: "Les familles qui veulent un cadre clair, accessible toute l'année.",
        topics: "Organisation, concentration, fiches, révisions, mémorisation, autonomie.",
        cta: { label: "Découvrir la formation", href: "/offres/formation-en-ligne" },
        accentColor: "indigo" as const,
      },
      {
        slug: "stage-vacances",
        icon: "🧳",
        title: "Stages de vacances",
        description: "Un format intensif pour reprendre les bases pendant les vacances.",
        idealFor: "Préparer une rentrée, un trimestre important, le brevet ou le bac.",
        topics: "Organisation, planning, fiches, révisions, confiance.",
        cta: { label: "Voir les prochains stages", href: "/offres/stage-vacances" },
        accentColor: "orange" as const,
      },
      {
        slug: "cours-hebdomadaires",
        icon: "📆",
        title: "Cours collectif",
        description: "Un rendez-vous vivant chaque semaine : méthode + pratique sur les vrais cours.",
        idealFor: "Les élèves qui ont besoin d'un cadre régulier et flexible.",
        topics: "Organisation, concentration, fiches, révisions, mémorisation, entraînement — 12 séances thématiques.",
        cta: { label: "Voir les séances", href: "/offres/cours-hebdomadaires" },
        badge: "Le plus flexible",
        accentColor: "pink" as const,
      },
      {
        slug: "accompagnement-personnalise",
        icon: "🧭",
        title: "Coaching individuel",
        description: "Un coaching individuel à partir de la situation réelle de l'élève.",
        idealFor: "Les élèves qui ont besoin d'un cadre sur mesure.",
        topics: "Organisation personnelle, motivation, stress, devoirs, contrôles, autonomie.",
        cta: { label: "Demander un diagnostic", href: "/offres/accompagnement-personnalise" },
        accentColor: "purple" as const,
      },
    ],
  },
  contact: {
    title: "Une question ? Parlons de la situation de votre enfant",
    text: "Échangeons sur les besoins de votre enfant et trouvons ensemble le format le plus adapté.",
    cta: { label: "Nous contacter", href: "/contact" },
  },
};
