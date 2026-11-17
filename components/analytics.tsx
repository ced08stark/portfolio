"use client";

import Script from "next/script";
import { useEffect } from "react";

/*
 * Statistiques de visite avec Umami (https://umami.is) : anonymes, sans cookies.
 * Activées seulement si NEXT_PUBLIC_UMAMI_WEBSITE_ID est défini (voir .env.example).
 *
 * Événements envoyés :
 *   cv-open        CV ouvert (source : lien cliqué ou arrivée directe sur /#cv)
 *   cv-download    PDF du CV téléchargé (lang)
 *   section-view   section affichée à l'écran (section)
 *   project-link   lien vers un projet (project)
 *   contact        clic sur un moyen de contact (channel)
 *   email-copy     courriel copié
 *   lang-switch    changement de langue (lang)
 *   ref-visit      visite arrivée par un lien suivi ?ref=… (ref)
 */

const WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
const SCRIPT_URL = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL || "https://cloud.umami.is/script.js";
const DOMAINS = process.env.NEXT_PUBLIC_UMAMI_DOMAINS; // ex. "cedric-kaze.vercel.app" pour ignorer localhost
const REF_KEY = "ck-ref";

type EventData = Record<string, string | number>;
type Umami = { track: (name: string, data?: EventData) => void; identify: (data: EventData) => void };
declare global {
  interface Window {
    umami?: Umami;
  }
}

/** Référence de la campagne (?ref=entreprise), conservée pour toute la visite. */
function currentRef(): string | undefined {
  const fromUrl = new URLSearchParams(location.search).get("ref");
  if (fromUrl) return fromUrl.trim().toLowerCase().slice(0, 60);
  try {
    return sessionStorage.getItem(REF_KEY) || undefined;
  } catch {
    return undefined;
  }
}

const queue: [string, EventData | undefined][] = [];

function flush() {
  if (!window.umami) return;
  while (queue.length) {
    const [name, data] = queue.shift()!;
    window.umami.track(name, data);
  }
}

/** Envoie un événement ; mis en attente si le script Umami n'est pas encore chargé. */
export function track(name: string, data?: EventData) {
  if (!WEBSITE_ID || typeof window === "undefined") return;
  const ref = currentRef();
  queue.push([name, ref ? { ...data, ref } : data]);
  flush();
}

export default function Analytics() {
  useEffect(() => {
    if (!WEBSITE_ID) return;

    // 1. Lien suivi : …/?ref=desjardins
    const ref = new URLSearchParams(location.search).get("ref");
    if (ref) {
      const clean = ref.trim().toLowerCase().slice(0, 60);
      try {
        sessionStorage.setItem(REF_KEY, clean);
      } catch {}
      track("ref-visit", { ref: clean });
    }

    // 2. Sections réellement regardées (une fois chacune par visite)
    const seen = new Set<string>();
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          const id = (e.target as HTMLElement).id;
          if (e.isIntersecting && id && !seen.has(id)) {
            seen.add(id);
            track("section-view", { section: id });
          }
        }),
      { threshold: 0.35 },
    );
    document.querySelectorAll("main section[id]").forEach((s) => io.observe(s));

    // 3. Clics sur les liens marqués data-track="nom" data-track-<clé>="valeur"
    const onClick = (ev: MouseEvent) => {
      const el = (ev.target as HTMLElement).closest<HTMLElement>("[data-track]");
      if (!el) return;
      const data: EventData = {};
      for (const [k, v] of Object.entries(el.dataset)) {
        if (k.startsWith("track") && k !== "track" && v) data[k.slice(5).toLowerCase()] = v;
      }
      track(el.dataset.track!, data);
    };
    document.addEventListener("click", onClick, true);

    return () => {
      io.disconnect();
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  if (!WEBSITE_ID) return null;
  return (
    <Script
      src={SCRIPT_URL}
      data-website-id={WEBSITE_ID}
      {...(DOMAINS ? { "data-domains": DOMAINS } : {})}
      strategy="afterInteractive"
      onLoad={() => {
        const ref = currentRef();
        if (ref) window.umami?.identify({ ref });
        flush();
      }}
    />
  );
}
