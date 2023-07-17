import { siteConfig } from "@/config/site"
import { MainNav } from '@/components/layout/MainNav'
import { MobileNav } from '@/components/layout/MobileNav'
import { Button } from "../ui/Button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TooltipArrow } from "../ui/Tooltip"
import { Icons } from "../Iconts"
import Link from "next/link"


export function SiteHeader() {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-white">
            <div className="mx-auto max-w-7xl px-8 lg:px-8 flex h-16 items-center">
                <MainNav items={siteConfig.mainNav} />
                <MobileNav
                    mainNavItems={siteConfig.mainNav}
                //   sidebarNavItems={dashboardConfig.sidebarNav}
                />
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-2">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="default" asChild>
                                        <Link href={siteConfig.socials.github} target="_blank">
                                            <Icons.github className="w-4 h-4" />
                                        </Link>
                                    </Button>
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
                                    <Button variant="secondary" asChild>
                                        <Link href={siteConfig.socials.linkedIn} target="_blank">
                                            <Icons.linkedIn className="w-4 h-4" />
                                        </Link>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="bottom" className="bg-white">
                                    <p className="text-sm text-gray-900">LinkedIn</p>
                                    <TooltipArrow className="fill-white" />
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </nav>
                </div>
            </div>
        </header>
    )
}