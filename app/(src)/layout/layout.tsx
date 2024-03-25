
import React, { ReactElement } from 'react'
import Header from '../site/componenets/Header'
import { LayoutProps } from '@/.next/types/app/layout'

export default function layout({ children }: LayoutProps): ReactElement {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
