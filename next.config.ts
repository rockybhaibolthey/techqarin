// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: 'export',         // enables static HTML export
//   images: {
//     unoptimized: true,      // GitHub Pages cannot run Next.js image optimization
//     domains: ['images.unsplash.com'],
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Techqarin',
  assetPrefix: '/Techqarin/',      // ensures JS/CSS/fonts are loaded correctly
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;