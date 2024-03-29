"use client"

import * as React from "react"

import { Icons } from "@/components/Icons"
import { BasicButton, type ButtonProps } from "./ui/BasicButton"

export function CopyButton({ value, ...props }: ButtonProps) {
  const [isCopied, setIsCopied] = React.useState(false)

  return (
    <BasicButton
      variant="outline"
      size="sm"
      className="absolute right-5 top-4 z-20 h-6 w-6 px-0"
      onClick={() => {
        if (typeof window === "undefined") return
        setIsCopied(true)
        void window.navigator.clipboard.writeText(value?.toString() ?? "")
        setTimeout(() => setIsCopied(false), 2000)
      }}
      {...props}
    >
      {isCopied ? (
        <Icons.check className="h-3 w-3" aria-hidden="true" />
      ) : (
        <Icons.copy className="h-3 w-3" aria-hidden="true" />
      )}
      <span className="sr-only">
        {isCopied ? "Copied" : "Copy to clipboard"}
      </span>
    </BasicButton>
  )
}