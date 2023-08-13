// @ts-check
import { withContentlayer } from 'next-contentlayer'
import "./src/env.mjs"


/** @type {import("next").NextConfig} */
const config = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    mdxRs: true
  },
};

export default withContentlayer(config);
