import React, { ReactElement } from 'react';
import Header from '../componenets/Header';

export default function layout({ children }: any): ReactElement {
  return (
    <>
      <Header />
      {children}
      
    </>
  );
}
