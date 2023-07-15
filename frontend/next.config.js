/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    appDir: false,
    typedRoutes: true,
  },
  output: 'standalone',
}
