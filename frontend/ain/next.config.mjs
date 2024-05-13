/** @type {import('next').NextConfig} */

import withPWAInit from '@ducanh2912/next-pwa';

const withPWA = withPWAInit({
  // reactStrictMode: false,
  reactStrictMode: true,
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  images: {
    loader: 'custom',
    loaderFile: './image-loader.tsx',
  },

  // test
  // workboxPluginMode: 'GenerateSW',

  workboxOptions: {
    disableDevLogs: true,
    // exclude: [/\.map$/, /_redirects/],
  },
});

const nextConfig = {};

export default withPWA({
  nextConfig,
});