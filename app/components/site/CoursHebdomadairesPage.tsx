"use client";

import FadeIn from "@/app/components/site/FadeIn";
import OfferSplitHero from "@/app/components/site/OfferSplitHero";
import { firstSentence } from "@/app/components/site/HeroProposals";
import { AgendaProposalTourneePlus } from "@/app/components/site/CoursAgendaProposals";
import { WeeklyWhyCardsSection } from "@/app/components/site/CoursHebdomadairesNewSections";
import InscriptionRendezVous from "@/app/components/site/InscriptionRendezVous";
import { coursHebdomadairesContent } from "@/app/data/content/cours-hebdomadaires";

export default function CoursHebdomadairesPage() {
  const c = coursHebdomadairesContent;

  return (
    <div className="bg-[#FAF8F5]">
      <FadeIn eager>
        <OfferSplitHero
          eyebrow="Cours collectifs"
          title={c.hero.title}
          highlightWord={c.hero.highlightWord}
          lead={firstSentence(c.hero.subtitle)}
          keywords={c.hero.keywords}
          ctaPrimary={c.hero.ctaPrimary}
          ctaSecondary={c.hero.ctaSecondary}
          accent="blue"
          titleMaxCh={36}
        />
      </FadeIn>

      <FadeIn>
        <AgendaProposalTourneePlus
          id={c.agenda.id}
          title={c.agenda.title}
          subtitle={c.agenda.subtitle}
          highlight={c.agenda.highlight}
          rowLabels={c.agenda.rowLabels}
          weeks={c.agenda.weeks}
        />
      </FadeIn>

      <FadeIn>
        <WeeklyWhyCardsSection
          title={c.whyWeekly.title}
          subtitle={c.whyWeekly.subtitle}
          cards={c.whyWeekly.cards}
        />
      </FadeIn>

      <FadeIn>
        <InscriptionRendezVous />
      </FadeIn>
    </div>
  );
}
