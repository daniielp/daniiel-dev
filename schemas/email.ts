import z from 'zod';


export const emailSchema = z.object({
    name: z.string(),
    email: z.string().email("invalid email"),
    subject: z.string({
        errorMap: (issue , _ctx) => ({
            message: 'missing subject'
        })
    }),
    message: z.string(),
    recaptchaResponse: z.string(),
});
