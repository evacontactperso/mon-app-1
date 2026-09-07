"use client";

import FadeIn from "@/app/components/site/FadeIn";
import CoursHebdomadairesCopieHero from "@/app/components/site/CoursHebdomadairesCopieHero";
import ProblemCards from "@/app/components/site/ProblemCards";
import OutcomeGrid from "@/app/components/site/OutcomeGrid";
import FAQSection from "@/app/components/site/FAQSection";
import CTASection from "@/app/components/site/CTASection";
import SessionsCatalogSection from "@/app/components/site/SessionsCatalogSection";
import {
  WeeklyPrincipleSection,
  WeeklyFormatCompareSection,
  SessionTimelineSection,
  SessionPathsSection,
  GroupBenefitsSection,
  SessionOutcomesSection,
  NotForSection,
  WeeklyPacksSection,
  PackExamplesSection,
} from "@/app/components/site/CoursHebdomadairesCopieSections";
import { coursHebdomadairesCopieContent } from "@/app/data/content/cours-hebdomadaires-copie";

export default function CoursHebdomadairesCopiePage() {
  const c = coursHebdomadairesCopieContent;

  return (
    <div className="bg-[#FAF8F5]">
      <FadeIn>
        <CoursHebdomadairesCopieHero
          badge={c.hero.badge}
          highlightWord={c.hero.highlightWord}
          title={c.hero.title}
          subtitle={c.hero.subtitle}
          shortText={c.hero.shortText}
          ctaPrimary={c.hero.ctaPrimary}
          ctaSecondary={c.hero.ctaSecondary}
          proofs={c.hero.proofs}
          calendarSessions={c.hero.calendarSessions}
        />
      </FadeIn>

      <FadeIn>
        <WeeklyPrincipleSection
          eyebrow={c.principle.eyebrow}
          title={c.principle.title}
          steps={c.principle.steps}
          closing={c.principle.closing}
        />
      </FadeIn>

      <FadeIn>
        <WeeklyFormatCompareSection
          sectionIndex={2}
          eyebrow={c.different.eyebrow}
          title={c.different.title}
          cards={c.different.cards}
          callout={c.different.callout}
        />
      </FadeIn>

      <FadeIn>
        <SessionTimelineSection
          sectionIndex={3}
          eyebrow={c.sessionFlow.eyebrow}
          title={c.sessionFlow.title}
          phases={c.sessionFlow.phases}
          closing={c.sessionFlow.closing}
        />
      </FadeIn>

      <FadeIn>
        <ProblemCards
          page="cours"
          sectionIndex={4}
          highlight="supports"
          eyebrow={c.bringToSession.eyebrow}
          title={c.bringToSession.title}
          cards={c.bringToSession.cards}
          closing={c.bringToSession.closing}
          variant="icon"
        />
      </FadeIn>

      <FadeIn>
        <SessionsCatalogSection
          id={c.sessions.id}
          eyebrow={c.sessions.eyebrow}
          title={c.sessions.title}
          items={c.sessions.items}
        />
      </FadeIn>

      <FadeIn>
        <SessionPathsSection
          eyebrow={c.sessionPaths.eyebrow}
          title={c.sessionPaths.title}
          items={c.sessionPaths.items}
          cta={c.sessionPaths.cta}
        />
      </FadeIn>

      <FadeIn>
        <GroupBenefitsSection
          eyebrow={c.groupBenefits.eyebrow}
          title={c.groupBenefits.title}
          cards={c.groupBenefits.cards}
          closing={c.groupBenefits.closing}
        />
      </FadeIn>

      <FadeIn>
        <SessionOutcomesSection
          eyebrow={c.sessionOutcomes.eyebrow}
          title={c.sessionOutcomes.title}
          items={c.sessionOutcomes.items}
          closing={c.sessionOutcomes.closing}
        />
      </FadeIn>

      <FadeIn>
        <OutcomeGrid
          page="cours"
          sectionIndex={9}
          highlight="élèves"
          eyebrow={c.idealFor.eyebrow}
          title={c.idealFor.title}
          cards={c.idealFor.cards}
          variant="parent"
          align="center"
        />
      </FadeIn>

      <FadeIn>
        <NotForSection
          sectionIndex={10}
          eyebrow={c.notFor.eyebrow}
          title={c.notFor.title}
          items={c.notFor.items}
          closing={c.notFor.closing}
        />
      </FadeIn>

      <FadeIn>
        <WeeklyPacksSection
          id={c.packs.id}
          eyebrow={c.packs.eyebrow}
          title={c.packs.title}
          subtitle={c.packs.subtitle}
          items={c.packs.items}
          callout={c.packs.callout}
        />
      </FadeIn>

      <FadeIn>
        <PackExamplesSection
          eyebrow={c.packExamples.eyebrow}
          title={c.packExamples.title}
          items={c.packExamples.items}
        />
      </FadeIn>

      <FadeIn>
        <FAQSection page="cours" sectionIndex={13} title={c.faq.title} items={c.faq.items} />
      </FadeIn>

      <FadeIn>
        <CTASection
          page="cours"
          sectionIndex={14}
          highlight="méthode"
          title={c.finalCta.title}
          subtitle={c.finalCta.subtitle}
          text={c.finalCta.text}
          closing={c.finalCta.closing}
          buttons={c.finalCta.buttons}
        />
      </FadeIn>
    </div>
  );
}
