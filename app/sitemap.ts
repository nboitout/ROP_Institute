import type { MetadataRoute } from 'next'

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.reflexo-occipitopodale.com'

const ROUTES = [
  '',
  '/methode',
  '/methode/technique',
  '/methode/cartographie',
  '/methode/fondements',
  '/formations',
  '/formations/base',
  '/formations/post-gradues',
  '/enseignants',
  '/praticiens',
  '/livres',
  '/recherche',
  '/institut',
  '/contact',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE}${route}`,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
