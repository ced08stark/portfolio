"use client";

import { useEffect } from "react";

/* Doit rester synchronisé avec la liste de sélecteurs de globals.css (section « Apparition au défilement »). */
const SELECTOR =
  ".hero-grid > *, .fig, .sec > h2, .sec > .intro, .filters, .big, .tile, .stage, .backup, .term, .marquee, .skill, .step, .contact, body > footer";

/* Éléments présentés en grille : ils apparaissent l'un après l'autre. */
const STAGGERED = ".hero-grid > *, .fig, .tile, .stage, .skill";

export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("reveal-on")) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));

    // Décalage progressif entre éléments frères d'une même grille.
    els.forEach((el) => {
      if (!el.matches(STAGGERED) || !el.parentElement) return;
      const siblings = Array.from(el.parentElement.children).filter((c) => c.matches(STAGGERED));
      const i = siblings.indexOf(el);
      if (i > 0) el.style.transitionDelay = `${Math.min(i, 5) * 90}ms`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.setAttribute("data-shown", "");
          io.unobserve(el);
          // Retire le délai une fois affiché pour que les survols restent réactifs.
          window.setTimeout(() => (el.style.transitionDelay = ""), 1400);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));

    // Filet de sécurité : tout afficher si l'utilisateur saute directement en bas de page (ancre, impression…).
    const showAll = () => els.forEach((el) => el.setAttribute("data-shown", ""));
    window.addEventListener("beforeprint", showAll);

    return () => {
      io.disconnect();
      window.removeEventListener("beforeprint", showAll);
    };
  }, []);

  return null;
}
