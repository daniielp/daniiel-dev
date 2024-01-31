"use client"
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'
import { siteConfig } from "@/config/site"
import { Icons } from './Icons'

const Contact = () => {
    const [characterCount, setCharacterCount] = useState(0)

    const countCharacters = (e: React.FormEvent<HTMLTextAreaElement>) => {
        setCharacterCount(e.currentTarget.value.length)
    }

    return (
        <section className="relative" aria-labelledby="contact-heading">
            <div className="absolute h-1/2 w-full bg-warm-gray-50" aria-hidden="true" />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative bg-white shadow-xl">
                    <h2 id="contact-heading" className="sr-only">
                        Kontakt mig
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        {/* Contact information */}
                        <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-slate-900 py-10 px-6 sm:px-10 xl:p-12">
                            {/* Decorative angle backgrounds */}
                            <div className="pointer-events-none absolute inset-0 sm:hidden" aria-hidden="true">
                                <svg
                                    className="absolute inset-0 h-full w-full"
                                    width={343}
                                    height={388}
                                    viewBox="0 0 343 388"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid slice"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                                        fill="url(#linear1)"
                                        fillOpacity=".1"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="linear1"
                                            x1="254.553"
                                            y1="107.554"
                                            x2="961.66"
                                            y2="814.66"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#fff" />
                                            <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div
                                className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                                aria-hidden="true"
                            >
                                <svg
                                    className="absolute inset-0 h-full w-full"
                                    width={359}
                                    height={339}
                                    viewBox="0 0 359 339"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid slice"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                                        fill="url(#linear2)"
                                        fillOpacity=".1"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="linear2"
                                            x1="192.553"
                                            y1="28.553"
                                            x2="899.66"
                                            y2="735.66"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#fff" />
                                            <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div
                                className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                                aria-hidden="true"
                            >
                                <svg
                                    className="absolute inset-0 h-full w-full"
                                    width={160}
                                    height={678}
                                    viewBox="0 0 160 678"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid slice"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                                        fill="url(#linear3)"
                                        fillOpacity=".1"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="linear3"
                                            x1="192.553"
                                            y1="325.553"
                                            x2="899.66"
                                            y2="1032.66"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#fff" />
                                            <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-white">Kom i kontakt</h3>
                            <p className="mt-6 max-w-3xl text-base text-gray-50">
                                Skulle du have nogle spørgsmål du ikke fik svar på, så er du velkommen til at kontakte mig med nedestående muligheder. Eller bruge kontaktformularen i højre side, og så vender jeg tilbage til dig.
                            </p>
                            <dl className="mt-8 space-y-6">
                                <dt>
                                    <span className="sr-only">Email</span>
                                </dt>
                                <dd className="flex text-base text-gray-50">
                                    <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-200" aria-hidden="true" />
                                    <span className="ml-3">{siteConfig.email}</span>
                                </dd>
                            </dl>
                            <ul role="list" className="mt-8 flex space-x-12">
                                <li>
                                    <a className="text-gray-200 hover:text-gray-100" href="https://github.com/daniielp">
                                        <span className="sr-only">GitHub</span>
                                        <svg className="h-7 w-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                fillRule="evenodd"
                                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-200 hover:text-gray-100" href="https://www.linkedin.com/in/daniiel/">
                                        <span className="sr-only">LinkedIn</span>
                                        <Icons.linkedIn className='h-7 w-7' />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact form */}
                        <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                            <h3 className="text-lg font-medium text-gray-900">Send mig en besked</h3>
                            <form action="#" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                                        Navn
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            autoComplete="email"
                                            className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                                        Emne
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="subject"
                                            required
                                            className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                                            Besked
                                        </label>
                                        <span id="message-max" className={`text-sm ${characterCount <= 500 ? "text-gray-500" : "text-red-600"}`}>
                                            {characterCount}/500 karakter
                                        </span>
                                    </div>
                                    <div className="mt-1">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            required
                                            className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            aria-describedby="message-max"
                                            defaultValue={''}
                                            onChange={countCharacters}
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2 sm:flex sm:justify-end">
                                    <button
                                        type="submit"
                                        className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-slate-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact