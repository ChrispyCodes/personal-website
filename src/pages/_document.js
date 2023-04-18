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
          <meta name="author" content="Christopher Gaynor" />
          <meta name="description" content="Chris' Portfolio Site" />
          <meta property="og:title" content="Chris' Portfolio" />
          <meta
            property="og:description"
            content="Software developer portfolio to showcase skills & experience"
          />
          <meta
            property="og:image"
            content="/public/images/PortfolioLanding.png"
          />
          <meta property="og:url" content="/chrisgo.me" />
          <meta property="og:site_name" content="Chris' Portfolio" />
          <meta
            name="twitter:card"
            content="/public/images/PortfolioLanding.png"
          />
          <meta name="twitter:image:alt" content="Chris' Portforlio Site" />
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
