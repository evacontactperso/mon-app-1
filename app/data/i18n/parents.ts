import type { Locale } from "@/app/lib/locale";

export type ParentsContent = {
  meta: { title: string; description: string };
  hero: {
    title: string;
    subtitle: string;
    highlightWord: string;
    tags: string[];
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
  };
  stats: { value: string; label: string }[];
  recognition: { eyebrow: string; title: string; subtitle: string; items: string[] };
  motivation: { eyebrow: string; title: string; text: string };
  learn: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: { title: string; text: string; icon: string }[];
  };
  comparison: {
    eyebrow: string;
    title: string;
    notLabel: string;
    isLabel: string;
    not: string[];
    is: string[];
  };
  formats: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; duration: string; bestFor: string }[];
  };
  steps: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { step: number; title: string; text: string }[];
  };
  faq: { title: string; items: { question: string; answer: string }[] };
  cta: {
    title: string;
    text: string;
    button: { label: string; href: string };
  };
};

const parentsFr: ParentsContent = {
  meta: {
    title: "Aider son enfant à s'organiser et réviser efficacement",
    description:
      "Accompagnement méthode pour aider votre enfant à faire ses devoirs, préparer ses contrôles, réviser efficacement et devenir plus autonome.",
  },
  hero: {
    title: "Votre enfant veut réussir — mais ne sait pas comment travailler",
    subtitle:
      "Je l'aide à s'organiser, réviser et gagner en autonomie — sans faire le travail à sa place",
    highlightWord: "comment",
    tags: ["Collège", "Lycée", "Devoirs", "Autonomie"],
    ctaPrimary: { label: "Réserver un échange", href: "/contact?type=parent" },
    ctaSecondary: { label: "Comprendre la méthode", href: "/methode" },
  },
  stats: [
    { value: "7", label: "compétences clés" },
    { value: "5", label: "formats d'accompagnement" },
    { value: "5", label: "étapes structurées" },
    { value: "0", label: "devoirs faits à votre place" },
  ],
  recognition: {
    eyebrow: "Vous n'êtes pas seul",
    title: "Ces situations vous parlent ?",
    subtitle: "Ce ne sont pas des problèmes de motivation — ce sont des problèmes de méthode",
    items: [
      "Il commence ses devoirs trop tard.",
      "Il ne sait pas quoi faire en premier.",
      "Il relit ses cours sans retenir.",
      "Ses fiches sont trop longues ou inutiles.",
      "Il oublie des consignes ou des échéances.",
      "Il panique avant les contrôles.",
      "Il dépend beaucoup de vous pour s'organiser.",
      "Les devoirs deviennent une source de tension.",
      "Il dit qu'il a travaillé, mais les résultats ne suivent pas.",
    ],
  },
  motivation: {
    eyebrow: "Le vrai problème",
    title: "Ce n'est pas la motivation — c'est la méthode",
    text: "Beaucoup d'élèves veulent réussir, mais n'ont jamais appris les gestes concrets du travail scolaire. Ils confondent relire et apprendre, recopier et ficher, passer du temps et travailler efficacement. L'accompagnement leur donne une méthode claire, simple et réutilisable.",
  },
  learn: {
    eyebrow: "Les résultats",
    title: "Ce que votre enfant va maîtriser",
    subtitle: "Des compétences concrètes, applicables dès la prochaine séance de devoirs",
    cards: [
      { title: "Organiser ses devoirs", text: "Savoir par quoi commencer, dans quel ordre travailler et éviter l'accumulation.", icon: "📋" },
      { title: "Lire une consigne", text: "Repérer exactement ce qui est demandé pour éviter les hors-sujets.", icon: "🔍" },
      { title: "Apprendre une leçon", text: "Passer de la relecture passive à des techniques qui mémorisent vraiment.", icon: "🧠" },
      { title: "Faire une fiche utile", text: "Sélectionner l'essentiel, reformuler et structurer au lieu de recopier.", icon: "📝" },
      { title: "Préparer un contrôle", text: "Planifier, s'entraîner, se tester et corriger ses points faibles.", icon: "✅" },
      { title: "Gérer la charge scolaire", text: "Réduire le flou, anticiper et sortir du stress de dernière minute.", icon: "⏱️" },
      { title: "Gagner en autonomie", text: "Mettre en place des routines simples pour dépendre moins des parents.", icon: "🚀" },
    ],
  },
  comparison: {
    eyebrow: "Notre approche",
    title: "Pas un cours particulier. Une méthode",
    notLabel: "Ce que ce n'est pas",
    isLabel: "Ce que c'est",
    not: [
      "Un cours particulier classique",
      "Faire les devoirs à la place de l'élève",
      "Une solution miracle",
      "Une pression supplémentaire",
      "Un simple discours de motivation",
    ],
    is: [
      "Un apprentissage de la méthode",
      "Un entraînement à travailler seul",
      "Des outils concrets et progressifs",
      "Un cadre rassurant",
      "Des habitudes réalistes à installer",
    ],
  },
  formats: {
    eyebrow: "Les formats",
    title: "Le parcours qui correspond à votre situation",
    subtitle: "Du bilan ponctuel au suivi régulier sur plusieurs semaines",
    items: [
      { title: "Bilan méthode", duration: "1 séance", bestFor: "Identifier comment l'élève travaille aujourd'hui et quelles habitudes installer en priorité." },
      { title: "Pack autonomie", duration: "4 séances", bestFor: "Installer les bases : organisation, devoirs, leçons, fiches, révisions." },
      { title: "Pack contrôle / examen", duration: "3 à 6 séances", bestFor: "Préparer une échéance : contrôle important, brevet, bac blanc ou oral." },
      { title: "Suivi régulier", duration: "Hebdo / bimensuel", bestFor: "Accompagner l'élève dans la durée pour ancrer les routines." },
      { title: "Atelier parent-enfant", duration: "1h30", bestFor: "Mettre en place un cadre de travail plus apaisé à la maison." },
    ],
  },
  steps: {
    eyebrow: "Le déroulé",
    title: "5 étapes. Un objectif clair à chaque séance",
    subtitle: "Chaque séance produit un outil concret que l'élève réutilise chez lui",
    items: [
      { step: 1, title: "Diagnostic", text: "On observe les habitudes actuelles : devoirs, révisions, fiches, organisation, stress." },
      { step: 2, title: "Objectif prioritaire", text: "On choisit un objectif concret : PRONOTE, contrôle, fiches ou planification." },
      { step: 3, title: "Mise en pratique", text: "On travaille à partir des vrais cours et devoirs de l'élève." },
      { step: 4, title: "Outil simple", text: "L'élève repart avec une méthode visuelle et réutilisable." },
      { step: 5, title: "Ajustement", text: "On vérifie ce qui fonctionne et on simplifie ce qui bloque." },
    ],
  },
  faq: {
    title: "FAQ parents",
    items: [
      { question: "Est-ce que vous faites les devoirs avec l'élève ?", answer: "Les devoirs peuvent servir de support, mais l'objectif est d'apprendre une méthode transférable. Je ne fais pas le travail à sa place." },
      { question: "Est-ce adapté si mon enfant manque de motivation ?", answer: "Oui, si la démotivation vient du flou, du découragement ou du sentiment de ne pas savoir comment s'y prendre." },
      { question: "Est-ce seulement pour les élèves en difficulté ?", answer: "Non. Beaucoup de bons élèves travaillent beaucoup mais de façon inefficace." },
      { question: "À partir de quelle classe ?", answer: "Principalement collégiens et lycéens, avec adaptation selon le niveau et l'autonomie." },
    ],
  },
  cta: {
    title: "Prêt à aider votre enfant à travailler plus sereinement ?",
    text: "Un premier échange permet de comprendre sa situation, ses blocages et le format le plus adapté.",
    button: { label: "Réserver un échange", href: "/contact?type=parent" },
  },
};

