export type SiteConfig = typeof siteConfig

const socials = {
    github: "https://github.com/daniielp",
    linkedIn: "https://www.linkedin.com/in/daniiel/"
}

export const siteConfig = {
    name: "Daniiel",
    title: "Daniel Pedersen - Fullstack Webdeveloper",
    description:
        "With a background as a web developer and a good eye to UI/UX. Daniel Pedersen create groth and is dedicated to frontend development.",
    url: "https://daniiel.dev/",
    email: process.env.NEXT_PUBLIC_EMAIL,
    ogImage: "https://skateshop.sadmn.com/opengraph-image.png",
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
    ],
    socials
}
