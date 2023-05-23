/** @type {import('next').NextConfig} */

const isProd = process.env.NEXT_PUBLIC_BASE_PATH;

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd,
  assetPrefix: isProd
}

module.exports = nextConfig
