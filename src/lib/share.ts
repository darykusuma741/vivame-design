/**
 * Share helpers — pure, dependency-free URL builders for the universal share
 * feature. These functions never touch `window`/`navigator`; the client
 * component resolves the canonical current-page URL/title and passes them in.
 */

export interface SharePayload {
  url: string;
  title: string;
  text: string;
}

/** WhatsApp: message = share text + newline + URL. */
export function whatsappShareUrl(p: SharePayload): string {
  return `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${p.text}\n${p.url}`,
  )}`;
}

/** Facebook sharer — the crawler pulls the OG metadata for the preview. */
export function facebookShareUrl(p: SharePayload): string {
  const params = new URLSearchParams({ u: p.url });
  return `https://www.facebook.com/sharer/sharer.php?${params.toString()}`;
}

/** X / Twitter intent — url + share text. */
export function xShareUrl(p: SharePayload): string {
  const params = new URLSearchParams({ url: p.url, text: p.text });
  return `https://twitter.com/intent/tweet?${params.toString()}`;
}

/** Telegram share — url + share text. */
export function telegramShareUrl(p: SharePayload): string {
  const params = new URLSearchParams({ url: p.url, text: p.text });
  return `https://t.me/share/url?${params.toString()}`;
}

/**
 * Resolve the canonical base URL for sharing.
 *
 * Reuses the configured public site URL (site.siteUrl). If that is still a
 * localhost/dev placeholder but we are running on a real origin, the live
 * origin wins — so shared links never accidentally point at localhost in
 * production. Falls back to the live origin otherwise.
 */
export function canonicalBase(
  configured: string,
  fallbackOrigin?: string,
): string {
  const base = (configured || "").replace(/\/+$/, "");
  const isLocalhost = /^https?:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0)(:\d+)?$/i.test(
    base,
  );
  if (isLocalhost && fallbackOrigin) {
    return fallbackOrigin.replace(/\/+$/, "");
  }
  return base;
}
