import Button from "./Button";
import PageSection, { type SectionTone } from "./PageSection";
import SectionHeader, { SectionSubtitle } from "./SectionHeader";

export function WhyVacancesSection({
  eyebrow,
  title,
  subtitle,
  cards,
  tone = "alt",
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  cards: { title: string; text: string }[];
  tone?: SectionTone;
}) {
  return (
    <PageSection tone={tone}>
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align="center" accent="warm" />
      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {cards.map((card, i) => (
          <article
            key={card.title}
            className="flex gap-5 rounded-[28px] border border-slate-200/60 bg-white p-6 shadow-sm"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fef3e8] to-[#fde8e8] text-lg font-bold text-[#c2410c]">
              {i + 1}
            </span>
            <div>
              <h3 className="text-lg font-bold text-[#0B0B0B]">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#515154]">{card.text}</p>
            </div>
          </article>
        ))}
      </div>
    </PageSection>
  );
}

export function StageFormatOverviewSection({
  eyebrow,
  title,
  subtitle,
  stats,
  tone = "indigo",
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  stats: { value: string; label: string; detail: string }[];
  tone?: SectionTone;
}) {
  return (
    <PageSection tone={tone}>
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align="center" accent="indigo" />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-[28px] border border-white/60 bg-white/90 p-6 text-center shadow-sm"
          >
            <p className="text-3xl font-extrabold font-heading text-[#6366F1] md:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm font-bold uppercase tracking-wide text-[#0B0B0B]">
              {stat.label}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[#515154]">{stat.detail}</p>
          </article>
        ))}
      </div>
    </PageSection>
  );
}

