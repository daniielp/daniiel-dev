import React from 'react'

export interface ProjectCardProps {
    title: string,
    href: string
}
function ProjectCard({ title, href }: ProjectCardProps) {
    return (
        <div className="relative border border-gray-300 isolate overflow-hidden flex flex-col rounded-sm">
            <svg className='border-gray-900 flex-1' xmlns="http://www.w3.org/2000/svg" width="402" height="106" viewBox="0 0 402 106">
                <defs>
                    <clipPath id="a"><rect width="243" height="106" fill="none" /></clipPath>
                </defs>
                <g transform="translate(-224.5 -141.5)">
                    <line className='stroke-gray-400' x2="400" transform="translate(225.5 176.5)" fill="none" stroke-linecap="round" stroke-width="1" stroke-dasharray="3 6" />
                    <line className='stroke-gray-400' x2="400" transform="translate(225.5 211.5)" fill="none" stroke-linecap="round" stroke-width="1" stroke-dasharray="3 6" /><g transform="translate(303.5 141.5)" clip-path="url(#a)">
                        <g transform="translate(-303.5 -141.5)">
                            <line className='stroke-gray-400' y2="104" transform="translate(304.5 142.5)" fill="none" stroke-linecap="round" stroke-width="1" stroke-dasharray="3 6" />
                        </g>
                        <g transform="translate(-223.5 -141.5)">
                            <line className='stroke-gray-400' y2="104" transform="translate(304.5 142.5)" fill="none" stroke-linecap="round" stroke-width="1" stroke-dasharray="3 6" /></g>
                        <g transform="translate(-143.5 -141.5)">
                            <line className='stroke-gray-400' y2="104" transform="translate(304.5 142.5)" fill="none" stroke-linecap="round" stroke-width="1" stroke-dasharray="3 6" /></g>
                        <g className='stroke-gray-400' transform="translate(-63.5 -141.5)"><line y2="104" transform="translate(304.5 142.5)" fill="none" stroke-linecap="round" stroke-width="1" stroke-dasharray="3 6" />
                        </g>
                    </g>
                </g>
            </svg>

            <a href={href} className='bg-gray-900 text-lg font-semibold text-white w-full py-2 px-6'>
                <span className='absolute inset-0' />
                {title}
            </a>
        </div>
    )
}

export default ProjectCard