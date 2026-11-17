import LiveBoard from "@/components/LiveBoard";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import CvModal from "@/components/CvModal";
import ScrollReveal from "@/components/ScrollReveal";
import { T } from "@/components/lang";
import { AnimPause, CopyEmail, CountUp, DeployLog, TypingWord } from "@/components/widgets";

const EMAIL = "cedricngangue08@gmail.com";

const SKILLS_MARQUEE = [
  "TypeScript", "React", "Next.js", "Node.js", "NestJS", "React Native", "Expo", "Socket.IO",
  "Redis", "MongoDB", "Prisma", "Docker", "CI/CD", "Coolify", "AWS", "LLM APIs",
];

const SKILLS = [
  { fr: "Temps réel", en: "Real time", dfr: "Salles synchronisées, état partagé dans Redis, reconnexion des clients mobiles.", den: "Synced rooms, shared state in Redis, mobile client reconnection." },
  { fr: "Paiements", en: "Payments", dfr: "Mobile money (Campay, Swychr, PawaPay), webhooks signés et idempotents, abonnements.", den: "Mobile money (Campay, Swychr, PawaPay), signed idempotent webhooks, subscriptions." },
  { fr: "IA appliquée", en: "Applied AI", dfr: "Agents de correction, transcription audio, bascule entre fournisseurs, humain dans la boucle.", den: "Grading agents, speech transcription, provider fallback, human in the loop." },
  { fr: "Mobile", en: "Mobile", dfr: "React Native et Expo, mode hors ligne, mises à jour OTA, publication Android et iOS.", den: "React Native and Expo, offline mode, OTA updates, Android and iOS publishing." },
  { fr: "Web", en: "Web", dfr: "Next.js, tableaux de bord d'administration, référencement, formulaires validés.", den: "Next.js, admin dashboards, SEO, validated forms." },
  { fr: "DevOps", en: "DevOps", dfr: "Docker, CI/CD, serveurs VPS en production, environnements de test, serveurs de secours.", den: "Docker, CI/CD, production VPS, test environments, backup servers." },
];

