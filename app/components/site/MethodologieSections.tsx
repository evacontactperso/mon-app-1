import Button from "./Button";
import PageSection, { type SectionSize } from "./PageSection";
import SectionHeader from "./SectionHeader";
import {
  FormationSectionTitle,
  IndigoPill,
  PinkPill,
  BluePill,
  YellowPill,
  SECTION_ACCENT_BG,
  TintedPageSection,
  cardSurfaceOnTintedBg,
  sectionColorAt,
  type BrandSectionColor,
  type SectionColor,
  type SitePage,
} from "./formation/FormationDesign";

/* ── Section 1 : Manifesto ── */

const MANIFESTO_ACCENT: Record<BrandSectionColor, string> = {
  pink: "#EE6B6E",
  indigo: "#6366F1",
  blue: "#2ec8dc",
  yellow: "#fcaf45",
  purple: "#8134af",
  red: "#f26e6e",
};

type MethodologieManifestoSectionProps = {
  title: string;
  highlightWord?: string;
  paragraphs: string[];
  size?: SectionSize;
  page?: SitePage;
  sectionIndex?: number;
  themeColor?: BrandSectionColor;
  /** Affiche uniquement le texte, sans titre */
  hideTitle?: boolean;
  eyebrow?: string;
};

function renderParagraphWithBold(text: string, accentColor: string) {
  const parts = text.split(/(\*[^*]+\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <strong key={index} className="font-extrabold" style={{ color: accentColor }}>
          {part.slice(1, -1)}
        </strong>
      );
    }

    return part;
  });
}

export function MethodologieManifestoSection({
  title,
  highlightWord,
  paragraphs,
  size = "comfortable",
  page,
  sectionIndex = 0,
  themeColor,
  hideTitle = false,
  eyebrow,
}: MethodologieManifestoSectionProps) {
  const sectionColor =
    themeColor ?? (page ? sectionColorAt(page, sectionIndex) : null);
  const accent = MANIFESTO_ACCENT[sectionColor ?? "indigo"];

  const content = (
    <>
      {!hideTitle ? (
        <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center text-center">
          {eyebrow ? (
            <p
              className="mb-5 inline-block rounded-md border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] md:text-xs"
              style={{ borderColor: accent, color: accent }}
            >
              {eyebrow}
            </p>
          ) : null}
          <div className="w-full">
            <h2 className="text-center text-3xl font-extrabold leading-[1.15] tracking-tight text-[#0B0B0B] md:text-4xl lg:text-[2.75rem]">
              <span className="block">Ma conviction est simple :</span>
              <span className="mt-1 block">
                étudier, ça{" "}
                {sectionColor === "pink" ? (
                  <PinkPill>{highlightWord ?? "s'apprend"}</PinkPill>
                ) : sectionColor === "blue" ? (
                  <BluePill>{highlightWord ?? "s'apprend"}</BluePill>
                ) : sectionColor === "yellow" ? (
                  <YellowPill>{highlightWord ?? "s'apprend"}</YellowPill>
                ) : (
                  <IndigoPill>{highlightWord ?? "s'apprend"}</IndigoPill>
                )}
              </span>
            </h2>
          </div>
        </div>
      ) : null}
      <div
        className={`space-y-6 font-body text-base leading-[1.85] text-[#515154] md:text-lg md:leading-[1.9] ${
          hideTitle ? "" : "mt-2"
        }`}
      >
        {paragraphs.map((p) => (
          <p key={p.slice(0, 40)}>{renderParagraphWithBold(p, accent)}</p>
        ))}
      </div>
    </>
  );

  if (sectionColor) {
    return (
      <TintedPageSection
        pillColor={sectionColor}
        size={size}
        innerClassName="mx-auto max-w-5xl px-4 md:px-5"
      >
        {content}
      </TintedPageSection>
    );
  }

  return (
    <PageSection tone="white" size={size} innerClassName="mx-auto max-w-5xl px-4 md:px-5">
      {content}
    </PageSection>
  );
}

/* ── Section 4 : Atelier (fond noir) ── */

type PromiseCard = { icon?: string; title: string; highlight?: string; text: string };

function renderPromiseTitle(title: string, highlight: string | undefined) {
  if (!highlight || !title.includes(highlight)) {
    return title;
  }

  const [before, after] = title.split(highlight);

  return (
    <>
      {before}
      <span className="box-decoration-clone rounded-md bg-white px-1.5 py-0.5 font-semibold text-[#0B0B0B]">
        {highlight}
      </span>
      {after}
    </>
  );
}

