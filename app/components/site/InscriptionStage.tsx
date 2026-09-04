"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import SectionHeader from "./SectionHeader";

// TODO: préciser l'année / les horaires exacts si besoin
const DATES_STAGE =
  "Lundi au vendredi — 1ère ou 2ème semaine de la Toussaint";

const CTA_HREF = "/contact?offre=stage-vacances";

const SECTION = {
  id: "inscription",
  title: "Inscription au stage\ndes vacances de la Toussaint",
  subtitle:
    "Le nombre de places est limité pour préserver un format où chaque élève peut vraiment être accompagné",
} as const;

type FeatureTone = "amber" | "indigo" | "green" | "cyan" | "pink";

type FeatureCard = {
  id: string;
  label: string;
  value: string;
  tone: FeatureTone;
  icon: "bolt" | "calendar" | "users" | "grad" | "target" | "monitor";
};

const FEATURE_CARDS: FeatureCard[] = [
  {
    id: "format",
    label: "Format",
    value: "5 séances de 2 h, sur 5 jours",
    tone: "amber",
    icon: "bolt",
  },
  {
    id: "dates",
    label: "Dates",
    value: DATES_STAGE,
    tone: "indigo",
    icon: "calendar",
  },
  {
    id: "groupe",
    label: "Groupe",
    value: "Petit effectif, 5 élèves maximum",
    tone: "green",
    icon: "users",
  },
  {
    id: "public",
    label: "Public",
    value: "Collégiens et lycéens",
    tone: "cyan",
    icon: "grad",
  },
  {
    id: "objectif",
    label: "Objectif",
    value: "Repartir avec une méthode de travail claire",
    tone: "pink",
    icon: "target",
  },
  {
    id: "lieu",
    label: "Lieu",
    value: "En ligne, lien de connexion envoyé après inscription",
    tone: "amber",
    icon: "monitor",
  },
];

const PRICING = {
  availability: "Places limitées",
  price: "499 €",
  rateDetail: "10 h d'accompagnement",
  includes: [
    "Supports et fiches réutilisables",
    "Plan de travail personnalisé pour la rentrée",
    "Exercices d'application sur ses propres cours",
    "Retour individuel de l'intervenant",
    "Accès aux ressources après le stage",
  ],
  ctaPrimary: { label: "Inscrire mon enfant", href: CTA_HREF },
  ctaSecondary: { label: "Une question ? Écrivez-nous", href: CTA_HREF },
  reassurance: "Paiement sécurisé · Confirmation par e-mail · Conditions d'annulation",
} as const;

const TONE_STYLES: Record<FeatureTone, { badge: string; icon: string }> = {
  amber: {
    badge: "bg-[#fff8e7] text-[#b45309] ring-1 ring-[#fcaf45]/25",
    icon: "stroke-[#b45309]",
  },
  indigo: {
    badge: "bg-[#EEF2FF] text-[#6366F1] ring-1 ring-[#6366F1]/20",
    icon: "stroke-[#6366F1]",
  },
  green: {
    badge: "bg-[#ecfdf5] text-[#059669] ring-1 ring-emerald-300/40",
    icon: "stroke-[#059669]",
  },
  cyan: {
    badge: "bg-[#ddf6f8] text-[#0891b2] ring-1 ring-[#2ec8dc]/25",
    icon: "stroke-[#0891b2]",
  },
  pink: {
    badge: "bg-[#fde8e8] text-[#EE6B6E] ring-1 ring-[#EE6B6E]/20",
    icon: "stroke-[#EE6B6E]",
  },
};

