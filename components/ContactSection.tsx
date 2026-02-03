import { site } from "../data/portfolio";
import Section from "./Section";

export default function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Ready to build something sharp"
      description="Let’s connect for collaboration, consulting, or a full-time role."
    >
      <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl border border-white/10 bg-surface/70 p-6 shadow-soft backdrop-blur md:p-8">
          <h3 className="text-xl font-semibold text-primary">Let’s talk</h3>
          <p className="mt-3 text-sm text-muted">
            I’m available for select freelance projects and product-focused
            teams. Share a quick brief and I’ll respond within 48 hours.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a className="btn-primary" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="btn-ghost" href={site.cvUrl}>
              Download CV
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-surface/70 p-6 shadow-soft backdrop-blur md:p-8">
          <h3 className="text-xl font-semibold text-primary">Find me</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-primary">
            <a className="transition hover:text-accent" href={site.linkedin}>
              LinkedIn
            </a>
            <a className="transition hover:text-accent" href={site.github}>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
