import http from "https";
import fetch from "node-fetch";
import type { NextApiRequest, NextApiResponse } from "next";
function createContact(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const url = 'https://api.sendinblue.com/v3/contacts';

        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'api-key': process.env.SENDINBLUE_API_KEY as string
            },
            body: JSON.stringify({
                attributes: { FNAME: 'Elly', LNAME: 'Roger', newKey: 'New Value' },
                updateEnabled: false,
                email: 'elly@example.com',
                emailBlacklisted: true,
                smsBlacklisted: false
            })
        };

        fetch(url, options)
            .then(response => response.json() as any)
            .then(data => {
                console.log(data)
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(500).json({code: "internal_server_error", message: "Something went wrong, please try again"})
            })
    } else {
        res.status(405).json({ code: "method_not_allowed", message: req.method + " Method is not allowed on this path" })
    }


}

export default createContact