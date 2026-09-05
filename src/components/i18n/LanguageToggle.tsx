"use client";

import { useI18n } from "@/components/i18n/LanguageProvider";

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useI18n();

  return (
    <button
      type="button"
      onClick={() => setLang(lang === "en" ? "id" : "en")}
      aria-label={lang === "en" ? "Ganti ke Bahasa Indonesia" : "Switch to English"}
      className={`inline-flex items-center gap-1.5 text-[0.72rem] font-medium uppercase tracking-[0.14em] ${className ?? ""}`}
    >
      <span className={lang === "en" ? "text-ink" : "text-faint"}>EN</span>
      <span aria-hidden="true" className="text-line">
        /
      </span>
      <span className={lang === "id" ? "text-ink" : "text-faint"}>ID</span>
    </button>
  );
}
