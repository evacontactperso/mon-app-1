"use client";

import FadeIn from "@/app/components/site/FadeIn";
import MethodologieAncienHero from "@/app/components/site/MethodologieAncienHero";
import MethodologieAncienBandeau from "@/app/components/site/MethodologieAncienBandeau";
import ProblemCards from "@/app/components/site/ProblemCards";
import MirrorCardsSection from "@/app/components/site/MirrorCardsSection";
import DeclicSection from "@/app/components/site/DeclicSection";
import ComparisonSection from "@/app/components/site/ComparisonSection";
import MethodologieAncienHighlightSection from "@/app/components/site/MethodologieAncienHighlightSection";
import MethodStepsSection from "@/app/components/site/MethodStepsSection";
import OutcomeGrid from "@/app/components/site/OutcomeGrid";
import MethodologieAncienPromiseSection from "@/app/components/site/MethodologieAncienPromiseSection";
import FormatOfferGrid from "@/app/components/site/FormatOfferGrid";
import MethodologieAncienContactSection from "@/app/components/site/MethodologieAncienContactSection";
import { methodologieAncienContent } from "@/app/data/content/methodologie-ancien";

export default function MethodologieAncienPage() {
  const c = methodologieAncienContent;

  return (
    <>
      <FadeIn>
        <MethodologieAncienHero
          badge={c.hero.badge}
          highlightWord={c.hero.highlightWord}
          title={c.hero.title}
          subtitle={c.hero.subtitle}
          shortText={c.hero.shortText}
          ctaPrimary={c.hero.ctaPrimary}
          ctaSecondary={c.hero.ctaSecondary}
          floatingTags={c.hero.floatingTags}
          deskItems={c.hero.deskItems}
        />
      </FadeIn>

      <FadeIn>
        <MethodologieAncienBandeau
          eyebrow={c.bandeau.eyebrow}
          line1={c.bandeau.line1}
          line2={c.bandeau.line2}
          subtext={c.bandeau.subtext}
        />
      </FadeIn>

      <FadeIn>
        <ProblemCards
          eyebrow={c.homeSituations.eyebrow}
          title={c.homeSituations.title}
          cards={c.homeSituations.cards}
          variant="problem"
          layout="stack"
          tone="white"
          size="comfortable"
          stagger
        />
      </FadeIn>

      <FadeIn>
        <MirrorCardsSection
          eyebrow={c.mirror.eyebrow}
          title={c.mirror.title}
          parent={c.mirror.parent}
          student={c.mirror.student}
          transition={c.mirror.transition}
          tone="white"
          size="comfortable"
        />
      </FadeIn>

      <FadeIn>
        <DeclicSection
          eyebrow={c.declic.eyebrow}
          title={c.declic.title}
          questions={c.declic.questions}
          text={c.declic.text}
          tone="white"
          size="comfortable"
        />
      </FadeIn>

      <FadeIn>
        <ComparisonSection
          eyebrow={c.beforeAfter.eyebrow}
          title={c.beforeAfter.title}
          rows={c.beforeAfter.rows.map((row) => ({
            problem: row.before,
            consequence: row.after,
          }))}
          problemLabel={c.beforeAfter.problemLabel}
          consequenceLabel={c.beforeAfter.consequenceLabel}
          tone="white"
          size="comfortable"
          align="center"
        />
      </FadeIn>

      <FadeIn>
        <MethodologieAncienHighlightSection
          line1={c.highlight.line1}
          highlightWord={c.highlight.highlightWord}
          line2={c.highlight.line2}
        />
      </FadeIn>

      <FadeIn>
        <MethodStepsSection
          id="piliers"
          eyebrow={c.piliers.eyebrow}
          title={c.piliers.title}
          subtitle={c.piliers.subtitle}
          steps={c.piliers.steps}
          tone="dark"
          size="immersive"
        />
      </FadeIn>

      <FadeIn>
        <OutcomeGrid
          eyebrow={c.profiles.eyebrow}
          title={c.profiles.title}
          cards={c.profiles.cards}
          closing={c.profiles.reassurance}
          variant="parent"
          tone="alt"
          size="comfortable"
          align="center"
        />
      </FadeIn>

      <FadeIn>
        <MethodologieAncienPromiseSection
          eyebrow={c.promise.eyebrow}
          title={c.promise.title}
          text={c.promise.text}
          student={c.promise.student}
          parents={c.promise.parents}
          tone="white"
          size="comfortable"
        />
      </FadeIn>

      <FadeIn>
        <FormatOfferGrid
          id="offres"
          eyebrow={c.formats.eyebrow}
          title={c.formats.title}
          subtitle={c.formats.subtitle}
          cards={c.formats.cards}
          tone="white"
          size="comfortable"
          layout="row"
          wide
        />
      </FadeIn>

      <FadeIn>
        <MethodologieAncienContactSection
          title={c.contact.title}
          text={c.contact.text}
          cta={c.contact.cta}
          tone="alt"
          size="comfortable"
        />
      </FadeIn>
    </>
  );
}
