import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import TanstackProvider from './tanstackProvider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icons: {
    icon: '/images/Untitled.png', // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fa' dir='rtl'>
      <body>
        <TanstackProvider>
          {children}
        </TanstackProvider>

        <Script src='/vendor/aos/aos.js' />
        <Script src='/vendor/bootstrap/dist/js/bootstrap.bundle.min.js' />
        <Script src='/vendor/choices/js/choices.min.js' />
        <Script src='/vendor/tiny-slider/tiny-slider-rtl.js' />
        <Script src='/vendor/glightbox/js/glightbox.js' />
        <Script src='/vendor/purecounterjs/dist/purecounter_vanilla.js' />
        <Script src='/functions.js' />
      </body>
    </html>
  );
}
