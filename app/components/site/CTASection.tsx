import Button, { type ButtonVariant } from "./Button";
import PageSection, { type SectionSize, type SectionTone } from "./PageSection";
import {
  FormationSectionTitle,
  TintedPageSection,
  cardSurfaceOnTintedBg,
  sectionColorAt,
  type SitePage,
} from "./formation/FormationDesign";

type CTAButton = { label: string; href: string; variant?: ButtonVariant };

type CTASectionProps = {
  title: string;
  text?: string;
  subtitle?: string;
  closing?: string;
  buttons?: CTAButton[];
  button?: { label: string; href: string };
  size?: SectionSize;
  tone?: SectionTone;
  page?: SitePage;
  sectionIndex?: number;
  highlight?: string;
};

export default function CTASection({
  title,
  text,
  subtitle,
  closing,
  buttons,
  button,
  size = "immersive",
  tone = "pink",
  page,
  sectionIndex = 0,
  highlight,
}: CTASectionProps) {
  const allButtons: CTAButton[] =
    buttons ?? (button ? [{ ...button, variant: "school" }] : []);
  const sectionColor = page ? sectionColorAt(page, sectionIndex) : null;

  const inner = (
    <div
      className={
        sectionColor
          ? `${cardSurfaceOnTintedBg("rounded-[34px]")} p-8 text-center md:p-14`
          : "relative overflow-hidden rounded-[34px] bg-white px-8 py-14 text-center md:px-14 md:py-16"
      }
    >
      {!sectionColor && (
        <>
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#fde8e8]/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#EEF2FF]/70 blur-3xl" />
        </>
      )}
      <div className="relative">
        {sectionColor ? (
          <FormationSectionTitle highlight={highlight} pill={sectionColor} className="text-center">
            {title}
          </FormationSectionTitle>
        ) : (
          <h2 className="text-3xl font-bold leading-tight text-[#0B0B0B] md:text-4xl lg:text-[2.75rem]">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-[#0B0B0B] md:text-xl">
            {subtitle}
          </p>
        )}
        {text && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#515154] md:text-lg">
            {text}
          </p>
        )}
        {closing && (
          <p className="mx-auto mt-4 max-w-2xl text-base italic leading-relaxed text-[#515154]">
            {closing}
          </p>
        )}
        {allButtons.length > 0 && (
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            {allButtons.map((btn) => (
              <Button key={btn.label} href={btn.href} variant={btn.variant ?? "school"}>
                {btn.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (sectionColor) {
    return (
      <TintedPageSection
        pillColor={sectionColor}
        size={size}
        innerClassName="mx-auto max-w-4xl px-4 md:px-6"
      >
        {inner}
      </TintedPageSection>
    );
  }

  return (
    <PageSection tone={tone} size={size} innerClassName="mx-auto max-w-4xl px-4 md:px-6">
      <div className="relative rounded-[36px] p-[2px] shadow-[0_24px_80px_rgba(238,107,110,0.15)]">
        <div className="absolute inset-0 rounded-[36px] bg-gradient-to-r from-[#fcaf45] via-[#EE6B6E] to-[#6366F1] opacity-80" />
        {inner}
      </div>
    </PageSection>
  );
}
