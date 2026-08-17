import type { Metadata } from 'next'

import React from 'react'

import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import { getServerSideURL } from '@/utilities/getURL'
import { GridPattern } from '@/components/ui/grid-pattern'
import { Footer } from '@/Footer/Component'

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string; slug: string }
}) {
  await draftMode()
  const { locale } = await params
  console.log(locale ? locale : 'no cloale')
  return (
    <article className={`${locale === 'zh' ? 'ma-shan-zheng-regular' : ''}`}>
      <GridPattern className="absolute inset-0 z-0 h-full w-full" />
      <div className="relative z-10">{children}</div>
    </article>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
