import puppeteer from "puppeteer";
import type { NextApiRequest, NextApiResponse } from "next";

interface ScreenshotApiRequest extends NextApiRequest {
  body: {
    url: string;
  };
}

function screenshotHandler(req: ScreenshotApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const body = req.body;

    if (body.url == null || body.url == undefined) {
      return res.status(400).json({
        code: "bad_request",
        message: "url is missing from the request body",
      });
    }

    try {
      const requestURL = new URL(body.url);

      const domains = requestURL.hostname.split(".");
      const domainName = domains[domains.length - 2];

      puppeteer
        .launch({
          defaultViewport: {
            width: 1920,
            height: 1080,
          },
        })
        .then(async (browser) => {
          const page = await browser.newPage();
          await page.goto(requestURL.toString());
          await page.waitForNetworkIdle();
          await page.screenshot({
            type: "jpeg",
            quality: 50,
            path: "public/project-" + domainName + ".jpg",
          });

          browser.close();
        });

      return res.status(201).json({
        code: "screenshot_created",
        path: "/project-" + domainName + ".jpg",
      });
    } catch (err: any) {
      return res.status(400).json({
        code: "invalid_url",
        message: err.message,
      })
    }
  } else {
    return res.status(405).json({
      code: "method_not_allowed",
      message: req.method + " Method is not allowed on this path",
    });
  }
}

export default screenshotHandler;
