"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_LANG,
  dictionaries,
  type Lang,
  type NavItem,
  type ProcessStep,
  type Service,
  type WhyItem,
} from "@/lib/i18n";

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  nav: NavItem[];
  services: Service[];
  process: ProcessStep[];
  why: WhyItem[];
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "vivame-lang";

function detectLang(): Lang {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "id") return saved;
    if (navigator.language?.toLowerCase().startsWith("id")) return "id";
  } catch {
    /* ignore */
  }
  return DEFAULT_LANG;
}

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Start at the default so SSR and the first client render match exactly;
  // apply the saved/browser language on mount.
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    const detected = detectLang();
    if (detected === DEFAULT_LANG) return;
    const id = window.setTimeout(() => setLangState(detected), 0);
    return () => window.clearTimeout(id);
  }, []);

  const value = useMemo<I18nContextValue>(() => {
    const dict = dictionaries[lang];
    return {
      lang,
      setLang: (l: Lang) => {
        setLangState(l);
        try {
          window.localStorage.setItem(STORAGE_KEY, l);
        } catch {
          /* ignore */
        }
      },
      t: (key: string) => dict.ui[key] ?? dictionaries.en.ui[key] ?? key,
      nav: dict.nav,
      services: dict.services,
      process: dict.process,
      why: dict.why,
    };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within a LanguageProvider");
  return ctx;
}