type MethodologieAtelierSectionProps = {
  title: string;
  subtitle: string;
  promises: PromiseCard[];
  size?: SectionSize;
};

export function MethodologieAtelierSection({
  title,
  subtitle,
  promises,
  size = "comfortable",
}: MethodologieAtelierSectionProps) {
  return (
    <PageSection
      tone="dark"
      size={size}
      innerClassName="mx-auto max-w-6xl px-4 md:px-6"
      overlay={
        <>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(238,107,110,0.15)_0%,_transparent_50%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(99,102,241,0.12)_0%,_transparent_50%)]" />
        </>
      }
    >
      <SectionHeader title={title} subtitle={subtitle} dark align="center" accent="pink" />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {promises.map((promise) => (
          <article
            key={promise.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
              {promise.icon ?? "✓"}
            </span>
            <h3 className="mt-4 text-sm font-bold leading-snug text-white">
              {renderPromiseTitle(promise.title, promise.highlight)}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-white/60">{promise.text}</p>
          </article>
        ))}
      </div>
    </PageSection>
  );
}

/* ── Section 5 : Piliers (avec bullets) ── */

function renderPilierTitle(
  title: string,
  accentBg: string,
  options: { dark?: boolean; ink?: string } = {},
) {
  const { dark = false, ink } = options;
  const spaceIndex = title.indexOf(" ");
  const verbClass = ink
    ? "font-extrabold"
    : `inline-block rounded-md px-1.5 py-0.5 font-semibold text-white ${accentBg}`;

  if (spaceIndex === -1) {
    return (
      <span className={verbClass} style={ink ? { color: ink } : undefined}>
        {title}
      </span>
    );
  }

  const verb = title.slice(0, spaceIndex);
  const rest = title.slice(spaceIndex + 1).trim();

  return (
    <>
      <span className={verbClass} style={ink ? { color: ink } : undefined}>
        {verb}
      </span>
      {rest ? (
        <span
          className={`block text-base font-bold leading-snug ${
            dark ? "mt-0.5 text-white/90" : "mt-1.5 text-[#0B0B0B]"
          }`}
        >
          {rest}
        </span>
      ) : null}
    </>
  );
}

type PilierColor = SectionColor | "green";

type Pilier = {
  step: number;
  title: string;
  intro: string;
  bullets: string[];
  color: PilierColor;
};

type MethodologiePiliersSectionProps = {
  id?: string;
  title: string;
  subtitle: string;
  items: Pilier[];
  size?: SectionSize;
  page?: SitePage;
  sectionIndex?: number;
  themeColor?: BrandSectionColor;
};

const PILIER_HALO: Record<PilierColor, { ink: string; glow: string }> = {
  pink: { ink: "#EE6B6E", glow: "rgba(238,107,110,0.45)" },
  indigo: { ink: "#6366F1", glow: "rgba(99,102,241,0.45)" },
  blue: { ink: "#2ec8dc", glow: "rgba(46,200,220,0.45)" },
  yellow: { ink: "#fcaf45", glow: "rgba(252,175,69,0.45)" },
  green: { ink: "#10b981", glow: "rgba(16,185,129,0.45)" },
};

const PILIER_ACCENT_BG: Record<PilierColor, string> = {
  ...SECTION_ACCENT_BG,
  green: "bg-[#10b981]",
};

/** Palette fixe 5 couleurs distinctes (ordre des piliers) */
const PILIER_TONE_ORDER: PilierColor[] = ["pink", "indigo", "blue", "yellow", "green"];

function pilierTone(index: number, fallback: PilierColor): PilierColor {
  return PILIER_TONE_ORDER[index % PILIER_TONE_ORDER.length] ?? fallback;
}

