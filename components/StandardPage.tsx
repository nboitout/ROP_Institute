import Link from 'next/link'
import type { StandardPageContent, PageBlock } from '@/content/types'

function Block({ block }: { block: PageBlock }) {
  switch (block.type) {
    case 'para':
      return <p dangerouslySetInnerHTML={{ __html: block.text }} />
    case 'sub':
      return <h3>{block.text}</h3>
    case 'bullets':
      return (
        <ul className="std-bullets">
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      )
    case 'callout':
      return (
        <div className={`callout${block.tone === 'gold' ? ' gold' : ''}`}>
          {block.label && <div className="lbl">{block.label}</div>}
          <p dangerouslySetInnerHTML={{ __html: block.text }} />
        </div>
      )
    case 'table':
      return (
        <table className="info-table">
          <thead>
            <tr>
              {block.headers.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} dangerouslySetInnerHTML={{ __html: cell }} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )
  }
}

export default function StandardPage({
  content,
  crumbs,
  notice,
}: {
  content: StandardPageContent
  crumbs: { href?: string; label: string }[]
  notice?: string
}) {
  return (
    <main>
      <div className="page-hero">
        <div className="crumbs">
          {crumbs.map((c, i) => (
            <span key={i}>
              {i > 0 && ' / '}
              {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
            </span>
          ))}
        </div>
        <h1 dangerouslySetInnerHTML={{ __html: content.title }} />
        {content.intro && <p className="intro">{content.intro}</p>}
      </div>
      <div className="page-body">
        {notice && (
          <div className="callout gold">
            <p>{notice}</p>
          </div>
        )}
        {content.sections.map((section) => (
          <div className="std-section" key={section.id} id={section.id}>
            {section.title && <h2>{section.title}</h2>}
            {section.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        ))}
        {content.cta && (
          <div className="page-cta">
            <p>{content.cta.text}</p>
            <Link href={content.cta.href} className="btn b-gold">
              {content.cta.label}
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
