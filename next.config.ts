// Deployment target: Vercel (https://vercel.com)
import type { NextConfig } from 'next'

const isDev = process.env.NODE_ENV !== 'production'
const scriptSrc = ["'self'", "'unsafe-inline'", ...(isDev ? ["'unsafe-eval'"] : [])].join(' ')
const connectSrc = ["'self'", ...(isDev ? ['ws:', 'wss:'] : [])].join(' ')

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      `script-src ${scriptSrc}`,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data:",
      `connect-src ${connectSrc}`,
      "frame-ancestors 'none'",
    ].join('; '),
  },
]

// 301 des URLs indexées de l'ancien site Wix vers la nouvelle arborescence.
// Les sources accentuées doivent être percent-encodées (exigence Next.js).
// À vérifier contre le sitemap Wix complet avant la bascule DNS (cf. ECOSYSTEM.md §5).
const wixRedirects = [
  { source: '/accueil', destination: '/' },
  { source: encodeURI('/méthode-reflexo-occipito-podale'), destination: '/methode' },
  { source: '/technique-reflexo-occipito-podale', destination: '/methode/technique' },
  { source: '/cartographie-reflexo-occipitopodale', destination: '/methode/cartographie' },
  { source: '/concept-scientifique-occipitopodale', destination: '/methode/fondements' },
  { source: encodeURI('/formations-réflexo-occipito-podale'), destination: '/formations' },
  { source: '/base-reflexo-occipito-podale', destination: '/formations/base' },
  { source: encodeURI('/post-gradué-nerfs-craniens-rop'), destination: '/formations/post-gradues' },
  { source: encodeURI('/post-gradué-pathologies-orl-rop'), destination: '/formations/post-gradues' },
  { source: encodeURI('/post-gradué-uro-génital-réflexo-occipito-podale'), destination: '/formations/post-gradues' },
  { source: encodeURI('/post-gradue-viscero-émotionnel-rop'), destination: '/formations/post-gradues' },
  { source: '/enseignant-boitout-rop', destination: '/enseignants' },
  { source: '/praticiens-rop', destination: '/praticiens' },
  { source: '/livres-boitout-vadala', destination: '/livres' },
  { source: encodeURI('/réflexologie-problèmes-articulaires'), destination: '/methode' },
]

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  },
  async redirects() {
    return wixRedirects.map((r) => ({ ...r, permanent: true }))
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
