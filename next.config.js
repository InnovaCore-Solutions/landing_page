/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '',
  i18n: {
    locales: ["en","es"],
    defaultLocale: "es",
  },
  
}

module.exports = nextConfig;