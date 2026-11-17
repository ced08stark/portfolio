"use client";

import { T, useLang } from "./lang";

export default function Nav() {
  const { lang, setLang } = useLang();
  return (
    <header className="nav">
      <div className="wrap">
        <a className="logo" href="#top" aria-label="Cédric Kaze Ngangue">
          <span className="logo-mark">CK</span>
          <span className="logo-name">Cédric Kaze Ngangue</span>
        </a>
        <div className="links">
          <a href="#projets"><T fr="Projets" en="Projects" /></a>
          <a href="#livraison"><T fr="Livraison" en="Delivery" /></a>
          <a href="#competences"><T fr="Compétences" en="Skills" /></a>
          <a href="#parcours"><T fr="Parcours" en="Background" /></a>
          <a href="#contact">Contact</a>
          <a className="cv-btn" href="#cv" data-cv-source="nav"><T fr="Mon CV" en="My résumé" /></a>
          <div className="lang" role="group" aria-label="Langue / Language">
            <button type="button" aria-pressed={lang === "fr"} onClick={() => setLang("fr")}>FR</button>
            <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
          </div>
        </div>
      </div>
    </header>
  );
}
