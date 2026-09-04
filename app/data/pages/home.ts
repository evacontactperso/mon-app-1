export const homeMeta = {
  title: "La Méthode Claire — Méthode scolaire pour collégiens et lycéens",
  description:
    "Une méthode claire pour aider les collégiens et lycéens à s'organiser, apprendre efficacement, préparer leurs contrôles et gagner en autonomie.",
};

export const homeHero = {
  title: "La méthode scolaire, enfin enseignée clairement",
  subtitle:
    "J'aide les collégiens et lycéens à mieux s'organiser, apprendre plus efficacement, préparer leurs contrôles et gagner en autonomie",
  reassurance:
    "Pour les établissements scolaires, les familles et les élèves qui veulent transformer le travail scolaire en méthode simple, concrète et durable.",
  badges: ["Collège & lycée", "Méthode de travail", "Autonomie & confiance"],
  ctaPrimary: { label: "Je suis un établissement", href: "/etablissements" },
  ctaSecondary: { label: "Je suis parent", href: "/parents" },
};

export const homeProblemSection = {
  title: "Le problème n'est pas toujours le manque de travail",
  text: "Beaucoup d'élèves passent du temps sur leurs devoirs sans obtenir les résultats attendus. Ils relisent leurs cours sans vraiment mémoriser, recopient des fiches trop longues, commencent trop tard, ne savent pas prioriser et finissent par associer le travail scolaire au stress ou à l'échec.",
  cards: [
    { title: "Devoirs faits au dernier moment", text: "L'élève sait qu'il doit travailler, mais ne sait pas toujours par quoi commencer." },
    { title: "Fiches trop longues ou inutiles", text: "Il recopie au lieu de sélectionner, organiser et reformuler." },
    { title: "Révisions passives", text: "Il relit plusieurs fois, mais ne se teste pas vraiment." },
    { title: "Stress avant les contrôles", text: "La charge de travail devient floue, urgente et décourageante." },
    { title: "Dépendance aux parents", text: "Les adultes doivent rappeler, organiser, vérifier, relancer." },
    { title: "Perte de confiance", text: "L'élève finit par croire qu'il n'est pas capable, alors qu'il manque surtout de méthode." },
  ],
};

export const homePillarSection = {
  title: "Une méthode simple pour apprendre à travailler",
  text: "L'objectif n'est pas de demander aux élèves de travailler plus. L'objectif est de leur apprendre à travailler mieux : clarifier, organiser, mémoriser, s'entraîner et devenir progressivement autonomes.",
  pillars: [
    { title: "S'organiser", text: "Transformer les devoirs en plan d'action clair.", color: "blue" as const },
    { title: "Comprendre", text: "Repérer l'essentiel d'un cours, d'une consigne ou d'un chapitre.", color: "purple" as const },
    { title: "Ficher", text: "Créer des fiches courtes, utiles et vraiment mémorisables.", color: "coral" as const },
    { title: "Réviser", text: "Utiliser le rappel actif, les quiz et la répétition espacée.", color: "green" as const },
    { title: "Gagner en autonomie", text: "Installer des routines simples pour travailler sans dépendre constamment d'un adulte.", color: "yellow" as const },
  ],
};

export const homeAudienceSection = {
  title: "Deux parcours selon votre besoin",
  cards: [
    {
      title: "Pour les établissements",
      subtitle: "Des interventions clé en main pour aider les élèves à acquérir les méthodes de travail qui conditionnent leur réussite",
      bullets: ["Ateliers en classe", "Cycles méthodologie", "Accompagnement Devoirs faits", "Supports élèves et adultes"],
      cta: { label: "Découvrir l'offre établissement", href: "/etablissements" },
      variant: "blue" as const,
    },
    {
      title: "Pour les parents",
      subtitle: "Un accompagnement concret pour aider votre enfant à s'organiser, apprendre ses cours, préparer ses contrôles et retrouver confiance",
      bullets: ["Bilan méthode", "Suivi individuel ou petits groupes", "Outils simples à réutiliser", "Moins de tensions autour des devoirs"],
      cta: { label: "Découvrir l'offre parents", href: "/parents" },
      variant: "coral" as const,
    },
  ],
};

export const homeChecklist = {
  title: "Ce que les élèves apprennent concrètement",
  items: [
    "Utiliser un agenda ou PRONOTE comme un vrai outil d'organisation",
    "Découper un gros devoir en petites étapes",
    "Lire une consigne sans passer à côté de l'essentiel",
    "Apprendre une leçon autrement qu'en la relisant",
    "Préparer un contrôle plusieurs jours à l'avance",
    "Faire une fiche courte, claire et utile",
    "Se tester pour vérifier ce qui est vraiment mémorisé",
    "Demander de l'aide de façon précise",
  ],
};

export const homeApproach = {
  title: "Une approche positive, exigeante et concrète",
  cards: [
    { title: "Positive", text: "On part de ce que l'élève sait déjà faire pour construire des habitudes réalistes." },
    { title: "Exigeante", text: "On ne se contente pas de motiver : on apprend des gestes précis, réutilisables dans toutes les matières." },
    { title: "Concrète", text: "Chaque séance produit un outil utilisable immédiatement : planning, fiche, routine, grille de révision ou méthode de contrôle." },
  ],
};

export const homeFinalCta = {
  title: "Et si la méthode devenait enfin un apprentissage à part entière ?",
  text: "Que vous soyez parent ou établissement, l'objectif est le même : aider les élèves à comprendre comment travailler, pour gagner en autonomie, en efficacité et en confiance.",
  buttons: [
    { label: "Demander un devis établissement", href: "/contact?type=etablissement", variant: "primary" as const },
    { label: "Réserver un échange parent", href: "/contact?type=parent", variant: "secondary" as const },
  ],
};
