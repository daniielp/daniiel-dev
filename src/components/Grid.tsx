"use client"
import useMousePosition from '@/hooks/useMousePosistion';
import { classNames } from '@/lib/utils'
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    columns?: keyof typeof gridColumnType,

}

const gridColumnType = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
}

function Grid({ columns = 3, children, className, ...props }: PropsWithChildren<GridProps>) {
    const containerRef = useRef<HTMLDivElement>(null)
    const mousePosition = useMousePosition()
    const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
    const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 })
    const [boxes, setBoxes] = useState<Array<HTMLElement>>([])

    console.log("mouse", mousePosition)

    useEffect(() => {
        containerRef.current && setBoxes(Array.from(containerRef.current.children).map((el) => el as HTMLElement))
        console.log("container", containerRef)
    }, [])

    useEffect(() => {
        initContainer()
        window.addEventListener('resize', initContainer)

        return () => {
            window.removeEventListener('resize', initContainer)
        }
        
    }, [boxes])

    useEffect(() => {
        onMouseMove()
    }, [mousePosition])

    const initContainer = () => {
        if (containerRef.current) {
            containerSize.current.w = containerRef.current.offsetWidth
            containerSize.current.h = containerRef.current.offsetHeight
        }
    }

    const onMouseMove = () => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect()
            const { w, h } = containerSize.current
            const x = mousePosition.x - rect.left
            const y = mousePosition.y - rect.top
            const inside = x < w && x > 0 && y < h && y > 0
            if (inside) {
                mouse.current.x = x
                mouse.current.y = y
                boxes.forEach((box) => {
                    const boxX = -(box.getBoundingClientRect().left - rect.left) + mouse.current.x
                    const boxY = -(box.getBoundingClientRect().top - rect.top) + mouse.current.y
                    box.style.setProperty('--mouse-x', `${boxX}px`)
                    box.style.setProperty('--mouse-y', `${boxY}px`)
                })
            }
        }
    }

    return (
        <div ref={containerRef} className={classNames('mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16', gridColumnType[columns], className)} {...props}>
            {children}
        </div>
    )
}

export default Grid

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {

}

export function GridItem({ className, children, ...props }: PropsWithChildren<GridItemProps>) {
    return (
        <div className={classNames('relative h-full  rounded-3xl border-2 border-gray-300 before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-transparent before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden', className)} {...props}>
            {children}
        </div>
    )
}

