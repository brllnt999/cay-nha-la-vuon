'use client'

import { getClientLocale } from '@/utilities/locales'
import { usePathname } from 'next/navigation'

const logos = {
  vi: 'Cây cỏ Việt Nam',
  en: 'Vietnam Wild Roses',
  zh: '越南野花',
}

export const Logos = () => {
  const pathname = usePathname()
  const currentLocale = getClientLocale(pathname)
  return (
    <p
      className={`text-2xl font-bold leading-none ${currentLocale === 'zh' ? 'ma-shan-zheng-regular' : ''}`}
    >
      {logos[currentLocale as keyof typeof logos] || logos.vi}
    </p>
  )
}
