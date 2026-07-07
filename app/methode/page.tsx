import type { Metadata } from 'next'
import { renderStandardPage } from '@/lib/renderStandardPage'

export const metadata: Metadata = { title: 'La méthode R.O.P.' }

export default async function Page() {
  return renderStandardPage('methode')
}
