export const etablissementsMeta = {
  title: "Programme méthodologie scolaire pour collèges et lycées",
  description:
    "Interventions clé en main pour collèges et lycées : organisation, devoirs, fiches, révisions, autonomie et confiance des élèves.",
};

export const etablissementsHero = {
  title: "Un programme clé en main pour apprendre aux élèves à travailler avec méthode",
  subtitle:
    "Des interventions concrètes pour collégiens et lycéens : organisation, devoirs, fiches, révisions, autonomie, confiance et gestion de la charge scolaire",
  ctaPrimary: { label: "Demander un devis", href: "/contact?type=etablissement" },
  ctaSecondary: { label: "Voir les modules", href: "#modules" },
  tags: ["Collège", "Lycée", "Devoirs faits", "Vie de classe", "Accompagnement personnalisé"],
};

export const etablissementsWhy = {
  title: "Pourquoi les établissements ont besoin d'un vrai parcours méthodologie",
  text: "Les difficultés de méthode creusent les inégalités. Certains élèves apprennent à s'organiser à la maison, avec des parents disponibles ou des cours particuliers. D'autres doivent deviner seuls les codes du travail scolaire. Le programme rend ces codes explicites, accessibles et entraînables.",
  rows: [
    { problem: "Élèves désorganisés", consequence: "Devoirs oubliés, travail irrégulier, sentiment de retard permanent." },
    { problem: "Révisions inefficaces", consequence: "Temps passé important, mais résultats décevants." },
    { problem: "Fiches mal construites", consequence: "Copie excessive, surcharge, faible mémorisation." },
    { problem: "Difficulté à apprendre les leçons", consequence: "Découragement, baisse de confiance, évitement." },
    { problem: "Stress avant les contrôles", consequence: "Dernière minute, panique, conflits avec les familles." },
    { problem: "Inégalités de méthode", consequence: "Les élèves les mieux accompagnés disposent d'un avantage invisible." },
  ],
};

export const etablissementsBenefits = {
  title: "Ce que le programme apporte à l'établissement",
  cards: [
    { title: "Un langage commun", text: "Tous les élèves entendent les mêmes repères : planifier, ficher, se tester, prioriser, s'entraîner." },
    { title: "Des outils réutilisables", text: "Chaque séance laisse aux élèves un support simple qu'ils peuvent appliquer dans toutes les matières." },
    { title: "Un soutien à Devoirs faits", text: "Les élèves apprennent à utiliser ce temps pour avancer efficacement, pas seulement s'asseoir devant leurs cahiers." },
    { title: "Une réduction des inégalités", text: "Les méthodes implicites deviennent explicites pour tous." },
    { title: "Un appui pour les professeurs principaux", text: "Les séances peuvent s'intégrer à la vie de classe, à l'accompagnement personnalisé ou aux temps forts de l'année." },
    { title: "Un lien avec les familles", text: "Les parents reçoivent des repères simples pour aider sans faire à la place." },
  ],
};

export const etablissementsModules = [
  { number: 1, title: "Organiser ses devoirs", details: "Les élèves apprennent à transformer une liste de devoirs en tâches concrètes : quoi faire, dans quel ordre, combien de temps prévoir, quoi préparer.", deliverable: "Grille devoirs → actions" },
  { number: 2, title: "Utiliser PRONOTE sans se noyer", details: "Les élèves apprennent à lire les devoirs, repérer les priorités, anticiper les échéances, éviter l'accumulation et transformer l'information numérique en planning réel.", deliverable: "Routine hebdomadaire PRONOTE" },
  { number: 3, title: "Comprendre un cours", details: "Les élèves apprennent à repérer les définitions, idées principales, exemples, dates, formules, méthodes et points à retenir.", deliverable: "Carte de cours" },
  { number: 4, title: "Faire une fiche utile", details: "Les élèves apprennent à réduire, structurer, reformuler et organiser l'information au lieu de recopier tout le cours.", deliverable: "Modèle de fiche efficace" },
  { number: 5, title: "Réviser efficacement", details: "Les élèves découvrent le rappel actif, les quiz, l'auto-test, la répétition espacée et l'entraînement sur exercices.", deliverable: "Plan de révision avant contrôle" },
  { number: 6, title: "Préparer un contrôle", details: "Les élèves apprennent à découper la préparation sur plusieurs jours, prioriser les points faibles et s'entraîner dans les conditions attendues.", deliverable: "Checklist contrôle" },
  { number: 7, title: "Gérer la charge mentale scolaire", details: "Les élèves apprennent à sortir du flou, répartir le travail, éviter l'urgence permanente et retrouver une impression de contrôle.", deliverable: "Planning anti-panique" },
  { number: 8, title: "Devenir autonome", details: "Les élèves apprennent à construire leurs propres routines : préparer, travailler, vérifier, demander de l'aide, faire le bilan.", deliverable: "Routine autonomie" },
];

