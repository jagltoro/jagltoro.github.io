import { highlights, site } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="relative o  n pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="glow-orb glow-orb--one" />
        <div className="glow-orb glow-orb--two" />
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col gap-6">
          <p className="text-xs uppercase tracking-[0.35em] text-muted">
            {site.location}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold text-primary md:text-6xl">
            {site.role}
          </h1>
          <p className="max-w-2xl text-base text-muted md:text-lg">
            {site.summary}
          </p>
          <div className="flex flex-wrap gap-4">
            <a className="btn-primary" href={`mailto:${site.email}`}>
              Let’s Talk
            </a>
            <a className="btn-ghost" href="#projects">
              View Projects
            </a>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-surface/70 p-6 shadow-soft backdrop-blur"
            >
              <p className="text-3xl font-semibold text-primary">
                {item.label}
              </p>
              <p className="text-sm text-muted">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
