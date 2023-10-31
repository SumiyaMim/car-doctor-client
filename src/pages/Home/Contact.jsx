/* eslint-disable no-unused-vars */
import React from 'react'
import time from '../../assets/time.png'
import phone from '../../assets/phone.png'
import map from '../../assets/map.png'

const Contact = () => {
  return (
    <div className='bg-black text-white p-14 mb-20 rounded-lg'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='flex gap-4 items-center'>
            <img src={time} alt=""/>
            <div>
                <p className='text-xs'>We are open monday-friday</p>
                <h3 className='font-bold text-xl'>7:00 am - 9:00 pm</h3>
            </div>
        </div>
        <div className='flex gap-4 items-center'>
            <img src={phone} alt=""/>
            <div>
                <p className='text-xs'>Have a question?</p>
                <h3 className='font-bold text-xl'>+2546 251 2658</h3>
            </div>
        </div>
        <div className='flex gap-4 items-center'>
            <img src={map} alt=""/>
            <div>
                <p className='text-xs'>Need a repair? our address</p>
                <h3 className='font-bold text-xl'>Liza Street, New York</h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
