import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Created to Invade." />
        <meta property="og:image" content="/og-image.png" />
        <meta
          property="og:description"
          content="Invade is a crowdsourced security testing platform, leveraging automation and an elite crowd of hackers to deliver faster, better and cheaper security testing for enterprises. Utilizing data to drive security testing and figure out bug classes in an industry specific verticals."
        />
        <meta property="og:type" content="website" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://invadehq.io/" />
        <meta property="twitter:title" content="Created to Invade." />
        <meta
          property="twitter:description"
          content="Invade is a crowdsourced security testing platform, leveraging automation and an elite crowd of hackers to deliver faster, better and cheaper security testing for enterprises. Utilizing data to drive security testing and figure out bug classes in an industry specific verticals."
        />
        <meta property="twitter:image" content="/og-image.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
