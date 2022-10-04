import { Button as MuiButton } from "@mui/material"
import { ReactNode } from "react"

const Button = ({ children, href, target }: { children: ReactNode, href: string, target?: string }) => {
    return (
        <MuiButton data-content={children} variant="outlined" href={href} sx={{
            borderRadius: "2rem",
            position: "relative",
            target: target,
            "&::before": {
                content: '""',
                zIndex: 1,
                background: "linear-gradient(135deg, #f5d027 50%, transparent 50%)",
                transition: "background-position ease-in-out 350ms",
                backgroundPosition: "100% 0%",
                backgroundSize: "350%",
                borderRadius: "2rem",
                display: "block",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
            },
            "&::after": {
                content: "attr(data-content)",
                zIndex: 2,
                padding: "inherits",
                transition: "background-position-x ease-in-out 350ms",
                background: "linear-gradient(135deg, #383f54 50%, #f5d027 50%)",
                backgroundPosition: "100% 0%",
                backgroundSize: "250%",
                backgroundClip: "text",
                "-webkit-text-fill-color": "rgba(0, 0, 0, 0)",
                display: "block",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 5,
                left:0,
                textAlign: "center"
            },
            "&:hover": {
                backgroundColor: "transparent"
            },
            "&:hover::before": {
                backgroundPosition: "0% 0%"
            },
            "&:hover::after": {
                backgroundPosition: "0% 0%"
            }
        }}>{children}</MuiButton>
    )
}

export default Button