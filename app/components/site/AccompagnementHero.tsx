import OfferSplitHero from "./OfferSplitHero";

type AccompagnementHeroProps = {
  title: string;
  highlightWord?: string;
  /** Conservé pour restauration du sous-titre hero (masqué via OfferSplitHero). */
  lead?: string;
  keywords?: string[];
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
};

/** Hero coaching — même design, accent bleu-violet foncé */
export default function AccompagnementHero(props: AccompagnementHeroProps) {
  return (
    <OfferSplitHero
      {...props}
      eyebrow="Coaching personnalisé"
      accent="indigo"
      titleMaxCh={34}
    />
  );
}
