import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import loginImg from "../assets/Logo.svg";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigateTo = useNavigate();

  function loginHandler() {
    navigateTo('/login');
    closeMenu();
  }

  function signUpHandler() {
    navigateTo('/signUp');
    closeMenu();
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <div className="flex justify-between items-center p-4 bg-gray-900 text-white border-b border-gray-600 fixed top-0 w-full">
      <div className="flex items-center space-x-4">
        {/* Nav Icon */}
        <div className="text-xl"><img src={loginImg} alt="Logo"></img></div>
      </div>

      {/* Dynamic Hamburger Menu */}
      <div className="md:hidden">
        <button className="text-white" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`md:flex ${isMenuOpen ? 'flex' : 'hidden'} md:space-x-4`}>
        <NavLink
          to="/"
          className="text-white hover:text-yellow-400"
          onClick={closeMenu}
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          className="text-white hover:text-yellow-400"
          onClick={closeMenu}
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/contact"
          className="text-white hover:text-yellow-400"
          onClick={closeMenu}
        >
          CONTACT
        </NavLink>
      </div>

      {/* Login and Sign Up Buttons */}
      <div className={`md:flex space-x-4 ${isMenuOpen ? 'flex' : 'hidden'}`}>
        <button
          className="bg-white text-black px-4 py-2 rounded hover:bg-yellow-400"
          onClick={loginHandler}
        >
          LOGIN
        </button>
        <button
          className="bg-white text-black px-4 py-2 rounded hover:bg-yellow-400"
          onClick={signUpHandler}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};
