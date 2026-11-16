"use client";

import { useEffect, useState } from "react";

export function useReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduce(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduce;
}

export function formatNumber(n: number, lang: "fr" | "en") {
  return lang === "en" ? n.toLocaleString("en-US") : n.toLocaleString("fr-FR").replace(/[  ]/g, " ");
}
