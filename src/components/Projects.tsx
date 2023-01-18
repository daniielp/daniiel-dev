import { InboxIcon, SparklesIcon } from "@heroicons/react/20/solid"
import Avatar from "./Avatar"
import { Tab } from '@headlessui/react'
import { useState } from "react"

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
    {
        Quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        Author: "Mark Andersen, CEO hos Admill",
        ImageUrl: "/images/default-mockup.png",
        Company: "Admill",
    },
    
]

const Projects = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className="relative overflow-hidden pt-16 pb-32">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
            <div className="relative">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                            <div>
                                <div>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600">
                                        <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Projekter</h2>
                                    <p className="mt-4 text-lg text-gray-500">
                                        For at sikre dig at du tager den rigtige beslutning når du skal vælge den næste medarbejder. Så er der her lige nogle eksempler på tidligere projekter og cases jeg har arbejdet med.
                                    </p>
                                    <div className="mt-6">
                                        <a
                                            href="#"
                                            className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                                        >
                                            Get started
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 border-t border-gray-200">
                                <Tab.List className="-mb-px flex space-x-8">
                                    {slides.map((slide, index) => (<Tab as="button" className={classNames(
                                        index == selectedIndex
                                            ? 'border-indigo-500 text-indigo-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                        'whitespace-nowrap py-4 px-1 border-t-2 font-medium text-sm'
                                    )}>{slide.Company}</Tab>))}
                                </Tab.List>
                                <blockquote>
                                    <div>
                                        <p className="text-base text-gray-500">
                                            &ldquo;{slides[selectedIndex]?.Quote}&rdquo;
                                        </p>
                                    </div>
                                    <footer className="mt-3">
                                        <div className="flex items-center space-x-3">
                                            <div className="flex-shrink-0">
                                                <Avatar className="h-6 w-6 rounded-full" />
                                            </div>
                                            <div className="text-base font-medium text-gray-700">
                                                {slides[selectedIndex]?.Author}
                                            </div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <Tab.Panels className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                {slides.map((slide) => (
                                    <Tab.Panel>
                                        <img
                                            className="w-full rounded-xl  lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                            src={slide.ImageUrl}
                                            alt="Inbox user interface"
                                        />
                                    </Tab.Panel>
                                ))}

                            </Tab.Panels>
                        </div>
                    </Tab.Group>

                </div>
            </div>

        </div>
    )
}

export default Projects