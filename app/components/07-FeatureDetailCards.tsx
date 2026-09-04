"use client";

type FeatureCardVariant = "organization" | "explication" | "fiche" | "quiz" | "chanson";

type DetailedFeature = {
  id: number;
  title: string;
  subtitle: string;
  variant: FeatureCardVariant;
};

const ILLUSTRATION_WRAPPER = "flex h-full w-full min-h-[90px] flex-1";

function IllustrationOrganization() {
  return (
    <div className={`${ILLUSTRATION_WRAPPER} gap-2 sm:gap-3`}>
      {[
        { done: true, color: "bg-[#fde8e8]" },
        { done: false, color: "bg-[#fef3e8]" },
        { done: true, color: "bg-[#f3e5f5]" },
      ].map((col, i) => (
        <div
          key={i}
          className="flex flex-1 flex-col gap-2 rounded-xl border border-slate-200/50 bg-slate-50/60 p-2 sm:p-3"
        >
          <div className="h-2 w-3/4 rounded bg-slate-200/70 sm:h-2.5" />
          <div className="flex flex-1 items-center gap-1.5 sm:gap-2">
            <div
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md sm:h-7 sm:w-7 ${col.color}`}
            >
              {col.done ? (
                <svg className="h-3 w-3 text-[#EE6B6E] sm:h-3.5 sm:w-3.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 6l3 3 5-6" />
                </svg>
              ) : (
                <span className="text-[10px] font-medium text-[#ea580c] sm:text-xs">…</span>
              )}
            </div>
            <div className="h-2 flex-1 rounded bg-slate-200/50 sm:h-2.5" />
          </div>
        </div>
      ))}
    </div>
  );
}

function IllustrationExplication() {
  return (
    <div className={`${ILLUSTRATION_WRAPPER} flex-col justify-center gap-3 sm:gap-4`}>
      <div className="flex w-full gap-2 sm:gap-3">
        <div className="h-8 w-8 shrink-0 rounded-full bg-[#8134af]/40 sm:h-9 sm:w-9" />
        <div className="min-w-0 flex-1 rounded-xl rounded-tl-none bg-[#f3e5f5] p-2 sm:p-3">
          <div className="h-2.5 w-full rounded bg-[#8134af]/35 sm:h-3" />
          <div className="mt-1.5 h-2 w-4/5 max-w-[85%] rounded bg-[#8134af]/25 sm:mt-2 sm:h-2.5" />
        </div>
      </div>
      <div className="flex w-full items-center gap-2 sm:gap-3">
        <span className="w-12 shrink-0 text-[10px] text-slate-400 sm:w-14 sm:text-xs">Niveau</span>
        <div className="h-2 flex-1 rounded-full bg-slate-200 sm:h-2.5" />
      </div>
      <div className="flex w-full items-center gap-2 sm:gap-3">
        <span className="w-12 shrink-0 text-[10px] text-slate-400 sm:w-14 sm:text-xs">Vitesse</span>
        <div className="h-2 flex-1 rounded-full bg-slate-200 sm:h-2.5" />
      </div>
    </div>
  );
}

function IllustrationFiche() {
  return (
    <div className={`${ILLUSTRATION_WRAPPER} flex-col justify-center gap-2 sm:gap-3`}>
      <div className="h-3 w-full rounded bg-slate-300/70 sm:h-4" />
      <div className="h-2.5 w-2/3 max-w-[75%] rounded bg-slate-200/70 sm:h-3" />
      <div className="flex gap-2">
        <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#8134af]/40 sm:h-3 sm:w-3" />
        <div className="h-2.5 flex-1 rounded bg-slate-200/50 sm:h-3" />
      </div>
      <div className="h-2.5 w-full rounded bg-slate-200/50 sm:h-3" />
      <div className="h-2.5 w-5/6 max-w-[95%] rounded bg-slate-200/50 sm:h-3" />
      <div className="h-2.5 w-4/5 max-w-[90%] rounded bg-slate-200/50 sm:h-3" />
    </div>
  );
}

function IllustrationQuiz() {
  return (
    <div className={`${ILLUSTRATION_WRAPPER} flex-col justify-center gap-3 sm:gap-4`}>
      <div className="h-3 w-full rounded bg-slate-300/70 sm:h-4" />
      <div className="grid grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-3">
        {["A", "B", "C"].map((opt, i) => (
          <div
            key={opt}
            className={`flex items-center gap-2 rounded-lg border p-2 sm:rounded-xl sm:p-3 ${i === 1 ? "border-[#EE6B6E]/50 bg-[#fde8e8]" : "border-slate-200/60 bg-slate-50/50"}`}
          >
            <span className="w-4 shrink-0 text-xs font-medium text-slate-500 sm:w-5 sm:text-sm">{opt}</span>
            <div className="h-2.5 flex-1 rounded bg-slate-200/50 sm:h-3" />
            {i === 1 && (
              <svg className="h-4 w-4 shrink-0 text-[#EE6B6E] sm:h-5 sm:w-5" viewBox="0 0 16 16" fill="currentColor">
                <path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z" />
              </svg>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-lg bg-[#f3e5f5] px-2 py-1.5 sm:rounded-xl sm:px-3 sm:py-2">
        <span className="text-xs font-medium text-[#6b21a8] sm:text-sm">3/10</span>
        <div className="h-1.5 w-14 rounded-full bg-[#8134af]/40 sm:h-2 sm:w-20" />
      </div>
    </div>
  );
}

function IllustrationChanson() {
  const heights = [4, 6, 5, 7, 6, 8, 7, 6, 5];
  return (
    <div className={`${ILLUSTRATION_WRAPPER} flex-col justify-center gap-3 sm:gap-4`}>
      <div className="flex items-end justify-center gap-0.5 sm:gap-1 h-10 sm:h-12">
        {heights.map((h, i) => (
          <div
            key={i}
            className="w-1.5 rounded-full bg-[#8134af]/60 sm:w-2"
            style={{ height: `${Math.max(8, h * 4)}px` }}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8134af]/40 text-[#8134af] shadow-sm sm:h-12 sm:w-12">
          <svg className="h-5 w-5 ml-0.5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="flex w-full items-center gap-2 sm:gap-3">
        <span className="text-[10px] text-slate-400 sm:text-xs">0:00</span>
        <div className="h-1.5 flex-1 rounded-full bg-slate-200 sm:h-2" />
        <span className="text-[10px] text-slate-400 sm:text-xs">3:24</span>
      </div>
    </div>
  );
}

function FeatureIllustration({ variant }: { variant: FeatureCardVariant }) {
  switch (variant) {
    case "organization":
      return <IllustrationOrganization />;
    case "explication":
      return <IllustrationExplication />;
    case "fiche":
      return <IllustrationFiche />;
    case "quiz":
      return <IllustrationQuiz />;
    case "chanson":
      return <IllustrationChanson />;
    default:
      return <IllustrationOrganization />;
  }
}

const CARD_CLASS =
  "flex flex-col rounded-3xl border border-slate-200/60 bg-[#F6F7FB] p-8 shadow-[0_12px_30px_rgba(15,23,42,0.06)]";
const ILLUSTRATION_BLOCK =
  "mt-5 flex min-h-[120px] flex-1 flex-col rounded-2xl border border-slate-200/50 bg-white p-5 md:min-h-[140px]";

export default function FeatureDetailCards({ features }: { features: DetailedFeature[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {features.map((feature) => (
        <article key={feature.id} className={CARD_CLASS}>
          <h3 className="text-[22px] font-semibold text-slate-900 md:text-[24px]">
            {feature.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-slate-500 md:text-[16px]">
            {feature.subtitle}
          </p>
          <div className={ILLUSTRATION_BLOCK}>
            <FeatureIllustration variant={feature.variant} />
          </div>
        </article>
      ))}
    </div>
  );
}
