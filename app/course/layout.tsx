'use client';

import Footer from '@/app/(src)/componenets/Footer';
import Header from '@/app/(src)/componenets/Header';
import Script from 'next/script';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '@/public/vendor/plyr/plyr.css';
// import '@/public/vendor/sticky-js/';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script src='/vendor/plyr/plyr.js' />
      <Script src='/vendor/sticky-js/sticky.min.js' />
      <Header />
      {children}
      <Footer />
      script
    </>
  );
}
