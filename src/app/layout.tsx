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
  description: 'My personal website for information about me and my career.',
}
