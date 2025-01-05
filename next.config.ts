/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'i.annihil.us',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.annihil.us',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'gateway.marvel.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'gateway.marvel.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'invitacionesvirtuales.net',
        pathname: '/**',
      }
    ]
  }
}

module.exports = nextConfig