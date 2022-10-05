import React from 'react'
import { LayoutProps } from '../../models/layout'
import Footer from '../Footer'
import Header from '../Header'

type Props = {}

const SiteLayout = ({children}: LayoutProps) => {
  return (
    <div className="">
        <Header />
        <div>{children}</div>
        <Footer />
    </div>
  )
}

export default SiteLayout