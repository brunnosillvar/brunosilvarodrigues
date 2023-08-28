/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  i18n: {
    locales: ['pt','en'],
    defaultLocale: 'pt',
    localeDetection: false
  }
}

module.exports = nextConfig
