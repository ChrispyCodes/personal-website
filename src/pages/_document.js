import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <title>Christophers Portfolio</title>
          {/* <meta name="author" content="Christopher Gaynor"/>
  <meta name="description" content=" Development Portfolio"/>
  <meta property="og:title" content="Christophers Portfolio"/>
  <meta property="og:description" content="portfolio"/>
  <meta property="og:image" content="/some-image.png"/>
  <meta property="og:url" content="/this-page.html"/>
  <meta property="og:site_name" content="Your Site Name"/>
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:image:alt" content="image description"/> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
