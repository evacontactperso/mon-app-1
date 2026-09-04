"use client";

import FadeIn from "@/app/components/site/FadeIn";
import HeroSection from "@/app/components/site/HeroSection";
import SectionHeader from "@/app/components/site/SectionHeader";
import PageSection from "@/app/components/site/PageSection";
import PillarCards from "@/app/components/site/PillarCards";
import OutcomeGrid from "@/app/components/site/OutcomeGrid";
import MethodStepCard from "@/app/components/site/MethodStepCard";
import CTASection from "@/app/components/site/CTASection";
import { pastelSoft } from "@/app/components/site/tokens";
import { getMethodeContent } from "@/app/data/i18n/methode";
import { useLocale } from "@/app/lib/locale";

export default function MethodePage() {
  const { locale } = useLocale();
  const c = getMethodeContent(locale);

  return (
    <>
      <HeroSection
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        highlightWord={c.hero.highlightWord}
        tags={c.hero.tags}
        fullHeight
      />

      <FadeIn>
        <PageSection
          tone="dark"
          overlay={
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(129,52,175,0.18)_0%,_transparent_50%)]" />
          }
          innerClassName="mx-auto max-w-3xl px-4 md:px-6 text-center"
        >
          <SectionHeader
            eyebrow={c.principle.eyebrow}
            title={c.principle.title}
            subtitle={c.principle.text}
            dark
            align="center"
            accent="purple"
          />
        </PageSection>
      </FadeIn>

      <FadeIn>
        <PillarCards
          tone="alt"
          eyebrow={c.pillars.eyebrow}
          title={c.pillars.title}
          subtitle={c.pillars.subtitle}
          pillars={c.pillars.items.map((p) => ({ ...p, color: undefined }))}
        />
      </FadeIn>

      <FadeIn>
        <OutcomeGrid
          tone="indigo"
          eyebrow={c.foundations.eyebrow}
          title={c.foundations.title}
          subtitle={c.foundations.subtitle}
          cards={c.foundations.items}
        />
      </FadeIn>

      <FadeIn>
        <PageSection tone="warm">
          <SectionHeader
            eyebrow={c.example.eyebrow}
            title={c.example.title}
            align="center"
            accent="warm"
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <article
              className={`relative overflow-hidden rounded-[28px] border p-8 shadow-[0_16px_50px_rgba(245,133,41,0.12)] ${pastelSoft.orange}`}
            >
              <span
                className="pointer-events-none absolute right-4 top-4 text-6xl font-extrabold font-heading text-[#f58529]/15"
                aria-hidden
              >
                ✕
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-[#f58529]">
                {c.example.beforeLabel}
              </p>
              <h3 className="mt-2 text-xl font-bold text-[#0B0B0B]">{c.example.before.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#515154]">{c.example.before.text}</p>
            </article>
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-widest text-[#8134af]">
                {c.example.afterLabel}
              </p>
              <div className="relative flex flex-col gap-3 pl-4">
                <div
                  className="absolute bottom-2 left-0 top-2 w-px bg-gradient-to-b from-[#8134af] to-[#6366F1]"
                  aria-hidden
                />
                {c.example.after.steps.map((step, i) => (
                  <MethodStepCard key={step.title} step={i + 1} title={step.title} text={step.text} />
                ))}
              </div>
            </div>
          </div>
        </PageSection>
      </FadeIn>

      <FadeIn>
        <OutcomeGrid
          tone="purple"
          eyebrow={c.changes.eyebrow}
          title={c.changes.title}
          subtitle={c.changes.subtitle}
          cards={c.changes.cards}
        />
      </FadeIn>

      <FadeIn>
        <CTASection
          tone="white"
          title={c.cta.title}
          text={c.cta.text}
          buttons={[
            { ...c.cta.buttons[0], variant: "school" },
            { ...c.cta.buttons[1], variant: "parent" },
          ]}
        />
      </FadeIn>
    </>
  );
}
