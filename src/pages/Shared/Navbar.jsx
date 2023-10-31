/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/logo.svg';
import { BsHandbag } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    e.preventDefault();
    logOut(); 
    navigate('/signin'); 
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-xs md:text-sm font-semibold text-[#FF3811]"
              : "text-xs md:text-sm font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-xs md:text-sm font-semibold text-[#FF3811]"
              : "text-xs md:text-sm font-semibold"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-xs md:text-sm font-semibold text-[#FF3811]"
              : "text-xs md:text-sm font-semibold"
          }
        >
          Services
        </NavLink>
      </li>
      
      {user?.email ? (
        <li>
        <NavLink
          to="/checkouts"
          className={({ isActive }) =>
            isActive
              ? "text-xs md:text-sm font-semibold text-[#FF3811]"
              : "text-xs md:text-sm font-semibold"
          }
        >
          My Order
        </NavLink>
      </li>
        ) : null
      }
    </>
  );

  return (
    <div>
      <div className="navbar max-w-7xl mx-auto pl-3 md:pl-5 pr-8 lg:px-12 py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul className="menu-sm dropdown-content mt-7 z-[1] p-5 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <img src={logo} alt="" className="w-12 lg:w-16"/>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center justify-center gap-10 font-medium text-sm menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end items-center gap-5">
            <i><BsHandbag></BsHandbag></i>
            <i><FiSearch></FiSearch></i>
            {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="avatar">
                <p className="font-semibold">{user.displayName}</p>
              </label>
              <ul
                tabIndex={0}
                className="menu-sm dropdown-content mt-10 z-[1] p-4 shadow text-center bg-base-100 rounded-box w-52"
              >
                <li>
                  <button onClick={handleLogOut} className="text-xs lg:text-sm font-bold hover:text-[#FF3811]">Log Out</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/signin">
                <button className="border border-[#FF3811] hover:bg-[#FF3811] hover:text-white px-4 py-2 rounded font-semibold text-[#FF3811] text-xs md:text-sm">Sign In</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
