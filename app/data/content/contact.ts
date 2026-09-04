export const contactMeta = {
  title: "Contact",
  description:
    "Contactez L'Atelier des Méthodes par WhatsApp ou e-mail pour être orienté vers la formation, les cours, les stages ou le coaching personnalisé.",
};

export type ContactMotifId =
  | "choisir-offre"
  | "diagnostic"
  | "formation-en-ligne"
  | "cours-hebdomadaires"
  | "stage-vacances"
  | "accompagnement"
  | "question-pratique"
  | "partenariat"
  | "autre";

export const OFFRE_TO_MOTIF: Record<string, ContactMotifId> = {
  "formation-en-ligne": "formation-en-ligne",
  "cours-hebdomadaires": "cours-hebdomadaires",
  "stage-vacances": "stage-vacances",
  "accompagnement-personnalise": "accompagnement",
};

export const contactContent = {
  hero: {
    badge: "Contact",
    title: "Une question ? Besoin d'être orienté ?",
    subtitle:
      "Vous ne savez pas quel format choisir pour votre enfant ? Formation en ligne, cours hebdomadaires, stage de vacances ou accompagnement personnalisé : je vous aide à identifier le point de départ le plus adapté",
    shortText:
      "Chaque situation est différente. Certains élèves ont surtout besoin d'organisation, d'autres de mieux réviser, de faire des fiches utiles, de reprendre confiance ou d'être accompagnés plus régulièrement. Vous pouvez me contacter pour poser une question, demander un conseil ou réserver un premier échange.",
    ctaPrimary: {
      label: "Demander un conseil",
      href: "/contact?motif=choisir-offre#formulaire",
    },
    ctaSecondary: {
      label: "Réserver un diagnostic",
      href: "/contact?motif=diagnostic#formulaire",
    },
    microInfos: [
      "Réponse sous 48h ouvrées",
      "Collégiens & lycéens",
      "Parents uniquement",
      "Orientation vers le bon format",
    ],
    floatingTags: [
      "📓 Carnet de méthode",
      "📅 Agenda organisé",
      "💬 Premier échange",
    ],
  },

  whyContact: {
    title: "Vous pouvez me contacter si…",
    cards: [
      {
        icon: "🤔",
        title: "Vous hésitez entre plusieurs formats",
        text: "Formation en ligne, stage de vacances, cours hebdomadaires ou accompagnement personnalisé : je peux vous aider à choisir selon le profil de votre enfant.",
      },
      {
        icon: "📉",
        title: "Votre enfant travaille mais ne progresse pas",
        text: "Vous avez l'impression qu'il passe du temps sur ses devoirs, mais que ses méthodes ne sont pas efficaces.",
      },
      {
        icon: "🏠",
        title: "Les devoirs créent des tensions à la maison",
        text: "Vous répétez, relancez, vérifiez, mais cela finit souvent en conflit ou en fatigue.",
      },
      {
        icon: "📆",
        title: "Une période importante approche",
        text: "Brevet, bac, rentrée, passage en seconde, contrôles rapprochés : vous cherchez une solution concrète pour l'aider à s'organiser.",
      },
      {
        icon: "🧭",
        title: "Vous ne savez pas par où commencer",
        text: "Organisation, concentration, fiches, révisions, mémorisation, autonomie : le problème est peut-être multiple ou difficile à identifier.",
      },
      {
        icon: "✅",
        title: "Vous voulez vérifier si l'offre est adaptée",
        text: "Vous pouvez poser une question avant toute inscription.",
      },
    ],
  },

  motifs: {
    title: "Quel est votre besoin principal ?",
    cards: [
      {
        id: "choisir-offre" as ContactMotifId,
        icon: "🎯",
        title: "Je veux choisir la bonne offre",
        text: "Pour être orienté vers la formation en ligne, les cours hebdomadaires, un stage ou un accompagnement personnalisé.",
      },
      {
        id: "diagnostic" as ContactMotifId,
        icon: "🔍",
        title: "Je veux réserver un diagnostic",
        text: "Pour faire le point sur les difficultés de méthode de mon enfant et identifier les priorités.",
      },
      {
        id: "stage-vacances" as ContactMotifId,
        icon: "☀️",
        title: "Je veux inscrire mon enfant à un stage",
        text: "Pour connaître les prochaines dates, les thèmes proposés et les places disponibles.",
      },
      {
        id: "question-pratique" as ContactMotifId,
        icon: "❓",
        title: "Je veux poser une question pratique",
        text: "Tarifs, horaires, modalités, âge conseillé, niveau scolaire, fonctionnement.",
      },
      {
        id: "autre" as ContactMotifId,
        icon: "💬",
        title: "Je veux parler d'une situation particulière",
        text: "Élève anxieux, désorganisé, en perte de confiance, dys, TDAH, phobie scolaire, difficultés installées.",
      },
      {
        id: "partenariat" as ContactMotifId,
        icon: "🤝",
        title: "Je souhaite proposer un partenariat",
        text: "Association de parents, professionnel de l'accompagnement, orthophoniste, psychologue, structure éducative, CSE.",
      },
    ],
  },

  form: {
    title: "Envoyer un message",
    intro:
      "Expliquez brièvement la situation de votre enfant et ce que vous cherchez. Je vous répondrai avec une première orientation.",
    groups: {
      parent: "Vos informations",
      child: "Votre enfant",
      request: "Votre demande",
    },
    fields: {
      prenom: "Prénom",
      nom: "Nom",
      email: "Email",
      telephone: "Téléphone",
      niveau: "Niveau scolaire",
      etablissement: "Type d'établissement",
      motif: "Motif principal",
      difficultes: "Difficultés principales de votre enfant",
      message: "Message libre",
      submit: "Envoyer ma demande",
    },
    placeholders: {
      message:
        "Vous pouvez expliquer brièvement ce qui vous préoccupe : ce qui se passe à la maison, les difficultés observées, l'objectif recherché ou l'offre qui vous intéresse.",
    },
    footerNote:
      "Je réponds généralement sous 48h ouvrées. Votre message reste confidentiel et sert uniquement à vous orienter vers la solution la plus adaptée.",
    niveaux: [
      { value: "", label: "Sélectionner un niveau" },
      { value: "6e", label: "6e" },
      { value: "5e", label: "5e" },
      { value: "4e", label: "4e" },
      { value: "3e", label: "3e" },
      { value: "seconde", label: "Seconde" },
      { value: "premiere", label: "Première" },
      { value: "terminale", label: "Terminale" },
      { value: "autre", label: "Autre" },
    ],
    etablissements: [
      { value: "", label: "Non précisé" },
      { value: "public", label: "Public" },
      { value: "prive-contrat", label: "Privé sous contrat" },
      { value: "prive-hors-contrat", label: "Privé hors contrat" },
      { value: "international", label: "International / bilingue" },
      { value: "autre", label: "Autre" },
    ],
    motifs: [
      { value: "", label: "Sélectionner un motif" },
      { value: "choisir-offre", label: "Choisir une offre" },
      { value: "diagnostic", label: "Réserver un diagnostic" },
      { value: "formation-en-ligne", label: "Formation en ligne" },
      { value: "cours-hebdomadaires", label: "Cours collectif" },
      { value: "stage-vacances", label: "Stage de vacances" },
      { value: "accompagnement", label: "Coaching individuel" },
      { value: "question-pratique", label: "Question pratique" },
      { value: "partenariat", label: "Partenariat" },
      { value: "autre", label: "Autre" },
    ],
    difficultes: [
      { value: "organisation", label: "Organisation des devoirs" },
      { value: "mise-au-travail", label: "Mise au travail" },
      { value: "concentration", label: "Concentration" },
      { value: "revisions", label: "Révisions" },
      { value: "fiches", label: "Fiches de cours" },
      { value: "memorisation", label: "Mémorisation" },
      { value: "controles", label: "Préparation des contrôles" },
      { value: "stress", label: "Stress / anxiété scolaire" },
      { value: "autonomie", label: "Manque d'autonomie" },
      { value: "confiance", label: "Perte de confiance" },
      { value: "comprehension", label: "Difficultés de compréhension" },
      { value: "autre", label: "Autre" },
    ],
  },

  messageExamples: {
    title: "Vous ne savez pas quoi écrire ?",
    intro: "Vous pouvez simplement partir d'une phrase comme :",
    examples: [
      "Mon enfant est en 4e. Il passe beaucoup de temps sur ses devoirs, mais il ne sait pas vraiment comment réviser. Je voudrais savoir quel format serait le plus adapté.",
      "Ma fille entre en seconde et manque d'organisation. J'hésite entre la formation en ligne et un stage de vacances.",
      "Mon fils prépare le brevet. Il révise souvent au dernier moment et je cherche une méthode plus structurée.",
      "Mon enfant est dys / TDAH / anxieux et a du mal à s'organiser. Je voudrais savoir si vos offres peuvent convenir.",
      "Je voudrais offrir à mon enfant un accompagnement, mais je ne sais pas s'il faut commencer par un diagnostic ou par un stage.",
    ],
  },

  diagnostic: {
    title: "Le diagnostic méthode",
    subtitle: "Pour comprendre rapidement ce qui bloque et choisir le bon format",
    text: "Le diagnostic permet de faire le point sur la manière dont votre enfant travaille aujourd'hui : organisation, devoirs, fiches, révisions, mémorisation, autonomie, stress ou mise au travail. Il permet ensuite d'identifier le point de départ le plus utile : formation en ligne, cours hebdomadaires, stage de vacances ou accompagnement personnalisé.",
    bulletsTitle: "Ce que le diagnostic peut aider à clarifier",
    bullets: [
      "Est-ce surtout un problème d'organisation ?",
      "Est-ce un problème de révision ?",
      "Est-ce que les fiches sont mal utilisées ?",
      "Est-ce que l'enfant manque d'autonomie ?",
      "Est-ce qu'il faut un format autonome ou accompagné ?",
      "Est-ce qu'un stage suffit ou faut-il un suivi plus individualisé ?",
    ],
    cta: {
      label: "Réserver un diagnostic",
      href: "/contact?motif=diagnostic#formulaire",
    },
  },

  exploreOffers: {
    title: "Vous pouvez aussi commencer par explorer les offres",
    cards: [
      {
        title: "Formation en ligne",
        description:
          "Pour avancer à son rythme avec un parcours structuré et des supports pratiques.",
        cta: { label: "Voir la formation", href: "/offres/formation-en-ligne" },
      },
      {
        title: "Cours collectif",
        description:
          "Pour participer à des séances thématiques en groupe, selon son agenda et ses besoins.",
        cta: { label: "Voir les cours", href: "/offres/cours-hebdomadaires" },
      },
      {
        title: "Stages de vacances",
        description:
          "Pour profiter des vacances et travailler intensivement un thème de méthode en petit groupe.",
        cta: { label: "Voir les stages", href: "/offres/stage-vacances" },
      },
      {
        title: "Coaching individuel",
        description:
          "Pour un suivi individuel, adapté à la situation réelle de l'élève.",
        cta: {
          label: "Voir le coaching",
          href: "/offres/accompagnement-personnalise",
        },
      },
    ],
  },

  faq: {
    title: "Questions fréquentes",
    items: [
      {
        question: "Je ne sais pas quelle offre choisir. Est-ce grave ?",
        answer:
          "Non. Vous pouvez m'écrire en décrivant brièvement la situation de votre enfant. Je vous orienterai vers le format le plus adapté.",
      },
      {
        question: "Est-ce que les offres s'adressent plutôt aux collégiens ou aux lycéens ?",
        answer:
          "Les offres sont pensées pour les collégiens et lycéens. Les méthodes sont adaptées selon l'âge, le niveau et le degré d'autonomie.",
      },
      {
        question: "Est-ce adapté si mon enfant est bon élève ?",
        answer:
          "Oui. Un bon élève peut travailler beaucoup mais perdre du temps, mal réviser ou manquer d'organisation.",
      },
      {
        question: "Est-ce adapté si mon enfant est en difficulté ?",
        answer:
          "Oui, si le besoin porte sur la méthode de travail : organisation, fiches, révisions, concentration, mémorisation ou autonomie. Pour une situation très installée, l'accompagnement personnalisé peut être plus adapté.",
      },
      {
        question: "Est-ce que vous faites du soutien scolaire dans une matière ?",
        answer:
          "Non. Les offres portent sur la méthode de travail scolaire, pas sur une matière en particulier.",
      },
      {
        question: "Peut-on commencer par un stage ou faut-il faire la formation en ligne d'abord ?",
        answer:
          "Les deux sont possibles. Le choix dépend du besoin : autonomie, intensif pendant les vacances, rendez-vous régulier ou suivi personnalisé.",
      },
      {
        question: "Combien de temps faut-il pour obtenir une réponse ?",
        answer: "En général, sous 48h ouvrées.",
      },
    ],
  },

  contactDirect: {
    title: "Contact direct",
    zone: "En ligne et/ou en présentiel selon les offres disponibles.",
    responseTime: "Réponse sous 48h ouvrées.",
    socials: ["LinkedIn", "Instagram", "Facebook"],
  },

  finalCta: {
    title: "Vous n'avez pas besoin de savoir exactement quelle offre choisir",
    subtitle:
      "Décrivez simplement la situation de votre enfant. Je vous aiderai à identifier le meilleur point de départ",
    buttons: [
      { label: "Envoyer un message", href: "#formulaire", variant: "school" as const },
      {
        label: "Réserver un diagnostic",
        href: "/contact?motif=diagnostic#formulaire",
        variant: "parentOutline" as const,
      },
    ],
    closing: "Un premier échange suffit souvent à clarifier le besoin.",
  },
};
