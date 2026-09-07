"use client";

import PageSection from "./PageSection";
import SectionHeader from "./SectionHeader";

export type AtelierPromise = {
  icon?: string;
  title: string;
  highlight?: string;
  text: string;
};

export type AtelierProposalProps = {
  title: string;
  subtitle: string;
  promises: AtelierPromise[];
};

const TONES = [
  { ink: "#6366F1", soft: "#EEF2FF", glow: "#818cf8", emph: "font-extrabold text-[#6366F1]" },
  { ink: "#EE6B6E", soft: "#fde8e8", glow: "#F58A8D", emph: "font-extrabold text-[#EE6B6E]" },
  { ink: "#2ec8dc", soft: "#ddf6f8", glow: "#5dd9e8", emph: "font-extrabold text-[#0891b2]" },
  { ink: "#fcaf45", soft: "#fff8e7", glow: "#fbbf24", emph: "font-extrabold text-[#b45309]" },
  { ink: "#10b981", soft: "#ecfdf5", glow: "#34d399", emph: "font-extrabold text-[#059669]" },
] as const;

type Point = {
  index: number;
  cos: number;
  sin: number;
  tone: (typeof TONES)[number];
};

function buildPoints(count: number): Point[] {
  return Array.from({ length: count }, (_, index) => {
    const angle = (360 / count) * index - 90;
    const rad = (angle * Math.PI) / 180;
    return {
      index,
      cos: Math.cos(rad),
      sin: Math.sin(rad),
      tone: TONES[index % TONES.length],
    };
  });
}

function HighlightTitle({
  title,
  highlight,
  emphClass,
}: {
  title: string;
  highlight?: string;
  emphClass: string;
}) {
  if (!highlight || !title.includes(highlight)) return <>{title}</>;
  const [before, after] = title.split(highlight);
  return (
    <>
      {before}
      <span className={emphClass}>{highlight}</span>
      {after}
    </>
  );
}

