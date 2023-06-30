import type { NextPage } from 'next'
import React from 'react'
import Contact from '@/components/Contact'

const Kontakt: NextPage = () => {
  return (
    <main>
        <div className="bg-warm-gray-50">
          <div className="py-24 lg:py-32">
            <div className="relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Lad os starte en samtale
              </h1>
              <p className="mt-6 max-w-3xl text-xl text-gray-500">
                Vel nunc non ut montes, viverra tempor. Proin lectus nibh phasellus morbi non morbi. In elementum urna
                ut volutpat. Sagittis et vel et fermentum amet consequat.
              </p>
            </div>
          </div>
        </div>
        <Contact />
    </main>
  )
}

export default Kontakt