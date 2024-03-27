'use client';

import Footer from '@/app/(src)/componenets/Footer';
import Header from '@/app/(src)/componenets/Header';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