export const etablissementsFormats = [
  { title: "Intervention découverte", duration: "1h à 2h", bestFor: "Sensibiliser une classe ou un niveau à la méthode de travail." },
  { title: "Cycle court", duration: "3 à 4 séances", bestFor: "Installer les bases : organisation, fiches, révisions, contrôles." },
  { title: "Cycle complet", duration: "6 à 8 séances", bestFor: "Construire une vraie progression méthodologique sur un trimestre." },
  { title: "Parcours examen", duration: "3 à 5 séances", bestFor: "Brevet, bac, épreuves communes, oraux." },
  { title: "Formation adultes", duration: "2h à 1 journée", bestFor: "Outiller professeurs principaux, assistants d'éducation, accompagnateurs Devoirs faits ou équipes pédagogiques." },
];

export const etablissementsLevels = [
  { title: "6e — Devenir collégien", text: "Agenda, PRONOTE, cartable, devoirs, premières révisions, autonomie de base." },
  { title: "3e — Préparer le brevet", text: "Fiches, planning, annales, oral, gestion du stress, révisions progressives." },
  { title: "Seconde — Passer un cap", text: "Charge de travail plus importante, prise de notes, autonomie, organisation hebdomadaire." },
  { title: "Première / Terminale — Travailler en autonomie", text: "Contrôles, bac, spécialités, oral, Parcoursup, priorisation et routines de travail." },
];

export const etablissementsDeliverables = [
  "Supports élèves imprimables",
  "Modèles de fiches",
  "Plannings de révision",
  "Checklists de contrôle",
  "Grilles d'auto-évaluation",
  "Mini-guide pour les familles",
  "Bilan d'intervention",
  "Questionnaire avant/après si souhaité",
];

export const etablissementsFaq = [
  { question: "Le programme remplace-t-il les cours disciplinaires ?", answer: "Non. Il aide les élèves à mieux travailler dans toutes les matières. Il peut s'intégrer à la vie de classe, à Devoirs faits, à l'accompagnement personnalisé ou à des temps dédiés." },
  { question: "Faut-il mobiliser les enseignants ?", answer: "L'intervention peut être autonome, mais elle est plus efficace quand les adultes de l'établissement reprennent le même vocabulaire méthodologique." },
  { question: "Peut-on adapter le contenu au niveau des élèves ?", answer: "Oui. Les exemples, supports et exercices sont adaptés selon le niveau : 6e, 3e, seconde, terminale ou groupe spécifique." },
  { question: "Les élèves repartent-ils avec des outils ?", answer: "Oui. Chaque module produit un support concret : planning, fiche, checklist, routine ou grille d'organisation." },
];

export const etablissementsFinalCta = {
  title: "Vous voulez mettre en place un parcours méthode dans votre établissement ?",
  text: "Décrivez votre besoin, votre niveau concerné et le nombre d'élèves. Je vous proposerai un format adapté.",
  button: { label: "Demander un devis", href: "/contact?type=etablissement" },
};
