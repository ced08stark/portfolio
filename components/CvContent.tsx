import type { ReactNode } from "react";

const LINKEDIN = "https://linkedin.com/in/cedric-kaze-ngangue-803955243";
const GITHUB = "https://github.com/ced08stark";
const PORTFOLIO = "https://cedric-kaze.vercel.app";

const A = ({ href }: { href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {href.replace(/^https:\/\//, "")}
  </a>
);

type Job = { title: string; meta: ReactNode; points: string[] };
type Degree = { title: string; meta: string; points?: string[] };
type Cv = {
  title: string;
  location: string;
  status: string;
  h: { profile: string; skills: string; xp: string; projects: string; edu: string; lang: string; certs: string };
  profile: string;
  skills: [string, string][];
  jobs: Job[];
  projects: [string, ReactNode][];
  degrees: Degree[];
  languages: [string, string][];
  certs: string[];
};

const FR: Cv = {
  title: "Développeur logiciel full-stack · IA appliquée, paiements mobile money et DevOps",
  location: "Montréal (Québec)",
  status: "Résident permanent du Canada · Disponible immédiatement",
  h: { profile: "Profil", skills: "Compétences", xp: "Expérience professionnelle", projects: "Projets en ligne", edu: "Formation", lang: "Langues", certs: "Certifications" },
  profile:
    "Développeur full-stack titulaire d’un master professionnel en systèmes d’information et génie logiciel, avec plus de 5 ans d’expérience en conception, développement et maintenance d’applications web et mobiles en production. Mes applications servent plus de 26 000 utilisateurs, encaissent des paiements mobile money dans plusieurs pays africains et corrigent des examens avec des agents IA. À l’aise de l’API jusqu’au tableau de bord d’administration, avec TypeScript, React, Node.js et React Native, et déploie ses applications de bout en bout (Docker, CI/CD, VPS sur AWS, DigitalOcean et Hetzner, Coolify). Récemment installé à Montréal, à la recherche d’un poste de développeur logiciel.",
  skills: [
    ["Langages", "TypeScript, JavaScript, PHP, C#, SQL"],
    ["Front-end", "React, Next.js, Tailwind CSS, Framer Motion, HTML, CSS, conception web adaptative, référencement technique (SEO)"],
    ["Mobile", "React Native, Expo et EAS (Android et iOS), mode hors ligne, mises à jour OTA"],
    ["Back-end et données", "Node.js, NestJS, Express, Laravel (PHP), MongoDB, Prisma, Redis, Socket.IO (temps réel), conception d’API documentées (Swagger), validation Zod, sessions sécurisées (iron-session), authentification LDAP"],
    ["Paiements", "mobile money (Campay, Swychr, PawaPay), requêtes signées, webhooks idempotents, gestion des abonnements"],
    ["DevOps et administration système", "Docker, CI/CD (GitHub Actions), monorepo Turborepo, conception, déploiement et administration de serveurs VPS en production (AWS, DigitalOcean, Hetzner), Coolify, serveurs de secours"],
    ["Qualité et méthodes", "tests automatisés, environnements de test et de production, Git, Agile (sprints de 2 semaines), documentation technique"],
    ["Blockchain", "Ethereum, certification et vérification de documents académiques"],
    ["IA", "agents IA (pré-correction d’examens avec relecture humaine, examinateur oral en direct), bascule entre fournisseurs (OpenAI, Gemini, DeepSeek), transcription audio (Whisper), notifications push (Firebase), automatisation de workflows"],
  ],
  jobs: [
    {
      title: "Associé et développeur full-stack — High Reference SARL (HREFF)",
      meta: (
        <>
          Févr. 2025 – nov. 2026 · Douala, Cameroun (à distance)
          <br />
          Entreprise de développement de logiciels et de solutions numériques (SARL), Douala
        </>
      ),
      points: [
        "Développement d’applications web et mobiles en production, d’abord côté backend puis en full-stack",
        "Tableau de bord d’administration d’Objectif Canada, plateforme web de plus de 26 000 utilisateurs, et module d’examen IELTS (4 épreuves, plusieurs types de questions, API documentée avec Swagger)",
        "Applications mobiles Android et iOS d’Objectif Canada, de l’intégration à la publication sur les stores (plus de 5 000 installations sur Android) : séries téléchargeables et chiffrées pour le mode hors ligne, mises à jour OTA par un pipeline CI/CD",
        "Pipeline de correction IA des examens TCF et TEF (écrit et oral) : bascule automatique entre fournisseurs d’IA, transcription audio, correction asynchrone et relecture humaine ; réduction du temps de correction et des coûts",
        "Examen d’expression orale en direct avec un agent IA jouant le rôle d’examinateur",
        "Intégration de trois fournisseurs de paiement mobile money (Campay, Swychr, PawaPay ; 22 pays africains configurés) avec requêtes signées et webhooks idempotents : un paiement n’active jamais deux fois un abonnement",
        "Jeu de dés multijoueur en temps réel (plus de 2 000 utilisateurs) : salles synchronisées avec Socket.IO et Redis, notifications push web, suivi de l’activité des joueurs ; plateforme de football virtuel",
        "API NestJS partagée par l’interface de jeu et l’interface porte-monnaie dans un monorepo, avec sessions sécurisées côté serveur",
        "Responsable de la conception, du déploiement et de l’administration système : environ 3 serveurs de production (VPS), Docker, Coolify, tests automatisés ; pipelines CI/CD remplaçant les déploiements manuels ; plateformes disponibles 24 h/24 avec serveurs de secours",
        "Travail au sein d’une équipe produit distribuée, en sprints de 2 semaines",
        "Environnement : React, Next.js, React Native, Expo, Node.js, NestJS, MongoDB, Prisma, Redis, Socket.IO",
      ],
    },
    {
      title: "Technicien en développement des applications (CDI) — E-Workspace",
      meta: (
        <>
          Sept. 2022 – oct. 2026 · Douala, Cameroun
          <br />
          Entreprise de services numériques : développement web et mobile, archivage numérique (GED), Douala
        </>
      ),
      points: [
        "Analyse des besoins, conception, développement et maintenance d’applications web et mobiles",
        "Développement d’API et d’interfaces d’administration en TypeScript : système de fidélisation client (porte-monnaie électronique, points, QR code) et plateforme de formation en ligne",
        "Responsable de la conception, du déploiement et de l’administration système des applications : serveurs VPS, Docker, CI/CD, environnements de développement, de test et de production, documentation technique",
        "Collaboration avec les équipes internes pour l’intégration des solutions et le suivi de projet (planification, reporting)",
        "Application de certification académique basée sur la blockchain Ethereum : enregistrement des diplômes pour en vérifier l’authenticité (Next.js, Laravel) ; projet présenté comme mémoire de master, noté 17/20",
        "Présentation d’applications à des partenaires lors d’un forum professionnel de l’innovation numérique",
        "Licence et master suivis en cours du soir, en parallèle de l’emploi à temps plein",
      ],
    },
    {
      title: "Développeur full-stack junior (stage professionnel) — E-Workspace",
      meta: (
        <>
          Sept. 2021 – août 2022 · Douala, Cameroun
          <br />
          Entreprise de services numériques : développement web et mobile, archivage numérique (GED), Douala
        </>
      ),
      points: [
        "Conception et développement d’un gestionnaire d’applications basé sur l’annuaire LDAP de l’entreprise, en React et Laravel",
        "Authentification centralisée : les employés se connectent aux applications internes avec leurs identifiants de l’annuaire",
        "Gestion des accès aux applications selon les utilisateurs et les groupes de l’annuaire, depuis une interface d’administration",
        "Participation à tout le cycle du projet : analyse des besoins, conception, développement, tests et mise en service",
      ],
    },
  ],
  projects: [
    ["Portfolio", <>10 projets présentés en études de cas : <A href={PORTFOLIO} /></>],
    ["Objectif Canada", <>plateforme de préparation au TCF, TEF et IELTS (web, applications mobiles, tableau de bord d’administration, correction par IA) : <A href="https://objectifcanada-tcf.com" /></>],
    ["Dice Game", <>plateforme de jeu multijoueur en temps réel, avec comptes utilisateurs, solde et historique des transactions : <A href="https://dicegame.k-tika.com" /></>],
    ["Khonamis Game", <>jeu de football virtuel multijoueur : <A href="https://khonamis.k-tika.com" /></>],
    ["Certification académique sur blockchain", "application de vérification de diplômes sur Ethereum (Next.js, Laravel), réalisée chez E-Workspace et présentée comme mémoire de master"],
    ["Site FBC-VTI", "site d’un institut de formation professionnelle et de langues au Cameroun : Next.js 15, 60 pages générées, 40 spécialités, formulaires validés (Zod), animations (Framer Motion), référencement technique"],
  ],
  degrees: [
    {
      title: "Master professionnel, Systèmes d’information et génie logiciel — Université de Dschang (Faculté des Sciences), Cameroun",
      meta: "2023 – 2025 · Mention Bien (B+)",
      points: [
        "Cours clés : cloud computing, programmation distribuée, tests et qualité logicielle, business intelligence, programmation web mobile multiplateforme",
        "Mémoire de fin d’études noté 17/20 : application de certification académique basée sur la blockchain Ethereum",
      ],
    },
    {
      title: "Licence professionnelle, Génie informatique (génie logiciel et réseaux) — IUT Fotso Victor, Université de Dschang, Cameroun",
      meta: "2022 – 2023 · Équivalence canadienne : baccalauréat de 4 ans (évaluation WES, 2024)",
    },
    {
      title: "Diplôme d’études collégiales (DEC), Programmation et applications mobiles — Collège communautaire du Nouveau-Brunswick (CCNB), programme suivi à Douala, Cameroun",
      meta: "2020 – 2022",
    },
  ],
  languages: [
    ["Français", "courant (TCF Canada 2024 : C2 en compréhension orale et écrite, C1 en expression orale, B2 en expression écrite)"],
    ["Anglais", "intermédiaire"],
  ],
  certs: ["Évaluations de compétences LinkedIn réussies : développement front-end, PHP"],
};

const EN: Cv = {
  title: "Full-Stack Software Developer · Applied AI, Mobile Money Payments and DevOps",
  location: "Montréal, Québec",
  status: "Permanent Resident of Canada · Available immediately",
  h: { profile: "Profile", skills: "Skills", xp: "Professional experience", projects: "Online projects", edu: "Education", lang: "Languages", certs: "Certifications" },
  profile:
    "Full-stack developer with a professional master’s degree in information systems and software engineering and over 5 years of experience designing, building and maintaining production web and mobile applications. My applications serve more than 26,000 users, collect mobile money payments across several African countries and grade exams with AI agents. Comfortable from the API to the admin dashboard, with TypeScript, React, Node.js and React Native, and deploys applications end to end (Docker, CI/CD, VPS on AWS, DigitalOcean and Hetzner, Coolify). Recently settled in Montréal and looking for a software developer position.",
  skills: [
    ["Languages", "TypeScript, JavaScript, PHP, C#, SQL"],
    ["Front-end", "React, Next.js, Tailwind CSS, Framer Motion, HTML, CSS, responsive web design, technical SEO"],
    ["Mobile", "React Native, Expo and EAS (Android and iOS), offline mode, OTA updates"],
    ["Back-end and data", "Node.js, NestJS, Express, Laravel (PHP), MongoDB, Prisma, Redis, Socket.IO (real time), documented API design (Swagger), Zod validation, secure sessions (iron-session), LDAP authentication"],
    ["Payments", "mobile money (Campay, Swychr, PawaPay), signed requests, idempotent webhooks, subscription management"],
    ["DevOps and system administration", "Docker, CI/CD (GitHub Actions), Turborepo monorepo, design, deployment and administration of production VPS servers (AWS, DigitalOcean, Hetzner), Coolify, backup servers"],
    ["Quality and methods", "automated testing, test and production environments, Git, Agile (2-week sprints), technical documentation"],
    ["Blockchain", "Ethereum, issuance and verification of academic credentials"],
    ["AI", "AI agents (exam pre-grading with human review, live oral examiner), provider fallback (OpenAI, Gemini, DeepSeek), speech transcription (Whisper), push notifications (Firebase), workflow automation"],
  ],
  jobs: [
    {
      title: "Partner and Full-Stack Developer — High Reference SARL (HREFF)",
      meta: (
        <>
          Feb 2025 – Nov 2026 · Douala, Cameroon (remote)
          <br />
          Software and digital solutions development company (SARL), Douala
        </>
      ),
      points: [
        "Built production web and mobile applications, starting on the backend and expanding to full-stack",
        "Admin dashboard for Objectif Canada, a web platform with 26,000+ users, and an IELTS exam module (4 sections, several question types, API documented with Swagger)",
        "Android and iOS mobile apps for Objectif Canada, from integration to store publication (5,000+ Android installs): downloadable, encrypted exam series for offline use, OTA updates through a CI/CD pipeline",
        "AI grading pipeline for TCF and TEF exams (writing and speaking): automatic fallback between AI providers, speech transcription, asynchronous grading and human review; reduced grading time and costs",
        "Live oral exam run with an AI agent acting as the examiner",
        "Integrated three mobile money payment providers (Campay, Swychr, PawaPay; 22 African countries configured) with signed requests and idempotent webhooks: a payment never activates a subscription twice",
        "Real-time multiplayer dice game (2,000+ users): rooms synced with Socket.IO and Redis, web push notifications, player activity tracking; virtual football platform",
        "NestJS API shared by the game and wallet front ends in a monorepo, with server-side secure sessions",
        "Responsible for design, deployment and system administration: about 3 production servers (VPS), Docker, Coolify, automated testing; CI/CD pipelines replacing manual deployments; platforms available 24/7 with backup servers",
        "Worked in a distributed product team on 2-week sprints",
        "Environment: React, Next.js, React Native, Expo, Node.js, NestJS, MongoDB, Prisma, Redis, Socket.IO",
      ],
    },
    {
      title: "Application Development Technician (permanent contract) — E-Workspace",
      meta: (
        <>
          Sep 2022 – Oct 2026 · Douala, Cameroon
          <br />
          Digital services company: web and mobile development, digital archiving (EDMS), Douala
        </>
      ),
      points: [
        "Requirements analysis, design, development and maintenance of web and mobile applications",
        "Built TypeScript APIs and admin interfaces: a customer loyalty system (e-wallet, points, QR code) and an online training platform",
        "Responsible for design, deployment and system administration of applications: VPS servers, Docker, CI/CD, development, test and production environments, technical documentation",
        "Worked with internal teams on solution integration and project tracking (planning, reporting)",
        "Academic certification application built on the Ethereum blockchain: diplomas recorded so their authenticity can be verified (Next.js, Laravel); presented as my master’s thesis, graded 17/20",
        "Presented applications to partners at a professional digital innovation forum",
        "Completed bachelor’s and master’s studies in evening classes while working full-time",
      ],
    },
    {
      title: "Junior Full-Stack Developer (professional internship) — E-Workspace",
      meta: (
        <>
          Sep 2021 – Aug 2022 · Douala, Cameroon
          <br />
          Digital services company: web and mobile development, digital archiving (EDMS), Douala
        </>
      ),
      points: [
        "Designed and built an application manager based on the company’s LDAP directory, with React and Laravel",
        "Centralized authentication: employees sign in to internal applications with their directory credentials",
        "Access management to applications by directory users and groups, from an admin interface",
        "Took part in the full project cycle: requirements analysis, design, development, testing and rollout",
      ],
    },
  ],
  projects: [
    ["Portfolio", <>10 projects presented as case studies: <A href={PORTFOLIO} /></>],
    ["Objectif Canada", <>TCF, TEF and IELTS preparation platform (web, mobile apps, admin dashboard, AI grading): <A href="https://objectifcanada-tcf.com" /></>],
    ["Dice Game", <>real-time multiplayer gaming platform with user accounts, balance and transaction history: <A href="https://dicegame.k-tika.com" /></>],
    ["Khonamis Game", <>multiplayer virtual football game: <A href="https://khonamis.k-tika.com" /></>],
    ["Blockchain academic certification", "diploma verification application on Ethereum (Next.js, Laravel), built at E-Workspace and presented as my master’s thesis"],
    ["FBC-VTI website", "website for a vocational and language training institute in Cameroon: Next.js 15, 60 generated pages, 40 programs, validated forms (Zod), animations (Framer Motion), technical SEO"],
  ],
  degrees: [
    {
      title: "Professional Master’s Degree, Information Systems and Software Engineering — University of Dschang (Faculty of Science), Cameroon",
      meta: "2023 – 2025 · Honours (B+)",
      points: [
        "Key courses: cloud computing, distributed programming, software testing and quality, business intelligence, cross-platform mobile web programming",
        "Final thesis graded 17/20: academic certification application built on the Ethereum blockchain",
      ],
    },
    {
      title: "Professional Bachelor’s Degree (Licence), Computer Engineering (Software Engineering and Networks) — IUT Fotso Victor, University of Dschang, Cameroon",
      meta: "2022 – 2023 · Canadian equivalency: four-year bachelor’s degree (WES assessment, 2024)",
    },
    {
      title: "College Diploma (DEC), Programming and Mobile Applications — Community College of New Brunswick (CCNB), program completed in Douala, Cameroon",
      meta: "2020 – 2022",
    },
  ],
  languages: [
    ["French", "fluent (TCF Canada 2024: C2 listening and reading, C1 speaking, B2 writing)"],
    ["English", "intermediate"],
  ],
  certs: ["LinkedIn Skill Assessments passed: front-end development, PHP"],
};

function CvBody({ cv, lang }: { cv: Cv; lang: "fr" | "en" }) {
  const colon = lang === "fr" ? " :" : ":";
  return (
    <div className={lang}>
      <header className="cv-head">
        <h2>CÉDRIC KAZE NGANGUE</h2>
        <p className="cv-title">{cv.title}</p>
        <p className="cv-contact">
          {cv.location} · cedricngangue08@gmail.com · +1 438-402-4380 · <A href={LINKEDIN} /> · <A href={GITHUB} />
        </p>
        <p className="cv-status">{cv.status}</p>
      </header>

      <h3>{cv.h.profile}</h3>
      <p>{cv.profile}</p>

      <h3>{cv.h.skills}</h3>
      <ul>
        {cv.skills.map(([k, v]) => (
          <li key={k}>
            <b>
              {k}
              {colon}
            </b>{" "}
            {v}
          </li>
        ))}
      </ul>

      <h3>{cv.h.xp}</h3>
      {cv.jobs.map((j) => (
        <div key={j.title}>
          <h4>{j.title}</h4>
          <p className="cv-meta">{j.meta}</p>
          <ul>
            {j.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      ))}

      <h3>{cv.h.projects}</h3>
      <ul>
        {cv.projects.map(([name, desc]) => (
          <li key={name}>
            <b>{name}</b> — {desc}
          </li>
        ))}
        <li>
          <b>
            {lang === "fr" ? "Code source" : "Source code"}
            {colon}
          </b>{" "}
          <A href={GITHUB} />
        </li>
      </ul>

      <h3>{cv.h.edu}</h3>
      {cv.degrees.map((d) => (
        <div key={d.title}>
          <h4>{d.title}</h4>
          <p className="cv-meta">{d.meta}</p>
          {d.points && (
            <ul>
              {d.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <h3>{cv.h.lang}</h3>
      <ul>
        {cv.languages.map(([k, v]) => (
          <li key={k}>
            <b>
              {k}
              {colon}
            </b>{" "}
            {v}
          </li>
        ))}
      </ul>

      <h3>{cv.h.certs}</h3>
      <ul>
        {cv.certs.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default function CvContent() {
  return (
    <>
      <CvBody cv={FR} lang="fr" />
      <CvBody cv={EN} lang="en" />
    </>
  );
}
