/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import order from "../../assets/images/order/order.png";
import Swal from 'sweetalert2';

const Checkouts = () => {
  const { user } = useContext(AuthContext);
  const [checkouts, setCheckouts] = useState([]);

  const url = `https://car-doctor-server-nine-flame.vercel.app/checkout?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCheckouts(data));
  }, [url]);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Are you sure that you want to delete it?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {

            fetch(`https://car-doctor-server-nine-flame.vercel.app/checkout/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Delete Successfully.',
                        'success'
                    )
                    // remove the service from the UI
                    const remaining = checkouts.filter(checkout => checkout._id !== id);
                    setCheckouts(remaining);
                }
            })
        }
    })
  }

  const handlePlaceOrder = id => {
      fetch(`https://car-doctor-server-nine-flame.vercel.app/checkout/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                  // update state
                  const remaining = checkouts.filter(checkout => checkout._id !== id);
                  const updated = checkouts.find(checkout => checkout._id === id);
                  updated.status = 'confirm'
                  const newCheckouts = [updated, ...remaining];
                  setCheckouts(newCheckouts);
              }
            })
  }


  return (
    <div>
      <div className="carousel-item relative w-full ">
        <img src={order} className="w-full rounded-md" />
        <div className="absolute rounded-md flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-8 md:pl-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
              Order Details
            </h2>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto py-20">
        <table className="table">
          <tbody>
            {checkouts.map((checkout) => (
              <tr key={checkout._id}>
                <th>
                <button onClick={() => handleDelete(checkout._id)} className="bg-[#444444] text-white p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask rounded-md w-10 h-10 md:w-20 md:h-20">
                        <img
                          src={checkout.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-xs md:text-sm lg:text-base">{checkout.service}</div>
                    </div>
                  </div>
                </td>
                <td className="font-semibold text-xs lg:text-sm">{checkout.date}</td>
                <td className="font-semibold text-xs lg:text-sm">{checkout.price}</td>
                <th>
                  {checkout.status === 'confirm' ? <span className="text-xs lg:text-sm font-medium rounded-md bg-[#e5e5e5] px-8 py-2 ">Confirmed</span> 
                  :
                  <button onClick={() => handlePlaceOrder(checkout._id)} className="bg-[#FF3811] text-white px-5 py-2 rounded-md text-xs lg:text-sm font-medium">Confirm Order</button>
                  }
                </th>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Checkouts;
