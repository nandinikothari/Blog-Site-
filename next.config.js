/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // ✅ Allow Next.js to use local images without optimization
  },
};

module.exports = nextConfig;
