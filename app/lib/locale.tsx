"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type Locale = "fr" | "en";

const STORAGE_KEY = "mc-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    queueMicrotask(() => {
      if (stored === "fr" || stored === "en") setLocaleState(stored);
      setReady(true);
    });
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  }, []);

  useEffect(() => {
    if (ready) document.documentElement.lang = locale;
  }, [locale, ready]);

  if (!ready) {
    return <div className="min-h-screen bg-white" aria-hidden />;
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
