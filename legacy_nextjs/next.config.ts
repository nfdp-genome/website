import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'
const isCloudflare = process.env.CLOUDFLARE_PAGES === 'true'
const repoName = 'website'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: (isProd && !isCloudflare) ? `/${repoName}` : '',
  assetPrefix: (isProd && !isCloudflare) ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
