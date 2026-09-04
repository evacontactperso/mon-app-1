import Button from "./Button";
import PageSection, { type SectionSize, type SectionTone } from "./PageSection";
import SectionHeader from "./SectionHeader";
import TableCellContent from "./TableCellContent";

type StepCard = { icon: string; title: string; text: string };

export function FormationApplySection({
  eyebrow,
  title,
  text,
  steps,
  closing,
  tone = "white",
  size = "immersive",
}: {
  eyebrow?: string;
  title: string;
  text: string;
  steps: StepCard[];
  closing: string;
  tone?: SectionTone;
  size?: SectionSize;
}) {
  return (
    <PageSection
      tone={tone}
      size={size}
      overlay={
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#6366F1] via-[#EE6B6E] to-[#8134af]" />
      }
    >
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={text} align="center" accent="indigo" />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {steps.map((step, i) => (
          <article
            key={step.title}
            className="group relative rounded-[28px] border border-slate-200/60 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6366F1]/20 hover:shadow-lg"
          >
            <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#6366F1] text-xs font-bold text-white shadow-md">
              {i + 1}
            </span>
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EEF2FF] to-[#fde8e8] text-3xl transition-transform group-hover:scale-110">
              {step.icon}
            </span>
            <h3 className="mt-4 text-lg font-bold text-[#0B0B0B]">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#515154]">{step.text}</p>
          </article>
        ))}
      </div>
      <div className="relative mx-auto mt-10 max-w-2xl rounded-[28px] p-[2px]">
        <div className="absolute inset-0 rounded-[28px] bg-gradient-to-r from-[#6366F1] via-[#EE6B6E] to-[#8134af] opacity-60" />
        <p className="relative rounded-[26px] bg-white px-6 py-4 text-center text-lg font-bold text-[#0B0B0B]">
          {closing}
        </p>
      </div>
    </PageSection>
  );
}

type LessonElement = { icon: string; title: string; text: string };

