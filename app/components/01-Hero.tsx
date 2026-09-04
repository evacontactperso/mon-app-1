"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/** Taille fixe du mockup (non responsive, zoom uniquement) */
const MOCKUP_WIDTH = 960;
const MOCKUP_HEIGHT = 600;

/** 14 apps pour la carte "Toutes les apps" du mockup (alignement produit) */
const MOCKUP_APPS: { title: string; imageType: string }[] = [
  { title: "Discussions personnages historiques", imageType: "historical" },
  { title: "Carte mentale et schéma", imageType: "mindmap" },
  { title: "Fiches structurées", imageType: "structuredSheets" },
  { title: "Quizz", imageType: "quiz" },
  { title: "Cartes mémoire", imageType: "flashcards" },
  { title: "Chanson", imageType: "chanson" },
  { title: "Podcast", imageType: "podcast" },
  { title: "Vidéo explicative", imageType: "video" },
  { title: "Texte à trous", imageType: "fillBlanks" },
  { title: "Rédaction", imageType: "redaction" },
  { title: "Correction expliquée", imageType: "correction" },
  { title: "Session chronométrée", imageType: "timer" },
  { title: "Méthodes des épreuves", imageType: "examMethods" },
  { title: "Organisation des révisions", imageType: "revisionOrg" },
];

/** Schémas simples (logos/icônes) pour chaque app — pas d’images du site, lisibles en petit */
function MockupAppImage({ type }: { type: string }) {
  const base = "h-full w-full flex items-center justify-center rounded";
  switch (type) {
    case "historical":
      return <div className={`${base} gap-0.5 bg-[#f3e5f5]`}><div className="h-4 w-4 rounded-full bg-[#8134af]/40" /><div className="h-4 w-4 rounded-full bg-[#8134af]/50" /></div>;
    case "mindmap":
      return <div className={`${base} bg-[#d1fae5]`}><svg viewBox="0 0 24 24" className="h-6 w-6 text-[#059669]"><circle cx="12" cy="6" r="2" fill="currentColor" /><circle cx="8" cy="14" r="2" fill="currentColor" /><circle cx="16" cy="14" r="2" fill="currentColor" /><path d="M12 8v2M10 14l2-4M14 14l-2-4" stroke="currentColor" strokeWidth="1" fill="none" /></svg></div>;
    case "structuredSheets":
      return <div className={`${base} flex-col gap-0.5 bg-[#e0f2fe] p-1`}><div className="h-1 w-6 rounded bg-[#0284c7]/50" /><div className="h-0.5 w-full rounded bg-[#0284c7]/30" /><div className="h-0.5 w-4/5 rounded bg-[#0284c7]/20" /></div>;
    case "quiz":
      return <div className={`${base} gap-0.5 bg-[#fde8e8]`}>{["A","B","C"].map((l) => <span key={l} className="h-5 w-5 rounded border border-[#EE6B6E]/50 bg-white flex items-center justify-center text-[10px] font-bold text-slate-600">{l}</span>)}</div>;
    case "flashcards":
      return <div className={`${base} bg-[#fef3e8]`}><div className="flex gap-0.5">{[ -6, 0, 6 ].map((r) => <div key={r} className="h-6 w-4 rounded border border-[#f58529]/50 bg-white" style={{ transform: `rotate(${r}deg)` }} />)}</div></div>;
    case "chanson":
      return <div className={`${base} gap-0.5 bg-[#f3e5f5]`}>{[ 3, 5, 4, 6, 4 ].map((h, i) => <div key={i} className="w-1 rounded-full bg-[#8134af]/60" style={{ height: `${h}px` }} />)}</div>;
    case "podcast":
      return <div className={`${base} gap-1 bg-[#fef9c3]`}><div className="flex items-end gap-0.5">{[ 3, 5, 4, 6 ].map((h, i) => <div key={i} className="w-1 rounded-full bg-amber-500/70" style={{ height: `${h}px` }} />)}</div><div className="h-4 w-4 rounded-full bg-amber-500 flex items-center justify-center"><svg className="ml-0.5 h-2.5 w-2.5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></div></div>;
    case "video":
      return <div className={`${base} bg-[#e0f2fe]`}><div className="h-8 w-8 rounded-full bg-[#0284c7]/80 flex items-center justify-center"><svg className="ml-1 h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></div></div>;
    case "fillBlanks":
      return <div className={`${base} gap-0.5 bg-[#f3e5f5] text-[9px] text-slate-600`}><span>…</span><span className="rounded border border-dashed border-[#8134af]/60 bg-white/90 px-1">___</span><span>…</span></div>;
    case "redaction":
      return <div className={`${base} flex-col gap-0.5 bg-[#fde8e8] p-1`}><div className="h-0.5 w-full rounded bg-white/80" /><div className="h-0.5 w-full rounded bg-white/60" /><div className="h-0.5 w-3/4 rounded bg-white/50" /></div>;
    case "correction":
      return <div className={`${base} gap-0.5 bg-[#d1fae5]`}><div className="h-0.5 flex-1 rounded bg-[#fef9c3]/90" /><span className="text-[8px] font-semibold text-emerald-800">OK</span></div>;
    case "timer":
      return <div className={`${base} flex-col bg-[#f3e5f5]`}><div className="h-6 w-6 rounded-full border-2 border-[#8134af]/50 flex items-center justify-center"><span className="text-[10px] font-bold text-[#6b21a8]">25</span></div><span className="text-[8px] text-slate-500">min</span></div>;
    case "examMethods":
      return <div className={`${base} gap-0.5 bg-[#fef3e8]`}>{[ 1, 2, 3 ].map((n) => <span key={n} className="h-5 w-5 rounded-full bg-white border border-[#f58529]/50 flex items-center justify-center text-[10px] font-bold text-orange-600">{n}</span>)}</div>;
    case "revisionOrg":
      return <div className={`${base} gap-1 bg-[#fef9c3]`}><div className="flex flex-col items-center rounded bg-amber-100/80 px-1 py-0.5"><span className="text-[8px] font-bold text-amber-700">J</span><span className="text-xs font-bold text-slate-800">12</span></div><div className="h-1 w-4 rounded bg-amber-200/60" /></div>;
    default:
      return <div className={`${base} bg-slate-100/80`} />;
  }
}

