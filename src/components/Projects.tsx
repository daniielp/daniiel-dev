"use client"
import { Icons } from "./Icons"
import Image from 'next/image'
import { Button } from "./ui/Button"

const slides = [
    {
        Quote: "Hos Adlab har vi haft fornøjelsen af at arbejde sammen med Daniel. Han udviklede første version af vores app, der på under en måned blev downloadet mere end 50.000 gange.",
        Author: "Daniel Østergaard, CEO hos Adlab",
        ImageUrl: "/images/elberegner-mockup.png",
        Company: "Adlab",
    },
    {
        Quote: "Jeg er meget imponeret over din refleksioner – det er virkelig godt arbejde. Du har fat i det helt rigtige...",
        Author: "Jakob Kjeldtoft, Udvikler hos Novicell",
        ImageUrl: "/images/novicell-mockup.png",
        Company: "Novicell"
    },
]

const Projects = () => {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8" id="projects">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
                    <div className="lg:pr-4 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600">Udvalgt projekt</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projekt</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                For at sikre dig at du tager den rigtige beslutning når du skal vælge den næste medarbejder. Så er der her lige nogle eksempler på tidligere projekter og cases jeg har arbejdet med.
                            </p>
                            <div className="mt-8">
                                <Button href="/projekter">
                                    Se andre projekter
                                </Button>
                            </div>
                            <figure className="mt-16 border-l border-gray-200 pl-8 text-gray-600">
                                <blockquote className="text-base leading-7">
                                    <p>
                                        “Hos Adlab har vi haft fornøjelsen af at arbejde sammen med Daniel. Han udviklede første version af vores app, der på under en måned blev downloadet mere end 50.000 gange.”
                                    </p>
                                </blockquote>
                                <figcaption className="mt-6 flex gap-x-4 text-sm leading-6">
                                    <Icons.maleAvatar className="h-6 w-6 flex-none rounded-full" />
                                    <div>
                                        <span className="font-semibold text-gray-900">Daniel Østergaard</span>, CEO hos Adlab
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="relative">
                        <Image
                            src="/images/designarchitects.jpg"
                            title="Eksamens projekt"
                            alt="Design Architects live preview"
                            width={2432}
                            height={1442}
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0"
                        />
                        <a href="https://designarchitects.daniiel.dev/"><span className="sr-only">Besøg websitet</span><span className="absolute inset-0 w-[48rem] max-w-none sm:w-[57rem] md:-ml-4 lg:ml-0"></span></a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Projects