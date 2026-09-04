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

    const reset = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    reset();
    const raf = requestAnimationFrame(() => {
      reset();
      requestAnimationFrame(reset);
    });
    const t = window.setTimeout(reset, 0);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t);
    };
  }, [pathname]);

  return null;
}
