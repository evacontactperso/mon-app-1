export const tarifsMeta = {
  title: "Tarifs — formation méthode scolaire",
  description:
    "Tarifs pour parents, établissements publics, privés et internationaux : modules, packs, ateliers, conférences et accompagnement individuel.",
};

export const tarifsContent = {
  hero: {
    badge: "Tarifs parents • établissements • international",
    title: "Des formats adaptés aux familles et aux établissements",
    subtitle:
      "Choisissez une formation individuelle, un pack d'accompagnement ou une intervention pour votre établissement",
    cta: { label: "Demander un devis personnalisé", href: "/contact" },
  },
  formationTable: {
    title: "Formation méthode",
    columns: ["Offre", "Parents", "Écoles publiques", "Privé sous contrat", "Privé hors contrat", "International Premium"],
    rows: [
      {
        offre: "1 module",
        parents: "199 €",
        ecolesPubliques: "24 à 12 € / élève",
        priveSousContrat: "35 à 19 € / élève",
        priveHorsContrat: "59 à 32 € / élève",
        internationalPremium: "89 à 49 € / élève",
      },
      {
        offre: "Pack 4 modules",
        parents: "497 € au lieu de 796 €",
        ecolesPubliques: "69 à 39 € / élève",
        priveSousContrat: "89 à 59 € / élève",
        priveHorsContrat: "149 à 89 € / élève",
        internationalPremium: "249 à 129 € / élève",
      },
    ],
    note: "Les tarifs par élève varient selon le volume, le format, le niveau de personnalisation et les modalités de déploiement.",
  },
  coachingCards: {
    title: "Accompagnement individuel",
    cards: [
      {
        title: "Pack bilan",
        price: "250 €",
        text: "Bilan individuel pour analyser les habitudes de travail, identifier les blocages et repartir avec un plan d'action.",
      },
      {
        title: "Pack 3 mois",
        price: "1 790 €",
        text: "Bilan individuel + 3 séances thématiques + 12 séances de suivi pour installer organisation, motivation et méthode.",
      },
      {
        title: "Pack annuel",
        price: "4 990 €",
        text: "Bilan individuel + 10 séances thématiques + 18 séances de suivi d'organisation et de motivation sur l'année.",
      },
    ],
  },
  interventionsTable: {
    title: "Interventions établissement",
    columns: ["Format", "Écoles publiques", "Privé sous contrat", "Privé hors contrat", "International Premium"],
    rows: [
      {
        format: "Atelier classe — 1h",
        ecolesPubliques: "600 €",
        priveSousContrat: "750 €",
        priveHorsContrat: "950 €",
        internationalPremium: "1 200 €",
      },
      {
        format: "Intervention niveau — 1h",
        ecolesPubliques: "1 200 €",
        priveSousContrat: "1 500 €",
        priveHorsContrat: "2 000 €",
        internationalPremium: "2 800 €",
      },
      {
        format: "Grand format élèves — 1h",
        ecolesPubliques: "1 700 €",
        priveSousContrat: "2 200 €",
        priveHorsContrat: "3 000 €",
        internationalPremium: "4 000 €",
      },
      {
        format: "Conférence parents — 1h",
        ecolesPubliques: "1 200 €",
        priveSousContrat: "1 800 €",
        priveHorsContrat: "2 500 €",
        internationalPremium: "3 500 €",
      },
      {
        format: "Intervention équipe éducative — 1h",
        ecolesPubliques: "850 €",
        priveSousContrat: "1 100 €",
        priveHorsContrat: "1 500 €",
        internationalPremium: "2 000 €",
      },
      {
        format: "Demi-journée établissement",
        ecolesPubliques: "2 500 €",
        priveSousContrat: "3 500 €",
        priveHorsContrat: "5 000 €",
        internationalPremium: "7 000 €",
      },
      {
        format: "Journée établissement",
        ecolesPubliques: "4 200 €",
        priveSousContrat: "5 500 €",
        priveHorsContrat: "8 000 €",
        internationalPremium: "11 000 €",
      },
    ],
  },
  howToChoose: {
    title: "Comment choisir le bon format ?",
    cards: [
      {
        title: "Pour un besoin ciblé",
        text: "Choisissez un atelier classe ou une intervention niveau.",
      },
      {
        title: "Pour un enjeu d'établissement",
        text: "Choisissez une demi-journée ou une journée établissement.",
      },
      {
        title: "Pour les familles",
        text: "Commencez par un bilan méthode ou un module ciblé.",
      },
      {
        title: "Pour un suivi durable",
        text: "Choisissez le pack 3 mois ou le pack annuel.",
      },
    ],
  },
  finalCta: {
    title: "Vous hésitez sur le format le plus adapté ?",
    text: "Décrivez votre situation et je vous orienterai vers la formule la plus pertinente.",
    button: { label: "Demander un échange", href: "/contact" },
  },
};
