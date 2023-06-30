import About from "@/components/About";
import Daniiel from "@/components/Daniiel";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default async function IndexPage() {
    return (
        <>
            <Hero />
            <Projects />
            <About />
            <Daniiel />
        </>
    )
}