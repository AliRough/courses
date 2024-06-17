'use client';

import Footer from '@/app/(src)/componenets/Footer';
import Header from '@/app/(src)/componenets/Header';
import Script from 'next/script';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '@/public/vendor/plyr/plyr.css';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script src='/vendor/plyr/plyr.js' />
      <Header />
      {children}
      <Footer />
    </>
  );
}
