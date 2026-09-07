import FadeIn from "@/app/components/site/FadeIn";
import MethodologieHero from "@/app/components/site/MethodologieHero";
import { GapProposalArrowBridge } from "@/app/components/site/GapProposals";
import { CoachingFollowUpSection } from "@/app/components/site/AccompagnementNewSections";
import {
  MethodologieManifestoSection,
  MethodologiePiliersCercleSection,
  MethodologieFormatsSection,
} from "@/app/components/site/MethodologieSections";
import { methodologieContent } from "@/app/data/content/methodologie";

export default function MethodologiePage() {
  const c = methodologieContent;

  return (
    <div className="bg-[#FAF8F5]">
      <FadeIn eager>
        <MethodologieHero
          title={c.hero.title}
          highlightWord={c.hero.highlightWord}
          lead={c.hero.subtitle}
          ctaPrimary={c.hero.ctaPrimary}
          ctaSecondary={c.hero.ctaSecondary}
        />
      </FadeIn>

      <FadeIn>
        <MethodologieManifestoSection
          themeColor="indigo"
          highlightWord={c.manifesto.highlightWord}
          title={c.manifesto.title}
          paragraphs={c.manifesto.paragraphs}
        />
      </FadeIn>

      <FadeIn>
        <GapProposalArrowBridge
          title={c.gap.title}
          subtitle={c.gap.subtitle}
          demandLabel={c.gap.demandLabel}
          gapLabel={c.gap.gapLabel}
          rows={c.gap.rows}
        />
      </FadeIn>

      <FadeIn>
        <CoachingFollowUpSection
          title={c.consequences.title}
          subtitle={c.consequences.subtitle}
          cards={c.consequences.cards}
          highlight="difficultés"
          accent="warm"
        />
      </FadeIn>

      <FadeIn>
        <MethodologiePiliersCercleSection
          id="piliers"
          title={c.piliers.title}
          subtitle={c.piliers.subtitle}
          items={c.piliers.items}
        />
      </FadeIn>

      <FadeIn>
        <MethodologieFormatsSection
          id="formats"
          title={c.formats.title}
          subtitle={c.formats.subtitle}
          cards={c.formats.cards}
        />
      </FadeIn>
    </div>
  );
}
