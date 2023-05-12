/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["mosaic.scdn.co", "i.scdn.co"],
  },
  env: {
    REDIRECT_URI: process.env.REDIRECT_URI,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
  },
};

module.exports = nextConfig;