function Emph({ text, color }: { text: string; color?: string }) {
  return (
    <>
      {text.split(/(\*[^*]+\*)/g).map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <span
            key={i}
            className="font-semibold text-white/90"
            style={color ? { color } : undefined}
          >
            {part.slice(1, -1)}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

function PilierCard({ pilier, toneIndex }: { pilier: Pilier; toneIndex?: number }) {
  const color = toneIndex !== undefined ? pilierTone(toneIndex, pilier.color) : pilier.color;
  const accentBg = PILIER_ACCENT_BG[color];
  const halo = PILIER_HALO[color];

  return (
    <div className="relative flex h-full flex-col pt-10">
      <span
        className="absolute left-1/2 top-10 z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-lg font-extrabold text-white"
        style={{
          backgroundColor: halo.ink,
          boxShadow: `0 0 0 6px #0B0B0B, 0 0 28px ${halo.glow}`,
        }}
      >
        {pilier.step}
      </span>
      <article className="group relative flex h-full flex-1 flex-col rounded-[28px] border border-white/10 bg-[#141416] p-6 pt-14 shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_16px_48px_rgba(0,0,0,0.45)]">
        <h3 className="text-center text-lg font-bold leading-snug text-white">
          {renderPilierTitle(pilier.title, accentBg, { dark: true, ink: halo.ink })}
        </h3>
        <ul className="mt-4 flex-1 space-y-2.5">
          {pilier.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2.5 text-sm leading-snug text-white/55">
              <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accentBg}`} />
              <span className="min-w-0 flex-1">
                <Emph text={bullet} />
              </span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

export function MethodologiePiliersSection({
  id,
  title,
  subtitle,
  items,
  size = "comfortable",
}: MethodologiePiliersSectionProps) {
  return (
    <PageSection
      id={id}
      tone="dark"
      size={size}
      className="!overflow-x-clip xl:!overflow-visible"
      innerClassName="mx-auto max-w-[100rem] px-4 md:px-3"
    >
      <SectionHeader
        title={title}
        subtitle={subtitle}
        highlight="5 piliers"
        align="center"
        dark
        accent="warm"
      />

      <div className="mt-12 space-y-5 lg:hidden">
        {items.map((pilier, index) => (
          <PilierCard key={pilier.title} pilier={pilier} toneIndex={index} />
        ))}
      </div>

      <div className="mt-14 hidden gap-3 pt-8 lg:grid lg:grid-cols-2 lg:items-stretch xl:grid-cols-3 2xl:grid-cols-5">
        {items.map((pilier, index) => (
          <PilierCard key={pilier.title} pilier={pilier} toneIndex={index} />
        ))}
      </div>
    </PageSection>
  );
}

/* ── Essai : piliers en graphique circulaire à 5 branches ── */

function buildPilierPoints(count: number) {
  return Array.from({ length: count }, (_, index) => {
    const angle = (360 / count) * index - 90;
    const rad = (angle * Math.PI) / 180;
    return {
      index,
      angle,
      cos: Math.cos(rad),
      sin: Math.sin(rad),
    };
  });
}

export function MethodologiePiliersCercleSection({
  id,
  title,
  subtitle,
  items,
  size = "comfortable",
}: MethodologiePiliersSectionProps) {
  const points = buildPilierPoints(items.length);
  const rayR = 22;
  const cardR = 36;
  const polygon = points
    .map((point) => `${50 + rayR * point.cos},${50 + rayR * point.sin}`)
    .join(" ");

  return (
    <PageSection
      id={id}
      tone="dark"
      size={size}
      className="!overflow-x-clip xl:!overflow-visible"
      innerClassName="mx-auto max-w-[100rem] px-4 md:px-4"
      overlay={
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(129,140,248,0.12)_0%,_transparent_55%)]" />
      }
    >
      <SectionHeader
        title={title}
        subtitle={subtitle}
        highlight="5 piliers"
        align="center"
        dark
        accent="warm"
      />

      {/* Desktop : cercle à 5 branches + cartes */}
      <div className="relative mx-auto mt-20 hidden aspect-square w-full max-w-[86rem] xl:block">
        <svg
          viewBox="0 0 100 100"
          className="pointer-events-none absolute left-[18%] top-[18%] h-[64%] w-[64%]"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          {[10, 16, 22].map((r) => (
            <circle
              key={r}
              cx="50"
              cy="50"
              r={r}
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="0.35"
            />
          ))}
          <polygon
            points={polygon}
            fill="rgba(255,255,255,0.03)"
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="0.4"
          />
          {points.map((point) => {
            const color = pilierTone(point.index, items[point.index].color);
            const halo = PILIER_HALO[color];
            const tipX = 50 + rayR * point.cos;
            const tipY = 50 + rayR * point.sin;
            return (
              <g key={`ray-${items[point.index].title}`}>
                <line
                  x1="50"
                  y1="50"
                  x2={tipX}
                  y2={tipY}
                  stroke={`${halo.ink}88`}
                  strokeWidth="0.5"
                />
                <circle
                  cx={tipX}
                  cy={tipY}
                  r="1.35"
                  fill={halo.ink}
                  stroke="#0B0B0B"
                  strokeWidth="0.55"
                  style={{ filter: `drop-shadow(0 0 1.2px ${halo.glow})` }}
                />
              </g>
            );
          })}
          <circle cx="50" cy="50" r="13.5" fill="url(#pilier-center-glow)" />
          <circle
            cx="50"
            cy="50"
            r="11"
            fill="#121214"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="0.55"
          />
          <defs>
            <radialGradient id="pilier-center-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(252,175,69,0.35)" />
              <stop offset="45%" stopColor="rgba(99,102,241,0.18)" />
              <stop offset="100%" stopColor="rgba(99,102,241,0)" />
            </radialGradient>
          </defs>
        </svg>

        <div className="absolute left-1/2 top-1/2 z-10 flex h-[9.5rem] w-[9.5rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/15 bg-[#141416]/95 text-center shadow-[0_0_40px_rgba(252,175,69,0.18),0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-sm">
          <p className="font-[family-name:var(--font-heading)] text-4xl font-extrabold leading-none tracking-tight text-white">
            5
          </p>
          <p className="mt-1.5 text-[10px] font-extrabold uppercase tracking-[0.28em] text-white/70">
            piliers
          </p>
          <div className="mt-3 flex items-center gap-1.5" aria-hidden>
            {PILIER_TONE_ORDER.map((color) => (
              <span
                key={color}
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: PILIER_HALO[color].ink }}
              />
            ))}
          </div>
        </div>

        {points.map((point) => {
          const pilier = items[point.index];
          const cardLeft = 50 + cardR * point.cos;
          const cardTop = 50 + cardR * point.sin;

          return (
            <div
              key={pilier.title}
              className="absolute z-30 w-[20.75rem] -translate-x-1/2 -translate-y-1/2 2xl:w-[22rem]"
              style={{
                left: `${cardLeft}%`,
                top: `${cardTop}%`,
              }}
            >
              <PilierCard pilier={pilier} toneIndex={point.index} />
            </div>
          );
        })}
      </div>

      {/* Tablette / mobile : mini cercle + cartes complètes empilées */}
      <div className="mt-16 xl:hidden">
        <div className="relative mx-auto aspect-square w-full max-w-sm">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
            <circle cx="50" cy="50" r="28" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <polygon
              points={polygon}
              fill="rgba(255,255,255,0.03)"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="0.5"
            />
            {points.map((point) => {
              const color = pilierTone(point.index, items[point.index].color);
              const halo = PILIER_HALO[color];
              return (
                <line
                  key={`m-ray-${items[point.index].title}`}
                  x1="50"
                  y1="50"
                  x2={50 + rayR * point.cos}
                  y2={50 + rayR * point.sin}
                  stroke={`${halo.ink}99`}
                  strokeWidth="0.6"
                />
              );
            })}
            <circle cx="50" cy="50" r="14" fill="#141416" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          </svg>
          <div className="absolute inset-[34%] flex flex-col items-center justify-center text-center">
            <p className="font-[family-name:var(--font-heading)] text-3xl font-extrabold leading-none text-white">
              5
            </p>
            <p className="mt-1 text-[9px] font-extrabold uppercase tracking-[0.24em] text-white/65">
              piliers
            </p>
            <div className="mt-2 flex items-center gap-1" aria-hidden>
              {PILIER_TONE_ORDER.map((color) => (
                <span
                  key={color}
                  className="h-1 w-1 rounded-full"
                  style={{ backgroundColor: PILIER_HALO[color].ink }}
                />
              ))}
            </div>
          </div>
          {points.map((point) => {
            const pilier = items[point.index];
            const color = pilierTone(point.index, pilier.color);
            const halo = PILIER_HALO[color];
            return (
              <span
                key={`m-tip-${pilier.title}`}
                className="absolute flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-xs font-extrabold text-white"
                style={{
                  left: `${50 + rayR * point.cos}%`,
                  top: `${50 + rayR * point.sin}%`,
                  backgroundColor: halo.ink,
                  boxShadow: `0 0 0 4px #0B0B0B, 0 0 16px ${halo.glow}`,
                }}
              >
                {pilier.step}
              </span>
            );
          })}
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2">
          {items.map((pilier, index) => (
            <PilierCard key={`stack-${pilier.title}`} pilier={pilier} toneIndex={index} />
          ))}
        </div>
      </div>
    </PageSection>
  );
}

