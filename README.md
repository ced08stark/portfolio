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
