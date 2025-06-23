import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: ["img.clerk.com"], // Add domains if using external images
    formats: ["image/webp"], // Enable WebP format for better compression
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "example.com", // Додайте інші домени, якщо потрібно
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
