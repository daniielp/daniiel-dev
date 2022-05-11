import { object, string } from "yup";

export const emailSchema = object({
    name: string().required(),
    email: string().required().email(),
    subject: string().required(),
    message: string().required(),
    recaptchaResponse: string().required(),
});