/* ── Section 6 : Formats (3 cartes) ── */

type AccentColor = "indigo" | "pink" | "orange";

type FormatCard = {
  slug: string;
  icon: string;
  title: string;
  paragraphs: string[];
  bullets: string[];
  cta: { label: string; href: string };
  accentColor?: AccentColor;
};

const formatAccent: Record<
  AccentColor,
  { border: string; bg: string; iconBg: string; bullet: string; button: string }
> = {
  indigo: {
    border: "border-[#6366F1]/30",
    bg: "from-[#EEF2FF]/80 via-white to-[#E0E7FF]/40",
    iconBg: "from-[#EEF2FF] to-[#C7D2FE]",
    bullet: "bg-[#6366F1]",
    button: "bg-[#6366F1] hover:bg-[#4F46E5]",
  },
  pink: {
    border: "border-[#EE6B6E]/30",
    bg: "from-[#fde8e8]/60 via-white to-[#fef3e8]/50",
    iconBg: "from-[#fde8e8] to-[#fbcfe8]",
    bullet: "bg-[#EE6B6E]",
    button: "bg-[#EE6B6E] hover:bg-[#E05558]",
  },
  orange: {
    border: "border-[#f58529]/30",
    bg: "from-[#fef3e8]/80 via-white to-[#fff8e7]/50",
    iconBg: "from-[#fef3e8] to-[#fed7aa]",
    bullet: "bg-[#f58529]",
    button: "bg-[#f58529] hover:bg-[#ea580c]",
  },
};

