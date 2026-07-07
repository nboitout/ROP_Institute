'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/app/i18n/LanguageContext'
import LanguageToggle from './LanguageToggle'

export default function SiteHeader() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: '/methode', label: t.nav.methode },
    { href: '/formations', label: t.nav.formations },
    { href: '/enseignants', label: t.nav.enseignants },
    { href: '/praticiens', label: t.nav.praticiens },
    { href: '/livres', label: t.nav.livres },
    { href: '/recherche', label: t.nav.recherche },
    { href: '/institut', label: t.nav.institut },
  ]

  return (
    <>
      <header className="site-header">
        <Link href="/" className="h-logo">
          Institut <strong>R.O.P.</strong>
        </Link>
        <nav>
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="n-cta">
            {t.nav.contact}
          </Link>
        </nav>
        <div className="h-right">
          <LanguageToggle />
          <button
            className="h-burger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </header>
      <div className={`mobile-nav${open ? ' open' : ''}`} key={pathname}>
        {[...links, { href: '/contact', label: t.nav.contact }].map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
      </div>
    </>
  )
}
