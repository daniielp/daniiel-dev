type NavigationItem = {
  title: string
  href: string
}

type Navigation = NavigationItem[]

export type { NavigationItem, Navigation }

export const mainNavigation: Navigation = [
  {
    title: "CV",
    href: "/cv"
  },
  {
    title: "Cases",
    href: "/cases"
  },
  {
    title: "Contact",
    href: "/contact"
  },
  {
    title: "Blog",
    href: "/blog"
  }
]
