"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  HEADER_CTA,
  MENU_NAV_LINKS,
  MENU_OTHER_LINKS,
  SHOW_MENU_OTHER_PAGES,
  SITE_NAME,
} from "@/app/data/content/site";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M3.5 5.25L7 8.75L10.5 5.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Logo M : fond transparent, tracés noirs */
function BrandLogoM({ className = "" }: { className?: string }) {
  const color = "#0B0B0B";
  const L = 34;
  const R = 86;
  const top = 32;
  const bot = 88;
  const midX = 60;
  const valley = 78;
  const gap = 2.4;
  const strokeWidth = 1.35;

  const triple = (x1: number, y1: number, x2: number, y2: number) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len;
    const ny = dx / len;
    return ([-gap, 0, gap] as const).map((offset) => (
      <line
        key={`${x1}-${y1}-${offset}`}
        x1={x1 + nx * offset}
        y1={y1 + ny * offset}
        x2={x2 + nx * offset}
        y2={y2 + ny * offset}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="butt"
      />
    ));
  };

  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect x="10" y="10" width="100" height="100" stroke={color} strokeWidth="3" fill="none" />
      {triple(L, top, L, bot)}
      {triple(L, top, midX, valley)}
      {triple(R, top, midX, valley)}
      {triple(R, top, R, bot)}
    </svg>
  );
}

function OtherPagesDropdown({
  pathname,
  compact = false,
}: {
  pathname: string;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isActive = MENU_OTHER_LINKS.some((link) => pathname === link.href);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        className={`flex items-center gap-1 whitespace-nowrap transition-colors hover:text-[#EE6B6E] ${
          compact ? "text-sm font-medium" : "text-xs font-medium tracking-wide"
        } ${isActive ? "font-bold text-[#EE6B6E]" : "text-[#8E8E93]"}`}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        Autres pages
        <ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 max-h-[min(70vh,24rem)] w-72 overflow-y-auto rounded-xl border border-slate-200/80 bg-white py-2 shadow-[0_16px_40px_rgba(15,23,42,0.12)]"
        >
          {MENU_OTHER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              role="menuitem"
              className={`block px-4 py-2.5 text-sm transition-colors hover:bg-[#F9F9FB] hover:text-[#EE6B6E] ${
                pathname === link.href
                  ? "bg-[#fde8e8]/60 font-semibold text-[#EE6B6E]"
                  : "text-[#515154]"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [othersOpen, setOthersOpen] = useState(false);

  const mobileLinkClass = (href: string) =>
    `block rounded-lg px-3 py-2.5 text-base font-medium ${
      pathname === href
        ? "bg-[#fde8e8] text-[#EE6B6E]"
        : "text-[#0B0B0B] hover:bg-[#F9F9FB]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[100rem] items-center gap-3 px-3 py-4 md:gap-5 md:px-4 md:py-5 lg:px-5">
        {/* Marque → haut de « Ma méthode » (même si on y est déjà) */}
        <Link
          href="/"
          onClick={(e) => {
            setOpen(false);
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }
          }}
          className="flex min-w-0 flex-1 items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EE6B6E] sm:gap-2.5 lg:flex-none lg:shrink"
        >
          <BrandLogoM className="h-10 w-10 shrink-0 sm:h-11 sm:w-11 md:h-12 md:w-12" />
          <span className="truncate text-base font-bold tracking-tight text-[#0B0B0B] sm:text-lg md:text-xl">
            {SITE_NAME}
          </span>
        </Link>

        {/* Menu complet — desktop */}
        <nav
          className="ml-2 hidden flex-1 items-center justify-center gap-8 lg:flex xl:ml-4 xl:gap-12"
          aria-label="Navigation principale"
        >
          {MENU_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap text-base transition-colors hover:text-[#EE6B6E] ${
                pathname === link.href
                  ? "font-bold text-[#EE6B6E]"
                  : "font-medium text-[#515154]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact (+ Autres pages si réactivé) — desktop */}
        <div className="ml-auto hidden items-center gap-4 lg:flex xl:gap-5">
          <Link
            href={HEADER_CTA.href}
            className="inline-flex items-center justify-center rounded-full bg-[#EE6B6E] px-6 py-3 text-base font-semibold text-white shadow-[0_4px_14px_rgba(238,107,110,0.25)] transition hover:bg-[#E05558] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EE6B6E]"
          >
            {HEADER_CTA.label}
          </Link>
          {SHOW_MENU_OTHER_PAGES ? <OtherPagesDropdown pathname={pathname} /> : null}
        </div>

        {/* Bouton menu — téléphone / tablette */}
        <button
          type="button"
          className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200/60 text-[#0B0B0B] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-slate-200/60 bg-white px-4 py-4 lg:hidden"
          aria-label="Navigation mobile"
        >
          <ul className="flex flex-col gap-1">
            {MENU_NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={mobileLinkClass(link.href)}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={HEADER_CTA.href}
                className={mobileLinkClass(HEADER_CTA.href)}
                onClick={() => setOpen(false)}
              >
                {HEADER_CTA.label}
              </Link>
            </li>
            {SHOW_MENU_OTHER_PAGES ? (
              <li className="mt-3 border-t border-slate-100 pt-3">
                <button
                  type="button"
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium ${
                    MENU_OTHER_LINKS.some((link) => pathname === link.href)
                      ? "bg-[#fde8e8] text-[#EE6B6E]"
                      : "text-[#8E8E93] hover:bg-[#F9F9FB]"
                  }`}
                  aria-expanded={othersOpen}
                  onClick={() => setOthersOpen((prev) => !prev)}
                >
                  Autres pages
                  <ChevronDown className={`transition-transform ${othersOpen ? "rotate-180" : ""}`} />
                </button>
                {othersOpen && (
                  <ul className="mt-1 space-y-0.5 border-l-2 border-[#fde8e8] pl-3">
                    {MENU_OTHER_LINKS.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={`block rounded-lg px-3 py-2 text-sm ${
                            pathname === link.href
                              ? "bg-[#fde8e8] font-semibold text-[#EE6B6E]"
                              : "text-[#515154] hover:bg-[#F9F9FB]"
                          }`}
                          onClick={() => {
                            setOpen(false);
                            setOthersOpen(false);
                          }}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : null}
          </ul>
        </nav>
      )}
    </header>
  );
}
