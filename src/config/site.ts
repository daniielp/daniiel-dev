import { type MainNavItem } from "@/types"

export type SiteConfig = typeof siteConfig

const socials = {
    github: "https://github.com/daniielp",
    linkedIn: "https://www.linkedin.com/in/daniiel/"
}

export const siteConfig = {
    name: "Daniiel",
    title: "Daniel Pedersen - Din kreative frontend developer - UI/UX Designer",
    description:
        "Jeg designer oplevelser med konsistente flows som tiltrækker nye kunder til danske forretninger. Med enestående brugeroplevelser og udvikle intuitive frontends.",
    url: "https://daniiel.dev/",
    email: process.env.NEXT_PUBLIC_EMAIL,
    ogImage: "https://daniiel.dev/images/daniiel-avatar.jpg",
    mainNav: [
        {
            title: "Introduktion",
            items: [
                {
                    title: "Projekter",
                    href: "/#projects",
                    description: "Se udvalgte projekter.",
                    items: [],
                },
                {
                    title: "Om mig",
                    href: "/#about",
                    description: "Find mine kærneværdier",
                    items: [],
                },
                {
                    title: "Navnet",
                    href: "/#daniiel",
                    description: "Bag om navnet.",
                    items: [],
                },
            ],
        },
        {
            title: "Blog",
            href: "/blog",
        },
        {
            title: "Projekter",
            href: "/projekter",
        }
        // {
        //     title: "Kontakt",
        //     href: "/kontakt"
        // }
    ] satisfies MainNavItem[],
    socials
}
