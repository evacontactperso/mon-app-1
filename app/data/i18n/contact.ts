import type { Locale } from "@/app/lib/locale";

export type ContactContent = {
  meta: { title: string; description: string };
  hero: {
    title: string;
    subtitle: string;
    highlightWord: string;
  };
  reassurance: { eyebrow: string; title: string; text: string };
  alternatives: {
    email: string;
    location: string;
    availability: string;
  };
  faq: { title: string; items: { question: string; answer: string }[] };
  form: {
    tabs: { etablissement: string; parent: string };
    loading: string;
    success: { title: string; text: string };
    fields: {
      etablissement: string;
      ville: string;
      type: string;
      niveau: string;
      eleves: string;
      besoin: string;
      format: string;
      periode: string;
      message: string;
      email: string;
      telephone: string;
      prenom: string;
      classe: string;
      difficulte: string;
      deja: string;
      objectif: string;
      nom: string;
      submitEtablissement: string;
      submitParent: string;
    };
    errors: {
      emailRequired: string;
      emailInvalid: string;
      etablissementRequired: string;
      villeRequired: string;
      prenomRequired: string;
    };
    etablissementOptions: {
      types: string[];
      niveaux: string[];
      besoins: string[];
      formats: string[];
    };
    parentOptions: {
      difficultes: string[];
      formats: string[];
    };
    placeholders: {
      select: string;
      message: string;
      periode: string;
      classe: string;
    };
  };
};

const contactFr: ContactContent = {
  meta: {
    title: "Contact et devis — La Méthode Claire",
    description:
      "Contactez La Méthode Claire pour une intervention en établissement, un devis ou un accompagnement parent/enfant.",
  },
  hero: {
    title: "Parlons de votre besoin",
    subtitle:
      "Établissement ou parent — décrivez la situation. Je vous répondrai avec une proposition adaptée",
    highlightWord: "besoin",
  },
  reassurance: {
    eyebrow: "Sans engagement",
    title: "Une première réponse simple et claire",
    text: "L'objectif du premier échange est de comprendre la situation, vérifier si l'accompagnement est pertinent et proposer un format adapté.",
  },
  alternatives: {
    email: "contact@lamethodeclaire.fr",
    location: "France / interventions en présentiel selon zone + visio possible",
    availability: "Réponse sous 48h ouvrées",
  },
  faq: {
    title: "FAQ contact",
    items: [
      { question: "Intervenez-vous en présentiel ?", answer: "Oui, selon la zone géographique et le format. Certaines séances peuvent aussi se faire en visio." },
      { question: "Travaillez-vous avec des groupes ?", answer: "Oui, les interventions peuvent être individuelles, en petits groupes ou en classe entière selon l'objectif." },
      { question: "Proposez-vous des devis pour établissements ?", answer: "Oui. Le devis dépend du nombre d'élèves, du format, de la durée et du niveau concerné." },
    ],
  },
  form: {
    tabs: { etablissement: "Demande établissement", parent: "Demande parent" },
    loading: "Chargement du formulaire…",
    success: {
      title: "Message envoyé !",
      text: "Je vous répondrai dans les meilleurs délais.",
    },
    fields: {
      etablissement: "Nom de l'établissement",
      ville: "Ville",
      type: "Type d'établissement",
      niveau: "Niveau concerné",
      eleves: "Nombre approximatif d'élèves",
      besoin: "Besoin principal",
      format: "Format souhaité",
      periode: "Période souhaitée",
      message: "Message libre",
      email: "Email",
      telephone: "Téléphone (optionnel)",
      prenom: "Prénom du parent",
      classe: "Classe de l'enfant",
      difficulte: "Difficulté principale",
      deja: "Ce que vous avez déjà essayé",
      objectif: "Objectif prioritaire",
      nom: "Votre nom",
      submitEtablissement: "Envoyer ma demande de devis",
      submitParent: "Envoyer ma demande",
    },
    errors: {
      emailRequired: "L'email est requis.",
      emailInvalid: "Email invalide.",
      etablissementRequired: "Ce champ est requis.",
      villeRequired: "Ce champ est requis.",
      prenomRequired: "Ce champ est requis.",
    },
    etablissementOptions: {
      types: ["Collège", "Lycée", "Association", "Collectivité", "Autre"],
      niveaux: ["6e", "5e", "4e", "3e", "Seconde", "Première", "Terminale", "Plusieurs niveaux"],
      besoins: [
        "Organisation des devoirs",
        "Méthodologie",
        "Révisions / examens",
        "Devoirs faits",
        "Autonomie",
        "Gestion du stress scolaire",
        "Formation adultes",
        "Autre",
      ],
      formats: ["Intervention ponctuelle", "Cycle de plusieurs séances", "Formation adultes", "Je ne sais pas encore"],
    },
    parentOptions: {
      difficultes: [
        "Organisation",
        "Devoirs",
        "Fiches",
        "Révisions",
        "Stress",
        "Manque d'autonomie",
        "Préparation brevet/bac",
        "Autre",
      ],
      formats: ["Bilan méthode", "Pack autonomie", "Préparation contrôle/examen", "Suivi régulier", "Je ne sais pas encore"],
    },
    placeholders: {
      select: "Sélectionner…",
      message: "Décrivez brièvement la situation…",
      periode: "Ex. : 2e trimestre 2025",
      classe: "Ex. : 4e",
    },
  },
};

