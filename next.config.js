/** @type {import('next').NextConfig} */

const isProd = process.env.NEXT_PUBLIC_BASE_PATH;

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd
}

module.exports = nextConfig
