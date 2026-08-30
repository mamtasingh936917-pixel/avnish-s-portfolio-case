import type { Section } from "@/lib/portfolio-data";

type Props = {
  section: Section;
  isOpening: boolean;
  onOpen: () => void;
  tilt: number;
};

export function EnvelopeCard({ section, isOpening, onOpen, tilt }: Props) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open the ${section.label} document`}
      data-envelope={section.id}
      style={{ rotate: `${tilt}deg` }}
      className="group relative block w-full text-left transition-transform duration-300 hover:-translate-y-2 focus-visible:-translate-y-2 focus-visible:outline-none"
    >
      {/* paper peeking out of the envelope */}
      <div className="absolute inset-x-5 -top-3 h-10 rounded-t-sm bg-paper shadow-paper transition-all duration-300 group-hover:-top-6 group-focus-visible:-top-6" />

      <div className="desk-frame relative overflow-hidden rounded-sm px-4 pb-4 pt-5 [perspective:800px]">
        {/* envelope flap */}
        <div
          className={`absolute inset-x-0 top-0 h-[54%] origin-top bg-kraft-flap/95 [clip-path:polygon(0_0,100%_0,50%_100%)] [transform-style:preserve-3d] transition-transform duration-500 ${
            isOpening ? "flap-opened" : "group-hover:[transform:rotateX(-24deg)]"
          }`}
          aria-hidden
        />

        <div className="relative flex min-h-[124px] flex-col justify-between">
          <div className="flex items-start justify-between gap-2">
            <span className="label-caps rounded-sm bg-desk/15 px-2 py-1 text-desk/80">{section.index}</span>
            <span className="grid size-7 place-items-center rounded-full bg-seal text-[0.6rem] font-bold text-paper shadow-sm">
              AS
            </span>
          </div>

          <div>
            <h3 className="font-display text-xl leading-tight text-desk sm:text-2xl">{section.label}</h3>
            <p className="hand-note text-base text-desk/70">{section.caption}</p>
          </div>

          <p className="label-caps mt-3 text-desk/60 transition group-hover:text-desk">
            Click to open
          </p>
        </div>
      </div>
    </button>
  );
}
