import React from 'react'
import { LayoutProps } from '../../models/layout'
import Footer from '../Footer'
import Header from '../Header'
import SiteHeader from './components/SiteHeader'

type Props = {}

const HomePageLayout = ({children}: LayoutProps) => {
  return (
    <div className="">
        <SiteHeader />
        {children}
        <Footer />
    </div>
  )
}

export default HomePageLayout