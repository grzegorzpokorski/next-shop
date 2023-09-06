import "./src/lib/env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [{ hostname: "media.graphassets.com", protocol: "https" }],
  },
};

export default nextConfig;
