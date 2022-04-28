import puppeteer from "puppeteer";
import type { NextApiRequest, NextApiResponse } from "next";
import chrome from "chrome-aws-lambda";

interface ScreenshotApiRequest extends NextApiRequest {
  body: {
    url: string;
  };
}

async function screenshotHandler(
  req: ScreenshotApiRequest,
  res: NextApiResponse
) {
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
        .launch(
          process.env.NODE_ENV === "production"
            ? {
                args: chrome.args,
                executablePath: await chrome.executablePath,
                headless: chrome.headless,
                defaultViewport: {
                  width: 1920,
                  height: 1080,
                },
              }
            : {
                defaultViewport: {
                  width: 1920,
                  height: 1080,
                },
              }
        )
        .then(async (browser) => {
          const page = await browser.newPage();
          await page.goto(requestURL.toString());
          await page.waitForNetworkIdle();
          await page.screenshot({
            type: "jpeg",
            quality: 50,
            path: "public/" + domainName + ".jpg",
          });

          browser.close();
        });

      return res.status(201).json({
        code: "screenshot_created",
        path: "/" + domainName + ".jpg",
      });
    } catch (err: any) {
      return res.status(400).json({
        code: "invalid_url",
        message: err.message,
      });
    }
  } else {
    return res.status(405).json({
      code: "method_not_allowed",
      message: req.method + " Method is not allowed on this path",
    });
  }
}

export default screenshotHandler;
