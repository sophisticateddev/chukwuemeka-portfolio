// Hand-drawn SVG covers, one per article. Colours mirror the Tailwind tokens.
const C = {
  bg: "#131417",
  raised: "#1A1C20",
  line: "#26282D",
  control: "#5C6068",
  muted: "#A6A8AE",
  ink: "#F4F4F1",
  accent: "#C6F135",
  onaccent: "#0B0C0E",
};

const labels: Record<string, string> = {
  "mastering-the-8pt-grid": "A card snapped to an 8-point grid, with 8, 16 and 24 point spacing marked",
  "designing-for-everyone": "Readable text on a high-contrast swatch beside a keyboard focus ring and a Tab key",
  "how-ai-is-shaping-better-ux": "An app interface floating above a network of connected nodes",
  "from-flexbox-to-figma": "CSS flexbox code mapped onto a Figma auto layout frame with three items",
  "how-to-prioritize-like-a-pro": "An impact versus effort matrix with tasks plotted in each quadrant",
  "understanding-figma-constraints": "A frame with a child element pinned to its edges by constraint lines",
  "twitter-dm-redesign": "Chat bubbles with an unread message indicator",
  "users-should-have-a-say": "A line drawing of a bicycle with colour options",
};

export function coverLabel(slug: string) {
  return labels[slug] ?? "";
}

export default function ArticleCover({
  slug,
  className = "",
  decorative = true,
}: {
  slug: string;
  className?: string;
  /** false on the article page, where the cover is described for screen readers */
  decorative?: boolean;
}) {
  const a11y = decorative
    ? { "aria-hidden": true as const }
    : { role: "img", "aria-label": labels[slug] };

  return (
    <svg viewBox="0 0 400 250" className={className} {...a11y} preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="250" fill={C.bg} />
      {art[slug] ?? null}
    </svg>
  );
}

const grid8 = (
  <g>
    {Array.from({ length: 51 }, (_, i) => (
      <line key={`v${i}`} x1={i * 8} y1="0" x2={i * 8} y2="250" stroke={C.line} strokeWidth={i % 3 === 0 ? 0.9 : 0.4} />
    ))}
    {Array.from({ length: 32 }, (_, i) => (
      <line key={`h${i}`} x1="0" y1={i * 8} x2="400" y2={i * 8} stroke={C.line} strokeWidth={i % 3 === 0 ? 0.9 : 0.4} />
    ))}
  </g>
);

