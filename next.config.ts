import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',         // enables static HTML export
  images: {
    unoptimized: true,      // GitHub Pages cannot run Next.js image optimization
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;