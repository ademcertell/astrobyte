/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    NEXT_PUBLIC_ASTRONOMY_API: process.env.NEXT_PUBLIC_ASTRONOMY_API
  },
};

module.exports = nextConfig;
