export const SITE_NAME = "L'Atelier des Méthodes";
export const SITE_TAGLINE = "Étudier, ça s'apprend";
export const CONTACT_EMAIL = "eva.methodescolaire@gmail.com";
export const CONTACT_PHONE = {
  label: "+33 6 51 85 32 75",
  href: "https://wa.me/33651853275",
} as const;
export const COPYRIGHT = "© 2026 L'Atelier des Méthodes";

/** 4 pages principales du menu. */
export const MENU_NAV_LINKS = [
  { href: "/", label: "Ma méthode" },
  { href: "/offres/stage-vacances", label: "Stages de vacances" },
  { href: "/offres/cours-hebdomadaires", label: "Cours collectifs" },
  { href: "/offres/accompagnement-personnalise", label: "Coaching personnalisé" },
] as const;

/** Bouton Contact (séparé des 4 pages). */
export const HEADER_CTA = {
  label: "Contact",
  href: "/contact",
} as const;

/** Toutes les autres pages — menu déroulant « Autres pages » (conservé, masqué dans le header). */
export const SHOW_MENU_OTHER_PAGES = false;

export const MENU_OTHER_LINKS = [
  { href: "/notre-methode-ancien", label: "0a. Notre méthode (ancienne version)" },
  { href: "/offres/formation-en-ligne", label: "1. Formation en ligne" },
  { href: "/offres/formation-en-ligne-initiale", label: "1a. Formation (initiale)" },
  { href: "/offres/formation-en-ligne-ancien", label: "1b. Formation (ancienne version)" },
  { href: "/offres/formation-en-ligne-original", label: "1c. Formation (original)" },
  { href: "/offres/stage-vacances-ancien", label: "2a. Stages (ancienne version)" },
  { href: "/offres/stage-vacances-copie", label: "2b. Stages (copie actuelle)" },
  { href: "/offres/cours-hebdomadaires-copie", label: "3b. Cours collectif (copie actuelle)" },
  { href: "/offres/accompagnement-personnalise-copie", label: "4b. Coaching individuel (copie actuelle)" },
  { href: "/autres", label: "Autres" },
  { href: "/ancien-site", label: "Ancien site" },
] as const;

/** @deprecated Utiliser MENU_OTHER_LINKS */
export const MENU_DUPLICATE_LINKS = MENU_OTHER_LINKS;

export const OFFER_NAV_LINKS = [
  { href: "/offres/stage-vacances", label: "Stages de vacances" },
  { href: "/offres/cours-hebdomadaires", label: "Cours collectifs" },
  { href: "/offres/accompagnement-personnalise", label: "Coaching personnalisé" },
] as const;

/** Liens du footer — alignés sur le menu principal. */
export const FOOTER_LINKS = [
  ...MENU_NAV_LINKS,
  { href: HEADER_CTA.href, label: HEADER_CTA.label },
] as const;
