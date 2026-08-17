import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { SelectWithFlagsDemo } from '@/components/LanguageSelector'
import { Logos } from './Logos'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer className="fixed flex items-center justify-start bottom-0 left-0 z-50 bg-transparent -rotate-90 origin-top-left">
      {/* <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <Link className="flex items-center" href="/">
          <Logo />
        </Link>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <ThemeSelector />
          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
          </nav>
        </div>
      </div> */}
      <div className="flex items-center justify-center gap-2 md:gap-4 md:h-[16.5vw] -mb-[15vw] pl-4 md:pl-8">
        {/* <Logo
            loading="eager"
            priority="high"
            className="h-[30px] md:h-[60px] lg:h-[80px] w-auto"
          /> */}
        {/* <LanguageSelector /> */}
        <Logos />
        <SelectWithFlagsDemo />
        {/* <span className="ml-2 text-lg font-semibold">Cây Nhà Lá Vườn</span> */}
      </div>
      {/* <div>Home</div> */}
    </footer>
  )
}
const logos = [
  {
    value: 'vi',
    logo: 'Cây Cỏ Việt Nam',
  },
  {
    value: 'zh',
    logo: '越南野花',
  },
  {
    value: 'en',
    logo: 'VN - Wild Roses',
  },
]