type MethodologieFormatsSectionProps = {
  id?: string;
  title: string;
  subtitle: string;
  cards: FormatCard[];
  size?: SectionSize;
  page?: SitePage;
  sectionIndex?: number;
  highlight?: string;
};

export function MethodologieFormatsSection({
  id,
  title,
  subtitle,
  cards,
  size = "comfortable",
  page,
  sectionIndex = 5,
  highlight,
}: MethodologieFormatsSectionProps) {
  const sectionColor = page ? sectionColorAt(page, sectionIndex) : null;

  const content = (
    <>
      <div className="mx-auto max-w-3xl text-center">
        <FormationSectionTitle highlight={highlight} pill={sectionColor ?? "indigo"}>
          {title}
        </FormationSectionTitle>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#515154] md:text-lg">
          {subtitle}
        </p>
      </div>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {cards.map((card) => {
          const accent = formatAccent[card.accentColor ?? "pink"];
          return (
            <article
              key={card.slug}
              className={`group flex flex-col ${cardSurfaceOnTintedBg("rounded-[28px]")} overflow-hidden p-6 transition hover:-translate-y-1 hover:shadow-md`}
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-2xl ${accent.iconBg}`}
              >
                {card.icon}
              </span>
              <h3 className="mt-4 text-xl font-bold text-[#0B0B0B]">{card.title}</h3>
              <div className="mt-3 flex-1 space-y-3">
                {card.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="text-sm leading-relaxed text-[#515154]">
                    {p}
                  </p>
                ))}
                <ul className="space-y-2 pt-1">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-[#515154]">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white ${accent.bullet}`}
                      >
                        ✓
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 border-t border-slate-200/60 pt-5">
                <Button href={card.cta.href} variant="parent" className="w-full text-center text-sm">
                  {card.cta.label}
                </Button>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );

  if (sectionColor) {
    return (
      <TintedPageSection
        id={id}
        pillColor={sectionColor}
        size={size}
        innerClassName="mx-auto max-w-6xl px-4 md:px-6"
      >
        {content}
      </TintedPageSection>
    );
  }

  return (
    <PageSection id={id} tone="alt" size={size} innerClassName="mx-auto max-w-6xl px-4 md:px-6">
      {content}
    </PageSection>
  );
}

/* ── Section 8 : Closing ── */

type MethodologieClosingSectionProps = {
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  size?: SectionSize;
  highlight?: string;
};

export function MethodologieClosingSection({
  title,
  subtitle,
  cta,
  ctaSecondary = { label: "Voir les formats", href: "#offres" },
  size = "comfortable",
  highlight = "mieux",
}: MethodologieClosingSectionProps) {
  return (
    <PageSection
      tone="alt"
      size={size}
      innerClassName="mx-auto max-w-3xl px-4 text-center md:px-6"
      overlay={
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(238,107,110,0.08)_0%,_transparent_70%)]"
          aria-hidden
        />
      }
    >
      <SectionHeader
        title={title}
        subtitle={subtitle}
        highlight={highlight}
        align="center"
        accent="warm"
      />
      <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
        <Button href={cta.href} variant="parent">
          {cta.label}
        </Button>
        {ctaSecondary ? (
          <Button href={ctaSecondary.href} variant="parentOutline">
            {ctaSecondary.label}
          </Button>
        ) : null}
      </div>
    </PageSection>
  );
}
