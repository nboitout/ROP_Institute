import type { Metadata } from 'next'
import { renderStandardPage } from '@/lib/renderStandardPage'

export const metadata: Metadata = { title: 'Mentions légales' }

export default async function Page() {
  return renderStandardPage('mentions-legales')
}
