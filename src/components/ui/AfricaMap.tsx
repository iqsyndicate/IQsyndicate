/**
 * AfricaMap - a simplified, stylized continent silhouette (not
 * survey-accurate) used as a decorative, floating illustration. Good
 * enough for an editorial accent; swap for a licensed vector map if
 * geographic precision is ever required.
 */
export default function AfricaMap({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} style={{ animation: "float-slow 6s ease-in-out infinite" }}>
      <svg viewBox="0 0 220 240" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        {/* dashed orbit ring */}
        <circle
          cx="110"
          cy="120"
          r="105"
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
          strokeDasharray="3 7"
        />

        {/* simplified continent silhouette */}
        <path
          d="M82,14 L112,10 L132,22 L150,38 L166,58 L182,70 L196,68 L186,86 L170,92
             L166,122 L160,152 L150,182 L132,206 L112,216 L98,220 L88,210
             L74,192 L60,172 L54,142 L40,132 L34,116 L46,110 L56,120
             L52,90 L56,70 L62,50 L56,30 Z"
          fill="rgba(255,255,255,0.1)"
          stroke="rgba(215,184,146,0.8)"
          strokeWidth="1.5"
        />

        {/* Nigeria marker, pulsing */}
        <g transform="translate(96,108)">
          <circle r="10" fill="rgba(215,184,146,0.25)" style={{ animation: "pulse-dot 2.2s ease-in-out infinite" }} />
          <circle r="4" fill="#d7b892" />
        </g>
      </svg>
    </div>
  );
}