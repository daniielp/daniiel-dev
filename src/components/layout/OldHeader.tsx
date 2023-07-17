"use client"

import { Fragment, useCallback, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { InboxIcon, NewspaperIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
import Logo from '@/components/Logo'



export default function Header() {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = useCallback(() => setShowPopup(prevState => !prevState), [])

    return (
        <Popover className="sticky bg-white top-0 z-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="/" className='flex justify-center items-center'>
                            <span className="sr-only">Daniiel</span>
                            <Logo primary='fill-indigo-500' secondary='fill-slate-900' className="h-8 w-auto sm:h-10" title="logo" />
                        </a>
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <Popover.Button onClick={togglePopup} className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Åben menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden space-x-10 md:flex">


                        <a href="/#projects" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Projekter
                        </a>
                        <a href="/#about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Om mig
                        </a>
                        <a href="/#daniiel" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Daniiel
                        </a>


                    </Popover.Group>
                </div>
            </div>

            <Transition
                show={showPopup}
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-[100]">
                    <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pt-5 pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <a href="/">
                                        <Logo primary='fill-indigo-500' secondary='fill-slate-900' className="h-8 w-auto sm:h-10" />
                                    </a>
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button onClick={togglePopup} className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    <a href="/#projects" onClick={togglePopup} className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                                        <InboxIcon className="h-6 w-6 flex-shrink-0 text-indigo-600"></InboxIcon>
                                        <span className="ml-3 text-base font-medium text-gray-900">Projekter</span>

                                    </a>
                                    <a href="/#about" onClick={togglePopup} className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                                        <NewspaperIcon className="h-6 w-6 flex-shrink-0 text-indigo-600"></NewspaperIcon>
                                        <span className="ml-3 text-base font-medium text-gray-900">Om mig</span>

                                    </a>
                                    <a href="/#daniiel" onClick={togglePopup} className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                                        <QuestionMarkCircleIcon className="h-6 w-6 flex-shrink-0 text-indigo-600"></QuestionMarkCircleIcon>
                                        <span className="ml-3 text-base font-medium text-gray-900">Daniiel</span>

                                    </a>

                                </nav>
                            </div>
                        </div>
                        {/* <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </a>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

            </div> */}
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}