import StandardPage from '@/components/StandardPage'
import { getPage } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import type { PageKey } from '@/content/types'

type NavKey = keyof typeof translations['fr']['nav']

/**
 * Shared server-side renderer for editorial pages: resolves the visitor's
 * language, loads the localized content (French fallback), builds the
 * breadcrumb trail and shows a notice when the page falls back to French.
 */
export async function renderStandardPage(
  key: PageKey,
  parents: { href: string; navKey: NavKey }[] = [],
) {
  const lang = await getServerLang()
  const { content, contentLang } = getPage(key, lang)
  const t = translations[lang]
  const crumbs = [
    { href: '/', label: t.common.home },
    ...parents.map((p) => ({ href: p.href, label: t.nav[p.navKey] })),
    { label: content.title.replace(/<[^>]+>/g, '') },
  ]
  const notice = contentLang !== lang ? t.common.langNotice : undefined
  return <StandardPage content={content} crumbs={crumbs} notice={notice} />
}
