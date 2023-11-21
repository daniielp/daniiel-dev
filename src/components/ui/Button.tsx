import { classNames } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import React from "react"


const buttonVariants = cva("", {
    variants: {
        variant: {
            default:
                "btn",
            destructive:
                "btn btn-destructive",
            outline:
                "btn btn-outline",
            secondary:
                "btn btn-secondary",
            ghost: "btn btn-ghost",
            link: "font-bold text-indigo-500 underline-offset-3 underline hover:text-indigo-800",
        },
    },
    defaultVariants: {
        variant: "default",
    },
})

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLAnchorElement>, 
    VariantProps<typeof buttonVariants> {
    href?: string
}


const Button = React.forwardRef<HTMLAnchorElement, ButtonProps>(({ className, href, children, variant, ...props }, ref) => {
    const Comp = href ? "a" : "button"
    return (
        <Comp href={href} data-content={children} className={classNames(buttonVariants({variant, className}))}>
            {children}
        </Comp>
    )
})
export { Button, buttonVariants }