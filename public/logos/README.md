# Logos de reconnaissance / affiliation

Les fichiers `.png` de ce dossier sont des **espaces réservés** (placeholders).
Remplacez chacun par le logo officiel fourni par l'organisme, **en conservant
le même nom de fichier** :

| Fichier | Organisme |
|---|---|
| `qualiopi.png` | Qualiopi — certification qualité de la formation |
| `spr.png` | Syndicat Professionnel des Réflexologues (SPR) |
| `rien.png` | Reflexology in Europe Nexus (RIEN) |
| `rof.png` | Registre des Ostéopathes de France |
| `sfdo.png` | Syndicat Français Des Ostéopathes (SFDO) |

## Comment remplacer

Déposez le fichier officiel dans ce dossier sous le **même nom** (`qualiopi.png`,
etc.) — rien d'autre à faire, il s'affiche automatiquement.

- Format **PNG à fond transparent** de préférence, largeur **≥ 400 px** (les
  écrans « retina » affichent le logo à ~180 px : viser 2× pour rester net).
- Éviter le JPG (pas de transparence : halo blanc sur le fond parchemin).
- Un logo officiel en **SVG** convient aussi : déposez-le puis changez
  l'extension du `src` correspondant dans `content/logos.ts` (ex. `.svg`).

## Liens

Chaque logo pointe vers le site officiel de l'organisme (défini par `href`
dans `content/logos.ts`). Les URL actuelles sont **présumées** et marquées
« à vérifier » : confirmez-les avant la mise en production.

## Règles d'usage

Respectez la charte graphique de chaque marque. En particulier, le logo
**Qualiopi** doit être affiché sans déformation et accompagné de la mention
légale précisant la catégorie d'action certifiée — cette mention est déjà
gérée par le site (`home.qualiopiMention` dans `app/i18n/translations.ts`).
