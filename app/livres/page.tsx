import type { Metadata } from 'next'
import { renderStandardPage } from '@/lib/renderStandardPage'

export const metadata: Metadata = { title: 'Les ouvrages de référence' }

export default async function Page() {
  return renderStandardPage('livres')
}
