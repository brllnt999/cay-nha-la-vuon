import PageTemplate, { generateMetadata as generatePageMetadata } from './[locale]/[slug]/page'

export default function LegacyHomePage() {
  return <PageTemplate params={Promise.resolve({ locale: 'en', slug: 'home' })} />
}

export function generateMetadata() {
  return generatePageMetadata({ params: Promise.resolve({ locale: 'en', slug: 'home' }) })
}
