import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <body className={outfit.className}>{children}</body>
    </html>
  )
}

export const metadata = {
  title: 'Bruno Silva | Personal Website',
  description: 'How to do i18n in Next.js 13 within app directory',
}
