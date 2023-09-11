import { i18n } from '../../../i18n-config'
import { Header } from '@/components/Header'

import './globals.css'

import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <body className={outfit.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

export const metadata = {
  title: 'Bruno Silva | Personal Website',
  description: 'How to do i18n in Next.js 13 within app directory',
}