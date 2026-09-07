export const SESSION_CATEGORIES = [
  "Organisation",
  "Concentration",
  "Fiches",
  "Révisions",
  "Mémorisation",
  "Entraînement",
] as const;

export type SessionCategory = (typeof SESSION_CATEGORIES)[number];

export const coursHebdomadairesMeta = {
  title: "Cours hebdomadaires — L'Atelier des Méthodes",
  description:
    "Un rendez-vous chaque week-end pour perfectionner sa méthode de travail. Séances thématiques en petit groupe pour collégiens et lycéens.",
};

export const coursHebdomadairesContent = {
  hero: {
    title: "Un rendez-vous chaque week-end pour perfectionner sa méthode de travail",
    highlightWord: "week-end",
    subtitle:
      "Chaque semaine, votre enfant travaille une compétence précise de méthodologie scolaire : s'organiser, planifier ses devoirs, se mettre au travail, préparer un contrôle, apprendre plus efficacement ou corriger ses erreurs. L'objectif n'est pas d'ajouter du travail à son emploi du temps : c'est de lui apprendre à mieux gérer le travail qu'il a déjà. Pendant 1h30, il découvre une méthode claire, l'applique à des situations concrètes et repart avec un outil directement réutilisable dans sa semaine. Un format régulier, pratique et motivant pour installer de bonnes habitudes dès le début de l'année",
    ctaPrimary: { label: "Inscrire mon enfant", href: "/contact?offre=cours-hebdomadaires" },
    ctaSecondary: { label: "Voir l'agenda des séances", href: "#agenda" },
  },
  agenda: {
    id: "agenda",
    title: "L'agenda des\n« Rendez-vous Méthodologie »",
    highlight: "L'agenda",
    subtitle: "Rentrée 2026-2027",
    rowLabels: {
      theme: "Thèmes",
      skills: "Compétences",
      activities: "Activités",
      deliverable: "Livrable",
    },
    weeks: [
      {
        weekend: "WK du 19-20 septembre",
        theme: "Réussir sa rentrée scolaire",
        skills:
          "*Organiser* ses *supports* de cours. Repérer les *attentes* des professeurs. Identifier les premières *habitudes* à installer.",
        activities:
          "Créer son *système de rangement* par matière. Faire l'*état des lieux* de ses supports. Construire sa *checklist* de rentrée.",
        deliverable: "Une *checklist* de rentrée *personnalisée*.",
      },
      {
        weekend: "WK du 26-27 septembre",
        theme: "Construire son planning de semaine",
        skills:
          "*Lire* son agenda efficacement. *Prioriser* les tâches. *Répartir* le travail sur plusieurs jours.",
        activities:
          "Construire son *planning* de la semaine. Transformer les devoirs en *tâches précises*. Placer les *contrôles* et les *révisions* dans le temps.",
        deliverable: "Un *planning hebdomadaire* réaliste.",
      },
      {
        weekend: "WK du 3-4 octobre",
        theme: "Se mettre au travail sans procrastiner",
        skills:
          "Préparer son *espace de travail*. *Découper* une tâche difficile. Utiliser des *blocs de concentration*.",
        activities:
          "Préparer une *routine de démarrage* en 5 minutes. Découper une tâche *repoussée* en petites étapes. Tester une session *chronométrée*.",
        deliverable: "Une *routine anti-procrastination*.",
      },
      {
        weekend: "WK du 10-11 octobre",
        theme: "Préparer son premier gros contrôle",
        skills:
          "Clarifier le *programme* du contrôle. Alterner *apprentissage* et *entraînement*. Vérifier son *niveau réel* avant l'évaluation.",
        activities:
          "Construire un *plan de révision* sur 7 jours. Créer une liste des *notions à maîtriser*. Prévoir les *exercices* à refaire avant le contrôle.",
        deliverable: "Un *plan de révision* pour contrôle.",
      },
      {
        weekend: "WK du 17-18 octobre",
        theme: "Corriger une mauvaise note et progresser",
        skills:
          "Identifier les *types d'erreurs*. Comprendre ce qui a *bloqué*. Définir quoi *retravailler* concrètement.",
        activities:
          "*Analyser* une copie ou une correction. *Classer* ses erreurs par origine. Créer une *fiche de correction* réutilisable.",
        deliverable: "Une *fiche de correction* personnelle.",
      },
    ],
  },
  whyWeekly: {
    title: "Des séances hebdomadaires qui changent vraiment les habitudes",
    subtitle:
      "Les cours hebdomadaires permettent de travailler la méthodologie au moment où l'élève en a besoin : quand les devoirs arrivent, quand les contrôles approchent, quand les premières notes tombent, quand les habitudes commencent à se construire",
    cards: [
      {
        icon: "📆",
        title: "Des séances alignées avec le *rythme réel de l'année*",
        text: "Les thèmes suivent les besoins concrets des élèves : rentrée, organisation, premiers devoirs, premiers contrôles, premières notes. La méthode n'est pas enseignée de manière abstraite, mais au moment où elle devient utile.",
      },
      {
        icon: "🔁",
        title: "Un rendez-vous régulier pour installer de *vraies routines*",
        text: "Une seule séance peut créer un déclic, mais la régularité permet d'ancrer les réflexes. Chaque week-end, l'élève revient sur une compétence précise et construit progressivement une méthode de travail plus solide.",
      },
      {
        icon: "🏆",
        title: "Une méthode *immédiatement applicable*",
        text: "Chaque séance part de situations concrètes : un agenda à organiser, un contrôle à préparer, une fiche à améliorer, une copie à corriger. L'élève ne repart pas seulement avec des conseils, mais avec une méthode qu'il peut appliquer dès la semaine suivante.",
      },
      {
        icon: "👥",
        title: "*Un groupe* qui motive",
        text: "Le collectif rend les séances plus vivantes et moins scolaires. L'élève voit qu'il n'est pas seul à rencontrer ces difficultés, ce qui aide à dédramatiser et à s'engager.",
      },
      {
        icon: "🏠",
        title: "Un *soulagement* pour les parents",
        text: "Le parent n'a pas besoin de tout porter seul : rappeler, vérifier, organiser, expliquer, relancer. Les séances donnent à l'enfant un cadre extérieur et des outils concrets, ce qui peut réduire les tensions autour des devoirs.",
      },
    ],
  },
  inscription: {
    id: "inscription",
    title: "Inscription aux\n« rendez-vous méthodologie »",
    subtitle:
      "Les places sont limitées afin de garantir un accompagnement attentif et des séances réellement pratiques. Vous pouvez inscrire votre enfant aux premières séances de rentrée ou me contacter pour vérifier si ce format correspond à ses besoins",
    ctaPrimary: { label: "Inscription", href: "/contact?offre=cours-hebdomadaires" },
    ctaSecondary: { label: "Contact", href: "/contact?offre=cours-hebdomadaires" },
  },
};
