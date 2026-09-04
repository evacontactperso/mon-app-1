import Button from "./Button";
import {
  HighlightPill,
  SectionTintLayer,
  sectionColorAt,
  sectionTintForColor,
} from "./formation/FormationDesign";

const HERO_COLOR = sectionColorAt("stages", 0);
const HERO_TINT = sectionTintForColor(HERO_COLOR);

type StageVacancesHeroProps = {
  title: string;
  subtitle: string;
  text: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
};

function renderTitle(title: string) {
  const highlightWord = "Une semaine";
  if (!title.includes(highlightWord)) return title;
  const index = title.indexOf(highlightWord);
  return (
    <>
      {title.slice(0, index)}
      <HighlightPill color={HERO_COLOR}>{highlightWord}</HighlightPill>
      {title.slice(index + highlightWord.length)}
    </>
  );
}

export default function StageVacancesHero({
  title,
  subtitle,
  text,
  ctaPrimary,
  ctaSecondary,
}: StageVacancesHeroProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <SectionTintLayer tint={HERO_TINT} />
      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        <h1 className="text-4xl font-extrabold leading-[1.08] text-[#0B0B0B] md:text-5xl lg:text-[3.25rem]">
          {renderTitle(title)}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[#515154] md:text-xl">{subtitle}</p>
        <p className="mt-4 text-base leading-relaxed text-[#515154] md:text-lg">{text}</p>
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
