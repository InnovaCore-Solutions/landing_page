/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export", 
  basePath: "/landing_page"
  // i18n: {
  //   locales: ["en","es"],
  //   defaultLocale: "es",
  // },
  
}

module.exports = nextConfig;