function FeatureIcon({
  name,
  className,
}: {
  name: FeatureCard["icon"];
  className?: string;
}) {
  const common = `h-4 w-4 ${className ?? ""}`;
  switch (name) {
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <path
            d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-current"
          />
        </svg>
      );
    case "calendar":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <rect x="3" y="5" width="18" height="16" rx="2" strokeWidth="2" className="stroke-current" />
          <path d="M3 10h18M8 3v4M16 3v4" strokeWidth="2" strokeLinecap="round" className="stroke-current" />
        </svg>
      );
    case "users":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <circle cx="9" cy="8" r="3" strokeWidth="2" className="stroke-current" />
          <circle cx="17" cy="9" r="2.5" strokeWidth="2" className="stroke-current" />
          <path
            d="M3 19c0-2.8 2.7-5 6-5s6 2.2 6 5M14 17.5c1.8-.7 5-.7 7 1.5"
            strokeWidth="2"
            strokeLinecap="round"
            className="stroke-current"
          />
        </svg>
      );
    case "grad":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <path d="m12 4 10 5-10 5L2 9l10-5Z" strokeWidth="2" strokeLinejoin="round" className="stroke-current" />
          <path d="M5 11v5c0 1.5 3 3 7 3s7-1.5 7-3v-5" strokeWidth="2" className="stroke-current" />
          <path d="M22 9v6" strokeWidth="2" strokeLinecap="round" className="stroke-current" />
        </svg>
      );
    case "target":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <circle cx="12" cy="12" r="8" strokeWidth="2" className="stroke-current" />
          <circle cx="12" cy="12" r="4" strokeWidth="2" className="stroke-current" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" className="fill-current" />
        </svg>
      );
    case "monitor":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <rect x="3" y="4" width="18" height="12" rx="2" strokeWidth="2" className="stroke-current" />
          <path d="M8 20h8M12 16v4" strokeWidth="2" strokeLinecap="round" className="stroke-current" />
        </svg>
      );
  }
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} fill="none" aria-hidden>
      <path
        d="M2.5 6.5 5 9l4.5-5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function useInView(ref: React.RefObject<Element | null>, options?: IntersectionObserverInit) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, options);
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options?.rootMargin, options?.threshold]);
  return inView;
}

function Reveal({
  children,
  delayMs = 0,
  reducedMotion,
  className = "",
}: {
  children: ReactNode;
  delayMs?: number;
  reducedMotion: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  return (
    <div
      ref={ref}
      className={className}
      style={
        reducedMotion
          ? undefined
          : {
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(12px)",
              transition: `opacity 400ms ease-out ${delayMs}ms, transform 400ms ease-out ${delayMs}ms`,
            }
      }
    >
      {children}
    </div>
  );
}

function PricingCard({ className = "" }: { className?: string }) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <aside
      className={`flex h-full flex-col rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)] md:p-7 ${className}`}
    >
      <div className="inline-flex items-center gap-2 rounded-full bg-[#fff8e7] px-3 py-1.5 text-xs font-semibold text-[#b45309] ring-1 ring-[#fcaf45]/25">
        <span className="relative flex h-2 w-2">
          <span
            className={`absolute inline-flex h-full w-full rounded-full bg-[#fcaf45] opacity-60 ${
              reducedMotion ? "" : "animate-ping"
            }`}
            style={reducedMotion ? undefined : { animationDuration: "2.4s" }}
          />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#fcaf45]" />
        </span>
        {PRICING.availability}
      </div>

      <p className="mt-5 text-5xl font-extrabold tabular-nums tracking-tight text-[#0B0B0B] md:text-6xl">
        {PRICING.price}
      </p>
      <p className="mt-2 text-sm text-[#515154]">{PRICING.rateDetail}</p>

      <div className="my-6 h-px bg-slate-200/80" />

      <ul className="space-y-3">
        {PRICING.includes.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#515154]">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ecfdf5] text-[#059669] ring-1 ring-emerald-200/70">
              <CheckIcon className="h-2.5 w-2.5" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        <Link
          href={PRICING.ctaPrimary.href}
          className="flex w-full items-center justify-center rounded-2xl bg-[#EE6B6E] px-5 py-3.5 text-sm font-bold text-white shadow-[0_4px_14px_rgba(238,107,110,0.25)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#E05558] hover:shadow-[0_8px_20px_rgba(238,107,110,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE6B6E] focus-visible:ring-offset-2"
        >
          {PRICING.ctaPrimary.label}
        </Link>

        <Link
          href={PRICING.ctaSecondary.href}
          className="mt-4 block text-center text-sm font-medium text-[#6366F1] underline-offset-4 transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-2"
        >
          {PRICING.ctaSecondary.label}
        </Link>

        <p className="mt-5 text-center text-[11px] leading-relaxed text-[#6b7280]">
          {PRICING.reassurance}
        </p>
      </div>
    </aside>
  );
}

