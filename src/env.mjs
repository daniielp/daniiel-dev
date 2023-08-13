import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(["development", "test", "production"]),
    },
    client: {
        NEXT_PUBLIC_EMAIL: z.string().min(1),
        NEXT_PUBLIC_APP_URL: z.string().min(1).optional(),
    },
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        NEXT_PUBLIC_EMAIL: process.env.NEXT_PUBLIC_EMAIL,
        RESEND_API_KEY: process.env.RESEND_API_KEY,
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    },
})