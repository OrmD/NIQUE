import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    formats: ['image/webp'],
    deviceSizes: [768, 1024, 3840],
    // loader: 'default',
    // unoptimized: true,
    imageSizes: [32, 128, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, immutable',
          },
        ],
      },
      {
        source: '/conversions/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, immutable',
          },
        ],
      },
    ]
  },
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })

    return config
  },
  experimental: {
    esmExternals: true,
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
}


const withNextIntl = createNextIntlPlugin('./src/core/shared/lib/i18n/request.ts')
export default withNextIntl(nextConfig)
