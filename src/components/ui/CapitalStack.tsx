"use client";

/**
 * CapitalStack - the signature visual device for the we homepage.
 *
 * It is a cross-section of a blended capital structure: catalytic capital
 * at the base absorbing first risk, concessional capital in the middle,
 * and commercial capital at the top - the literal mechanism we
 * builds. This isn't decorative; it's the diagram a structurer would
 * actually draw on a whiteboard, rendered as the hero's centerpiece and
 * echoed (smaller) wherever capital structure is discussed.
 */
export default function CapitalStack({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 620"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Diagram of a blended capital stack: catalytic capital at the base, concessional capital in the middle, commercial capital at the top"
    >
      <defs>
        <linearGradient id="csCommercial" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6f1c28" />
          <stop offset="100%" stopColor="#8f2b39" />
        </linearGradient>
        <linearGradient id="csConcessional" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#39424f" />
          <stop offset="100%" stopColor="#4b5563" />
        </linearGradient>
        <linearGradient id="csCatalytic" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8a6a45" />
          <stop offset="100%" stopColor="#b38a5b" />
        </linearGradient>
      </defs>

      {/* baseline / ground line */}
      <line x1="40" y1="560" x2="520" y2="560" stroke="#d8d1c4" strokeWidth="1" />

      {/* Tranche 3 - Commercial (top, thinnest, first to be repaid) */}
      <g>
        <rect x="60" y="80" width="440" height="92" fill="url(#csCommercial)" />
        <rect x="60" y="80" width="440" height="92" fill="none" stroke="#45111a" strokeWidth="1" />
        <text x="80" y="116" fontSize="11" letterSpacing="0.18em" fill="#f3e9ec" fontFamily="var(--font-body, sans-serif)">
          COMMERCIAL CAPITAL
        </text>
        <text x="80" y="142" fontSize="22" fill="#ffffff" fontFamily="var(--font-heading, serif)">
          Last in, first protected
        </text>
      </g>

      {/* Tranche 2 - Concessional (middle, larger) */}
      <g>
        <rect x="60" y="188" width="440" height="150" fill="url(#csConcessional)" />
        <rect x="60" y="188" width="440" height="150" fill="none" stroke="#1f242c" strokeWidth="1" />
        <text x="80" y="226" fontSize="11" letterSpacing="0.18em" fill="#cfd5dc" fontFamily="var(--font-body, sans-serif)">
          CONCESSIONAL DEBT
        </text>
        <text x="80" y="252" fontSize="22" fill="#ffffff" fontFamily="var(--font-heading, serif)">
          Patient, below-market
        </text>
        <text x="80" y="278" fontSize="13" fill="#cfd5dc" fontFamily="var(--font-body, sans-serif)">
          DFI and blended-facility tenor
        </text>
      </g>

      {/* Tranche 1 - Catalytic / TA-linked (base, absorbs first loss) */}
      <g>
        <rect x="60" y="354" width="440" height="206" fill="url(#csCatalytic)" />
        <rect x="60" y="354" width="440" height="206" fill="none" stroke="#6e4f2c" strokeWidth="1" />
        <text x="80" y="394" fontSize="11" letterSpacing="0.18em" fill="#3a2a16" fontFamily="var(--font-body, sans-serif)">
          CATALYTIC CAPITAL
        </text>
        <text x="80" y="424" fontSize="26" fill="#221808" fontFamily="var(--font-heading, serif)">
          First-loss, technical
        </text>
        <text x="80" y="424" fontSize="26" fill="#221808" fontFamily="var(--font-heading, serif)" dy="32">
          assistance-linked
        </text>
        <text x="80" y="480" fontSize="13" fill="#4a3a22" fontFamily="var(--font-body, sans-serif)">
          we origination + readiness layer
        </text>
      </g>

      {/* annotation: rising arrow showing institutional capital entering at the top */}
      <g style={{ animation: "float-slow 5s ease-in-out infinite" }}>
        <line x1="540" y1="540" x2="540" y2="100" stroke="#b38a5b" strokeWidth="1" strokeDasharray="4 5" style={{ animation: "dash-flow 1.6s linear infinite" }} />
        <path d="M533 108 L540 92 L547 108 Z" fill="#b38a5b" />
        <text x="546" y="300" fontSize="11" letterSpacing="0.14em" fill="#8a6a45" fontFamily="var(--font-body, sans-serif)" transform="rotate(90 546 300)">
          INSTITUTIONAL ENTRY
        </text>
      </g>
    </svg>
  );
}