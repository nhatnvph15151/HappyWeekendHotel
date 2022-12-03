import React from 'react'
import { LayoutProps } from '../../models/layout'
import Footer from '../Footer'
import Header from '../Header'

type Props = {}

const HomePageLayout = ({children}: LayoutProps) => {
  return (
    <div className="">
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default HomePageLayout