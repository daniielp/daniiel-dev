import About from "@/components/About";
import Daniiel from "@/components/Daniiel";
import Hero from "@/components/elements/hero"
import Projects from "@/components/Projects";

export default async function IndexPage() {
    return (
        <>

            <Hero.HeroGlobe 
                heading={<><span className="block">Frontend udvikler </span><span className="block text-indigo-400">baseret i Århus</span></>}
                description="Med en kombination af uddannelsen som webudvikler, og med et skarpt øje for design og UI/UX, skaber vækst og gør mig i stand til at arbejde helhjertet med frontend-development. På den måde styrker jeg brandets position med at være de bedste når det kommer til frontend-development, og samtidig skaber værdifulde resultater, som i sidste ende giver bedre købeklare leads."
                cta={{
                    heading: "Daniiel Pedersen",
                    description: "Læs mere omkring mig",
                    url: "/#about"
                }}
            />
            <Projects />
            <About />
            <Daniiel />
        </>
    )
}