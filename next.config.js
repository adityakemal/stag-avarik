const withImages = require("next-images");
const { publicRuntimeConfig, webpack } = withImages();
const path = require('path')

module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig,
  webpack,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    //env here
    NEXT_PUBLIC_API_LEADERBORD: process.env.NEXT_PUBLIC_API_LEADERBORD,
    NEXT_PUBLIC_LEADERBOARD_SECRET_KEY: process.env.NEXT_PUBLIC_LEADERBOARD_SECRET_KEY,
    NEXT_PUBLIC_ETHERSCAN_API: process.env.NEXT_PUBLIC_ETHERSCAN_API,
  },
  images: {
    // loader: 'akamai',
    // path: '/',
    disableStaticImages: true,
    domains: ["lh3.googleusercontent.com"],
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}
