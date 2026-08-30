import {
  ABOUT_HIGHLIGHTS,
  ABOUT_PARAGRAPHS,
  ACHIEVEMENTS,
  CERTIFICATIONS,
  EDUCATION,
  PROFILE,
  PROJECTS,
  SKILL_GROUPS,
  type SectionId,
} from "@/lib/portfolio-data";

function Stamp({ children }: { children: string }) {
  return (
    <span className="label-caps inline-block -rotate-2 border-2 border-seal/60 px-2 py-1 text-seal/80">
      {children}
    </span>
  );
}

function Introduction() {
  return (
    <div className="space-y-6">
      <p className="font-display text-2xl italic leading-snug text-ink">{PROFILE.subtitle}</p>
      <p className="leading-7 text-ink/90">
        Hi, I&apos;m Avnish Singh, a B.Tech Computer Science and Engineering student specializing in
        Artificial Intelligence and Machine Learning. I am passionate about programming, web development,
        artificial intelligence, machine learning, and building practical technology solutions. I enjoy
        learning new technologies, solving problems, participating in hackathons, and developing projects that
        turn ideas into useful applications.
      </p>
      <p className="hand-note text-xl">
        Currently exploring the world of AI, ML, software development and modern web technologies.
      </p>
      <dl className="grid gap-4 border-t border-ink/15 pt-5 sm:grid-cols-2">
        {[
          ["Programme", "B.Tech CSE — AI & ML"],
          ["Institution", PROFILE.university],
          ["CGPA", PROFILE.cgpa],
          ["Interests", "AI/ML · Web Development · Software Development"],
        ].map(([label, value]) => (
          <div key={label}>
            <dt className="label-caps text-ink-soft">{label}</dt>
            <dd className="mt-1 text-sm text-ink">{value}</dd>
          </div>
        ))}
      </dl>
      <Stamp>Filed 2026</Stamp>
    </div>
  );
}

function About() {
  return (
    <div className="space-y-5">
      {ABOUT_PARAGRAPHS.map((paragraph, i) => (
        <p key={i} className="leading-7 text-ink/90 first:first-letter:float-left first:first-letter:mr-2 first:first-letter:font-display first:first-letter:text-5xl first:first-letter:leading-[0.8] first:first-letter:text-seal">
          {paragraph}
        </p>
      ))}
      <ul className="ruled-lines space-y-[0.35rem] border-y border-ink/15 py-3 text-sm text-ink/85">
        {ABOUT_HIGHLIGHTS.map((item) => (
          <li key={item} className="flex h-7 items-center gap-2">
            <span className="size-1.5 shrink-0 rounded-full bg-seal/70" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
      <p className="hand-note text-xl">— always building something small.</p>
    </div>
  );
}

function Education() {
  return (
    <div className="space-y-8">
      {EDUCATION.map((entry) => (
        <div key={entry.title} className="grid gap-3 sm:grid-cols-[7rem_1fr]">
          <p className="label-caps pt-1 text-ink-soft">{entry.period}</p>
          <div>
            <h3 className="font-display text-2xl leading-tight text-ink">{entry.title}</h3>
            <p className="mt-1 text-sm italic text-ink-soft">{entry.specialisation}</p>
            <p className="mt-2 text-sm text-ink">{entry.institution}</p>
            <p className="mt-1 inline-block border border-dashed border-ink/30 px-2 py-1 font-mono text-xs text-ink">
              {entry.detail}
            </p>
            <ul className="mt-3 space-y-1 text-sm text-ink/85">
              {entry.notes.map((note) => (
                <li key={note}>· {note}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

function Skills() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {SKILL_GROUPS.map((group) => (
        <section key={group.heading} className="border border-ink/15 p-4">
          <h3 className="label-caps text-seal/80">{group.heading}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li key={item} className="rounded-sm bg-secondary px-2 py-1 text-xs text-ink">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function LinkButton({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="label-caps inline-flex items-center gap-2 border border-ink/40 bg-ink px-3 py-2 text-paper transition-colors hover:bg-seal"
    >
      {children}
      <span aria-hidden>↗</span>
    </a>
  );
}

function Projects() {
  return (
    <div className="space-y-7">
      {PROJECTS.map((project, i) => (
        <article key={project.title} className="border-l-2 border-seal/40 pl-4">
          <p className="label-caps text-ink-soft">Project {String(i + 1).padStart(2, "0")}</p>
          <h3 className="mt-1 font-display text-2xl leading-tight text-ink">{project.title}</h3>
          <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft">{project.stack}</p>
          <p className="mt-3 text-sm leading-6 text-ink/90">{project.summary}</p>
          <ul className="mt-3 space-y-1 text-sm text-ink/85">
            {project.points.map((point) => (
              <li key={point}>· {point}</li>
            ))}
          </ul>
          {project.link ? (
            <div className="mt-4">
              <LinkButton href={project.link}>{project.linkLabel}</LinkButton>
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}

function Achievements() {
  return (
    <ol className="space-y-5">
      {ACHIEVEMENTS.map((item, i) => (
        <li key={item.title} className="flex gap-4">
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-seal/50 font-display text-lg text-seal">
            {i + 1}
          </span>
          <div>
            <h3 className="font-display text-xl leading-tight text-ink">{item.title}</h3>
            <p className="mt-1 text-sm leading-6 text-ink/85">{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function Certifications() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {CERTIFICATIONS.map((cert) => (
        <article key={cert.title} className="relative flex flex-col border border-ink/20 p-4">
          <span className="absolute right-3 top-3 size-6 rounded-full border border-gold/70 bg-gold/20" aria-hidden />
          <h3 className="pr-8 font-display text-lg leading-tight text-ink">{cert.title}</h3>
          <p className="label-caps mt-2 text-ink-soft">
            {cert.issuer} · {cert.date}
          </p>
          <p className="mt-2 text-sm leading-6 text-ink/85">{cert.detail}</p>
          <div className="mt-4 pt-1">
            {cert.url ? (
              <LinkButton href={cert.url}>View Certificate</LinkButton>
            ) : (
              <span className="label-caps inline-block border border-dashed border-ink/30 px-3 py-2 text-ink-soft">
                Available on request
              </span>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export function SectionContent({ id }: { id: SectionId }) {
  switch (id) {
    case "introduction":
      return <Introduction />;
    case "about":
      return <About />;
    case "education":
      return <Education />;
    case "skills":
      return <Skills />;
    case "projects":
      return <Projects />;
    case "achievements":
      return <Achievements />;
    case "certifications":
      return <Certifications />;
    default:
      return null;
  }
}
