export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-2 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Chukwuemeka Iheonye</p>
        <p>Designed in Figma. Built with Claude Code, Next.js and Tailwind.</p>
      </div>
    </footer>
  );
}
