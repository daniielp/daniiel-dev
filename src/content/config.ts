// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content"
// 2. Define your collection(s)
const blogCollection = defineCollection({
  type: "content",
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
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date()
  })
})

const caseCollection = defineCollection({
  type: "content",
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
