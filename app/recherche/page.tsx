import type { Metadata } from 'next'
import { renderStandardPage } from '@/lib/renderStandardPage'

export const metadata: Metadata = { title: 'La recherche et le suivi patient' }

export default async function Page() {
  return renderStandardPage('recherche')
}
