/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: false,
  // images: {
  //   unoptimized: true,
  // },

  images: {
    loader: "akamai",
    path: "",
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      ...defaultPathMap,
      // Add custom paths here if needed
    };
  },
};

module.exports = nextConfig;
