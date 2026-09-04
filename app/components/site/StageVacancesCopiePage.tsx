"use client";

import FadeIn from "@/app/components/site/FadeIn";
import StageVacancesCopieHero from "@/app/components/site/StageVacancesCopieHero";
import {
  WhyVacancesSection,
  StageFormatOverviewSection,
  StageDifferentSection,
  StageSessionFlowSection,
  StageAxesSection,
  StageDeliverablesSection,
  StageBeforeAfterSection,
  SmallGroupSection,
  StagePricingSection,
  StageFAQSection,
  StageContactSection,
} from "@/app/components/site/StageVacancesCopiePageSections";
import { stageVacancesCopieContent } from "@/app/data/content/stage-vacances-copie";

export default function StageVacancesCopiePage() {
  const c = stageVacancesCopieContent;

  return (
    <div className="overflow-x-hidden bg-[#FAF8F5]">
      <FadeIn>
        <StageVacancesCopieHero
          badge={c.hero.badge}
          highlightWord={c.hero.highlightWord}
          title={c.hero.title}
          subtitle={c.hero.subtitle}
          badges={c.hero.badges}
          ctaPrimary={c.hero.ctaPrimary}
          ctaSecondary={c.hero.ctaSecondary}
          programSteps={c.hero.programSteps}
          maxStudentsLabel={c.hero.maxStudentsLabel}
        />
      </FadeIn>

      <FadeIn>
        <WhyVacancesSection
          eyebrow={c.whyVacances.eyebrow}
          title={c.whyVacances.title}
          subtitle={c.whyVacances.subtitle}
          cards={c.whyVacances.cards}
        />
      </FadeIn>

      <FadeIn>
        <StageFormatOverviewSection
          eyebrow={c.formatOverview.eyebrow}
          title={c.formatOverview.title}
          subtitle={c.formatOverview.subtitle}
          stats={c.formatOverview.stats}
        />
      </FadeIn>

      <FadeIn>
        <StageDifferentSection
          eyebrow={c.different.eyebrow}
          title={c.different.title}
          subtitle={c.different.subtitle}
          cards={c.different.cards}
        />
      </FadeIn>

      <FadeIn>
        <StageSessionFlowSection
          eyebrow={c.sessionFlow.eyebrow}
          title={c.sessionFlow.title}
          subtitle={c.sessionFlow.subtitle}
          phases={c.sessionFlow.phases}
          closing={c.sessionFlow.closing}
        />
      </FadeIn>

      <FadeIn>
        <StageAxesSection
          eyebrow={c.program.eyebrow}
          title={c.program.title}
          subtitle={c.program.subtitle}
          note={c.program.note}
          axes={c.program.axes}
        />
      </FadeIn>

      <FadeIn>
        <StageDeliverablesSection
          eyebrow={c.deliverables.eyebrow}
          title={c.deliverables.title}
          subtitle={c.deliverables.subtitle}
          groups={c.deliverables.groups}
        />
      </FadeIn>

      <FadeIn>
        <StageBeforeAfterSection
          eyebrow={c.beforeAfter.eyebrow}
          title={c.beforeAfter.title}
          subtitle={c.beforeAfter.subtitle}
          rows={c.beforeAfter.rows.map((row) => ({
            problem: row.before,
            consequence: row.after,
          }))}
          problemLabel="Avant le stage"
          consequenceLabel="Après le stage"
        />
      </FadeIn>

      <FadeIn>
        <SmallGroupSection
          eyebrow={c.smallGroup.eyebrow}
          title={c.smallGroup.title}
          points={c.smallGroup.points}
          closing={c.smallGroup.closing}
        />
      </FadeIn>

      <FadeIn>
        <StagePricingSection
          id={c.pricing.id}
          eyebrow={c.pricing.eyebrow}
          title={c.pricing.title}
          price={c.pricing.price}
          subtitle={c.pricing.subtitle}
          includes={c.pricing.includes}
          badge={c.pricing.badge}
          microText={c.pricing.microText}
          ctaPrimary={c.pricing.ctaPrimary}
          ctaSecondary={c.pricing.ctaSecondary}
        />
      </FadeIn>

      <FadeIn>
        <StageFAQSection title={c.faq.title} items={c.faq.items} />
      </FadeIn>

      <FadeIn>
        <StageContactSection
          title={c.contact.title}
          subtitle={c.contact.subtitle}
          ctaPrimary={c.contact.ctaPrimary}
          ctaSecondary={c.contact.ctaSecondary}
          footnote={c.contact.footnote}
        />
      </FadeIn>
    </div>
  );
}
