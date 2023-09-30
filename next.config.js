/** @type {import('next').NextConfig} */
const nextConfig = {
	cors: {
    origin: "*",
  },
}

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
	defaultShowCopyCode: true
})

module.exports = withNextra(nextConfig)
