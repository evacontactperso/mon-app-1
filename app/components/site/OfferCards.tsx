import Button from "./Button";
import PageSection, { type SectionTone } from "./PageSection";
import SectionHeader from "./SectionHeader";

type Offer = {
  title: string;
  price: string;
  badge?: string;
  text: string;
  cta: { label: string; href: string };
};

type OfferCardsProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  offers: Offer[];
  tone?: SectionTone;
};

export default function OfferCards({
  eyebrow,
  title,
  subtitle,
  offers,
  tone = "white",
}: OfferCardsProps) {
  return (
    <PageSection tone={tone}>
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} accent="pink" />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer) => (
          <article
            key={offer.title}
            className="relative flex flex-col rounded-[28px] border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {offer.badge && (
              <span className="absolute -top-3 right-4 rounded-full bg-[#EE6B6E] px-3 py-1 text-xs font-bold text-white">
                {offer.badge}
              </span>
            )}
            <h3 className="text-lg font-bold text-[#0B0B0B]">{offer.title}</h3>
            <p className="mt-2 text-2xl font-extrabold font-heading text-[#6366F1]">{offer.price}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#515154]">{offer.text}</p>
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
