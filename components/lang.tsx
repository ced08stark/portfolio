"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en";

const STORAGE_KEY = "ck-lang";

type LangContextValue = { lang: Lang; setLang: (l: Lang) => void };

const LangContext = createContext<LangContextValue>({ lang: "fr", setLang: () => {} });

function applyLang(l: Lang) {
  const root = document.documentElement;
  root.classList.toggle("en-on", l === "en");
  root.classList.toggle("fr-on", l !== "en");
  root.lang = l;
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    let saved: Lang = "fr";
    try {
      if (localStorage.getItem(STORAGE_KEY) === "en") saved = "en";
    } catch {}
    applyLang(saved);
    setLangState(saved);
  }, []);

  const setLang = useCallback((l: Lang) => {
    applyLang(l);
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
  }, []);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

/** Texte bilingue : les deux langues sont rendues, le CSS masque celle qui n'est pas active. */
export function T({ fr, en }: { fr: ReactNode; en: ReactNode }) {
  return (
    <>
      <span className="fr">{fr}</span>
      <span className="en">{en}</span>
    </>
  );
}

/** Script exécuté avant l'hydratation pour éviter un flash de la mauvaise langue. */
export const langBootScript = `try{if(localStorage.getItem('${STORAGE_KEY}')==='en'){var r=document.documentElement;r.classList.remove('fr-on');r.classList.add('en-on');r.lang='en';}}catch(e){}`;
