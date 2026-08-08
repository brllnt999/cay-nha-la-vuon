import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

export async function Header() {
  const headerData = await getCachedGlobal('header', 1)()

  return (
    <div className="fixed bottom-0 left-0 z-50 bg-transparent -rotate-90 origin-top-left">
      <HeaderClient data={headerData} />
    </div>
  )
}
