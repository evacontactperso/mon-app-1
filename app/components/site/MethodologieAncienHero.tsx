import Image from "next/image";
import Button from "./Button";

const DESK_COLORS = [
  "bg-[#fef3e8] text-[#c2410c] shadow-sm",
  "bg-[#f3e5f5] text-[#6b21a8] shadow-sm",
  "bg-[#fde8e8] text-[#D65558] shadow-sm",
  "bg-[#fff8e7] text-[#b45309] shadow-sm",
  "bg-[#ecfdf5] text-[#047857] shadow-sm",
  "bg-[#EEF2FF] text-[#4338ca] shadow-sm",
];

const DESK_ICONS: Record<string, string> = {
  Agenda: "📅",
  Fiche: "📝",
  Minuteur: "⏱️",
  Ordinateur: "💻",
  "Post-it": "📌",
  Checklist: "✅",
};

type MethodologieAncienHeroProps = {
  badge?: string;
  highlightWord?: string;
  title: string;
  subtitle: string;
  shortText: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  floatingTags: string[];
  deskItems: string[];
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

export default function MethodologieHero({
  badge,
  highlightWord,
  title,
  subtitle,
  shortText,
  ctaPrimary,
  ctaSecondary,
  floatingTags,
  deskItems,
}: MethodologieAncienHeroProps) {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-gradient-to-br from-[#fde8e8]/30 via-white to-[#EEF2FF]/40 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(238,107,110,0.08)_0%,_transparent_55%)]" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          {badge && (
            <span className="inline-flex rounded-full border border-[#EE6B6E]/20 bg-[#fde8e8]/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#EE6B6E]">
              {badge}
            </span>
          )}
          <h1
            className={`text-4xl font-bold leading-tight text-[#0B0B0B] md:text-5xl lg:text-[3.25rem] ${badge ? "mt-5" : ""}`}
          >
            {renderTitle(title, highlightWord)}
          </h1>
          <p className="mt-6 font-body text-lg leading-relaxed text-[#515154] md:text-xl">
            {subtitle}
          </p>
          <p className="mt-4 font-body text-lg leading-relaxed text-[#515154] md:text-xl">
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
        </div>

        <div className="relative mx-auto w-full max-w-lg" aria-hidden>
          {floatingTags.map((tag, i) => (
            <span
              key={tag}
              className={`hero-float absolute z-10 max-w-[180px] rounded-2xl border border-white/80 bg-white/95 px-3 py-2 text-xs font-medium text-[#515154] shadow-md ${
                i === 0
                  ? "-left-2 top-4 md:-left-8"
                  : i === 1
                    ? "right-0 top-1/3 md:-right-6"
                    : "bottom-8 left-8"
              }`}
              style={{ animationDelay: `${i * 0.6}s` }}
            >
              {tag}
            </span>
          ))}

          <div className="relative rounded-[32px] border border-slate-200/60 bg-gradient-to-br from-[#fef3e8] via-white to-[#EEF2FF]/60 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.1)] md:p-8">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border-2 border-white shadow-md">
                <Image
                  src="/eleve-portrait.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-[#515154]">
                  Bureau d&apos;élève
                </p>
                <div className="mt-2 flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-[#0B0B0B]">Méthode en cours</span>
                  <span className="rounded-full bg-[#ecfdf5] px-2 py-0.5 text-[10px] font-bold text-[#047857]">
                    3 / 5
                  </span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-[#6366F1] via-[#EE6B6E] to-[#8134af]" />
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2.5">
              {deskItems.map((item, i) => (
                <div
                  key={item}
                  className={`flex flex-col items-center justify-center rounded-2xl px-2 py-4 text-center transition-transform hover:scale-105 ${DESK_COLORS[i % DESK_COLORS.length]}`}
                >
                  <span className="text-xl">{DESK_ICONS[item] ?? "📎"}</span>
                  <span className="mt-1.5 text-[10px] font-bold leading-tight">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-xl bg-[#ecfdf5] px-4 py-3 text-sm font-medium text-[#047857]">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-xs shadow-sm">
                ✓
              </span>
              Checklist cochée — prêt à travailler
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
