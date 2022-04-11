import http from "https";
import type { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest, res: NextApiResponse) {
  const options = {
		"method": "POST",
		"hostname": "test.api.dibspayment.eu",
		"port": null,
		"path": "/v1/payments",
		"headers": {
			"content-type": "application/json",
			"Authorization": process.env.NETS_SECRET_KEY
		}
	};

  const restreq = http.request(options, function (resp) {
    let chunks: any[] = [];

    console.log("statusCode: ", resp.statusCode);
    console.log("headers: ", resp.headers);

    resp.on("data", function (chunk) {
      console.log("on data");
      chunks.push(chunk);
    });
    resp.on("end", function () {
      const body = Buffer.concat(chunks);
      console.log(body.toString());
      res.send(body.toString()) // Perform redirect
    });
  });

  let payload = {
    checkout: {
      url: "https://daniiel.dev",
      integrationType: "EmbeddedCheckout",
      returnUrl: "https://daniiel.dev/checkout",
      termsUrl: "https://daniiel.dev/terms",
    },
    order: {
      items: [
        {
          reference: "ref42",
          name: "Demo product",
          quantity: 2,
          unit: "hours",
          unitPrice: 80000,
          grossTotalAmount: 160000,
          netTotalAmount: 160000,
        },
      ],
      amount: 160000,
      currency: "DKK",
      reference: "Demo Order",
    },
  };

  restreq.write(JSON.stringify(payload));
  // console.log(JSON.parse(payload));

  restreq.on("error", function (e) {
    console.error("error");
    console.error(e);
  });
  restreq.end();
}

export default handler;
