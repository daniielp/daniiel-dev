import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Stats from "../components/Stats";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from trpc" });

  return (
    <>
      <Head>
        <title>Daniel Pedersen - Fullstack Webdeveloper</title>
        <meta
          name="description"
          content="With a background as a web developer and a good eye to UI/UX. Daniel Pedersen create groth and is dedicated to frontend development."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        {/* <Stats /> */}
        <Projects />
        <About />
      </main>
    </>
  );
};

export default Home;
