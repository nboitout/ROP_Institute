// Logos de reconnaissance / affiliation affichés sur la page d'accueil.
//
// IMPORTANT — les fichiers dans /public/logos/ sont des ESPACES RÉSERVÉS.
// Remplacer chaque fichier par le logo officiel fourni par l'organisme, en
// conservant le même nom de fichier (les officiels sont souvent des .png :
// dans ce cas, déposer le .png et mettre à jour l'extension dans `src` ci-dessous).
// Respecter les chartes d'usage de chaque marque (notamment Qualiopi).

export type LogoItem = {
  src: string
  name: string
  href?: string
  // Qualiopi impose l'affichage d'une mention légale à proximité du logo.
  qualiopi?: boolean
}

export const logos: LogoItem[] = [
  { src: '/logos/qualiopi.svg', name: 'Qualiopi — processus certifié', qualiopi: true },
  { src: '/logos/spr.svg', name: 'Syndicat Professionnel des Réflexologues (SPR)' },
  { src: '/logos/rien.svg', name: 'Reflexology in Europe Nexus (RIEN)' },
  { src: '/logos/rof.svg', name: 'Registre des Ostéopathes de France' },
  { src: '/logos/sfdo.svg', name: 'Syndicat Français Des Ostéopathes (SFDO)' },
]
