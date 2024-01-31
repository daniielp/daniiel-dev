"use client"
import { type NavItem } from "@/types"

import SiteNavbar from "./SiteNavbar"

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
        <header>
            <SiteNavbar />
        </header>
        
    )
}