import type { ServerRuntime } from "next"
import { ImageResponse } from "@vercel/og"

import { ogImageSchema } from "@/lib/validations/og"
import { Icons } from "@/components/Icons"

export const runtime: ServerRuntime = "edge"

export function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const parsedValues = ogImageSchema.parse(
      Object.fromEntries(url.searchParams)
    )

    const { mode, heading, description, type } = parsedValues
    const paint = mode === "dark" ? "#fff" : "#000"

    return new ImageResponse(
      (
        <div
          tw="h-full w-full flex items-center justify-center flex-col"
          style={{
            color: paint,
            background:
              mode === "dark"
                ? "linear-gradient(90deg, #000 0%, #111 100%)"
                : "white",
          }}
        >
          <div tw="flex items-center text-3xl justify-center flex-col">
            <Icons.logo
              style={{
                width: 124,
                height: 124
              }}
              className="w-32 h-32"
            />
          </div>
          <div
            tw="flex max-w-4xl items-center justify-center flex-col mt-10"
            style={{
              whiteSpace: "pre-wrap",
            }}
          >
            {type ? (
              <div tw="text-xl text-center uppercase font-medium tracking-tight leading-tight dark:text-zinc-50 px-8">
                {type}
              </div>
            ) : null}
            <div tw="text-5xl text-center font-bold tracking-tight leading-tight dark:text-zinc-50 px-8">
              {heading}
            </div>
            {description ? (
              <div tw="mt-5 text-3xl text-zinc-400 text-center font-normal tracking-tight leading-tight px-20">
                {description}
              </div>
            ) : null}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (error) {
    error instanceof Error
      ? console.log(`${error.message}`)
      : console.log(error)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}