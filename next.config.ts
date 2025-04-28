import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    // Mock `fs` and `worker_threads` modules for the client-side
    if (!isServer) {
      config.node = {
        fs: 'empty', // Mock the 'fs' module
        worker_threads: 'empty', // Mock the 'worker_threads' module
      };
    }
    return config;
  },
};

export default nextConfig;
