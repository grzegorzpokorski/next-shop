import type { NextConfig } from "next";
import "./src/lib/env.mjs";

const nextConfig: NextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: "eu-central-1-shared-euc1-02.graphassets.com",
        protocol: "https",
      },
    ],
    unoptimized: process.env.VERCEL_ENV !== "production",
  },
};

export default nextConfig;
