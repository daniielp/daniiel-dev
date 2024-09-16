type Social = {
    title: string;
    type: "email" | "linkedin" | "github";
    href: string;
};

type Socials = readonly Social[];

export type { Social, Socials };

export const socials = [
    {
        title: "LinkedIn",
        type: "linkedin",
        href:"https://www.linkedin.com/in/daniiel/"
    },
    {
        title: "Email",
        type: "email",
        href:"mailto:mail@daniiel.dev"
    },
    {
        title: "Github",
        type: "github",
        href:"https://github.com/daniielp"
    },
] as Socials;



