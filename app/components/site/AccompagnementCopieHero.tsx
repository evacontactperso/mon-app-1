import Image from "next/image";
import Button from "./Button";
import {
  HighlightPill,
  SectionTintLayer,
  sectionColorAt,
  sectionTintForColor,
} from "./formation/FormationDesign";

const HERO_COLOR = sectionColorAt("accompagnement", 0);
const HERO_TINT = sectionTintForColor(HERO_COLOR);

type VisualItem = { icon: string; title: string; text: string };

type AccompagnementCopieHeroProps = {
  badge?: string;
  title: string;
  subtitle: string;
  shortText: string;
  bilanHighlight: { title: string; text: string };
  badges: string[];
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  visualItems: VisualItem[];
};

export default function AccompagnementCopieHero({
  badge,
  title,
  subtitle,
  shortText,
  bilanHighlight,
  badges,
  ctaPrimary,
  ctaSecondary,
  visualItems,
}: AccompagnementCopieHeroProps) {
  const highlightWord = "personnalisé";
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
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden py-16 md:py-20">
      <SectionTintLayer tint={HERO_TINT} />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          {badge && (
            <span className="inline-flex rounded-full border border-[#fcaf45]/25 bg-[#fff8e7]/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#b45309]">
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

          <div className="mt-6 rounded-2xl border border-[#fcaf45]/25 bg-[#fff8e7]/60 p-5">
            <h2 className="text-lg font-bold text-[#b45309]">{bilanHighlight.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#515154]">{bilanHighlight.text}</p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button href={ctaPrimary.href} variant="parent">
              {ctaPrimary.label}
            </Button>
            <Button href={ctaSecondary.href} variant="parentOutline">
              {ctaSecondary.label}
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-slate-200/60 bg-white px-3 py-1.5 text-xs font-bold text-[#515154]"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg" aria-hidden>
          <div className="relative rounded-[32px] border border-slate-200/60 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.1)] md:p-8">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border-2 border-white shadow-md">
                <Image
                  src="/eleve-portrait.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#b45309]">
                  Séance individuelle
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0B0B0B]">1h par semaine</p>
                <span className="mt-2 inline-flex rounded-full bg-[#ecfdf5] px-3 py-1 text-xs font-semibold text-[#047857]">
                  Sur mesure
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-2.5">
              {visualItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200/50 bg-[#FAF8F5] px-4 py-3"
                >
                  <span className="text-lg">{item.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-[#0B0B0B]">{item.title}</p>
                    <p className="mt-0.5 text-xs text-[#515154]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
