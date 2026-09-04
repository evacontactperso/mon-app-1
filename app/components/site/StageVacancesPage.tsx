"use client";

import FadeIn from "@/app/components/site/FadeIn";
import OfferSplitHero from "@/app/components/site/OfferSplitHero";
import {
  StageProgramTableSection,
  StageFormatCardsSection,
  StageGainsSection,
} from "@/app/components/site/StageVacancesNewSections";
import InscriptionStage from "@/app/components/site/InscriptionStage";
import { stageVacancesContent } from "@/app/data/content/stage-vacances";

export default function StageVacancesPage() {
  const c = stageVacancesContent;

  return (
    <div className="overflow-x-hidden bg-[#FAF8F5]">
      <FadeIn eager>
        <OfferSplitHero
          eyebrow="Stages de vacances"
          title={c.hero.title}
          highlightWord="Une semaine"
          lead={c.hero.subtitle}
          ctaPrimary={c.hero.ctaPrimary}
          ctaSecondary={c.hero.ctaSecondary}
          accent="yellow"
          titleMaxCh={32}
        />
      </FadeIn>

      <FadeIn>
        <StageProgramTableSection
          id={c.program.id}
          title={c.program.title}
          subtitle={c.program.subtitle}
          rowLabels={c.program.rowLabels}
          days={c.program.days}
        />
      </FadeIn>

      <FadeIn>
        <StageFormatCardsSection
          title={c.format.title}
          subtitle={c.format.subtitle}
          cards={c.format.cards}
        />
      </FadeIn>

      <FadeIn>
        <StageGainsSection
          title={c.gains.title}
          subtitle={c.gains.subtitle}
          rows={c.gains.rows}
        />
      </FadeIn>

      <InscriptionStage />
    </div>
  );
}
