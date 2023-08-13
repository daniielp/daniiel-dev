"use client"
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

    return (
        <>
            <div className="bg-white py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto flex max-w-2xl flex-col items-center justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
                        <div className="w-full lg:max-w-lg lg:flex-auto">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Projekter
                            </h2>
                            <p className="mt-6 text-xl leading-8 text-gray-600">
                                For at sikre dig at du tager den rigtige beslutning når du skal vælge den næste medarbejder. Så er der her lige nogle eksempler på tidligere projekter og cases jeg har arbejdet med.
                            </p>
                            <img
                                src={slides[0]?.ImageUrl}
                                alt=""
                                className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
                            />
                        </div>
                        <div className="w-full lg:max-w-xl lg:flex-auto">
                            <h3 className="sr-only">Fremviste projekter</h3>
                            <ul className="-my-8 divide-y divide-gray-100">
                                {slides.map((project) => (
                                    <li key={project.Author} className="py-8">
                                        <dl className="relative flex flex-wrap gap-x-3">
                                            <dt className="sr-only">Author</dt>
                                            <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                                                <span>
                                                    {project.Author}
                                                    <span className="absolute inset-0" aria-hidden="true" />
                                                </span>
                                            </dd>
                                            <dt className="sr-only">Udtagelse</dt>
                                            <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">{project.Quote}</dd>
                                            <dt className="sr-only">Company</dt>
                                            <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                                                <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
                                                    <circle cx={1} cy={1} r={1} />
                                                </svg>
                                                {project.Company}
                                            </dd>
                                        </dl>
                                    </li>
                                ))}
                            </ul>
                            {/* <div className="mt-8 flex border-t border-gray-100 pt-8">
                                <a href="#" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                    Vis alle projekter <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="relative overflow-hidden pt-16" id="projects">
                <div className="relative overflow-hidden pt-16 pb-32">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                                <div>
                                    <div>
                                        <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600" >
                                            <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6">
                                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Projekter</h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            For at sikre dig at du tager den rigtige beslutning når du skal vælge den næste medarbejder. Så er der her lige nogle eksempler på tidligere projekter og cases jeg har arbejdet med.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-8 border-t border-gray-200">
                                    <Tab.List className="-mb-px flex space-x-8">
                                        {slides.map((slide, index) => (<Tab as="button" key={slide.Company} className={classNames(
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
                                        <Tab.Panel key={slide.Author}>
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

            </div> */}
        </>
    )
}

export default Projects