"use client";

import { useState, type ReactNode } from "react";
import { T } from "./lang";
import { AiChain, OnlineCount, PhoneTyping } from "./widgets";

const FILTERS: { f: string; fr: string; en: string }[] = [
  { f: "all", fr: "Tous", en: "All" },
  { f: "realtime", fr: "Temps réel", en: "Real time" },
  { f: "ai", fr: "IA", en: "AI" },
  { f: "pay", fr: "Paiements", en: "Payments" },
  { f: "mobile", fr: "Mobile", en: "Mobile" },
  { f: "web", fr: "Web", en: "Web" },
  { f: "devops", fr: "DevOps", en: "DevOps" },
];

function Stack({ items }: { items: string[] }) {
  return (
    <div className="stack">
      {items.map((s) => (
        <span key={s}>{s}</span>
      ))}
    </div>
  );
}

function Points({ fr, en }: { fr: string[]; en: string[] }) {
  return (
    <>
      <ul className="points fr">
        {fr.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <ul className="points en">
        {en.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </>
  );
}

const BARS = [30, 42, 38, 55, 63, 72, 84, 100];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const cls = (base: string, cats: string) =>
    base + (filter !== "all" && !cats.split(" ").includes(filter) ? " hide" : "");

  return (
    <section className="sec" id="projets">
      <h2 className="fr">Des produits en ligne, utilisés tous les jours</h2>
      <h2 className="en">Live products, used every day</h2>
      <p className="intro fr">Neuf projets sur lesquels j&apos;ai codé, de l&apos;API à la publication. Filtrez par domaine.</p>
      <p className="intro en">Nine projects I&apos;ve coded on, from the API to release. Filter by area.</p>

      <div className="filters" role="group" aria-label="Filtrer les projets">
        {FILTERS.map((c) => (
          <button key={c.f} className="chip" type="button" aria-pressed={filter === c.f} onClick={() => setFilter(c.f)}>
            <T fr={c.fr} en={c.en} />
          </button>
        ))}
      </div>

      {/* Objectif Canada */}
      <article className={cls("big proj", "web ai pay")}>
        <div className="scene oc anim">
          <div className="browser">
            <div className="bar">
              <i />
              <i />
              <i />
              <span>objectifcanada-tcf.com/admin</span>
            </div>
            <div className="dash">
              <div className="k">
                <T fr="Utilisateurs" en="Users" />
                <b>26 000+</b>
              </div>
              <div className="bars">
                {BARS.map((h, k) => (
                  <i key={k} style={{ height: `${h}%`, animationDelay: k ? `${k / 10}s` : undefined }} />
                ))}
              </div>
            </div>
          </div>
          <div className="phone" aria-hidden="true">
            <div className="ph-h">
              <span>TCF Canada</span>
              <span>EE · T1</span>
            </div>
            <div className="ph-t fr">Écrivez un message à un ami pour l&apos;inviter.</div>
            <div className="ph-t en">Write a message inviting a friend.</div>
            <div className="timer">
              <i />
            </div>
            <PhoneTyping />
          </div>
        </div>
        <div>
          <span className="status">
            <T fr="En production" en="In production" />
          </span>
          <h3>Objectif Canada</h3>
          <p className="what fr">Plateforme de préparation aux examens de langue TCF, TEF et IELTS pour les candidats à l&apos;immigration au Canada.</p>
          <p className="what en">Preparation platform for the TCF, TEF and IELTS language exams, for people immigrating to Canada.</p>
          <div className="result">
            <div>
              <b>26 000+</b>
              <T fr="utilisateurs web" en="web users" />
            </div>
            <div>
              <b>5 000+</b>
              <T fr="installations Android" en="Android installs" />
            </div>
          </div>
          <Points
            fr={[
              "Tableau de bord d'administration des séries d'examens, des utilisateurs et des abonnements",
              "Crédits et abonnements par région et par examen",
              "Applications Android et iOS publiées sur les stores",
            ]}
            en={[
              "Admin dashboard for exam series, users and subscriptions",
              "Credits and subscriptions by region and by exam",
              "Android and iOS apps published on the stores",
            ]}
          />
          <Stack items={["Next.js", "Node.js", "NestJS", "MongoDB", "React Native", "Docker"]} />
          <a className="visit" data-track="project-link" data-track-project="objectif-canada" href="https://objectifcanada-tcf.com" target="_blank" rel="noopener noreferrer">
            <T fr="Visiter objectifcanada-tcf.com" en="Visit objectifcanada-tcf.com" />
          </a>
        </div>
      </article>

      {/* Correction IA */}
      <article className={cls("big flip proj", "ai")}>
        <div className="scene ai anim">
          <div className="essay">
            Salut Marc, je t&apos;<span className="err">invites</span> samedi pour mon anniversaire. On{" "}
            <span className="err">va mangé</span> au restaurant puis on ira danser. Dis-moi si tu{" "}
            <span className="err">peut</span> venir !
          </div>
          <div className="fix">
            <div>
              <b>invite</b>
              <T fr="Conjugaison" en="Conjugation" />
            </div>
            <div>
              <b>va manger</b>
              <T fr="Infinitif" en="Infinitive" />
            </div>
            <div>
              <b>peux</b>
              <T fr="Accord" en="Agreement" />
            </div>
          </div>
          <AiChain />
        </div>
        <div>
          <span className="status">
            <T fr="En production" en="In production" />
          </span>
          <h3 className="fr">Correction des examens par IA</h3>
          <h3 className="en">AI exam grading</h3>
          <p className="what fr">Agents IA qui pré-corrigent l&apos;expression écrite et orale du TCF et du TEF, puis un correcteur humain valide la note.</p>
          <p className="what en">AI agents that pre-grade TCF and TEF writing and speaking, then a human grader validates the score.</p>
          <Points
            fr={[
              "Bascule automatique entre fournisseurs d'IA (OpenAI, Gemini, DeepSeek) avec nouvelles tentatives",
              "Transcription des enregistrements oraux (Whisper), puis évaluation critère par critère",
              "Correction asynchrone : l'apprenant soumet et reçoit sa correction par notification",
              "Agent examinateur pour passer l'épreuve orale en direct",
            ]}
            en={[
              "Automatic fallback between AI providers (OpenAI, Gemini, DeepSeek) with retries",
              "Speech transcription (Whisper), then criterion-by-criterion scoring",
              "Asynchronous grading: learners submit and get notified when the result is ready",
              "Examiner agent that runs the oral exam live",
            ]}
          />
          <Stack items={["Node.js", "LLM APIs", "Whisper", "MongoDB", "Swagger"]} />
        </div>
      </article>

      {/* Dice Game */}
      <article className={cls("big proj", "realtime pay")}>
        <div className="scene dice anim">
          <div className="online">
            <span className="pulse" />
            <T fr="En ligne :" en="Online:" /> <OnlineCount />
          </div>
          <div className="toast">
            <i>!</i>
            <T fr="C'est ton tour !" en="Your turn!" />
          </div>
          <div className="table">
            <div className="cubes">
              <div className="cube">
                {[6, 3, 1, 4, 5, 2].map((n) => (
                  <i key={n}>{n}</i>
                ))}
              </div>
              <div className="cube">
                {[4, 2, 6, 1, 3, 5].map((n) => (
                  <i key={n}>{n}</i>
                ))}
              </div>
            </div>
            <span className="seat s1">AK</span>
            <span className="seat s2">MN</span>
            <span className="seat s3">JT</span>
            <span className="seat s4">LK</span>
          </div>
        </div>
        <div>
          <span className="status">
            <T fr="En production" en="In production" />
          </span>
          <h3>Dice Game</h3>
          <p className="what fr">Jeu de dés multijoueur en temps réel avec comptes, solde et historique des transactions.</p>
          <p className="what en">Real-time multiplayer dice game with accounts, balance and transaction history.</p>
          <div className="result">
            <div>
              <b>2 000+</b>
              <T fr="joueurs" en="players" />
            </div>
          </div>
          <Points
            fr={[
              "Salles synchronisées en direct avec Socket.IO et état partagé dans Redis",
              "Notifications push web (Firebase) pour rappeler son tour à un joueur",
              "Suivi des sessions et de l'activité des joueurs en temps réel",
            ]}
            en={[
              "Rooms synced live with Socket.IO, shared state in Redis",
              "Web push notifications (Firebase) to remind players it's their turn",
              "Real-time session and player activity tracking",
            ]}
          />
          <Stack items={["NestJS", "Socket.IO", "Redis", "Prisma", "MongoDB", "Next.js"]} />
          <a className="visit" data-track="project-link" data-track-project="dice-game" href="https://dicegame.k-tika.com" target="_blank" rel="noopener noreferrer">
            <T fr="Visiter dicegame.k-tika.com" en="Visit dicegame.k-tika.com" />
          </a>
        </div>
      </article>

      <div className="grid">
        {/* App mobile */}
        <Tile
          className={cls("tile proj", "mobile devops")}
          scene={
            <div className="scene mob anim">
              <div className="phone" aria-hidden="true">
                <div className="ph-h">
                  <T fr="Hors ligne" en="Offline" />
                  <T fr="chiffré" en="encrypted" />
                </div>
                {[
                  ["Série 12", "CE"],
                  ["Série 13", "CO"],
                  ["Série 14", "EE"],
                ].map(([s, t]) => (
                  <div className="dl" key={s}>
                    <div>
                      <span>{s}</span>
                      <span>{t}</span>
                    </div>
                    <div className="pb">
                      <i />
                    </div>
                  </div>
                ))}
              </div>
              <span className="ota fr">Mise à jour installée</span>
              <span className="ota en">Update installed</span>
            </div>
          }
          status={<T fr="Android et iOS" en="Android and iOS" />}
          title={<T fr="Application mobile Objectif Canada" en="Objectif Canada mobile app" />}
          fr="Téléchargement des séries pour s'entraîner hors ligne, contenu chiffré sur l'appareil, mises à jour sans passer par les stores grâce à un pipeline CI/CD."
          en="Download exam series to practise offline, encrypted on the device, with updates shipped without the stores through a CI/CD pipeline."
          stack={["React Native", "Expo", "EAS", "GitHub Actions"]}
        />

        {/* Paiements */}
        <Tile
          className={cls("tile proj", "pay")}
          scene={
            <div className="scene pay anim">
              <div className="flow">
                <span className="node">
                  <T fr="Client" en="User" />
                </span>
                <span className="wire">
                  <i />
                </span>
                <span className="node">API</span>
                <span className="wire back">
                  <i />
                </span>
                <span className="node">MoMo</span>
              </div>
              <div className="states">
                <span className="st a">PENDING</span>
                <span className="d">›</span>
                <span className="st b">ACCEPTED</span>
                <span className="st" style={{ marginLeft: "auto", color: "var(--mint)" }}>
                  RFC 9421 ✓
                </span>
              </div>
              <div className="provs">
                <span>Campay</span>
                <span>Swychr</span>
                <span>PawaPay</span>
              </div>
            </div>
          }
          status={<T fr="En production" en="In production" />}
          title={<T fr="Paiements mobile money" en="Mobile money payments" />}
          fr="Intégration de trois fournisseurs de paiement, avec 22 pays africains configurés. Requêtes signées, webhooks idempotents : un paiement n'active jamais deux fois un abonnement."
          en="Three payment providers integrated, with 22 African countries configured. Signed requests and idempotent webhooks: a payment never activates a subscription twice."
          stack={["Node.js", "Webhooks", "MongoDB"]}
        />

        {/* Écosystème */}
        <Tile
          className={cls("tile proj", "devops realtime web")}
          scene={
            <div className="scene eco anim">
              <svg viewBox="0 0 320 200" role="img" aria-label="Deux interfaces Next.js reliées à une API NestJS, Redis et MongoDB">
                <defs>
                  <path id="pa" d="M70 52 C120 52 120 100 160 100" />
                  <path id="pb" d="M70 148 C120 148 120 100 160 100" />
                  <path id="pc" d="M160 100 C200 100 210 52 250 52" />
                  <path id="pd" d="M160 100 C200 100 210 148 250 148" />
                </defs>
                <g fill="none" stroke="rgba(159,176,204,.35)" strokeWidth="1.5">
                  <use href="#pa" />
                  <use href="#pb" />
                  <use href="#pc" />
                  <use href="#pd" />
                </g>
                <g style={{ fontFamily: "var(--body)" }} fontSize="11" fontWeight="600" textAnchor="middle">
                  <rect x="14" y="36" width="70" height="32" rx="8" fill="#0e1a33" stroke="rgba(159,176,204,.4)" />
                  <text x="49" y="56" fill="#f2f5fa">Jeu</text>
                  <rect x="14" y="132" width="70" height="32" rx="8" fill="#0e1a33" stroke="rgba(159,176,204,.4)" />
                  <text x="49" y="152" fill="#f2f5fa">Wallet</text>
                  <rect x="124" y="82" width="74" height="36" rx="9" fill="#ffcc1f" />
                  <text x="161" y="104" fill="#0e1a33">NestJS</text>
                  <rect x="236" y="36" width="70" height="32" rx="8" fill="#0e1a33" stroke="rgba(159,176,204,.4)" />
                  <text x="271" y="56" fill="#f2f5fa">Redis</text>
                  <rect x="236" y="132" width="70" height="32" rx="8" fill="#0e1a33" stroke="rgba(159,176,204,.4)" />
                  <text x="271" y="152" fill="#f2f5fa">MongoDB</text>
                </g>
                <circle r="4" fill="#ffcc1f">
                  <animateMotion dur="2.2s" repeatCount="indefinite">
                    <mpath href="#pa" />
                  </animateMotion>
                </circle>
                <circle r="4" fill="#52d6a0">
                  <animateMotion dur="2.6s" begin=".6s" repeatCount="indefinite">
                    <mpath href="#pb" />
                  </animateMotion>
                </circle>
                <circle r="4" fill="#8fb7ff">
                  <animateMotion dur="2s" begin=".3s" repeatCount="indefinite">
                    <mpath href="#pc" />
                  </animateMotion>
                </circle>
                <circle r="4" fill="#8fb7ff">
                  <animateMotion dur="2.4s" begin="1s" repeatCount="indefinite">
                    <mpath href="#pd" />
                  </animateMotion>
                </circle>
              </svg>
            </div>
          }
          status={<T fr="En production" en="In production" />}
          title={<T fr="Écosystème Dice multi-applications" en="Dice multi-app ecosystem" />}
          fr="Une API partagée par l'interface de jeu et l'interface porte-monnaie, dans un monorepo. Sessions sécurisées côté serveur pour les comptes qui manipulent de l'argent."
          en="One API shared by the game and wallet front ends, in a monorepo. Server-side secure sessions for accounts that handle money."
          stack={["Turborepo", "iron-session", "Docker", "Coolify"]}
        />

        {/* Khonamis */}
        <Tile
          className={cls("tile proj", "realtime")}
          scene={
            <div className="scene anim" aria-hidden="true">
              <div className="pitch">
                <span className="score">2 – 1</span>
                <span className="ball" />
                {[
                  ["h", 18, 30],
                  ["h", 30, 66],
                  ["h", 42, 42],
                  ["v", 62, 28],
                  ["v", 74, 62],
                  ["v", 86, 40],
                ].map(([team, l, t]) => (
                  <span key={`${l}-${t}`} className={`p ${team}`} style={{ left: `${l}%`, top: `${t}%` }} />
                ))}
              </div>
            </div>
          }
          status={<T fr="En production" en="In production" />}
          title="Khonamis Game"
          fr="Jeu de football virtuel multijoueur, construit sur la même base temps réel que Dice Game."
          en="Multiplayer virtual football game, built on the same real-time foundation as Dice Game."
          stack={["Socket.IO", "Redis", "React"]}
          link={{ href: "https://khonamis.k-tika.com", label: "khonamis.k-tika.com" }}
        />

        {/* IELTS */}
        <Tile
          className={cls("tile proj", "web")}
          scene={
            <div className="scene ielts anim" aria-hidden="true">
              <div className="tabs">
                <span>Listening</span>
                <span>Reading</span>
                <span>Writing</span>
                <span>Speaking</span>
              </div>
              <div className="q">
                <div className="opt">
                  <i />
                  True
                </div>
                <div className="opt ok">
                  <i />
                  False
                </div>
                <div className="opt">
                  <i />
                  Not given
                </div>
              </div>
              <div className="api">GET /api/ielts/series/:id/sections 200</div>
            </div>
          }
          status={<T fr="Module d'Objectif Canada" en="Objectif Canada module" />}
          title={<T fr="Plateforme d'examen IELTS" en="IELTS exam platform" />}
          fr="Séries d'examens avec les quatre épreuves, plusieurs types de questions (choix multiples, appariement, vrai/faux/non mentionné), interface d'administration et API documentée."
          en="Exam series with all four sections, several question types (multiple choice, matching, true/false/not given), admin interface and documented API."
          stack={["Next.js", "Express", "MongoDB", "Swagger"]}
        />

        {/* FBC-VTI */}
        <Tile
          className={cls("tile proj", "web")}
          scene={
            <div className="scene anim" aria-hidden="true">
              <div className="site">
                <div className="site-in">
                  <div className="s-nav">
                    <b />
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="s-hero">
                    <i />
                    <i />
                    <b />
                  </div>
                  <div className="s-stripe" />
                  <div className="s-cards">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="s-cards">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </div>
            </div>
          }
          status={<T fr="Livré" en="Delivered" />}
          statusDone
          title={<T fr="Site de l'institut FBC-VTI" en="FBC-VTI institute website" />}
          fr="Site d'un institut de formation professionnelle et de langues au Cameroun : 60 pages générées, 40 spécialités, formulaires validés, référencement technique soigné."
          en="Website for a vocational and language training institute in Cameroon: 60 generated pages, 40 programs, validated forms, solid technical SEO."
          stack={["Next.js 15", "Tailwind", "Framer Motion", "Zod"]}
        />
      </div>
    </section>
  );
}

function Tile(props: {
  className: string;
  scene: ReactNode;
  status: ReactNode;
  statusDone?: boolean;
  title: ReactNode;
  fr: string;
  en: string;
  stack: string[];
  link?: { href: string; label: string };
}) {
  return (
    <article className={props.className}>
      {props.scene}
      <div className="tile-body">
        <span className={"status" + (props.statusDone ? " done" : "")}>{props.status}</span>
        <h3>{props.title}</h3>
        <p className="fr">{props.fr}</p>
        <p className="en">{props.en}</p>
        <Stack items={props.stack} />
        {props.link && (
          <a data-track="project-link" data-track-project={props.link.label} href={props.link.href} target="_blank" rel="noopener noreferrer">
            {props.link.label}
          </a>
        )}
      </div>
    </article>
  );
}
