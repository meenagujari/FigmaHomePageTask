import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Ekaant - Agro Tourism Retreat near Bor Tiger Reserve, Maharashtra. Experience authentic rural life amidst pristine nature and wildlife." />
        <meta property="og:title" content="Ekaant - Agro Tourism Retreat" />
        <meta property="og:description" content="Experience authentic rural life amidst pristine nature and wildlife near Bor Tiger Reserve, Maharashtra." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}