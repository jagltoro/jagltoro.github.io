import { projects } from "../data/portfolio";
import Section from "./Section";

export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Projects"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-surface/70 p-6 shadow-soft backdrop-blur md:p-7"
          >
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-xl font-semibold text-primary">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm text-muted">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-muted">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold justify-between align-center">
              {project.link ? (
                <a className="text-primary transition hover:text-accent" href={project.link}>
                  Live Site
                </a>
              ) : null}
              {project.repo ? (
                <a className="text-primary transition hover:text-accent" href={project.repo}>
                  Repository
                </a>
              ) : null}
            {project.images ? (
                <div className="lg:-mt-8 lg:-mb-4 flex w-full flex-wrap justify-end gap-3">
                  {project.images.map((image) => (
                    <div
                      key={image.src}
                      className="h-32 w-32"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
