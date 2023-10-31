/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import checkout from '../../assets/images/checkout/checkout.png'
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Checkout = () => {

    const service = useLoaderData();
    const {title, price, img, _id} = service;
    const {user} = useContext(AuthContext);

    const currentDate = new Date().toISOString().split('T')[0];

    const handleCheckout = event =>{
      event.preventDefault();

      const form = event.target;
      const name = form.name.value;
      const date = form.date.value;
      const price = form.price.value;
      const email = user?.email;
      const checkout = {
        customerName: name, 
        email, 
        img,
        date, 
        service: title,
        service_id: _id, 
        price: price
    }
    console.log(checkout)

    fetch('https://car-doctor-server-nine-flame.vercel.app/checkout', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(checkout)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                  'Congratulations!',
                  'Checkout Successfully.',
                  'success'
                )
            }
        })
    }

  return (
    <div>
      <div className="carousel-item relative w-full ">
          <img
            src={checkout}
            className="w-full rounded-md"
          />
          <div className="absolute rounded-md flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className='text-white space-y-7 pl-8 md:pl-12'>
                  <h2 className='text-2xl md:text-4xl lg:text-5xl font-semibold'>{title}</h2>
              </div>
          </div>
        </div>
      <div className="py-10">
        <div className="bg-[#F3F3F3] rounded-lg px-8 lg:px-20 py-12 lg:py-20">
          <form onSubmit={handleCheckout}>    
            <div className="md:flex gap-7 md:mb-4">
              <div className="form-control md:w-1/2">
              <label className="label">
                  <span className="label-text text-base font-semibold">Name</span>
                </label>
                <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    placeholder="Your Name"
                    className="input text-sm w-full outline-none focus:outline-none"
                    required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-base font-semibold">Email</span>
                </label>
                <input
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    placeholder="Your Email"
                    className="input text-sm w-full outline-none focus:outline-none"
                    required
                />
              </div>
            </div>
            
            <div className="md:flex gap-7 md:mb-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-base font-semibold">Due Amount</span>
                </label>
                <input
                    type="text"
                    name="price"
                    defaultValue={'$' + price}
                    placeholder="Due Amount"
                    className="input text-sm w-full outline-none focus:outline-none"
                    required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-base font-semibold">Date</span>
                </label>
                <input
                    type="date"
                    name="date"
                    defaultValue={currentDate} 
                    placeholder="Date"
                    className="input text-sm w-full outline-none focus:outline-none"
                    required
                />
              </div>
            </div>

            <div className="mt-10">
              <button type='submit' className="bg-[#FF3811] w-full text-white p-3 rounded-md text-base font-medium">Order Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Checkout