function MobileStickyCta({
  sectionRef,
  pricingRef,
}: {
  sectionRef: React.RefObject<HTMLElement | null>;
  pricingRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const pricing = pricingRef.current;
    if (!section || !pricing) return;

    let sectionInView = false;
    let pricingInView = false;

    const update = () => {
      setVisible(sectionInView && !pricingInView);
    };

    const sectionObs = new IntersectionObserver(
      ([entry]) => {
        sectionInView = entry.isIntersecting;
        update();
      },
      { threshold: 0.08 }
    );
    const pricingObs = new IntersectionObserver(
      ([entry]) => {
        pricingInView = entry.isIntersecting;
        update();
      },
      { threshold: 0.35 }
    );

    sectionObs.observe(section);
    pricingObs.observe(pricing);
    return () => {
      sectionObs.disconnect();
      pricingObs.disconnect();
    };
  }, [sectionRef, pricingRef]);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/80 bg-white/90 px-4 py-3 shadow-[0_-8px_30px_rgba(15,23,42,0.08)] backdrop-blur-md transition duration-200 lg:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <p className="text-xl font-extrabold tabular-nums text-[#0B0B0B]">{PRICING.price}</p>
        <Link
          href={PRICING.ctaPrimary.href}
          tabIndex={visible ? 0 : -1}
          className="rounded-xl bg-[#EE6B6E] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#E05558] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE6B6E] focus-visible:ring-offset-2"
        >
          Inscrire
        </Link>
      </div>
    </div>
  );
}

export default function InscriptionStage() {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <section
        ref={sectionRef}
        id={SECTION.id}
        aria-labelledby="inscription-title"
        className="relative overflow-hidden bg-[#FAF8F5] py-24 md:py-32"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(252,175,69,0.08)_0%,_transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div id="inscription-title">
            <SectionHeader
              title={SECTION.title}
              subtitle={SECTION.subtitle}
              highlight="Inscription"
              align="center"
              accent="pink"
            />
          </div>

          <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-12">
            <div className="flex flex-col lg:col-span-7">
              <dl className="flex flex-1 flex-col gap-3">
                {FEATURE_CARDS.map((card, index) => {
                  const tone = TONE_STYLES[card.tone];
                  return (
                    <Reveal
                      key={card.id}
                      delayMs={index * 60}
                      reducedMotion={reducedMotion}
                      className="flex-1"
                    >
                      <div className="flex h-full items-center rounded-2xl border border-slate-200/70 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
                        <div className="flex items-start gap-3">
                          <span
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${tone.badge}`}
                          >
                            <FeatureIcon name={card.icon} />
                          </span>
                          <div className="min-w-0">
                            <dt className="text-[11px] font-bold uppercase tracking-widest text-[#6b7280]">
                              {card.label}
                            </dt>
                            <dd className="mt-1 text-sm font-medium leading-snug text-[#0B0B0B]">
                              {card.value}
                            </dd>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </dl>
            </div>

            <div className="flex lg:col-span-5">
              <div ref={pricingRef} className="flex w-full flex-1">
                <PricingCard className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MobileStickyCta sectionRef={sectionRef} pricingRef={pricingRef} />
    </>
  );
}
