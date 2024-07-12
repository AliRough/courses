import React, { ReactElement } from 'react';
import Header from '../(src)/componenets/Header';
import Footer from '../(src)/componenets/Footer';

export default function layout({ children }: any): ReactElement {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
