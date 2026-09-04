import type { Locale } from "@/app/lib/locale";

export type HomeContent = {
  meta: { title: string; description: string };
  hero: {
    title: string;
    subtitle: string;
    reassurance: string;
    highlightWord: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
    planning: {
      title: string;
      footer: string;
      cards: string[];
    };
  };
  problem: {
    title: string;
    subtitle: string;
    text: string;
    cards: { title: string; text: string }[];
  };
  method: {
    title: string;
    subtitle: string;
    text: string;
    steps: { step: number; title: string; text: string; color: "orange" | "pink" | "purple" | "yellow" | "green" }[];
  };
  audience: {
    title: string;
    cards: {
      title: string;
      subtitle: string;
      bullets: string[];
      badge: string;
      cta: { label: string; href: string };
      variant: "school" | "parent";
    }[];
  };
  checklist: {
    title: string;
    subtitle: string;
    items: { step: number; text: string }[];
  };
  approach: {
    title: string;
    subtitle: string;
    cards: { title: string; text: string; icon: string }[];
  };
  microcopy: string[];
  finalCta: {
    title: string;
    text: string;
    buttons: { label: string; href: string; variant: "school" | "parent" }[];
  };
};

const homeFr: HomeContent = {
  meta: {
    title: "La Méthode Claire — Méthode scolaire pour collégiens et lycéens",
    description:
      "Une méthode claire pour aider les collégiens et lycéens à s'organiser, apprendre efficacement, préparer leurs contrôles et gagner en autonomie.",
  },
  hero: {
    title: "La méthode scolaire, enfin enseignée clairement",
    subtitle:
      "J'aide les collégiens et lycéens à mieux s'organiser, apprendre plus efficacement, préparer leurs contrôles et gagner en autonomie",
    reassurance:
      "Pour les établissements scolaires, les familles et les élèves qui veulent transformer le travail scolaire en méthode simple, concrète et durable.",
    highlightWord: "clairement",
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
      { title: "Devoirs faits au dernier moment", text: "L'élève sait qu'il doit travailler, mais ne sait pas toujours par quoi commencer." },
      { title: "Fiches trop longues ou inutiles", text: "Il recopie au lieu de sélectionner, organiser et reformuler." },
      { title: "Révisions passives", text: "Il relit plusieurs fois, mais ne se teste pas vraiment." },
      { title: "Stress avant les contrôles", text: "La charge de travail devient floue, urgente et décourageante." },
      { title: "Dépendance aux parents", text: "Les adultes doivent rappeler, organiser, vérifier, relancer." },
      { title: "Perte de confiance", text: "L'élève finit par croire qu'il n'est pas capable, alors qu'il manque surtout de méthode." },
    ],
  },
  method: {
    title: "Une méthode simple pour apprendre à travailler",
    subtitle: "5 étapes claires pour transformer le travail scolaire",
    text: "L'objectif n'est pas de travailler plus. L'objectif est d'apprendre à travailler mieux — avec une progression visible, concrète et réutilisable dans toutes les matières.",
    steps: [
      { step: 1, title: "S'organiser", text: "Transformer les devoirs en plan d'action clair.", color: "orange" },
      { step: 2, title: "Comprendre", text: "Repérer l'essentiel d'un cours, d'une consigne ou d'un chapitre.", color: "pink" },
      { step: 3, title: "Ficher", text: "Créer des fiches courtes, utiles et vraiment mémorisables.", color: "purple" },
      { step: 4, title: "Réviser", text: "Utiliser le rappel actif, les quiz et la répétition espacée.", color: "yellow" },
      { step: 5, title: "Gagner en autonomie", text: "Installer des routines simples pour travailler sans dépendre d'un adulte.", color: "green" },
    ],
  },
  audience: {
    title: "Deux parcours selon votre besoin",
    cards: [
      {
        badge: "Établissements",
        title: "Pour les établissements",
        subtitle: "Des interventions clé en main pour aider les élèves à acquérir les méthodes de travail qui conditionnent leur réussite",
        bullets: ["Ateliers en classe", "Cycles méthodologie", "Accompagnement Devoirs faits", "Supports élèves et adultes"],
        cta: { label: "Découvrir l'offre établissement", href: "/etablissements" },
        variant: "school",
      },
      {
        badge: "Parents",
        title: "Pour les parents",
        subtitle: "Un accompagnement concret pour aider votre enfant à s'organiser, apprendre ses cours, préparer ses contrôles et retrouver confiance",
        bullets: ["Bilan méthode", "Suivi individuel ou petits groupes", "Outils simples à réutiliser", "Moins de tensions autour des devoirs"],
        cta: { label: "Découvrir l'offre parents", href: "/parents" },
        variant: "parent",
      },
    ],
  },
  checklist: {
    title: "Ce que les élèves apprennent concrètement",
    subtitle: "Chaque compétence s'inscrit dans la progression de la méthode",
    items: [
      { step: 1, text: "Utiliser PRONOTE ou un agenda pour prioriser la semaine, pas seulement noter les devoirs" },
      { step: 2, text: "Découper chaque devoir en petites actions avant de commencer" },
      { step: 3, text: "Lire une consigne et identifier ce qui est vraiment demandé" },
      { step: 4, text: "Sélectionner l'essentiel d'un cours avant de ficher ou réviser" },
      { step: 5, text: "Créer une fiche courte, structurée et vraiment mémorisable" },
      { step: 6, text: "Réviser en se testant activement, pas seulement en relisant" },
      { step: 7, text: "Planifier un contrôle sur plusieurs jours avec un calendrier réaliste" },
      { step: 8, text: "Installer des routines simples pour gagner en autonomie au quotidien" },
    ],
  },
  approach: {
    title: "Une approche positive, pratique et rassurante",
    subtitle: "Aider l'élève à comprendre comment travailler — pas seulement à en faire plus",
    cards: [
      { title: "Positive", text: "On part de ce que l'élève sait déjà faire pour construire des habitudes réalistes et motivantes.", icon: "☀️" },
      { title: "Pratique", text: "Chaque séance produit un outil concret : planning, fiche, routine ou grille de révision utilisable dès le lendemain.", icon: "🛠️" },
      { title: "Orientée progrès", text: "L'élève voit ses avancées, reprend confiance et comprend progressivement comment avancer seul.", icon: "📈" },
    ],
  },
  microcopy: [
    "Pas de méthode miracle. Des gestes simples, entraînables, réutilisables.",
    "Apprendre à travailler, ça s'apprend.",
    "Moins de flou. Plus d'autonomie.",
  ],
  finalCta: {
    title: "Et si la méthode devenait enfin un apprentissage à part entière ?",
    text: "Que vous soyez parent ou établissement, l'objectif est le même : aider les élèves à comprendre comment travailler, pour gagner en autonomie, en efficacité et en confiance.",
    buttons: [
      { label: "Demander un devis établissement", href: "/contact?type=etablissement", variant: "school" },
      { label: "Réserver un échange parent", href: "/contact?type=parent", variant: "parent" },
    ],
  },
};

