export const locales = ['en', 'vi', 'zh'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'vi'

export const isLocale = (value: string | undefined): value is Locale =>
  Boolean(value && locales.includes(value as Locale))

export const localizePath = (locale: Locale, path: string) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  if (normalizedPath === '/' || normalizedPath === '/home') return `/${locale}`
  if (locales.some((supportedLocale) => normalizedPath === `/${supportedLocale}` || normalizedPath.startsWith(`/${supportedLocale}/`))) {
    return normalizedPath
  }

  return `/${locale}${normalizedPath}`
}

export const getClientLocale = (pathname: string): Locale => {
  const [firstSegment] = pathname.split('/').filter(Boolean)
  const defaultLocale = 'vi'
  return isLocale(firstSegment) ? firstSegment : defaultLocale
}