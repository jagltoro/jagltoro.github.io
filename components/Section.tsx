import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="mb-8 flex flex-col gap-3">
        {eyebrow ? (
          <span className="text-xs uppercase tracking-[0.3em] text-muted">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="text-3xl font-semibold text-primary md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base text-muted md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
