import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/images/**",
        search: "", // supports all images without query strings
      },
    ],
  },
};

export default nextConfig;
