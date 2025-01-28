/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: false,

  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
