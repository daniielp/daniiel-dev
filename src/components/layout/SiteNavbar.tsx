'use client'

import { Button } from '@/components/ui/Button';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react'
import Link from 'next/link';
import { NavItem } from '@/types';
import { Tooltip, TooltipArrow, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { siteConfig } from '@/config/site';
import { Icons } from '../Icons';
import Logo from '../Logo';
export const menuItems = [
    {
        title: "Design",
        href: "/design"
    },
    {
        title: "Blog",
        href: "/blog"
    },
    {
        title: "Projekter",
        href: "/projekter"
    }
] satisfies NavItem[]

export default function SiteNavbar() {
    const [showNav, setShowNav] = useState<boolean>(false);
    const [hidden, setHidden] = useState<boolean>(false);

    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious();

        if (latest > previous && latest > 150) {
            setHidden(true);
            setShowNav(false);
        } else {
            setHidden(false)
        }
    })

    return (
        <motion.nav
            className={`fixed inset-0 top-4 w-[95%] sm:w-[90%] mx-auto bg-slate-50 font-medium text-gray-900 flex  max-sm:justify-between gap-4 p-4 px-6 max-w-7xl items-center rounded-full font-mono h-14 overflow-hidden z-50 shadow`}
            variants={{
                long: { maxWidth: 1280 },
                short: { maxWidth: 280 },
                hideNav: {
                    height: 56,
                    borderRadius: 50,

                    alignItems: 'center',
                    transition: { delay: 0, duration: 0.3 },
                },
                showNav: {
                    height: 150,
                    borderRadius: 22,
                    alignItems: 'start',
                    transition: { delay: 0 },
                },
            }}
            initial={'short'}
            animate={[hidden ? 'short' : 'long', showNav ? 'showNav' : 'hideNav']}
            transition={{
                duration: 0.6,
                type: 'spring',
                stiffness: 80,
                damping: 14,
            }}
        >
            <Link href="/" className="min-w-[40px] min-h-[40px] rounded-full gap-2 bg-slate-50 flex items-center justify-center">
                <Logo />
            </Link>
            <motion.ul
                className={`w-full ${showNav
                    ? '[--display-from:none] [--display-to:flex]'
                    : 'max-sm:[--display-from:none] sm:[--display-to:flex]'
                    }  [--opacity-from:0.1] [--opacity-to:1] flex-col sm:flex-row items-center justify-center gap-10 max-sm:gap-5 max-sm:pt-10`}
                variants={{
                    hidden: {
                        display: 'var(--display-from, none)',
                        opacity: 'var(--opacity-from, 1)',
                        transition: { duration: 0.6, delay: 0 },
                    },
                    visible: {
                        display: 'var(--display-to, none)',
                        opacity: 'var(--opacity-to, 1)',
                        transition: { duration: 0.6, delay: 0 },
                    },
                }}
                initial={'hidden'}
                animate={[
                    hidden && !showNav ? 'hidden' : 'visible',
                    showNav ? 'visible' : '',
                ]}
            >
                {menuItems.map((item, index) => <li>
                    <Link key={"menuItem" + index} href={item.href}>{item.title}</Link>
                </li>)}
            </motion.ul>
            <motion.div
                className="w-full gap-4 justify-end [--display-from:none][--display-to:inline-flex] "
                variants={{
                    hidden: {
                        display: 'var(--display-from, none)',
                        transition: { delay: 0, duration: 0.3 },
                    },
                    visible: {
                        display: 'var(--display-to)',
                        transition: { delay: 0.2, duration: 0.3 },
                    },
                }}
                initial="hidden"
                animate={hidden ? 'visible' : 'hidden'}
            >
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="default" asChild>
                                <Link href={siteConfig.socials.github} target="_blank">
                                    <Icons.github className="w-4 h-4" />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" className="bg-white p-2 rounded-sm">
                            <p className="text-sm text-gray-900">Github</p>
                            <TooltipArrow className="fill-white" />
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="secondary" asChild>
                                <Link href={siteConfig.socials.linkedIn} target="_blank">
                                    <Icons.linkedIn className="w-4 h-4" />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" className="bg-white p-2 rounded">
                            <p className="text-sm text-gray-900">LinkedIn</p>
                            <TooltipArrow className="fill-white" />
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </motion.div>
            <Button
                variant="ghost"
                className='rounded-full min-w-[40px] sm:hidden'
                onClick={() => {
                    setHidden(false);
                    setShowNav((prevState) => !prevState)
                }}
            >
                <span className='sr-only'>{showNav ? "Luk menu" : "Åben menu"}</span>
                {showNav ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </Button>
        </motion.nav>
    )
}