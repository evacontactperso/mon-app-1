import type { Locale } from "@/app/lib/locale";

export type SchoolsContent = {
  meta: { title: string; description: string };
  hero: {
    title: string;
    subtitle: string;
    highlightWord: string;
    tags: string[];
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
    schoolVisual: {
      badge: string;
      title: string;
      modules: string;
      formats: string;
      levels: string;
      cta: string;
    };
  };
  stats: { value: string; label: string }[];
  problem: {
    eyebrow: string;
    title: string;
    subtitle: string;
    problemLabel: string;
    consequenceLabel: string;
    rows: { problem: string; consequence: string }[];
  };
  outcomes: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: { title: string; text: string; icon: string }[];
  };
  modules: {
    eyebrow: string;
    title: string;
    subtitle: string;
    deliverableLabel: string;
    items: { number: number; title: string; details: string; deliverable: string }[];
  };
  formats: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; duration: string; bestFor: string }[];
  };
  levels: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { grade: string; title: string; text: string }[];
  };
  deliverables: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: string[];
  };
  quote: {
    placeholderLabel: string;
    quote: string;
    author: string;
    role: string;
  };
  faq: { title: string; items: { question: string; answer: string }[] };
  cta: {
    title: string;
    text: string;
    button: { label: string; href: string };
  };
};

