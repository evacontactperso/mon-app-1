"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  /** Affiche tout de suite, sans animation (ex. hero above-the-fold) */
  eager?: boolean;
};

export default function FadeIn({
  children,
  className = "",
  id,
  delay = 0,
  eager = false,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(eager);

  useEffect(() => {
    if (eager) return;
    const el = ref.current;
    if (!el) return;

    // Déjà dans le viewport au montage → pas de translate (évite le saut de scroll)
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
    if (inView) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [eager]);

  return (
    <div
      ref={ref}
      id={id}
      className={`transition-opacity duration-700 ease-out ${
        visible ? "opacity-100 fade-in-visible" : "opacity-0"
      } ${className}`}
      style={{ transitionDelay: visible && !eager ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
