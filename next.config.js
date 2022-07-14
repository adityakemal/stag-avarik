const withImages = require("next-images");
const { publicRuntimeConfig, webpack } = withImages();
const withSass = require('next-dart-sass')

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  reactStrictMode: true,
  publicRuntimeConfig,
  webpack,
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
})