/**
 * Section 1 — Titre général + Mockup dashboard (image principale selon wireframe).
 */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoZoneRef = useRef<HTMLDivElement>(null);
  const mockupViewportRef = useRef<HTMLDivElement>(null);
  const [mockupScale, setMockupScale] = useState(1);

  // Zoom sur le mockup (taille fixe) pour remplir le viewport — pas de responsive
  useLayoutEffect(() => {
    const el = mockupViewportRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (w > 0 && h > 0) setMockupScale(Math.min(w / MOCKUP_WIDTH, h / MOCKUP_HEIGHT));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Scroll pour la LARGEUR : toute la section (78vw → 100vw)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Scroll pour le REDRESSEMENT 3D : cible la zone vidéo (tilt back → face caméra)
  const { scrollYProgress: scrollYProgressTilt } = useScroll({
    target: videoZoneRef,
    offset: ["start 0.9", "start 0.2"],
  });

  // Mapping largeur : au chargement ~78vw, en scrollant → 100% (limité par le padding 1cm de chaque côté)
  const widthVw = useTransform(scrollYProgress, (v) => `${78 + v * 22}%`);

  // Redressement 3D : rotateX 35°→0°, translateY 0→80px (haut ancré, croissance uniquement vers le bas)
  const rotateXDeg = useTransform(scrollYProgressTilt, [0, 1], [35, 0]);
  const translateYPx = useTransform(scrollYProgressTilt, [0, 1], [0, 80]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-visible bg-white px-6 pt-24 md:px-10 md:pt-28 lg:px-16 xl:px-20"
      style={{ minHeight: "280vh" }}
      aria-label="Hero : titre + vidéo + logos de marque"
    >
      {/* Container central */}
      <div className="mx-auto max-w-7xl">
        {/* Badge : bulle grise (pill) */}
        <div className="mb-7 flex justify-center">
          <span
            className="inline-flex items-center rounded-full border border-gray-200/70 bg-gray-100 px-4 py-1.5 text-sm text-gray-600 shadow-sm"
            aria-hidden
          >
            L&apos;application de révisions n°1
          </span>
        </div>

        {/* Titre principal — dégradé Instagram sur "futur", "Entrer" avec E majuscule */}
        <h1 className="mx-auto mb-6 max-w-4xl text-center text-5xl font-semibold leading-[1.05] tracking-tight text-black md:text-6xl lg:text-7xl">
          Entrez dans le{" "}
          <span className="bg-gradient-to-r from-[#f58529] via-[#EE6B6E] to-[#8134af] bg-clip-text text-transparent">
            futur
          </span>{" "}
          de l&apos;apprentissage
        </h1>

        {/* Paragraphe */}
        <p className="mx-auto mb-10 max-w-2xl text-center text-lg leading-relaxed text-gray-600 md:text-xl">
          Les meilleures méthodes de révisions et d&apos;organisation.
        </p>

        {/* CTAs — boutons arrondis, principal noir */}
        <div className="mt-2 flex flex-col justify-center gap-4 sm:flex-row">
          <motion.button
            type="button"
            className="rounded-2xl bg-black px-7 py-3.5 font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Commencez gratuitement
          </motion.button>
          <motion.button
            type="button"
            className="rounded-2xl border border-gray-200 bg-white px-7 py-3.5 font-medium text-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Découvrir les fonctionnalités
          </motion.button>
        </div>
      </div>

      {/* Zone vidéo — sticky, 1cm de marge de chaque côté (la vidéo ne dépasse jamais), overflow visible pour ne pas couper le bas. */}
      <div
        ref={videoZoneRef}
        className="sticky top-0 flex min-h-screen flex-col overflow-visible bg-white px-[1cm] pt-16 pb-16"
      >
        <motion.div
          className="relative mx-auto flex w-full max-w-full justify-center"
          style={{ width: widthVw }}
        >
          {/* Transform : origin top pour ancrer le haut, translateY positif = croissance vers le bas. Pas de scale. */}
          <motion.div
            className="relative w-full overflow-visible"
            style={{
              rotateX: rotateXDeg,
              y: translateYPx,
              transformPerspective: 1400,
              transformOrigin: "center top",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            {/* Halo dégradé type Instagram (autour du mockup) */}
            <div
              className="absolute rounded-[28px] bg-gradient-to-r from-[#f58529] via-[#EE6B6E] to-[#8134af] blur-[1px]"
              style={{ inset: "-6px" }}
              aria-hidden
            />
            {/* Couche interne blanche = bordure dégradée propre */}
            <div
              className="absolute inset-[1px] rounded-[26px] bg-white"
              aria-hidden
            />
            {/* Mockup : image principale section 1 — taille fixe, zoom (non responsive) */}
            <div
              ref={mockupViewportRef}
              className="relative flex w-full overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
              style={{ aspectRatio: "16/10", minHeight: "420px" }}
              role="img"
              aria-label="Aperçu du tableau de bord : devoirs, session de travail, question IA, progrès et applications"
            >
              <div
                className="absolute left-1/2 top-1/2 flex origin-center rounded-3xl border border-slate-200/60 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
                style={{ width: MOCKUP_WIDTH, height: MOCKUP_HEIGHT, marginLeft: -MOCKUP_WIDTH / 2, marginTop: -MOCKUP_HEIGHT / 2, transform: `scale(${mockupScale})` }}
              >
                {/* Menu de gauche — plus large, Tableau de bord + 7 items */}
                <aside className="flex w-[200px] shrink-0 flex-col border-r border-slate-100 bg-[#FAFAFA] py-4 px-3">
                  <div className="rounded-xl bg-[#f3e5f5] px-3 py-2.5 text-xs font-medium text-[#6b21a8]">Tableau de bord</div>
                  {["Compréhension", "Apprentissages", "Entraînements", "Concentration", "Organisation", "Devoirs", "Méthodes"].map((label) => (
                    <div key={label} className="mt-1 rounded-xl px-3 py-2.5 text-xs font-medium text-slate-500">{label}</div>
                  ))}
                </aside>

                {/* Zone principale — hauteur 1/3 row1, 2/3 row2 ; Progrès 1/3, Apps 2/3 */}
                <main className="flex min-w-0 flex-1 flex-col overflow-hidden p-4">
                  <h2 className="shrink-0 text-base font-semibold text-slate-800">Dashboard</h2>
                  <div className="flex min-h-0 flex-1 flex-col gap-2 mt-2">
                    {/* Ligne 1 : 1/3 hauteur — 3 cartes même largeur */}
                    <div className="grid min-h-0 flex-1 grid-cols-3 gap-3">
                  {/* Carte 1 : Devoirs et contrôles */}
                  <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                    <h3 className="text-xs font-semibold text-slate-800">Devoirs et contrôles</h3>
                    <ul className="mt-2 space-y-1.5">
                      {[
                        { text: "Maths — exercices p.142", date: "Aujourd'hui" },
                        { text: "Histoire — fiche Révolution", date: "Jeudi" },
                        { text: "Contrôle maths", date: "Dans 3 jours" },
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 rounded-lg bg-slate-50/80 px-2 py-1.5">
                          <div className="h-3 w-3 shrink-0 rounded border border-slate-200" />
                          <span className="flex-1 text-[11px] text-slate-700">{item.text}</span>
                          <span className="text-[10px] text-slate-400">{item.date}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Carte 2 : Session chronométrée */}
                  <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                    <h3 className="text-xs font-semibold text-slate-800">Session de travail</h3>
                    <div className="mt-2 flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#faf5ff] to-[#fef7f0] py-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#8134af]/40 bg-[#f3e5f5]">
                        <span className="text-sm font-bold text-[#6b21a8]">25</span>
                      </div>
                      <p className="mt-2 text-[11px] font-medium text-slate-700">Lancer une session chronométrée</p>
                      <p className="text-[10px] text-slate-500">min</p>
                    </div>
                  </div>

                  {/* Carte 3 : Question à l'IA */}
                  <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                    <h3 className="text-xs font-semibold text-slate-800">Question à l&apos;IA</h3>
                    <div className="mt-2 rounded-xl border border-slate-200/60 bg-slate-50/50 px-2.5 py-2">
                      <p className="text-[11px] text-slate-400">Poser une question à l&apos;IA</p>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      <span className="rounded-full bg-[#f3e5f5] px-2 py-0.5 text-[10px] text-slate-600">Explique les fractions</span>
                      <span className="rounded-full bg-[#fde8e8] px-2 py-0.5 text-[10px] text-slate-600">Teste-moi</span>
                    </div>
                  </div>
                    </div>

                    {/* Ligne 2 : 2/3 hauteur — Progrès 1/3 largeur, Toutes les apps 2/3 */}
                    <div className="grid min-h-0 flex-[2] grid-cols-3 gap-3" style={{ gridTemplateColumns: "1fr 2fr" }}>
                  {/* Carte Progrès (graphique 2 courbes mockup) */}
                  <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                    <h3 className="text-xs font-semibold text-slate-800">Progrès</h3>
                    <div className="mt-2 flex gap-4">
                      <div>
                        <p className="text-lg font-bold text-[#8134af]">78%</p>
                        <p className="text-[10px] text-slate-500">Complétion devoirs</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-[#f58529]">85%</p>
                        <p className="text-[10px] text-slate-500">Questions réussies</p>
                      </div>
                    </div>
                    <div className="mt-2 h-16 w-full">
                      <svg viewBox="0 0 200 60" className="h-full w-full" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="curveViolet" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#8134af" stopOpacity="0.3" /><stop offset="100%" stopColor="#8134af" stopOpacity="0" /></linearGradient>
                          <linearGradient id="curvePeach" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#f58529" stopOpacity="0.3" /><stop offset="100%" stopColor="#f58529" stopOpacity="0" /></linearGradient>
                        </defs>
                        <path d="M 0 45 Q 25 50 50 40 T 100 35 T 150 25 T 200 30 L 200 60 L 0 60 Z" fill="url(#curveViolet)" />
                        <path d="M 0 50 Q 30 45 60 38 T 120 28 T 200 35 L 200 60 L 0 60 Z" fill="url(#curvePeach)" />
                        <path d="M 0 45 Q 25 50 50 40 T 100 35 T 150 25 T 200 30" fill="none" stroke="#8134af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M 0 50 Q 30 45 60 38 T 120 28 T 200 35" fill="none" stroke="#f58529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="mt-1 flex gap-3 text-[10px]">
                      <span className="flex items-center gap-1"><span className="h-1.5 w-3 rounded-full bg-[#8134af]" /> Devoirs</span>
                      <span className="flex items-center gap-1"><span className="h-1.5 w-3 rounded-full bg-[#f58529]" /> Exercices</span>
                    </div>
                  </div>

                  {/* Carte Toutes les apps (14 mini-cartes) */}
                  <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                    <h3 className="text-xs font-semibold text-slate-800">Toutes les apps</h3>
                    <div className="mt-2 grid grid-cols-4 gap-1.5">
                      {MOCKUP_APPS.map((app, i) => (
                        <div key={i} className="flex flex-col rounded-xl border border-slate-100 bg-slate-50/50 overflow-hidden">
                          <div className="h-10 w-full shrink-0 overflow-hidden rounded-t-xl">
                            <MockupAppImage type={app.imageType} />
                          </div>
                          <p className="line-clamp-2 px-1 py-0.5 text-[9px] font-medium leading-tight text-slate-700">{app.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
