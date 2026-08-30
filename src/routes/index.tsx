import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { IntroductionPage } from "@/components/portfolio/IntroductionPage";
import { FileView } from "@/components/portfolio/FileView";
import { DocumentSheet } from "@/components/portfolio/DocumentSheet";
import { SectionContent } from "@/components/portfolio/SectionContent";
import { ContactDocument } from "@/components/portfolio/ContactDocument";
import { SECTIONS, type SectionId } from "@/lib/portfolio-data";

const TITLE = "Avnish Singh — B.Tech CSE (AI & ML) Portfolio File";
const DESCRIPTION =
  "An interactive portfolio file by Avnish Singh, B.Tech CSE student specializing in AI & ML at LPU. Open each envelope to explore education, skills, projects, achievements and contact.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  const [stage, setStage] = useState<"intro" | "file">("intro");
  const [openingId, setOpeningId] = useState<SectionId | null>(null);
  const [activeId, setActiveId] = useState<SectionId | null>(null);
  const [closing, setClosing] = useState(false);

  const openSection = useCallback((id: SectionId) => {
    setStage("file");
    setClosing(false);
    setOpeningId(id);
    window.setTimeout(() => {
      setActiveId(id);
      setOpeningId(null);
    }, 380);
  }, []);

  const closeSection = useCallback(() => {
    if (!activeId) return;
    setClosing(true);
    window.setTimeout(() => {
      setActiveId(null);
      setClosing(false);
    }, 400);
  }, [activeId]);

  const step = useCallback(
    (delta: number) => {
      if (!activeId) return;
      const current = SECTIONS.findIndex((s) => s.id === activeId);
      const next = SECTIONS[(current + delta + SECTIONS.length) % SECTIONS.length];
      if (next) setActiveId(next.id);
    },
    [activeId],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeSection();
      if (!activeId) return;
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeId, closeSection, step]);

  const activeSection = SECTIONS.find((s) => s.id === activeId) ?? null;

  return (
    <main className="min-h-screen">
      <h1 className="sr-only">Avnish Singh — B.Tech CSE (AI &amp; ML) portfolio</h1>

      {stage === "intro" ? (
        <IntroductionPage
          onExplore={() => setStage("file")}
          onConnect={() => openSection("contact")}
        />
      ) : (
        <FileView
          openingId={openingId}
          activeId={activeId}
          onOpen={openSection}
          onBackToIntro={() => {
            setActiveId(null);
            setStage("intro");
          }}
        />
      )}

      {activeSection && (
        <DocumentSheet
          section={activeSection}
          closing={closing}
          onClose={closeSection}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
        >
          {activeSection.id === "contact" ? (
            <ContactDocument />
          ) : (
            <SectionContent id={activeSection.id} />
          )}
        </DocumentSheet>
      )}
    </main>
  );
}
