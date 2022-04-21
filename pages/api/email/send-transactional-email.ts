import http from "https";
import fetch from "node-fetch";
import type { NextApiRequest, NextApiResponse } from "next";
import verifyReCaptcha from "../../../security/VerifyReCaptcha";

interface FormRequest {
    name: string;
    email: string;
    subject: string;
    message: string;
    recaptchaResponse: string;
}

async function createContact(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const url = 'https://api.sendinblue.com/v3/smtp/email';

        const body = req.body as FormRequest

        if (body == null) {
            return res.status(400).json({ code: "bad_request", message: "Missing body" })
        }

        if(body.email == null || body.message == null || body.name == null || body.subject == null || body.recaptchaResponse == null) {
            return res.status(400).json({ code: "bad_request", message: "Field(s) missing" })
        }

        var isRecaptchaVerified = await verifyReCaptcha(body.recaptchaResponse);

        if(!isRecaptchaVerified) {
            return res.status(400).json({ code: "bad_request", message: "reCAPTCHA invalid" })
        }

        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'api-key': process.env.SENDINBLUE_API_KEY as string
            },
            body: JSON.stringify({
                sender: { name: 'Daniel from daniiel.dev', email: 'no-reply@daniiel.dev' },
                to: [{ email: 'dp@daniiel.dev', name: 'Daniel' }],
                textContent: body.message,
                subject: body.subject,
                replyTo: { email: body.email, name: body.name },
            })
        };


        fetch(url, options)
            .then(response => response.json() as any)
            .then(data => {
                if (data.code == null) {
                    res.status(200).json({ code: "email_sent", message: "Email has been sent successfully" })
                } else {
                    res.status(400).json({ code: "bad_request", message: "Cannot process the request" })
                }
            })
            .catch(err => {
                res.status(500).json({ code: "internal_server_error", message: "Something went wrong, please try again" })
            })
    } else {
        res.status(405).json({ code: "method_not_allowed", message: req.method + " Method is not allowed on this path" })
    }




}

export default createContact