import type { Metadata } from 'next'
import { renderStandardPage } from '@/lib/renderStandardPage'

export const metadata: Metadata = { title: 'La cartographie 3D' }

export default async function Page() {
  return renderStandardPage('cartographie', [{ href: '/methode', navKey: 'methode' }])
}
