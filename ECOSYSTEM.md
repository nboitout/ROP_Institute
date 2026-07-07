# ROP Digital Ecosystem — Master Plan

**Organisation:** Institut de Réflexothérapie Occipito-Podale (R.O.P.) — association loi 1901, France,
with the stated objective of evolving toward a mission-driven / public-benefit structure.
**Author basis:** current Wix site (reflexo-occipitopodale.com), the `nboitout/ROP` learning platform,
and the `nboitout/SuiviPatient` patient-outcomes app.
**Last updated:** July 2026

---

## 1. Vision

One coherent digital home for the R.O.P. method, replacing a €50/month Wix site with a modern,
open, multilingual ecosystem that serves four audiences:

| Audience | Need | Answered by |
|---|---|---|
| **General public & prospective patients** | Understand the method, find a certified practitioner | Institute website |
| **Health professionals & students** | Learn the technique, follow trainings, read Guy Boitout's books | Institute website → Learning platform |
| **Certified practitioners** | Visibility (directory), post-graduate courses, patient follow-up tooling | Institute website + SuiviPatient |
| **The Institute itself** | Measure real-world benefit to patients, credibility, sustainability | SuiviPatient observatory + aggregated evidence published on the website |

The long game: the institute website is the **front door**, the learning platform is the
**school**, and SuiviPatient is the **observatory** that produces the evidence feeding back into
the front door ("measured benefits" section). This loop — teach → practice → measure → publish —
is what differentiates R.O.P. from every other reflexology school and is the strongest asset for
the future public-benefit positioning.

---

## 2. The three applications

### 2.1 `ROP_Institute` — Institute website (this repo) — **NEW**

Replaces reflexo-occipitopodale.com (Wix). Public, multilingual, SEO-first.

- **Domain (target):** `reflexo-occipitopodale.com` (kept — existing SEO equity)
- **Content:** the method (history, technique, 3D cartography, theoretical foundations),
  trainings (12-day base course + post-graduate seminars: cranial nerves, ENT, paediatrics,
  viscero-emotional, uro-genital), the teachers (Guy Boitout, Jean-Pierre Vadala and team),
  certified practitioner directory (France & Spain today), the books (Elsevier Masson volumes
  1 & 2, volume 3 in preparation), articles, the institute (mission, governance), contact.
- **Stack:** Next.js 16 App Router, TypeScript, React 19 — identical to `ROP`.
- **Database:** none at first (content in typed TS files, same pattern as `ROP`); Neon Postgres
  added when the practitioner directory becomes self-service (phase 3).

### 2.2 `ROP` — Learning platform — **LIVE, keeps evolving**

Already built: 21 chapters + introduction of the book content as a web reader, 6 languages
(fr/en/de/es/it/th) with French fallback, free/paid/admin access gating via cookies, slide-sync
reader, reflex-zone atlas, analytics, admin dashboard.

- **Domain:** `guy-boitout.com` (live) — the book/author site keeps its own identity; the
  institute site links to it as "the school's reading platform" and `ROP` already models
  inbound `rop_institute` referral traffic in `lib/campaignLinks.ts`.
- **Roadmap:** payments (Stripe) for paid chapters, then structured learning paths
  (chapter → quiz → revision sheet → clinical case), then cohort features tied to real trainings.

### 2.3 `SuiviPatient` — Patient-reported outcomes app — **V1 BUILT, to deploy**

Observational registry: patient questionnaires T0/J2/J21 via tokenised links (no patient account),
practitioner dashboard with evolution curves and safety-alert workflow, institute observatory with
aggregated network metrics (n ≥ 5 cell rule), CSV export, audit log. Explicitly **not** a
diagnostic tool.

- **Domain (target):** `suivi.reflexo-occipitopodale.com`
- **Stack:** Next.js 16, Prisma, PostgreSQL (Neon, **EU region** — GDPR).
- **Roadmap:** deploy to Vercel + Neon EU, pilot with a handful of certified practitioners,
  then publish aggregated outcomes on the institute website ("measured benefits" page).

---

## 3. Shared foundations

### 3.1 Design system — "charte guy-boitout"

All three apps share the same identity (already used by `ROP` and `SuiviPatient`):

- **Palette:** cream `#f5f0e8`, parchment `#ede7d9`, ink `#1a1a18`, sage `#4a6b5a`,
  gold `#a07c3a` / `#c9a35e`.
- **Type:** Cormorant Garamond (display, light 300, italic accents) + DM Sans (UI/body).
- **Voice:** sober, anatomical rigour, "editorial" feel — closer to a medical publisher than a
  wellness brand. Uppercase micro-labels with letter-spacing, thin rules, 2px radii.

Near-term: keep the CSS duplicated per app (it is small). If drift becomes a problem, extract a
`rop-ui` package (npm workspace or git submodule) — **not before** it hurts.

### 3.2 Internationalisation

Same mechanism everywhere (proven in `ROP`): `lang` cookie (1 year) → `getServerLang()` in server
components → typed `translations.ts` per app → French as canonical fallback. Languages:
**fr, en, de, es, it** (+ th on the learning platform). The institute site launches fr + en and
adds languages as translations are validated — the mechanism supports all of them from day 1.

### 3.3 Infrastructure