const art: Record<string, JSX.Element> = {
  "mastering-the-8pt-grid": (
    <g>
      {grid8}
      <rect x="120" y="56" width="160" height="136" rx="16" fill={C.raised} stroke={C.accent} strokeWidth="1.5" />
      <rect x="136" y="72" width="128" height="56" rx="8" fill={C.line} />
      <rect x="136" y="144" width="88" height="8" rx="4" fill={C.ink} />
      <rect x="136" y="160" width="64" height="8" rx="4" fill={C.muted} />
      {/* spacing callouts */}
      <g stroke={C.accent} strokeWidth="1.5">
        <line x1="120" y1="44" x2="136" y2="44" />
        <line x1="296" y1="128" x2="296" y2="144" />
        <line x1="104" y1="56" x2="104" y2="80" />
      </g>
      <g fill={C.accent} fontFamily="monospace" fontSize="10">
        <text x="121" y="38">16</text>
        <text x="302" y="140">16</text>
        <text x="84" y="72">24</text>
      </g>
      <circle cx="320" cy="200" r="22" fill={C.accent} />
      <text x="320" y="205" textAnchor="middle" fontFamily="monospace" fontSize="14" fill={C.onaccent} fontWeight="700">
        8pt
      </text>
    </g>
  ),
  "designing-for-everyone": (
    <g>
      <rect x="40" y="48" width="150" height="150" rx="20" fill={C.ink} />
      <text x="115" y="140" textAnchor="middle" fontFamily="sans-serif" fontSize="64" fontWeight="700" fill={C.onaccent}>
        Aa
      </text>
      <rect x="54" y="168" width="58" height="20" rx="10" fill={C.accent} />
      <text x="83" y="182" textAnchor="middle" fontFamily="monospace" fontSize="10" fill={C.onaccent} fontWeight="700">
        17.9:1
      </text>
      <rect x="216" y="70" width="140" height="44" rx="22" fill={C.raised} />
      <rect x="211" y="65" width="150" height="54" rx="27" fill="none" stroke={C.accent} strokeWidth="2.5" />
      <text x="286" y="97" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fill={C.ink}>
        Continue
      </text>
      <rect x="246" y="146" width="80" height="48" rx="8" fill={C.raised} stroke={C.control} />
      <rect x="246" y="190" width="80" height="6" rx="3" fill={C.line} />
      <text x="286" y="176" textAnchor="middle" fontFamily="monospace" fontSize="14" fill={C.ink}>
        Tab
      </text>
    </g>
  ),
  "how-ai-is-shaping-better-ux": (
    <g>
      {[
        [60, 200], [120, 170], [180, 210], [240, 180], [300, 205], [350, 170], [90, 140], [210, 150], [330, 130],
      ].map(([x, y], i, arr) => (
        <g key={i}>
          {arr.slice(i + 1, i + 3).map(([x2, y2], j) => (
            <line key={j} x1={x} y1={y} x2={x2} y2={y2} stroke={C.line} strokeWidth="1.2" />
          ))}
        </g>
      ))}
      {[
        [60, 200], [120, 170], [180, 210], [240, 180], [300, 205], [350, 170], [90, 140], [210, 150], [330, 130],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 5 : 3.5} fill={i % 3 === 0 ? C.accent : C.control} />
      ))}
      <rect x="110" y="30" width="180" height="100" rx="14" fill={C.raised} stroke={C.line} />
      <rect x="126" y="48" width="100" height="8" rx="4" fill={C.ink} />
      <rect x="126" y="64" width="148" height="6" rx="3" fill={C.muted} opacity="0.6" />
      <rect x="126" y="76" width="120" height="6" rx="3" fill={C.muted} opacity="0.6" />
      <rect x="126" y="96" width="84" height="20" rx="10" fill={C.accent} />
      <text x="168" y="110" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill={C.onaccent} fontWeight="700">
        Suggested
      </text>
      <path d="M262 92l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill={C.accent} />
      <line x1="200" y1="130" x2="210" y2="150" stroke={C.accent} strokeDasharray="3 3" />
    </g>
  ),
  "from-flexbox-to-figma": (
    <g>
      <rect x="28" y="54" width="150" height="142" rx="12" fill={C.raised} />
      <g fontFamily="monospace" fontSize="11">
        <text x="44" y="82" fill={C.muted}>.row {"{"}</text>
        <text x="56" y="102" fill={C.accent}>display: flex;</text>
        <text x="56" y="120" fill={C.ink}>gap: 16px;</text>
        <text x="56" y="138" fill={C.ink}>padding: 24px;</text>
        <text x="56" y="156" fill={C.ink}>align-items: center;</text>
        <text x="44" y="176" fill={C.muted}>{"}"}</text>
      </g>
      <path d="M188 125h28M210 119l6 6-6 6" stroke={C.accent} strokeWidth="2" fill="none" strokeLinecap="round" />
      <rect x="226" y="70" width="150" height="110" rx="12" fill="none" stroke={C.accent} strokeWidth="1.5" strokeDasharray="5 4" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={242 + i * 42} y={98} width="30" height="54" rx="6" fill={i === 1 ? C.accent : C.line} />
      ))}
      <g stroke={C.muted} strokeWidth="1">
        <line x1="272" y1="160" x2="284" y2="160" />
        <line x1="314" y1="160" x2="326" y2="160" />
      </g>
      <text x="230" y="62" fontFamily="sans-serif" fontSize="10" fill={C.muted}>
        Auto layout
      </text>
    </g>
  ),
  "how-to-prioritize-like-a-pro": (
    <g>
      <line x1="200" y1="30" x2="200" y2="220" stroke={C.control} />
      <line x1="60" y1="125" x2="340" y2="125" stroke={C.control} />
      <rect x="204" y="34" width="132" height="87" rx="10" fill={C.accent} opacity="0.12" />
      <g fontFamily="monospace" fontSize="9" fill={C.muted}>
        <text x="64" y="44">BIG BETS</text>
        <text x="270" y="44" fill={C.accent}>QUICK WINS</text>
        <text x="64" y="214">MONEY PIT</text>
        <text x="280" y="214">FILL-INS</text>
        <text x="186" y="24" textAnchor="end">HIGH IMPACT</text>
        <text x="344" y="140" textAnchor="end">LOW EFFORT</text>
      </g>
      {[
        [250, 70, C.accent, 9], [300, 95, C.accent, 7], [120, 80, C.ink, 8], [150, 100, C.ink, 6],
        [270, 170, C.muted, 6], [310, 160, C.muted, 5], [110, 175, C.control, 6],
      ].map(([x, y, c, r], i) => (
        <circle key={i} cx={x as number} cy={y as number} r={r as number} fill={c as string} />
      ))}
    </g>
  ),
  "understanding-figma-constraints": (
    <g>
      <rect x="80" y="40" width="240" height="170" rx="6" fill="none" stroke={C.control} strokeWidth="1.5" />
      <rect x="150" y="90" width="100" height="70" rx="8" fill={C.raised} stroke={C.accent} strokeWidth="1.5" />
      <g stroke={C.accent} strokeWidth="1.5" strokeDasharray="4 3">
        <line x1="200" y1="40" x2="200" y2="90" />
        <line x1="80" y1="125" x2="150" y2="125" />
        <line x1="250" y1="125" x2="320" y2="125" />
      </g>
      <g fill={C.accent}>
        <rect x="196" y="36" width="8" height="8" />
        <rect x="76" y="121" width="8" height="8" />
        <rect x="316" y="121" width="8" height="8" />
      </g>
      <text x="84" y="32" fontFamily="sans-serif" fontSize="10" fill={C.muted}>
        Frame
      </text>
      <path d="M330 214l14 14M344 214v14h-14" stroke={C.muted} strokeWidth="1.5" fill="none" />
    </g>
  ),
  "twitter-dm-redesign": (
    <g>
      <rect x="70" y="50" width="170" height="44" rx="22" fill={C.raised} />
      <rect x="90" y="66" width="110" height="8" rx="4" fill={C.muted} />
      <rect x="160" y="108" width="170" height="44" rx="22" fill={C.accent} />
      <rect x="180" y="124" width="120" height="8" rx="4" fill={C.onaccent} opacity="0.7" />
      <rect x="70" y="166" width="130" height="44" rx="22" fill={C.raised} />
      <rect x="90" y="182" width="80" height="8" rx="4" fill={C.muted} />
      <circle cx="214" cy="170" r="9" fill={C.accent} />
      <text x="214" y="174" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill={C.onaccent}>
        1
      </text>
    </g>
  ),
  "users-should-have-a-say": (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="130" cy="160" r="48" stroke={C.ink} strokeWidth="3" />
      <circle cx="280" cy="160" r="48" stroke={C.ink} strokeWidth="3" />
      <path d="M130 160l50-70h70l30 70M180 90l30 70h70M210 160l40-70" stroke={C.accent} strokeWidth="4" />
      <path d="M170 78h24M240 78l10 12" stroke={C.ink} strokeWidth="4" />
      {[C.accent, C.ink, C.control].map((c, i) => (
        <circle key={i} cx={300 + i * 22} cy="40" r="8" fill={c} stroke={i === 0 ? C.ink : "none"} strokeWidth="2" />
      ))}
    </g>
  ),
};
