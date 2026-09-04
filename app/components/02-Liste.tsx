"use client";

/**
 * Section 2 — Liste des fonctionnalités en grille 4 colonnes.
 * Ligne 1 : 4 cartes (Discussions, Carte mentale, Quizz, Chanson).
 * Ligne 2 : Flashcards (3 col) + Texte à trous (1 col).
 * Ligne 3 : Session chronométrée (1 col), Carte mentale 3 étapes (1 col), Organisation des devoirs (2 col).
 * Référence : section blanche → carte #F6F7FB → bloc illustration blanc.
 */

const CARD_BASE =
  "flex flex-col rounded-3xl border border-slate-200/60 bg-[#F6F7FB] shadow-[0_12px_30px_rgba(15,23,42,0.06)]";
const CARD_SMALL = `${CARD_BASE} p-6 min-h-[260px] md:min-h-[280px]`;
const CARD_LARGE = `${CARD_BASE} p-8 min-h-[420px] md:min-h-[450px]`;
const ILLUSTRATION_BLOCK =
  "mt-5 flex min-h-[120px] flex-1 flex-col rounded-2xl border border-slate-200/50 bg-white p-5 md:min-h-[140px]";
const ILLUSTRATION_BLOCK_RIGHT =
  "flex min-h-[100px] w-full flex-1 flex-col rounded-2xl border border-slate-200/50 bg-white p-4 shrink-0 md:min-h-[120px] md:min-w-[140px] md:max-w-[180px]";

type FeatureVariant =
  | "historical"
  | "mindmap"
  | "mindmap3Steps"
  | "quiz"
  | "chanson"
  | "flashcards"
  | "fillBlanks"
  | "reminder"
  | "timer"
  | "chatQuestions"
  | "homeworkAgenda";

/* Illustrations : adaptées à la taille des cartes (petites / grande 2/3 / grande 1/3), palette pastel, style homogène */

const ILLUSTRATION_WRAPPER = "flex h-full w-full min-h-[90px] flex-1";

/* Discussions avec personnages historiques — élève à gauche, Einstein à droite (2 images) */
function IllustrationHistorical() {
  return (
    <div className={`${ILLUSTRATION_WRAPPER} min-h-[120px] overflow-hidden rounded-2xl`}>
      <div className="flex h-full w-full gap-1 sm:gap-2">
        <img
          src="/eleve-portrait.png"
          alt="Élève"
          className="h-full w-1/2 object-cover object-center rounded-l-2xl"
        />
        <img
          src="/einstein-portrait.png"
          alt="Personnage historique (Einstein)"
          className="h-full w-1/2 object-cover object-center rounded-r-2xl"
        />
      </div>
    </div>
  );
}

/* Quiz : formule de Pythagore, 3 options, bonne réponse au milieu (B) */
const QUIZ_OPTIONS = [
  { letter: "A", text: "a + b = c", correct: false },
  { letter: "B", text: "a² + b² = c²", correct: true },
  { letter: "C", text: "c = a × b", correct: false },
];

function IllustrationQuiz() {
  return (
    <div className={`${ILLUSTRATION_WRAPPER} flex-col justify-center gap-2 sm:gap-3`}>
      {/* Question 7/20 en haut */}
      <div className="flex items-center justify-between rounded-lg bg-[#f3e5f5] px-2.5 py-1.5 sm:rounded-xl sm:px-3 sm:py-2">
        <span className="text-xs font-semibold text-[#6b21a8] sm:text-sm">Question 7/20</span>
        <div className="h-1.5 w-12 rounded-full bg-[#8134af]/30 sm:h-2 sm:w-16" />
      </div>
      {/* Question Pythagore */}
      <div className="rounded-lg bg-slate-100/80 px-2.5 py-1.5 sm:px-3 sm:py-2">
        <p className="text-[10px] font-medium text-slate-700 leading-tight sm:text-xs line-clamp-2">
          Quelle est la formule du théorème de Pythagore ?
        </p>
      </div>
      {/* 3 réponses : B (a² + b² = c²) au milieu, cochée en vert */}
      <div className="flex flex-col gap-1.5 sm:gap-2">
        {QUIZ_OPTIONS.map((opt) => (
          <div
            key={opt.letter}
            className={`flex items-center gap-2 rounded-lg border p-2 sm:rounded-xl sm:p-2.5 ${
              opt.correct ? "border-emerald-400 bg-emerald-50/90" : "border-slate-200/60 bg-slate-50/50"
            }`}
          >
            <span className="w-5 shrink-0 text-xs font-bold text-slate-600 sm:w-6 sm:text-sm">{opt.letter}</span>
            <span className={`flex-1 text-[10px] sm:text-xs ${opt.correct ? "font-semibold text-emerald-800" : "text-slate-600"}`}>
              {opt.text}
            </span>
            {opt.correct && (
              <svg className="h-4 w-4 shrink-0 text-emerald-600 sm:h-5 sm:w-5" viewBox="0 0 16 16" fill="currentColor">
                <path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z" />
              </svg>
            )}
          </div>
        ))}
      </div>
      {/* Bravo, tu as eu la bonne réponse ! + emojis */}
      <div className="flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200/80 px-2.5 py-2 sm:px-3 sm:py-2.5">
        <span className="text-base sm:text-lg" aria-hidden>🎉</span>
        <span className="text-xs font-semibold text-emerald-800 sm:text-sm">Bravo, tu as eu la bonne réponse !</span>
        <span className="text-base sm:text-lg" aria-hidden>👍</span>
      </div>
    </div>
  );
}

