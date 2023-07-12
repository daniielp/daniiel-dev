"use client"
import { useRef } from 'react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
// import Location from './Location'
import Link from 'next/link'
import ReactGlobe from '@/components/Globe'
import useContainerDimensions from '@/hooks/useContainerDimensions'


const Hero = () => {
  const globeContainer = useRef<HTMLDivElement>(null)
  const { width, height } = useContainerDimensions(globeContainer)

  console.log(width, height)

  return (
    <div className="bg-gray-900 pt-10 sm:pt-16 pb-10 sm:pb-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
            <div className="lg:py-24">
              <div className="hidden sm:mb-5 sm:flex sm:justify-center lg:justify-start">
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
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">Fullstack udvikler </span>
                <span className="block text-indigo-400">baseret i Århus</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Med en kombination af uddannelsen som webudvikler, og med et skarpt øje for design og UI/UX, skaber vækst og gør mig i stand til at arbejde helhjertet med frontend-development. På den måde styrker jeg brandets position med at være de bedste når det kommer til frontend-development, og samtidig skaber værdifulde resultater, som i sidste ende giver bedre købeklare leads.
              </p>

            </div>
          </div>
          <div ref={globeContainer} className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0 hidden sm:block">
            <ReactGlobe width={width} height={height} />
            {/* <Location /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero