import Button from "./Button";
import {
  HighlightPill,
  SectionTintLayer,
  sectionColorAt,
  sectionTintForColor,
} from "./formation/FormationDesign";

const HERO_COLOR = sectionColorAt("cours", 0);
const HERO_TINT = sectionTintForColor(HERO_COLOR);

const colorMap = {
  indigo: "border-[#6366F1]/25 bg-[#EEF2FF]/80",
  pink: "border-[#EE6B6E]/25 bg-[#fde8e8]/60",
  blue: "border-[#2ec8dc]/25 bg-[#ddf6f8]/60",
  yellow: "border-[#fcaf45]/25 bg-[#fff8e7]/80",
  green: "border-[#047857]/25 bg-[#ecfdf5]/80",
};

type CalendarSession = {
  day: string;
  title: string;
  color: "indigo" | "pink" | "blue" | "yellow" | "green" | "purple" | "orange";
};

type CoursHebdomadairesCopieHeroProps = {
  badge?: string;
  highlightWord?: string;
  title: string;
  subtitle: string;
  shortText: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  proofs: string[];
  calendarSessions: CalendarSession[];
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

export default function CoursHebdomadairesCopieHero({
  badge,
  highlightWord,
  title,
  subtitle,
  shortText,
  ctaPrimary,
  ctaSecondary,
  proofs,
  calendarSessions,
}: CoursHebdomadairesCopieHeroProps) {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden py-16 md:py-20">
      <SectionTintLayer tint={HERO_TINT} />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          {badge && (
            <span className="inline-flex rounded-full border border-[#2ec8dc]/25 bg-[#ddf6f8]/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0891b2]">
              {badge}
            </span>
          )}
          <h1
            className={`text-3xl font-extrabold leading-tight text-[#0B0B0B] md:text-4xl lg:text-[2.75rem] ${badge ? "mt-5" : ""}`}
          >
            {renderTitle(title, highlightWord)}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#515154] md:text-xl">{subtitle}</p>
          <p className={`mt-4 rounded-xl border px-4 py-3 text-base leading-relaxed text-[#515154] ${colorMap.blue}`}>
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
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2ec8dc]/10 text-xs text-[#0891b2]">
                  ✓
                </span>
                {proof}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-lg" aria-hidden>
          <div className="rounded-[32px] border border-slate-200/60 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.1)] md:p-8">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-widest text-[#515154]">
                Semaine type
              </p>
              <span className="rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#6366F1]">
                Inscription flexible
              </span>
            </div>
            <div className="mt-6 space-y-3">
              {calendarSessions.map((session, i) => {
                const palette = [
                  colorMap.indigo,
                  colorMap.pink,
                  colorMap.blue,
                  colorMap.yellow,
                  colorMap.green,
                ];
                const legacyMap: Record<string, keyof typeof colorMap> = {
                  purple: "blue",
                  orange: "yellow",
                };
                const key = legacyMap[session.color] ?? session.color;
                const rowClass =
                  key in colorMap
                    ? colorMap[key as keyof typeof colorMap]
                    : palette[i % palette.length];
                return (
                  <div
                    key={session.day}
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3 ${rowClass}`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xs font-bold text-[#0B0B0B] shadow-sm">
                      {session.day}
                    </span>
                    <span className="text-sm font-semibold text-[#0B0B0B]">{session.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
