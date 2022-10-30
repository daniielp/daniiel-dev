import Hero from '../components/Hero'
import Experience from '../components/Tabs/Experience'
import Head from 'next/head'
import Skills from '../components/Tabs/Skills'
import History from '../components/History'


export default function about() {
    return (
        <>
            <Head>
                <title>Hvem er Daniel Pedersen? - daniiel.dev</title>
                <meta name="description" content="Daniel Pedersen - freelance web developer og designer. Jeg hjælper små og mellemstore virksomheder med at skabe succes og vækst gennem skræddersyet digitale løsninger." />
            </Head>
            <main>
                <Hero />
                <Experience />
                <Skills />
                <History />
            </main>
        </>
    )
}

