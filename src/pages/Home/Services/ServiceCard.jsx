/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";
import { BsArrowRightShort } from 'react-icons/bs';


const ServiceCard = ({ service }) => {

    const { _id, title, img, price } = service;

    return (
        <div className="p-5 rounded-md border">
            <img src={img} alt="" className='w-full h-44 rounded-md mb-1'/>
            <h2 className='py-3 text-xl font-bold'>{title}</h2>
            <div className='text-[#FF3811] font-bold text-base flex justify-between items-center'>
                <p>Price: ${price}</p>
                <Link to={`/service-details/${_id}`}>
                    <button><BsArrowRightShort className='text-3xl'></BsArrowRightShort></button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;