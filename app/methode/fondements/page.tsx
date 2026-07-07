import type { Metadata } from 'next'
import { renderStandardPage } from '@/lib/renderStandardPage'

export const metadata: Metadata = { title: 'Les fondements théoriques' }

export default async function Page() {
  return renderStandardPage('fondements', [{ href: '/methode', navKey: 'methode' }])
}
