/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push("spotify-preview-finder");
    }
    return config;
  },
  experimental: {
    serverComponentsExternalPackages: ["spotify-preview-finder"],
  },
};

export default nextConfig;
