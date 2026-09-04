import type { Locale } from "@/app/lib/locale";

export type MethodeContent = {
  meta: { title: string; description: string };
  hero: {
    title: string;
    subtitle: string;
    highlightWord: string;
    tags: string[];
  };
  principle: { eyebrow: string; title: string; text: string };
  pillars: { eyebrow: string; title: string; subtitle: string; items: { title: string; text: string }[] };
  foundations: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; text: string; icon: string }[];
  };
  example: {
    eyebrow: string;
    title: string;
    beforeLabel: string;
    afterLabel: string;
    before: { title: string; text: string };
    after: { steps: { title: string; text: string }[] };
  };
  changes: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: { title: string; text: string; icon: string }[];
  };
  cta: {
    title: string;
    text: string;
    buttons: { label: string; href: string }[];
  };
};

const methodeFr: MethodeContent = {
  meta: {
    title: "Méthode de travail scolaire : organisation, fiches, révisions",
    description:
      "Découvrez les piliers de la méthode : clarifier, prioriser, découper, mémoriser activement, s'entraîner et faire le bilan.",
  },
  hero: {
    title: "Travailler mieux, pas plus",
    subtitle:
      "Six gestes clairs pour transformer la façon dont les élèves organisent, mémorisent et se préparent",
    highlightWord: "mieux",
    tags: ["Organisation", "Fiches", "Révisions", "Autonomie"],
  },
  principle: {
    eyebrow: "Le fondement",
    title: "Les codes du travail scolaire, enfin explicites",
    text: "L'école demande d'apprendre, réviser, s'organiser et préparer des contrôles — mais ces gestes sont rarement enseignés de manière progressive et concrète. La méthode rend visibles les étapes du travail scolaire.",
  },
  pillars: {
    eyebrow: "Les 6 piliers",
    title: "Six réflexes. Une méthode complète",
    subtitle: "Chaque pilier correspond à un geste concret que l'élève peut entraîner",
    items: [
      { title: "Clarifier", text: "Comprendre ce qui est demandé, repérer les consignes et sortir du flou." },
      { title: "Prioriser", text: "Distinguer l'urgent, l'important, le difficile et le rapide." },
      { title: "Découper", text: "Transformer une tâche vague en petites actions réalisables." },
      { title: "Mémoriser activement", text: "Se tester, reformuler, utiliser le rappel actif plutôt que relire." },
      { title: "S'entraîner", text: "Appliquer, refaire, corriger, s'exercer dans les conditions attendues." },
      { title: "Faire le bilan", text: "Comprendre ce qui a marché et quelle stratégie utiliser la prochaine fois." },
    ],
  },
  foundations: {
    eyebrow: "La science",
    title: "Appuyée sur ce qui fonctionne vraiment",
    subtitle: "Des principes pédagogiques solides, traduits en gestes simples pour les élèves",
    items: [
      { title: "Rappel actif", text: "On mémorise mieux quand on essaie de retrouver une information sans regarder le cours.", icon: "🧠" },
      { title: "Répétition espacée", text: "Plusieurs petites révisions réparties sont plus efficaces qu'une grosse veille.", icon: "📅" },
      { title: "Charge cognitive", text: "Un élève apprend mieux quand la tâche est découpée et visuellement organisée.", icon: "🎯" },
      { title: "Métacognition", text: "L'élève apprend à se demander : qu'est-ce que je sais ? quelle stratégie utiliser ?", icon: "💡" },
      { title: "Feedback", text: "L'élève progresse quand il comprend précisément ce qu'il doit améliorer.", icon: "📊" },
      { title: "Autonomie guidée", text: "On donne d'abord des repères, puis on les retire progressivement.", icon: "🚀" },
    ],
  },
  example: {
    eyebrow: "Exemple concret",
    title: "Avant / après : préparer un contrôle",
    beforeLabel: "Avant la méthode",
    afterLabel: "Avec la méthode",
    before: {
      title: "La veille du contrôle",
      text: "Je relis mon cours jeudi soir, je surligne beaucoup, je fais une fiche trop longue et je ne sais pas si je suis prêt.",
    },
    after: {
      steps: [
        { title: "J'identifie", text: "Le chapitre, les notions, les dates et les types de questions possibles." },
        { title: "Je découpe", text: "Je répartis le travail sur plusieurs petites sessions." },
        { title: "Je fiche", text: "Je fais une fiche courte avec les idées essentielles." },
        { title: "Je me teste", text: "Je réponds à des questions sans regarder le cours." },
        { title: "Je m'entraîne", text: "Je fais un exercice ou une question type." },
        { title: "Je vérifie", text: "Je repère ce que je ne sais pas encore et je le retravaille." },
      ],
    },
  },
  changes: {
    eyebrow: "L'impact",
    title: "Ce que ça change au quotidien",
    subtitle: "Des effets visibles pour l'élève, la famille et l'établissement",
    cards: [
      { title: "Moins de flou", text: "L'élève sait quoi faire concrètement.", icon: "🔦" },
      { title: "Moins de dernière minute", text: "Le travail est réparti et anticipé.", icon: "⏰" },
      { title: "Moins de tensions", text: "Les parents n'ont plus besoin d'organiser chaque détail.", icon: "🤝" },
      { title: "Plus d'efficacité", text: "Le temps de travail devient plus utile.", icon: "⚡" },
      { title: "Plus de confiance", text: "L'élève voit qu'il peut progresser avec une stratégie claire.", icon: "💪" },
      { title: "Plus d'autonomie", text: "Les routines deviennent progressivement personnelles.", icon: "🎓" },
    ],
  },
  cta: {
    title: "Prêt à mettre cette méthode en place ?",
    text: "Choisissez le parcours qui correspond à votre situation.",
    buttons: [
      { label: "Je suis un établissement", href: "/etablissements" },
      { label: "Je suis parent", href: "/parents" },
    ],
  },
};

