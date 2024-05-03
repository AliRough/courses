import React from 'react';
import Header from '@/app/(src)/componenets/Header';

export default function layout({ children }: any) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
