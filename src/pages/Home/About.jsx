/* eslint-disable no-unused-vars */
import React from 'react'
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen pt-20 pb-12 lg:pb-32">
        <div className="flex flex-col lg:flex-row gap-10">
            <div className='lg:w-1/2 relative'>
                <img src={person} className="w-4/5 lg:w-3/4 h-full rounded-md" />
                <img src={parts} className="w-1/2 absolute right-0 lg:right-1 top-2/3 lg:top-3/4 rounded-md border-8 border-white" />
            </div>
            <div className='lg:w-1/2 space-y-5 pt-14 md:pt-28 lg:pt-0'>
                <h3 className='text-base md:text-lg text-[#FF3811] font-bold mb-2'>About Us</h3>
                <h1 className="text-3xl md:text-4xl md:w-3/4 font-bold">We are qualified & of experience in this field</h1>
                <p className="pt-6 pb-2 text-[#737373] text-sm leading-6 text-justify lg:w-10/12">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className="pb-6 text-[#737373] text-sm leading-6 text-justify lg:w-10/12">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className="bg-[#FF3811] px-5 py-3 rounded font-semibold text-white text-xs md:text-sm">Get More Info</button>
            </div>
        </div>
    </div>
  )
}

export default About
