import { useEffect, useRef, type ReactNode } from "react";
import type { Section } from "@/lib/portfolio-data";

type Props = {
  section: Section;
  closing: boolean;
  children: ReactNode;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function DocumentSheet({ section, closing, children, onClose, onPrev, onNext }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.focus();
    ref.current?.scrollTo({ top: 0 });
  }, [section.id]);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-desk/70 px-3 py-6 backdrop-blur-sm sm:px-6 sm:py-10">
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={`${section.label} document`}
        tabIndex={-1}
        className={`relative w-full max-w-3xl outline-none ${closing ? "animate-sheet-in" : "animate-sheet-out"}`}
      >
        <div className="absolute -inset-2 rotate-[0.7deg] rounded-sm bg-paper-edge/60 shadow-paper-lift" aria-hidden />

        <article className="paper-sheet paper-grain relative rounded-sm px-5 py-8 shadow-paper-lift sm:px-12 sm:py-12">
          <div className="flex items-start justify-between gap-4 border-b border-ink/15 pb-4">
            <div>
              <p className="label-caps text-ink-soft">{section.index} · Portfolio 2026</p>
              <h2 className="mt-2 font-display text-3xl leading-none tracking-tight text-ink sm:text-4xl">
                {section.label}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="label-caps shrink-0 rounded-sm border border-ink/25 px-3 py-2 text-ink transition hover:bg-secondary"
            >
              Back to File
            </button>
          </div>

          <div className="mt-7">{children}</div>

          <div className="mt-10 flex items-center justify-between gap-3 border-t border-ink/15 pt-5 text-ink-soft">
            <button
              type="button"
              onClick={onPrev}
              className="label-caps transition hover:text-ink"
              aria-label="Previous document"
            >
              ← Previous
            </button>
            <p className="hand-note text-base">press Esc to close</p>
            <button
              type="button"
              onClick={onNext}
              className="label-caps transition hover:text-ink"
              aria-label="Next document"
            >
              Next →
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
