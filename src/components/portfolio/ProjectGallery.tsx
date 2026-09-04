"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ProjectImage } from "@/lib/portfolio";

/**
 * ProjectGallery — an editorial grid of a project's photography with a
 * fullscreen lightbox. Keyboard (←/→/Esc), focus management, click-to-close,
 * and mobile touch are all handled. Motion is subtle and respects the
 * global prefers-reduced-motion rules.
 */
export function ProjectGallery({ images }: { images: ProjectImage[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () =>
      setIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (!open) {
      if (lastFocused.current) lastFocused.current.focus();
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, prev, next]);

  if (images.length === 0) return null;

  const current = index !== null ? images[index] : null;

  return (
    <>
      {/* Editorial grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => {
              lastFocused.current = document.activeElement as HTMLElement;
              setIndex(i);
            }}
            aria-label={`View larger: ${img.alt}`}
            className={`group relative block w-full overflow-hidden bg-beige ${
              i === 0 ? "sm:col-span-2" : ""
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes={i === 0 ? "100vw" : "(max-width: 640px) 100vw, 50vw"}
              className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          ref={dialogRef}
          tabIndex={-1}
          onClick={close}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close gallery"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-paper/30 text-paper transition-colors hover:border-paper"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-paper/30 text-paper transition-colors hover:border-paper sm:left-6"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-paper/30 text-paper transition-colors hover:border-paper sm:right-6"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <figure
            className="flex max-h-full max-w-full flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative"
              style={{
                aspectRatio: `${current.width} / ${current.height}`,
                width: `min(92vw, calc(82vh * ${current.width} / ${current.height}))`,
              }}
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="92vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 text-sm text-paper/70">
              {current.alt}
              <span className="text-paper/40">
                {" "}
                — {(index ?? 0) + 1} / {images.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
