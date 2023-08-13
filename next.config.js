// @ts-check
const {withContentlayer } = require("next-contentlayer")

/** @type {import("next").NextConfig} */
const config = {
  // pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    mdxRs: true
  },
};

module.exports = withContentlayer(config);