const schoolsFr: SchoolsContent = {
  meta: {
    title: "Programme méthodologie scolaire pour collèges et lycées",
    description:
      "Interventions clé en main pour collèges et lycées : organisation, devoirs, fiches, révisions, autonomie et confiance des élèves.",
  },
  hero: {
    title: "Donnez à chaque élève les codes du travail scolaire",
    subtitle:
      "Un programme clé en main pour transformer l'organisation, les révisions et l'autonomie — du collège au lycée",
    highlightWord: "codes",
    tags: ["Collège", "Lycée", "Devoirs faits", "Vie de classe"],
    ctaPrimary: { label: "Demander un devis", href: "/contact?type=etablissement" },
    ctaSecondary: { label: "Voir les modules", href: "#modules" },
    schoolVisual: {
      badge: "Programme établissement",
      title: "Parcours méthodologie complet",
      modules: "modules",
      formats: "formats",
      levels: "niveaux",
      cta: "Progression structurée sur l'année",
    },
  },
  stats: [
    { value: "8", label: "modules méthodologiques" },
    { value: "5", label: "formats d'intervention" },
    { value: "4", label: "niveaux couverts" },
    { value: "100%", label: "outils réutilisables" },
  ],
  problem: {
    eyebrow: "Le constat",
    title: "Sans méthode, l'effort ne suffit pas",
    subtitle:
      "Les difficultés de méthode creusent les inégalités. Le programme rend les codes du travail scolaire explicites, accessibles et entraînables pour tous",
    problemLabel: "Situation",
    consequenceLabel: "Impact",
    rows: [
      { problem: "Élèves désorganisés", consequence: "Devoirs oubliés, travail irrégulier, sentiment de retard permanent." },
      { problem: "Révisions inefficaces", consequence: "Temps passé important, mais résultats décevants." },
      { problem: "Fiches mal construites", consequence: "Copie excessive, surcharge, faible mémorisation." },
      { problem: "Stress avant les contrôles", consequence: "Dernière minute, panique, conflits avec les familles." },
      { problem: "Inégalités de méthode", consequence: "Les élèves les mieux accompagnés disposent d'un avantage invisible." },
    ],
  },
  outcomes: {
    eyebrow: "Les bénéfices",
    title: "Ce que votre établissement gagne concrètement",
    subtitle: "Un langage commun, des outils durables et un vrai levier pour réduire les inégalités de méthode",
    cards: [
      { title: "Un langage commun", text: "Tous les élèves entendent les mêmes repères : planifier, ficher, se tester, prioriser.", icon: "🎯" },
      { title: "Des outils réutilisables", text: "Chaque séance laisse un support applicable dans toutes les matières.", icon: "📋" },
      { title: "Un soutien Devoirs faits", text: "Les élèves apprennent à utiliser ce temps pour avancer efficacement.", icon: "⏱️" },
      { title: "Moins d'inégalités", text: "Les méthodes implicites deviennent explicites pour tous.", icon: "⚖️" },
      { title: "Un appui aux équipes", text: "Intégration à la vie de classe, l'AP ou les temps forts de l'année.", icon: "🤝" },
      { title: "Un lien avec les familles", text: "Des repères simples pour aider sans faire à la place.", icon: "🏠" },
    ],
  },
  modules: {
    eyebrow: "Le programme",
    title: "8 modules. 8 outils. Une progression claire",
    subtitle: "Chaque module produit un livrable concret que l'élève réutilise dans toutes ses matières",
    deliverableLabel: "Livrable",
    items: [
      { number: 1, title: "Organiser ses devoirs", details: "Transformer une liste de devoirs en tâches concrètes : quoi faire, dans quel ordre, combien de temps.", deliverable: "Grille devoirs → actions" },
      { number: 2, title: "Utiliser PRONOTE sans se noyer", details: "Lire les devoirs, repérer les priorités, anticiper les échéances et créer un planning réel.", deliverable: "Routine hebdomadaire PRONOTE" },
      { number: 3, title: "Comprendre un cours", details: "Repérer définitions, idées principales, exemples, dates et points à retenir.", deliverable: "Carte de cours" },
      { number: 4, title: "Faire une fiche utile", details: "Réduire, structurer et reformuler au lieu de recopier tout le cours.", deliverable: "Modèle de fiche efficace" },
      { number: 5, title: "Réviser efficacement", details: "Rappel actif, quiz, auto-test et répétition espacée.", deliverable: "Plan de révision" },
      { number: 6, title: "Préparer un contrôle", details: "Découper la préparation, prioriser les points faibles et s'entraîner.", deliverable: "Checklist contrôle" },
      { number: 7, title: "Gérer la charge mentale", details: "Sortir du flou, répartir le travail et retrouver une impression de contrôle.", deliverable: "Planning anti-panique" },
      { number: 8, title: "Devenir autonome", details: "Construire ses routines : préparer, travailler, vérifier, demander de l'aide, faire le bilan.", deliverable: "Routine autonomie" },
    ],
  },
  formats: {
    eyebrow: "Flexibilité",
    title: "Le format qui correspond à votre établissement",
    subtitle: "De la sensibilisation ponctuelle au cycle complet sur un trimestre",
    items: [
      { title: "Intervention découverte", duration: "1h – 2h", bestFor: "Sensibiliser une classe ou un niveau à la méthode de travail." },
      { title: "Cycle court", duration: "3 – 4 séances", bestFor: "Installer les bases : organisation, fiches, révisions." },
      { title: "Cycle complet", duration: "6 – 8 séances", bestFor: "Construire une vraie progression sur un trimestre." },
      { title: "Parcours examen", duration: "3 – 5 séances", bestFor: "Brevet, bac, épreuves communes, oraux." },
      { title: "Formation adultes", duration: "2h – 1 journée", bestFor: "Outiller PP, AED, accompagnateurs Devoirs faits." },
    ],
  },
  levels: {
    eyebrow: "Tous les niveaux",
    title: "Du collège au lycée, une méthode adaptée",
    subtitle: "Contenus et supports ajustés selon l'âge, le niveau et l'autonomie des élèves",
    items: [
      { grade: "6e", title: "Devenir collégien", text: "Agenda, PRONOTE, cartable, devoirs, premières révisions." },
      { grade: "3e", title: "Préparer le brevet", text: "Fiches, planning, annales, oral, gestion du stress." },
      { grade: "2nde", title: "Passer un cap", text: "Charge accrue, prise de notes, organisation hebdomadaire." },
      { grade: "1re / Tle", title: "Travailler en autonomie", text: "Bac, spécialités, oral, Parcoursup, priorisation." },
    ],
  },
  deliverables: {
    eyebrow: "Ressources incluses",
    title: "Chaque intervention laisse des outils utilisables",
    subtitle: "Supports imprimables, modèles et guides pour les élèves, les équipes et les familles",
    items: [
      "Supports élèves imprimables",
      "Modèles de fiches",
      "Plannings de révision",
      "Checklists de contrôle",
      "Grilles d'auto-évaluation",
      "Mini-guide pour les familles",
      "Bilan d'intervention",
      "Questionnaire avant/après",
    ],
  },
  quote: {
    placeholderLabel: "Témoignage — exemple à remplacer",
    quote: "Nos élèves ont enfin un vocabulaire commun pour parler de leur façon de travailler. Les enseignants retrouvent des repères clairs.",
    author: "Nom de l'interlocuteur",
    role: "Proviseur adjoint — Collège (exemple)",
  },
  faq: {
    title: "FAQ établissements",
    items: [
      { question: "Le programme remplace-t-il les cours disciplinaires ?", answer: "Non. Il aide les élèves à mieux travailler dans toutes les matières. Il s'intègre à la vie de classe, Devoirs faits ou l'AP." },
      { question: "Faut-il mobiliser les enseignants ?", answer: "L'intervention peut être autonome, mais elle est plus efficace quand l'équipe reprend le même vocabulaire méthodologique." },
      { question: "Peut-on adapter le contenu ?", answer: "Oui. Exemples, supports et exercices adaptés selon le niveau : 6e, 3e, seconde, terminale ou groupe spécifique." },
      { question: "Les élèves repartent-ils avec des outils ?", answer: "Oui. Chaque module produit un support concret : planning, fiche, checklist ou grille d'organisation." },
    ],
  },
  cta: {
    title: "Prêt à lancer un parcours méthode dans votre établissement ?",
    text: "Décrivez votre besoin, votre niveau et le nombre d'élèves. Je vous proposerai un format adapté.",
    button: { label: "Demander un devis", href: "/contact?type=etablissement" },
  },
};

