import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  transpilePackages: ['react-pdf', 'pdfjs-dist'],
};
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
