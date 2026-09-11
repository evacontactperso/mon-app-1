"use client";

import FadeIn from "@/app/components/site/FadeIn";
import AccompagnementHero from "@/app/components/site/AccompagnementHero";
import BilanDiagnosticMixSection from "@/app/components/site/BilanDiagnosticProposals";
import { SolutionsProposalTickets } from "@/app/components/site/CoachingSolutionsProposals";
import {
  CoachingFollowUpSection,
  CoachingPacksSection,
} from "@/app/components/site/AccompagnementNewSections";
import {
  sectionColorAt,
  sectionHeaderAccent,
} from "@/app/components/site/formation/FormationDesign";
import { accompagnementPersonnaliseContent } from "@/app/data/content/accompagnement-personnalise";

const PAGE = "accompagnement" as const;
const accentAt = (sectionIndex: number) =>
  sectionHeaderAccent(sectionColorAt(PAGE, sectionIndex));

export default function AccompagnementPersonnalisePage() {
  const c = accompagnementPersonnaliseContent;

  return (
    <div className="bg-[#FAF8F5]">
      <FadeIn eager>
        <AccompagnementHero
          title={c.hero.title}
          highlightWord={c.hero.highlightWord}
          lead="Votre enfant ne manque pas forcément de capacités."
          keywords={c.hero.keywords}
          ctaPrimary={c.hero.ctaPrimary}
          ctaSecondary={c.hero.ctaSecondary}
        />
      </FadeIn>

      <FadeIn>
        <BilanDiagnosticMixSection
          title={c.bilan.title}
          subtitle={c.bilan.subtitle}
          columnLabels={c.bilan.columnLabels}
          rows={c.bilan.rows}
          accent={accentAt(1)}
        />
      </FadeIn>

      <FadeIn>
        <SolutionsProposalTickets
          title={c.solutions.title}
          subtitle={c.solutions.subtitle}
          problemLabel={c.solutions.problemLabel}
          solutionLabel={c.solutions.solutionLabel}
          rows={c.solutions.rows}
          accent="warm"
        />
      </FadeIn>

      <FadeIn>
        <CoachingFollowUpSection
          title={c.followUp.title}
          subtitle={c.followUp.subtitle}
          cards={c.followUp.cards}
          accent={accentAt(3)}
        />
      </FadeIn>

      <FadeIn>
        <CoachingPacksSection
          id={c.pricing.id}
          title={c.pricing.title}
          subtitle={c.pricing.subtitle}
          packs={c.pricing.packs}
          accent={accentAt(4)}
        />
      </FadeIn>
    </div>
  );
}
