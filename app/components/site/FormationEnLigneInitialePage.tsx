"use client";

import FadeIn from "@/app/components/site/FadeIn";
import FormationEnLigneInitialeHero from "@/app/components/site/FormationEnLigneInitialeHero";
import ProblemCards from "@/app/components/site/ProblemCards";
import OutcomeGrid from "@/app/components/site/OutcomeGrid";
import FAQSection from "@/app/components/site/FAQSection";
import CTASection from "@/app/components/site/CTASection";
import {
  FormationApplySection,
  FormationLessonSection,
  FormationModulesSection,
  FormationProfilesSection,
  FormationScenariosSection,
  FormationParentSection,
  FormationFormulaChoiceSection,
  FormationPricingSection,
  FormationBonusSection,
} from "@/app/components/site/FormationEnLigneInitialeSections";
import { formationEnLigneInitialeContent } from "@/app/data/content/formation-en-ligne-initiale";

export default function FormationEnLigneInitialePage() {
  const c = formationEnLigneInitialeContent;

  return (
    <>
      <FadeIn>
        <FormationEnLigneInitialeHero
          badge={c.hero.badge}
          highlightWord={c.hero.highlightWord}
          title={c.hero.title}
          subtitle={c.hero.subtitle}
          shortText={c.hero.shortText}
          ctaPrimary={c.hero.ctaPrimary}
          ctaSecondary={c.hero.ctaSecondary}
          proofs={c.hero.proofs}
          modules={c.hero.modules}
          floatingTags={c.hero.floatingTags}
        />
      </FadeIn>

      <FadeIn>
        <FormationApplySection
          eyebrow={c.apply.eyebrow}
          title={c.apply.title}
          text={c.apply.text}
          steps={c.apply.steps}
          closing={c.apply.closing}
          tone="white"
          size="comfortable"
        />
      </FadeIn>

      <FadeIn>
        <ProblemCards
          eyebrow={c.identification.eyebrow}
          title={c.identification.title}
          cards={c.identification.cards}
          closing={c.identification.closing}
          variant="icon"
          tone="warm"
          size="comfortable"
          stagger
        />
      </FadeIn>

      <FadeIn>
        <FormationLessonSection
          eyebrow={c.lesson.eyebrow}
          title={c.lesson.title}
          elements={c.lesson.elements}
          example={c.lesson.example}
          tone="alt"
          size="comfortable"
        />
      </FadeIn>

      <FadeIn>
        <FormationModulesSection
          id={c.modules.id}
          eyebrow={c.modules.eyebrow}
          title={c.modules.title}
          subtitle={c.modules.subtitle}
          items={c.modules.items}
          tone="dark"
          size="immersive"
        />
      </FadeIn>

      <FadeIn>
        <FormationProfilesSection
          eyebrow={c.profiles.eyebrow}
          title={c.profiles.title}
          items={c.profiles.items}
          cta={c.profiles.cta}
          tone="purple"
          size="comfortable"
        />
      </FadeIn>

      <FadeIn>
        <FormationScenariosSection
          eyebrow={c.scenarios.eyebrow}
          title={c.scenarios.title}
          cards={c.scenarios.cards}
          tone="pink"
          size="comfortable"
        />
      </FadeIn>

      <FadeIn>
        <FormationParentSection
          eyebrow={c.parentRole.eyebrow}
          title={c.parentRole.title}
          rows={c.parentRole.rows}
          questions={c.parentRole.questions}
          closing={c.parentRole.closing}
          tone="white"
          size="comfortable"
        />
      </FadeIn>

      <FadeIn>
        <OutcomeGrid
          eyebrow={c.included.eyebrow}
          title={c.included.title}
          cards={c.included.cards}
          variant="parent"
          tone="indigo"
          size="comfortable"
          align="center"
        />
      </FadeIn>

      <FadeIn>
        <FormationFormulaChoiceSection
          eyebrow={c.formulaChoice.eyebrow}
          title={c.formulaChoice.title}
          options={c.formulaChoice.options}
          tone="alt"
          size="comfortable"
        />
      </FadeIn>

      <FadeIn>
        <FormationPricingSection
          id={c.pricing.id}
          eyebrow={c.pricing.eyebrow}
          title={c.pricing.title}
          plans={c.pricing.plans}
          diagnostic={c.pricing.diagnostic}
          tone="white"
          size="comfortable"
        />
      </FadeIn>

      <FadeIn>
        <FormationBonusSection
          eyebrow={c.bonus.eyebrow}
          title={c.bonus.title}
          items={c.bonus.items}
          tone="warm"
          size="comfortable"
        />
      </FadeIn>

      <FadeIn>
        <FAQSection tone="purple" size="comfortable" title={c.faq.title} items={c.faq.items} />
      </FadeIn>

      <FadeIn>
        <CTASection
          tone="pink"
          size="comfortable"
          title={c.finalCta.title}
          text={c.finalCta.text}
          closing={c.finalCta.closing}
          buttons={c.finalCta.buttons}
        />
      </FadeIn>
    </>
  );
}
