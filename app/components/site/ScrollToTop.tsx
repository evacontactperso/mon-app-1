"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Force le retour en haut à chaque navigation.
 * Évite le saut vers le h1 (focus a11y Next.js) sous le header sticky.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Un seul reset immédiat — éviter les resets répétés qui "recollent" en haut
    // pendant que l'utilisateur commence à scroller.
    window.scrollTo(0, 0);

    return undefined;
  }, [pathname]);

  return null;
}
