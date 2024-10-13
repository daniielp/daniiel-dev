// 1. Import utilities from `astro:content`
import { glob } from "astro/loaders"
import { z, defineCollection } from "astro:content"
// 2. Define your collection(s)
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/blog" }),
  schema: z.object({
    isDraft: z.boolean().default(true),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z
      .object({
        src: z.string(),
        alt: z.string()
      })
      .optional(),
    publishDate: z.date()
  })
})

const policyCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/policy" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date()
  })
})

const caseCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/case" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    image: z
      .object({
        src: z.string(),
        alt: z.string()
      })
      .optional(),
    productionUrl: z.string().url().optional(),
    featured: z.boolean().default(false)
  })
})

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
  policy: policyCollection,
  case: caseCollection
}
