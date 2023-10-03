/** @type {import('next').NextConfig} */
const nextConfig = {
	// cors: {
  //   origin: "*",
  // },
	images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's.gravatar.com',
        port: '',
        pathname: '/avatar/**',
      },
    ],
  },
}

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
	defaultShowCopyCode: true
})

module.exports = withNextra(nextConfig)
