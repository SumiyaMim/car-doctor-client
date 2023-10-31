/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Shared/Footer'
import Navbar from '../pages/Shared/Navbar'

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-7xl mx-auto px-6 md:px-8 lg:px-12'>
            <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Main
