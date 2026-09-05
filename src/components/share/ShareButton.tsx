"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { site } from "@/lib/site";
import { useI18n } from "@/components/i18n/LanguageProvider";
import {
  canonicalBase,
  facebookShareUrl,
  telegramShareUrl,
  whatsappShareUrl,
  xShareUrl,
  type SharePayload,
} from "@/lib/share";

/* ---------------------------------------------------------------------------
 * Inline icons (no icon-library dependency). Stroke icons follow the project's
 * existing 1.5px stroke convention; brand glyphs are filled for recognition.
 * ------------------------------------------------------------------------- */

type IconProps = { className?: string };

function ShareIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
      <path d="M16 6l-4-4-4 4" />
      <path d="M12 2v13" />
    </svg>
  );
}

function LinkIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function CheckIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function ExternalIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M7 7h10v10" />
      <path d="M7 17L17 7" />
    </svg>
  );
}

function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

function TelegramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function brandIcon(id: string) {
  switch (id) {
    case "whatsapp":
      return <WhatsAppIcon className="h-[18px] w-[18px]" />;
    case "facebook":
      return <FacebookIcon className="h-[18px] w-[18px]" />;
    case "x":
      return <XIcon className="h-[18px] w-[18px]" />;
    case "telegram":
      return <TelegramIcon className="h-[18px] w-[18px]" />;
    default:
      return null;
  }
}

/* ---------------------------------------------------------------------------
 * Clipboard helpers
 * ------------------------------------------------------------------------- */

async function copyText(value: string): Promise<boolean> {
  // Modern async Clipboard API.
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch {
      // Fall through to the legacy path (e.g. permission denied).
    }
  }
  // Legacy fallback — works on non-secure contexts and older browsers.
  try {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

/* ---------------------------------------------------------------------------
 * ShareButton
 * ------------------------------------------------------------------------- */

interface ShareButtonProps {
  /** Trigger button label. Defaults to "Share". */
  label?: string;
  /** Share title. Falls back to `document.title`. */
  title?: string;
  /** Share text (WhatsApp message / X text / Telegram text). Falls back to `title`. */
  text?: string;
  /** Explicit share URL. Falls back to the canonical current-page URL. */
  url?: string;
  /** Accessible context, e.g. "this project" → "Share this project". */
  subject?: string;
  className?: string;
}

export function ShareButton({
  label,
  title,
  text,
  url,
  subject,
  className,
}: ShareButtonProps) {
  const { t } = useI18n();
  const resolvedLabel = label ?? t("share.label");
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);
  const closeTimer = useRef<number | null>(null);

  // Native Web Share support is a stable capability, safe to derive during
  // render (it is only rendered once the dialog opens, so no SSR mismatch).
  const nativeSupported =
    typeof navigator !== "undefined" && typeof navigator.share === "function";

  // Resolve share data lazily (client-only, so no SSR access to window).
  const payload = useMemo<SharePayload | null>(() => {
    if (typeof window === "undefined") return null;
    const base = canonicalBase(site.siteUrl, window.location.origin);
    const { pathname, search, hash } = window.location;
    const resolvedUrl = url ?? `${base}${pathname}${search}${hash}`;
    const resolvedTitle = title ?? document.title ?? "";
    const resolvedText = text ?? resolvedTitle;
    return { url: resolvedUrl, title: resolvedTitle, text: resolvedText };
  }, [url, title, text]);

  const close = useCallback(() => {
    setVisible(false);
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => {
      setOpen(false);
      setCopied(false);
    }, 200);
  }, []);

  const openDialog = useCallback(() => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
  }, []);

  // Body scroll lock, ESC-to-close, and focus the dialog while open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  // Return focus to the trigger when the dialog closes.
  useEffect(() => {
    if (open) {
      wasOpen.current = true;
    } else if (wasOpen.current) {
      wasOpen.current = false;
      triggerRef.current?.focus();
    }
  }, [open]);

  const copyLink = useCallback(async () => {
    if (!payload) return;
    const ok = await copyText(payload.url);
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    }
    // On failure the button simply stays "Copy link"; the visible URL footer
    // remains as a manual fallback.
  }, [payload]);

  const nativeShare = useCallback(async () => {
    if (!payload || typeof navigator.share !== "function") return;
    try {
      await navigator.share({
        title: payload.title,
        text: payload.text,
        url: payload.url,
      });
      close();
    } catch (error) {
      // AbortError = the user dismissed the native sheet — not a failure.
      if ((error as Error)?.name !== "AbortError") {
        // Unexpected error: keep the dialog open so other options still work.
      }
    }
  }, [payload, close]);

  const ariaLabel = subject ? `${t("share.label")} ${subject}` : t("share.label");

  const socialLinks = payload
    ? [
        { id: "whatsapp", label: "WhatsApp", href: whatsappShareUrl(payload) },
        { id: "facebook", label: "Facebook", href: facebookShareUrl(payload) },
        { id: "x", label: "X", href: xShareUrl(payload) },
        { id: "telegram", label: "Telegram", href: telegramShareUrl(payload) },
      ]
    : [];

  return (
    <div className={className}>
      <button
        ref={triggerRef}
        type="button"
        onClick={openDialog}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={ariaLabel}
        className="btn btn-outline btn-sm"
      >
        <ShareIcon className="h-4 w-4" />
        <span>{resolvedLabel}</span>
      </button>

      {open && payload && (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-4"
          role="presentation"
        >
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-ink/40 transition-opacity duration-200 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            onClick={close}
            aria-hidden="true"
          />

          {/* Panel (bottom sheet on mobile, centered card on desktop) */}
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={ariaLabel}
            tabIndex={-1}
            className={`relative w-full border-line bg-paper outline-none transition-all duration-200 ease-out sm:max-w-sm sm:border ${
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <h2 className="eyebrow">{t("share.label")}</h2>
              <button
                type="button"
                onClick={close}
                aria-label="Close share dialog"
                className="flex h-9 w-9 items-center justify-center text-stone transition-colors hover:text-ink"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <ul className="divide-y divide-line">
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                    className="flex items-center gap-3.5 px-5 py-3.5 transition-colors hover:bg-soft"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center text-ink">
                      {brandIcon(link.id)}
                    </span>
                    <span className="flex-1 text-left text-sm font-medium text-ink">
                      {link.label}
                    </span>
                    <ExternalIcon className="h-4 w-4 text-faint" />
                  </a>
                </li>
              ))}

              <li>
                <button
                  type="button"
                  onClick={copyLink}
                  className="flex w-full items-center gap-3.5 px-5 py-3.5 transition-colors hover:bg-soft"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center text-ink">
                    {copied ? (
                      <CheckIcon className="h-[18px] w-[18px]" />
                    ) : (
                      <LinkIcon className="h-[18px] w-[18px]" />
                    )}
                  </span>
                  <span className="flex-1 text-left text-sm font-medium text-ink">
                    {copied ? t("share.copied") : t("share.copy")}
                  </span>
                </button>
              </li>

              {nativeSupported && (
                <li>
                  <button
                    type="button"
                    onClick={nativeShare}
                    className="flex w-full items-center gap-3.5 px-5 py-3.5 transition-colors hover:bg-soft"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center text-ink">
                      <ShareIcon className="h-[18px] w-[18px]" />
                    </span>
                    <span className="flex-1 text-left text-sm font-medium text-ink">
                      {t("share.device")}
                    </span>
                  </button>
                </li>
              )}
            </ul>

            <div className="border-t border-line px-5 py-3">
              <p
                className="select-all truncate text-xs text-faint"
                title={payload.url}
              >
                {payload.url}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
