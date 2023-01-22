import { AppProps, type AppType } from "next/app";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default trpc.withTRPC(MyApp);
