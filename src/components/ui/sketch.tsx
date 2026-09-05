/**
 * Architectural / interior line sketches used as decorative background and
 * floating parallax elements. All inherit `currentColor` so opacity is
 * controlled by the parent's `text-<color>/<opacity>` utility.
 */

export function FloorPlanSketch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 700"
      fill="none"
      stroke="currentColor"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      {/* Room outline */}
      <rect x="40" y="40" width="920" height="600" strokeWidth="1.5" />
      {/* Dividing wall with doorway */}
      <line x1="470" y1="40" x2="470" y2="290" strokeWidth="1" />
      <line x1="470" y1="400" x2="470" y2="640" strokeWidth="1" />
      <path d="M470 400 A 90 90 0 0 0 560 310" strokeWidth="1" strokeDasharray="4 4" />
      {/* Window */}
      <line x1="150" y1="40" x2="320" y2="40" strokeWidth="2" />
      <line x1="150" y1="50" x2="320" y2="50" strokeWidth="1" />
      {/* Rug */}
      <rect x="80" y="120" width="300" height="240" strokeWidth="1" strokeDasharray="3 5" />
      {/* Sofa (top view) */}
      <rect x="110" y="150" width="230" height="95" strokeWidth="1.2" />
      <line x1="110" y1="198" x2="340" y2="198" strokeWidth="1" />
      <line x1="187" y1="150" x2="187" y2="245" strokeWidth="1" />
      <line x1="264" y1="150" x2="264" y2="245" strokeWidth="1" />
      {/* Coffee table */}
      <rect x="175" y="290" width="100" height="55" strokeWidth="1.2" />
      {/* Dining table + chairs */}
      <circle cx="760" cy="170" r="60" strokeWidth="1.2" />
      <rect x="742" y="80" width="36" height="28" strokeWidth="1" />
      <rect x="742" y="232" width="36" height="28" strokeWidth="1" />
      <rect x="670" y="156" width="28" height="36" strokeWidth="1" />
      <rect x="822" y="156" width="28" height="36" strokeWidth="1" />
      {/* Bed */}
      <rect x="580" y="440" width="280" height="170" strokeWidth="1.2" />
      <line x1="580" y1="525" x2="860" y2="525" strokeWidth="1" />
      <rect x="580" y="440" width="85" height="85" strokeWidth="1" />
      {/* Plant */}
      <circle cx="905" cy="575" r="26" strokeWidth="1" />
      <path d="M905 601 v-6" strokeWidth="1" />
      {/* Dimension lines */}
      <line x1="40" y1="670" x2="960" y2="670" strokeWidth="0.75" strokeDasharray="2 5" />
      <path d="M40 664 v12 M960 664 v12" strokeWidth="0.75" />
      <line x1="990" y1="40" x2="990" y2="640" strokeWidth="0.75" strokeDasharray="2 5" />
      <path d="M984 40 h12 M984 640 h12" strokeWidth="0.75" />
    </svg>
  );
}

export function SofaSketch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 90"
      fill="none"
      stroke="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 42 h84 M18 42 v22 M102 42 v22" strokeWidth="1.4" />
      <path d="M14 78 h92" strokeWidth="1.4" />
      <rect x="18" y="26" width="84" height="16" strokeWidth="1.4" />
      <path d="M18 26 c-6 -18 0 -22 0 -24 c0 2 6 6 0 24" strokeWidth="1.4" />
      <path d="M102 26 c6 -18 0 -22 0 -24 c0 2 -6 6 0 24" strokeWidth="1.4" />
      <line x1="48" y1="26" x2="48" y2="42" strokeWidth="1" />
      <line x1="72" y1="26" x2="72" y2="42" strokeWidth="1" />
    </svg>
  );
}

export function LampSketch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 130"
      fill="none"
      stroke="currentColor"
      className={className}
      aria-hidden="true"
    >
      <line x1="30" y1="24" x2="30" y2="100" strokeWidth="1.4" />
      <path d="M30 24 c-16 0 -16 -16 0 -16 c16 0 16 16 0 16 z" strokeWidth="1.4" />
      <line x1="16" y1="100" x2="44" y2="100" strokeWidth="1.4" />
      <line x1="20" y1="100" x2="20" y2="108" strokeWidth="1" />
      <line x1="40" y1="100" x2="40" y2="108" strokeWidth="1" />
      <line x1="12" y1="108" x2="48" y2="108" strokeWidth="1.2" />
    </svg>
  );
}

export function PlantSketch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 100"
      fill="none"
      stroke="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M40 34 c-16 -12 -16 -30 0 -30 c16 0 16 18 0 30" strokeWidth="1.4" />
      <path d="M40 34 c-16 -8 -22 -20 -8 -28 c14 8 8 20 -8 28" strokeWidth="1.4" />
      <path d="M40 34 c16 -8 22 -20 8 -28 c-14 8 -8 20 8 28" strokeWidth="1.4" />
      <path d="M20 40 h40 l-7 44 h-26 z" strokeWidth="1.4" />
      <line x1="13" y1="40" x2="67" y2="40" strokeWidth="1" />
    </svg>
  );
}
