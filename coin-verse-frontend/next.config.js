/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false, env: {
    url: process.env.SERVER,
  }
};

module.exports = nextConfig;
