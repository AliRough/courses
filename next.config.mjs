/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fanavaran.liara.run',
        port: '',
        pathname: '/files/course/**',
      },
    ],
  },
};

export default nextConfig;
