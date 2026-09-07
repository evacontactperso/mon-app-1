import PageSection, { type SectionSize, type SectionTone } from "./PageSection";
import SectionHeader from "./SectionHeader";

type MethodStep = {
  step: number;
  title: string;
  text: string;
  icon?: string;
  color: "orange" | "pink" | "purple" | "yellow" | "green";
};

type MethodStepsSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  text?: string;
  steps: MethodStep[];
  tone?: SectionTone;
  size?: SectionSize;
};

const stepGradients: Record<MethodStep["color"], string> = {
  orange: "from-[#f58529] to-[#fbbf24]",
  pink: "from-[#EE6B6E] to-[#F58A8D]",
  purple: "from-[#8134af] to-[#a78bfa]",
  yellow: "from-[#fcaf45] to-[#fde047]",
  green: "from-[#059669] to-[#6ee7b7]",
};

function StepCard({ step }: { step: MethodStep }) {
  return (
    <article className="group relative flex min-w-0 flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-white/25 hover:bg-white/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
      <div
        className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${stepGradients[step.color]} text-2xl font-bold text-white shadow-lg ring-4 ring-white/10 transition-transform group-hover:scale-110`}
      >
        {step.icon ?? step.step}
      </div>
      <h3 className="text-base font-bold leading-snug text-white xl:text-lg">{step.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{step.text}</p>
    </article>
  );
}

export default function MethodStepsSection({
  id,
  eyebrow,
  title,
  subtitle,
  text,
  steps,
  tone = "dark",
  size = "immersive",
}: MethodStepsSectionProps) {
  return (
    <PageSection
      id={id}
      tone={tone}
      size={size}
      innerClassName="mx-auto max-w-7xl px-3 md:px-4"
      overlay={
        <>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(238,107,110,0.18)_0%,_transparent_50%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(129,52,175,0.15)_0%,_transparent_50%)]" />
        </>
      }
    >
      <SectionHeader
        eyebrow={eyebrow ?? subtitle}
        title={title}
        subtitle={eyebrow ? subtitle : text}
        dark
        align="center"
        accent="pink"
      />

      {/* Mobile: cartes empilées */}
      <div className="relative mt-12 space-y-4 lg:hidden">
        {steps.map((step) => (
          <article
            key={step.title}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
          >
            <div
              className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stepGradients[step.color]} text-xl font-bold text-white shadow-lg`}
            >
              {step.icon ?? step.step}
            </div>
            <h3 className="text-lg font-bold text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{step.text}</p>
          </article>
        ))}
      </div>

      {/* lg–xl : 3-column grid */}
      <div className="relative mt-16 hidden lg:grid 2xl:hidden grid-cols-3 gap-4">
        <div
          className="pointer-events-none absolute left-0 right-0 top-10 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          aria-hidden
        />
        {steps.map((step) => (
          <StepCard key={step.title} step={step} />
        ))}
      </div>

      {/* 2xl+ : 5-column grid */}
      <div className="relative mt-16 hidden 2xl:grid grid-cols-5 gap-4">
        <div
          className="pointer-events-none absolute left-0 right-0 top-10 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          aria-hidden
        />
        {steps.map((step) => (
          <StepCard key={step.title} step={step} />
        ))}
      </div>

      <div className="mt-12 flex justify-center gap-2" aria-hidden>
        {steps.map((step) => (
          <div
            key={step.step}
            className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${stepGradients[step.color]} opacity-70`}
          />
        ))}
      </div>
    </PageSection>
  );
}
