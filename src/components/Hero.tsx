import { cn } from "@/lib/utils"
import Image from "next/image"
import React, { type ReactNode } from "react"

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
    heading: ReactNode,
    description: ReactNode,
    cta: ReactNode
}

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(({ heading, description, cta, className, ...props }, ref) => {
    return (
        <div ref={ref} {...props} className={cn("bg-gray-900 pt-10 sm:pt-16 pb-10 sm:pb-16 lg:overflow-hidden lg:pt-8 lg:pb-14", className)}>
            <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                        <div className="lg:py-24">
                            {cta}
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:mt-6 xl:text-6xl">
                                {heading}
                            </h1>
                            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                {description}
                            </p>
                        </div>
                    </div>
                    <div className="-mb-16 sm:-mb-48 lg:relative lg:m-0">
                        <Image width={600} height={600} src="/images/denmark-animation.svg" alt="Ping animation for aarhus, Denmark" />
                    </div>
                </div>
            </div>
        </div>
    )
})


export default Hero