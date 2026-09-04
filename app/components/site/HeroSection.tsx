import Button, { type ButtonVariant } from "./Button";
import { sectionBody } from "./tokens";

type PlanningLabels = {
  title: string;
  footer: string;
  cards: string[];
};

type SchoolVisualLabels = {
  badge: string;
  title: string;
  modules: string;
  formats: string;
  levels: string;
  cta: string;
};

const PLANNING_COLORS = [
  "bg-[#fef3e8] text-[#c2410c] shadow-sm",
  "bg-[#f3e5f5] text-[#6b21a8] shadow-sm",
  "bg-[#fde8e8] text-[#D65558] shadow-sm",
  "bg-[#fff8e7] text-[#b45309] shadow-sm",
  "bg-[#ecfdf5] text-[#047857] shadow-sm",
];

function PlanningVisual({ labels }: { labels: PlanningLabels }) {
  return (
    <div className="flex h-full w-full min-h-0" aria-hidden>
      <div className="flex h-full w-full flex-col rounded-[28px] border border-slate-200/60 bg-gradient-to-br from-[#f3e5f5]/50 via-white to-[#fef3e8]/50 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.1)] ring-1 ring-white/80">
        <p className="text-sm font-bold uppercase tracking-wide text-[#515154]">{labels.title}</p>
        <div className="mt-5 grid flex-1 grid-cols-2 content-center gap-3 sm:grid-cols-3">
          {labels.cards.map((label, i) => (
            <div
              key={label}
              className={`flex items-center justify-center rounded-2xl px-3 py-5 text-sm font-bold transition-transform hover:scale-105 ${PLANNING_COLORS[i % PLANNING_COLORS.length]}`}
            >
              {label}
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-3 rounded-2xl border border-[#EE6B6E]/20 bg-white/90 px-4 py-3.5 shadow-sm">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#f58529] via-[#EE6B6E] to-[#8134af] text-sm text-white shadow-md">
            ✓
          </span>
          <span className="text-sm font-semibold text-[#0B0B0B]">{labels.footer}</span>
        </div>
      </div>
    </div>
  );
}

function SchoolVisual({ labels }: { labels: SchoolVisualLabels }) {
  return (
    <div className="flex h-full w-full min-h-0" aria-hidden>
      <div className="flex h-full w-full flex-col overflow-hidden rounded-[28px] border border-[#6366F1]/25 bg-gradient-to-br from-[#EEF2FF] via-white to-[#f3e5f5]/40 p-6 shadow-[0_24px_70px_rgba(99,102,241,0.18)] ring-1 ring-[#6366F1]/10">
        <span className="inline-flex w-fit rounded-full bg-gradient-to-r from-[#6366F1] to-[#8134af] px-4 py-1.5 text-xs font-bold text-white shadow-md">
          {labels.badge}
        </span>
        <p className="mt-5 text-xl font-bold text-[#0B0B0B]">{labels.title}</p>
        <div className="mt-6 grid flex-1 grid-cols-3 gap-3 content-center">
          {[
            { val: "8", lbl: labels.modules, color: "from-[#6366F1] to-[#818cf8]" },
            { val: "5", lbl: labels.formats, color: "from-[#EE6B6E] to-[#F58A8D]" },
            { val: "4", lbl: labels.levels, color: "from-[#8134af] to-[#a78bfa]" },
          ].map((item) => (
            <div
              key={item.lbl}
              className={`flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br p-4 text-white shadow-lg ${item.color}`}
            >
              <span className="text-3xl font-extrabold font-heading">{item.val}</span>
              <span className="mt-1 text-center text-[10px] font-semibold leading-tight opacity-90">
                {item.lbl}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-5 space-y-2.5">
          {[100, 80, 60].map((width, n) => (
            <div
              key={n}
              className="flex items-center gap-3 rounded-xl bg-white/90 px-3 py-2.5 shadow-sm"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EEF2FF] text-xs font-bold text-[#6366F1]">
                {n + 1}
              </span>
              <div className="h-2.5 flex-1 rounded-full bg-[#EEF2FF]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#6366F1] to-[#8134af]"
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs font-bold uppercase tracking-wide text-[#6366F1]">
          {labels.cta}
        </p>
      </div>
    </div>
  );
}

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

type HeroSectionProps = {
  title: string;
  subtitle: string;
  reassurance?: string;
  tags?: string[];
  badge?: string;
  ctaPrimary?: { label: string; href: string; variant?: ButtonVariant };
  ctaSecondary?: { label: string; href: string; variant?: ButtonVariant };
  visual?: "planning" | "school" | "none";
  highlightWord?: string;
  planning?: PlanningLabels;
  schoolVisual?: SchoolVisualLabels;
  fullHeight?: boolean;
  theme?: "default" | "school" | "parent";
};

export default function HeroSection({
  title,
  subtitle,
  reassurance,
  tags,
  badge,
  ctaPrimary,
  ctaSecondary,
  visual = "none",
  highlightWord,
  planning,
  schoolVisual,
  fullHeight = false,
  theme = "default",
}: HeroSectionProps) {
  const hasPlanning = visual === "planning" && planning;
  const hasSchool = visual === "school" && schoolVisual;
  const hasVisual = hasPlanning || hasSchool;

  const primaryVariant =
    ctaPrimary?.variant ?? (theme === "parent" ? "parent" : "school");
  const secondaryVariant =
    ctaSecondary?.variant ??
    (theme === "school" ? "schoolOutline" : theme === "parent" ? "parentOutline" : "parentOutline");

  const sectionClass = fullHeight
    ? "relative flex min-h-[100svh] flex-col justify-center overflow-hidden py-16 md:py-20"
    : "relative overflow-hidden py-16 md:py-20 lg:py-24";

  const bgClass =
    theme === "school"
      ? "bg-gradient-to-br from-[#EEF2FF]/70 via-white to-white"
      : theme === "parent"
        ? "bg-gradient-to-br from-[#fde8e8]/50 via-white to-white"
        : "bg-white";

  return (
    <section className={`${sectionClass} ${bgClass}`}>
      <div
        className={`pointer-events-none absolute inset-0 ${
          theme === "school"
            ? "bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.12)_0%,_transparent_55%)]"
            : theme === "parent"
              ? "bg-[radial-gradient(ellipse_at_top_right,_rgba(238,107,110,0.12)_0%,_transparent_55%)]"
              : "bg-[radial-gradient(ellipse_at_top_right,_rgba(238,107,110,0.06)_0%,_transparent_55%)]"
        }`}
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-[#fde8e8]/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-[#EEF2FF]/40 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6">
        <div
          className={`grid gap-10 lg:gap-14 ${
            hasVisual ? "lg:grid-cols-2 lg:items-stretch" : "max-w-3xl"
          }`}
        >
          <div className="flex flex-col justify-center">
            {badge && (
              <span className="mb-4 inline-flex w-fit rounded-full bg-[#fde8e8] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#EE6B6E] ring-1 ring-[#EE6B6E]/15">
                {badge}
              </span>
            )}
            {tags && tags.length > 0 && (
              <div className="mb-5 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-bold ${
                      theme === "school"
                        ? "bg-[#EEF2FF] text-[#6366F1] ring-1 ring-[#6366F1]/15"
                        : theme === "parent"
                          ? "bg-[#fde8e8] text-[#EE6B6E] ring-1 ring-[#EE6B6E]/15"
                          : "border border-slate-200/60 bg-[#F9F9FB] text-[#515154]"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <h1 className="text-4xl font-extrabold font-heading leading-[1.05] tracking-tight text-[#0B0B0B] sm:text-5xl md:text-[3.25rem] lg:text-[3.75rem]">
              {renderTitle(title, highlightWord)}
            </h1>
            <p className={`mt-6 max-w-xl text-lg md:text-xl ${sectionBody}`}>{subtitle}</p>
            {reassurance && (
              <p className="mt-4 max-w-xl rounded-xl border border-slate-200/60 bg-white/70 px-4 py-3 text-sm leading-relaxed text-[#515154] backdrop-blur-sm">
                {reassurance}
              </p>
            )}

            {(ctaPrimary || ctaSecondary) && (
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {ctaPrimary && (
                  <Button href={ctaPrimary.href} variant={primaryVariant}>
                    {ctaPrimary.label}
                  </Button>
                )}
                {ctaSecondary && (
                  <Button href={ctaSecondary.href} variant={secondaryVariant}>
                    {ctaSecondary.label}
                  </Button>
                )}
              </div>
            )}
          </div>

          {hasPlanning && (
            <div className="flex min-h-[320px] lg:min-h-0">
              <PlanningVisual labels={planning} />
            </div>
          )}
          {hasSchool && (
            <div className="flex min-h-[320px] lg:min-h-0">
              <SchoolVisual labels={schoolVisual} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
