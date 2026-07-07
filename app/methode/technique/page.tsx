import type { Metadata } from 'next'
import { renderStandardPage } from '@/lib/renderStandardPage'

export const metadata: Metadata = { title: 'La technique' }

export default async function Page() {
  return renderStandardPage('technique', [{ href: '/methode', navKey: 'methode' }])
}
