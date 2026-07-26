/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  swcMinify: true,
  experimental: {
  },
};

module.exports = nextConfig;
