import "./src/lib/env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "media.graphassets.com", protocol: "https" }],
    unoptimized: process.env.VERCEL_ENV !== "production",
  },
};

export default nextConfig;
