import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  transpilePackages: ['react-pdf', 'pdfjs-dist', 'next-intl', 'react-icons'],
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
