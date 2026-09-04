import OfferSplitHero from "./OfferSplitHero";

type MethodologieHeroProps = {
  title: string;
  highlightWord?: string;
  lead: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
};

/** Hero Ma méthode — même design que les offres, accent rose-rouge */
export default function MethodologieHero({
  title,
  highlightWord,
  lead,
  ctaPrimary,
  ctaSecondary,
}: MethodologieHeroProps) {
  return (
    <OfferSplitHero
      eyebrow="Apprendre à apprendre"
      title={title}
      highlightWord={highlightWord}
      lead={lead}
      ctaPrimary={ctaPrimary}
      ctaSecondary={ctaSecondary}
      accent="pink"
      titleMaxCh={28}
    />
  );
}
