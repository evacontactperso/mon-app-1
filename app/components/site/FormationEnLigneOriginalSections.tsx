import Button from "./Button";
import PageSection, { type SectionTone } from "./PageSection";
import SectionHeader from "./SectionHeader";

type StepCard = { icon: string; title: string; text: string };

export function FormationApplySection({
  eyebrow,
  title,
  subtitle,
  steps,
  closing,
  tone = "white",
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  steps: StepCard[];
  closing?: string;
  tone?: SectionTone;
}) {
  return (
    <PageSection
      tone={tone}
      overlay={
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#6366F1] via-[#EE6B6E] to-[#8134af]" />
      }
    >
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align="center" accent="indigo" />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {steps.map((step, i) => (
          <article
            key={step.title}
            className="group rounded-[28px] border border-slate-200/60 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fde8e8] to-[#EEF2FF] text-3xl transition-transform group-hover:scale-110">
              {step.icon}
            </span>
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#6366F1]">
              Étape {i + 1}
            </p>
            <h3 className="mt-2 text-lg font-bold text-[#0B0B0B]">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#515154]">{step.text}</p>
          </article>
        ))}
      </div>
      {closing && (
        <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-bold text-[#0B0B0B]">
          {closing}
        </p>
      )}
    </PageSection>
  );
}

type LessonFlowStep = { icon: string; title: string; text: string };

export function FormationLessonSection({
  eyebrow,
  title,
  subtitle,
  flow,
  example,
  tone = "alt",
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  flow: LessonFlowStep[];
  example?: { title: string; outcomes: string[] };
  tone?: SectionTone;
}) {
  return (
    <PageSection tone={tone}>
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align="center" accent="purple" />
      <div className="mt-14">
        <div className="relative">
          <div
            className="absolute left-5 top-8 hidden h-[calc(100%-4rem)] w-0.5 bg-gradient-to-b from-[#6366F1] via-[#EE6B6E] to-[#8134af] md:block"
            aria-hidden
          />
          <ol className="space-y-4 md:grid md:grid-cols-5 md:gap-3 md:space-y-0">
            {flow.map((item, i) => (
              <li key={item.title} className="relative md:text-center">
                <div className="flex items-start gap-4 md:flex-col md:items-center">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#6366F1] to-[#8134af] text-lg shadow-md md:mx-auto">
                    {item.icon}
                  </span>
                  <div className="flex-1 rounded-2xl border border-slate-200/60 bg-white p-4 shadow-sm md:mt-4">
                    <p className="font-bold text-[#0B0B0B]">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#515154]">{item.text}</p>
                  </div>
                </div>
                {i < flow.length - 1 && (
                  <span className="ml-5 mt-2 block text-[#6366F1] md:hidden" aria-hidden>
                    ↓
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>

        {example && (
          <div className="mt-12 rounded-[28px] border border-[#8134af]/20 bg-gradient-to-br from-[#f3e5f5]/40 via-white to-[#EEF2FF]/30 p-6 md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="lg:max-w-md">
                <p className="text-xs font-bold uppercase tracking-widest text-[#8134af]">
                  Exemple concret
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#0B0B0B]">{example.title}</h3>
              </div>
              <div className="flex-1 rounded-2xl border border-white/80 bg-white/90 p-5">
                <p className="text-sm font-semibold text-[#515154]">
                  À la fin de la leçon, l&apos;élève sait :
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {example.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2 text-sm text-[#0B0B0B]">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EEF2FF] text-xs text-[#6366F1]">
                        ✓
                      </span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageSection>
  );
}

type ModuleItem = {
  number: number;
  question: string;
  title: string;
  problem: string;
  learns: string[];
  supports: string[];
};

export function FormationModulesSection({
  id,
  eyebrow,
  title,
  subtitle,
  items,
  tone = "dark",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: ModuleItem[];
  tone?: SectionTone;
}) {
  return (
    <PageSection
      id={id}
      tone={tone}
      overlay={
        <>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.15)_0%,_transparent_50%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(238,107,110,0.1)_0%,_transparent_50%)]" />
        </>
      }
    >
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        dark
        align="center"
        accent="purple"
      />
      <div className="relative mt-14">
        <div
          className="absolute bottom-4 left-6 top-4 hidden w-0.5 bg-gradient-to-b from-[#6366F1] via-[#EE6B6E] to-[#8134af] md:block"
          aria-hidden
        />
        <div className="space-y-6">
          {items.map((mod) => (
            <article
              key={mod.number}
              className="group relative rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 md:pl-12"
            >
              <div className="absolute -left-0.5 top-8 hidden h-3 w-3 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8134af] ring-4 ring-[#0B0B0B] md:block" />
              <div className="flex flex-wrap items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#8134af] text-lg font-bold text-white shadow-lg">
                  {mod.number}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white/60">{mod.question}</p>
                  <h3 className="mt-1 text-xl font-bold text-white">{mod.title}</h3>
                  <p className="mt-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm italic text-white/70">
                    {mod.problem}
                  </p>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border-2 border-[#EE6B6E]/40 bg-white/15 p-5 shadow-lg">
                      <p className="text-sm font-bold uppercase tracking-wide text-white">
                        L&apos;élève apprend à
                      </p>
                      <ul className="mt-4 space-y-2">
                        {mod.learns.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-white">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EE6B6E]/30 text-xs text-white">
                              →
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border-2 border-[#6366F1]/40 bg-white/15 p-5 shadow-lg">
                      <p className="text-sm font-bold uppercase tracking-wide text-white">
                        Supports inclus
                      </p>
                      <ul className="mt-4 space-y-2">
                        {mod.supports.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-white">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6366F1]/30 text-xs text-white">
                              ✓
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageSection>
  );
}

type ScenarioMoment = { period: string; icon: string; text: string; module: string };

export function FormationScenariosSection({
  eyebrow,
  title,
  subtitle,
  moments,
  included,
  tone = "pink",
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  moments: ScenarioMoment[];
  included?: { icon: string; label: string }[];
  tone?: SectionTone;
}) {
  return (
    <PageSection tone={tone}>
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align="center" accent="pink" />
      <div className="relative mt-14">
        <div
          className="absolute left-6 top-0 hidden h-full w-0.5 bg-gradient-to-b from-[#EE6B6E] via-[#8134af] to-[#6366F1] md:block"
          aria-hidden
        />
        <ol className="space-y-6">
          {moments.map((moment, i) => (
            <li key={moment.period} className="relative md:pl-14">
              <span
                className="absolute left-3 top-6 hidden h-6 w-6 rounded-full bg-gradient-to-br from-[#EE6B6E] to-[#8134af] ring-4 ring-[#fde8e8] md:block"
                aria-hidden
              />
              <article className="rounded-[28px] border border-[#EE6B6E]/15 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md md:flex md:items-center md:gap-6">
                <div className="flex items-center gap-4 md:w-52 md:shrink-0 md:flex-col md:items-start md:gap-2">
                  <span className="text-3xl">{moment.icon}</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#EE6B6E]">
                      Moment {i + 1}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-[#0B0B0B]">{moment.period}</h3>
                  </div>
                </div>
                <div className="mt-4 flex-1 md:mt-0">
                  <p className="text-sm leading-relaxed text-[#515154]">{moment.text}</p>
                  <p className="mt-3 inline-flex rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#6366F1]">
                    {moment.module}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>

      {included && included.length > 0 && (
        <div className="mt-12 rounded-[28px] border border-slate-200/60 bg-white p-6 shadow-sm md:p-8">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-[#515154]">
            Tout est inclus dans la formation
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {included.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2 rounded-full border border-slate-200/60 bg-[#F9F9FB] px-4 py-2 text-sm font-medium text-[#0B0B0B]"
              >
                <span>{item.icon}</span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </PageSection>
  );
}

type PricingPlan = {
  title: string;
  price: string;
  tagline: string;
  description: string;
  includes: string[];
  includesGrouped?: string[];
  idealFor: string;
  cta: { label: string; href: string };
  badge?: string;
};

export function FormationPricingSection({
  id,
  eyebrow,
  title,
  subtitle,
  plans,
  diagnostic,
  tone = "alt",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  plans: PricingPlan[];
  diagnostic?: { title: string; text: string; cta: { label: string; href: string } };
  tone?: SectionTone;
}) {
  return (
    <PageSection id={id} tone={tone}>
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align="center" accent="pink" />
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {plans.map((plan) => (
          <article
            key={plan.title}
            className={`relative flex flex-col rounded-[28px] border bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)] ${
              plan.badge ? "border-[#EE6B6E]/30 ring-2 ring-[#EE6B6E]/10" : "border-slate-200/60"
            }`}
          >
            {plan.badge && (
              <span className="absolute -top-3 right-6 rounded-full bg-[#EE6B6E] px-3 py-1 text-xs font-bold text-white">
                {plan.badge}
              </span>
            )}
            <p className="text-sm font-bold uppercase tracking-widest text-[#6366F1]">{plan.tagline}</p>
            <h3 className="mt-2 text-2xl font-bold text-[#0B0B0B]">{plan.title}</h3>
            <p className="mt-3 text-4xl font-extrabold font-heading text-[#0B0B0B]">
              {plan.price}
              <span className="ml-1 text-base font-normal text-[#515154]">· accès annuel</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#515154]">{plan.description}</p>

            <div className="mt-6 rounded-2xl border border-[#EEF2FF] bg-[#F9F9FB] p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#515154]">Inclus</p>
              <ul className="mt-3 space-y-2">
                {(plan.includesGrouped ?? plan.includes).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#0B0B0B]">
                    <span className="mt-0.5 text-[#EE6B6E]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-5 text-sm font-semibold text-[#6366F1]">{plan.idealFor}</p>

            <div className="mt-8">
              <Button href={plan.cta.href} variant={plan.badge ? "parent" : "parentOutline"}>
                {plan.cta.label}
              </Button>
            </div>
          </article>
        ))}
      </div>

      {diagnostic && (
        <div className="mx-auto mt-10 max-w-2xl rounded-[28px] border border-[#6366F1]/20 bg-gradient-to-br from-[#EEF2FF]/60 to-white p-8 text-center">
          <h3 className="text-lg font-bold text-[#0B0B0B]">{diagnostic.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#515154]">{diagnostic.text}</p>
          <div className="mt-6">
            <Button href={diagnostic.cta.href} variant="parentOutline">
              {diagnostic.cta.label}
            </Button>
          </div>
        </div>
      )}
    </PageSection>
  );
}

export function FormationContactSection({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  footnote,
  tone = "white",
}: {
  title: string;
  subtitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  footnote?: string;
  tone?: SectionTone;
}) {
  return (
    <PageSection
      tone={tone}
      innerClassName="mx-auto max-w-3xl px-4 text-center md:px-6"
      overlay={
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(238,107,110,0.06)_0%,_transparent_70%)]" />
      }
    >
      <h2 className="text-3xl font-bold leading-tight text-[#0B0B0B] md:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-[#515154]">{subtitle}</p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button href={ctaPrimary.href} variant="parent">
          {ctaPrimary.label}
        </Button>
        <Button href={ctaSecondary.href} variant="parentOutline">
          {ctaSecondary.label}
        </Button>
      </div>
      {footnote && <p className="mt-6 text-sm text-[#515154]">{footnote}</p>}
    </PageSection>
  );
}