export function StageDifferentSection({
  eyebrow,
  title,
  subtitle,
  cards,
  tone = "indigo",
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  cards: { title: string; text: string }[];
  tone?: SectionTone;
}) {
  return (
    <PageSection tone={tone}>
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align="center" accent="purple" />
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => (
          <div key={card.title}>
            <p className="text-sm font-bold text-[#6366F1]">0{i + 1}</p>
            <h3 className="mt-2 text-base font-bold leading-snug text-[#0B0B0B]">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#515154]">{card.text}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
}

export function StageSessionFlowSection({
  eyebrow,
  title,
  subtitle,
  phases,
  closing,
  tone = "purple",
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  phases: { time: string; title: string; text: string }[];
  closing: string;
  tone?: SectionTone;
}) {
  return (
    <PageSection tone={tone}>
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align="center" accent="purple" />
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {phases.map((phase, i) => (
          <article key={phase.time} className="relative">
            <span className="inline-flex rounded-full bg-gradient-to-r from-[#8134af] to-[#6366F1] px-3 py-1 text-xs font-bold text-white">
              {phase.time}
            </span>
            <h3 className="mt-4 font-bold text-[#0B0B0B]">{phase.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#515154]">{phase.text}</p>
            {i < phases.length - 1 && (
              <span
                className="absolute -right-2 top-8 hidden text-[#8134af] lg:block"
                aria-hidden
              >
                →
              </span>
            )}
          </article>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-[#515154]">
        {closing}
      </p>
    </PageSection>
  );
}

type StageAxis = {
  number: number;
  title: string;
  objective: string;
  highlights: string[];
  deliverable: string;
};

export function StageAxesSection({
  eyebrow,
  title,
  subtitle,
  note,
  axes,
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  note: string;
  axes: StageAxis[];
  tone?: SectionTone;
}) {
  return (
    <PageSection
      tone={tone}
      overlay={
        <>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,133,41,0.12)_0%,_transparent_50%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(99,102,241,0.1)_0%,_transparent_50%)]" />
        </>
      }
    >
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        dark
        align="center"
        accent="warm"
      />
      <p className="mx-auto mt-6 max-w-2xl text-center text-sm font-medium text-white/70">{note}</p>
      <div className="relative mt-12 -mx-4 flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory md:mx-0 md:grid md:grid-cols-5 md:overflow-visible md:px-0 md:pb-0">
        {axes.map((axis) => (
          <article
            key={axis.number}
            className="flex min-w-[240px] snap-center flex-col rounded-[24px] border border-white/15 bg-white/10 p-5 backdrop-blur-sm md:min-w-0"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#f58529] to-[#EE6B6E] text-sm font-bold text-white">
              {axis.number}
            </span>
            <h3 className="mt-4 text-base font-bold leading-snug text-white">{axis.title}</h3>
            <p className="mt-2 text-sm text-white/70">{axis.objective}</p>
            <ul className="mt-4 flex-1 space-y-1.5">
              {axis.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-white/80">
                  <span className="text-[#f58529]">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/90">
              {axis.deliverable}
            </p>
          </article>
        ))}
      </div>
    </PageSection>
  );
}

export function StageDeliverablesSection({
  eyebrow,
  title,
  subtitle,
  groups,
  tone = "warm",
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  groups: { label: string; items: string[] }[];
  tone?: SectionTone;
}) {
  return (
    <PageSection
      tone={tone}
      overlay={
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#f58529] via-[#EE6B6E] to-[#8134af]" />
      }
    >
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align="center" accent="warm" />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {groups.map((group, i) => (
          <div
            key={group.label}
            className={`rounded-[28px] p-6 ${
              i === 1
                ? "border border-[#8134af]/20 bg-gradient-to-br from-[#f3e5f5]/40 to-white"
                : "border border-slate-200/60 bg-white"
            }`}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-[#515154]">{group.label}</p>
            <ul className="mt-4 space-y-3">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#0B0B0B]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#f58529] to-[#EE6B6E]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageSection>
  );
}

export function SmallGroupSection({
  eyebrow,
  title,
  points,
  closing,
  tone = "pink",
}: {
  eyebrow?: string;
  title: string;
  points: { title: string; text: string }[];
  closing: string;
  tone?: SectionTone;
}) {
  return (
    <PageSection tone={tone}>
      <SectionHeader eyebrow={eyebrow} title={title} align="center" accent="pink" />
      <div className="mx-auto mt-14 max-w-3xl rounded-[32px] border border-[#EE6B6E]/20 bg-gradient-to-br from-[#fde8e8]/40 via-white to-[#EEF2FF]/40 p-8 shadow-[0_20px_60px_rgba(238,107,110,0.1)] md:p-10">
        <div className="space-y-6">
          {points.map((point, i) => (
            <div key={point.title} className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EE6B6E] text-sm font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="font-bold text-[#0B0B0B]">{point.title}</h3>
                <p className="mt-1 text-sm text-[#515154]">{point.text}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-lg font-bold text-[#EE6B6E]">{closing}</p>
      </div>
    </PageSection>
  );
}

export function StagePricingSection({
  id,
  eyebrow,
  title,
  price,
  subtitle,
  includes,
  badge,
  microText,
  ctaPrimary,
  ctaSecondary,
  tone = "warm",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  price: string;
  subtitle: string;
  includes: string[];
  badge: string;
  microText: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  tone?: SectionTone;
}) {
  return (
    <PageSection id={id} tone={tone}>
      <SectionHeader eyebrow={eyebrow} title={title} align="center" accent="warm" />
      <div className="mx-auto mt-14 max-w-2xl">
        <div className="relative rounded-[36px] border border-[#EE6B6E]/25 bg-white p-8 shadow-[0_24px_80px_rgba(238,107,110,0.12)] md:p-10">
          <span className="absolute -top-3 right-6 rounded-full bg-[#EE6B6E] px-3 py-1 text-xs font-bold text-white">
            {badge}
          </span>
          <p className="text-sm font-semibold text-[#6366F1]">{subtitle}</p>
          <p className="mt-2 text-4xl font-extrabold font-heading text-[#0B0B0B]">{price}</p>
          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#515154]">
            Inclus
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#0B0B0B]">
                <span className="text-[#EE6B6E]">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href={ctaPrimary.href} variant="parent">
              {ctaPrimary.label}
            </Button>
            <Button href={ctaSecondary.href} variant="parentOutline">
              {ctaSecondary.label}
            </Button>
          </div>
          <p className="mt-6 text-center text-xs leading-relaxed text-[#515154]">{microText}</p>
        </div>
      </div>
    </PageSection>
  );
}

export function StageContactSection({
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,133,41,0.06)_0%,_transparent_70%)]" />
      }
    >
      <h2 className="text-3xl font-bold leading-tight text-[#0B0B0B] md:text-4xl">{title}</h2>
      <SectionSubtitle align="center">{subtitle}</SectionSubtitle>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button href={ctaPrimary.href} variant="parent">
          {ctaPrimary.label}
        </Button>
        <Button href={ctaSecondary.href} variant="parentOutline">
          {ctaSecondary.label}
        </Button>
      </div>
      {footnote && (
        <p className="mt-6 text-sm text-[#515154]">{footnote}</p>
      )}
    </PageSection>
  );
}
