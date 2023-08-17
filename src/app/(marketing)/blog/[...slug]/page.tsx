import { absoluteUrl, classNames, formatDate } from '@/lib/utils'
import { allPosts } from 'contentlayer/generated'
import { env } from '@/env.mjs'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'
import { Mdx } from '@/components/mdx/mdxComponents'
import Image from "next/image"
import Link from "next/link"
import { Shell } from '@/components/shells/Shell'
import { buttonVariants } from '@/components/ui/Button'
import { Icons } from '@/components/Icons'

interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  const url = env.NEXT_PUBLIC_APP_URL ?? "localhost:3000"

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", post.title)
  ogUrl.searchParams.set("type", "Blog Post")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: post.title,
    description: post.description,
    authors: post.authors.map((author) => ({
      name: author,
    })),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(post.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()],
    },
  }
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }


  return (
    <Shell as="article" variant="markdown">
      <Link
        href="/blog"
        className={classNames(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        Se alle indlæg
      </Link>
      <div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          {post.date && (
            <time dateTime={post.date} className="block">
              Udgivet den {formatDate(post.date)}
            </time>
          )}
          {post.date ? <div>•</div> : null}
          <div>{post.readingTime}min</div>
        </div>
        <h1 className="mt-2 inline-block text-4xl font-bold leading-tight lg:text-5xl">
          {post.title}
        </h1>
        {/* {authors?.length ? (
          <div className="mt-4 flex space-x-4">
            {authors.map((author) =>
              author ? (
                <Link
                  key={author._id}
                  href={`https://twitter.com/${author.twitter}`}
                  className="flex items-center space-x-2 text-sm"
                >
                  <Image
                    src={author.avatar}
                    alt={author.title}
                    width={42}
                    height={42}
                    className="rounded-full bg-white"
                  />
                  <div className="flex-1 text-left leading-tight">
                    <p className="font-medium">{author.title}</p>
                    <p className="text-[12px] text-muted-foreground">
                      @{author.twitter}
                    </p>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        ) : null} */}
      </div>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
        />
      )}
      <Mdx code={post.body.code} />
      {/* <Separator className="my-10" />
      <MdxPager currentItem={post} allItems={allPosts} /> */}
      <div className="flex justify-center py-5">
        <Link href="/blog" className={classNames(buttonVariants({ variant: "ghost" }))}>
          <Icons.chevronLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          Se alle indlæg
          <span className="sr-only">Se alle indlæg</span>
        </Link>
      </div>
    </Shell>
  )
}