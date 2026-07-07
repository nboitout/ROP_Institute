import type { Metadata } from 'next'
import { renderStandardPage } from '@/lib/renderStandardPage'

export const metadata: Metadata = { title: 'Formation R.O.P. de base' }

export default async function Page() {
  return renderStandardPage('formation-base', [{ href: '/formations', navKey: 'formations' }])
}
