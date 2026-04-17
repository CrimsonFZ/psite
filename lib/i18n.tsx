"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Lang, Localized } from "@/types";

const STORAGE_KEY = "psite:lang";
const DEFAULT_LANG: Lang = "en";

type LangContextValue = {
  lang: Lang;
  setLang: (next: Lang) => void;
  toggle: () => void;
  t: <T>(value: Localized<T>) => T;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === "en" || stored === "zh") {
        setLangState(stored);
        return;
      }
      const nav = window.navigator.language?.toLowerCase() ?? "";
      if (nav.startsWith("zh")) setLangState("zh");
    } catch {
      /* no-op */
    }
  }, []);

  const value = useMemo<LangContextValue>(() => {
    const setLang = (next: Lang) => {
      setLangState(next);
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* no-op */
      }
    };
    return {
      lang,
      setLang,
      toggle: () => setLang(lang === "en" ? "zh" : "en"),
      t: <T,>(v: Localized<T>) => v[lang],
    };
  }, [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
