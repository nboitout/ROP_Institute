'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { translations, type Lang } from './translations'

const LANGS: Lang[] = ['fr', 'en']

type LanguageContextValue = {
  lang: Lang
  t: typeof translations['fr']
  setLang: (l: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'fr',
  t: translations.fr,
  setLang: () => {},
})

function persistLang(l: Lang) {
  if (typeof document !== 'undefined') {
    // 1 year, readable by server components on subsequent navigations
    document.cookie = `lang=${l}; path=/; max-age=31536000; samesite=lax`
  }
}

export function LanguageProvider({
  children,
  initialLang = 'fr',
}: {
  children: React.ReactNode
  initialLang?: Lang
}) {
  const [lang, setLangState] = useState<Lang>(initialLang)
  const router = useRouter()

  // On mount, sync with the cookie in case the server-rendered initialLang
  // was stale (e.g. bfcache restore after a language change in another tab).
  useEffect(() => {
    const match = document.cookie.match(/(?:^|; )lang=([^;]+)/)
    if (match) {
      const cookieLang = match[1] as Lang
      if (LANGS.includes(cookieLang) && cookieLang !== lang) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLangState(cookieLang)
      }
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  function setLang(l: Lang) {
    setLangState(l)
    persistLang(l)
    // Bust the router cache so server components re-render in the new language.
    router.refresh()
  }

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
