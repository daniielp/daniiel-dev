import { NextPage } from 'next'
import React from 'react'

const CookiebotCookies: NextPage = () => {
    return (
        <div className="relative overflow-hidden bg-white py-16">
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-prose text-lg">
                    <h1>
                        <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                            Cookies
                        </span>
                    </h1>
                    <p className="mt-8 text-xl leading-8 text-gray-500">
                        Når vi taler om cookies på internettet, mener vi små tekstfiler, der gemmes på dit terminaludstyr, f.eks. en computer eller anden enhed, via din webbrowser, når du besøger en hjemmeside. Oplysningerne i cookien fortæller hjemmesiden forskellige ting, såsom:
                    </p>
                </div>
                <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
                    <script id="CookieDeclaration" src="https://consent.cookiebot.com/ed830906-8ce2-4f30-a67a-2f0a4f263f4e/cd.js" type="text/javascript" async></script>
                </div>
            </div>
        </div>
    )
}

export default CookiebotCookies