import "@/styles/globals.css"
import type { Metadata } from "next"
import { siteConfig } from "@/config/site"
import Script from "next/script"
import { TailwindIndicator } from "@/components/tailwind-indicator"


export const metaData: Metadata = {
    title: {
        default: siteConfig.title,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Server Components",
        "Server Actions",
        "daniiel",
        "Web",
        "frontend",
        "developer"
    ],
    authors: [
        {
            name: "Daniel Pedersen",
            url: "https://github.com/shorcy"
        }
    ],
    creator: "daniiel",
    openGraph: {
        type: "website",
        locale: "da_DK",
        url: siteConfig.url,
        title: siteConfig.title,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
        images: [`${siteConfig.url}/og.jpg`],
        creator: "@daniiel_dev"
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
}

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html className="scroll-smooth" lang="da">
            <head>
                <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="ed830906-8ce2-4f30-a67a-2f0a4f263f4e" data-blockingmode="auto" type="text/javascript"></Script>
            </head>
            <body className="bg-zinc-50">
                {children}
                <TailwindIndicator />
            </body>
        </html>
    )
}