const methodeEn: MethodeContent = {
  meta: {
    title: "Study method: organization, notes, revision",
    description:
      "Discover the pillars of the method: clarify, prioritize, break down, actively memorize, practice, and review.",
  },
  hero: {
    title: "Study smarter, not harder",
    subtitle:
      "Six clear gestures to transform how students organize, memorize, and prepare",
    highlightWord: "smarter",
    tags: ["Organization", "Notes", "Revision", "Independence"],
  },
  principle: {
    eyebrow: "The foundation",
    title: "The hidden codes of schoolwork, finally made explicit",
    text: "School asks students to learn, revise, organize, and prepare for tests — but these gestures are rarely taught progressively and concretely. The method makes the steps of schoolwork visible.",
  },
  pillars: {
    eyebrow: "The 6 pillars",
    title: "Six reflexes. One complete method",
    subtitle: "Each pillar maps to a concrete gesture students can practice",
    items: [
      { title: "Clarify", text: "Understand what's being asked, spot instructions, and cut through confusion." },
      { title: "Prioritize", text: "Distinguish urgent, important, difficult, and quick tasks." },
      { title: "Break down", text: "Turn a vague task into small, doable actions." },
      { title: "Memorize actively", text: "Self-test, rephrase, use active recall instead of passive rereading." },
      { title: "Practice", text: "Apply, redo, correct, and train under expected conditions." },
      { title: "Review", text: "Understand what worked and which strategy to use next time." },
    ],
  },
  foundations: {
    eyebrow: "The science",
    title: "Built on what actually works",
    subtitle: "Solid pedagogical principles translated into simple gestures for students",
    items: [
      { title: "Active recall", text: "We remember better when we try to retrieve information without looking at notes.", icon: "🧠" },
      { title: "Spaced repetition", text: "Several short revision sessions beat one big cram session the night before.", icon: "📅" },
      { title: "Cognitive load", text: "Students learn better when tasks are broken down and visually organized.", icon: "🎯" },
      { title: "Metacognition", text: "Students learn to ask: what do I know? which strategy should I use?", icon: "💡" },
      { title: "Feedback", text: "Students progress when they understand precisely what to improve.", icon: "📊" },
      { title: "Guided independence", text: "Provide reference points first, then gradually remove them.", icon: "🚀" },
    ],
  },
  example: {
    eyebrow: "Concrete example",
    title: "Before / after: preparing for a test",
    beforeLabel: "Before the method",
    afterLabel: "With the method",
    before: {
      title: "The night before",
      text: "I reread my lesson Thursday evening, highlight a lot, make notes that are too long, and don't know if I'm ready.",
    },
    after: {
      steps: [
        { title: "I identify", text: "The chapter, key concepts, dates, and possible question types." },
        { title: "I break it down", text: "I spread work across several short sessions." },
        { title: "I summarize", text: "I make short notes with essential ideas." },
        { title: "I self-test", text: "I answer questions without looking at my notes." },
        { title: "I practice", text: "I do an exercise or a typical question." },
        { title: "I check", text: "I spot what I still don't know and rework it." },
      ],
    },
  },
  changes: {
    eyebrow: "The impact",
    title: "What changes day to day",
    subtitle: "Visible effects for the student, family, and school",
    cards: [
      { title: "Less confusion", text: "The student knows concretely what to do.", icon: "🔦" },
      { title: "Less last-minute panic", text: "Work is spread out and anticipated.", icon: "⏰" },
      { title: "Less tension", text: "Parents no longer need to organize every detail.", icon: "🤝" },
      { title: "More efficiency", text: "Study time becomes more useful.", icon: "⚡" },
      { title: "More confidence", text: "The student sees they can progress with a clear strategy.", icon: "💪" },
      { title: "More independence", text: "Routines gradually become their own.", icon: "🎓" },
    ],
  },
  cta: {
    title: "Ready to put this method in place?",
    text: "Choose the pathway that fits your situation.",
    buttons: [
      { label: "I'm a school", href: "/etablissements" },
      { label: "I'm a parent", href: "/parents" },
    ],
  },
};

export const methodeByLocale: Record<Locale, MethodeContent> = {
  fr: methodeFr,
  en: methodeEn,
};

export function getMethodeContent(locale: Locale): MethodeContent {
  return methodeByLocale[locale];
}

export const methodeMeta = methodeFr.meta;
