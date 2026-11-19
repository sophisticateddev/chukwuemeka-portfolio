import { contrast, useResolvedTokens } from "./tokens";

/** Pairings the site actually uses. `min` is the WCAG 2.1 AA threshold for that use. */
const PAIRINGS = [
  { fg: "ink", bg: "canvas", use: "Body text on the page", min: 4.5 },
  { fg: "ink", bg: "surface", use: "Text on cards", min: 4.5 },
  { fg: "muted", bg: "canvas", use: "Secondary text on the page", min: 4.5 },
  { fg: "muted", bg: "surface", use: "Secondary text on cards", min: 4.5 },
  { fg: "muted", bg: "raised", use: "Tag labels", min: 4.5 },
  { fg: "accent", bg: "canvas", use: "Accent text and links", min: 4.5 },
  { fg: "accent", bg: "surface", use: "Accent text on cards", min: 4.5 },
  { fg: "onaccent", bg: "accent", use: "Primary button text", min: 4.5 },
  { fg: "control", bg: "canvas", use: "Control borders (non-text)", min: 3 },
] as const;

/** Contrast ratio of every pairing in both themes, computed from the live stylesheet. */
export function ContrastTable() {
  const tokens = useResolvedTokens();
  if (!tokens) return null;
  return (
    <table className="w-full border-collapse text-left text-sm">
      <thead>
        <tr className="border-b border-line">
          <th className="py-2 pr-4 font-semibold">Pairing</th>
          <th className="py-2 pr-4 font-semibold">Used for</th>
          <th className="py-2 pr-4 font-semibold">Needs</th>
          <th className="py-2 pr-4 font-semibold">Light</th>
          <th className="py-2 font-semibold">Dark</th>
        </tr>
      </thead>
      <tbody>
        {PAIRINGS.map(({ fg, bg, use, min }) => (
          <tr key={fg + bg} className="border-b border-line">
            <td className="py-3 pr-4 font-mono">{fg} on {bg}</td>
            <td className="py-3 pr-4 text-muted">{use}</td>
            <td className="py-3 pr-4">{min}:1</td>
            {(["light", "dark"] as const).map((theme) => {
              const ratio = contrast(tokens[theme][fg], tokens[theme][bg]);
              return (
                <td key={theme} className="py-3 pr-4 font-mono">
                  {ratio.toFixed(1)}:1 <span className="font-sans">{ratio >= min ? "Pass" : "Fail"}</span>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
