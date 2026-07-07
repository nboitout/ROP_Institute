import type { Lang } from '@/app/i18n/translations'
import type { PageKey, StandardPageContent } from './types'
import { pagesFr } from './pages.fr'
import { pagesEn } from './pages.en'

const registry: Record<Lang, Record<PageKey, StandardPageContent>> = {
  fr: pagesFr,
  en: pagesEn,
}

/**
 * Returns the page content for the requested language, falling back to
 * French (the canonical language) when the locale is missing. `contentLang`
 * tells the caller which language was actually served, so the UI can show
 * a fallback notice.
 */
export function getPage(
  key: PageKey,
  lang: Lang,
): { content: StandardPageContent; contentLang: Lang } {
  const localized = registry[lang]?.[key]
  if (localized) return { content: localized, contentLang: lang }
  return { content: registry.fr[key], contentLang: 'fr' }
}
