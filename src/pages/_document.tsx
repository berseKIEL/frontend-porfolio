import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Porfolio Exequiel Barco, Full-Stack Developer"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:title"
          content="Porfolio Full-stack Developer || Exequiel Barco"
        ></meta>
        <meta property="og:url" content=""></meta>
        <meta
          property="og:description"
          content="Porfolio Exequiel Barco, Full-Stack Developer"
        />
        <meta property="og:image" content={`/favicon/favicon.ico`}></meta>
        <meta property="og:ttl" content="604800"></meta>
        <link
          rel="icon"
          href={`/favicon/favicon.ico`}
          type="image/x-icon"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
