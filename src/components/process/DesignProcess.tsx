"use client";

import { useEffect, useRef, useState } from "react";
import { processSteps } from "@/lib/content";
import { PlaceholderArt } from "@/components/site/PlaceholderArt";

/**
 * DesignProcess — an interactive, editorial timeline of the studio's working
 * flow. Desktop shows a horizontal step rail with a drawing progress line and
 * a detail panel; mobile collapses into a vertical timeline. All content is
 * always in the DOM (never hidden behind hover), and motion is gated behind
 * prefers-reduced-motion + a no-JS fallback (see globals.css / layout).
 */
export function DesignProcess() {
  const steps = processSteps;
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const activeStep = steps[active];
  const progressWidth = `${((2 * active + 1) / (2 * steps.length)) * 100}%`;

  return (
    <div ref={rootRef} className={inView ? "dp-visible" : undefined}>
      {/* Desktop — horizontal editorial timeline */}
      <div className="hidden lg:block">
        <div className="relative">
          <span
            aria-hidden="true"
            className="process-rail-line absolute left-0 right-0 top-[1.375rem] h-px bg-line"
          />
          <span
            aria-hidden="true"
            className="absolute left-0 top-[1.375rem] h-px bg-gold-deep transition-[width] duration-500 ease-out"
            style={{ width: progressWidth }}
          />
          <ol className="relative grid grid-cols-7">
            {steps.map((step, i) => {
              const isActive = i === active;
              return (
                <li key={step.number} className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    aria-label={`${step.number} — ${step.title}`}
                    className="process-node group flex w-full flex-col items-center gap-4 text-center"
                    style={{ transitionDelay: `${i * 90}ms` }}
                  >
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full border font-display text-sm transition-colors duration-300 ${
                        isActive
                          ? "border-gold-deep bg-ink text-paper"
                          : "border-line bg-paper text-stone group-hover:border-gold-deep group-hover:text-ink"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`max-w-full text-[0.66rem] font-medium uppercase leading-snug tracking-[0.14em] transition-colors duration-300 ${
                        isActive ? "text-ink" : "text-stone group-hover:text-ink"
                      }`}
                    >
                      {step.short}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Active step detail */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div aria-live="polite">
            <div key={active} className="animate-step-enter">
              <div className="flex items-baseline gap-5">
                <span className="font-display text-[clamp(3.5rem,7vw,6rem)] font-medium leading-none text-gold-deep">
                  {activeStep.number}
                </span>
                <span className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-faint">
                  Step {activeStep.number} / 0{steps.length}
                </span>
              </div>
              <h3 className="mt-6 font-display text-[clamp(1.9rem,3.5vw,3rem)] font-medium leading-tight text-ink">
                {activeStep.title}
              </h3>
              <p className="mt-5 max-w-[56ch] text-base leading-7 text-stone">
                {activeStep.description}
              </p>
            </div>
          </div>
          <div key={`art-${active}`} className="animate-step-enter">
            <PlaceholderArt
              variant={activeStep.art}
              label={`${activeStep.title} — process visual`}
              className="aspect-[4/3] w-full"
            />
          </div>
        </div>
      </div>

      {/* Mobile — vertical timeline */}
      <div className="lg:hidden">
        <ol className="relative">
          <span
            aria-hidden="true"
            className="process-rail-line-v absolute bottom-[1.375rem] left-6 top-[1.375rem] w-px bg-line"
          />
          {steps.map((step, i) => (
            <li
              key={step.number}
              className="process-node relative grid grid-cols-[3rem_1fr] gap-5 pb-10 last:pb-0"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper font-display text-sm text-gold-deep">
                {step.number}
              </span>
              <div className="pt-1">
                <h3 className="font-display text-xl font-medium leading-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-stone">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
