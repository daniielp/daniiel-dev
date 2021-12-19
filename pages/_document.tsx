import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="da">
        <Head>
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

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createCache({key: 'css'});
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) =>
            function EnhanceApp(props) {
              return <App {...props} />;
            },
      });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style: any) => (
      <style
          data-emotion={`${style.key} ${style.ids.join(' ')}`}
          key={style.key}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: style.css }}
      />
  ));
  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
  };
};

export default MyDocument;
