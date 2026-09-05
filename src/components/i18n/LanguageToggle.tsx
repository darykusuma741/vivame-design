"use client";

import { useI18n } from "@/components/i18n/LanguageProvider";

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useI18n();

  const seg =
    "px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] transition-colors duration-300";

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center border border-line bg-paper ${className ?? ""}`}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        aria-label="English"
        className={`${seg} ${
          lang === "en" ? "bg-ink text-paper" : "text-ink hover:bg-ink/[0.06]"
        }`}
      >
        EN
      </button>
      <span aria-hidden="true" className="h-4 w-px bg-line" />
      <button
        type="button"
        onClick={() => setLang("id")}
        aria-pressed={lang === "id"}
        aria-label="Bahasa Indonesia"
        className={`${seg} ${
          lang === "id" ? "bg-ink text-paper" : "text-ink hover:bg-ink/[0.06]"
        }`}
      >
        ID
      </button>
    </div>
  );
}
