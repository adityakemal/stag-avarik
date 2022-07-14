const withImages = require("next-images");
const { publicRuntimeConfig, webpack } = withImages();
// const path = require('path')

module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig,
  webpack,
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
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