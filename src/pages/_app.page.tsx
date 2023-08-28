import type { AppProps } from 'next/app'

import '../styles/global.css'

import { DefaultSeo } from 'next-seo'

import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import pt from "../locale/pt.json";
import en from "../locale/en.json";

const messages = {
  pt,
  en,
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { locale } = useRouter()

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
      <IntlProvider locale={locale || ''} messages={messages[locale as keyof typeof messages]}>
        <Component {...pageProps} />
      </IntlProvider>
    </>
  )
}
