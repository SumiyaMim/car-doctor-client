/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://car-doctor-server-nine-flame.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

  return (
    <div className='py-10 lg:py-20'>
        <div className="text-center">
            <h3 className='text-base md:text-lg text-[#FF3811] font-bold mb-2'>Our Services</h3>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Service Area</h2>
            <p className="text-[#737373] text-sm leading-6 text-center lg:w-1/2 mx-auto mb-10">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                services.map(service => <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
            }
        </div>
    </div>
  )
}

export default Services
