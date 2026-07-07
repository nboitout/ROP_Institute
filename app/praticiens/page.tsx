import type { Metadata } from 'next'
import { renderStandardPage } from '@/lib/renderStandardPage'

export const metadata: Metadata = { title: 'Les praticiens certifiés' }

export default async function Page() {
  return renderStandardPage('praticiens')
}
