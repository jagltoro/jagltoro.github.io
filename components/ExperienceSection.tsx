import { experience } from "../data/portfolio";
import Section from "./Section";

export default function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Experience"
    >
      <div className="grid gap-6">
        {experience.map((item) => (
          <article
            key={`${item.company}-${item.role}`}
            className="rounded-3xl border border-white/10 bg-surface/70 p-6 shadow-soft backdrop-blur md:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-primary">
                  {item.role}
                </h3>
                <p className="text-sm text-muted">{item.company}</p>
              </div>
              <div className="text-right text-xs uppercase tracking-[0.3em] text-muted">
                <p>{item.period}</p>
                <p>{item.location}</p>
              </div>
            </div>
            <p className="mt-4 text-base text-muted">{item.summary}</p>
            <ul className="mt-5 grid gap-2 text-sm text-primary/80">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
