/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Disable Jest workers to fix the Jest worker error
    workerThreads: false,
  },
};

module.exports = nextConfig;