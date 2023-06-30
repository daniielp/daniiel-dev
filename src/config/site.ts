export type SiteConfig = typeof siteConfig

export const siteConfig = {
    name: "Daniiel",
    title: "Daniel Pedersen - Fullstack Webdeveloper",
    description:
        "With a background as a web developer and a good eye to UI/UX. Daniel Pedersen create groth and is dedicated to frontend development.",
    url: "https://daniiel.dev/",
    email: process.env.EMAIL,
    ogImage: "https://skateshop.sadmn.com/opengraph-image.png",
    mainNav: [
        {
            title: "Marketing",
            items: [
                {
                    title: "Products",
                    href: "/products",
                    description: "All the products we have to offer.",
                    items: [],
                },
                {
                    title: "Build a Board",
                    href: "/build-a-board",
                    description: "Build your own custom skateboard.",
                    items: [],
                },
                {
                    title: "Blog",
                    href: "/blog",
                    description: "Read our latest blog posts.",
                    items: [],
                },
            ],
        },
    ]
}