export function FormationLessonSection({
  eyebrow,
  title,
  elements,
  example,
  tone = "alt",
  size = "immersive",
}: {
  eyebrow?: string;
  title: string;
  elements: LessonElement[];
  example: { title: string; outcomes: string[] };
  tone?: SectionTone;
  size?: SectionSize;
}) {
  return (
    <PageSection tone={tone} size={size}>
      <SectionHeader eyebrow={eyebrow} title={title} align="center" accent="purple" />
      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <div className="relative rounded-[36px] p-[2px] shadow-[0_24px_60px_rgba(99,102,241,0.1)]">
          <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-[#6366F1] via-[#8134af] to-[#EE6B6E] opacity-50" />
          <div className="relative rounded-[34px] bg-white p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8134af] text-white shadow-md">
                ▶
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-[#515154]">
                Écran de leçon
              </p>
            </div>
            <div className="mt-6 space-y-3">
              {elements.map((el, i) => (
                <div
                  key={el.title}
                  className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-[#F9F9FB] p-4 transition-all duration-300 hover:border-[#6366F1]/20 hover:bg-white hover:shadow-sm"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#f58529] via-[#EE6B6E] to-[#8134af] text-lg">
                    {el.icon}
                  </span>
                  <div>
                    <p className="font-bold text-[#0B0B0B]">{el.title}</p>
                    <p className="mt-1 text-sm text-[#515154]">{el.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="rounded-[28px] border border-[#8134af]/20 bg-gradient-to-br from-[#f3e5f5]/50 via-white to-[#EEF2FF]/40 p-8 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-[#8134af]">
              Exemple de leçon
            </p>
            <h3 className="mt-3 text-xl font-bold text-[#0B0B0B]">{example.title}</h3>
            <p className="mt-4 text-sm font-semibold text-[#515154]">À la fin, l&apos;élève sait :</p>
            <ul className="mt-4 space-y-2.5">
              {example.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-2 rounded-xl border border-[#6366F1]/10 bg-white/80 px-3 py-2 text-sm text-[#515154]"
                >
                  <span className="mt-0.5 text-[#6366F1]">✓</span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
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

function ModuleCard({ mod }: { mod: ModuleItem }) {
  return (
    <article className="group relative shrink-0 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 md:pl-12">
      <div className="absolute -left-0.5 top-8 hidden h-3 w-3 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8134af] ring-4 ring-[#0B0B0B] md:block" />
      <div className="flex flex-wrap items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#8134af] text-lg font-bold text-white shadow-lg transition-transform group-hover:scale-110">
          {mod.number}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white/60">{mod.question}</p>
          <h3 className="mt-1 text-xl font-bold text-white">{mod.title}</h3>
          <p className="mt-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm italic text-white/70">
            {mod.problem}
          </p>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/50">
                L&apos;élève apprend à
              </p>
              <ul className="mt-3 space-y-1.5">
                {mod.learns.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                    <span className="text-[#EE6B6E]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/50">
                Supports inclus
              </p>
              <ul className="mt-3 space-y-1.5">
                {mod.supports.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/80">
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
  tone = "dark",
  size = "immersive",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: ModuleItem[];
  tone?: SectionTone;
  size?: SectionSize;
}) {
  return (
    <PageSection
      id={id}
      tone={tone}
      size={size}
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

      {/* Mobile: aperçu compact */}
      <div className="mt-12 md:hidden">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((mod) => (
            <div key={mod.number} className="w-[min(90vw,320px)] shrink-0 snap-center">
              <ModuleCard mod={mod} />
            </div>
          ))}
        </div>
        <p className="mt-2 text-center text-xs text-white/50">Glissez pour voir les 4 modules →</p>
      </div>

      {/* Desktop: timeline */}
      <div className="relative mt-14 hidden md:block">
        <div
          className="absolute bottom-4 left-6 top-4 w-0.5 bg-gradient-to-b from-[#6366F1] via-[#EE6B6E] to-[#8134af]"
          aria-hidden
        />
        <div className="space-y-6">
          {items.map((mod) => (
            <ModuleCard key={mod.number} mod={mod} />
          ))}
        </div>
      </div>
    </PageSection>
  );
}

export function FormationProfilesSection({
  eyebrow,
  title,
  items,
  cta,
  tone = "purple",
  size = "immersive",
}: {
  eyebrow?: string;
  title: string;
  items: { profile: string; path: string }[];
  cta: { label: string; href: string };
  tone?: SectionTone;
  size?: SectionSize;
}) {
  return (
    <PageSection tone={tone} size={size}>
      <SectionHeader eyebrow={eyebrow} title={title} align="center" accent="purple" />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <article
            key={item.profile}
            className="group rounded-[28px] border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#8134af]/25 hover:shadow-lg"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#8134af] to-[#6366F1] text-sm font-bold text-white transition-transform group-hover:scale-110">
              {i + 1}
            </span>
            <h3 className="mt-4 font-bold text-[#0B0B0B]">{item.profile}</h3>
            <p className="mt-2 text-sm text-[#515154]">
              <span className="font-semibold text-[#6366F1]">Parcours : </span>
              {item.path}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button href={cta.href} variant="parent">
          {cta.label}
        </Button>
      </div>
    </PageSection>
  );
}

type ScenarioCard = { icon: string; title: string; text: string };

export function FormationScenariosSection({
  eyebrow,
  title,
  cards,
  tone = "pink",
  size = "immersive",
}: {
  eyebrow?: string;
  title: string;
  cards: ScenarioCard[];
  tone?: SectionTone;
  size?: SectionSize;
}) {
  return (
    <PageSection tone={tone} size={size}>
      <SectionHeader eyebrow={eyebrow} title={title} align="center" accent="pink" />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.title}
            className="group rounded-[28px] border border-[#EE6B6E]/15 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#EE6B6E]/30 hover:shadow-[0_16px_40px_rgba(238,107,110,0.1)]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fde8e8] to-[#fef3e8] text-2xl transition-transform group-hover:scale-110">
              {card.icon}
            </span>
            <h3 className="mt-4 font-bold text-[#0B0B0B]">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#515154]">{card.text}</p>
          </article>
        ))}
      </div>
    </PageSection>
  );
}

export function FormationParentSection({
  eyebrow,
  title,
  rows,
  questions,
  closing,
  tone = "white",
  size = "immersive",
}: {
  eyebrow?: string;
  title: string;
  rows: { avoid: string; do: string }[];
  questions: string[];
  closing: string;
  tone?: SectionTone;
  size?: SectionSize;
}) {
  return (
    <PageSection tone={tone} size={size}>
      <SectionHeader eyebrow={eyebrow} title={title} align="center" accent="pink" />
      <div className="mt-14 overflow-hidden rounded-[28px] border border-slate-200/60 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
        <div className="grid grid-cols-2 border-b border-slate-100 bg-gradient-to-r from-[#F9F9FB] to-[#fde8e8]/30 text-xs font-bold uppercase tracking-widest text-[#515154]">
          <div className="border-r border-slate-100 px-5 py-3">Vous n&apos;avez pas besoin de…</div>
          <div className="px-5 py-3">Vous pouvez simplement…</div>
        </div>
        {rows.map((row) => (
          <div
            key={row.avoid}
            className="grid grid-cols-2 border-b border-slate-100 transition-colors last:border-b-0 hover:bg-[#F9F9FB]/50"
          >
            <div className="border-r border-slate-100 bg-red-50/30 px-5 py-4 text-sm text-[#515154]">
              <TableCellContent text={row.avoid} bulletClassName="bg-red-400" />
            </div>
            <div className="px-5 py-4 text-sm font-medium text-[#0B0B0B]">
              <TableCellContent text={row.do} bulletClassName="bg-[#6366F1]" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {questions.map((q, i) => (
          <div
            key={q}
            className="relative rounded-[28px] border border-[#EE6B6E]/15 bg-gradient-to-br from-[#fde8e8]/40 to-white px-4 py-5 pt-7 text-sm font-medium text-[#0B0B0B] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <span
              className="absolute -left-1 -top-2 text-3xl font-serif leading-none text-[#EE6B6E]/25"
              aria-hidden
            >
              &ldquo;
            </span>
            <p className="relative leading-relaxed">{q}</p>
          </div>
        ))}
      </div>
      <div className="relative mx-auto mt-10 max-w-2xl rounded-[36px] p-[2px] shadow-[0_16px_50px_rgba(238,107,110,0.12)]">
        <div className="absolute inset-0 rounded-[36px] bg-gradient-to-r from-[#f58529] via-[#EE6B6E] to-[#8134af] opacity-70" />
        <p className="relative rounded-[34px] bg-white px-6 py-5 text-center text-lg font-bold text-[#EE6B6E]">
          {closing}
        </p>
      </div>
    </PageSection>
  );
}

export function FormationFormulaChoiceSection({
  eyebrow,
  title,
  options,
  tone = "indigo",
  size = "immersive",
}: {
  eyebrow?: string;
  title: string;
  options: {
    title: string;
    subtitle: string;
    text: string;
    recommended: string;
    badge?: string;
  }[];
  tone?: SectionTone;
  size?: SectionSize;
}) {
  return (
    <PageSection tone={tone} size={size}>
      <SectionHeader eyebrow={eyebrow} title={title} align="center" accent="indigo" />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {options.map((opt) => (
          <article
            key={opt.title}
            className={`relative rounded-[28px] border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
              opt.badge
                ? "border-[#EE6B6E]/30 ring-2 ring-[#EE6B6E]/10"
                : "border-slate-200/60"
            }`}
          >
            {opt.badge && (
              <span className="absolute -top-3 right-6 rounded-full bg-[#EE6B6E] px-3 py-1 text-xs font-bold text-white">
                {opt.badge}
              </span>
            )}
            <h3 className="text-xl font-bold text-[#0B0B0B]">{opt.title}</h3>
            <p className="mt-1 text-sm font-semibold text-[#6366F1]">{opt.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-[#515154]">{opt.text}</p>
            <p className="mt-4 text-sm font-bold text-[#EE6B6E]">{opt.recommended}</p>
          </article>
        ))}
      </div>
    </PageSection>
  );
}

type PricingPlan = {
  title: string;
  price: string;
  description: string;
  includes: string[];
  cta: { label: string; href: string };
  badge?: string;
};

export function FormationPricingSection({
  id,
  eyebrow,
  title,
  plans,
  diagnostic,
  tone = "alt",
  size = "comfortable",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  plans: PricingPlan[];
  diagnostic: { title: string; text: string; cta: { label: string; href: string } };
  tone?: SectionTone;
  size?: SectionSize;
}) {
  return (
    <PageSection id={id} tone={tone} size={size}>
      <SectionHeader eyebrow={eyebrow} title={title} align="center" accent="pink" />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <article
            key={plan.title}
            className={`relative flex flex-col rounded-[28px] border bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 ${
              plan.badge
                ? "border-[#EE6B6E]/30 ring-2 ring-[#EE6B6E]/10 hover:shadow-[0_24px_60px_rgba(238,107,110,0.15)]"
                : "border-slate-200/60 hover:shadow-[0_20px_50px_rgba(99,102,241,0.1)]"
            }`}
          >
            {plan.badge && (
              <span className="absolute -top-3 right-6 rounded-full bg-[#EE6B6E] px-3 py-1 text-xs font-bold text-white">
                {plan.badge}
              </span>
            )}
            <h3 className="text-xl font-bold text-[#0B0B0B]">{plan.title}</h3>
            <p className="mt-2 text-3xl font-extrabold font-heading text-[#6366F1]">{plan.price}</p>
            <p className="mt-2 text-sm text-[#515154]">{plan.description}</p>
            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#515154]">
              Inclus
            </p>
            <ul className="mt-3 flex flex-1 flex-col gap-2">
              {plan.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#0B0B0B]">
                  <span className="mt-0.5 text-[#EE6B6E]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={plan.cta.href} variant="parent">
                {plan.cta.label}
              </Button>
            </div>
          </article>
        ))}
      </div>
      <div className="relative mx-auto mt-10 max-w-2xl rounded-[36px] p-[2px] shadow-[0_16px_50px_rgba(99,102,241,0.1)]">
        <div className="absolute inset-0 rounded-[36px] bg-gradient-to-r from-[#6366F1] via-[#EE6B6E] to-[#8134af] opacity-60" />
        <div className="relative rounded-[34px] bg-gradient-to-br from-[#EEF2FF]/60 to-white p-8 text-center">
          <h3 className="text-lg font-bold text-[#0B0B0B]">{diagnostic.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#515154]">{diagnostic.text}</p>
          <div className="mt-6">
            <Button href={diagnostic.cta.href} variant="parentOutline">
              {diagnostic.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </PageSection>
  );
}

type BonusItem = { icon: string; title: string; text: string };

export function FormationBonusSection({
  eyebrow,
  title,
  items,
  tone = "warm",
  size = "immersive",
}: {
  eyebrow?: string;
  title: string;
  items: BonusItem[];
  tone?: SectionTone;
  size?: SectionSize;
}) {
  return (
    <PageSection
      tone={tone}
      size={size}
      overlay={
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#f58529] via-[#EE6B6E] to-[#8134af]" />
      }
    >
      <SectionHeader eyebrow={eyebrow} title={title} align="center" accent="warm" />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="group rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#f58529]/25 hover:shadow-md"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fef3e8] to-[#fde8e8] text-2xl transition-transform group-hover:scale-110">
              {item.icon}
            </span>
            <h3 className="mt-3 font-bold text-[#0B0B0B]">{item.title}</h3>
            <p className="mt-2 text-sm text-[#515154]">{item.text}</p>
          </article>
        ))}
      </div>
    </PageSection>
  );
}
