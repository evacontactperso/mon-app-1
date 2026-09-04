import Button from "./Button";
import {
  BluePill,
  FormationEyebrow,
  FormationSectionTitle,
  MODULE_SQUARES,
  PASTEL_BLOCKS,
  PillTag,
} from "./formation/FormationDesignLift";
import { SectionSubtitle } from "./SectionHeader";

const STEP_PASTELS = [PASTEL_BLOCKS[0], PASTEL_BLOCKS[1], PASTEL_BLOCKS[2]];

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
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && <FormationEyebrow>{eyebrow}</FormationEyebrow>}
          <div className="mt-4">
            <FormationSectionTitle highlight="appliquer" pill="coral">
              {title}
            </FormationSectionTitle>
          </div>
          <SectionSubtitle align="center" className="mt-5">
            {subtitle}
          </SectionSubtitle>
        </div>

        {/* Grille décalée — inspirée des cartes 01/02/03/04 */}
        <div className="mt-14 grid gap-4 md:grid-cols-6">
          {steps.map((step, i) => (
            <article
              key={step.title}
              className={`flex flex-col rounded-[32px] p-8 ${STEP_PASTELS[i]} ${
                i === 0 ? "md:col-span-3" : i === 1 ? "md:col-span-2" : "md:col-span-3"
              }`}
            >
              <span className="text-5xl font-extrabold font-heading text-[#1a1f4e]/20">0{i + 1}</span>
              <span className="mt-4 text-3xl">{step.icon}</span>
              <h3 className="mt-4 text-lg font-extrabold uppercase tracking-wide text-[#1a1f4e]">
                {step.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#1a1f4e]/80">{step.text}</p>
            </article>
          ))}
        </div>

        {closing && (
          <p className="mx-auto mt-12 max-w-2xl text-center text-lg font-bold text-[#1a1f4e]">
            {closing}
          </p>
        )}
      </div>
    </section>
  );
}

type LessonFlowStep = { icon: string; title: string; text: string };

