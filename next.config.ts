import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    // devIndicators: true,
    images: {
        remotePatterns: [new URL('https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png')],
    },
};

export default nextConfig;
