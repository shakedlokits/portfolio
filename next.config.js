/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'cdn-images-1.medium.com', 
      'raw.githubusercontent.com',
      'user-images.githubusercontent.com',
      'opengraph.githubassets.com',
      'mir-s3-cdn-cf.behance.net'
    ]
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
