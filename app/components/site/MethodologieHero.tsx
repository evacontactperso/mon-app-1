import OfferSplitHero from "./OfferSplitHero";

type MethodologieHeroProps = {
  title: string;
  highlightWord?: string;
  /** Conservé pour restauration du sous-titre hero (masqué via OfferSplitHero). */
  lead?: string;
  keywords?: string[];
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
};

/** Hero Ma méthode — même design que les offres, accent rose-rouge */
export default function MethodologieHero({
  title,
  highlightWord,
  lead,
  keywords,
  ctaPrimary,
  ctaSecondary,
}: MethodologieHeroProps) {
  return (
    <OfferSplitHero
      eyebrow="Apprendre à apprendre"
      title={title}
      highlightWord={highlightWord}
      lead={lead}
      keywords={keywords}
      ctaPrimary={ctaPrimary}
      ctaSecondary={ctaSecondary}
      accent="pink"
      titleMaxCh={28}
    />
  );
}
