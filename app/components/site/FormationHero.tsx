import Button from "./Button";
import {
  HighlightPill,
  SectionTintLayer,
  sectionColorAt,
  sectionTintForColor,
} from "./formation/FormationDesign";

const HERO_COLOR = sectionColorAt("formation", 0);
const HERO_TINT = sectionTintForColor(HERO_COLOR);

type FormationHeroProps = {
  badge?: string;
  highlightWord?: string;
  title: string;
  subtitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  modules: string[];
  floatingTags: string[];
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

export default function FormationHero({
  badge,
  highlightWord,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  modules,
  floatingTags,
}: FormationHeroProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <SectionTintLayer tint={HERO_TINT} />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          {badge && (
            <span className="inline-flex rounded-full border border-[#EE6B6E]/20 bg-[#fde8e8]/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#EE6B6E]">
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
          {floatingTags.map((tag, i) => (
            <span
              key={tag}
              className={`absolute z-10 max-w-[190px] rounded-2xl border border-white/80 bg-white/95 px-3 py-2 text-xs font-medium text-[#515154] shadow-md ${
                i === 0
                  ? "-left-2 top-2 md:-left-8"
                  : i === 1
                    ? "right-0 top-1/3 md:-right-6"
                    : "bottom-6 left-6"
              }`}
            >
              {tag}
            </span>
          ))}

          <div className="relative rounded-[32px] border border-slate-200/60 bg-gradient-to-br from-[#EEF2FF] via-white to-[#fde8e8]/40 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.1)] md:p-8">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-widest text-[#515154]">
                Plateforme
              </p>
              <span className="rounded-full bg-[#ecfdf5] px-3 py-1 text-xs font-semibold text-[#047857]">
                2 / 4 modules
              </span>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-[#6366F1] via-[#EE6B6E] to-[#2ec8dc]" />
            </div>
            <div className="mt-6 space-y-3">
              {modules.map((mod, i) => (
                <div
                  key={mod}
                  className={`flex items-center gap-3 rounded-2xl border px-4 py-3 ${
                    i < 2
                      ? "border-[#6366F1]/20 bg-[#EEF2FF]/50"
                      : "border-slate-200/60 bg-white"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                      i < 2 ? "bg-[#6366F1] text-white" : "bg-slate-100 text-[#515154]"
                    }`}
                  >
                    {i < 2 ? "✓" : i + 1}
                  </span>
                  <span className="text-sm font-semibold text-[#0B0B0B]">{mod}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
