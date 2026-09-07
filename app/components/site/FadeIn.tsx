"use client";

import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  /** Conservé pour compatibilité — le contenu s'affiche toujours (évite zones grises / scroll bloqué). */
  eager?: boolean;
};

/**
 * Conteneur de section. L'animation d'apparition a été retirée :
 * opacity-0 + overflow sur les sections bloquait le scroll tactile
 * et laissait des zones grises « vides » sous le doigt.
 */
export default function FadeIn({
  children,
  className = "",
  id,
}: FadeInProps) {
  return (
    <div id={id} className={`fade-in-visible ${className}`}>
      {children}
    </div>
  );
}