const STAGES = [
  { h: <h3>Git</h3>, p: <T fr="Sprints de 2 semaines, revue du code" en="2-week sprints, code review" /> },
  { h: <h3><T fr="Tests automatisés" en="Automated tests" /></h3>, p: <T fr="Lancés par la CI à chaque changement" en="Run by CI on every change" /> },
  { h: <h3><T fr="Environnement de test" en="Test environment" /></h3>, p: <T fr="Une copie de la production" en="A copy of production" /> },
  { h: <h3>Validation</h3>, p: <T fr="Vérification avant la mise en ligne" en="Checked before release" /> },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <div className="wrap">
          {/* EN-TÊTE */}
          <section className="hero">
            <div className="hero-grid">
              <div>
                <span className="avail">
                  <span className="pulse" aria-hidden="true" />
                  <T fr="Disponible maintenant à Montréal, résident permanent" en="Available now in Montréal, permanent resident" />
                </span>
                <h1>
                  <span>Cédric</span>
                  <span>Kaze</span>
                  <span className="last">Ngangue</span>
                </h1>
                <p className="builds">
                  <T fr="Je construis " en="I build " />
                  <TypingWord />
                  <span className="caret" aria-hidden="true" />
                </p>
                <p className="lede fr">
                  Développeur full-stack TypeScript. Mes applications servent <strong>plus de 26 000 utilisateurs</strong>, encaissent des paiements mobile money dans plusieurs pays africains et corrigent des examens avec des agents IA. Je les déploie et je les garde en ligne 24 h/24.
                </p>
                <p className="lede en">
                  Full-stack TypeScript developer. My applications serve <strong>more than 26,000 users</strong>, collect mobile money payments across several African countries and grade exams with AI agents. I deploy them and keep them online 24/7.
                </p>
                <div className="cta">
                  <a className="btn main" href="#projets"><T fr="Voir les projets" en="See the projects" /></a>
                  <a className="btn" href="#cv" data-cv-source="hero"><T fr="Voir mon CV" en="View my résumé" /></a>
                  <a className="btn" href="#contact"><T fr="Me contacter" en="Contact me" /></a>
                  <a className="btn" data-track="contact" data-track-channel="github" href="https://github.com/ced08stark" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
              <LiveBoard />
            </div>

            <div className="figures">
              <div className="fig">
                <div className="n"><CountUp to={26000} /><em>+</em></div>
                <p className="fr">utilisateurs sur la plateforme Objectif Canada</p>
                <p className="en">users on the Objectif Canada platform</p>
              </div>
              <div className="fig">
                <div className="n"><CountUp to={5000} /><em>+</em></div>
                <p className="fr">installations Android de l&apos;application mobile</p>
                <p className="en">Android installs of the mobile app</p>
              </div>
              <div className="fig">
                <div className="n"><CountUp to={2000} /><em>+</em></div>
                <p className="fr">joueurs sur un jeu multijoueur en temps réel</p>
                <p className="en">players on a real-time multiplayer game</p>
              </div>
              <div className="fig">
                <div className="n">24/7</div>
                <p className="fr">disponibilité, avec serveurs de secours</p>
                <p className="en">availability, with backup servers</p>
              </div>
            </div>
          </section>

          {/* PROJETS */}
          <Projects />

          {/* LIVRAISON */}
          <section className="sec" id="livraison">
            <h2 className="fr">Du commit à la production, sans déploiement manuel</h2>
            <h2 className="en">From commit to production, with no manual deploys</h2>
            <p className="intro fr">J&apos;ai remplacé les déploiements manuels par des pipelines CI/CD. J&apos;administre environ trois serveurs de production chez AWS, DigitalOcean et Hetzner.</p>
            <p className="intro en">I replaced manual deployments with CI/CD pipelines. I run about three production servers on AWS, DigitalOcean and Hetzner.</p>
            <div className="pipe">
              <span className="runner anim" aria-hidden="true" />
              {STAGES.map((s, k) => (
                <div className="stage" key={k}>
                  {s.h}
                  <p>{s.p}</p>
                </div>
              ))}
              <div className="stage prod">
                <h3>Production</h3>
                <p>VPS, Docker, Coolify</p>
              </div>
            </div>
            <span className="backup">
              24/7 · <T fr="serveurs de secours prêts à prendre le relais" en="backup servers ready to take over" />
            </span>
            <DeployLog />
          </section>

          {/* COMPÉTENCES */}
          <section className="sec" id="competences">
            <h2 className="fr">Une stack TypeScript, de l&apos;API au téléphone</h2>
            <h2 className="en">A TypeScript stack, from API to phone</h2>
            <div className="marquee" aria-hidden="true">
              <div className="track">
                {[...SKILLS_MARQUEE, ...SKILLS_MARQUEE].map((s, k) => (
                  <span key={k}>{s}</span>
                ))}
              </div>
            </div>
            <div className="skills">
              {SKILLS.map((s) => (
                <div className="skill" key={s.en}>
                  {s.fr === s.en ? <h3>{s.fr}</h3> : <><h3 className="fr">{s.fr}</h3><h3 className="en">{s.en}</h3></>}
                  <p className="fr">{s.dfr}</p>
                  <p className="en">{s.den}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PARCOURS */}
          <section className="sec" id="parcours">
            <h2 className="fr">Quatre ans en poste, deux diplômes en cours du soir</h2>
            <h2 className="en">Four years on the job, two degrees in evening classes</h2>
            <div className="path">
              <div className="step">
                <div className="when"><T fr="févr. 2025 – nov. 2026" en="Feb 2025 – Nov 2026" /></div>
                <div>
                  <h3 className="fr">Associé et développeur full-stack</h3>
                  <h3 className="en">Partner and Full-Stack Developer</h3>
                  <p className="org">High Reference SARL (HREFF), Douala · <T fr="à distance" en="remote" /></p>
                  <ul className="fr">
                    <li>Objectif Canada, Dice Game, Khonamis : web, mobile, temps réel, paiements et IA</li>
                    <li>Conception, déploiement et administration d&apos;environ trois serveurs de production</li>
                    <li>Équipe produit distribuée, sprints de 2 semaines</li>
                  </ul>
                  <ul className="en">
                    <li>Objectif Canada, Dice Game, Khonamis: web, mobile, real time, payments and AI</li>
                    <li>Designed, deployed and ran about three production servers</li>
                    <li>Distributed product team, 2-week sprints</li>
                  </ul>
                </div>
              </div>
              <div className="step">
                <div className="when"><T fr="sept. 2022 – oct. 2026" en="Sep 2022 – Oct 2026" /></div>
                <div>
                  <h3 className="fr">Technicien en développement des applications</h3>
                  <h3 className="en">Application Development Technician</h3>
                  <p className="org">E-Workspace, Douala · <T fr="CDI" en="permanent" /></p>
                  <ul className="fr">
                    <li>API et interfaces d&apos;administration en TypeScript : fidélisation client (porte-monnaie, points, QR code), formation en ligne</li>
                    <li>Déploiement et administration des applications, documentation technique</li>
                  </ul>
                  <ul className="en">
                    <li>TypeScript APIs and admin interfaces: customer loyalty (wallet, points, QR code), online training</li>
                    <li>Application deployment and administration, technical documentation</li>
                  </ul>
                </div>
              </div>
              <div className="step">
                <div className="when">2023 – 2025</div>
                <div>
                  <h3 className="fr">Master professionnel, systèmes d&apos;information et génie logiciel</h3>
                  <h3 className="en">Professional Master&apos;s, Information Systems and Software Engineering</h3>
                  <p className="org fr">Université de Dschang · mention Bien · mémoire 17/20</p>
                  <p className="org en">University of Dschang · Honours · thesis 17/20</p>
                </div>
              </div>
              <div className="step">
                <div className="when">2022 – 2023</div>
                <div>
                  <h3 className="fr">Licence professionnelle, génie logiciel et réseaux</h3>
                  <h3 className="en">Professional Bachelor&apos;s, Software Engineering and Networks</h3>
                  <p className="org fr">IUT Fotso Victor · équivalent baccalauréat canadien de 4 ans (WES)</p>
                  <p className="org en">IUT Fotso Victor · equivalent to a Canadian four-year bachelor&apos;s (WES)</p>
                </div>
              </div>
              <div className="step">
                <div className="when">2020 – 2022</div>
                <div>
                  <h3 className="fr">DEC, programmation et applications mobiles</h3>
                  <h3 className="en">College Diploma, Programming and Mobile Applications</h3>
                  <p className="org fr">Collège communautaire du Nouveau-Brunswick (CCNB)</p>
                  <p className="org en">Community College of New Brunswick (CCNB)</p>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section className="contact" id="contact">
            <div>
              <h2 className="fr">Je cherche une équipe avec qui livrer dès la première semaine.</h2>
              <h2 className="en">I&apos;m looking for a team to ship with from week one.</h2>
              <p className="fr">Résident permanent à Montréal, disponible immédiatement. Postes de développeur full-stack, back-end ou mobile. Français courant, anglais intermédiaire.</p>
              <p className="en">Permanent resident in Montréal, available immediately. Full-stack, back-end or mobile developer roles. Fluent French, intermediate English.</p>
            </div>
            <div className="clist">
              <div className="crow">
                <span><T fr="Courriel" en="Email" /></span>
                <span>
                  <a href={`mailto:${EMAIL}`} data-track="contact" data-track-channel="email">{EMAIL}</a>
                  <CopyEmail email={EMAIL} />
                </span>
              </div>
              <div className="crow">
                <span><T fr="Téléphone" en="Phone" /></span>
                <span><a href="tel:+14384024380" data-track="contact" data-track-channel="phone">+1 438-402-4380</a></span>
              </div>
              <div className="crow">
                <span>LinkedIn</span>
                <a data-track="contact" data-track-channel="linkedin" href="https://linkedin.com/in/cedric-kaze-ngangue-803955243" target="_blank" rel="noopener noreferrer">cedric-kaze-ngangue</a>
              </div>
              <div className="crow">
                <span>CV</span>
                <a href="#cv" data-cv-source="contact"><T fr="Consulter le CV (FR ou EN)" en="View the résumé (FR or EN)" /></a>
              </div>
              <div className="crow">
                <span>GitHub</span>
                <a data-track="contact" data-track-channel="github" href="https://github.com/ced08stark" target="_blank" rel="noopener noreferrer">ced08stark</a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="wrap">
        <span>Cédric Kaze Ngangue · Montréal</span>
        <T fr="Mis à jour en novembre 2026" en="Updated November 2026" />
      </footer>
      <CvModal />
      <AnimPause />
      <ScrollReveal />
    </>
  );
}
