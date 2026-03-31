import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Services from './Services'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
     <Navbar/>
     <Outlet/>
     <Services/>
     <Footer/>
    </>
  )
}

export default Layout