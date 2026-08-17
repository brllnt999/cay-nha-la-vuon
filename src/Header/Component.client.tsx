'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import type { Header } from '@/payload-types'
import { Logo } from '@/components/Logo/Logo'
import { SelectWithFlagsDemo } from '@/components/LanguageSelector'
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
    <header role="banner" {...(theme ? { 'data-theme': theme } : {})}>
      <div className="flex items-center justify-center gap-6 md:h-[16.5vw] -mb-[15vw]">
        <Link href="/" className="block">
          <Logo loading="eager" priority="high" className="h-[80px] w-auto" />
        </Link>
        {/* <LanguageSelector /> */}
        <SelectWithFlagsDemo />
        {/* <span className="ml-2 text-lg font-semibold">Cây Nhà Lá Vườn</span> */}
      </div>
    </header>
  )
}
