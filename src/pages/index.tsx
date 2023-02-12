import { type NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Daniiel from "../components/Daniiel";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home: NextPage = () => {
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
        <Daniiel />
      </main>
    </>
  );
};

export default Home;
