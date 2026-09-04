import Button from "./Button";
import { SectionSubtitle } from "./SectionHeader";
import {
  ChevronDown,
  FormationEyebrow,
  FormationSectionTitle,
  TintedPageSection,
  SECTION_ACCENT_BG,
  SECTION_ACCENT_SOFT,
  cardSurfaceOnTintedBg,
  sectionColorAt,
  type SectionColor,
} from "./formation/FormationDesign";

const PAGE = "formation" as const;
const color = (sectionIndex: number) => sectionColorAt(PAGE, sectionIndex);

type StepCard = { icon: string; title: string; text: string };

export function FormationApplySection({
  eyebrow,
  title,
  subtitle,
  steps,
  closing,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  steps: StepCard[];
  closing?: string;
}) {
  return (
    <TintedPageSection pillColor={color(1)}>
      <div className="mx-auto max-w-3xl text-center">
          {eyebrow && <FormationEyebrow>{eyebrow}</FormationEyebrow>}
          <div className="mt-4">
            <FormationSectionTitle highlight="regarder" pill={color(1)}>
              {title}
            </FormationSectionTitle>
          </div>
          <SectionSubtitle align="center" className="mt-5">
            {subtitle}
          </SectionSubtitle>
        </div>

        <div className="mt-14 grid gap-8 overflow-visible pt-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <article
              key={step.title}
              className={`group relative overflow-visible p-6 pt-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${cardSurfaceOnTintedBg()}`}
            >
              <span className={`absolute left-0 top-0 z-10 flex h-12 w-12 -translate-x-[40%] -translate-y-[40%] items-center justify-center rounded-full text-base font-bold text-white shadow-md ${SECTION_ACCENT_BG[color(1)]}`}>
                {i + 1}
              </span>
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fde8e8] to-[#EEF2FF] text-3xl transition-transform group-hover:scale-110">
                {step.icon}
              </span>
              <h3 className="mt-4 text-lg font-bold text-[#0B0B0B]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#515154]">{step.text}</p>
            </article>
          ))}
        </div>

        {closing && (
          <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-bold text-[#0B0B0B]">
            {closing}
          </p>
        )}
    </TintedPageSection>
  );
}

type LessonFlowStep = { icon: string; title: string; text: string };

const LESSON_ICON_BACKGROUNDS = [
  "bg-[#fde8e8]",
  "bg-[#EEF2FF]",
  "bg-[#ddf6f8]",
  "bg-[#fff8e7]",
  "bg-[#fef3e8]",
];

