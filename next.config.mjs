// next.config.mjs
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.cache = {
      type: 'filesystem',
      cacheDirectory: path.resolve('./.next/cache/webpack'),
      compression: 'gzip', // Compress the cache
    };

    // Suppress large serialization warnings
    config.infrastructureLogging = {
      level: 'error', // Show only errors, hide warnings
    };

    return config;
  },
};

export default nextConfig;
