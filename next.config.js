const withImages = require("next-images");
const { publicRuntimeConfig, webpack } = withImages();

module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig,
  webpack,
  images: {
    disableStaticImages: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
