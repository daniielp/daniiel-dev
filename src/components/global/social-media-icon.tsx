import React from "react"
import type { Social } from "@/config/socials"
import type { LucideProps } from "lucide-react"
import { Github, Linkedin, Mail } from "lucide-react"

export interface SocialMediaIconType extends LucideProps {
  type?: Social["type"]
  size?: number
}

function SocialMediaIcon({ type = "email", size = 16, ...props }: SocialMediaIconType) {
  switch (type) {
    case "email":
      return <Mail size={size} {...props} />
    case "linkedin":
      return <Linkedin size={size} {...props} />
    case "github":
      return <Github size={size} {...props} />
    default:
      return null
  }
}

export { SocialMediaIcon }
