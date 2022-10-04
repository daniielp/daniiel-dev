import { NextApiRequest, NextApiResponse } from "next";
import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51LgEzrI7p9CvzCCZ2rCuieGWSY5T2iEXEfT6gzokjA0ps4OE3JbgGZWb6ho2gQ5T5gUO4sMBhvhMz8oXX2SzfcWY004ui5Fdb3', {
    apiVersion: '2022-08-01',
    typescript: true,
});

const YOUR_DOMAIN = 'http://localhost:3000';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1LjpwPI7p9CvzCCZLFszKdg2',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/success`,
        cancel_url: `${YOUR_DOMAIN}/cancel`,
      });



    res.redirect(session.url!);
}

export default handler