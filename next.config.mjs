import "./src/lib/env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "next-store.eu.saleor.cloud", protocol: "https" },
    ],
  },
};

export default nextConfig;
