import React from 'react';
import { NavLink } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import loginImg from "../assets/Logo.svg";

export const NavBar = () => {

    const navigateTo = useNavigate()

    function loginHandler(){
        navigateTo('/login')
    }
    function signUpHandler(){
        navigateTo('/signUp')
    }
  return (
    <div className="flex justify-between items-center p-4 bg-gray-900 text-white border-b border-gray-600 fixed top-0 w-full">
      <div className="flex items-center space-x-4">
        {/* Nav Icon */}
        <div className="text-xl"><img src={loginImg}></img></div>
      </div>

      <div className="space-x-4">
        {/* Navigation Links */}
        <NavLink to="/" className="text-white hover:text-yellow-400">HOME</NavLink>
        <NavLink to="/about" className="text-white hover:text-yellow-400">ABOUT</NavLink>
        <NavLink to="/contact" className="text-white hover:text-yellow-400">CONTACT</NavLink>
      </div>

      <div className="space-x-4">
        {/* Login and Sign Up Buttons */}
        <button className="bg-white text-black px-4 py-2 rounded hover:bg-yellow-400" onClick={loginHandler}>LOGIN</button>
        <button className="bg-white text-black px-4 py-2 rounded hover:bg-yellow-400" onClick={signUpHandler}>Sign Up</button>
      </div>

      
    </div>
  );
};
