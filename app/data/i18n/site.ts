import type { Locale } from "@/app/lib/locale";

export const siteByLocale = {
  fr: {
    siteName: "La Méthode Claire",
    nav: [
      { href: "/", label: "Accueil" },
      { href: "/etablissements", label: "Pour les établissements" },
      { href: "/parents", label: "Pour les parents" },
      { href: "/methode", label: "La méthode" },
      { href: "/contact", label: "Contact" },
      { href: "/ancien-site", label: "Ancien site" },
    ],
    ctaHeader: "Demander un échange",
    footerTagline: "Aider les élèves à apprendre comment apprendre.",
    langSwitch: { fr: "FR", en: "EN" },
  },
  en: {
    siteName: "La Méthode Claire",
    nav: [
      { href: "/", label: "Home" },
      { href: "/etablissements", label: "For schools" },
      { href: "/parents", label: "For parents" },
      { href: "/methode", label: "The method" },
      { href: "/contact", label: "Contact" },
      { href: "/ancien-site", label: "Previous site" },
    ],
    ctaHeader: "Request a call",
    footerTagline: "Helping students learn how to learn.",
    langSwitch: { fr: "FR", en: "EN" },
  },
} as const satisfies Record<Locale, object>;

export function getSiteContent(locale: Locale) {
  return siteByLocale[locale];
}
