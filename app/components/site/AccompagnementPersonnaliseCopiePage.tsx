"use client";

import FadeIn from "@/app/components/site/FadeIn";
import AccompagnementCopieHero from "@/app/components/site/AccompagnementCopieHero";
import ProblemCards from "@/app/components/site/ProblemCards";
import FAQSection from "@/app/components/site/FAQSection";
import CTASection from "@/app/components/site/CTASection";
import {
  WeeklyFormatCompareSection,
  SessionTimelineSection,
  NotForSection,
} from "@/app/components/site/CoursHebdomadairesSections";
import { StageDeliverablesSection, StageFitSection } from "@/app/components/site/StageVacancesSections";
import {
  BilanHighlightSection,
  AccompagnementExamplesSection,
  AccompagnementPacksSection,
  AccompagnementPackCompareSection,
  StudentBringsSection,
} from "@/app/components/site/AccompagnementCopieSections";
import { accompagnementPersonnaliseCopieContent } from "@/app/data/content/accompagnement-personnalise-copie";

export default function AccompagnementPersonnaliseCopiePage() {
  const c = accompagnementPersonnaliseCopieContent;

  return (
    <div className="overflow-x-hidden bg-[#FAF8F5]">
      <FadeIn>
        <AccompagnementCopieHero
          badge={c.hero.badge}
          title={c.hero.title}
          subtitle={c.hero.subtitle}
          shortText={c.hero.shortText}
          bilanHighlight={c.hero.bilanHighlight}
          badges={c.hero.badges}
          ctaPrimary={c.hero.ctaPrimary}
          ctaSecondary={c.hero.ctaSecondary}
          visualItems={c.hero.visualItems}
        />
      </FadeIn>

      <FadeIn>
        <WeeklyFormatCompareSection
          page="accompagnement"
          sectionIndex={1}
          highlight="adapté"
          eyebrow={c.whyPersonalized.eyebrow}
          title={c.whyPersonalized.title}
          subtitle={c.whyPersonalized.subtitle}
          cards={c.whyPersonalized.cards}
          callout={c.whyPersonalized.callout}
        />
      </FadeIn>

      <FadeIn>
        <BilanHighlightSection
          eyebrow={c.bilan.eyebrow}
          title={c.bilan.title}
          text={c.bilan.text}
          duringTitle={c.bilan.duringTitle}
          duringItems={c.bilan.duringItems}
          afterTitle={c.bilan.afterTitle}
          afterItems={c.bilan.afterItems}
          closing={c.bilan.closing}
          cta={c.bilan.cta}
        />
      </FadeIn>

      <FadeIn>
        <SessionTimelineSection
          page="accompagnement"
          sectionIndex={3}
          highlight="semaine"
          eyebrow={c.sessionFlow.eyebrow}
          title={c.sessionFlow.title}
          phases={c.sessionFlow.phases}
          closing={c.sessionFlow.closing}
        />
      </FadeIn>

      <FadeIn>
        <ProblemCards
          page="accompagnement"
          sectionIndex={4}
          highlight="séances"
          eyebrow={c.sessionTopics.eyebrow}
          title={c.sessionTopics.title}
          cards={c.sessionTopics.cards}
          variant="icon"
        />
      </FadeIn>

      <FadeIn>
        <AccompagnementExamplesSection
          eyebrow={c.examples.eyebrow}
          title={c.examples.title}
          items={c.examples.items}
        />
      </FadeIn>

      <FadeIn>
        <StudentBringsSection
          eyebrow={c.studentBrings.eyebrow}
          title={c.studentBrings.title}
          subtitle={c.studentBrings.subtitle}
          items={c.studentBrings.items}
          callout={c.studentBrings.callout}
        />
      </FadeIn>

      <FadeIn>
        <StageDeliverablesSection
          eyebrow={c.deliverables.eyebrow}
          title={c.deliverables.title}
          items={c.deliverables.items}
          closing={c.deliverables.closing}
        />
      </FadeIn>

      <FadeIn>
        <StageFitSection
          eyebrow={c.idealFor.eyebrow}
          title={c.idealFor.title}
          criteria={c.idealFor.criteria}
        />
      </FadeIn>

      <FadeIn>
        <NotForSection
          page="accompagnement"
          sectionIndex={9}
          highlight="nécessaire"
          eyebrow={c.notFor.eyebrow}
          title={c.notFor.title}
          items={c.notFor.items}
          closing={c.notFor.closing}
        />
      </FadeIn>

      <FadeIn>
        <AccompagnementPacksSection
          id={c.pricing.id}
          eyebrow={c.pricing.eyebrow}
          title={c.pricing.title}
          subtitle={c.pricing.subtitle}
          plans={c.pricing.plans}
          bilanCallout={c.pricing.bilanCallout}
        />
      </FadeIn>

      <FadeIn>
        <AccompagnementPackCompareSection
          eyebrow={c.packChoice.eyebrow}
          title={c.packChoice.title}
          options={c.packChoice.options}
          closing={c.packChoice.closing}
        />
      </FadeIn>

      <FadeIn>
        <FAQSection
          page="accompagnement"
          sectionIndex={12}
          title={c.faq.title}
          items={c.faq.items}
        />
      </FadeIn>

      <FadeIn>
        <CTASection
          page="accompagnement"
          sectionIndex={13}
          highlight="bloque"
          title={c.finalCta.title}
          text={c.finalCta.text}
          closing={c.finalCta.closing}
          buttons={c.finalCta.buttons}
        />
      </FadeIn>
    </div>
  );
}
