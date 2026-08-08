import PageTemplate, { generateMetadata as generatePageMetadata } from './[slug]/page'

type Args = {
  params: Promise<{ locale: 'en' | 'vi' | 'zh' }>
}

export default async function LocaleHomePage({ params }: Args) {
  const { locale } = await params

  return <PageTemplate params={Promise.resolve({ locale, slug: 'home' })} />
}

export async function generateMetadata({ params }: Args) {
  const { locale } = await params

  return generatePageMetadata({ params: Promise.resolve({ locale, slug: 'home' }) })
}
