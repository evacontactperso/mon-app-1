import Button from "./Button";
import {
  HighlightPill,
  SectionTintLayer,
  sectionColorAt,
  sectionTintForColor,
} from "./formation/FormationDesign";

const HERO_COLOR = sectionColorAt("cours", 0);
const HERO_TINT = sectionTintForColor(HERO_COLOR);

type CoursHebdomadairesHeroProps = {
  title: string;
  highlightWord?: string;
  subtitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
};

function renderTitle(title: string, highlightWord?: string) {
  if (!highlightWord || !title.includes(highlightWord)) return title;
  const [before, after] = title.split(highlightWord);
  return (
    <>
      {before}
      <HighlightPill color={HERO_COLOR}>{highlightWord}</HighlightPill>
      {after}
    </>
  );
}

export default function CoursHebdomadairesHero({
  title,
  highlightWord,
  subtitle,
  ctaPrimary,
  ctaSecondary,
}: CoursHebdomadairesHeroProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <SectionTintLayer tint={HERO_TINT} />
      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        <h1 className="text-3xl font-extrabold leading-tight text-[#0B0B0B] md:text-4xl lg:text-[2.75rem]">
          {renderTitle(title, highlightWord)}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#515154] md:text-base">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href={ctaPrimary.href} variant="parent">
            {ctaPrimary.label}
          </Button>
          <Button href={ctaSecondary.href} variant="parentOutline">
            {ctaSecondary.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
