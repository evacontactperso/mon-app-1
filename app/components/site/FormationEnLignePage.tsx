"use client";

import FadeIn from "@/app/components/site/FadeIn";
import FormationHero from "@/app/components/site/FormationHero";
import {
  FormationApplySection,
  FormationLessonSection,
  FormationModulesSection,
  FormationScenariosSection,
  FormationPricingSection,
  FormationFAQSection,
  FormationContactSection,
} from "@/app/components/site/FormationEnLigneSections";
import { formationEnLigneContent } from "@/app/data/content/formation-en-ligne";

export default function FormationEnLignePage() {
  const c = formationEnLigneContent;

  return (
    <div className="overflow-x-hidden bg-[#FAF8F5]">
      <FadeIn>
        <FormationHero
          badge={c.hero.badge}
          highlightWord={c.hero.highlightWord}
          title={c.hero.title}
          subtitle={c.hero.subtitle}
          ctaPrimary={c.hero.ctaPrimary}
          ctaSecondary={c.hero.ctaSecondary}
          modules={c.hero.modules}
          floatingTags={c.hero.floatingTags}
        />
      </FadeIn>

      <FadeIn>
        <FormationApplySection
          eyebrow={c.apply.eyebrow}
          title={c.apply.title}
          subtitle={c.apply.subtitle}
          steps={c.apply.steps}
        />
      </FadeIn>

      <FadeIn>
        <FormationLessonSection
          eyebrow={c.lesson.eyebrow}
          title={c.lesson.title}
          subtitle={c.lesson.subtitle}
          flow={c.lesson.flow}
        />
      </FadeIn>

      <FadeIn>
        <FormationModulesSection
          id={c.modules.id}
          eyebrow={c.modules.eyebrow}
          title={c.modules.title}
          subtitle={c.modules.subtitle}
          items={c.modules.items}
        />
      </FadeIn>

      <FadeIn>
        <FormationScenariosSection
          eyebrow={c.scenarios.eyebrow}
          title={c.scenarios.title}
          subtitle={c.scenarios.subtitle}
          moments={c.scenarios.moments}
        />
      </FadeIn>

      <FadeIn>
        <FormationPricingSection
          id={c.pricing.id}
          eyebrow={c.pricing.eyebrow}
          title={c.pricing.title}
          subtitle={c.pricing.subtitle}
          plans={c.pricing.plans}
        />
      </FadeIn>

      <FadeIn>
        <FormationFAQSection title={c.faq.title} items={c.faq.items} />
      </FadeIn>

      <FadeIn>
        <FormationContactSection
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
