import { TOKENS, hex, useResolvedTokens } from "./tokens";

/** One row per token: its name, its job, and its real light and dark values. */
export function Swatches() {
  const tokens = useResolvedTokens();
  if (!tokens) return null;
  return (
    <table className="w-full border-collapse text-left text-sm">
      <thead>
        <tr className="border-b border-line">
          <th className="py-2 pr-4 font-semibold">Token</th>
          <th className="py-2 pr-4 font-semibold">Role</th>
          <th className="py-2 pr-4 font-semibold">Light</th>
          <th className="py-2 font-semibold">Dark</th>
        </tr>
      </thead>
      <tbody>
        {TOKENS.map(({ name, role }) => (
          <tr key={name} className="border-b border-line align-middle">
            <td className="py-3 pr-4 font-mono">{name}</td>
            <td className="py-3 pr-4 text-muted">{role}</td>
            {(["light", "dark"] as const).map((theme) => (
              <td key={theme} className="py-3 pr-4">
                <span className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="inline-block h-6 w-10 rounded border border-control"
                    style={{ background: `rgb(${tokens[theme][name].join(" ")})` }}
                  />
                  <span className="font-mono text-xs">{hex(tokens[theme][name])}</span>
                </span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
