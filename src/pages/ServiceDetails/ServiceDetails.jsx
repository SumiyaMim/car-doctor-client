/* eslint-disable no-unused-vars */
import React from 'react'
import checkout from '../../assets/images/checkout/checkout.png'
import logo2 from '../../assets/logo2.png'
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const service = useLoaderData();
    const {title, price, description, img, facility, _id} = service;

  return (
    <div>
      <div className="carousel-item relative w-full ">
          <img
            src={checkout}
            className="w-full rounded-md"
          />
          <div className="absolute rounded-md flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className='text-white space-y-7 pl-8 md:pl-12'>
                  <h2 className='text-2xl md:text-4xl lg:text-5xl font-semibold'>Service Details</h2>
              </div>
          </div>
        </div>
        <div className='my-20'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-6'>
                <div className='col-span-2'>
                    <img src={img} alt="" className='rounded-md h-72 w-full mb-10'/>
                    <h2 className='font-bold text-2xl mb-4'>{title}</h2>
                    <p className='text-sm leading-6 text-justify text-[#737373]'>{description}</p>
                    <div className='my-6 grid grid-cols-1 md:grid-cols-2 gap-5'>
                        {facility.map((facilityItem, id) => (
                            <div key={id} className='bg-[#F3F3F3] p-8 rounded-md border-t-2 border-[#FF3811]'>
                            <h3 className='text-[#444] font-bold text-base mb-2'>{facilityItem.name}</h3>
                            <p className='text-sm leading-6 text-justify text-[#737373]'>{facilityItem.details}</p>
                            </div>
                        ))}
                    </div>
                    <p className='text-sm leading-6 text-justify text-[#737373]'>{description}</p>
                </div>
                <div>
                    <div className='bg-black rounded-md p-8'>
                        <img src={logo2} alt="" className='mx-auto mb-5'/>
                        <p className='text-white font-bold text-center'>Need Help? We Are Here <br /> To Help You</p>
                        <div className='my-5 mx-10 bg-white py-8 rounded-md relative'>
                            <h4 className='text-[#FF3811] text-base font-bold text-center mb-1'>Car Doctor <span className='text-black'>Special</span></h4>
                            <p className='text-[#737373] font-semibold text-xs text-center'>Save up to <span className='text-[#FF3811]'>60% off</span></p>
                            <div className='flex justify-center'>
                                <button className="bg-[#FF3811] text-white px-5 py-2 rounded-md text-sm font-medium absolute top-[90px]">Get A Quote</button>
                            </div>
                        </div>
                        
                    </div>
                    <h2 className='font-bold text-xl my-6'>Price: ${price}</h2>
                    <Link to={`/checkout/${_id}`}>
                        <button className="bg-[#FF3811] w-full text-white p-3 rounded-md text-base font-medium">Proceed Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceDetails
