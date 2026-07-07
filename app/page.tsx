'use client'

import Link from 'next/link'
import { useLanguage } from './i18n/LanguageContext'

export default function HomePage() {
  const { t } = useLanguage()
  const h = t.home

  return (
    <main style={{ paddingTop: 0 }}>
      {/* HERO */}
      <div className="home-hero" style={{ marginTop: 62 }}>
        <div className="hero-orb" aria-hidden />
        <span className="hero-badge">{h.badge}</span>
        <h1 dangerouslySetInnerHTML={{ __html: h.title }} />
        <p className="hero-sub">{h.sub}</p>
        <div className="hero-ctas">
          <Link href="/methode" className="btn b-gold">
            {h.cta1}
          </Link>
          <Link href="/formations" className="btn b-ghost">
            {h.cta2}
          </Link>
        </div>
        <div className="hero-facts">
          {h.facts.map((f, i) => (
            <div className="hero-fact" key={i}>
              <strong>{f.n}</strong>
              <span>{f.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* THE LOOP */}
      <section>
        <div className="sec-head">
          <div className="lbl">{h.loopLbl}</div>
          <h2 dangerouslySetInnerHTML={{ __html: h.loopTitle }} />
          <p>{h.loopIntro}</p>
        </div>
        <div className="card-grid">
          {h.loopCards.map((c) => (
            <Link href={c.href} className="card" key={c.href}>
              <div className="num">{c.num}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <span className="card-link">{c.link} →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* METHOD TEASER */}
      <section className="parch">
        <div className="sec-head">
          <div className="lbl">{h.methodeLbl}</div>
          <h2 dangerouslySetInnerHTML={{ __html: h.methodeTitle }} />
          <p>{h.methodeText1}</p>
          <p style={{ marginTop: 12 }}>{h.methodeText2}</p>
        </div>
        <Link href="/methode" className="btn b-sage">
          {h.methodeBtn}
        </Link>
      </section>

      {/* BOOKS */}
      <section>
        <div className="sec-head">
          <div className="lbl">{h.livresLbl}</div>
          <h2 dangerouslySetInnerHTML={{ __html: h.livresTitle }} />
        </div>
        <div className="book-row">
          <div className="book-card">
            <div className="vol">Tome 1 · Elsevier Masson · 2015</div>
            <h3>Réflexothérapie occipito-podale</h3>
          </div>
          <div className="book-card">
            <div className="vol">Tome 2 · Elsevier Masson · 2021</div>
            <h3>Réflexothérapie occipito-podale et système neuro-méningé</h3>
          </div>
          <div className="book-card">
            <div className="vol">Tome 3 · à paraître</div>
            <h3>Le système viscéral</h3>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 26 }}>
          <Link href="/livres" className="btn b-out">
            {h.livresBtn}
          </Link>
          <a href="https://guy-boitout.com" rel="noopener" className="btn b-gold">
            {h.livresRead}
          </a>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="dark">
        <div className="sec-head">
          <div className="lbl g">{h.ecoLbl}</div>
          <h2 className="on-dk" dangerouslySetInnerHTML={{ __html: h.ecoTitle }} />
        </div>
        <div className="eco-grid">
          {h.ecoCards.map((c) =>
            c.href.startsWith('http') ? (
              <a href={c.href} rel="noopener" className="eco-card" key={c.href}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <span className="card-link">{c.link} →</span>
              </a>
            ) : (
              <Link href={c.href} className="eco-card" key={c.href}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <span className="card-link">{c.link} →</span>
              </Link>
            ),
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="sage" style={{ textAlign: 'center' }}>
        <div className="lbl g ctr">{h.ctaLbl}</div>
        <h2 className="on-dk" style={{ maxWidth: 680, margin: '0 auto 24px' }}>
          {h.ctaTitle}
        </h2>
        <Link href="/contact" className="btn b-gold">
          {h.ctaBtn}
        </Link>
      </section>
    </main>
  )
}
