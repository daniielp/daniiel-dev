import { AppProps, type AppType } from "next/app";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="ed830906-8ce2-4f30-a67a-2f0a4f263f4e" data-blockingmode="auto" type="text/javascript"></script>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default trpc.withTRPC(MyApp);