const schoolsEn: SchoolsContent = {
  meta: {
    title: "Study skills programme for middle and high schools",
    description:
      "Ready-to-use interventions for schools: organization, homework, study sheets, revision, independence and student confidence.",
  },
  hero: {
    title: "Give every student the codes of effective studying",
    subtitle:
      "A turnkey programme to transform organization, revision, and independence — from middle school to high school",
    highlightWord: "codes",
    tags: ["Middle school", "High school", "Homework support", "Class life"],
    ctaPrimary: { label: "Request a quote", href: "/contact?type=etablissement" },
    ctaSecondary: { label: "See modules", href: "#modules" },
    schoolVisual: {
      badge: "School programme",
      title: "Complete methodology pathway",
      modules: "modules",
      formats: "formats",
      levels: "levels",
      cta: "Structured progression across the year",
    },
  },
  stats: [
    { value: "8", label: "methodology modules" },
    { value: "5", label: "intervention formats" },
    { value: "4", label: "grade levels" },
    { value: "100%", label: "reusable tools" },
  ],
  problem: {
    eyebrow: "The reality",
    title: "Without method, effort isn't enough",
    subtitle:
      "Study skill gaps widen inequalities. This programme makes the hidden codes of schoolwork explicit, accessible, and trainable for everyone",
    problemLabel: "Situation",
    consequenceLabel: "Impact",
    rows: [
      { problem: "Disorganized students", consequence: "Forgotten homework, irregular work, constant feeling of falling behind." },
      { problem: "Ineffective revision", consequence: "Lots of time spent, disappointing results." },
      { problem: "Poor study sheets", consequence: "Excessive copying, overload, weak memorization." },
      { problem: "Pre-test stress", consequence: "Last-minute panic, family conflicts." },
      { problem: "Method inequalities", consequence: "Better-supported students have an invisible advantage." },
    ],
  },
  outcomes: {
    eyebrow: "The benefits",
    title: "What your school gains — concretely",
    subtitle: "A shared language, lasting tools, and a real lever to reduce method inequalities",
    cards: [
      { title: "A shared language", text: "All students hear the same reference points: plan, summarize, self-test, prioritize.", icon: "🎯" },
      { title: "Reusable tools", text: "Every session leaves a resource applicable across all subjects.", icon: "📋" },
      { title: "Homework support", text: "Students learn to use homework time to actually move forward.", icon: "⏱️" },
      { title: "Less inequality", text: "Implicit methods become explicit for everyone.", icon: "⚖️" },
      { title: "Team support", text: "Fits class life, pastoral care, or key moments in the year.", icon: "🤝" },
      { title: "Family connection", text: "Simple reference points so parents can help without doing the work.", icon: "🏠" },
    ],
  },
  modules: {
    eyebrow: "The programme",
    title: "8 modules. 8 tools. A clear progression",
    subtitle: "Each module produces a concrete deliverable students reuse in every subject",
    deliverableLabel: "Deliverable",
    items: [
      { number: 1, title: "Organize homework", details: "Turn a homework list into concrete tasks: what, in what order, how long.", deliverable: "Homework → actions grid" },
      { number: 2, title: "Use the school portal wisely", details: "Read assignments, spot priorities, anticipate deadlines, build a real planner.", deliverable: "Weekly portal routine" },
      { number: 3, title: "Understand a lesson", details: "Identify definitions, key ideas, examples, dates, and essentials.", deliverable: "Lesson map" },
      { number: 4, title: "Make useful notes", details: "Reduce, structure, and rephrase instead of copying everything.", deliverable: "Effective note template" },
      { number: 5, title: "Revise effectively", details: "Active recall, quizzes, self-testing, and spaced repetition.", deliverable: "Revision plan" },
      { number: 6, title: "Prepare for tests", details: "Break preparation down, target weak points, and practice.", deliverable: "Test checklist" },
      { number: 7, title: "Manage workload", details: "Cut through confusion, spread work out, regain a sense of control.", deliverable: "Anti-panic planner" },
      { number: 8, title: "Build independence", details: "Create routines: prepare, work, check, ask for help, review.", deliverable: "Independence routine" },
    ],
  },
  formats: {
    eyebrow: "Flexibility",
    title: "The format that fits your school",
    subtitle: "From a one-off introduction to a full-term progression",
    items: [
      { title: "Discovery session", duration: "1h – 2h", bestFor: "Introduce a class or grade level to study skills." },
      { title: "Short cycle", duration: "3 – 4 sessions", bestFor: "Install the basics: organization, notes, revision." },
      { title: "Full cycle", duration: "6 – 8 sessions", bestFor: "Build real progression over a term." },
      { title: "Exam pathway", duration: "3 – 5 sessions", bestFor: "Brevet, baccalaureate, common exams, orals." },
      { title: "Staff training", duration: "2h – 1 day", bestFor: "Equip teachers, staff, and homework supervisors." },
    ],
  },
  levels: {
    eyebrow: "All levels",
    title: "From middle school to high school",
    subtitle: "Content and resources adjusted to age, level, and student independence",
    items: [
      { grade: "6th", title: "Becoming a middle-schooler", text: "Planner, portal, bag, homework, first revision habits." },
      { grade: "9th", title: "Preparing for brevet", text: "Notes, planning, past papers, oral, stress management." },
      { grade: "10th", title: "Stepping up", text: "Heavier workload, note-taking, weekly organization." },
      { grade: "11th / 12th", title: "Working independently", text: "Bac, specializations, orals, applications, prioritization." },
    ],
  },
  deliverables: {
    eyebrow: "Included resources",
    title: "Every intervention leaves usable tools behind",
    subtitle: "Printable resources, templates, and guides for students, staff, and families",
    items: [
      "Printable student resources",
      "Note templates",
      "Revision planners",
      "Test checklists",
      "Self-assessment grids",
      "Mini-guide for families",
      "Intervention report",
      "Before/after questionnaire",
    ],
  },
  quote: {
    placeholderLabel: "Testimonial — placeholder example",
    quote: "Our students finally share a common vocabulary for talking about how they work. Teachers have clear reference points again.",
    author: "Contact name",
    role: "Deputy head — Middle school (example)",
  },
  faq: {
    title: "Schools FAQ",
    items: [
      { question: "Does this replace subject classes?", answer: "No. It helps students work better across all subjects. It integrates into class life, homework support, or pastoral care." },
      { question: "Do teachers need to be involved?", answer: "The intervention can be standalone, but it's more effective when staff share the same methodology vocabulary." },
      { question: "Can content be adapted?", answer: "Yes. Examples, resources, and exercises are tailored to the level: 6th grade, 9th, 10th, 12th, or specific groups." },
      { question: "Do students leave with tools?", answer: "Yes. Every module produces a concrete resource: planner, study sheet, checklist, or organization grid." },
    ],
  },
  cta: {
    title: "Ready to launch a study skills pathway in your school?",
    text: "Describe your needs, grade level, and number of students. I'll propose a tailored format.",
    button: { label: "Request a quote", href: "/contact?type=etablissement" },
  },
};

export const schoolsByLocale: Record<Locale, SchoolsContent> = {
  fr: schoolsFr,
  en: schoolsEn,
};

export function getSchoolsContent(locale: Locale): SchoolsContent {
  return schoolsByLocale[locale];
}

export const etablissementsMeta = schoolsFr.meta;
