import Button from "./Button";

const stepColors = [
  "border-[#6366F1]/25 bg-[#EEF2FF]/80",
  "border-[#EE6B6E]/25 bg-[#fde8e8]/60",
  "border-[#8134af]/25 bg-[#f3e5f5]/60",
  "border-[#f58529]/25 bg-[#fef3e8]/80",
  "border-[#047857]/25 bg-[#ecfdf5]/80",
];

type StageVacancesAncienHeroProps = {
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
      <span className="bg-gradient-to-r from-[#f58529] via-[#EE6B6E] to-[#8134af] bg-clip-text text-transparent">
        {highlightWord}
      </span>
      {after}
    </>
  );
}

export default function StageVacancesAncienHero({
  badge,
  highlightWord,
  title,
  subtitle,
  badges,
  ctaPrimary,
  ctaSecondary,
  programSteps,
  maxStudentsLabel,
}: StageVacancesAncienHeroProps) {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-gradient-to-br from-[#fef3e8]/40 via-white to-[#EEF2FF]/30 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,133,41,0.08)_0%,_transparent_55%)]" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          {badge && (
            <span className="inline-flex rounded-full border border-[#f58529]/25 bg-[#fef3e8]/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#c2410c]">
              {badge}
            </span>
          )}
          <h1
            className={`text-3xl font-bold leading-tight text-[#0B0B0B] md:text-4xl lg:text-[2.75rem] ${badge ? "mt-8" : ""}`}
          >
            {renderTitle(title, highlightWord)}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#515154] md:text-xl">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                  b.includes("499")
                    ? "bg-gradient-to-r from-[#f58529] via-[#EE6B6E] to-[#8134af] text-white shadow-md"
                    : "border border-slate-200/60 bg-white text-[#515154]"
                }`}
              >
                {b}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button href={ctaPrimary.href} variant="parent">
              {ctaPrimary.label}
            </Button>
            <Button href={ctaSecondary.href} variant="parentOutline">
              {ctaSecondary.label}
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg" aria-hidden>
          <div className="absolute -right-2 top-0 z-10 rounded-2xl border border-[#EE6B6E]/30 bg-[#EE6B6E] px-4 py-2 text-center text-sm font-bold text-white shadow-lg md:-right-6">
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
