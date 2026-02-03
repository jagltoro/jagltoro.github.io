import { site } from "../data/portfolio";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-surface/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          <span className="h-2 w-2 rounded-full bg-accent" />
          {site.name}
        </div>
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="transition hover:text-primary"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="rounded-full border border-primary/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary transition hover:border-primary hover:bg-primary hover:text-white"
          href={site.cvUrl}
        >
          Download CV
        </a>
      </div>
    </header>
  );
}
