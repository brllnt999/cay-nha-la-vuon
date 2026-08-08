'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import type { Header } from '@/payload-types'
import { Logo } from '@/components/Logo/Logo'
import { LanguageSelector } from '@/components/LanguageSelector'
import { useWindowScroll } from 'react-use'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const [theme, setTheme] = useState<string | null>(headerTheme ?? null)
  const pathname = usePathname()
  const { y: scrollY } = useWindowScroll()
  const isScrolled = scrollY > 40

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      role="banner"
      className="flex  items-center justify-center w-full gap-4 p-4 z-50 "
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <LanguageSelector />
        </div>
        <Link href="/" className="block h-10 w-auto">
          <Logo loading="eager" priority="high" />
        </Link>
        {/* <span className="ml-2 text-lg font-semibold">Cây Nhà Lá Vườn</span> */}
      </div>
    </header>
  )
}
