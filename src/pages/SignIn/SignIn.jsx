/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import img from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider';

const SignIn = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => console.log(error));

    }

  return (
    <div className="py-20">
            <div className="flex justify-between items-center flex-col md:flex-row gap-10 md:gap-4">
                <div className="md:w-1/2">
                    <img src={img} alt="" className='w-full lg:w-96 h-full'/>
                </div>
                <div className="border p-10 w-full md:w-1/2 rounded-md">
                        <h1 className="text-3xl text-center font-bold mb-10">Sign In</h1>
                        <form onSubmit={handleSignIn}>
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
                                <button type="submit" className="bg-[#FF3811] px-5 py-3 w-full rounded-md font-semibold text-white text-xs md:text-sm">Sign In</button>
                            </div>
                        </form>
                        <p className='my-4 text-[#737373] text-sm text-center'>Do you have an account? <Link className='text-[#FF3811] font-semibold' to="/signup">Sign Up</Link> </p>
                </div>
            </div>
        </div>
  )
}

export default SignIn
