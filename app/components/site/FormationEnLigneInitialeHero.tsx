import Image from "next/image";
import Button from "./Button";

type FormationEnLigneInitialeHeroProps = {
  badge?: string;
  highlightWord?: string;
  title: string;
  subtitle: string;
  shortText: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  proofs: string[];
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
      <span className="bg-gradient-to-r from-[#f58529] via-[#EE6B6E] to-[#8134af] bg-clip-text text-transparent">
        {highlightWord}
      </span>
      {after}
    </>
  );
}

export default function FormationEnLigneInitialeHero({
  badge,
  highlightWord,
  title,
  subtitle,
  shortText,
  ctaPrimary,
  ctaSecondary,
  proofs,
  modules,
  floatingTags,
}: FormationEnLigneInitialeHeroProps) {
  const completedCount = 2;

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-gradient-to-br from-[#EEF2FF]/40 via-white to-[#fde8e8]/30 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.1)_0%,_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(238,107,110,0.06)_0%,_transparent_50%)]" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          {badge && (
            <span className="inline-flex rounded-full border border-[#6366F1]/25 bg-[#EEF2FF]/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#6366F1]">
              {badge}
            </span>
          )}
          <h1
            className={`text-3xl font-bold leading-tight text-[#0B0B0B] md:text-4xl lg:text-[2.85rem] ${badge ? "mt-5" : ""}`}
          >
            {renderTitle(title, highlightWord)}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#515154] md:text-xl">{subtitle}</p>
          <p className="mt-4 rounded-xl border border-slate-200/60 bg-white/70 px-4 py-3 text-base leading-relaxed text-[#515154] backdrop-blur-sm">
            {shortText}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button href={ctaPrimary.href} variant="parent">
              {ctaPrimary.label}
            </Button>
            <Button href={ctaSecondary.href} variant="parentOutline">
              {ctaSecondary.label}
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
            {proofs.map((proof) => (
              <li key={proof} className="flex items-center gap-2 text-sm text-[#515154]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#6366F1]/10 text-xs text-[#6366F1]">
                  ✓
                </span>
                {proof}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-lg" aria-hidden>
          {floatingTags.map((tag, i) => (
            <span
              key={tag}
              className={`hero-float absolute z-10 max-w-[190px] rounded-2xl border border-white/80 bg-white/95 px-3 py-2 text-xs font-medium text-[#515154] shadow-md ${
                i === 0
                  ? "-left-2 top-2 md:-left-8"
                  : i === 1
                    ? "right-0 top-1/3 md:-right-6"
                    : "bottom-6 left-6"
              }`}
              style={{ animationDelay: `${i * 0.6}s` }}
            >
              {tag}
            </span>
          ))}

          <div className="relative rounded-[32px] border border-[#6366F1]/20 bg-gradient-to-br from-[#EEF2FF] via-white to-[#fde8e8]/40 p-6 shadow-[0_24px_70px_rgba(99,102,241,0.12)] ring-1 ring-[#6366F1]/10 md:p-8">
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border-2 border-white shadow-md">
                <Image
                  src="/eleve-portrait.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-[#515154]">
                  Plateforme
                </p>
                <div className="mt-1 flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-[#0B0B0B]">Parcours en cours</span>
                  <span className="rounded-full bg-[#ecfdf5] px-2.5 py-0.5 text-[10px] font-bold text-[#047857]">
                    {completedCount} / {modules.length} modules
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#6366F1] via-[#EE6B6E] to-[#8134af]"
                style={{ width: `${(completedCount / modules.length) * 100}%` }}
              />
            </div>
            <div className="mt-6 space-y-2.5">
              {modules.map((mod, i) => (
                <div
                  key={mod}
                  className={`flex items-center gap-3 rounded-2xl border px-4 py-3 transition-all duration-300 ${
                    i < completedCount
                      ? "border-[#6366F1]/25 bg-[#EEF2FF]/60 shadow-sm"
                      : "border-slate-200/60 bg-white"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                      i < completedCount
                        ? "bg-gradient-to-br from-[#6366F1] to-[#8134af] text-white shadow-md"
                        : "bg-slate-100 text-[#515154]"
                    }`}
                  >
                    {i < completedCount ? "✓" : i + 1}
                  </span>
                  <span className="text-sm font-semibold text-[#0B0B0B]">{mod}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-xl border border-[#6366F1]/15 bg-white/80 px-4 py-3 text-sm font-medium text-[#6366F1]">
              <span>▶</span> Prochaine leçon : Réviser sans seulement relire
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
