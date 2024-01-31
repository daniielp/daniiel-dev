// @ts-nocheck
import { defineDocumentType, makeSource, defineNestedType } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
    slug: {
        type: "string",
        resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
        type: "string",
        resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
    readingTime: {
        type: "number",
        resolve: (doc) => {
            const content = doc.body.raw
            const wordsPerMinute = 200
            const numberOfWords = content.split(/\s/g).length
            const minutes = numberOfWords / wordsPerMinute
            return Math.ceil(minutes)
        },
    },
}

export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `blog/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
        },
        date: {
            type: "date",
            required: true,
        },
        published: {
            type: "boolean",
            default: true,
        },
        image: {
            type: "string",
            required: false,
        },
        authors: {
            // Reference types are not embedded.
            // Until this is fixed, we can use a simple list.
            // type: "reference",
            // of: Author,
            type: "list",
            of: { type: "string" },
            required: true,
        },
    },
    computedFields,
}))

export const Project = defineDocumentType(() => ({
    name: "Project",
    filePathPattern: `projekter/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
        },
        published: {
            type: "boolean",
            default: true,
        },
        url: {
            type: "string",
            required: false,
        }
    },
    computedFields,
}))

export const Author = defineDocumentType(() => ({
    name: "Author",
    filePathPattern: `authors/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
        },
        twitter: {
            type: "string",
            required: true,
        },
    },
    computedFields,
}))

const LinksProperties = defineNestedType(() => ({
    name: "LinksProperties",
    fields: {
      doc: {
        type: "string",
      },
      api: {
        type: "string",
      },
    },
  }))

export const Doc = defineDocumentType(() => ({
    name: "Doc",
    filePathPattern: `design/**/*.mdx`,
    contentType: "mdx",
    fields: {
      title: {
        type: "string",
        required: true,
      },
      description: {
        type: "string",
        required: true,
      },
      published: {
        type: "boolean",
        default: true,
      },
      links: {
        type: "nested",
        of: LinksProperties,
      },
      featured: {
        type: "boolean",
        default: false,
        required: false,
      },
      component: {
        type: "boolean",
        default: false,
        required: false,
      },
      toc: {
        type: "boolean",
        default: true,
        required: false,
      },
    },
    computedFields,
  }))

export default makeSource({
    contentDirPath: "./src/content",
    documentTypes: [Post, Project, Author, Doc],
    filePathPattern: `/**/*.mdx`,
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    theme: "github-dark",
                    onVisitLine(node) {
                        // Prevent lines from collapsing in `display: grid` mode, and allow empty
                        // lines to be copy/pasted
                        if (node.children.length === 0) {
                            node.children = [{ type: "text", value: " " }]
                        }
                    },
                    onVisitHighlightedLine(node) {
                        node.properties.className.push("line--highlighted")
                    },
                    onVisitHighlightedWord(node) {
                        node.properties.className = ["word--highlighted"]
                    },
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["subheading-anchor"],
                        ariaLabel: "Link to section",
                    },
                },
            ],
        ],
    },
})