const contactEn: ContactContent = {
  meta: {
    title: "Contact and quote — La Méthode Claire",
    description:
      "Contact La Méthode Claire for a school intervention, quote, or parent/student coaching.",
  },
  hero: {
    title: "Let's talk about your needs",
    subtitle:
      "School or parent — describe the situation. I'll reply with a tailored proposal",
    highlightWord: "needs",
  },
  reassurance: {
    eyebrow: "No commitment",
    title: "A simple, clear first response",
    text: "The goal of the first exchange is to understand the situation, check if coaching is relevant, and propose a suitable format.",
  },
  alternatives: {
    email: "contact@lamethodeclaire.fr",
    location: "France / in-person interventions depending on area + video calls possible",
    availability: "Reply within 2 business days",
  },
  faq: {
    title: "Contact FAQ",
    items: [
      { question: "Do you work in person?", answer: "Yes, depending on location and format. Some sessions can also be done via video call." },
      { question: "Do you work with groups?", answer: "Yes, interventions can be individual, small group, or full class depending on the goal." },
      { question: "Do you provide quotes for schools?", answer: "Yes. The quote depends on number of students, format, duration, and grade level." },
    ],
  },
  form: {
    tabs: { etablissement: "School inquiry", parent: "Parent inquiry" },
    loading: "Loading form…",
    success: {
      title: "Message sent!",
      text: "I'll get back to you as soon as possible.",
    },
    fields: {
      etablissement: "School name",
      ville: "City",
      type: "School type",
      niveau: "Grade level",
      eleves: "Approximate number of students",
      besoin: "Main need",
      format: "Preferred format",
      periode: "Preferred period",
      message: "Additional message",
      email: "Email",
      telephone: "Phone (optional)",
      prenom: "Parent's first name",
      classe: "Child's grade",
      difficulte: "Main difficulty",
      deja: "What you've already tried",
      objectif: "Priority goal",
      nom: "Your name",
      submitEtablissement: "Send quote request",
      submitParent: "Send inquiry",
    },
    errors: {
      emailRequired: "Email is required.",
      emailInvalid: "Invalid email.",
      etablissementRequired: "This field is required.",
      villeRequired: "This field is required.",
      prenomRequired: "This field is required.",
    },
    etablissementOptions: {
      types: ["Middle school", "High school", "Association", "Local authority", "Other"],
      niveaux: ["6th", "7th", "8th", "9th", "10th", "11th", "12th", "Multiple levels"],
      besoins: [
        "Homework organization",
        "Study skills",
        "Revision / exams",
        "Homework support",
        "Independence",
        "School stress management",
        "Staff training",
        "Other",
      ],
      formats: ["One-off session", "Multi-session cycle", "Staff training", "Not sure yet"],
    },
    parentOptions: {
      difficultes: [
        "Organization",
        "Homework",
        "Notes",
        "Revision",
        "Stress",
        "Lack of independence",
        "Brevet/bac preparation",
        "Other",
      ],
      formats: ["Method assessment", "Independence pack", "Test/exam preparation", "Regular follow-up", "Not sure yet"],
    },
    placeholders: {
      select: "Select…",
      message: "Briefly describe the situation…",
      periode: "E.g. Q2 2025",
      classe: "E.g. 9th grade",
    },
  },
};

export const contactByLocale: Record<Locale, ContactContent> = {
  fr: contactFr,
  en: contactEn,
};

export function getContactContent(locale: Locale): ContactContent {
  return contactByLocale[locale];
}

export const contactMeta = contactFr.meta;
