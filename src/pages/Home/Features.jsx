/* eslint-disable no-unused-vars */
import React from 'react'
import team from '../../assets/icons/team.svg'
import time from '../../assets/icons/time.svg'
import check from '../../assets/icons/check.svg'
import support from '../../assets/icons/support.svg'
import equipment from '../../assets/icons/equipment.svg'
import delivery from '../../assets/icons/delivery.svg'

const Features = () => {
  return (
    <div className='mb-20'>
       <div className="text-center">
            <h3 className='text-base md:text-lg text-[#FF3811] font-bold mb-2'>Core Features</h3>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-[#737373] text-sm leading-6 text-center lg:w-1/2 mx-auto mb-10">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5'>
            <div className='border rounded-md p-5'>
                <img src={team} alt="" className='mb-3 w-14 h-14 mx-auto'/>
                <h3 className='text-sm font-semibold text-center'>Expert Team</h3>
            </div>
            <div className='border rounded-md p-5'>
                <img src={time} alt="" className='mb-3 w-14 h-14 mx-auto'/>
                <h3 className='text-sm font-semibold text-center'>Timely Delivery</h3>
            </div>
            <div className='border rounded-md p-5'>
                <img src={support} alt="" className='mb-3 w-14 h-14 mx-auto'/>
                <h3 className='text-sm font-semibold text-center'>24/7 Support</h3>
            </div>
            <div className='border rounded-md p-5'>
                <img src={equipment} alt="" className='mb-3 w-14 h-14 mx-auto'/>
                <h3 className='text-sm font-semibold text-center'>Best Equipment</h3>
            </div>
            <div className='border rounded-md p-5'>
                <img src={check} alt="" className='mb-3 w-14 h-14 mx-auto'/>
                <h3 className='text-sm font-semibold text-center'>100% Guranty</h3>
            </div>
            <div className='border rounded-md p-5'>
                <img src={delivery} alt="" className='mb-3 w-14 h-14 mx-auto'/>
                <h3 className='text-sm font-semibold text-center'>Fast Delivery</h3>
            </div>
        </div>
    </div>
  )
}

export default Features
