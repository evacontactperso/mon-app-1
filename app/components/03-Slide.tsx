"use client";

/** Section 3 — 6 slides : un mouvement vers le bas (pad/souris) = slide suivante, fondu court, carte 100 % nette au repos. */

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SlideVariant = "fun" | "interactive" | "questions" | "homework" | "organize" | "encouraged";

const FEATURES = [
  {
    id: 1,
    title: "Apprendre son cours en s'amusant",
    description:
      "Rendez les révisions agréables grâce à des jeux et des défis qui motivent sans avoir l'air de travailler.",
    bullets: [
      "Discussions interactives avec des personnages historiques",
      "Chansons et podcasts pour retenir son cours",
      "Cartes mentales et schémas visuels",
    ],
    accent: "violet",
    variant: "fun" as SlideVariant,
    Icon: IconParcours,
  },
  {
    id: 2,
    title: "S'exercer de manière intéractive",
    description:
      "Mettez en pratique avec des exercices variés et un retour immédiat.",
    bullets: [
      "Quizz, textes à trous, Flashcards",
      "Accompagnement dans la résolution d'exercice",
      "Corrections expliquées et feedback immédiats",
    ],
    accent: "blue",
    variant: "interactive" as SlideVariant,
    Icon: IconProjets,
  },
  {
    id: 3,
    title: "Poser toutes les questions que l'on souhaite",
    description:
      "Posez autant de questions qu'il faut pour tout comprendre.",
    bullets: [
      "Questions illimitées",
      "Réponses détaillées",
      "Compréhension à son rythme",
    ],
    accent: "emerald",
    variant: "questions" as SlideVariant,
    Icon: IconMentorat,
  },
  {
    id: 4,
    title: "Être accompagné au quotidien dans ses devoirs",
    description:
      "Un soutien au jour le jour pour avancer sereinement dans les devoirs.",
    bullets: [
      "Aide pour les exposés, les fiches de lecture, la compréhension des exercices",
      "Suivi personnalisé",
      "Sessions de travail chronométrées",
    ],
    accent: "orange",
    variant: "homework" as SlideVariant,
    Icon: IconSuivi,
  },
  {
    id: 5,
    title: "Apprendre à s'organiser efficacement",
    description:
      "Méthodes simples pour planifier vos révisions et gérer votre temps.",
    bullets: [
      "Planning de révisions",
      "Rappels réguliers",
      "Méthodes éprouvées",
    ],
    accent: "rose",
    variant: "organize" as SlideVariant,
    Icon: IconCertifications,
  },
  {
    id: 6,
    title: "Être encouragé et valorisé dans ses progrès",
    description:
      "Chaque progrès compte : suivez votre évolution et recevez des encouragements.",
    bullets: [
      "Suivi des progrès",
      "Encouragements",
      "Motivation et confiance en soi",
    ],
    accent: "amber",
    variant: "encouraged" as SlideVariant,
    Icon: IconEncouraged,
  },
];

/* Palette type Instagram : orange, rose, violet, jaune — vif et élégant */
const ACCENT_CLASSES = {
  violet: {
    square: "bg-[#8134af]",
    pill: "bg-[#f3e5f5] text-[#6b21a8]",
    mock: "from-[#f3e5f5] to-[#faf5fc]",
  },
  blue: {
    square: "bg-[#f77737]",
    pill: "bg-[#fef3e8] text-[#c2410c]",
    mock: "from-[#fef3e8] to-[#fff8f5]",
  },
  emerald: {
    square: "bg-[#EE6B6E]",
    pill: "bg-[#fde8e8] text-[#D65558]",
    mock: "from-[#fde8e8] to-[#fdf0f0]",
  },
  orange: {
    square: "bg-[#f58529]",
    pill: "bg-[#fef3e8] text-[#ea580c]",
    mock: "from-[#fef3e8] to-[#fffbeb]",
  },
  rose: {
    square: "bg-[#EE6B6E]",
    pill: "bg-[#fde8e8] text-[#D65558]",
    mock: "from-[#fde8e8] to-[#fdf0f0]",
  },
  amber: {
    square: "bg-[#fcaf45]",
    pill: "bg-[#fff8e7] text-[#d97706]",
    mock: "from-[#fff8e7] to-[#fffbeb]",
  },
} as const;

