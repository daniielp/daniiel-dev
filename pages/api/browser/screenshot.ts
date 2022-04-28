import type { NextApiRequest, NextApiResponse } from "next";

const puppeteer = require("puppeteer-core");
const chrome = require("chrome-aws-lambda");

interface ScreenshotApiRequest extends NextApiRequest {
  body: {
    url: string;
  };
}


const exePath =
  process.platform === "win32"
    ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
    : process.platform === "linux"
    ? "/usr/bin/google-chrome"
    : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

async function getOptions() {
  let options;
  if (process.env.NODE_ENV === "development") {
    options = {
      args: chrome.args,
      executablePath: exePath,
      headless: true,
    };
  } else {
    options = {
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    };
  }
  return options;
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

      const options = await getOptions();

      puppeteer.launch().then(async (browser: any) => {
        const page = await browser.newPage();
        await page.goto(requestURL.toString());
        await page.waitForNetworkIdle();
        await page.screenshot({
          type: "jpeg",
          quality: 50,
          path: "public/project-" + domainName + ".jpg",
        });

        browser.close();

        return res.status(201).json({
          code: "screenshot_created",
          path: "/project-" + domainName + ".jpg",
        });
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
