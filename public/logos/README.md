# Logos de reconnaissance / affiliation

Les fichiers `.svg` de ce dossier sont des **espaces réservés** (placeholders).
Remplacez chacun par le logo officiel fourni par l'organisme concerné :

| Fichier | Organisme |
|---|---|
| `qualiopi.svg` | Qualiopi — certification qualité de la formation |
| `spr.svg` | Syndicat Professionnel des Réflexologues (SPR) |
| `rien.svg` | Reflexology in Europe Nexus (RIEN) |
| `rof.svg` | Registre des Ostéopathes de France |
| `sfdo.svg` | Syndicat Français Des Ostéopathes (SFDO) |

## Comment remplacer

- **Idéal : format SVG** — déposez le fichier officiel sous le même nom
  (`qualiopi.svg`, etc.) et rien d'autre à faire.
- **Fichier PNG/JPG** — déposez-le dans ce dossier puis mettez à jour le champ
  `src` correspondant dans `content/logos.ts` (ex. `/logos/qualiopi.png`).
  Préférez un PNG à fond transparent, largeur ≥ 480 px.

## Règles d'usage

Respectez la charte graphique de chaque marque. En particulier, le logo
**Qualiopi** doit être affiché sans déformation et accompagné de la mention
légale précisant la catégorie d'action certifiée — cette mention est déjà
gérée par le site (`home.qualiopiMention` dans `app/i18n/translations.ts`).
