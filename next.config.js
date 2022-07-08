const withImages = require("next-images");
const { publicRuntimeConfig, webpack } = withImages();

module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig,
  webpack,
  images: {
    loader: 'akamai',
    path: '/',
    disableStaticImages: true,
    domains: ["lh3.googleusercontent.com"],
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}