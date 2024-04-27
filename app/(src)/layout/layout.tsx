import React, { ReactElement } from 'react';
import { LayoutProps } from '@/.next/types/app/layout';
import Header from '../componenets/Header';

export default function layout({ children }: LayoutProps): ReactElement {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
