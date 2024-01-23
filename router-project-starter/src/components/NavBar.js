import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import loginImg from '../assets/Logo.svg';

export const NavBar = () => {
  const navigateTo = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const loginHandler = () => {
    navigateTo('/login');
    closeMobileMenu(); // Close the mobile menu after clicking a link
  };

  const signUpHandler = () => {
    navigateTo('/signUp');
    closeMobileMenu(); // Close the mobile menu after clicking a link
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-900 text-white border-b border-gray-600 fixed top-0 w-full">
      <div className="flex items-center space-x-4">
        {/* Nav Icon */}
        <div className="text-xl">
          <img src={loginImg} alt="Logo" />
        </div>
      </div>

      <div className="lg:flex hidden space-x-4">
        {/* Navigation Links */}
        <NavLink
          to="/"
          className="text-white hover:text-yellow-400"
          activeClassName="border-b-2 border-yellow-400"
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          className="text-white hover:text-yellow-400"
          activeClassName="border-b-2 border-yellow-400"
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/contact"
          className="text-white hover:text-yellow-400"
          activeClassName="border-b-2 border-yellow-400"
        >
          CONTACT
        </NavLink>
      </div>

      <div className="lg:hidden flex items-center">
        {/* Hamburger Icon */}
        <button
          onClick={toggleMobileMenu}
          className="text-white hover:text-yellow-400 focus:outline-none focus:text-yellow-400"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 right-4 bg-gray-900 p-4 rounded shadow-md">
          <div className="flex flex-col space-y-4">
            <NavLink
              to="/"
              className="text-white hover:text-yellow-400"
              activeClassName="border-b-2 border-yellow-400"
              onClick={closeMobileMenu}
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              className="text-white hover:text-yellow-400"
              activeClassName="border-b-2 border-yellow-400"
              onClick={closeMobileMenu}
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/contact"
              className="text-white hover:text-yellow-400"
              activeClassName="border-b-2 border-yellow-400"
              onClick={closeMobileMenu}
            >
              CONTACT
            </NavLink>

            <NavLink
              to="/login"
              className="text-yellow-400 hover:text-white"
              activeClassName="border-b-2 border-yellow-400"
              onClick={closeMobileMenu}
            >
              LOGIN
            </NavLink>

            <NavLink
              to="/signUp"
              className="text-yellow-400 hover:text-white"
              activeClassName="border-b-2 border-yellow-400"
              onClick={closeMobileMenu}
            >
              SIGN UP
            </NavLink>
          </div>
        </div>
      )}

      <div className="lg:flex hidden space-x-4">
        {/* Login and Sign Up Buttons */}
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
