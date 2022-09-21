import { NextApiRequest, NextApiResponse } from "next";
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51LgEzrI7p9CvzCCZ2rCuieGWSY5T2iEXEfT6gzokjA0ps4OE3JbgGZWb6ho2gQ5T5gUO4sMBhvhMz8oXX2SzfcWY004ui5Fdb3', {
    apiVersion: '2022-08-01',
    typescript: true,
});

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { item } = req.body;
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 1400,
        currency: "dkk",
        automatic_payment_methods: {
            enabled: true,
        }
    })

    res.send({
        clientSecret: paymentIntent.client_secret,
    })
}

export default handler;