/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import img from '../../assets/images/login/login.svg'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {

    const { createUser, handleUpdateProfile, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password)

        createUser(email, password).then((result) => {
            handleUpdateProfile(name)
            .then((result) => {
              logOut(); 
              navigate('/signin');
            })
            .catch((error) => {
              console.error(error);
            })
        });
    }

  return (
    <div className="py-20">
            <div className="flex justify-between items-center flex-col md:flex-row gap-10 md:gap-4">
                <div className="md:w-1/2">
                    <img src={img} alt="" className='w-full lg:w-96 h-full'/>
                </div>
                <div className="border p-10 w-full md:w-1/2 rounded-md">
                        <h1 className="text-3xl text-center font-bold mb-10">Sign Up</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter your name" className="input input-bordered outline-none focus:outline-none" />
                            </div>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter your email" className="input input-bordered outline-none focus:outline-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter your password" className="input input-bordered outline-none focus:outline-none" />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="bg-[#FF3811] px-5 py-3 w-full rounded-md font-semibold text-white text-xs md:text-sm">Sign Up</button>
                            </div>
                        </form>
                        <p className='my-4 text-[#737373] text-sm text-center'>Already have an account? <Link className='text-[#FF3811] font-semibold' to="/signin">Sign In</Link> </p>
                </div>
            </div>
        </div>
  )
}

export default SignUp
