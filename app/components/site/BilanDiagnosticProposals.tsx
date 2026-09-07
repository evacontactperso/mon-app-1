"use client";

import { useEffect, useRef, useState } from "react";
import PageSection from "./PageSection";
import SectionHeader from "./SectionHeader";

export type BilanRow = {
  axis: string;
  observe: string;
  questions: string;
  outcome: string;
};

export type BilanSectionProps = {
  title: string;
  subtitle: string;
  columnLabels: {
    axis: string;
    observe: string;
    questions: string;
    outcome: string;
  };
  rows: BilanRow[];
};

const TONES = [
  { ink: "#6366F1", glow: "#818cf8" },
  { ink: "#EE6B6E", glow: "#F58A8D" },
  { ink: "#2ec8dc", glow: "#5dd9e8" },
  { ink: "#fcaf45", glow: "#fbbf24" },
  { ink: "#10b981", glow: "#34d399" },
] as const;

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

function Field({
  label,
  text,
  tone,
}: {
  label: string;
  text: string;
  tone?: string;
}) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">{label}</p>
      <p
        className="mt-1.5 text-sm leading-relaxed text-white/75 md:text-[15px]"
        style={tone ? { color: tone } : undefined}
      >
        {text}
      </p>
    </div>
  );
}

type AxisPoint = {
  index: number;
  axis: string;
  angle: number;
  cos: number;
  sin: number;
  tone: (typeof TONES)[number];
};

function buildAxisPoints(rows: BilanRow[]): AxisPoint[] {
  return rows.map((row, index) => {
    const angle = (360 / rows.length) * index - 90;
    const rad = (angle * Math.PI) / 180;
    return {
      index,
      axis: row.axis,
      angle,
      cos: Math.cos(rad),
      sin: Math.sin(rad),
      tone: TONES[index % TONES.length],
    };
  });
}

