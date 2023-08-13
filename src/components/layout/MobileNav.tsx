"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { MainNavItem, SidebarNavItem } from "@/types"
import { siteConfig } from "@/config/site"
import { classNames } from "@/lib/utils"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/Accordion"
import { Button } from '@/components/ui/Button'
import { ScrollArea } from "@/components/ui/ScrollArea"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet"
import { Bars3Icon } from "@heroicons/react/24/outline"
import { Icons } from "../Icons"

interface MobileNavProps {
    mainNavItems?: MainNavItem[]
    sidebarNavItems?: SidebarNavItem[]
}

export function MobileNav({ mainNavItems }: MobileNavProps) {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
                >
                    <Bars3Icon className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pl-1 pr-0 bg-white w-full">
                <div className="px-7">
                    <Link
                        aria-label="Home"
                        href="/"
                        className="flex items-center"
                        onClick={() => setIsOpen(false)}
                    >
                        <Icons.logo className="mr-2 h-4 w-4" aria-hidden="true" />
                        <span className="font-bold">{siteConfig.name}</span>
                    </Link>
                </div>
                <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                    <div className="pl-1 pr-7">
                        <Accordion type="single" collapsible className="w-full">
                            {mainNavItems?.map((item, index) => (
                                item.items ? (
                                    <AccordionItem value={item.title} key={index}>
                                        <AccordionTrigger className="text-sm leading-6 font-bold capitalize">
                                            {item.title}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex flex-col space-y-2">
                                                {item.items?.map((subItem, index) =>
                                                    subItem.href ? (
                                                        <MobileLink
                                                            key={index}
                                                            href={String(subItem.href)}
                                                            pathname={pathname}
                                                            setIsOpen={setIsOpen}
                                                            disabled={subItem.disabled}
                                                        >
                                                            {subItem.title}
                                                        </MobileLink>
                                                    ) : (
                                                        <div
                                                            key={index}
                                                            className="text-foreground/70 transition-colors"
                                                        >
                                                            {item.title}
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ) : (
                                    <MobileLink
                                        className="text-sm leading-6 font-bold capitalize py-0 pl-0"
                                        key={index}
                                        href={String(item.href)}
                                        pathname={pathname}
                                        setIsOpen={setIsOpen}
                                        disabled={item.disabled}
                                    >
                                        {item.title}
                                    </MobileLink>
                                )

                            ))}
                        </Accordion>
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}

interface MobileLinkProps {
    children?: React.ReactNode
    href: string
    disabled?: boolean
    pathname: string
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    className?: string,
}

function MobileLink({
    children,
    href,
    disabled,
    pathname,
    setIsOpen,
    className,
}: MobileLinkProps) {
    return (
        <Link
            scroll={true}
            href={href}
            className={classNames(
                "text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 pl-3 text-sm leading-6 font-semibold",
                pathname === href && "bg-gray-50 text-indigo-600",
                disabled && "pointer-events-none opacity-60",
                className
            )}
            onClick={() => setIsOpen(false)}
        >
            {children}
        </Link>
    )
}