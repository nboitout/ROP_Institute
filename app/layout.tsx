import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from './i18n/LanguageContext'
import { getServerLang } from './i18n/serverLang'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

// Polices auto-hébergées (pas d'appel à un CDN tiers), comme sur SuiviPatient.
const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})
const sans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.reflexo-occipitopodale.com'),
  title: {
    default: 'Institut R.O.P. — Réflexothérapie Occipito-Podale',
    template: '%s · Institut R.O.P.',
  },
  description:
    'La Réflexothérapie Occipito-Podale : une cartographie réflexe 3D fidèle à l\'anatomie réelle, enseignée aux professionnels de santé. Formations, praticiens certifiés, ouvrages et recherche.',
}

export const viewport: Viewport = {
  themeColor: '#f5f0e8',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = await getServerLang()
  return (
    <html lang={lang}>
      <body className={`${sans.variable} ${serif.variable}`}>
        <LanguageProvider initialLang={lang}>
          <SiteHeader />
          {children}
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  )
}
