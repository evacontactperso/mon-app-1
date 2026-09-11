import FadeIn from "@/app/components/site/FadeIn";
import MethodologieHero from "@/app/components/site/MethodologieHero";
import { GapProposalArrowBridge } from "@/app/components/site/GapProposals";
import { CoachingFollowUpSection } from "@/app/components/site/AccompagnementNewSections";
import {
  MethodologieManifestoSection,
  MethodologiePiliersCercleSection,
  MethodologieFormatsSection,
} from "@/app/components/site/MethodologieSections";
import {
  sectionColorAt,
  sectionHeaderAccent,
} from "@/app/components/site/formation/FormationDesign";
import { methodologieContent } from "@/app/data/content/methodologie";

const PAGE = "methodologie" as const;
const accentAt = (sectionIndex: number) =>
  sectionHeaderAccent(sectionColorAt(PAGE, sectionIndex));

export default function MethodologiePage() {
  const c = methodologieContent;

  return (
    <div className="bg-[#FAF8F5]">
      <FadeIn eager>
        <MethodologieHero
          title={c.hero.title}
          highlightWord={c.hero.highlightWord}
          lead={c.hero.subtitle}
          keywords={c.hero.keywords}
          ctaPrimary={c.hero.ctaPrimary}
          ctaSecondary={c.hero.ctaSecondary}
        />
      </FadeIn>

      <FadeIn>
        <MethodologieManifestoSection
          page={PAGE}
          sectionIndex={1}
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
          accent={accentAt(2)}
        />
      </FadeIn>

      <FadeIn>
        <CoachingFollowUpSection
          title={c.consequences.title}
          subtitle={c.consequences.subtitle}
          cards={c.consequences.cards}
          highlight="difficultés"
          accent="pink"
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
          highlight="offres"
          page={PAGE}
          sectionIndex={5}
        />
      </FadeIn>
    </div>
  );
}