const parentsEn: ParentsContent = {
  meta: {
    title: "Help your child organize and revise effectively",
    description:
      "Study skills coaching to help your child with homework, test preparation, effective revision, and greater independence.",
  },
  hero: {
    title: "Your child wants to succeed — but doesn't know how to study",
    subtitle:
      "I help them organize, revise, and build independence — without doing the work for them",
    highlightWord: "how",
    tags: ["Middle school", "High school", "Homework", "Independence"],
    ctaPrimary: { label: "Book a call", href: "/contact?type=parent" },
    ctaSecondary: { label: "Understand the method", href: "/methode" },
  },
  stats: [
    { value: "7", label: "key skills" },
    { value: "5", label: "coaching formats" },
    { value: "5", label: "structured steps" },
    { value: "0", label: "homework done for them" },
  ],
  recognition: {
    eyebrow: "You're not alone",
    title: "Does this sound familiar?",
    subtitle: "These aren't motivation problems — they're study skill problems",
    items: [
      "They start homework too late.",
      "They don't know what to do first.",
      "They reread lessons without retaining anything.",
      "Their notes are too long or useless.",
      "They forget instructions or deadlines.",
      "They panic before tests.",
      "They rely heavily on you to stay organized.",
      "Homework becomes a source of tension.",
      "They say they worked, but results don't follow.",
    ],
  },
  motivation: {
    eyebrow: "The real issue",
    title: "It's not motivation — it's method",
    text: "Many students want to succeed but were never taught the concrete gestures of schoolwork. They confuse rereading with learning, copying with note-taking, spending time with working effectively. Coaching gives them a clear, simple, reusable method.",
  },
  learn: {
    eyebrow: "The outcomes",
    title: "What your child will master",
    subtitle: "Concrete skills applicable from the very next homework session",
    cards: [
      { title: "Organize homework", text: "Know where to start, what order to work in, and how to avoid backlog.", icon: "📋" },
      { title: "Read instructions", text: "Spot exactly what's being asked to avoid going off-topic.", icon: "🔍" },
      { title: "Learn a lesson", text: "Move from passive rereading to techniques that actually stick.", icon: "🧠" },
      { title: "Make useful notes", text: "Select essentials, rephrase, and structure instead of copying.", icon: "📝" },
      { title: "Prepare for tests", text: "Plan, practice, self-test, and target weak points.", icon: "✅" },
      { title: "Manage workload", text: "Cut through confusion, anticipate, and escape last-minute stress.", icon: "⏱️" },
      { title: "Build independence", text: "Set up simple routines to rely less on parents.", icon: "🚀" },
    ],
  },
  comparison: {
    eyebrow: "Our approach",
    title: "Not tutoring. A method",
    notLabel: "What it isn't",
    isLabel: "What it is",
    not: [
      "Classic private tutoring",
      "Doing homework for the student",
      "A miracle solution",
      "Extra pressure",
      "A motivational speech",
    ],
    is: [
      "Learning a study method",
      "Training to work independently",
      "Concrete, progressive tools",
      "A reassuring framework",
      "Realistic habits to build",
    ],
  },
  formats: {
    eyebrow: "Formats",
    title: "The pathway that fits your situation",
    subtitle: "From a one-off assessment to regular follow-up over several weeks",
    items: [
      { title: "Method assessment", duration: "1 session", bestFor: "Identify how the student works today and which habits to prioritize." },
      { title: "Independence pack", duration: "4 sessions", bestFor: "Install the basics: organization, homework, lessons, notes, revision." },
      { title: "Test / exam pack", duration: "3 – 6 sessions", bestFor: "Prepare for a key deadline: important test, brevet, mock bac, or oral." },
      { title: "Regular follow-up", duration: "Weekly / biweekly", bestFor: "Support the student over time to anchor routines." },
      { title: "Parent-child workshop", duration: "1h30", bestFor: "Create a calmer homework framework at home." },
    ],
  },
  steps: {
    eyebrow: "The process",
    title: "5 steps. A clear goal every session",
    subtitle: "Every session produces a concrete tool the student reuses at home",
    items: [
      { step: 1, title: "Assessment", text: "We observe current habits: homework, revision, notes, organization, stress." },
      { step: 2, title: "Priority goal", text: "We pick a concrete target: portal, test, notes, or planning." },
      { step: 3, title: "Practice", text: "We work from the student's real lessons and homework." },
      { step: 4, title: "Simple tool", text: "The student leaves with a visual, reusable method." },
      { step: 5, title: "Adjustment", text: "We check what works and simplify what blocks." },
    ],
  },
  faq: {
    title: "Parents FAQ",
    items: [
      { question: "Do you do homework with the student?", answer: "Homework can be a starting point, but the goal is a transferable method. I don't do the work for them." },
      { question: "Is this for unmotivated students?", answer: "Yes, when lack of motivation comes from confusion, discouragement, or not knowing how to proceed." },
      { question: "Is this only for struggling students?", answer: "No. Many good students work a lot but inefficiently." },
      { question: "From which grade level?", answer: "Mainly middle and high school, adapted to level and independence." },
    ],
  },
  cta: {
    title: "Ready to help your child study more calmly?",
    text: "A first conversation helps understand their situation, blockers, and the best format.",
    button: { label: "Book a call", href: "/contact?type=parent" },
  },
};

export const parentsByLocale: Record<Locale, ParentsContent> = {
  fr: parentsFr,
  en: parentsEn,
};

export function getParentsContent(locale: Locale): ParentsContent {
  return parentsByLocale[locale];
}

export const parentsMeta = parentsFr.meta;
