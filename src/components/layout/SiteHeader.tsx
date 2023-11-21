"use client"
import { siteConfig } from "@/config/site"
import { MainNav } from '@/components/layout/MainNav'
import { MobileNav } from '@/components/layout/MobileNav'
import { Button } from "@/components/ui/Button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TooltipArrow } from "../ui/Tooltip"
import { Icons } from "../Icons"
import Link from "next/link"
import Logo from "../Logo"
import { type NavItem } from "@/types"
import { NavigationMenu, NavigationMenuLink } from "../ui/NavigationMenu"
import { BasicButton } from "../ui/BasicButton"

export const menuItems = [
    {
        title: "Blog",
        href: "/blog"
    },
    {
        title: "Projekter",
        href: "/projekter"
    }
] satisfies NavItem[]

export function SiteHeader() {
    return (
        <header className="sticky md:fixed z-50 top-0 rounded-none md:rounded-full md:top-4 left-0 right-0 p-4 px-6 md:px-8 w-full max-w-7xl mx-auto bg-zinc-50  shadow flex justify-between items-center">
            <div className="flex gap-4">
                <Link href="/">
                    <Logo />
                </Link>
                <NavigationMenu className="flex ">
                    {menuItems.map((item) =>
                        <NavigationMenuLink asChild>
                            <Link className="group inline-flex w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 h-auto" href={item.href}>{item.title}</Link>
                        </NavigationMenuLink>
                    )}
                </NavigationMenu>
            </div>
            <div className="flex gap-4">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <BasicButton variant="default" asChild>
                                <Link href={siteConfig.socials.github} target="_blank">
                                    <Icons.github className="w-4 h-4" />
                                </Link>
                            </BasicButton>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" className="bg-white">
                            <p className="text-sm text-gray-900">Github</p>
                            <TooltipArrow className="fill-white" />
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <BasicButton variant="secondary" asChild>
                                <Link href={siteConfig.socials.linkedIn} target="_blank">
                                    <Icons.linkedIn className="w-4 h-4" />
                                </Link>
                            </BasicButton>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" className="bg-white">
                            <p className="text-sm text-gray-900">LinkedIn</p>
                            <TooltipArrow className="fill-white" />
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </header>
    )
}


// <header className="sticky top-0 z-40 w-full border-b bg-zinc-50">
//     <div className="mx-auto max-w-7xl px-8 lg:px-8 flex h-16 items-center">
//         <MainNav items={siteConfig.mainNav} />
//         <MobileNav
//             mainNavItems={siteConfig.mainNav}
//         //   sidebarNavItems={dashboardConfig.sidebarNav}
//         />
//         <div className="flex flex-1 items-center justify-end space-x-4">
//             <nav className="flex items-center space-x-2">
//                 <TooltipProvider>
//                     <Tooltip>
//                         <TooltipTrigger asChild>
//                             <Button variant="default" asChild>
//                                 <Link href={siteConfig.socials.github} target="_blank">
//                                     <Icons.github className="w-4 h-4" />
//                                 </Link>
//                             </Button>
//                         </TooltipTrigger>
//                         <TooltipContent side="bottom" className="bg-white">
//                             <p className="text-sm text-gray-900">Github</p>
//                             <TooltipArrow className="fill-white" />
//                         </TooltipContent>
//                     </Tooltip>
//                 </TooltipProvider>
//                 <TooltipProvider>

//                     <Tooltip>
//                         <TooltipTrigger asChild>
//                             <Button variant="secondary" asChild>
//                                 <Link href={siteConfig.socials.linkedIn} target="_blank">
//                                     <Icons.linkedIn className="w-4 h-4" />
//                                 </Link>
//                             </Button>
//                         </TooltipTrigger>
//                         <TooltipContent side="bottom" className="bg-white">
//                             <p className="text-sm text-gray-900">LinkedIn</p>
//                             <TooltipArrow className="fill-white" />
//                         </TooltipContent>
//                     </Tooltip>
//                 </TooltipProvider>
//             </nav>
//         </div>
//     </div>
// </header>