/* eslint-disable no-unused-vars */
import React from 'react'
import cus1 from '../../assets/images/testimonial/cus1.png'
import cus2 from '../../assets/images/testimonial/cus2.png'
import quote from '../../assets/images/testimonial/quote.png'

const Testimonial = () => {
  return (
    <div className='mb-20'>
       <div className="text-center">
            <h3 className='text-base md:text-lg text-[#FF3811] font-bold mb-2'>Testimonial</h3>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">What Customer Says</h2>
            <p className="text-[#737373] text-sm leading-6 text-center lg:w-1/2 mx-auto mb-10">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='border rounded-md p-8 lg:p-10'>
                <div className='flex items-center justify-between lg:justify-start lg:gap-28 mb-4'>
                    <div className='flex items-center gap-4'>
                        <img src={cus1} alt="" className='w-14'/>
                        <div>
                            <h2 className='font-bold text-[#444] text-base lg:text-lg'>Awlad Hossain</h2>
                            <p className='text-xs lg:text-sm text-[#737373] font-semibold'>Businessman</p>
                        </div>
                    </div>
                    <img src={quote} alt="" />
                </div>
                <p className='text-[#737373] text-xs leading-6 mb-3 text-justify'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <div className="rating rating-sm gap-1">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF912C]" disabled/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF912C]" disabled/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF912C]" disabled/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF912C]" disabled/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF912C]" disabled/>
                </div>
            </div>
            <div className='border rounded-md p-8 lg:p-10'>
                <div className='flex items-center justify-between lg:justify-start lg:gap-28 mb-4'>
                    <div className='flex items-center gap-4'>
                        <img src={cus2} alt="" className='w-14'/>
                        <div>
                            <h2 className='font-bold text-[#444] text-base lg:text-lg'>John Davis</h2>
                            <p className='text-xs lg:text-sm text-[#737373] font-semibold'>Businessman</p>
                        </div>
                    </div>
                    <img src={quote} alt="" />
                </div>
                <p className='text-[#737373] text-xs leading-6 mb-3 text-justify'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <div className="rating rating-sm gap-1">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF912C]" disabled/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF912C]" disabled/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF912C]" disabled/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF912C]" disabled/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF912C]" disabled/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial
