"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./hooks";
import { T } from "./lang";

const HUBS = [
  { x: 0.22, y: 0.32, l: "Objectif Canada", c: "#ffcc1f" },
  { x: 0.74, y: 0.28, l: "Dice Game", c: "#8fb7ff" },
  { x: 0.28, y: 0.76, l: "Mobile money", c: "#52d6a0" },
  { x: 0.76, y: 0.74, l: "IA", c: "#ff7a59" },
];

const EVENTS: [string, string, string][] = [
  ["#52d6a0", "Paiement mobile money accepté", "Mobile money payment accepted"],
  ["#ff7a59", "Correction IA livrée, en attente de relecture", "AI grading delivered, awaiting review"],
  ["#8fb7ff", "Un joueur rejoint une salle de Dice Game", "A player joined a Dice Game room"],
  ["#ffcc1f", "Nouvelle inscription sur Objectif Canada", "New sign-up on Objectif Canada"],
  ["#52d6a0", "Webhook reçu, abonnement activé une seule fois", "Webhook received, subscription activated once"],
  ["#8fb7ff", "Un joueur lance les dés", "A player rolls the dice"],
  ["#ffcc1f", "Série téléchargée pour le mode hors ligne", "Series downloaded for offline mode"],
  ["#ff7a59", "Transcription orale terminée", "Speech transcription finished"],
];

type FeedRow = { id: number; ev: [string, string, string]; time: string };

export default function LiveBoard() {
  const boardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();
  const [feed, setFeed] = useState<FeedRow[]>([]);

  /* Réseau animé */
  useEffect(() => {
    const cv = canvasRef.current!;
    const ctx = cv.getContext("2d")!;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const font = getComputedStyle(document.body).fontFamily;
    let W = 0;
    let H = 0;
    const size = () => {
      W = cv.clientWidth;
      H = cv.clientHeight;
      cv.width = W * dpr;
      cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    size();
    window.addEventListener("resize", size);

    const users = Array.from({ length: 38 }, (_, i) => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0006,
      h: i % 4,
    }));
    type Packet = { u: (typeof users)[number]; h: (typeof HUBS)[number]; t: number; back: boolean };
    let packets: Packet[] = [];
    let running = true;
    let lastSpawn = 0;
    let raf = 0;

    const draw = (ts: number) => {
      ctx.clearRect(0, 0, W, H);
      for (const u of users) {
        if (!reduce) {
          u.x += u.vx;
          u.y += u.vy;
          if (u.x < 0.03 || u.x > 0.97) u.vx *= -1;
          if (u.y < 0.05 || u.y > 0.95) u.vy *= -1;
        }
        const hb = HUBS[u.h];
        ctx.strokeStyle = "rgba(159,176,204,0.10)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(u.x * W, u.y * H);
        ctx.lineTo(hb.x * W, hb.y * H);
        ctx.stroke();
        ctx.fillStyle = "rgba(242,245,250,0.55)";
        ctx.beginPath();
        ctx.arc(u.x * W, u.y * H, 2.2, 0, 6.3);
        ctx.fill();
      }
      if (!reduce && ts - lastSpawn > 140) {
        const u = users[Math.floor(Math.random() * users.length)];
        packets.push({ u, h: HUBS[u.h], t: 0, back: Math.random() < 0.4 });
        lastSpawn = ts;
      }
      packets = packets.filter((p) => {
        p.t += 0.018;
        const a = p.back ? p.t : 1 - p.t;
        const x = (p.h.x + (p.u.x - p.h.x) * a) * W;
        const y = (p.h.y + (p.u.y - p.h.y) * a) * H;
        ctx.fillStyle = p.h.c;
        ctx.beginPath();
        ctx.arc(x, y, 2.6, 0, 6.3);
        ctx.fill();
        return p.t < 1;
      });
      HUBS.forEach((h, k) => {
        const pulse = reduce ? 0 : (Math.sin(ts / 600 + k) + 1) * 4;
        ctx.fillStyle = h.c + "22";
        ctx.beginPath();
        ctx.arc(h.x * W, h.y * H, 18 + pulse, 0, 6.3);
        ctx.fill();
        ctx.fillStyle = h.c;
        ctx.beginPath();
        ctx.arc(h.x * W, h.y * H, 9, 0, 6.3);
        ctx.fill();
        ctx.font = `600 12px ${font}`;
        ctx.fillStyle = "#f2f5fa";
        ctx.textAlign = "center";
        ctx.fillText(h.l, h.x * W, h.y * H + 34);
      });
      if (running && !reduce) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    let io: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window && boardRef.current) {
      io = new IntersectionObserver((entries) => {
        const visible = entries[0].isIntersecting;
        if (visible && !running) {
          running = true;
          raf = requestAnimationFrame(draw);
        } else if (!visible) running = false;
      });
      io.observe(boardRef.current);
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
      io?.disconnect();
    };
  }, [reduce]);

  /* Fil d'événements (côté client uniquement : il dépend de l'heure) */
  useEffect(() => {
    let n = 0;
    const make = (): FeedRow => ({
      id: n,
      ev: EVENTS[n++ % EVENTS.length],
      time: new Date().toTimeString().slice(0, 8),
    });
    const initial: FeedRow[] = [];
    for (let k = 0; k < 4; k++) initial.unshift(make());
    setFeed(initial);
    if (reduce) return;
    const id = setInterval(() => setFeed((f) => [make(), ...f].slice(0, 6)), 2300);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="board" ref={boardRef}>
      <div className="board-top">
        <b>
          <T fr="Mes systèmes en direct" en="My systems, live" />
        </b>
        <span className="board-live">
          <i />
          <T fr="en ligne" en="online" />
        </span>
      </div>
      <canvas
        id="net"
        ref={canvasRef}
        aria-label="Animation : utilisateurs connectés aux applications Objectif Canada, Dice Game, paiements et IA"
      />
      <span className="board-note fr">Simulation illustrative</span>
      <span className="board-note en">Illustrative simulation</span>
      <div className="feed" aria-hidden="true">
        {feed.map((row) => (
          <div className="ev" key={row.id}>
            <i style={{ background: row.ev[0] }} />
            <span>
              <T fr={row.ev[1]} en={row.ev[2]} />
            </span>
            <span>{row.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
