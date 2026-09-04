import Button from "./Button";
import { SectionSubtitle } from "./SectionHeader";
import {
  FormationEyebrow,
  FormationSectionTitle,
  SECTION_ACCENT_BG,
  SECTION_ACCENT_SOFT,
  TintedPageSection,
  cardSurfaceOnTintedBg,
  sectionColorAt,
  type SitePage,
} from "./formation/FormationDesign";

const PAGE: SitePage = "accompagnement";
const color = (i: number) => sectionColorAt(PAGE, i);

function SectionHeader({
  sectionIndex,
  eyebrow,
  title,
  subtitle,
  highlight,
}: {
  sectionIndex: number;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  highlight?: string;
}) {
  const sectionColor = color(sectionIndex);
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <FormationEyebrow>{eyebrow}</FormationEyebrow>}
      <div className="mt-4">
        <FormationSectionTitle highlight={highlight} pill={sectionColor}>
          {title}
        </FormationSectionTitle>
      </div>
      {subtitle && (
        <SectionSubtitle align="center" className="mt-5">
          {subtitle}
        </SectionSubtitle>
      )}
    </div>
  );
}

export function BilanHighlightSection({
  eyebrow,
  title,
  text,
  duringTitle,
  duringItems,
  afterTitle,
  afterItems,
  closing,
  cta,
}: {
  eyebrow?: string;
  title: string;
  text: string;
  duringTitle: string;
  duringItems: string[];
  afterTitle: string;
  afterItems: string[];
  closing: string;
  cta: { label: string; href: string };
}) {
  const sectionColor = color(2);

  return (
    <TintedPageSection pillColor={sectionColor}>
      <SectionHeader sectionIndex={2} eyebrow={eyebrow} title={title} highlight="bilan" />
      <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-[#515154] md:text-lg">
        {text}
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className={`p-6 ${cardSurfaceOnTintedBg("rounded-2xl")}`}>
          <div className="flex items-center gap-3">
            <span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-2xl text-white ${SECTION_ACCENT_BG[sectionColor]}`}>
              🔍
            </span>
            <h3 className="text-lg font-bold text-[#0B0B0B]">{duringTitle}</h3>
          </div>
          <ul className="mt-5 space-y-2">
            {duringItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#515154]">
                <span className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${SECTION_ACCENT_BG[sectionColor]}`} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={`p-6 ${cardSurfaceOnTintedBg("rounded-2xl")}`}>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6366F1] text-2xl text-white">
              📋
            </span>
            <h3 className="text-lg font-bold text-[#0B0B0B]">{afterTitle}</h3>
          </div>
          <ul className="mt-5 space-y-2">
            {afterItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#515154]">
                <span className="mt-0.5 text-[#6366F1]">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-bold text-[#0B0B0B]">
        {closing}
      </p>
      <div className="mt-8 flex justify-center">
        <Button href={cta.href} variant="parent">
          {cta.label}
        </Button>
      </div>
    </TintedPageSection>
  );
}

export function AccompagnementExamplesSection({
  eyebrow,
  title,
  items,
}: {
  eyebrow?: string;
  title: string;
  items: { title: string; steps: string[]; idealFor: string }[];
}) {
  const sectionColor = color(5);

  return (
    <TintedPageSection pillColor={sectionColor}>
      <SectionHeader sectionIndex={5} eyebrow={eyebrow} title={title} highlight="accompagnement" />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {items.map((item, i) => (
          <article key={item.title} className={`flex flex-col p-6 ${cardSurfaceOnTintedBg()}`}>
            <span className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-white ${SECTION_ACCENT_BG[sectionColor]}`}>
              {i + 1}
            </span>
            <h3 className="mt-4 font-bold leading-snug text-[#0B0B0B]">{item.title}</h3>
            <ul className="mt-4 flex-1 space-y-2">
              {item.steps.map((step) => (
                <li key={step} className="text-sm leading-relaxed text-[#515154]">
                  <span className="font-semibold text-[#6366F1]">•</span> {step}
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl border border-[#EE6B6E]/15 bg-[#fde8e8]/40 px-4 py-3">
              <p className="text-xs font-bold uppercase tracking-widest text-[#EE6B6E]">
                Idéal pour
              </p>
              <p className="mt-1 text-sm text-[#515154]">{item.idealFor}</p>
            </div>
          </article>
        ))}
      </div>
    </TintedPageSection>
  );
}

type PackPlan = {
  title: string;
  price: string;
  pricePerHour: string;
  purpose: string;
  idealFor: string[];
  includes: string[];
  cta: { label: string; href: string };
  badge?: string;
};

export function AccompagnementPacksSection({
  id,
  eyebrow,
  title,
  subtitle,
  plans,
  bilanCallout,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  plans: PackPlan[];
  bilanCallout: { title: string; text: string };
}) {
  const sectionColor = color(10);

  return (
    <TintedPageSection id={id} pillColor={sectionColor}>
      <SectionHeader sectionIndex={10} eyebrow={eyebrow} title={title} subtitle={subtitle} highlight="packs" />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <article
            key={plan.title}
            className={`relative flex flex-col p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)] ${
              plan.badge
                ? "border-[#6366F1]/20 bg-white ring-2 ring-[#6366F1]/10"
                : cardSurfaceOnTintedBg()
            }`}
          >
            {plan.badge && (
              <span className={`absolute -top-3 right-6 rounded-full px-3 py-1 text-xs font-bold text-white ${SECTION_ACCENT_BG[sectionColor]}`}>
                {plan.badge}
              </span>
            )}
            <h3 className="text-xl font-bold text-[#0B0B0B]">{plan.title}</h3>
            <p className="mt-2 text-3xl font-extrabold font-heading text-[#6366F1]">{plan.price}</p>
            <p className="mt-1 text-sm font-semibold text-[#515154]">{plan.pricePerHour}</p>
            <p className="mt-4 text-sm leading-relaxed text-[#515154]">
              <span className="font-bold text-[#0B0B0B]">Pour quoi faire ? </span>
              {plan.purpose}
            </p>
            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#515154]">
              Idéal pour
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {plan.idealFor.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#0B0B0B]">
                  <span className="text-[#EE6B6E]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#515154]">
              Inclus
            </p>
            <ul className="mt-3 flex flex-1 flex-col gap-2">
              {plan.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#0B0B0B]">
                  <span className="text-[#6366F1]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={plan.cta.href} variant="parent">
                {plan.cta.label}
              </Button>
            </div>
          </article>
        ))}
      </div>
      <div className={`mx-auto mt-10 max-w-2xl p-8 text-center ${cardSurfaceOnTintedBg()}`}>
        <h3 className="text-lg font-bold text-[#0B0B0B]">{bilanCallout.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[#515154]">{bilanCallout.text}</p>
      </div>
    </TintedPageSection>
  );
}

export function AccompagnementPackCompareSection({
  eyebrow,
  title,
  options,
  closing,
}: {
  eyebrow?: string;
  title: string;
  options: { title: string; items: string[] }[];
  closing: string;
}) {
  const sectionColor = color(11);

  return (
    <TintedPageSection pillColor={sectionColor}>
      <SectionHeader sectionIndex={11} eyebrow={eyebrow} title={title} highlight="pack" />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {options.map((opt) => (
          <article key={opt.title} className={`p-8 ${cardSurfaceOnTintedBg()}`}>
            <h3 className="text-xl font-bold text-[#0B0B0B]">{opt.title}</h3>
            <ul className="mt-6 space-y-3">
              {opt.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#515154]">
                  <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white ${SECTION_ACCENT_BG[sectionColor]}`}>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-bold text-[#0B0B0B]">
        {closing}
      </p>
    </TintedPageSection>
  );
}

export function StudentBringsSection({
  eyebrow,
  title,
  subtitle,
  items,
  callout,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  items: string[];
  callout: string;
}) {
  const sectionColor = color(6);

  return (
    <TintedPageSection pillColor={sectionColor}>
      <SectionHeader sectionIndex={6} eyebrow={eyebrow} title={title} subtitle={subtitle} highlight="outils" />
      <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item}
            className={`flex items-start gap-3 px-4 py-3.5 ${cardSurfaceOnTintedBg("rounded-2xl")}`}
          >
            <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white ${SECTION_ACCENT_BG[sectionColor]}`}>
              ✓
            </span>
            <span className="text-sm text-[#0B0B0B]">{item}</span>
          </div>
        ))}
      </div>
      <p className={`mx-auto mt-10 max-w-2xl p-6 text-center text-sm leading-relaxed text-[#515154] ${cardSurfaceOnTintedBg()}`}>
        {callout}
      </p>
    </TintedPageSection>
  );
}