function IconParcours({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
function IconProjets({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}
function IconMentorat({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}
function IconSuivi({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}
function IconCertifications({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 15l4-2v6l-4 2-4-2v-6l4 2z" />
      <path d="M12 9V3l4 2-4 2-4-2 4-2" />
    </svg>
  );
}
function IconEncouraged({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function BulletShellIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v4l3 2-3 2v4" />
      <path d="M5 6l3 2 3-2" />
    </svg>
  );
}

const SLIDE_ILLUSTRATION_WRAPPER = "flex h-full w-full flex-1 flex-col justify-center gap-4";

function SlideIllustrationFun() {
  return (
    <div className="flex h-full w-full min-h-[240px] md:min-h-[320px] overflow-hidden rounded-2xl">
      <img
        src="/slide-1-chanson-etude.png"
        alt="Élève avec casque qui écoute une chanson pour retenir son cours, ordinateur et notes de musique"
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}

function SlideIllustrationInteractive() {
  return (
    <div className="flex h-full w-full min-h-[240px] md:min-h-[320px] overflow-hidden rounded-2xl">
      <img
        src="/slide-2-exercice-interactif.png"
        alt="Ado avec écran transparent, défi géométrie sur les angles, exercice interactif"
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}

function SlideIllustrationQuestions() {
  return (
    <div className={SLIDE_ILLUSTRATION_WRAPPER}>
      <div className="flex justify-end">
        <div className="rounded-xl rounded-tr-none bg-slate-100 px-3 py-2 md:px-4 md:py-2.5">
          <div className="h-2.5 w-20 rounded bg-slate-300/70 md:h-3 md:w-24" />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="h-8 w-8 shrink-0 rounded-full bg-[#EE6B6E]/30 md:h-10 md:w-10" />
        <div className="min-w-0 flex-1 rounded-xl rounded-tl-none bg-[#fde8e8] p-2.5 md:p-3">
          <div className="h-2.5 w-full rounded bg-[#EE6B6E]/40 md:h-3" />
          <div className="mt-1.5 h-2 w-4/5 rounded bg-[#EE6B6E]/25 md:mt-2 md:h-2.5" />
        </div>
      </div>
      <div className="flex justify-center">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fff8e7] text-sm font-bold text-[#d97706] md:h-9 md:w-9 md:text-base">?</span>
      </div>
    </div>
  );
}

function SlideIllustrationHomework() {
  return (
    <div className={SLIDE_ILLUSTRATION_WRAPPER}>
      <div className="flex w-full gap-2">
        <div className="h-7 w-7 shrink-0 rounded-md bg-[#fef3e8] md:h-8 md:w-8" />
        <div className="h-3 flex-1 rounded bg-slate-200/70 md:h-3.5" />
      </div>
      <div className="flex w-full gap-2">
        <div className="h-7 w-7 shrink-0 rounded-md bg-[#f3e5f5] md:h-8 md:w-8" />
        <div className="h-3 flex-1 rounded bg-slate-200/60 md:h-3.5" />
      </div>
      <div className="flex w-full gap-2">
        <div className="h-7 w-7 shrink-0 rounded-md bg-[#fde8e8] md:h-8 md:w-8" />
        <div className="h-3 flex-1 rounded bg-slate-200/50 md:h-3.5" />
      </div>
      <div className="flex items-center gap-2 rounded-lg bg-slate-100/80 px-2.5 py-1.5 md:rounded-xl md:px-3">
        <span className="text-xs text-slate-500 md:text-sm">Aujourd&apos;hui</span>
        <div className="h-2 flex-1 rounded-full bg-[#8134af]/30 md:h-2.5" />
      </div>
    </div>
  );
}

function SlideIllustrationOrganize() {
  return (
    <div className={SLIDE_ILLUSTRATION_WRAPPER}>
      <div className="flex gap-2 md:gap-3">
        {["1", "2", "3"].map((n) => (
          <div key={n} className="flex flex-1 flex-col items-center gap-1.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#8134af]/50 bg-[#f3e5f5] text-xs font-semibold text-[#6b21a8] md:h-8 md:w-8 md:text-sm">
              {n}
            </div>
            <div className="h-2.5 w-full rounded bg-slate-200/50 md:h-3" />
          </div>
        ))}
      </div>
      <div className="flex w-full items-center gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-[#EE6B6E] md:h-3 md:w-3" />
        <div className="h-2.5 flex-1 rounded bg-slate-200/60 md:h-3" />
      </div>
      <div className="flex w-full items-center gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-[#fcaf45] md:h-3 md:w-3" />
        <div className="h-2.5 flex-1 rounded bg-slate-200/50 md:h-3" />
      </div>
    </div>
  );
}

function SlideIllustrationEncouraged() {
  return (
    <div className={SLIDE_ILLUSTRATION_WRAPPER}>
      <div className="flex justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff8e7] md:h-14 md:w-14">
          <svg className="h-6 w-6 text-[#f58529] md:h-7 md:w-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>
      </div>
      <div className="flex justify-center gap-1 md:gap-1.5">
        {[4, 6, 8, 7, 5].map((h, i) => (
          <div
            key={i}
            className="w-2 rounded-full bg-[#8134af]/70 md:w-2.5"
            style={{ height: `${h * 4}px` }}
          />
        ))}
      </div>
      <div className="flex items-center justify-center gap-1.5 rounded-lg bg-[#fde8e8] px-3 py-1.5 md:rounded-xl md:px-4 md:py-2">
        <span className="text-sm font-medium text-[#D65558] md:text-base">Bravo</span>
      </div>
    </div>
  );
}

function SlideIllustration({ variant }: { variant: SlideVariant }) {
  switch (variant) {
    case "fun":
      return <SlideIllustrationFun />;
    case "interactive":
      return <SlideIllustrationInteractive />;
    case "questions":
      return <SlideIllustrationQuestions />;
    case "homework":
      return <SlideIllustrationHomework />;
    case "organize":
      return <SlideIllustrationOrganize />;
    case "encouraged":
      return <SlideIllustrationEncouraged />;
    default:
      return <SlideIllustrationFun />;
  }
}

type FeatureSlideContentProps = {
  feature: (typeof FEATURES)[number];
};

/** Carte statique : pas de transform au repos → rendu 100 % net. */
function FeatureSlideContent({ feature }: FeatureSlideContentProps) {
  const accent = ACCENT_CLASSES[feature.accent as keyof typeof ACCENT_CLASSES];
  return (
    <div className="relative w-full max-w-6xl overflow-visible">
      <div
        className={`absolute left-0 top-0 z-10 flex h-14 w-14 items-center justify-center rounded-2xl ${accent.square} text-white shadow-lg`}
        style={{ transform: "translate(-50%, -50%)" }}
        aria-hidden
      >
        <feature.Icon className="h-7 w-7" />
      </div>
      <div className="overflow-hidden rounded-3xl border border-slate-200/60 bg-white px-8 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.12)] min-h-[420px] md:min-h-[520px] md:px-12 md:py-14">
        <div className="flex h-full flex-col gap-10 md:flex-row md:items-stretch md:gap-14">
          <div className="min-w-0 flex-1 md:w-1/2">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl lg:text-[32px]">
              {feature.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-500 md:mt-7 md:text-[17px]">
              {feature.description}
            </p>
            <ul className="mt-8 flex flex-col gap-4">
              {feature.bullets.map((label) => (
                <li key={label} className="flex items-center gap-3">
                  <span className={`flex h-8 shrink-0 items-center justify-center rounded-full px-2.5 ${accent.pill}`}>
                    <BulletShellIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-slate-700 md:text-base">{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex shrink-0 flex-col md:w-1/2">
            <div className={`flex h-full min-h-[240px] items-center justify-center rounded-2xl bg-gradient-to-br ${accent.mock} p-8 md:min-h-[320px] md:p-10`}>
              <SlideIllustration variant={feature.variant} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FADE_DURATION = 0.22;

export default function Slide() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slideIndexRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastWheelTime = useRef(0);
  const touchGestureHandled = useRef(false);
  const WHEEL_COOLDOWN_MS = 1000;

  useEffect(() => {
    slideIndexRef.current = slideIndex;
  }, [slideIndex]);

  const goNext = useCallback(() => {
    setSlideIndex((i) => (i >= FEATURES.length - 1 ? i : i + 1));
  }, []);
  const goPrev = useCallback(() => {
    setSlideIndex((i) => (i <= 0 ? i : i - 1));
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const shouldCaptureScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight || 0;
      if (!vh) return true;
      const containerCenter = rect.top + rect.height / 2;
      const viewportCenter = vh / 2;
      const distance = Math.abs(containerCenter - viewportCenter);
      const maxOffset = Math.min(vh * 0.15, 120); // tolérance ~15 % de l'écran (max 120px)
      return distance < maxOffset;
    };

    const onWheel = (e: WheelEvent) => {
      const current = slideIndexRef.current;
      // En première slide + scroll vers le haut : laisser le scroll remonter (sortie section)
      if (current <= 0 && e.deltaY < 0) return;
      // En dernière slide + scroll vers le bas : laisser le scroll descendre (sortie section)
      if (current >= FEATURES.length - 1 && e.deltaY > 0) return;

      // Ne commencer à capter le scroll que lorsque la carte est bien centrée
      if (!shouldCaptureScroll()) return;

      const now = Date.now();
      if (now - lastWheelTime.current < WHEEL_COOLDOWN_MS) {
        e.preventDefault();
        return;
      }
      if (e.deltaY > 0) {
        lastWheelTime.current = now;
        e.preventDefault();
        goNext();
      } else if (e.deltaY < 0) {
        lastWheelTime.current = now;
        e.preventDefault();
        goPrev();
      }
    };

    let touchY0 = 0;
    const THRESHOLD = 40;
    const onTouchStart = (e: TouchEvent) => {
      touchGestureHandled.current = false;
      touchY0 = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (touchGestureHandled.current) return;
      const current = slideIndexRef.current;
      const y = e.touches[0].clientY;
      const delta = y - touchY0;

      // Ne capter le geste que si la carte est suffisamment centrée dans le viewport
      if (!shouldCaptureScroll()) return;

      // En première slide + swipe up : laisser le scroll (sortie section)
      if (current <= 0 && delta < -THRESHOLD) return;
      // En dernière slide + swipe down : laisser le scroll (sortie section)
      if (current >= FEATURES.length - 1 && delta > THRESHOLD) return;

      const now = Date.now();
      if (now - lastWheelTime.current < WHEEL_COOLDOWN_MS) return;
      if (delta > THRESHOLD) {
        lastWheelTime.current = now;
        touchGestureHandled.current = true;
        e.preventDefault();
        goPrev();
      } else if (delta < -THRESHOLD) {
        lastWheelTime.current = now;
        touchGestureHandled.current = true;
        e.preventDefault();
        goNext();
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
    };
  }, [goNext, goPrev]);

  return (
    <section
      className="relative bg-white pt-0 mt-0"
      style={{ height: "100vh", minHeight: "100vh" }}
      aria-label="Slide : 6 slides"
    >
      <div
        ref={containerRef}
        className="sticky top-0 flex min-h-screen h-screen w-full items-center justify-center overflow-visible bg-gray-100 px-4 md:px-10"
      >
        <div className="relative w-full max-w-6xl">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={slideIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: FADE_DURATION, ease: "easeOut" }}
              className="flex items-center justify-center"
            >
              <FeatureSlideContent feature={FEATURES[slideIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
