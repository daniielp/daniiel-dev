import React from 'react'
import Document, { Html, Head, Main, NextScript } from "next/document";

import ServerStyleSheets from '@mui/styles/ServerStyleSheets';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
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

  render() {
    return (
      <Html lang="da">
        <Head >
          <link rel="icon" href="/favicon.ico" />
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#f5d027" />
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

// MyDocument.getInitialProps = async (ctx) => {
//   const sheets = new ServerStyleSheets();
//   const originalRenderPage = ctx.renderPage;

//   ctx.renderPage = () => originalRenderPage({
//     enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
//   })

//   const initialProps = await Document.getInitialProps(ctx);

//   return {
//     ...initialProps,
//     styles: [
//       ...React.Children.toArray(initialProps.styles),
//       sheets.getStyleElement(),
//     ]
//   }
// }

export default MyDocument;