export function FormationLessonSection({
  eyebrow,
  title,
  subtitle,
  flow,
  example,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  flow: LessonFlowStep[];
  example?: { title: string; outcomes: string[] };
}) {
  return (
    <section className="bg-[#FAF8F5] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && <FormationEyebrow>{eyebrow}</FormationEyebrow>}
          <div className="mt-4">
            <FormationSectionTitle highlight="leçon" pill="blue">
              {title.replace(" ?", " ?")}
            </FormationSectionTitle>
          </div>
          <SectionSubtitle align="center" className="mt-5">
            {subtitle}
          </SectionSubtitle>
        </div>

        <ol className="mt-14 space-y-4">
          {flow.map((item, i) => {
            const square = MODULE_SQUARES[i % MODULE_SQUARES.length];
            return (
              <li
                key={item.title}
                className="flex flex-col overflow-hidden rounded-[28px] bg-white md:flex-row"
              >
                <div
                  className={`flex aspect-square w-full shrink-0 flex-col justify-between p-6 md:w-44 lg:w-52 ${square.bg}`}
                >
                  <span className="text-4xl">{item.icon}</span>
                  <p className="text-sm font-extrabold uppercase leading-snug text-white">
                    {item.title}
                  </p>
                </div>
                <div className="flex flex-1 items-center p-6 md:p-8">
                  <p className="text-base leading-relaxed text-[#515154]">{item.text}</p>
                </div>
              </li>
            );
          })}
        </ol>

        {example && (
          <div className="mt-10 overflow-hidden rounded-[28px] bg-white p-6 md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="lg:w-2/5">
                <FormationEyebrow>Exemple concret</FormationEyebrow>
                <h3 className="mt-3 text-xl font-extrabold text-[#1a1f4e]">{example.title}</h3>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold uppercase tracking-wide text-[#3b46f1]">
                  À la fin, l&apos;élève sait :
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {example.outcomes.map((outcome) => (
                    <li key={outcome}>
                      <PillTag>{outcome}</PillTag>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
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
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: ModuleItem[];
}) {
  return (
    <section id={id} className="bg-[#EE6B6E] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl">
            <span className="text-white">{title.split("4 modules")[0]}</span>
            <BluePill>4 modules</BluePill>
            {title.includes("4 modules") ? title.split("4 modules")[1] : null}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
              {subtitle}
            </p>
          )}
        </div>

        <div className="mt-14 space-y-5">
          {items.map((mod) => {
            const square = MODULE_SQUARES[(mod.number - 1) % MODULE_SQUARES.length];
            return (
              <article
                key={mod.number}
                className="overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
              >
                <div className="flex flex-col md:flex-row">
                  <div
                    className={`flex flex-col justify-between p-8 md:w-56 lg:w-64 ${square.bg}`}
                  >
                    <span className="text-5xl font-extrabold font-heading text-white/30">
                      0{mod.number}
                    </span>
                    <p className="mt-8 text-lg font-extrabold uppercase leading-snug text-white">
                      {mod.title}
                    </p>
                  </div>
                  <div className="flex-1 p-6 md:p-8">
                    <p className="text-sm font-medium text-[#8E8E93]">{mod.question}</p>
                    <p className="mt-3 rounded-2xl bg-[#FAF8F5] px-4 py-3 text-sm italic text-[#515154]">
                      {mod.problem}
                    </p>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      <div className={`rounded-2xl p-5 ${square.light}`}>
                        <p className="text-xs font-extrabold uppercase tracking-widest text-[#1a1f4e]">
                          L&apos;élève apprend à
                        </p>
                        <ul className="mt-3 space-y-2">
                          {mod.learns.map((item) => (
                            <li key={item} className="text-sm font-medium text-[#1a1f4e]">
                              → {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-2xl border-2 border-[#1a1f4e]/10 bg-white p-5">
                        <p className="text-xs font-extrabold uppercase tracking-widest text-[#3b46f1]">
                          Supports inclus
                        </p>
                        <ul className="mt-3 space-y-2">
                          {mod.supports.map((item) => (
                            <li key={item} className="text-sm font-medium text-[#1a1f4e]">
                              ✓ {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type ScenarioMoment = { period: string; icon: string; text: string; module: string };

export function FormationScenariosSection({
  eyebrow,
  title,
  subtitle,
  moments,
  included,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  moments: ScenarioMoment[];
  included?: { icon: string; label: string }[];
}) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && <FormationEyebrow>{eyebrow}</FormationEyebrow>}
          <div className="mt-4">
            <FormationSectionTitle highlight="5 moments" pill="blue">
              {title}
            </FormationSectionTitle>
          </div>
          <SectionSubtitle align="center" className="mt-5">
            {subtitle}
          </SectionSubtitle>
        </div>

        <ol className="mt-14 space-y-0 divide-y divide-[#1a1f4e]/10">
          {moments.map((moment, i) => (
            <li
              key={moment.period}
              className="grid gap-6 py-8 md:grid-cols-[auto_1fr_2fr] md:items-start md:gap-10"
            >
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-full text-2xl ${PASTEL_BLOCKS[i % PASTEL_BLOCKS.length]}`}
              >
                {moment.icon}
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#8E8E93]">
                  0{i + 1}
                </p>
                <h3 className="mt-1 text-xl font-extrabold uppercase text-[#1a1f4e]">
                  {moment.period}
                </h3>
                <PillTag>{moment.module}</PillTag>
              </div>
              <p className="text-base leading-relaxed text-[#515154]">{moment.text}</p>
            </li>
          ))}
        </ol>

        {included && included.length > 0 && (
          <div className="mt-8 rounded-[28px] bg-[#FAF8F5] p-6 md:p-8">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-[#8E8E93]">
              Tout est inclus
            </p>
            <ul className="mt-5 flex flex-wrap justify-center gap-2">
              {included.map((item) => (
                <li key={item.label}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#1a1f4e]/15 bg-white px-4 py-2 text-sm font-semibold text-[#1a1f4e]">
                    {item.icon} {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

type PricingPlan = {
  title: string;
  price: string;
  tagline: string;
  description: string;
  includes: string[];
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
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  plans: PricingPlan[];
  diagnostic?: { title: string; text: string; cta: { label: string; href: string } };
}) {
  const planColors = [PASTEL_BLOCKS[3], PASTEL_BLOCKS[1]];

  return (
    <section id={id} className="bg-[#FAF8F5] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && <FormationEyebrow>{eyebrow}</FormationEyebrow>}
          <div className="mt-4">
            <FormationSectionTitle highlight="formule" pill="coral">
              {title}
            </FormationSectionTitle>
          </div>
          <SectionSubtitle align="center" className="mt-5">
            {subtitle}
          </SectionSubtitle>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {plans.map((plan, i) => (
            <article
              key={plan.title}
              className={`relative flex flex-col rounded-[32px] p-8 ${planColors[i]} ${plan.badge ? "ring-4 ring-[#3b46f1]" : ""}`}
            >
              {plan.badge && (
                <span className="absolute -top-3 right-6 rounded-full bg-[#3b46f1] px-4 py-1 text-xs font-bold text-white">
                  {plan.badge}
                </span>
              )}
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#1a1f4e]/60">
                {plan.tagline}
              </p>
              <h3 className="mt-2 text-2xl font-extrabold text-[#1a1f4e]">{plan.title}</h3>
              <p className="mt-3 text-5xl font-extrabold font-heading text-[#1a1f4e]">
                {plan.price}
                <span className="ml-2 text-base font-normal text-[#515154]">/ an</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#1a1f4e]/80">{plan.description}</p>
              <ul className="mt-6 flex-1 space-y-2 border-t border-[#1a1f4e]/10 pt-6">
                {plan.includes.map((item) => (
                  <li key={item} className="text-sm font-medium text-[#1a1f4e]">
                    ✓ {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-bold text-[#3b46f1]">{plan.idealFor}</p>
              <div className="mt-6">
                <Button href={plan.cta.href} variant={plan.badge ? "parent" : "schoolOutline"}>
                  {plan.cta.label} →
                </Button>
              </div>
            </article>
          ))}
        </div>

        {diagnostic && (
          <div className="mt-8 overflow-hidden rounded-[32px] bg-[#FF5C5C] p-8 text-white md:p-10">
            <h3 className="text-xl font-extrabold">{diagnostic.title}</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90">{diagnostic.text}</p>
            <div className="mt-6">
              <Button
                href={diagnostic.cta.href}
                variant="parentOutline"
                className="border-white bg-white text-[#FF5C5C] hover:bg-white/95"
              >
                {diagnostic.cta.label} →
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function FormationFAQSection({
  title,
  items,
}: {
  title: string;
  items: { question: string; answer: string }[];
}) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <FormationSectionTitle className="text-center">{title}</FormationSectionTitle>
        <div className="mt-12 divide-y divide-[#1a1f4e]/10">
          {items.map((item, index) => (
            <details key={item.question} className="group py-5" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                <span className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DDD6FE] text-sm font-extrabold font-heading text-[#1a1f4e]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-2 font-extrabold text-[#1a1f4e]">{item.question}</span>
                </span>
                <span className="mt-2 text-[#3b46f1] transition-transform group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <p className="ml-14 mt-3 text-sm leading-relaxed text-[#515154]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
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
    <section className="bg-[#FAF8F5] py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 md:grid-cols-3 md:px-6">
        {/* Bento contact — inspiré Altera */}
        <div className="flex flex-col justify-between rounded-[32px] bg-[#FFD4BC] p-8 md:row-span-2">
          <div>
            <FormationEyebrow>Contact</FormationEyebrow>
            <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#1a1f4e] md:text-3xl">
              {title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#1a1f4e]/80">{subtitle}</p>
          </div>
          <div className="mt-8 flex flex-col gap-3">
            <Button href={ctaPrimary.href} variant="parent">
              {ctaPrimary.label} →
            </Button>
            <Button href={ctaSecondary.href} variant="parentOutline">
              {ctaSecondary.label}
            </Button>
          </div>
          {footnote && (
            <p className="mt-6 border-t border-[#1a1f4e]/10 pt-4 text-xs text-[#1a1f4e]/60">
              {footnote}
            </p>
          )}
        </div>

        <div className="rounded-[32px] bg-[#DDD6FE] p-8">
          <FormationEyebrow>Formules</FormationEyebrow>
          <ul className="mt-6 space-y-0 divide-y divide-[#1a1f4e]/10">
            {["Module individuel — 199 €", "Pack complet — 497 €", "Accès toute l'année"].map(
              (line, i) => (
                <li
                  key={line}
                  className="py-3 text-sm font-extrabold uppercase tracking-wide text-[#1a1f4e]"
                >
                  0{i + 1} · {line}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="flex flex-col justify-center rounded-[32px] bg-[#BAE6FD] p-8">
          <FormationEyebrow>Collège & lycée</FormationEyebrow>
          <p className="mt-4 text-3xl font-extrabold leading-tight text-[#1a1f4e]">
            Une question ?
            <br />
            On vous oriente.
          </p>
          <p className="mt-4 text-sm text-[#1a1f4e]/70">Réponse sous 24 h</p>
        </div>
      </div>
    </section>
  );
}
