# ROP_Institute — site institutionnel de l'Institut R.O.P.

Refonte du site [reflexo-occipitopodale.com](https://www.reflexo-occipitopodale.com/)
(actuellement sur Wix) : Next.js 16 (App Router) + TypeScript + React 19, déployé sur Vercel.
Le plan d'ensemble des trois applications (ce site, la plateforme de lecture `ROP` /
guy-boitout.com, et `SuiviPatient`) est décrit dans **[ECOSYSTEM.md](./ECOSYSTEM.md)**.

## Démarrage

```bash
npm install
npm run dev        # http://localhost:3000
```

Aucune base de données ni variable d'environnement n'est requise pour la V1.
`NEXT_PUBLIC_SITE_URL` (optionnelle) fixe l'URL canonique pour le sitemap et les métadonnées.

## Architecture

- **Design system** — `app/globals.css` : charte graphique commune aux trois applications
  (crème `#f5f0e8`, encre `#1a1a18`, sauge `#4a6b5a`, or `#a07c3a`, Cormorant Garamond +
  DM Sans auto-hébergées via `next/font`). Pas de framework CSS.
- **i18n** — même mécanisme que le repo `ROP` : cookie `lang` (1 an), `getServerLang()`
  côté serveur, `useLanguage()` côté client, français canonique avec repli automatique.
  Langues actives : `fr`, `en` (ajouter une langue = étendre `Lang`, `translations.ts`
  et créer `content/pages.<lang>.ts`).
- **Contenu** — pages éditoriales typées dans `content/pages.<lang>.ts` (modèle dans
  `content/types.ts`), rendues par `components/StandardPage.tsx` via
  `lib/renderStandardPage.tsx`. La page d'accueil (`app/page.tsx`) est spécifique.
- **SEO** — `app/sitemap.ts`, `app/robots.ts`, redirections 301 des URLs Wix indexées
  dans `next.config.ts`.

## Arborescence des pages

```
/                        Accueil
/methode                 La méthode (+ /technique, /cartographie, /fondements)
/formations              Les formations (+ /base, /post-gradues)
/enseignants             Guy Boitout, Jean-Pierre Vadala, l'équipe
/praticiens              Annuaire des praticiens certifiés (migration en cours)
/livres                  Les ouvrages Elsevier Masson + lecture en ligne
/recherche               Le programme observationnel SuiviPatient
/institut                L'association, la mission, les valeurs
/contact                 Contact
/mentions-legales, /confidentialite
```

## Avant la mise en production (phase 2 — cf. ECOSYSTEM.md §5)

- [ ] Relecture de tout le contenu par l'institut (textes rédigés d'après le site actuel
      et les ouvrages — à valider ligne à ligne).
- [ ] Compléter les mentions légales (dénomination exacte, siège, SIREN, directeur de la
      publication) et les coordonnées de la page contact (email officiel).
- [ ] Formulaire de contact + inscription formations (Resend ou équivalent).
- [ ] Récupérer les images de l'ancien site (photos formations, portraits, planches) et
      les intégrer.
- [ ] Annuaire des praticiens : recueillir les consentements RGPD puis republier
      (statique d'abord, base Neon en phase 3).
- [ ] Vérifier la table de redirections contre le sitemap Wix complet.
- [ ] Bascule DNS + Search Console (procédure détaillée dans ECOSYSTEM.md).
