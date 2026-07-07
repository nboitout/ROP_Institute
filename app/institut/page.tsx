import type { Metadata } from 'next'
import { renderStandardPage } from '@/lib/renderStandardPage'

export const metadata: Metadata = { title: "L'institut" }

export default async function Page() {
  return renderStandardPage('institut')
}
