/* eslint-disable no-unused-vars */
import React from 'react'
import team1 from '../../assets/images/team/1.jpg'
import team2 from '../../assets/images/team/2.jpg'
import team3 from '../../assets/images/team/3.jpg'
import social from '../../assets/social.png'

const Team = () => {
  return (
    <div className='mb-20'>
        <div className="text-center">
            <h3 className='text-base md:text-lg text-[#FF3811] font-bold mb-2'>Team</h3>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-[#737373] text-sm leading-6 text-center lg:w-1/2 mx-auto mb-10">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <div className='rounded-md border p-5 text-center'>
                <img src={team1} alt="" className='rounded-md mb-3'/>
                <h2 className='font-bold text-lg text-[#444] mb-1'>John Smith</h2>
                <p className='text-sm text-[#737373] font-semibold mb-3'>Parts Technicians</p>
                <img src={social} alt="" className='w-28 mx-auto'/>
            </div>
            <div className='rounded-md border p-5 text-center'>
                <img src={team2} alt="" className='rounded-md mb-3'/>
                <h2 className='font-bold text-lg text-[#444] mb-1'>James Brown</h2>
                <p className='text-sm text-[#737373] font-semibold mb-3'>Engine Expert</p>
                <img src={social} alt="" className='w-28 mx-auto'/>
            </div>
            <div className='rounded-md border p-5 text-center'>
                <img src={team3} alt="" className='rounded-md mb-3'/>
                <h2 className='font-bold text-lg text-[#444] mb-1'>Michael Davis</h2>
                <p className='text-sm text-[#737373] font-semibold mb-3'>Car Detailer</p>
                <img src={social} alt="" className='w-28 mx-auto'/>
            </div>
        </div>
    </div>
  )
}

export default Team
