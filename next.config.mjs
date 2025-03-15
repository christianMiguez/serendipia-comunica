import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  output: 'export',
  experimental: {
    reactCompiler: false,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
    ],
  },
  // Add redirects configuration
  async redirects() {
    return [
      {
        source: '/redirectlink',
        destination: 'https://example.com',
        permanent: true,
      },
      // Add more redirects as needed
    ]
  },
}

export default withPayload(nextConfig)
