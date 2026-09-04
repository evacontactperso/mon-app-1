import Button from "./Button";
import PageSection, { type SectionTone } from "./PageSection";
import SectionHeader from "./SectionHeader";

type OfferTeaser = {
  slug: string;
  title: string;
  teaser: string;
  cta: { label: string; href: string };
};

type OfferTeaserGridProps = {
  id?: string;
  title: string;
  subtitle?: string;
  offers: OfferTeaser[];
  tone?: SectionTone;
};

const accents = [
  "from-[#EEF2FF] to-white border-[#6366F1]/20",
  "from-[#fde8e8]/50 to-white border-[#EE6B6E]/20",
  "from-[#fef3e8] to-white border-[#f58529]/20",
  "from-[#f3e5f5]/50 to-white border-[#8134af]/20",
];

export default function OfferTeaserGrid({
  id,
  title,
  subtitle,
  offers,
  tone = "white",
}: OfferTeaserGridProps) {
  return (
    <PageSection id={id} tone={tone}>
      <SectionHeader title={title} subtitle={subtitle} align="center" accent="pink" />
      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {offers.map((offer, i) => (
          <article
            key={offer.slug}
            className={`flex flex-col rounded-[28px] border bg-gradient-to-br p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${accents[i % accents.length]}`}
          >
            <h3 className="text-xl font-bold text-[#0B0B0B]">{offer.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#515154]">{offer.teaser}</p>
            <div className="mt-6">
              <Button href={offer.cta.href} variant="parent">
                {offer.cta.label}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </PageSection>
  );
}
