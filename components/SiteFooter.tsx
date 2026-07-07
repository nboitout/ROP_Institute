'use client'

import Link from 'next/link'
import { useLanguage } from '@/app/i18n/LanguageContext'

export default function SiteFooter() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="f-grid">
        <div>
          <div className="f-brand">
            Institut <em>R.O.P.</em>
          </div>
          <p className="f-tag">{t.footer.tag}</p>
        </div>
        <div className="f-col">
          <h4>{t.footer.colMethode}</h4>
          <Link href="/methode/technique">{t.footer.linkTechnique}</Link>
          <Link href="/methode/cartographie">{t.footer.linkCarto}</Link>
          <Link href="/methode/fondements">{t.footer.linkFondements}</Link>
          <Link href="/livres">{t.footer.linkLivres}</Link>
        </div>
        <div className="f-col">
          <h4>{t.footer.colInstitut}</h4>
          <Link href="/formations">{t.footer.linkFormations}</Link>
          <Link href="/enseignants">{t.footer.linkEnseignants}</Link>
          <Link href="/praticiens">{t.footer.linkPraticiens}</Link>
          <Link href="/contact">{t.footer.linkContact}</Link>
        </div>
        <div className="f-col">
          <h4>{t.footer.colEco}</h4>
          <a href="https://guy-boitout.com" rel="noopener">
            {t.footer.linkLecture}
          </a>
          <Link href="/recherche">{t.footer.linkRecherche}</Link>
        </div>
      </div>
      <div className="f-bot">
        <span>
          © {year} {t.footer.rights}
        </span>
        <span>
          <Link href="/mentions-legales">{t.footer.legal}</Link>
          {' · '}
          <Link href="/confidentialite">{t.footer.privacy}</Link>
        </span>
      </div>
    </footer>
  )
}
