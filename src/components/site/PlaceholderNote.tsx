/**
 * Honest placeholder marker — used wherever real VIVAME content (project
 * photography) is still being prepared, so nothing fabricated is presented
 * as real work.
 */
export function PlaceholderNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-8 inline-flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.26em] text-faint">
      <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
      {children}
    </p>
  );
}
