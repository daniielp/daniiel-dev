import React from 'react'
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';

import theme from '../utils/theme'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const { pathname } = ctx;
    const lang = pathname.startsWith("/da") ? "da" : "en";
    return { ...initialProps, lang };
  }

  render() {
    const { lang } = this.props;
    return (
      <Html lang={lang}>
        <Head >
          <link rel="icon" href="/favicon.ico" />
          <meta charSet="utf-8" />
          <meta name="theme-color" content={theme.palette.primary.main} />
        </Head>
        <body>
          <Main />
          <div>
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
  })

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ]
  }
}

export default MyDocument;
