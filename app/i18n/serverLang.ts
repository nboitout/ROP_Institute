import { cookies } from 'next/headers'
import type { Lang } from './translations'

const LANGS: Lang[] = ['fr', 'en']

/** Type guard: is the value one of the supported languages? */
export function isLang(value: string | undefined | null): value is Lang {
  return !!value && LANGS.includes(value as Lang)
}

/**
 * Resolves the content language for a server component.
 * Same mechanism as the sibling `ROP` repo: an optional override (`?lang=`)
 * takes precedence over the persisted `lang` cookie; anything invalid falls
 * back to French, the canonical language.
 */
export async function getServerLang(override?: string): Promise<Lang> {
  if (isLang(override)) return override
  const value = (await cookies()).get('lang')?.value
  return isLang(value) ? value : 'fr'
}
