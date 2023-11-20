import About from "@/components/About";
import Daniiel from "@/components/Daniiel";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default async function IndexPage() {
    return (
        <>
            <Hero
                heading={<><span className="block">Frontend udvikler </span><span className="block text-indigo-400">baseret i Århus</span></>}
                description="Med en kombination af uddannelsen som webudvikler, og med et skarpt øje for design og UI/UX, skaber vækst og gør mig i stand til at arbejde helhjertet med frontend-development. På den måde styrker jeg brandets position med at være de bedste når det kommer til frontend-development, og samtidig skaber værdifulde resultater, som i sidste ende giver bedre købeklare leads."
                cta={<div className="hidden sm:mb-5 sm:flex sm:justify-center lg:justify-start">
                    <Link
                        href="/#about"
                        className="flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                    >
                        <span className="rounded-full bg-indigo-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                            Daniiel Pedersen
                        </span>
                        <span className="ml-4 text-sm">Læs mere omkring mig</span>
                        <ChevronRightIcon className="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                    </Link>
                </div>}
            />
            <Projects />
            <About />
            <Daniiel />
        </>
    )
}