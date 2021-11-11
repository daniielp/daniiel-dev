import React from 'react'
import Hero from '../components/Hero'
import Experience from '../components/Tabs/Experience'
import Skills from '../components/Tabs/Skills'
import History from '../components/History'


export default function about() {
    return (
        <main>
            <Hero />
            <Experience />
            <Skills />
            <History />
        </main>
    )
}

