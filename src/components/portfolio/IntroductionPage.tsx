import emblem from "@/assets/tech-emblem.png";
import { PROFILE } from "@/lib/portfolio-data";

type Props = {
  onExplore: () => void;
  onConnect: () => void;
};

const QUICK_INFO = [
  "B.Tech CSE — AI & ML",
  "Lovely Professional University",
  "CGPA: 7.60",
  "Interested in AI/ML, Web Development and Software Development",
];

export function IntroductionPage({ onExplore, onConnect }: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10 sm:px-8 sm:py-16">
      {/* Portfolio cover / folder behind the sheet */}
      <div className="relative w-full max-w-4xl">
        <div className="desk-frame absolute -inset-3 rotate-[-1.2deg] rounded-sm sm:-inset-5" aria-hidden />
        <div className="absolute -inset-1 rotate-[0.8deg] rounded-sm bg-paper-edge/70 shadow-paper" aria-hidden />

        <article className="paper-sheet paper-grain animate-sheet-out relative rounded-sm px-6 py-10 sm:px-14 sm:py-14">
          {/* punched holes + tape */}
          <div className="absolute left-3 top-1/2 hidden -translate-y-1/2 flex-col gap-16 sm:flex" aria-hidden>
            <span className="block size-3 rounded-full bg-desk/25 shadow-[inset_0_1px_2px_oklch(0_0_0/0.4)]" />
            <span className="block size-3 rounded-full bg-desk/25 shadow-[inset_0_1px_2px_oklch(0_0_0/0.4)]" />
          </div>
          <div
            className="absolute -right-4 -top-3 h-8 w-24 rotate-6 bg-gold/25 shadow-sm backdrop-blur-[1px]"
            aria-hidden
          />

          <header className="border-b border-ink/15 pb-6">
            <div className="flex items-start justify-between gap-4">
              <p className="label-caps text-ink-soft">Portfolio 2026</p>
              <p className="label-caps text-ink-soft">Document 01 / 08</p>
            </div>

            <h1 className="animate-ink-in mt-6 font-display text-4xl leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl">
              {PROFILE.name}
            </h1>
            <p className="mt-4 font-display text-lg italic text-ink-soft sm:text-xl">{PROFILE.subtitle}</p>
          </header>

          <div className="mt-8 grid gap-8 md:grid-cols-[1.6fr_1fr]">
            <div className="space-y-5">
              <p className="text-[0.95rem] leading-7 text-ink/90">
                Hi, I&apos;m Avnish Singh, a B.Tech Computer Science and Engineering student specializing in
                Artificial Intelligence and Machine Learning. I am passionate about programming, web
                development, artificial intelligence, machine learning, and building practical technology
                solutions. I enjoy learning new technologies, solving problems, participating in hackathons,
                and developing projects that turn ideas into useful applications.
              </p>

              <p className="hand-note text-xl leading-snug">
                Currently exploring the world of AI, ML, software development and modern web technologies.
              </p>

              <div className="border-l-2 border-seal/50 pl-4">
                <p className="label-caps mb-3 text-ink-soft">Quick information</p>
                <ul className="space-y-2 text-sm text-ink/85">
                  {QUICK_INFO.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-seal/70" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="flex flex-col items-center gap-4">
              <figure className="relative w-full max-w-[220px]">
                <div className="absolute inset-0 -rotate-2 rounded-sm bg-secondary shadow-paper" aria-hidden />
                <img
                  src={emblem}
                  alt="Ink illustration of a head profile merging into a neural network, representing AI and machine learning"
                  className="relative w-full rotate-1 p-3 mix-blend-multiply"
                  loading="eager"
                />
                <figcaption className="hand-note relative mt-1 text-center text-base">
                  fig. 1 — AI &amp; ML
                </figcaption>
              </figure>

              <div className="w-full border border-dashed border-ink/25 p-3 text-center">
                <p className="label-caps text-ink-soft">Filed under</p>
                <p className="mt-1 font-display text-lg text-ink">Computer Science</p>
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-soft">
                  AI / ML · Web · Software
                </p>
              </div>
            </aside>
          </div>

          <footer className="mt-10 flex flex-col gap-3 border-t border-ink/15 pt-6 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={onExplore}
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-6 py-3 text-sm font-medium tracking-wide text-paper transition hover:bg-ink/90"
            >
              Explore My Portfolio
              <span aria-hidden className="transition group-hover:translate-x-1">
                →
              </span>
            </button>
            <button
              type="button"
              onClick={onConnect}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-ink/35 px-6 py-3 text-sm font-medium tracking-wide text-ink transition hover:bg-secondary"
            >
              Connect With Me
            </button>
            <p className="hand-note ml-auto text-lg">— open the file →</p>
          </footer>
        </article>
      </div>
    </div>
  );
}
