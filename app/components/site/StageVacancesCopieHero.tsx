import Button from "./Button";
import {
  HighlightPill,
  SectionTintLayer,
  sectionColorAt,
  sectionTintForColor,
} from "./formation/FormationDesign";

const HERO_COLOR = sectionColorAt("stages", 0);
const HERO_TINT = sectionTintForColor(HERO_COLOR);

const stepColors = [
  "border-[#6366F1]/20 bg-[#EEF2FF]/50",
  "border-[#EE6B6E]/20 bg-[#fde8e8]/50",
  "border-[#2ec8dc]/20 bg-[#ddf6f8]/60",
  "border-[#fcaf45]/20 bg-[#fff8e7]/80",
  "border-[#6366F1]/20 bg-[#EEF2FF]/50",
];

type StageVacancesCopieHeroProps = {
  badge?: string;
  highlightWord?: string;
  title: string;
  subtitle: string;
  badges: string[];
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  programSteps: string[];
  maxStudentsLabel: string;
};

function renderTitle(title: string, highlightWord?: string) {
  if (!highlightWord || !title.includes(highlightWord)) {
    return title;
  }
  const [before, after] = title.split(highlightWord);
  return (
    <>
      {before}
      <HighlightPill color={HERO_COLOR}>{highlightWord}</HighlightPill>
      {after}
    </>
  );
}

export default function StageVacancesCopieHero({
  badge,
  highlightWord,
  title,
  subtitle,
  badges,
  ctaPrimary,
  ctaSecondary,
  programSteps,
  maxStudentsLabel,
}: StageVacancesCopieHeroProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <SectionTintLayer tint={HERO_TINT} />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          {badge && (
            <span className="inline-flex rounded-full border border-[#fcaf45]/25 bg-[#fff8e7] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#b45309]">
              {badge}
            </span>
          )}
          <h1
            className={`text-4xl font-extrabold leading-[1.08] text-[#0B0B0B] md:text-5xl lg:text-[3.25rem] ${badge ? "mt-5" : ""}`}
          >
            {renderTitle(title, highlightWord)}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#515154] md:text-xl">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                  b.includes("499")
                    ? "bg-[#fcaf45] text-white"
                    : "border border-slate-200/60 bg-white text-[#515154]"
                }`}
              >
                {b}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={ctaPrimary.href} variant="parent">
              {ctaPrimary.label}
            </Button>
            <Button href={ctaSecondary.href} variant="parentOutline">
              {ctaSecondary.label}
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg" aria-hidden>
          <div className="absolute -right-2 top-0 z-10 rounded-2xl border border-[#EE6B6E]/20 bg-[#EE6B6E] px-4 py-2 text-center text-sm font-bold text-white shadow-md md:-right-6">
            {maxStudentsLabel}
          </div>
          <div className="rounded-[32px] border border-slate-200/60 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.1)] md:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#515154]">
              Exemples de parcours
            </p>
            <div className="mt-6 space-y-3">
              {programSteps.map((step, i) => (
                <div
                  key={step}
                  className={`flex items-center gap-3 rounded-2xl border px-4 py-3 ${stepColors[i % stepColors.length]}`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-bold text-[#0B0B0B] shadow-sm">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold text-[#0B0B0B]">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
