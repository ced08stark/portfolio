# Portfolio — Cédric Kaze Ngangue

Portfolio bilingue (FR/EN) construit avec Next.js 15 (App Router) et TypeScript.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm start        # sert le build
```

## Structure

```
app/
  layout.tsx        Métadonnées, polices, script de langue avant hydratation
  page.tsx          En-tête, livraison, compétences, parcours, contact
  globals.css       Styles (palette, scènes animées, responsive)
components/
  lang.tsx          Contexte de langue + composant <T fr en />
  Nav.tsx           Barre de navigation et bascule FR/EN
  LiveBoard.tsx     Tableau « en direct » (canvas + fil d'événements)
  Projects.tsx      Projets et filtres par domaine
  widgets.tsx       Mot animé, compteurs, journal de déploiement, copie du courriel…
  hooks.ts          prefers-reduced-motion, formatage des nombres
public/
  favicon.svg
```

La langue choisie est mémorisée dans `localStorage` (`ck-lang`). Les animations
respectent `prefers-reduced-motion` et se mettent en pause hors de l'écran.

## Déploiement

Compatible Vercel tel quel, ou sur un VPS via `npm run build && npm start`
(Docker / Coolify).

## Statistiques de visite (Umami)

Visites anonymes et sans cookies, via [Umami Cloud](https://cloud.umami.is) (gratuit).

1. Créer un compte sur cloud.umami.is, puis **Add website** (domaine : `cedric-kaze.vercel.app`).
2. Copier l'**ID du site** et l'ajouter dans Vercel > Settings > Environment Variables :
   `NEXT_PUBLIC_UMAMI_WEBSITE_ID` (et facultativement `NEXT_PUBLIC_UMAMI_DOMAINS=cedric-kaze.vercel.app`).
   En local : copier `.env.example` en `.env.local`.
3. Redéployer.

**Savoir quelle entreprise a consulté le portfolio** : envoyer à chaque recruteur un lien avec un code,
par exemple `https://cedric-kaze.vercel.app/?ref=desjardins` ou `https://cedric-kaze.vercel.app/?ref=desjardins#cv`
(ouvre directement le CV). Le code apparaît dans l'événement `ref-visit` et accompagne toutes les actions de la visite.

Événements suivis : `cv-open`, `cv-download`, `section-view`, `project-link`, `contact`, `email-copy`, `lang-switch`, `ref-visit`.
