/* Landing page moderne, minimaliste, inspirée Apple */
"use client";

import type { FormEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Hero from "../components/01-Hero";
import Liste from "../components/02-Liste";
import Slide from "../components/03-Slide";
import Cercle from "../components/04-Cercle";
import Commentaires from "../components/05-Commentaires";
import MenuBas from "../components/06-MenuBas";

function useInView(once = true, threshold = 0.18) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, threshold]);

  return { ref, inView };
}

type FadeInSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

function FadeInSection({ children, className, id }: FadeInSectionProps) {
  const { ref, inView } = useInView(true, 0.15);

  return (
    <section
      ref={ref}
      id={id}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className ?? ""}`}
    >
      {children}
    </section>
  );
}

/* Liste modifiable pour le bandeau "Défilement des marques" (marquee). Remplacer src par les URLs des logos. */
export type MarqueeLogo = { name: string; src?: string };

export const marqueeLogos: MarqueeLogo[] = [
  { name: "Google" },
  { name: "Apple" },
  { name: "Microsoft" },
  { name: "Amazon" },
  { name: "Meta" },
  { name: "Netflix" },
  { name: "Tesla" },
  { name: "Stanford" },
  { name: "MIT" },
  { name: "Harvard" },
];

/* Hauteur de la zone de scroll pour l’effet zoom vidéo (scrub) */
const VIDEO_ZOOM_SCROLL_HEIGHT = 280;

/* Hero unique : titre + vidéo dans la même section (design maquette). */
function HeroWithVideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const motionRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [videoError, setVideoError] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  const handleError = () => {
    setVideoError(true);
    setUseFallback(true);
  };

  useEffect(() => {
    const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const applyProgress = (motionEl: HTMLDivElement, pRaw: number) => {
      const p = clamp(pRaw, 0, 1);
      const rotatePhaseEnd = 0.45;
      const tRot = easeOutCubic(clamp(p / rotatePhaseEnd, 0, 1));
      const tZoom = easeOutCubic(clamp((p - rotatePhaseEnd) / (1 - rotatePhaseEnd), 0, 1));
      const rotateXDeg = lerp(40, 0, tRot);
      const rotateZDeg = lerp(-6, 0, tRot);
      const scaleDuringRot = lerp(0.75, 0.9, tRot);
      const scaleFinal = lerp(scaleDuringRot, 1, tZoom);
      const translateYPx = lerp(20, 0, tZoom);
      const radiusPx = lerp(24, 0, tZoom);
      const shadowOpacity = lerp(0.15, 0, tZoom);
      motionEl.style.transformOrigin = "50% 50%";
      motionEl.style.transform = `perspective(1200px) translate3d(0, ${translateYPx}px, 0) rotateX(${rotateXDeg}deg) rotateZ(${rotateZDeg}deg) scale(${scaleFinal})`;
      motionEl.style.borderRadius = `${radiusPx}px`;
      motionEl.style.boxShadow = `0 22px 60px rgba(0, 0, 0, ${shadowOpacity})`;
    };

    const computeProgress = (sectionEl: HTMLDivElement) => {
      const rect = sectionEl.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const scrollable = Math.max(1, rect.height - vh);
      return clamp(-rect.top / scrollable, 0, 1);
    };

    const update = () => {
      const sectionEl = sectionRef.current;
      const motionEl = motionRef.current;
      if (!sectionEl || !motionEl) return;
      if (mq.matches) {
        applyProgress(motionEl, 1);
        return;
      }
      applyProgress(motionEl, computeProgress(sectionEl));
    };

    const onScrollOrResize = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        update();
      });
    };
    update();
    const id = requestAnimationFrame(() => update());
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    mq.addEventListener("change", onScrollOrResize);
    return () => {
      cancelAnimationFrame(id);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      mq.removeEventListener("change", onScrollOrResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="video"
      className="relative bg-white"
      style={{ minHeight: `${VIDEO_ZOOM_SCROLL_HEIGHT}vh` }}
      aria-label="Accroche et vidéo"
    >
      {/* Contenu hero : label, titre, paragraphe, boutons — même section que la vidéo */}
      <div className="flex flex-col items-center px-4 pt-8 pb-12 text-center sm:px-6 sm:pb-16">
        <nav className="flex justify-center gap-8 text-sm text-[#0B0B0B]/70 transition-colors hover:text-[#0B0B0B]">
          <a href="#fonctionnalites" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)]">Fonctionnalités</a>
          <a href="#marques" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)]">Marques</a>
          <a href="#contact" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)]">Contact</a>
        </nav>
        <p className="mt-8 text-sm text-[#515154]">Une plateforme pour l&apos;apprentissage moderne</p>
        <h1 className="mx-auto mt-3 max-w-4xl text-[2.75rem] font-bold leading-[1.08] tracking-[-0.02em] text-[#0B0B0B] sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem]">
          Entrez dans le{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(105deg, #f58529 0%, #EE6B6E 45%, #8134af 100%)",
            }}
          >
            futur
          </span>{" "}
          de l&apos;apprentissage
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#515154] sm:text-lg">
          Une expérience ludique et structurée pour les enfants, avec une visibilité totale pour les parents.
        </p>
        <a href="#video" className="mt-8 inline-block text-sm font-medium text-[#0B0B0B] underline decoration-[#0B0B0B]/30 underline-offset-4 hover:decoration-[#0B0B0B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)]">
          Découvrir
        </a>
        <div className="mt-14 flex flex-col items-center gap-6 sm:flex-row sm:gap-4">
          <button
            type="button"
            className="inline-flex w-full min-w-[200px] items-center justify-center rounded-full bg-[#0B0B0B] px-6 py-3 text-sm font-medium text-white shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:bg-[#1a1a1a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)] sm:w-auto"
          >
            Commencer gratuitement
          </button>
          <button
            type="button"
            className="inline-flex w-full min-w-[200px] items-center justify-center rounded-full border border-[#0B0B0B] bg-white px-6 py-3 text-sm font-medium text-[#0B0B0B] hover:bg-[#F5F5F7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)] sm:w-auto"
          >
            Découvrir les fonctionnalités
          </button>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs text-[#515154] sm:gap-4 sm:text-sm">
          <MiniBenefit label="Ludique" colorClass="bg-[#fef3e8] text-[#f58529]" />
          <MiniBenefit label="Guidé" colorClass="bg-[#fde8e8] text-[#EE6B6E]" />
          <MiniBenefit label="Mesurable" colorClass="bg-[#f3e5f5] text-[#8134af]" />
        </div>
      </div>

      {/* Carte vidéo inclinée, visible dès le début — sticky au scroll */}
      <div className="sticky top-0 flex min-h-screen w-full items-center justify-center overflow-hidden bg-white">
        <div className="flex w-full justify-center px-4">
          <div
            ref={motionRef}
            className="video-motion relative overflow-hidden bg-black"
            style={{
              width: "min(100vw, 1100px)",
              height: "min(70vh, 56.25vw)",
              minWidth: 280,
              minHeight: 160,
              boxShadow: "0 25px 60px rgba(0,0,0,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 16,
            }}
          >
            {useFallback || videoError ? (
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundColor: "#0B0B0B",
                  backgroundImage:
                    "url(/video-poster.svg), linear-gradient(180deg, #FAFAFA 0%, #F0F0F0 100%)",
                }}
                role="img"
                aria-label="Aperçu statique de la plateforme"
              />
            ) : (
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/video-poster.svg"
                onError={handleError}
                preload="auto"
                aria-label="Vidéo de démonstration de la plateforme"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
                <source src="/generation-video.mp4" type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[var(--text-primary)]">
      <Hero />
      <MarqueeMarquesSection />
      <main className="flex flex-col">
        <Liste />

        <Slide />

        <Cercle />

        <section className="bg-white" aria-label="Commentaires">
          <Commentaires />
        </section>

        <section className="bg-[#F9F9FB] py-16 lg:py-24" aria-label="Inscription">
          <div className="mx-auto max-w-[1200px] px-6 md:px-8">
            <FinalCtaSection />
          </div>
        </section>

        <MenuBas />
      </main>
    </div>
  );
}

type MiniBenefitProps = {
  label: string;
  colorClass: string;
};

function MiniBenefit({ label, colorClass }: MiniBenefitProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-[#1D1D1F] shadow-[0_10px_35px_rgba(0,0,0,0.04)]">
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${colorClass}`}
      >
        ●
      </span>
      <span>{label}</span>
    </div>
  );
}

