import type { AppProps } from 'next/app'

import '../styles/global.css'

import { DefaultSeo } from 'next-seo'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://www.brunosilvarodrigues.com.br',
          siteName: 'Bruno Silva | Personal Website',
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
