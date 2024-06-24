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
      {
        protocol: 'https',
        hostname: 'edu-cloud.storage.iran.liara.space',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
