"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "./analytics";
import { formatNumber, useReducedMotion } from "./hooks";
import { T, useLang } from "./lang";

/* ---------- Mot qui change dans l'en-tête ---------- */
const WORDS = {
  fr: ["des API temps réel", "des agents IA", "des apps mobiles", "des paiements mobile money", "des pipelines CI/CD"],
  en: ["real-time APIs", "AI agents", "mobile apps", "mobile money payments", "CI/CD pipelines"],
};

export function TypingWord() {
  const { lang } = useLang();
  const reduce = useReducedMotion();
  const [text, setTextState] = useState(WORDS.fr[0]);
  const textRef = useRef(text);
  const index = useRef(0);
  const langRef = useRef(lang);
  const setText = (s: string) => {
    textRef.current = s;
    setTextState(s);
  };

  useEffect(() => {
    langRef.current = lang;
    setText(WORDS[lang][index.current]);
  }, [lang]);

  useEffect(() => {
    if (reduce) return;
    let del: ReturnType<typeof setInterval> | undefined;
    let add: ReturnType<typeof setInterval> | undefined;
    const cycle = setInterval(() => {
      index.current = (index.current + 1) % WORDS.fr.length;
      const target = WORDS[langRef.current][index.current];
      let cur = textRef.current;
      del = setInterval(() => {
        if (cur.length) {
          cur = cur.slice(0, -1);
          setText(cur);
        } else {
          clearInterval(del);
          let i = 0;
          add = setInterval(() => {
            i++;
            setText(target.slice(0, i));
            if (i >= target.length) clearInterval(add);
          }, 45);
        }
      }, 22);
    }, 3200);
    return () => {
      clearInterval(cycle);
      clearInterval(del);
      clearInterval(add);
    };
  }, [reduce]);

  return (
    <span className="word" id="word">
      {text}
    </span>
  );
}

/* ---------- Compteur animé ---------- */
export function CountUp({ to }: { to: number }) {
  const { lang } = useLang();
  const reduce = useReducedMotion();
  const [value, setValue] = useState(to);
  const played = useRef(false);

  useEffect(() => {
    if (reduce || played.current) return;
    played.current = true;
    let t0: number | null = null;
    let raf = 0;
    const step = (t: number) => {
      if (t0 === null) t0 = t;
      const p = Math.min(1, (t - t0) / 1400);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, reduce]);

  return <span className="count">{formatNumber(value, lang)}</span>;
}

/* ---------- Saisie dans le téléphone (Objectif Canada) ---------- */
const ESSAY = "Salut Marc ! Je t'invite samedi soir pour fêter mon anniversaire au restaurant. Dis-moi vite si tu peux venir.";

export function PhoneTyping() {
  const { lang } = useLang();
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) {
      setI(ESSAY.length);
      return;
    }
    const id = setInterval(() => setI((v) => (v >= ESSAY.length + 30 ? 0 : v + 1)), 90);
    return () => clearInterval(id);
  }, [reduce]);

  const shown = ESSAY.slice(0, Math.min(i, ESSAY.length));
  const n = shown.trim() ? shown.trim().split(/\s+/).length : 0;
  return (
    <>
      <div className="typing">{shown}</div>
      <div className="wc">
        {n}
        {lang === "en" ? " words" : " mots"} / 120
      </div>
    </>
  );
}

/* ---------- Bascule entre fournisseurs IA ---------- */
export function AiChain() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setActive((a) => (a + 1) % 3), 2600);
    return () => clearInterval(id);
  }, [reduce]);
  const models = ["OpenAI", "Gemini", "DeepSeek"];
  return (
    <div className="chain">
      {models.map((m, k) => (
        <span key={m} style={{ display: "contents" }}>
          {k > 0 && <span className="arr">›</span>}
          <span className={"m" + (k === active ? " on" : "")}>{m}</span>
        </span>
      ))}
      <span className="human fr">+ relecture humaine</span>
      <span className="human en">+ human review</span>
    </div>
  );
}

/* ---------- Joueurs en ligne (Dice Game) ---------- */
export function OnlineCount() {
  const reduce = useReducedMotion();
  const [n, setN] = useState(128);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setN((b) => Math.max(96, Math.min(164, b + Math.round((Math.random() - 0.45) * 6)))), 1500);
    return () => clearInterval(id);
  }, [reduce]);
  return <b>{n}</b>;
}

/* ---------- Journal de déploiement ---------- */
const LOG: [string, string][] = [
  ["d", "$ git push origin main"],
  ["", "CI  ▸ installation des dépendances"],
  ["ok", "CI  ✓ tests automatisés passés"],
  ["", "CD  ▸ déploiement sur l’environnement de test"],
  ["ok", "QA  ✓ validation fonctionnelle"],
  ["y", "CD  ▸ docker compose up -d  (production, via Coolify)"],
  ["ok", "OK  ✓ api · healthy    ✓ web · healthy    ✓ secours · prêt"],
];

export function DeployLog() {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(LOG.length);
  useEffect(() => {
    if (reduce) return;
    let id: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      setCount(0);
      id = setInterval(() => setCount((c) => (c >= LOG.length ? 1 : c + 1)), 1100);
    }, 4000);
    return () => {
      clearTimeout(start);
      clearInterval(id);
    };
  }, [reduce]);
  return (
    <div className="term" aria-label="Exemple de journal de déploiement">
      {LOG.slice(0, count).map(([cls, line]) => (
        <div key={line} className={cls}>
          {line}
        </div>
      ))}
    </div>
  );
}

/* ---------- Copier le courriel ---------- */
export function CopyEmail({ email }: { email: string }) {
  const { lang } = useLang();
  const [state, setState] = useState<"idle" | "ok" | "fail">("idle");
  useEffect(() => {
    if (state === "idle") return;
    const id = setTimeout(() => setState("idle"), 1800);
    return () => clearTimeout(id);
  }, [state]);
  const copy = () => {
    track("email-copy");
    try {
      navigator.clipboard.writeText(email).then(
        () => setState("ok"),
        () => setState("fail"),
      );
    } catch {
      setState("fail");
    }
  };
  return (
    <button className="copy" type="button" onClick={copy}>
      {state === "idle" ? (
        <T fr="Copier" en="Copy" />
      ) : state === "ok" ? (
        lang === "en" ? "Copied" : "Copié"
      ) : lang === "en" ? (
        "Select it"
      ) : (
        "Sélectionnez"
      )}
    </button>
  );
}

/* ---------- Pause des scènes animées hors écran ---------- */
export function AnimPause() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("paused", !e.isIntersecting)),
      { rootMargin: "80px" },
    );
    document.querySelectorAll(".anim").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
