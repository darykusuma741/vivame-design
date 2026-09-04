/**
 * PlaceholderArt — abstract architectural artwork used where real VIVAME
 * photography is not yet available. Rendered as inline SVG so it is crisp at
 * any size, weightless, and clearly a placeholder. When real imagery arrives,
 * swap this component for <Image> with real files (see src/lib/portfolio.ts).
 *
 * Each variant is a distinct minimal composition in the brand palette.
 */

const INK = "#1a1a1a";
const GOLD = "#b89b72";
const BEIGE = "#e8ded2";
const SOFT = "#f5f5f5";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="800" height="600" fill={BEIGE} />
      {/* architectural drawing border + corner ticks */}
      <rect x="42" y="42" width="716" height="516" fill="none" stroke={INK} strokeOpacity="0.12" />
      {[
        [42, 42],
        [758, 42],
        [42, 558],
        [758, 558],
      ].map(([x, y], i) => (
        <g key={i} stroke={INK} strokeOpacity="0.3" strokeWidth="1.5">
          <line x1={x - 12} y1={y} x2={x + 12} y2={y} />
          <line x1={x} y1={y - 12} x2={x} y2={y + 12} />
        </g>
      ))}
      {children}
    </svg>
  );
}

const variants: Record<number, React.ReactNode> = {
  // Arches
  0: (
    <g>
      {[0, 1, 2].map((i) => {
        const x = 110 + i * 210;
        return (
          <g key={i} fill="none" stroke={INK} strokeWidth="2.5">
            <path d={`M ${x} 520 L ${x} 300 A 85 85 0 0 1 ${x + 170} 300 L ${x + 170} 520`} />
            <path d={`M ${x + 34} 520 L ${x + 34} 320 A 51 51 0 0 1 ${x + 136} 320 L ${x + 136} 520`} strokeOpacity="0.5" />
          </g>
        );
      })}
      <line x1="60" y1="520" x2="740" y2="520" stroke={INK} strokeWidth="2.5" />
      <circle cx="684" cy="120" r="22" fill="none" stroke={GOLD} strokeWidth="2.5" />
    </g>
  ),
  // Perspective corner
  1: (
    <g fill="none" stroke={INK} strokeWidth="2">
      <line x1="400" y1="250" x2="90" y2="80" />
      <line x1="400" y1="250" x2="710" y2="80" />
      <line x1="400" y1="250" x2="90" y2="520" />
      <line x1="400" y1="250" x2="710" y2="520" />
      {[0.5, 0.62, 0.76, 0.92].map((t, i) => (
        <line
          key={i}
          x1={90}
          y1={80 + t * 440}
          x2={710}
          y2={80 + t * 440}
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
      ))}
      <rect x="300" y="400" width="200" height="120" stroke={GOLD} strokeWidth="2.5" />
    </g>
  ),
  // Concentric sun
  2: (
    <g fill="none" stroke={INK} strokeWidth="2.5">
      <circle cx="330" cy="270" r="180" />
      <circle cx="330" cy="270" r="130" strokeOpacity="0.5" />
      <circle cx="330" cy="270" r="80" stroke={GOLD} strokeWidth="3" />
      <line x1="330" y1="270" x2="330" y2="60" strokeOpacity="0.6" />
      <line x1="330" y1="270" x2="330" y2="480" strokeOpacity="0.6" />
      <line x1="120" y1="270" x2="540" y2="270" strokeOpacity="0.6" />
    </g>
  ),
  // Column rhythm
  3: (
    <g>
      <line x1="70" y1="500" x2="730" y2="500" stroke={INK} strokeWidth="2.5" />
      {[
        [110, 260],
        [250, 360],
        [390, 200],
        [530, 420],
        [670, 300],
      ].map(([x, h], i) => (
        <g key={i} stroke={INK} strokeWidth="2.5" fill="none">
          <rect x={x} y={500 - h} width="56" height={h} />
          {i === 2 || i === 4 ? (
            <rect x={x} y={500 - h} width="56" height={h} fill={GOLD} stroke="none" />
          ) : null}
        </g>
      ))}
    </g>
  ),
  // Diagonal sweep
  4: (
    <g fill="none" stroke={INK} strokeWidth="2.5">
      <line x1="90" y1="510" x2="710" y2="90" />
      <path d="M 90 510 L 90 360 L 240 510 Z" fill={GOLD} stroke="none" />
      <path d="M 710 90 L 710 240 L 560 90 Z" fill={INK} stroke="none" opacity="0.12" />
      <circle cx="640" cy="400" r="34" stroke={GOLD} strokeWidth="3" />
    </g>
  ),
  // Grid + circle
  5: (
    <g fill="none" stroke={INK} strokeWidth="1.2" strokeOpacity="0.35">
      {[1, 2, 3, 4].map((i) => (
        <g key={i}>
          <line x1={i * 160} y1="60" x2={i * 160} y2="540" />
          <line x1="60" y1={i * 120} x2="740" y2={i * 120} />
        </g>
      ))}
      <circle cx="500" cy="300" r="150" stroke={GOLD} strokeWidth="3" strokeOpacity="1" />
      <circle cx="500" cy="300" r="90" stroke={INK} strokeWidth="2" strokeOpacity="0.7" />
    </g>
  ),
  // Staircase
  6: (
    <g fill="none" stroke={INK} strokeWidth="2.5">
      <polyline points="90,480 90,400 210,400 210,320 330,320 330,240 450,240 450,160 570,160 570,80" />
      {[
        [90, 400],
        [210, 320],
        [330, 240],
        [450, 160],
      ].map(([x, y], i) => (
        <line key={i} x1={x} y1={y} x2={x} y2={y + 80} stroke={GOLD} strokeWidth="3" />
      ))}
    </g>
  ),
  // Layered floor plan
  7: (
    <g fill="none" stroke={INK} strokeWidth="2.5">
      <rect x="150" y="140" width="300" height="260" />
      <rect x="380" y="90" width="270" height="200" />
      <rect x="250" y="320" width="330" height="180" fill={SOFT} />
      <rect x="470" y="300" width="180" height="120" fill={GOLD} stroke="none" />
      <circle cx="300" cy="270" r="10" fill={INK} stroke="none" />
    </g>
  ),
};

export function PlaceholderArt({
  variant,
  label,
  className,
}: {
  variant: number;
  label?: string;
  className?: string;
}) {
  const v = variant % Object.keys(variants).length;
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      className={`relative overflow-hidden bg-beige ${className ?? ""}`}
    >
      <div className="absolute inset-0">{variants[v] ? <Frame>{variants[v]}</Frame> : null}</div>
    </div>
  );
}
