import { EnvelopeCard } from "./EnvelopeCard";
import { PROFILE, SECTIONS, type SectionId } from "@/lib/portfolio-data";

type Props = {
  openingId: SectionId | null;
  activeId: SectionId | null;
  onOpen: (id: SectionId) => void;
  onBackToIntro: () => void;
};

const TILTS = [-1.1, 0.8, -0.5, 1.2, -0.9, 0.6, -1.3, 1];

export function FileView({ openingId, activeId, onOpen, onBackToIntro }: Props) {
  return (
    <div className="mx-auto min-h-screen w-full max-w-6xl px-4 py-10 sm:px-8 sm:py-14">
      <header className="flex flex-wrap items-end justify-between gap-4 border-b border-paper/20 pb-5">
        <div>
          <p className="label-caps text-paper/60">Portfolio 2026 · Physical file</p>
          <h2 className="mt-2 font-display text-3xl tracking-wide text-paper sm:text-4xl">{PROFILE.name}</h2>
          <p className="text-sm text-paper/70">{PROFILE.subtitle}</p>
        </div>
        <button
          type="button"
          onClick={onBackToIntro}
          className="label-caps rounded-sm border border-paper/30 px-4 py-2 text-paper/80 transition hover:bg-paper/10"
        >
          ← Introduction page
        </button>
      </header>

      {/* Document-style navigation (index tabs) */}
      <nav aria-label="Portfolio sections" className="mt-6 flex flex-wrap gap-2">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => onOpen(section.id)}
            aria-current={activeId === section.id}
            className={`label-caps rounded-t-sm border-b-2 px-3 py-2 transition ${
              activeId === section.id
                ? "border-gold bg-paper/15 text-paper"
                : "border-transparent text-paper/55 hover:border-paper/40 hover:text-paper"
            }`}
          >
            {section.label.replace(" / CONNECT", "")}
          </button>
        ))}
      </nav>

      <p className="hand-note mt-6 text-xl text-paper/70">
        Pick an envelope — the document inside slides out.
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SECTIONS.map((section, i) => (
          <EnvelopeCard
            key={section.id}
            section={section}
            tilt={TILTS[i % TILTS.length] ?? 0}
            isOpening={openingId === section.id}
            onOpen={() => onOpen(section.id)}
          />
        ))}
      </div>

      <p className="mt-12 text-center text-xs text-paper/45">
        Esc closes a document · ← / → move between documents
      </p>
    </div>
  );
}