function IllustrationChanson() {
  return (
    <div className={`${ILLUSTRATION_WRAPPER} flex-col justify-center gap-3 sm:gap-4`}>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-white">
        <img
          src="/chanson-audio-player.png"
          alt="Lecteur audio violet avec micro et temps 3:24"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}

/* Flashcards — 3 cartes format 3×4 : gauche (inclinée), centre (droite), droite (inclinée), design soigné, Q/R bien séparées */
const FLASHCARD_ITEMS = [
  {
    question: "Qu'est-ce qu'une métaphore ?",
    answer: "Figure de style qui associe deux réalités sans outil de comparaison.",
    cardBg: "bg-white",
    questionBg: "bg-slate-50",
    answerBg: "bg-[#fde8e8]",
    border: "border-[#EE6B6E]/30",
    accent: "text-[#D65558]",
    shadow: "shadow-[0_4px_14px_rgba(238,107,110,0.12)]",
  },
  {
    question: "De combien de vers est composé un alexandrin ?",
    answer: "Un alexandrin est un vers de douze syllabes.",
    cardBg: "bg-white",
    questionBg: "bg-slate-50",
    answerBg: "bg-[#e0f2fe]",
    border: "border-[#0284c7]/30",
    accent: "text-[#0369a1]",
    shadow: "shadow-[0_4px_14px_rgba(2,132,199,0.12)]",
  },
  {
    question: "Définition du mouvement des Lumières",
    answer: "Mouvement intellectuel du XVIIIe siècle prônant la raison et le savoir.",
    cardBg: "bg-white",
    questionBg: "bg-slate-50",
    answerBg: "bg-[#fef3e8]",
    border: "border-[#f58529]/30",
    accent: "text-[#c2410c]",
    shadow: "shadow-[0_4px_14px_rgba(245,133,41,0.12)]",
  },
];

const CARD_ORIENTATIONS = [
  { rotate: "-8deg", justify: "justify-end" },
  { rotate: "0deg", justify: "justify-center" },
  { rotate: "8deg", justify: "justify-start" },
];

function IllustrationFlashcards() {
  return (
    <div className={`${ILLUSTRATION_WRAPPER} min-h-[220px] sm:min-h-[260px] md:min-h-[280px] w-full`}>
      <div className="flex h-full w-full items-center justify-center gap-2 sm:gap-3 md:gap-4 px-0 py-3">
        {FLASHCARD_ITEMS.map((card, i) => (
          <div
            key={i}
            className={`flex flex-1 ${CARD_ORIENTATIONS[i].justify} h-full max-w-[32%] min-w-0`}
            style={{ transform: `rotate(${CARD_ORIENTATIONS[i].rotate})` }}
          >
            <div
              className={`aspect-[3/4] w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] flex flex-col overflow-hidden rounded-xl border-2 ${card.border} ${card.shadow} ${card.cardBg} md:rounded-2xl shadow-lg`}
            >
              {/* Section Question — lisible en entier */}
              <div className={`flex flex-1 flex-col px-3 pt-4 pb-3 sm:px-4 sm:pt-5 sm:pb-4 ${card.questionBg} border-b-2 border-slate-200/80`}>
                <span className="mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">Question</span>
                <p className="text-xs font-semibold leading-snug text-slate-700 sm:text-sm">
                  {card.question}
                </p>
              </div>
              {/* Section Réponse — lisible en entier */}
              <div className={`flex flex-1 flex-col px-3 py-3 sm:px-4 sm:py-4 ${card.answerBg}`}>
                <span className="mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 sm:text-xs">Réponse</span>
                <p className={`text-xs font-medium leading-snug sm:text-sm ${card.accent}`}>
                  {card.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Texte à trous — style Quizz : badge, bloc consigne, cartes par phrase avec trou mis en avant */
function IllustrationFillBlanks() {
  const phrases = [
    { text: "Les lettres que j'ai écrit", end: " sont sur le bureau." },
    { text: "Elle a mang", end: " trop de gâteaux." },
    { text: "Ils sont parti", end: " en vacances." },
  ];
  return (
    <div className={`${ILLUSTRATION_WRAPPER} flex-col justify-center gap-2 sm:gap-3`}>
      {/* Badge type Quizz (Exercice 1) */}
      <div className="flex items-center justify-between rounded-lg bg-[#f3e5f5] px-2.5 py-1.5 sm:rounded-xl sm:px-3 sm:py-2">
        <span className="text-xs font-semibold text-[#6b21a8] sm:text-sm">Exercice 1</span>
        <div className="h-1.5 w-10 rounded-full bg-[#8134af]/30 sm:h-2 sm:w-12" />
      </div>
      {/* Consigne */}
      <div className="rounded-lg bg-slate-100/80 px-2.5 py-1.5 sm:px-3 sm:py-2">
        <p className="text-[10px] font-medium text-slate-700 leading-tight sm:text-xs">
          Accords des participes passés
        </p>
      </div>
      {/* 3 phrases en cartes (style options du Quizz), trou = zone violette */}
      <div className="flex flex-col gap-1.5 sm:gap-2">
        {phrases.map((p, i) => (
          <div
            key={i}
            className="flex flex-wrap items-center gap-1 rounded-lg border border-slate-200/60 bg-slate-50/50 p-2 sm:rounded-xl sm:gap-1.5 sm:p-2.5"
          >
            <span className="text-[9px] text-slate-600 sm:text-[10px]">{p.text}</span>
            <span className="inline-flex min-w-[1.75rem] items-center justify-center rounded border-2 border-dashed border-[#8134af]/50 bg-[#f3e5f5] px-1 py-0.5 text-[9px] font-bold text-[#6b21a8] sm:min-w-[2rem] sm:text-[10px]">
              ___
            </span>
            <span className="text-[9px] text-slate-600 sm:text-[10px]">{p.end}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Session chronométrée — horloge soignée : repères, 1/4 violet (15 min), 3/4 grisé, chrono au centre, message mis en valeur */
function IllustrationTimer() {
  const r = 24;
  const cx = 28;
  const cy = 28;
  const strokeW = 5;
  return (
    <div className={`${ILLUSTRATION_WRAPPER} flex-col justify-center gap-3 sm:gap-3.5`}>
      <div className="flex justify-center drop-shadow-sm">
        <svg viewBox="0 0 56 56" className="h-14 w-14 sm:h-16 sm:w-16">
          <defs>
            <linearGradient id="timerViolet" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#6b21a8" />
            </linearGradient>
          </defs>
          {/* Cercle de fond avec léger dégradé */}
          <circle cx={cx} cy={cy} r={r + 1} fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
          {/* Repères : 12 traits fins */}
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * 30 - 90) * (Math.PI / 180);
            const len = i % 3 === 0 ? 4 : 2.5;
            const x1 = cx + (r - len) * Math.cos(a);
            const y1 = cy + (r - len) * Math.sin(a);
            const x2 = cx + r * Math.cos(a);
            const y2 = cy + r * Math.sin(a);
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#94a3b8" strokeWidth={i % 3 === 0 ? 1.2 : 0.8} strokeLinecap="round" />
            );
          })}
          {/* Partie écoulée : 3/4 gris doux */}
          <path
            d={`M ${cx} ${cy - r} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth={strokeW}
            strokeLinecap="round"
          />
          {/* 15 min restantes : arc violet avec dégradé */}
          <path
            d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx} ${cy - r}`}
            fill="none"
            stroke="url(#timerViolet)"
            strokeWidth={strokeW}
            strokeLinecap="round"
          />
          {/* Centre : pastille avec chrono */}
          <circle cx={cx} cy={cy} r={9} fill="white" stroke="#e9d5ff" strokeWidth="1.5" />
          <text x={cx} y={cy + 1.2} textAnchor="middle" fill="#5b21b6" style={{ fontSize: "12px", fontWeight: 800, fontFamily: "system-ui, sans-serif", letterSpacing: "-0.02em" }}>
            15:00
          </text>
        </svg>
      </div>
      <div className="rounded-xl bg-[#f5f3ff] border border-[#c4b5fd]/50 px-2.5 py-2 sm:px-3 sm:py-2.5">
        <p className="text-[9px] leading-snug text-slate-700 text-center sm:text-[10px]">
          Il te reste <strong className="text-[#5b21b6]">15 minutes</strong> avant ta pause. Tu vas y arriver&nbsp;!
        </p>
      </div>
    </div>
  );
}

/* Questions en illimité — même design que l'image : avatar (casque + micro), 2 bulles (orange puis violette), icône bulle à droite */
function IllustrationChatQuestions() {
  return (
    <div className={`${ILLUSTRATION_WRAPPER} flex-col justify-center gap-2 sm:gap-2.5 min-h-[100px]`}>
      {/* Ligne 1 : Avatar (tête + casque + micro) à gauche, bulle orange à droite (courbe vers l'avatar) */}
      <div className="flex items-start gap-2 sm:gap-2.5">
        <div className="relative flex shrink-0 flex-col items-center">
          <div className="relative h-9 w-9 sm:h-10 sm:w-10">
            <div className="absolute inset-0 rounded-full bg-slate-200" />
            <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fde047]" />
            <div className="absolute left-[10px] top-[8px] h-1 w-1 rounded-full bg-slate-800" />
            <div className="absolute right-[10px] top-[8px] h-1 w-1 rounded-full bg-slate-800" />
            <div className="absolute left-1/2 top-[18px] h-0.5 w-2 -translate-x-1/2 rounded-full bg-slate-800" />
            <div className="absolute -right-0.5 top-1/2 h-2 w-3 -translate-y-1/2 rounded-r border-l-2 border-slate-400 bg-slate-300" />
          </div>
          <div className="mt-0.5 h-1 w-4 rounded-sm bg-slate-200" />
        </div>
        <div className="min-w-0 flex-1 rounded-2xl rounded-tl-none border border-[#ea580c]/50 bg-[#fed7aa] px-2.5 py-2 sm:px-3 sm:py-2">
          <div className="h-2 w-full rounded bg-[#c2410c]/25 sm:h-2.5" />
          <div className="mt-1.5 h-1.5 w-4/5 rounded bg-[#c2410c]/20 sm:mt-2 sm:h-2" />
        </div>
      </div>
      {/* Ligne 2 : Bulle violette à gauche, icône bulle (cercle + chat) à droite */}
      <div className="flex items-start gap-2 sm:gap-2.5">
        <div className="min-w-0 flex-1 rounded-2xl border border-[#7c3aed]/50 bg-[#e9d5ff] px-2.5 py-2 sm:px-3 sm:py-2">
          <div className="h-2 w-full rounded bg-[#6b21a8]/25 sm:h-2.5" />
          <div className="mt-1.5 h-1.5 w-4/5 rounded bg-[#6b21a8]/20 sm:mt-2 sm:h-2" />
        </div>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#7c3aed]/60 bg-white sm:h-9 sm:w-9">
          <svg className="h-4 w-4 text-[#6b21a8] sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* Carte mentale / Schéma visuel — image cellule animale (noyau, mitochondries, Golgi, etc.) */
function IllustrationMindmap() {
  return (
    <div className={`${ILLUSTRATION_WRAPPER} min-h-[100px] sm:min-h-[115px] overflow-hidden rounded-2xl`}>
      <img
        src="/cell-schema-visuel.png"
        alt="Schéma d'une cellule animale : noyau, mitochondries, appareil de Golgi, réticulum endoplasmique, lysosomes"
        className="h-full w-full object-cover object-center rounded-2xl"
      />
    </div>
  );
}

/* Carte mentale — schéma mindmap en 3 étapes (nœud central + 3 branches) */
function IllustrationMindmap3Steps() {
  return (
    <div className={`${ILLUSTRATION_WRAPPER} flex-col justify-center rounded-2xl bg-[#faf5ff] p-4`}>
      <svg viewBox="0 0 200 120" className="h-full w-full min-h-[100px]" preserveAspectRatio="xMidYMid meet">
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 z" fill="#8134af" fillOpacity="0.5" />
          </marker>
        </defs>
        {/* Nœud central */}
        <ellipse cx="100" cy="60" rx="28" ry="18" fill="#f3e5f5" stroke="#8134af" strokeWidth="1.5" />
        <text x="100" y="64" textAnchor="middle" className="text-[10px] font-semibold fill-[#6b21a8]" style={{ fontSize: "10px", fontFamily: "system-ui" }}>Sujet</text>
        {/* Branche 1 */}
        <line x1="128" y1="60" x2="165" y2="35" stroke="#8134af" strokeWidth="1.2" strokeDasharray="4 2" opacity="0.8" />
        <ellipse cx="175" cy="28" rx="22" ry="14" fill="#e9d5ff" stroke="#8134af" strokeWidth="1" />
        <text x="175" y="31" textAnchor="middle" style={{ fontSize: "9px", fill: "#5b21b6", fontFamily: "system-ui" }}>Étape 1</text>
        {/* Branche 2 */}
        <line x1="128" y1="60" x2="165" y2="60" stroke="#8134af" strokeWidth="1.2" strokeDasharray="4 2" opacity="0.8" />
        <ellipse cx="175" cy="60" rx="22" ry="14" fill="#e9d5ff" stroke="#8134af" strokeWidth="1" />
        <text x="175" y="63" textAnchor="middle" style={{ fontSize: "9px", fill: "#5b21b6", fontFamily: "system-ui" }}>Étape 2</text>
        {/* Branche 3 */}
        <line x1="128" y1="60" x2="165" y2="85" stroke="#8134af" strokeWidth="1.2" strokeDasharray="4 2" opacity="0.8" />
        <ellipse cx="175" cy="92" rx="22" ry="14" fill="#e9d5ff" stroke="#8134af" strokeWidth="1" />
        <text x="175" y="95" textAnchor="middle" style={{ fontSize: "9px", fill: "#5b21b6", fontFamily: "system-ui" }}>Étape 3</text>
      </svg>
    </div>
  );
}

/* Organisation des devoirs — agenda hebdomadaire semainier */
function IllustrationHomeworkAgenda() {
  const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  return (
    <div className={`${ILLUSTRATION_WRAPPER} flex-col rounded-2xl border border-slate-200/50 bg-white p-3`}>
      <div className="grid grid-cols-7 gap-1">
        {days.map((d) => (
          <div key={d} className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-semibold text-slate-500">{d}</span>
            <div className="flex w-full flex-1 min-h-[8px] flex-col gap-0.5 rounded bg-slate-50">
              {d === "Mar" || d === "Jeu" ? <div className="h-1.5 w-full rounded bg-[#f3e5f5]" /> : null}
              {d === "Lun" || d === "Ven" ? <div className="h-1.5 w-3/4 rounded bg-[#fef3e8]" /> : null}
              {d === "Mer" ? <div className="h-1.5 w-full rounded bg-[#e0f2fe]" /> : null}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-center text-[10px] text-slate-500">Semaine du 11 mars</p>
    </div>
  );
}

function IllustrationReminder() {
  return (
    <div className={`${ILLUSTRATION_WRAPPER} flex-col justify-center gap-3 sm:gap-4`}>
      <div className="flex w-full gap-2 sm:gap-3">
        <div className="h-7 w-7 shrink-0 rounded-lg bg-[#fef3e8] sm:h-8 sm:w-8" />
        <div className="min-w-0 flex-1">
          <div className="h-2.5 w-full rounded bg-slate-200/70 sm:h-3" />
          <div className="mt-1.5 h-2 w-2/3 rounded bg-slate-200/50 sm:mt-2 sm:h-2.5" />
        </div>
      </div>
      <div className="flex w-full gap-2 sm:gap-3">
        <div className="h-7 w-7 shrink-0 rounded-lg bg-violet-100 sm:h-8 sm:w-8" />
        <div className="min-w-0 flex-1">
          <div className="h-2.5 w-full rounded bg-slate-200/70 sm:h-3" />
          <div className="mt-1.5 h-2 w-1/2 rounded bg-slate-200/50 sm:mt-2 sm:h-2.5" />
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-lg border border-slate-200/50 bg-slate-50/50 px-2 py-1.5 sm:rounded-xl sm:px-3 sm:py-2">
        <span className="text-[10px] text-slate-500 sm:text-xs">Prochaine révision</span>
        <div className="h-1.5 w-12 rounded-full bg-[#8134af]/35 sm:h-2 sm:w-16" />
      </div>
    </div>
  );
}

/* Illustrations pour les 6 cartes du bas (image à droite) */
const BOTTOM_ILLUSTRATION_WRAPPER = "flex h-full w-full min-h-[100px] flex-1 flex-col justify-center";

function IllustrationFun() {
  return (
    <div className={`${BOTTOM_ILLUSTRATION_WRAPPER} gap-2 sm:gap-3`}>
      <div className="flex justify-center gap-1 sm:gap-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-5 w-5 rounded-full bg-[#fcaf45]/80 sm:h-6 sm:w-6" />
        ))}
      </div>
      <div className="flex justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f3e5f5] sm:h-12 sm:w-12">
          <svg className="h-5 w-5 text-[#8134af] sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </div>
      <div className="flex justify-center gap-1">
        <div className="h-2 w-4 rounded-full bg-[#EE6B6E]/40 sm:h-2.5 sm:w-5" />
        <div className="h-2 w-3 rounded-full bg-[#fcaf45]/50 sm:h-2.5 sm:w-4" />
      </div>
    </div>
  );
}

function IllustrationInteractive() {
  return (
    <div className={`${BOTTOM_ILLUSTRATION_WRAPPER} gap-2 sm:gap-3`}>
      <div className="flex gap-2">
        {[true, false, true].map((checked, i) => (
          <div
            key={i}
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border sm:h-7 sm:w-7 ${checked ? "border-[#EE6B6E]/50 bg-[#fde8e8]" : "border-slate-200 bg-slate-50"}`}
          >
            {checked && (
              <svg className="h-3.5 w-3.5 text-[#EE6B6E] sm:h-4 sm:w-4" viewBox="0 0 12 12" fill="currentColor">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
            )}
          </div>
        ))}
      </div>
      <div className="h-2.5 w-full rounded bg-slate-200/70 sm:h-3" />
      <div className="flex gap-2">
        <div className="h-7 flex-1 rounded-lg bg-[#f3e5f5] sm:h-8" />
        <div className="h-7 flex-1 rounded-lg bg-slate-100 sm:h-8" />
      </div>
    </div>
  );
}

function IllustrationQuestions() {
  return (
    <div className={`${BOTTOM_ILLUSTRATION_WRAPPER} gap-2 sm:gap-3`}>
      <div className="flex justify-end">
        <div className="rounded-xl rounded-tr-none bg-slate-100 px-2 py-1.5 sm:px-3 sm:py-2">
          <div className="h-2 w-16 rounded bg-slate-300/70 sm:h-2.5 sm:w-20" />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="h-7 w-7 shrink-0 rounded-full bg-[#8134af]/40 sm:h-8 sm:w-8" />
        <div className="min-w-0 flex-1 rounded-xl rounded-tl-none bg-[#f3e5f5] p-2 sm:p-2.5">
          <div className="h-2 w-full rounded bg-[#8134af]/35 sm:h-2.5" />
          <div className="mt-1 h-1.5 w-4/5 rounded bg-[#8134af]/25 sm:mt-1.5 sm:h-2" />
        </div>
      </div>
      <div className="flex justify-center">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fef3e8] text-[10px] font-bold text-[#ea580c] sm:h-7 sm:w-7 sm:text-xs">?</span>
      </div>
    </div>
  );
}

function IllustrationHomework() {
  return (
    <div className={`${BOTTOM_ILLUSTRATION_WRAPPER} gap-2 sm:gap-3`}>
      <div className="flex w-full gap-2">
        <div className="h-6 w-6 shrink-0 rounded-md bg-[#fef3e8] sm:h-7 sm:w-7" />
        <div className="h-2.5 flex-1 rounded bg-slate-200/70 sm:h-3" />
      </div>
      <div className="flex w-full gap-2">
        <div className="h-6 w-6 shrink-0 rounded-md bg-violet-100 sm:h-7 sm:w-7" />
        <div className="h-2.5 flex-1 rounded bg-slate-200/60 sm:h-3" />
      </div>
      <div className="flex w-full gap-2">
        <div className="h-6 w-6 shrink-0 rounded-md bg-[#fde8e8] sm:h-7 sm:w-7" />
        <div className="h-2.5 flex-1 rounded bg-slate-200/50 sm:h-3" />
      </div>
      <div className="flex items-center gap-1.5 rounded-lg bg-slate-100/80 px-2 py-1 sm:rounded-xl sm:px-2.5">
        <span className="text-[10px] text-slate-500 sm:text-xs">Aujourd&apos;hui</span>
        <div className="h-1.5 flex-1 rounded-full bg-[#8134af]/35 sm:h-2" />
      </div>
    </div>
  );
}

function IllustrationOrganize() {
  return (
    <div className={`${BOTTOM_ILLUSTRATION_WRAPPER} gap-2 sm:gap-3`}>
      <div className="flex gap-1 sm:gap-2">
        {["1", "2", "3"].map((n) => (
          <div key={n} className="flex flex-1 flex-col items-center gap-1">
            <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#8134af]/50 bg-violet-50 text-[10px] font-semibold text-[#6b21a8] sm:h-6 sm:w-6 sm:text-xs">
              {n}
            </div>
            <div className="h-2 w-full rounded bg-slate-200/50 sm:h-2.5" />
          </div>
        ))}
      </div>
      <div className="flex w-full items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-[#EE6B6E] sm:h-2.5 sm:w-2.5" />
        <div className="h-2 flex-1 rounded bg-slate-200/60 sm:h-2.5" />
      </div>
      <div className="flex w-full items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-[#fcaf45] sm:h-2.5 sm:w-2.5" />
        <div className="h-2 flex-1 rounded bg-slate-200/50 sm:h-2.5" />
      </div>
    </div>
  );
}

function IllustrationEncouraged() {
  return (
    <div className={`${BOTTOM_ILLUSTRATION_WRAPPER} gap-2 sm:gap-3`}>
      <div className="flex justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fef3e8] sm:h-12 sm:w-12">
          <svg className="h-5 w-5 text-[#f58529] sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>
      </div>
      <div className="flex justify-center gap-0.5 sm:gap-1">
        {[4, 6, 8, 7, 5].map((h, i) => (
          <div
            key={i}
            className="w-1.5 rounded-full bg-[#8134af]/60 sm:w-2"
            style={{ height: `${h * 3}px` }}
          />
        ))}
      </div>
      <div className="flex items-center justify-center gap-1 rounded-lg bg-[#fde8e8] px-2 py-1 sm:rounded-xl sm:px-2.5 sm:py-1.5">
        <span className="text-[10px] font-medium text-[#D65558] sm:text-xs">Bravo</span>
      </div>
    </div>
  );
}

function BottomFeatureIllustration({ variant }: { variant: BottomFeatureVariant }) {
  switch (variant) {
    case "fun":
      return <IllustrationFun />;
    case "interactive":
      return <IllustrationInteractive />;
    case "questions":
      return <IllustrationQuestions />;
    case "homework":
      return <IllustrationHomework />;
    case "organize":
      return <IllustrationOrganize />;
    case "encouraged":
      return <IllustrationEncouraged />;
    default:
      return <IllustrationFun />;
  }
}

function FeatureIllustration({ variant }: { variant: FeatureVariant }) {
  switch (variant) {
    case "historical":
      return <IllustrationHistorical />;
    case "mindmap":
      return <IllustrationMindmap />;
    case "mindmap3Steps":
      return <IllustrationMindmap3Steps />;
    case "quiz":
      return <IllustrationQuiz />;
    case "chanson":
      return <IllustrationChanson />;
    case "flashcards":
      return <IllustrationFlashcards />;
    case "fillBlanks":
      return <IllustrationFillBlanks />;
    case "reminder":
      return <IllustrationReminder />;
    case "timer":
      return <IllustrationTimer />;
    case "chatQuestions":
      return <IllustrationChatQuestions />;
    case "homeworkAgenda":
      return <IllustrationHomeworkAgenda />;
    default:
      return <IllustrationHistorical />;
  }
}

type FeatureItem = {
  id: number;
  title: string;
  subtitle: string;
  variant: FeatureVariant;
};

const FEATURES: FeatureItem[] = [
  {
    id: 1,
    title: "Discussions avec personnages historiques",
    subtitle: "Dialoguez avec des figures du passé pour approfondir l'histoire de façon vivante.",
    variant: "historical",
  },
  {
    id: 2,
    title: "Carte mentale et schéma visuel",
    subtitle: "Visualisez les idées et les liens entre les notions pour mieux retenir.",
    variant: "mindmap",
  },
  {
    id: 3,
    title: "Quizz intéractifs",
    subtitle: "Testez vos connaissances avec des QCM variés et un suivi de progression simple.",
    variant: "quiz",
  },
  {
    id: 4,
    title: "Chanson pour retenir son cours",
    subtitle: "Apprenez en musique avec des contenus audio dédiés à la mémorisation.",
    variant: "chanson",
  },
  {
    id: 5,
    title: "Flashcards",
    subtitle: "Mémorisez l'essentiel avec des cartes personnalisables recto-verso.",
    variant: "flashcards",
  },
  {
    id: 6,
    title: "Texte à trous",
    subtitle: "Exercices d'accord des participes passés (COD avant, avoir, être) pour s'entraîner.",
    variant: "fillBlanks",
  },
  {
    id: 7,
    title: "Session de travail chronométrée",
    subtitle: "Un chrono visuel qui se déremplit pour rester concentré et prendre des pauses au bon moment.",
    variant: "timer",
  },
  {
    id: 8,
    title: "Questions en illimité",
    subtitle: "Posez toutes vos questions à l'IA et obtenez des réponses détaillées pour avancer sereinement.",
    variant: "chatQuestions",
  },
];

type BottomFeatureVariant =
  | "fun"
  | "interactive"
  | "questions"
  | "homework"
  | "organize"
  | "encouraged";

type BottomFeatureItem = {
  id: number;
  title: string;
  description: string;
  bullets: [string, string, string];
  variant: BottomFeatureVariant;
};

const BOTTOM_FEATURES: BottomFeatureItem[] = [
  {
    id: 1,
    title: "Apprendre son cours en s'amusant",
    description:
      "Rendez les révisions agréables grâce à des jeux et des défis qui motivent sans avoir l'air de travailler.",
    bullets: [
      "Jeux pédagogiques adaptés à chaque matière",
      "Révisions ludiques et mémorisation durable",
      "Récompenses et défis pour rester motivé",
    ],
    variant: "fun",
  },
  {
    id: 2,
    title: "S'exercer de manière intéractive",
    description:
      "Mettez en pratique ce que vous apprenez avec des exercices variés et un retour immédiat sur vos réponses.",
    bullets: [
      "Exercices interactifs et corrigés en direct",
      "Feedback immédiat pour progresser vite",
      "Mise en pratique concrète des notions",
    ],
    variant: "interactive",
  },
  {
    id: 3,
    title: "Poser toutes les questions que l'on souhaite",
    description:
      "Plus de question laissée sans réponse : posez autant de questions qu'il faut pour tout comprendre.",
    bullets: [
      "Questions illimitées, sans jugement",
      "Réponses détaillées et explications claires",
      "Compréhension à son rythme",
    ],
    variant: "questions",
  },
  {
    id: 4,
    title: "Être accompagné au quotidien dans ses devoirs",
    description:
      "Un soutien au jour le jour pour avancer sereinement dans les devoirs et réduire le stress.",
    bullets: [
      "Suivi personnalisé et aide ciblée",
      "Aide au quotidien pour les devoirs",
      "Devoirs moins stressants, plus efficaces",
    ],
    variant: "homework",
  },
  {
    id: 5,
    title: "Apprendre à s'organiser efficacement",
    description:
      "Acquérez des méthodes simples pour planifier vos révisions et gérer votre temps sans vous noyer.",
    bullets: [
      "Planning de révisions clair et réaliste",
      "Priorités et objectifs définis",
      "Méthodes éprouvées pour s'organiser",
    ],
    variant: "organize",
  },
  {
    id: 6,
    title: "Être encouragé et valorisé dans ses progrès",
    description:
      "Chaque progrès compte : suivez votre évolution et recevez des encouragements qui donnent envie de continuer.",
    bullets: [
      "Suivi des progrès et statistiques claires",
      "Encouragements et messages positifs",
      "Célébration des réussites, petites et grandes",
    ],
    variant: "encouraged",
  },
];

const CARD_FEATURE = (feature: FeatureItem, className: string) => (
  <article key={feature.id} className={className}>
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
);

export default function Liste() {
  const homeworkCard: FeatureItem = {
    id: 9,
    title: "Organisation des devoirs",
    subtitle: "Planifiez vos devoirs avec un agenda hebdomadaire.",
    variant: "homeworkAgenda",
  };

  return (
    <section
      id="fonctionnalites"
      className="bg-white py-20 md:py-24"
      aria-label="Liste : fonctionnalités en cartes"
    >
      <div className="mx-auto w-full max-w-[1600px] px-3 md:px-4">
        {/* Ligne 1 — 4 colonnes : Discussions, Carte mentale, Quizz, Chanson */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {[FEATURES[0], FEATURES[1], FEATURES[2], FEATURES[3]].map((f) =>
            CARD_FEATURE(f, CARD_SMALL)
          )}
        </div>

        {/* Ligne 2 — Flashcards (3 col) + Texte à trous (1 col) */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
          <article key={FEATURES[4].id} className={`${CARD_LARGE} md:col-span-3`}>
            <h3 className="text-[22px] font-semibold text-slate-900 md:text-[24px]">
              {FEATURES[4].title}
            </h3>
            <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-slate-500 md:text-[16px]">
              {FEATURES[4].subtitle}
            </p>
            <div className={ILLUSTRATION_BLOCK}>
              <FeatureIllustration variant={FEATURES[4].variant} />
            </div>
          </article>
          {CARD_FEATURE(FEATURES[5], `${CARD_SMALL} md:col-span-1`)}
        </div>

        {/* Ligne 3 — Session chronométrée (1 col), Carte mentale 3 étapes (1 col), Organisation devoirs (2 col) */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
          {CARD_FEATURE(FEATURES[6], CARD_SMALL)}
          <article key="mindmap3Steps" className={CARD_SMALL}>
            <h3 className="text-[22px] font-semibold text-slate-900 md:text-[24px]">
              {FEATURES[1].title}
            </h3>
            <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-slate-500 md:text-[16px]">
              {FEATURES[1].subtitle}
            </p>
            <div className={ILLUSTRATION_BLOCK}>
              <FeatureIllustration variant="mindmap3Steps" />
            </div>
          </article>
          <article key={homeworkCard.id} className={`${CARD_SMALL} md:col-span-2`}>
            <h3 className="text-[22px] font-semibold text-slate-900 md:text-[24px]">
              {homeworkCard.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-slate-500 md:text-[16px]">
              {homeworkCard.subtitle}
            </p>
            <div className={ILLUSTRATION_BLOCK}>
              <FeatureIllustration variant={homeworkCard.variant} />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