export function FormationLessonSection({
  eyebrow,
  title,
  subtitle,
  flow,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  flow: LessonFlowStep[];
}) {
  return (
    <TintedPageSection pillColor={color(2)}>
      <div className="mx-auto max-w-3xl text-center">
          {eyebrow && <FormationEyebrow>{eyebrow}</FormationEyebrow>}
          <div className="mt-4">
            <FormationSectionTitle highlight="leçon" pill={color(2)}>
              {title}
            </FormationSectionTitle>
          </div>
          <SectionSubtitle align="center" className="mt-5">
            {subtitle}
          </SectionSubtitle>
        </div>

        <ol className="mx-auto mt-14 max-w-2xl space-y-4">
          {flow.map((item, i) => (
            <li key={item.title}>
              <article className={`relative p-6 pl-20 ${cardSurfaceOnTintedBg()}`}>
                <span
                  className={`absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl text-xl ${LESSON_ICON_BACKGROUNDS[i % LESSON_ICON_BACKGROUNDS.length]}`}
                >
                  {item.icon}
                </span>
                <h3 className="font-bold text-[#0B0B0B]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#515154]">{item.text}</p>
              </article>
            </li>
          ))}
        </ol>
    </TintedPageSection>
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

function ModuleCard({ mod, accent }: { mod: ModuleItem; accent: SectionColor }) {
  return (
    <article className={`group relative shrink-0 p-6 transition-all duration-300 hover:shadow-md md:pl-12 ${cardSurfaceOnTintedBg()}`}>
      <div className="absolute -left-0.5 top-8 hidden h-3 w-3 rounded-full ring-4 ring-white md:block">
        <span className={`block h-full w-full rounded-full ${SECTION_ACCENT_BG[accent]}`} />
      </div>
      <div className="flex flex-wrap items-start gap-4">
        <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-bold text-white shadow-md transition-transform group-hover:scale-110 ${SECTION_ACCENT_BG[accent]}`}>
          {mod.number}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-[#515154]">{mod.question}</p>
          <h3 className="mt-1 text-xl font-bold text-[#0B0B0B]">{mod.title}</h3>
          <p className="mt-3 rounded-xl border border-slate-200/70 bg-[#FAF8F5] px-4 py-3 text-sm italic text-[#515154]">
            {mod.problem}
          </p>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#8E8E93]">
                L&apos;élève apprend à
              </p>
              <ul className="mt-3 space-y-1.5">
                {mod.learns.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#515154]">
                    <span className="text-[#EE6B6E]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#8E8E93]">
                Supports inclus
              </p>
              <ul className="mt-3 space-y-1.5">
                {mod.supports.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#515154]">
                    <span className="text-[#6366F1]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function FormationModulesSection({
  id,
  eyebrow,
  title,
  subtitle,
  items,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: ModuleItem[];
}) {
  const sectionColor = color(3);

  return (
    <TintedPageSection id={id} pillColor={sectionColor} size="immersive">
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow && <FormationEyebrow>{eyebrow}</FormationEyebrow>}
        <div className="mt-4">
          <FormationSectionTitle highlight="parcours" pill={sectionColor}>
            {title}
          </FormationSectionTitle>
        </div>
        {subtitle && (
          <SectionSubtitle align="center" className="mt-5">
            {subtitle}
          </SectionSubtitle>
        )}
      </div>

      <div className="mt-12 md:hidden">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((mod) => (
            <div key={mod.number} className="w-[min(90vw,320px)] shrink-0 snap-center">
              <ModuleCard mod={mod} accent={sectionColor} />
            </div>
          ))}
        </div>
        <p className="mt-2 text-center text-xs text-[#8E8E93]">Glissez pour voir les 4 modules →</p>
      </div>

      <div className="relative mt-14 hidden md:block">
        <div
          className={`absolute bottom-4 left-6 top-4 w-0.5 ${SECTION_ACCENT_BG[sectionColor]}`}
          aria-hidden
        />
        <div className="space-y-6">
          {items.map((mod) => (
            <ModuleCard key={mod.number} mod={mod} accent={sectionColor} />
          ))}
        </div>
      </div>
    </TintedPageSection>
  );
}

type ScenarioMoment = { period: string; icon: string; text: string; module: string };

export function FormationScenariosSection({
  eyebrow,
  title,
  subtitle,
  moments,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  moments: ScenarioMoment[];
}) {
  const sectionColor = color(4);
  const accent = SECTION_ACCENT_SOFT[sectionColor];

  return (
    <TintedPageSection pillColor={sectionColor}>
      <div className="mx-auto max-w-3xl text-center">
          {eyebrow && <FormationEyebrow>{eyebrow}</FormationEyebrow>}
          <div className="mt-4">
            <FormationSectionTitle highlight="5 moments" pill={sectionColor}>
              {title}
            </FormationSectionTitle>
          </div>
          <SectionSubtitle align="center" className="mt-5">
            {subtitle}
          </SectionSubtitle>
        </div>

        <div className="relative mt-14">
          <div
            className={`absolute left-6 top-0 hidden h-full w-0.5 md:block ${SECTION_ACCENT_BG[sectionColor]}`}
            aria-hidden
          />
          <ol className="space-y-6">
            {moments.map((moment, i) => (
              <li key={moment.period} className="relative md:pl-14">
                <span
                  className={`absolute left-3 top-6 hidden h-6 w-6 rounded-full ring-4 ring-[#fde8e8] md:block ${SECTION_ACCENT_BG[sectionColor]}`}
                  aria-hidden
                />
                <article className={`p-6 transition-all duration-300 hover:shadow-md md:flex md:items-center md:gap-6 ${cardSurfaceOnTintedBg()}`}>
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
    </TintedPageSection>
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
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  plans: PricingPlan[];
}) {
  return (
    <TintedPageSection id={id} pillColor={color(5)}>
      <div className="mx-auto max-w-3xl text-center">
          {eyebrow && <FormationEyebrow>{eyebrow}</FormationEyebrow>}
          <div className="mt-4">
            <FormationSectionTitle highlight="formule" pill={color(5)}>
              {title}
            </FormationSectionTitle>
          </div>
          <SectionSubtitle align="center" className="mt-5">
            {subtitle}
          </SectionSubtitle>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.title}
              className={`relative flex flex-col p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)] ${
                plan.badge
                  ? "border-[#6366F1]/20 bg-white ring-2 ring-[#6366F1]/10"
                  : cardSurfaceOnTintedBg()
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 right-6 rounded-full bg-[#EE6B6E] px-3 py-1 text-xs font-bold text-white">
                  {plan.badge}
                </span>
              )}
              <p className="text-sm font-bold uppercase tracking-widest text-[#6366F1]">
                {plan.tagline}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-[#0B0B0B]">{plan.title}</h3>
              <p className="mt-3 text-4xl font-extrabold font-heading text-[#0B0B0B]">
                {plan.price}
                <span className="ml-1 text-base font-normal text-[#515154]">· accès annuel</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#515154]">{plan.description}</p>

              <div
                className={`mt-6 rounded-2xl border p-4 ${
                  plan.badge
                    ? "border-white/80 bg-white/70 backdrop-blur-sm"
                    : "border-[#EEF2FF] bg-[#F9F9FB]"
                }`}
              >
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
    </TintedPageSection>
  );
}

export function FormationFAQSection({
  title,
  items,
}: {
  title: string;
  items: { question: string; answer: string }[];
}) {
  const faqColor = color(6);
  const faqAccent = SECTION_ACCENT_SOFT[faqColor];

  return (
    <TintedPageSection pillColor={faqColor} innerClassName="mx-auto max-w-3xl px-4 md:px-6">
      <div className="text-center">
          <FormationSectionTitle highlight="fréquentes" pill={faqColor}>
            {title}
          </FormationSectionTitle>
        </div>
        <div className="mt-12 divide-y divide-[#0B0B0B]/10">
          {items.map((item, index) => (
            <details key={item.question} className="group py-5" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                <span className="flex items-start gap-4">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-extrabold font-heading ${faqAccent.bg} ${faqAccent.text}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-2 font-bold text-[#0B0B0B]">{item.question}</span>
                </span>
                <span className={`mt-2 transition-transform group-open:rotate-180 ${faqAccent.text}`}>
                  <ChevronDown />
                </span>
              </summary>
              <p className="ml-14 mt-3 text-sm leading-relaxed text-[#515154]">{item.answer}</p>
            </details>
          ))}
        </div>
    </TintedPageSection>
  );
}

export function FormationContactSection({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  footnote,
}: {
  title: string;
  subtitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  footnote?: string;
}) {
  return (
    <TintedPageSection pillColor={color(7)} innerClassName="mx-auto max-w-3xl px-4 text-center md:px-6">
      <FormationSectionTitle highlight="méthode" pill={color(7)}>
        {title}
      </FormationSectionTitle>
      <SectionSubtitle align="center" className="mt-5">
        {subtitle}
      </SectionSubtitle>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button href={ctaPrimary.href} variant="parent">
          {ctaPrimary.label}
        </Button>
        <Button href={ctaSecondary.href} variant="parentOutline">
          {ctaSecondary.label}
        </Button>
      </div>
      {footnote && <p className="mt-6 text-sm text-[#515154]">{footnote}</p>}
    </TintedPageSection>
  );
}
