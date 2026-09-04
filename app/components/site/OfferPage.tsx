"use client";

import FadeIn from "@/app/components/site/FadeIn";
import HeroSection from "@/app/components/site/HeroSection";
import SectionHeader from "@/app/components/site/SectionHeader";
import PageSection from "@/app/components/site/PageSection";
import OutcomeGrid from "@/app/components/site/OutcomeGrid";
import FAQSection from "@/app/components/site/FAQSection";
import CTASection from "@/app/components/site/CTASection";
import type { OfferContent } from "@/app/data/content/offres";

type OfferPageProps = {
  offer: OfferContent;
};

export default function OfferPage({ offer }: OfferPageProps) {
  return (
    <>
      <HeroSection
        badge={offer.hero.badge}
        title={offer.hero.title}
        subtitle={offer.hero.subtitle}
        highlightWord={offer.hero.title.split(" ")[0]?.toLowerCase()}
        ctaPrimary={offer.cta}
        ctaSecondary={{ label: "Voir toutes les offres", href: "/#offres" }}
        fullHeight
        theme="parent"
      />

      <FadeIn>
        <PageSection tone="white">
          <SectionHeader title={offer.forWho.title} accent="pink" />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {offer.forWho.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200/60 bg-[#fde8e8]/20 px-4 py-4 text-sm text-[#0B0B0B]"
              >
                <span className="font-bold text-[#EE6B6E]">→</span>
                {item}
              </li>
            ))}
          </ul>
        </PageSection>
      </FadeIn>

      <FadeIn>
        <PageSection tone="alt">
          <SectionHeader title={offer.program.title} accent="indigo" />
          <div className="mt-10 space-y-6">
            {offer.program.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[28px] border border-slate-200/60 bg-white p-6 shadow-sm md:p-8"
              >
                <h3 className="text-xl font-bold text-[#0B0B0B]">{section.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#515154]">{section.text}</p>
                {section.bullets && (
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-[#515154]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </PageSection>
      </FadeIn>

      <FadeIn>
        <PageSection tone="indigo">
          <SectionHeader title={offer.format.title} align="center" accent="indigo" />
          <dl className="mx-auto mt-10 grid max-w-2xl gap-4">
            {offer.format.items.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 rounded-2xl border border-white/60 bg-white/80 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <dt className="text-sm font-bold text-[#6366F1]">{item.label}</dt>
                <dd className="text-sm text-[#0B0B0B]">{item.value}</dd>
              </div>
            ))}
          </dl>
        </PageSection>
      </FadeIn>

      <FadeIn>
        <OutcomeGrid
          tone="purple"
          title={offer.outcomes.title}
          cards={offer.outcomes.cards.map((card) => ({ ...card, icon: "✨" }))}
        />
      </FadeIn>

      {offer.faq && offer.faq.length > 0 && (
        <FadeIn>
          <FAQSection tone="white" title="Questions fréquentes" items={offer.faq} />
        </FadeIn>
      )}

      <FadeIn>
        <CTASection
          tone="pink"
          title="Une question sur cette offre ?"
          text="Décrivez la situation de votre enfant et nous vous orienterons vers le format le plus adapté."
          buttons={[{ ...offer.cta, variant: "parent" }]}
        />
      </FadeIn>
    </>
  );
}
