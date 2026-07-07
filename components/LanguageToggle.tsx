'use client'

import { useLanguage } from '@/app/i18n/LanguageContext'
import { LANG_LABELS, type Lang } from '@/app/i18n/translations'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()
  return (
    <div className="lang-select-wrap">
      <select
        className="lang-select"
        value={lang}
        onChange={(e) => setLang(e.target.value as Lang)}
        aria-label="Langue / Language"
      >
        {(Object.keys(LANG_LABELS) as Lang[]).map((l) => (
          <option key={l} value={l}>
            {LANG_LABELS[l]}
          </option>
        ))}
      </select>
    </div>
  )
}
