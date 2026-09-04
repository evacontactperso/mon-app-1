import Image from "next/image";
import Button from "./Button";
import {
  HighlightPill,
  SectionTintLayer,
  sectionColorAt,
  sectionTintForColor,
} from "./formation/FormationDesign";

const HERO_COLOR = sectionColorAt("contact", 0);
const HERO_TINT = sectionTintForColor(HERO_COLOR);

type ContactHeroProps = {
  badge?: string;
  title: string;
  subtitle: string;
  shortText: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  microInfos: string[];
  floatingTags: string[];
};

export default function ContactHero({
  badge,
  title,
  subtitle,
  shortText,
  ctaPrimary,
  ctaSecondary,
  microInfos,
  floatingTags,
}: ContactHeroProps) {
  const highlightWord = "orienté";
  const renderTitle = () => {
    if (!title.includes(highlightWord)) return title;
    const [before, after] = title.split(highlightWord);
    return (
      <>
        {before}
        <HighlightPill color={HERO_COLOR}>{highlightWord}</HighlightPill>
        {after}
      </>
    );
  };

  return (
    <section className="relative flex min-h-[90svh] flex-col justify-center overflow-hidden py-16 md:py-20">
      <SectionTintLayer tint={HERO_TINT} />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          {badge && (
            <span className="inline-flex rounded-full border border-[#EE6B6E]/25 bg-[#fde8e8]/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#EE6B6E]">
              {badge}
            </span>
          )}
          <h1
            className={`text-3xl font-extrabold leading-tight text-[#0B0B0B] md:text-4xl lg:text-[2.75rem] ${badge ? "mt-5" : ""}`}
          >
            {renderTitle()}
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
            {microInfos.map((info) => (
              <li key={info} className="flex items-center gap-2 text-sm text-[#515154]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#fde8e8] text-xs text-[#EE6B6E]">
                  ✓
                </span>
                {info}
              </li>
            ))}
          </ul>
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

          <div className="relative rounded-[32px] border border-slate-200/60 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.1)] md:p-8">
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 border-white shadow-md">
                <Image
                  src="/eleve-portrait.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#515154]">
                  Premier échange
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0B0B0B]">
                  Parent &amp; enfant
                </p>
                <span className="mt-2 inline-flex rounded-full bg-[#ecfdf5] px-3 py-1 text-xs font-semibold text-[#047857]">
                  Orientation personnalisée
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 rounded-2xl border border-[#6366F1]/20 bg-[#EEF2FF]/50 px-4 py-3">
                <span className="text-lg">💻</span>
                <div>
                  <p className="text-sm font-semibold text-[#0B0B0B]">En ligne ou présentiel</p>
                  <p className="mt-0.5 text-xs text-[#515154]">Selon l&apos;offre choisie</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-[#EE6B6E]/20 bg-[#fde8e8]/40 px-4 py-3">
                <span className="text-lg">💬</span>
                <div>
                  <p className="text-sm font-semibold text-[#0B0B0B]">Bulle de discussion</p>
                  <p className="mt-0.5 text-xs text-[#515154]">
                    Posez votre question sans engagement
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200/60 bg-[#FAF8F5] px-4 py-3">
                <span className="text-lg">📓</span>
                <div>
                  <p className="text-sm font-semibold text-[#0B0B0B]">Méthode de travail</p>
                  <p className="mt-0.5 text-xs text-[#515154]">
                    Organisation, fiches, révisions…
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
