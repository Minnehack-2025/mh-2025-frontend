import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/api/auth/error',
        destination: '/auth/error',
        permanent: false,
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
  /* other config options here */
};

export default nextConfig;