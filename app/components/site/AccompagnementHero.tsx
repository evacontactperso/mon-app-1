import OfferSplitHero from "./OfferSplitHero";

type AccompagnementHeroProps = {
  title: string;
  highlightWord?: string;
  lead: string;
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
