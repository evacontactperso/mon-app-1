import Button from "./Button";
import { CoralPill, MODULE_SQUARES, PASTEL_BLOCKS } from "./formation/FormationDesignLift";

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
      <CoralPill>{highlightWord}</CoralPill>
      {after}
    </>
  );
}

export default function FormationEnLigneAncienHero({
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
    <section className="relative overflow-hidden bg-[#FAF8F5] py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          {badge && (
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8E8E93]">
              {badge}
            </span>
          )}
          <h1
            className={`text-4xl font-extrabold leading-[1.08] text-[#1a1f4e] md:text-5xl lg:text-[3.25rem] ${badge ? "mt-4" : ""}`}
          >
            {renderTitle(title, highlightWord)}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#515154] md:text-xl">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {floatingTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#1a1f4e]/15 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#1a1f4e]"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={ctaPrimary.href} variant="parent">
              {ctaPrimary.label} →
            </Button>
            <Button href={ctaSecondary.href} variant="parentOutline">
              {ctaSecondary.label}
            </Button>
          </div>
        </div>

        {/* Bento parcours — inspiré Lift / Altera */}
        <div className="grid grid-cols-2 gap-3" aria-hidden>
          <div className="col-span-2 overflow-hidden rounded-[28px] bg-[#FF5C5C] p-6 text-white md:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-white/80">
              Votre parcours
            </p>
            <p className="mt-2 text-2xl font-extrabold leading-tight md:text-3xl">
              4 modules pour travailler avec méthode
            </p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/25">
              <div className="h-full w-1/2 rounded-full bg-white" />
            </div>
            <p className="mt-2 text-sm font-semibold text-white/90">2 / 4 complétés</p>
          </div>

          {modules.map((mod, i) => {
            const square = MODULE_SQUARES[i % MODULE_SQUARES.length];
            const pastel = PASTEL_BLOCKS[i % PASTEL_BLOCKS.length];
            return (
              <div
                key={mod}
                className={`flex flex-col justify-between rounded-[24px] p-4 ${i < 2 ? pastel : "bg-white"} ${i === 3 ? "col-span-2 flex-row items-center gap-4" : ""}`}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-extrabold font-heading text-white ${square.bg}`}
                >
                  {i < 2 ? "✓" : `0${i + 1}`}
                </span>
                <p className={`mt-3 font-bold leading-snug text-[#1a1f4e] ${i === 3 ? "mt-0 flex-1" : ""}`}>
                  {mod}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
