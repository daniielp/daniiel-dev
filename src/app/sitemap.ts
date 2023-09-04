import { MetadataRoute } from 'next'
import { allPosts, allProjects } from "contentlayer/generated"
import { absoluteUrl } from "@/lib/utils"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = allPosts.map((post) => ({
        url: absoluteUrl(`${post.slug}`),
        lastModified: new Date().toISOString(),
    }))

    const projects = allProjects.map((project) => ({
        url: absoluteUrl(`${project.slug}`),
        lastModified: new Date().toISOString(),
    }))

    const routes = [
        "",
        "/blog",
        "/projekter",
    ].map((route) => ({
        url: absoluteUrl(route),
        lastModified: new Date().toISOString(),
    }))

    return [
        ...routes,
        ...posts,
        ...projects,
    ]
}