function PromiseCard({
  promise,
  tone,
  index,
  compact = false,
}: {
  promise: AtelierPromise;
  tone: (typeof TONES)[number];
  index: number;
  compact?: boolean;
}) {
  return (
    <article
      className={`overflow-hidden rounded-2xl border border-slate-200/80 bg-white text-left shadow-[0_10px_28px_rgba(15,23,42,0.08)] ${
        compact ? "p-3.5" : "p-4"
      }`}
      style={{
        boxShadow: `0 10px 28px rgba(15,23,42,0.08), 0 0 0 1px ${tone.ink}18`,
      }}
    >
      <div className="flex items-center gap-2.5">
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold text-white"
          style={{
            backgroundColor: tone.ink,
            boxShadow: `0 0 16px ${tone.ink}40`,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        {promise.icon ? (
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-base"
            style={{ backgroundColor: tone.soft }}
            aria-hidden
          >
            {promise.icon}
          </span>
        ) : null}
      </div>
      <h3
        className={`mt-3 font-bold leading-snug text-[#0B0B0B] ${
          compact ? "text-[12px]" : "text-sm"
        }`}
      >
        <HighlightTitle title={promise.title} highlight={promise.highlight} emphClass={tone.emph} />
      </h3>
      <p
        className={`mt-1.5 leading-relaxed text-[#515154] ${
          compact ? "text-[11px]" : "text-xs md:text-[13px]"
        }`}
      >
        {promise.text}
      </p>
    </article>
  );
}

/** Graphique circulaire — 5 cartes rectangulaires aux 5 pointes */
export function AtelierProposalCercle({ title, subtitle, promises }: AtelierProposalProps) {
  const items = promises.slice(0, 5);
  const points = buildPoints(items.length);
  const rayR = 28;
  const cardR = 42;
  const polygon = points
    .map((point) => {
      const x = 50 + rayR * point.cos;
      const y = 50 + rayR * point.sin;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <PageSection
      tone="white"
      size="comfortable"
      innerClassName="mx-auto max-w-6xl px-4 md:px-6"
      overlay={
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.06)_0%,_transparent_55%)]" />
      }
    >
      <SectionHeader
        title={title}
        subtitle={subtitle}
        highlight="L'atelier des méthodes"
        align="center"
        accent="warm"
      />

      {/* Desktop / tablette large : cercle + cartes aux pointes */}
      <div className="relative mx-auto mt-16 hidden aspect-square w-full max-w-[52rem] lg:block">
        <svg
          viewBox="0 0 100 100"
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden
        >
          {[14, 21, 28].map((r) => (
            <circle
              key={r}
              cx="50"
              cy="50"
              r={r}
              fill="none"
              stroke="rgba(15,23,42,0.08)"
              strokeWidth="0.35"
            />
          ))}
          <polygon
            points={polygon}
            fill="rgba(99,102,241,0.04)"
            stroke="rgba(99,102,241,0.22)"
            strokeWidth="0.4"
          />
          {points.map((point) => {
            const x2 = 50 + rayR * point.cos;
            const y2 = 50 + rayR * point.sin;
            return (
              <line
                key={`ray-${point.index}`}
                x1="50"
                y1="50"
                x2={x2}
                y2={y2}
                stroke={`${point.tone.ink}55`}
                strokeWidth="0.45"
              />
            );
          })}
          <circle
            cx="50"
            cy="50"
            r="11"
            fill="white"
            stroke="rgba(15,23,42,0.1)"
            strokeWidth="0.45"
          />
        </svg>

        <div className="pointer-events-none absolute inset-[36%] flex flex-col items-center justify-center rounded-full text-center">
          <p className="font-[family-name:var(--font-heading)] text-sm font-extrabold uppercase tracking-[0.2em] text-[#0B0B0B]">
            L&apos;atelier
          </p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8E8E93]">
            5 piliers
          </p>
        </div>

        {points.map((point) => {
          const tipX = 50 + rayR * point.cos;
          const tipY = 50 + rayR * point.sin;
          const cardX = 50 + cardR * point.cos;
          const cardY = 50 + cardR * point.sin;
          const promise = items[point.index];

          return (
            <div key={promise.title}>
              <span
                className="absolute z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  left: `${tipX}%`,
                  top: `${tipY}%`,
                  backgroundColor: point.tone.ink,
                  boxShadow: `0 0 0 4px #fff, 0 0 16px ${point.tone.ink}55`,
                }}
                aria-hidden
              />
              <div
                className="absolute z-20 w-[11.5rem] -translate-x-1/2 -translate-y-1/2 xl:w-[12.75rem]"
                style={{
                  left: `${cardX}%`,
                  top: `${cardY}%`,
                }}
              >
                <PromiseCard promise={promise} tone={point.tone} index={point.index} compact />
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile / tablette : cercle compact + cartes empilées */}
      <div className="mt-12 lg:hidden">
        <div className="relative mx-auto aspect-square w-full max-w-xs">
          <svg
            viewBox="0 0 100 100"
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden
          >
            <circle cx="50" cy="50" r="28" fill="none" stroke="rgba(15,23,42,0.08)" strokeWidth="0.5" />
            <polygon
              points={polygon}
              fill="rgba(99,102,241,0.05)"
              stroke="rgba(99,102,241,0.25)"
              strokeWidth="0.5"
            />
            {points.map((point) => {
              const x2 = 50 + rayR * point.cos;
              const y2 = 50 + rayR * point.sin;
              return (
                <line
                  key={`m-ray-${point.index}`}
                  x1="50"
                  y1="50"
                  x2={x2}
                  y2={y2}
                  stroke={`${point.tone.ink}66`}
                  strokeWidth="0.55"
                />
              );
            })}
          </svg>
          <div className="pointer-events-none absolute inset-[34%] flex items-center justify-center rounded-full text-center">
            <p className="font-[family-name:var(--font-heading)] text-xs font-extrabold uppercase tracking-[0.18em] text-[#0B0B0B]">
              L&apos;atelier
            </p>
          </div>
          {points.map((point) => {
            const tipX = 50 + rayR * point.cos;
            const tipY = 50 + rayR * point.sin;
            return (
              <span
                key={`m-tip-${point.index}`}
                className="absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[10px] font-extrabold text-white"
                style={{
                  left: `${tipX}%`,
                  top: `${tipY}%`,
                  backgroundColor: point.tone.ink,
                  boxShadow: `0 0 0 3px #fff, 0 0 14px ${point.tone.ink}50`,
                }}
              >
                {String(point.index + 1).padStart(2, "0")}
              </span>
            );
          })}
        </div>

        <div className="mt-10 space-y-3">
          {items.map((promise, index) => (
            <PromiseCard
              key={promise.title}
              promise={promise}
              tone={TONES[index % TONES.length]}
              index={index}
            />
          ))}
        </div>
      </div>
    </PageSection>
  );
}