/* Bandeau "Défilement des marques" : pleine largeur, fond blanc, logos gris, marquee fluide */
function MarqueeMarquesSection() {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const list = reducedMotion ? marqueeLogos : [...marqueeLogos, ...marqueeLogos];

  return (
    <section
      id="marques"
      className="marquee-marques-section w-full bg-[#FFFFFF] py-12 sm:py-16"
      aria-label="Marques partenaires"
    >
      <div className={`marquee-container w-full overflow-hidden ${reducedMotion ? "marquee-static py-4" : "h-[72px] sm:h-[88px]"}`}>
        {reducedMotion ? (
          <div className="marquee-track flex flex-wrap justify-center gap-x-12 gap-y-4">
            {marqueeLogos.map((logo) => (
              <MarqueeLogoItem key={logo.name} logo={logo} />
            ))}
          </div>
        ) : (
          <div className="marquee-track marquee-track--marques flex items-center">
            {list.map((logo, index) => (
              <MarqueeLogoItem key={`${logo.name}-${index}`} logo={logo} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

const MARQUEE_LOGO_HEIGHT = 32;

function MarqueeLogoItem({ logo }: { logo: MarqueeLogo }) {
  return (
    <div
      className="flex h-[var(--logo-h)] min-w-[120px] flex-shrink-0 items-center justify-center px-6 transition-[opacity,filter] duration-200 hover:opacity-100"
      style={{ "--logo-h": `${MARQUEE_LOGO_HEIGHT}px` } as React.CSSProperties}
    >
      {logo.src ? (
        <img
          src={logo.src}
          alt={logo.name}
          className="max-h-full w-auto object-contain opacity-80 transition-opacity duration-200 hover:opacity-100"
          style={{ filter: "grayscale(1)" }}
          width={120}
          height={MARQUEE_LOGO_HEIGHT}
          loading="lazy"
        />
      ) : (
        <span
          className="text-center text-sm font-medium tracking-wide"
          style={{ color: "#B8B8B8" }}
          aria-hidden
        >
          {logo.name}
        </span>
      )}
    </div>
  );
}

/** Section 6 — Inscription (CTA / contact). */
function FinalCtaSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <FadeInSection id="contact" className="mb-0">
      <div className="rounded-[32px] border border-[#E5E5EA] bg-white px-6 py-12 text-center shadow-[0_14px_45px_rgba(0,0,0,0.06)] sm:px-12 lg:px-20 lg:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-[#0B0B0F] sm:text-3xl">
          Commencer gratuitement
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#515154] sm:text-lg">
          Sans engagement. Annulable à tout moment. Accès immédiat aux
          fonctionnalités essentielles.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row"
        >
          <div className="relative flex-1">
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Votre adresse email"
              className="h-12 w-full rounded-full border border-[#D2D2D7] bg-[#F5F5F7] px-5 text-base text-[#0B0B0F] outline-none transition focus:border-[#0B0B0F] focus:bg-white"
            />
          </div>
          <button
            type="submit"
            className="h-12 rounded-full bg-[#0B0B0F] px-8 text-base font-medium text-white shadow-[0_18px_45px_rgba(0,0,0,0.25)] transition hover:bg-black sm:w-auto"
          >
            S&apos;inscrire gratuitement
          </button>
        </form>

        <p className="mt-5 text-sm text-[#8E8E93]">
          Nous respectons votre confidentialité. Vos données ne sont jamais
          revendues et vous pouvez vous désabonner en un clic.
        </p>

        {submitted ? (
          <p className="mt-4 text-sm font-medium text-[#1D1D1F]">
            Merci ! Vérifiez votre boîte mail pour finaliser votre inscription.
          </p>
        ) : null}
      </div>
    </FadeInSection>
  );
}

