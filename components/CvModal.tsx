"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import CvContent from "./CvContent";
import { T } from "./lang";

/**
 * Fenêtre du CV. Elle s'ouvre avec n'importe quel lien vers « #cv »
 * (barre de navigation, en-tête, contact) ou en arrivant sur l'URL …/#cv.
 */
export default function CvModal() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setOpen(false);
    if (location.hash === "#cv") {
      try {
        history.replaceState(null, "", location.pathname + location.search);
      } catch {}
    }
    lastFocus.current?.focus();
  }, []);

  useEffect(() => {
    const sync = () => {
      if (location.hash === "#cv") {
        lastFocus.current = document.activeElement as HTMLElement | null;
        setOpen(true);
      } else setOpen(false);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    overlayRef.current?.scrollTo(0, 0);
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <div
      ref={overlayRef}
      className="cv-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-label"
      hidden={!open}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="cv-panel">
        <div className="cv-bar">
          <span className="t" id="cv-label">
            <T fr="CV de Cédric Kaze Ngangue" en="Cédric Kaze Ngangue's résumé" />
          </span>
          <a className="btn main fr" href="/cv/CV_Cedric_Kaze_Ngangue_FR.pdf" target="_blank" rel="noopener" download>
            Télécharger le PDF
          </a>
          <a className="btn main en" href="/cv/CV_Cedric_Kaze_Ngangue_EN.pdf" target="_blank" rel="noopener" download>
            Download PDF
          </a>
          <button ref={closeRef} className="btn" type="button" onClick={close}>
            <T fr="Fermer" en="Close" />
          </button>
        </div>
        <div className="cv-paper">
          <CvContent />
        </div>
      </div>
    </div>
  );
}
