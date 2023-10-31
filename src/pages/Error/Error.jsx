/* eslint-disable no-unused-vars */
import React from 'react'
import error from '../../assets/error.png'
import Navbar from '../Shared/Navbar'
import Footer from '../Shared/Footer'

const Error = () => {
  return (
    <div>
      <Navbar></Navbar>
      <img src={error} alt="" className='mx-auto p-10'/>
      <Footer></Footer>
    </div>
  )
}

export default Error
