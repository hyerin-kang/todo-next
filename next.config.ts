import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  env: {
    // json-server URL 설정
    API_URL: process.env.API_URL || "http://localhost:3000",
  },
};

export default nextConfig;
