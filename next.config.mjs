// import withPWA from 'next-pwa';

// const nextConfig = withPWA({
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'fanavaran.liara.run',
//         port: '',
//         pathname: '/files/course/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'edu-cloud.storage.iran.liara.space',
//         port: '',
//         pathname: '/**',
//       },
//     ],
//   },
// });

// export default nextConfig;

// next.config.mjs
import withPWA from 'next-pwa';

const nextConfig = withPWA({
  dest: 'public', // The folder where your service worker and other assets will be saved
  register: true, // Enable the automatic registration of the service worker
  skipWaiting: true, // Allow the service worker to skip waiting for activation
  // disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
  // Additional Workbox configuration options
  workbox: {
    // You can customize the service worker behavior here
    runtimeCaching: [
      {
        urlPattern: /\/_next\/static\/.*/i, // Cache Next.js static files
        handler: 'CacheFirst', // Use CacheFirst for these assets
        options: {
          cacheName: 'nextjs-static-assets',
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 60 * 60 * 24 * 365, // Cache for 1 year
          },
        },
      },
      {
        urlPattern: /\/static\/.*/i, // Cache static assets in public folder
        handler: 'CacheFirst',
        options: {
          cacheName: 'static-assets',
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 60 * 60 * 24 * 365, // Cache for 1 year
          },
        },
      },
    ],
  },
});

export default nextConfig;
