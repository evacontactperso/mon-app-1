"use client";

import FadeIn from "@/app/components/site/FadeIn";
import StageVacancesAncienHero from "@/app/components/site/StageVacancesAncienHero";
import ComparisonSection from "@/app/components/site/ComparisonSection";
import FAQSection from "@/app/components/site/FAQSection";
import {
  WhyVacancesSection,
  StageFormatOverviewSection,
  StageDifferentSection,
  StageSessionFlowSection,
  StageAxesSection,
  StageDeliverablesSection,
  SmallGroupSection,
  StagePricingSection,
  StageContactSection,
} from "@/app/components/site/StageVacancesAncienSections";
import { stageVacancesCopieContent } from "@/app/data/content/stage-vacances-copie";

export default function StageVacancesAncienPage() {
  const c = stageVacancesCopieContent;

  return (
    <>
      <FadeIn>
        <StageVacancesAncienHero
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
          tone="warm"
        />
      </FadeIn>

      <FadeIn>
        <StageFormatOverviewSection
          eyebrow={c.formatOverview.eyebrow}
          title={c.formatOverview.title}
          subtitle={c.formatOverview.subtitle}
          stats={c.formatOverview.stats}
          tone="white"
        />
      </FadeIn>

      <FadeIn>
        <StageDifferentSection
          eyebrow={c.different.eyebrow}
          title={c.different.title}
          subtitle={c.different.subtitle}
          cards={c.different.cards}
          tone="indigo"
        />
      </FadeIn>

      <FadeIn>
        <StageSessionFlowSection
          eyebrow={c.sessionFlow.eyebrow}
          title={c.sessionFlow.title}
          subtitle={c.sessionFlow.subtitle}
          phases={c.sessionFlow.phases}
          closing={c.sessionFlow.closing}
          tone="purple"
        />
      </FadeIn>

      <FadeIn>
        <StageAxesSection
          eyebrow={c.program.eyebrow}
          title={c.program.title}
          subtitle={c.program.subtitle}
          note={c.program.note}
          axes={c.program.axes}
          tone="dark"
        />
      </FadeIn>

      <FadeIn>
        <StageDeliverablesSection
          eyebrow={c.deliverables.eyebrow}
          title={c.deliverables.title}
          subtitle={c.deliverables.subtitle}
          groups={c.deliverables.groups}
          tone="alt"
        />
      </FadeIn>

      <FadeIn>
        <ComparisonSection
          eyebrow={c.beforeAfter.eyebrow}
          title={c.beforeAfter.title}
          subtitle={c.beforeAfter.subtitle}
          rows={c.beforeAfter.rows.map((row) => ({
            problem: row.before,
            consequence: row.after,
          }))}
          problemLabel="Avant le stage"
          consequenceLabel="Après le stage"
          tone="indigo"
          align="center"
        />
      </FadeIn>

      <FadeIn>
        <SmallGroupSection
          eyebrow={c.smallGroup.eyebrow}
          title={c.smallGroup.title}
          points={c.smallGroup.points}
          closing={c.smallGroup.closing}
          tone="pink"
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
          tone="warm"
        />
      </FadeIn>

      <FadeIn>
        <FAQSection tone="purple" title={c.faq.title} items={c.faq.items} />
      </FadeIn>

      <FadeIn>
        <StageContactSection
          title={c.contact.title}
          subtitle={c.contact.subtitle}
          ctaPrimary={c.contact.ctaPrimary}
          ctaSecondary={c.contact.ctaSecondary}
          footnote={c.contact.footnote}
          tone="white"
        />
      </FadeIn>
    </>
  );
}
