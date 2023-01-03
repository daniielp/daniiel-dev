import { AppProps, type AppType } from "next/app";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Header from "../components/Header";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default trpc.withTRPC(MyApp);
