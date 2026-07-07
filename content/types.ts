// Modèle de contenu des pages éditoriales.
// Même philosophie que le repo ROP : contenu typé en TypeScript, français
// canonique, repli automatique vers le français pour les locales manquantes.

export type PageBlock =
  | { type: 'para'; text: string }                       // peut contenir <em> / <strong>
  | { type: 'sub'; text: string }                        // <h3>
  | { type: 'bullets'; items: string[] }                 // liste à puces (items peuvent contenir <strong>)
  | { type: 'callout'; label?: string; text: string; tone?: 'sage' | 'gold' }
  | { type: 'table'; headers: string[]; rows: string[][] }

export type PageSection = {
  id: string        // ancre stable — identique dans toutes les langues
  title?: string
  blocks: PageBlock[]
}

export type StandardPageContent = {
  title: string     // peut contenir <em>
  intro?: string
  sections: PageSection[]
  cta?: { text: string; href: string; label: string }
}

export type PageKey =
  | 'methode'
  | 'technique'
  | 'cartographie'
  | 'fondements'
  | 'formations'
  | 'formation-base'
  | 'post-gradues'
  | 'enseignants'
  | 'praticiens'
  | 'livres'
  | 'recherche'
  | 'institut'
  | 'contact'
  | 'mentions-legales'
  | 'confidentialite'
