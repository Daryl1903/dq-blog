import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "avatars.githubusercontent.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "media.istockphoto.com",
        protocol: "https",
        port: "",
      },
    ]
  }
};

export default nextConfig;
