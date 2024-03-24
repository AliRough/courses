
import React, { ReactElement } from 'react'
import Header from './componenets/Header'
import Footer from './componenets/Footer'


export default function layout({children }:any) :ReactElement{
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}
