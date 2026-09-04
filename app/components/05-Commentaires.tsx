"use client";

/** Section 5 — Commentaires. */

import { useEffect, useState } from "react";

type TestimonialItem = {
  id: string;
  name: string;
  role: string;
  text: string;
  stars: number;
};

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "Lucas Martin",
    role: "Élève de terminale",
    text: "Avant j'avais du mal à m'organiser pour le bac. Avec l'application, j'ai un planning clair et je vois vraiment mes progrès. Ça m'a rassuré et j'ai gagné en efficacité.",
    stars: 5,
  },
  {
    id: "2",
    name: "Sophie Bernard",
    role: "Parent de Léa (élève de 3ème)",
    text: "Ma fille avait du mal à rester régulière dans ses révisions. Depuis qu'elle utilise l'application, elle est beaucoup plus autonome. Je vois la différence dans son organisation et sa confiance.",
    stars: 5,
  },
  {
    id: "3",
    name: "Chloé Dubois",
    role: "Élève de 1ère",
    text: "Les fiches interactives m'ont vraiment aidée. Je retiens mieux qu'avec mes anciens cahiers. Et les quiz me permettent de vérifier que j'ai bien compris avant les contrôles.",
    stars: 5,
  },
  {
    id: "4",
    name: "Thomas Petit",
    role: "Parent de deux collégiens",
    text: "On cherchait un outil simple pour les révisions. Les rappels automatiques évitent les oublis et le suivi des progrès nous rassure. Les enfants s'y mettent sans qu'on doive leur courir après.",
    stars: 5,
  },
  {
    id: "5",
    name: "Manon Leroy",
    role: "Élève de seconde",
    text: "Le mode concentration m'aide à ne pas me disperser. Je bloque une heure, je révise, et après je décroche. Mes notes se sont un peu améliorées depuis que j'utilise l'app.",
    stars: 5,
  },
  {
    id: "6",
    name: "Nathalie Moreau",
    role: "Parent de Paul (terminale)",
    text: "Paul préparait le bac un peu dans le flou. Là il a un vrai planning et des stats. Il est moins stressé et plus régulier. En tant que parent, c'est exactement ce qu'on voulait.",
    stars: 5,
  },
  {
    id: "7",
    name: "Hugo Girard",
    role: "Élève de 3ème",
    text: "J'utilise surtout les quiz et les fiches. C'est rapide à faire et ça me donne une idée de ce que je maîtrise ou pas. Pratique avant les brevets blancs.",
    stars: 5,
  },
  {
    id: "8",
    name: "Isabelle Fontaine",
    role: "Parent de Camille (1ère)",
    text: "Camille révisait au dernier moment. Maintenant elle a des rappels et un planning. Elle gère mieux son temps. On n'a pas vu de miracle mais une vraie progression.",
    stars: 5,
  },
  {
    id: "9",
    name: "Enzo Faure",
    role: "Élève de terminale",
    text: "L'app m'a aidé à structurer mes révisions pour le bac. Les statistiques me motivent parce que je vois que j'avance. Je recommande à des potes qui galèrent comme moi avant.",
    stars: 5,
  },
];

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function QuoteButtonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2z" />
    </svg>
  );
}

function TestimonialCard({ testimonial }: { testimonial: TestimonialItem }) {
  return (
    <article className="break-inside-avoid rounded-3xl border border-white/60 bg-[#F6F7FB] p-8">
      <div className="mb-5 flex gap-1.5">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <StarIcon key={i} className="h-5 w-5 text-[#EE6B6E]" />
        ))}
      </div>
      <p className="text-[16px] leading-relaxed text-slate-600 md:text-[17px]">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="mt-8 flex items-end justify-between">
        <div>
          <p className="text-[16px] font-semibold text-slate-800">{testimonial.name}</p>
          <p className="mt-1 text-[14px] text-slate-500">{testimonial.role}</p>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fde8e8] text-[#EE6B6E]">
          <QuoteButtonIcon className="h-5 w-5" />
        </div>
      </div>
    </article>
  );
}

function getColumnItems(items: TestimonialItem[], columnIndex: number): TestimonialItem[] {
  return items.filter((_, i) => i % 3 === columnIndex);
}

export default function Commentaires() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    queueMicrotask(() => setReducedMotion(mq.matches));
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const col0 = getColumnItems(TESTIMONIALS, 0);
  const col1 = getColumnItems(TESTIMONIALS, 1);
  const col2 = getColumnItems(TESTIMONIALS, 2);

  const columns = [
    { items: col0, duration: 32, reverse: false },
    { items: col1, duration: 38, reverse: true },
    { items: col2, duration: 34, reverse: false },
  ];

  return (
    <section
      className="group bg-white py-20 md:py-24"
      aria-label="Commentaires"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <h2 className="mb-14 text-center text-4xl font-semibold leading-[1.05] tracking-tight text-[#0B1E3A] md:mb-16 md:text-5xl lg:text-6xl">
          Ce qu&apos;en disent
          <br />
          les utilisateurs
        </h2>

        {reducedMotion ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {columns.map((col, colIndex) => (
              <div
                key={colIndex}
                className="testimonials-column-wrapper h-[720px] overflow-hidden bg-white"
              >
                <div
                  className="testimonials-column flex flex-col gap-8"
                  style={{
                    animation: `marqueeY ${col.duration}s linear infinite`,
                    animationDirection: col.reverse ? "reverse" : "normal",
                  }}
                >
                  {[...col.items, ...col.items].map((t, i) => (
                    <TestimonialCard key={`col${colIndex}-${i}`} testimonial={t} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
