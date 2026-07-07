// Logos de reconnaissance / affiliation affichés sur la page d'accueil.
//
// IMPORTANT — les fichiers dans /public/logos/ sont des ESPACES RÉSERVÉS.
// Remplacer chaque fichier par le logo officiel fourni par l'organisme.
//   • Format idéal : SVG officiel (vectoriel, net à toute taille, se recolore
//     proprement pour l'effet niveaux-de-gris → couleur au survol).
//   • À défaut : PNG à fond TRANSPARENT, largeur ≥ 400 px (éviter le JPG).
// On peut mélanger les formats : chaque entrée porte son propre `src`.
// Pour un PNG, changer simplement l'extension du `src` ci-dessous
// (ex. '/logos/qualiopi.png'). Respecter la charte d'usage de chaque marque.
//
// ⚠️ Les URL `href` ci-dessous sont les sites officiels présumés : À VÉRIFIER
// avant la mise en production (ne pas publier un lien erroné).

export type LogoItem = {
  src: string
  name: string
  href?: string
  // Qualiopi impose l'affichage d'une mention légale à proximité du logo.
  qualiopi?: boolean
}

export const logos: LogoItem[] = [
  {
    src: '/logos/qualiopi.png',
    name: 'Qualiopi — processus certifié',
    href: 'https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation',
    qualiopi: true,
  },
  {
    src: '/logos/spr.png',
    name: 'Syndicat Professionnel des Réflexologues (SPR)',
    href: 'https://www.sp-reflexologues.org', // à vérifier
  },
  {
    src: '/logos/rien.png',
    name: 'Reflexology in Europe Nexus (RIEN)',
    href: 'https://reflexology-europe.org', // à vérifier
  },
  {
    src: '/logos/rof.png',
    name: 'Registre des Ostéopathes de France',
    href: 'https://www.osteopathie.org', // à vérifier
  },
  {
    src: '/logos/sfdo.png',
    name: 'Syndicat Français Des Ostéopathes (SFDO)',
    href: 'https://www.osteopathe-syndicat.fr', // à vérifier
  },
]