const homeEn: HomeContent = {
  meta: {
    title: "La Méthode Claire — Study skills for middle and high school students",
    description:
      "A clear methodology to help students organize their work, learn effectively, prepare for tests, and build independence.",
  },
  hero: {
    title: "Study skills, finally taught clearly",
    subtitle:
      "I help middle and high school students get organized, learn more effectively, prepare for tests, and build independence",
    reassurance:
      "For schools, families, and students who want to turn schoolwork into a simple, concrete, and lasting method.",
    highlightWord: "clearly",
    ctaPrimary: { label: "I'm a school", href: "/etablissements" },
    ctaSecondary: { label: "I'm a parent", href: "/parents" },
    planning: {
      title: "Weekly planner",
      footer: "Clear method, step by step",
      cards: ["Homework", "Revision", "Notes", "Test", "Break"],
    },
  },
  problem: {
    title: "The problem isn't always a lack of effort",
    subtitle: "Often, it's not effort that's missing — it's the method",
    text: "Many students spend time on homework without getting the results they expect. They reread without memorizing, copy overly long notes, start too late, and end up associating schoolwork with stress.",
    cards: [
      { title: "Homework done at the last minute", text: "The student knows they need to work, but doesn't always know where to start." },
      { title: "Notes that are too long or useless", text: "They copy instead of selecting, organizing, and rephrasing." },
      { title: "Passive revision", text: "They reread several times but don't really test themselves." },
      { title: "Stress before tests", text: "The workload feels vague, urgent, and discouraging." },
      { title: "Dependence on parents", text: "Adults have to remind, organize, check, and follow up." },
      { title: "Loss of confidence", text: "Students end up believing they're not capable — when they mainly lack method." },
    ],
  },
  method: {
    title: "A simple method to learn how to study",
    subtitle: "5 clear steps to transform schoolwork",
    text: "The goal isn't to work more. The goal is to learn how to work better — with a visible, concrete progression reusable across every subject.",
    steps: [
      { step: 1, title: "Get organized", text: "Turn homework into a clear action plan.", color: "orange" },
      { step: 2, title: "Understand", text: "Identify what matters in a lesson, instruction, or chapter.", color: "pink" },
      { step: 3, title: "Make notes", text: "Create short, useful, truly memorable study sheets.", color: "purple" },
      { step: 4, title: "Revise", text: "Use active recall, quizzes, and spaced repetition.", color: "yellow" },
      { step: 5, title: "Build independence", text: "Set up simple routines to work without relying on an adult.", color: "green" },
    ],
  },
  audience: {
    title: "Two paths based on your needs",
    cards: [
      {
        badge: "Schools",
        title: "For schools",
        subtitle: "Ready-to-use interventions to help students acquire the study skills that shape their success",
        bullets: ["Class workshops", "Methodology cycles", "Homework support", "Resources for students and staff"],
        cta: { label: "Explore the school offer", href: "/etablissements" },
        variant: "school",
      },
      {
        badge: "Parents",
        title: "For parents",
        subtitle: "Practical support to help your child get organized, learn their lessons, prepare for tests, and regain confidence",
        bullets: ["Method assessment", "Individual or small-group follow-up", "Simple reusable tools", "Less tension around homework"],
        cta: { label: "Explore the parent offer", href: "/parents" },
        variant: "parent",
      },
    ],
  },
  checklist: {
    title: "What students concretely learn",
    subtitle: "Each skill fits into the method's learning progression",
    items: [
      { step: 1, text: "Use the school portal or a planner to prioritize the week — not just list homework" },
      { step: 2, text: "Break each assignment into small actions before starting" },
      { step: 3, text: "Read an instruction and identify what is actually being asked" },
      { step: 4, text: "Select the essentials from a lesson before making notes or revising" },
      { step: 5, text: "Create a short, structured study sheet that's truly memorable" },
      { step: 6, text: "Revise through self-testing — not just rereading" },
      { step: 7, text: "Plan test preparation over several days with a realistic schedule" },
      { step: 8, text: "Set up simple routines to build daily independence" },
    ],
  },
  approach: {
    title: "A positive, practical, and reassuring approach",
    subtitle: "Helping students understand how to work — not just telling them to do more",
    cards: [
      { title: "Positive", text: "We build on what the student already knows to create realistic, motivating habits.", icon: "☀️" },
      { title: "Practical", text: "Every session produces a concrete tool: planner, study sheet, routine, or revision grid usable right away.", icon: "🛠️" },
      { title: "Progress-focused", text: "Students see their progress, regain confidence, and gradually learn how to move forward on their own.", icon: "📈" },
    ],
  },
  microcopy: [
    "No miracle method. Simple, trainable, reusable habits.",
    "Learning how to study can itself be learned.",
    "Less confusion. More independence.",
  ],
  finalCta: {
    title: "What if study skills finally became a subject in their own right?",
    text: "Whether you're a parent or a school, the goal is the same: help students understand how to work — for more independence, efficiency, and confidence.",
    buttons: [
      { label: "Request a school quote", href: "/contact?type=etablissement", variant: "school" },
      { label: "Book a parent call", href: "/contact?type=parent", variant: "parent" },
    ],
  },
};

export const homeByLocale: Record<Locale, HomeContent> = {
  fr: homeFr,
  en: homeEn,
};

export function getHomeContent(locale: Locale): HomeContent {
  return homeByLocale[locale];
}

/* Legacy exports for metadata (French default) */
export const homeMeta = homeFr.meta;
export const homeHero = homeFr.hero;
export const homeProblemSection = homeFr.problem;
export const homePillarSection = { title: homeFr.method.title, text: homeFr.method.text, pillars: homeFr.method.steps };
export const homeAudienceSection = homeFr.audience;
export const homeChecklist = homeFr.checklist;
export const homeApproach = homeFr.approach;
export const homeFinalCta = homeFr.finalCta;
