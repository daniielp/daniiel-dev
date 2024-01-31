import { absoluteUrl, classNames, formatDate } from '@/lib/utils'
import { allProjects } from 'contentlayer/generated'
import { env } from '@/env.mjs'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'
import { Mdx } from '@/components/mdx/mdxComponents'
import Image from "next/image"
import Link from "next/link"
import { Shell } from '@/components/shells/Shell'
import { Icons } from '@/components/Icons'
import { BasicButton, buttonVariants } from '@/components/ui/BasicButton'

interface ProjectPageProps {
  params: {
    slug: string[]
  }
}

async function getProjectFromParams(params: ProjectPageProps["params"]) {
  const slug = params?.slug?.join("/")
  const project = allProjects.find((project) => project.slugAsParams === slug)

  if (!project) {
    null
  }

  return project
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectFromParams(params)

  if (!project) {
    return {}
  }

  const url = env.NEXT_PUBLIC_APP_URL ?? "localhost:3000"

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", project.title)
  ogUrl.searchParams.set("type", "Project")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: absoluteUrl(project.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [ogUrl.toString()],
    },
  }
}

export async function generateStaticParams(): Promise<
  ProjectPageProps["params"][]
> {
  return allProjects.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: ProjectPageProps) {
  const project = await getProjectFromParams(params)

  if (!project) {
    notFound()
  }


  return (
    <Shell as="article" variant="markdown">
      <Link
        href="/projekter"
        className={classNames(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        Se alle projekter
      </Link>
      <div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <div>{project.readingTime}min</div>
          {project.url ? <div>•</div> : null}
          {project.url && (
            <BasicButton asChild variant="link">
              <Link target='_blank' rel="nofollow" href={project.url}>
                {project.url}
              </Link>
            </BasicButton>
          )}

        </div>
        <h1 className="mt-2 inline-block text-4xl font-bold leading-tight lg:text-5xl">
          {project.title}
        </h1>
      </div>
      <Mdx code={project.body.code} />
      {/* <Separator className="my-10" />
      <MdxPager currentItem={post} allItems={allPosts} /> */}
      <div className="flex justify-center py-5">
        <BasicButton asChild variant="ghost">
          <Link href="/blog">
            <Icons.chevronLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            Se alle indlæg
            <span className="sr-only">Se alle projekter</span>
          </Link>

        </BasicButton>
      </div>
    </Shell>
  )
}