function BilanRadarChart({
  rows,
  selected,
  onSelect,
}: {
  rows: BilanRow[];
  selected: number;
  onSelect: (index: number) => void;
}) {
  const points = buildAxisPoints(rows);
  const active = points[selected] ?? points[0];
  const nodeR = 30;
  /** Rayon visuel du rond (md:h-10 / 2) + anneau de 3px */
  const nodeRadiusPx = 23;
  /** Écart constant entre le bord du rond et le bord du rectangle */
  const labelGapPx = 14;
  const chartRef = useRef<HTMLDivElement>(null);
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [labelOffsets, setLabelOffsets] = useState<number[]>(() =>
    rows.map(() => nodeRadiusPx + labelGapPx + 36),
  );

  useEffect(() => {
    const axisPoints = buildAxisPoints(rows);

    const measure = () => {
      const next = axisPoints.map((point, index) => {
        const el = labelRefs.current[index];
        const w = el?.offsetWidth || 96;
        const h = el?.offsetHeight || 32;
        // Demi-étendue radiale d'un rectangle aligné aux axes
        const radialHalf = (w / 2) * Math.abs(point.cos) + (h / 2) * Math.abs(point.sin);
        return nodeRadiusPx + labelGapPx + radialHalf;
      });
      setLabelOffsets((prev) =>
        prev.length === next.length && prev.every((v, i) => v === next[i]) ? prev : next,
      );
    };

    measure();
    const chart = chartRef.current;
    const observer = new ResizeObserver(measure);
    if (chart) observer.observe(chart);
    labelRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [rows, nodeRadiusPx, labelGapPx]);

  return (
    <div
      ref={chartRef}
      className="relative mx-auto mt-14 mb-12 aspect-square w-full max-w-2xl px-2 sm:mb-0 sm:px-4"
    >
      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden
      >
        {[14, 22, 30].map((r) => (
          <circle
            key={r}
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="0.35"
          />
        ))}
        {points.map((point) => {
          const x2 = 50 + nodeR * point.cos;
          const y2 = 50 + nodeR * point.sin;
          return (
            <line
              key={`ray-${point.axis}`}
              x1="50"
              y1="50"
              x2={x2}
              y2={y2}
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="0.35"
            />
          );
        })}
        <circle
          cx="50"
          cy="50"
          r="12"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="0.5"
        />
      </svg>

      {/* Centre */}
      <div className="absolute inset-[30%] flex items-center justify-center rounded-full">
        <p className="font-[family-name:var(--font-heading)] text-sm font-extrabold uppercase tracking-[0.28em] text-white md:text-base">
          Bilan
        </p>
      </div>

      {/* Nœuds + labels — même écart rond → rectangle pour chaque axe */}
      {points.map((point) => {
        const nx = 50 + nodeR * point.cos;
        const ny = 50 + nodeR * point.sin;
        const offsetPx = labelOffsets[point.index] ?? nodeRadiusPx + labelGapPx + 36;

        return (
          <div key={point.axis}>
            <button
              type="button"
              onClick={() => onSelect(point.index)}
              aria-pressed={point.index === selected}
              aria-label={point.axis}
              className="absolute z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[11px] font-extrabold text-white md:h-10 md:w-10 md:text-xs"
              style={{
                left: `${nx}%`,
                top: `${ny}%`,
                backgroundColor: point.tone.ink,
                boxShadow: "0 0 0 3px rgba(11,11,11,0.9)",
              }}
            >
              {pad(point.index)}
            </button>

            <span
              ref={(el) => {
                labelRefs.current[point.index] = el;
              }}
              className="pointer-events-none absolute z-20 hidden w-max max-w-[7rem] rounded-lg border border-white/20 bg-[#0B0B0B]/85 px-2 py-1 text-center text-[11px] font-medium leading-snug text-white/80 sm:block md:max-w-[8rem] md:text-xs"
              style={{
                left: `${nx}%`,
                top: `${ny}%`,
                transform: `translate(-50%, -50%) translate(${point.cos * offsetPx}px, ${point.sin * offsetPx}px)`,
              }}
            >
              {point.axis}
            </span>
          </div>
        );
      })}

      {/* Label de l’axe sélectionné (mobile uniquement) */}
      <p className="absolute -bottom-2 left-1/2 w-[min(100%,16rem)] -translate-x-1/2 translate-y-full line-clamp-2 rounded-lg border border-white/20 bg-[#0B0B0B]/85 px-3 py-1.5 text-center text-xs font-medium leading-snug text-white/80 sm:hidden">
        {active?.axis}
      </p>
    </div>
  );
}

/**
 * Mix radar + carrousel : la pointe active = carte visible la plus à gauche.
 */
export default function BilanDiagnosticMixSection({
  title,
  subtitle,
  columnLabels,
  rows,
}: BilanSectionProps) {
  const [selected, setSelected] = useState(0);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const programmaticScrollRef = useRef(false);
  const clearProgrammaticTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const selectFromRadar = (index: number) => {
    if (index === selected) {
      const root = scrollerRef.current;
      const card = cardRefs.current[index];
      if (root && card) {
        const rootRect = root.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();
        const delta =
          cardRect.left - rootRect.left - (rootRect.width - cardRect.width) / 2;
        root.scrollBy({ left: delta, behavior: "smooth" });
      }
      return;
    }
    programmaticScrollRef.current = true;
    setSelected(index);
    if (clearProgrammaticTimer.current) clearTimeout(clearProgrammaticTimer.current);
    clearProgrammaticTimer.current = setTimeout(() => {
      programmaticScrollRef.current = false;
    }, 450);
  };

  useEffect(() => {
    if (!programmaticScrollRef.current) return;
    const root = scrollerRef.current;
    const card = cardRefs.current[selected];
    if (!root || !card) return;
    const rootRect = root.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const delta =
      cardRect.left - rootRect.left - (rootRect.width - cardRect.width) / 2;
    root.scrollBy({ left: delta, behavior: "smooth" });
  }, [selected]);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const syncCenterCard = () => {
      if (programmaticScrollRef.current) return;

      const rootRect = root.getBoundingClientRect();
      const centerX = rootRect.left + rootRect.width / 2;
      let best: { index: number; dist: number } | null = null;

      for (let index = 0; index < cardRefs.current.length; index++) {
        const card = cardRefs.current[index];
        if (!card) continue;

        const rect = card.getBoundingClientRect();
        // Ignorer les cartes hors du viewport du carrousel
        if (rect.right < rootRect.left || rect.left > rootRect.right) continue;

        const cardCenter = rect.left + rect.width / 2;
        const dist = Math.abs(cardCenter - centerX);
        if (!best || dist < best.dist) {
          best = { index, dist };
        }
      }

      if (best) {
        setSelected((prev) => (prev === best!.index ? prev : best!.index));
      }
    };

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(syncCenterCard);
    };

    root.addEventListener("scroll", onScroll, { passive: true });
    syncCenterCard();

    return () => {
      root.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      if (clearProgrammaticTimer.current) clearTimeout(clearProgrammaticTimer.current);
    };
  }, [rows.length]);

  return (
    <PageSection tone="dark" size="comfortable" innerClassName="mx-auto w-full max-w-[100rem] px-0 md:px-3">
      <div className="px-5 md:px-8">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          highlight="diagnostic"
          align="center"
          accent="warm"
          dark
        />

        <BilanRadarChart rows={rows} selected={selected} onSelect={selectFromRadar} />
      </div>

      <div className="relative mt-8 md:mt-10">
        <div
          ref={scrollerRef}
          className="flex flex-col gap-4 px-5 pb-4 md:flex-row md:snap-x md:snap-mandatory md:overflow-x-auto md:px-8 md:pr-16 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {rows.map((row, index) => {
            const tone = TONES[index % TONES.length];
            return (
              <article
                key={row.axis}
                data-axis-index={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                onClick={() => selectFromRadar(index)}
                className="w-full cursor-pointer overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.03] md:w-[min(88vw,28rem)] md:shrink-0 md:snap-center"
              >
                <div
                  className="px-6 py-8 text-white"
                  style={{ background: `linear-gradient(135deg, ${tone.ink}, ${tone.glow})` }}
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/80">
                    Axe {pad(index)}
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold leading-tight md:text-3xl">{row.axis}</h3>
                </div>
                <div className="space-y-4 p-6">
                  <Field label={columnLabels.observe} text={row.observe} />
                  <Field label={columnLabels.questions} text={row.questions} />
                  <Field label={columnLabels.outcome} text={row.outcome} tone={tone.glow} />
                </div>
              </article>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => selectFromRadar((selected + 1) % rows.length)}
          aria-label="Carte suivante"
          className="absolute right-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[#0B0B0B]/90 text-lg text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition hover:border-white/45 hover:bg-[#141416] md:right-6 md:flex md:h-11 md:w-11"
        >
          <span aria-hidden>→</span>
        </button>
      </div>
    </PageSection>
  );
}
