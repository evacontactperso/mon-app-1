"use client";

import FadeIn from "@/app/components/site/FadeIn";
import {
  CoachingSessionsGridSection,
  CoachingInscriptionSection,
} from "@/app/components/site/AccompagnementNewSections";
import { accompagnementPersonnaliseContent } from "@/app/data/content/accompagnement-personnalise";

export default function AutresPage() {
  const c = accompagnementPersonnaliseContent;

  return (
    <div className="overflow-x-clip bg-[#FAF8F5]">
      <FadeIn>
        <CoachingSessionsGridSection
          title={c.sessions.title}
          subtitle={c.sessions.subtitle}
          cards={c.sessions.cards}
        />
      </FadeIn>

      <FadeIn>
        <CoachingInscriptionSection
          id={c.inscription.id}
          title={c.inscription.title}
          subtitle={c.inscription.subtitle}
          ctaPrimary={c.inscription.ctaPrimary}
          ctaSecondary={c.inscription.ctaSecondary}
          footnote={c.inscription.footnote}
        />
      </FadeIn>
    </div>
  );
}
