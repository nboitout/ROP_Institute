import type { Metadata } from 'next'
import { renderStandardPage } from '@/lib/renderStandardPage'

export const metadata: Metadata = { title: 'Les enseignants' }

export default async function Page() {
  return renderStandardPage('enseignants')
}
