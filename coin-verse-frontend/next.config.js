/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false, env: {
    url: process.env.SERVER,
    crypto: process.env.CRYPTO_API,
    accessToken: process.env.CRYPTO_TOKEN,
  },
  images: {
    domains: ["cdn.coinranking.com"],
  },
};

module.exports = nextConfig;
