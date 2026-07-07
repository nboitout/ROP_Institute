import type { Metadata } from 'next'
import { renderStandardPage } from '@/lib/renderStandardPage'

export const metadata: Metadata = { title: 'Les post-gradués' }

export default async function Page() {
  return renderStandardPage('post-gradues', [{ href: '/formations', navKey: 'formations' }])
}
