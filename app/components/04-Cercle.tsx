"use client";

/**
 * Section 4 — Image arrondie + cercle avec 6 éléments autour.
 * Desktop : wrapper relative min-h-[650px], cercle 520px + image 420px au centre,
 * 6 blocs en absolute (gauche/droite à 15%, 45%, 75%).
 * Mobile : image en haut, 6 éléments en stack en dessous, sans traits/points.
 */

const LEFT_ITEMS = [
  {
    id: "left-1",
    title: "Gamification",
    description: "Badges, défis et jeux pour apprendre en restant motivé.",
    position: "top" as const,
  },
  {
    id: "left-2",
    title: "Organisation",
    description: "Planifiez vos révisions et gardez vos cours bien rangés.",
    position: "middle" as const,
  },
  {
    id: "left-3",
    title: "Apprentissage",
    description: "Comprenez et retenez avec des méthodes adaptées à votre rythme.",
    position: "bottom" as const,
  },
];

const RIGHT_ITEMS = [
  {
    id: "right-1",
    title: "Entraînements",
    description: "Exercez-vous avec des quiz et des exercices pour progresser.",
    position: "top" as const,
  },
  {
    id: "right-2",
    title: "Motivation",
    description: "Restez motivé grâce aux encouragements et au suivi de vos progrès.",
    position: "middle" as const,
  },
  {
    id: "right-3",
    title: "Accompagnement",
    description: "Un soutien au quotidien pour avancer sereinement.",
    position: "bottom" as const,
  },
];

function getVerticalPosition(position: "top" | "middle" | "bottom") {
  switch (position) {
    case "top":
      return "top-[15%]";
    case "middle":
      return "top-[45%]";
    case "bottom":
      return "top-[75%]";
    default:
      return "top-[45%]";
  }
}

type OrbitalItemProps = {
  title: string;
  description: string;
  position: "top" | "middle" | "bottom";
  side: "left" | "right";
};

function OrbitalItem({ title, description, position, side }: OrbitalItemProps) {
  const verticalClass = getVerticalPosition(position);
  const isLeft = side === "left";

  return (
    <div
      className={`absolute hidden md:block ${verticalClass} ${isLeft ? "left-0 -translate-y-1/2" : "right-0 -translate-y-1/2"}`}
      style={{
        // 1cm de marge entre le bord du cercle (rayon 260px) et les textes
        maxWidth: "calc(50% - 260px - 1cm)",
      }}
    >
      <div className={isLeft ? "text-right" : "text-left"}>
        <h3 className="mb-2 text-[22px] font-semibold text-black">{title}</h3>
        <p className="text-[16px] leading-relaxed text-gray-500">{description}</p>
      </div>
    </div>
  );
}

function OrbitalItemMobile({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center md:text-left">
      <h3 className="mb-2 text-[22px] font-semibold text-black">{title}</h3>
      <p className="mx-auto max-w-[340px] text-[16px] leading-relaxed text-gray-500 md:mx-0 md:max-w-[360px]">
        {description}
      </p>
    </div>
  );
}

export default function Cercle() {
  return (
    <section className="bg-white py-24" aria-label="Cercle : image arrondie + 6 titres et sous-titres">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <h2 className="mx-auto mb-20 max-w-[960px] px-2 text-center text-[48px] font-semibold leading-[1.1] tracking-[-0.02em] text-black md:max-w-[1024px] md:px-4 md:text-[56px]">
          1 outil tout en un
        </h2>

        <div className="relative flex min-h-[650px] flex-col items-center md:min-h-[650px] md:justify-center">
          {/* Cercle pointillé — desktop uniquement */}
          <div
            className="absolute left-1/2 top-1/2 hidden h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#8134af]/25 md:block"
            aria-hidden
          />

          {/* Image centrale : fille qui révise sur son ordinateur (générée) */}
          <div className="relative z-10 h-[320px] w-[320px] shrink-0 overflow-hidden rounded-full bg-slate-200 md:absolute md:left-1/2 md:top-1/2 md:h-[420px] md:w-[420px] md:-translate-x-1/2 md:-translate-y-1/2">
            <img
              src="/outil-tout-en-un-centre.jpg"
              alt="Jeune fille qui révise, souriante, devant son ordinateur avec des flashcards"
              className="h-full w-full object-cover"
              width={420}
              height={420}
              loading="lazy"
            />
          </div>

          {/* Mobile : 6 éléments en stack sous l'image */}
          <div className="mt-12 flex w-full max-w-[320px] flex-col gap-10 md:hidden">
            {[...LEFT_ITEMS, ...RIGHT_ITEMS].map((item) => (
              <OrbitalItemMobile
                key={item.id}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          {/* Desktop : 6 éléments en absolute */}
          {LEFT_ITEMS.map((item) => (
            <OrbitalItem
              key={item.id}
              title={item.title}
              description={item.description}
              position={item.position}
              side="left"
            />
          ))}
          {RIGHT_ITEMS.map((item) => (
            <OrbitalItem
              key={item.id}
              title={item.title}
              description={item.description}
              position={item.position}
              side="right"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
