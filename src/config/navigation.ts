type NavigationItem = {
  title: string;
  href: string;
};

type Navigation = NavigationItem[];

export type { NavigationItem, Navigation };

export const mainNavigation: Navigation = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Projects",
    href: "/projects",
  },
];

