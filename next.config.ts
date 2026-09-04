import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/methode", destination: "/", permanent: true },
      { source: "/formation", destination: "/", permanent: true },
      { source: "/etablissements", destination: "/", permanent: true },
      { source: "/parents", destination: "/", permanent: true },
      { source: "/offres/cours-thematiques-mensuels", destination: "/offres/cours-hebdomadaires", permanent: true },
      { source: "/tarifs", destination: "/contact", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
