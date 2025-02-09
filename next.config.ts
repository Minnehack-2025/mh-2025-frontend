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
  /* other config options here */
};

export default nextConfig;