| Concern | Choice | Cost |
|---|---|---|
| Code | GitHub (`nboitout/ROP_Institute`, `ROP`, `SuiviPatient`) | free |
| Hosting | Vercel — one project per repo | free Hobby to start; Pro ($20/mo) only when needed |
| Database | Neon Postgres, EU region (SuiviPatient now; directory later) | free tier to start |
| DNS | registrar of the domain (move out of Wix DNS at cutover) | domain fee only |
| Email (forms) | Resend or a simple SMTP relay for contact/enrolment forms | free tier |
| Analytics | same lightweight in-house `/api/track` pattern as `ROP` (GDPR-friendly, no consent banner needed) | free |

Replacing Wix (€600/year) with ~€0–240/year, with no visitor cap.

### 3.4 Subdomain layout

```
reflexo-occipitopodale.com        → ROP_Institute   (front door, this repo)
guy-boitout.com                   → ROP             (learning platform / the books — live)
suivi.reflexo-occipitopodale.com  → SuiviPatient    (outcomes app)
```

One brand, one root domain, three Vercel projects. Cross-links use full URLs kept in each app's
`lib/site.ts` so staging/preview environments can point at each other.

### 3.5 Identity & accounts (later, phase 3+)

Today each app has its own lightweight auth (cookies / Prisma sessions), which is correct for V1.
The unifying concept is the **certified practitioner**: the same person appears in the website
directory, buys post-graduate access on the learning platform, and logs into SuiviPatient. When
the directory moves to Neon, make SuiviPatient's `User` + certification status the **source of
truth** and have the website read the public subset. Full SSO is a phase-4 concern, not before.

---

## 4. Institute website — information architecture

Mirrors the current Wix content so nothing is lost, reorganised into five clear entries:

```
/                      Accueil — hero, the loop (méthode → formation → praticiens → preuves), livres, actualités
/methode               La méthode R.O.P. — histoire (Ingham 1978 → R.O.P. 1998), principes
  /methode/technique     La technique (mécanorécepteurs, couches cutanées superficielles)
  /methode/cartographie  La cartographie 3D (fidèle à l'anatomie réelle)
  /methode/fondements    Les fondements théoriques (validation croisée tests ostéo/réflexo)
/formations            Vue d'ensemble + agrément formation continue n° 24450434645
  /formations/base       Formation de base — 4 week-ends de 3 jours (12 jours)
  /formations/post-gradues  Nerfs crâniens, ORL, pédiatrie, viscéro-émotionnel, uro-génital
/enseignants           Guy Boitout, Jean-Pierre Vadala, équipe enseignante
/praticiens            Annuaire des praticiens certifiés (France, Espagne) + carte
/livres                Les ouvrages Elsevier Masson + lien vers la plateforme de lecture
/recherche             L'observatoire SuiviPatient — mesurer le bénéfice patient
/institut              L'association, la mission, la gouvernance, devenir structure à mission
/articles              Blog / articles cliniques (les articles Wix migrés)
/contact               Contact + inscription formations
/mentions-legales, /confidentialite
```

**SEO migration:** map every indexed Wix URL to its new path with 301 redirects in
`next.config.ts` (e.g. `/m%C3%A9thode-reflexo-occipito-podale` → `/methode`,
`/base-reflexo-occipito-podale` → `/formations/base`, `/praticiens-rop` → `/praticiens`,
`/livres-boitout-vadala` → `/livres`, `/enseignant-boitout-rop` → `/enseignants`, …), ship
`sitemap.ts` + `robots.ts` from day 1, keep the domain.

---

## 5. Migration off Wix — cutover plan

1. **Build & deploy** the new site on Vercel under a preview domain; content parity check
   against the Wix pages (a crawl/copy of each page's text, images re-exported at full size).
2. **Forms**: contact + training-enrolment forms wired to email (Resend) — the only Wix
   "dynamic" features in use.
3. **Redirects file** covering every indexed URL (Google `site:` listing + Wix sitemap).
4. **DNS cutover**: point the apex + `www` at Vercel (low TTL the week before), verify HTTPS,
   submit the new sitemap in Search Console, monitor 404s for a month.
5. **Downgrade/cancel Wix** once Search Console shows the new pages indexed (keep the Wix
   export as archive).

Rollback is trivial at every step until DNS cutover (and even after: repoint DNS).

---

## 6. Roadmap

| Phase | Scope | Exit criterion |
|---|---|---|
| **1. Foundation** (now) | This repo: full site scaffold, fr+en content, design parity with `ROP`, redirects, sitemap | Deployed on Vercel preview, content parity with Wix |
| **2. Cutover** | Forms by email, final content review by the institute, DNS switch, Search Console | Wix cancelled |
| **3. Living directory** | Practitioner directory on Neon, admin CRUD, certification status synced from SuiviPatient concept | Directory self-managed by the institute |
| **4. One school** | Learning platform linked from every course page; Stripe payments on `ROP`; de/es/it/th content growth | A student goes from website → paid chapter without human intervention |
| **5. Evidence loop** | SuiviPatient deployed (Neon EU), pilot practitioners, aggregated outcomes published on `/recherche` | First public "measured benefits" figures |
| **6. Mission structure** | Governance content, impact reporting page fed by the observatory | Legal transformation supported by published impact data |

---

## 7. Working agreements (for humans and agents)

- Each repo keeps an agent guide (`AGENT_CONTENT_GUIDE.md` in `ROP`; this file + `README.md`
  here) describing content conventions.
- French is the canonical content language; other locales fall back to French automatically.
- Never introduce a second CSS framework — the hand-rolled charte is the design system.
- SuiviPatient data is health-adjacent: EU-hosted database, pseudonymised patients, aggregation
  rules (n ≥ 5) — never weaken these for a feature.
- Development on feature branches, deploy previews on Vercel, `main` is production.
