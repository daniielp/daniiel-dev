import { Analytics } from "@vercel/analytics/react";

function RouteWithLayout(props: any) {
  const { Layout, Component, pageProps } = props;
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  );
}

export default RouteWithLayout;
