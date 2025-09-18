import React from 'react';
import {NavLink } from 'react-router-dom';

const Header = () => {
  return (

    <header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-sm">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      
      <h1 className="text-2xl font-bold text-gray-800">OneHealth</h1>

      <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
        <a href="/" className="hover:text-blue-600">Home</a>
        <a href="/about" className="hover:text-blue-600">About</a>
        <a href="/services" className="hover:text-blue-600">Services</a>
        <a href="/contact" className="hover:text-blue-600">Contact</a>
      </nav>

      
      <NavLink to='/contact' ><button className="px-3 md:px-5 py-2 rounded-2xl bg-black text-white hover:bg-gray-800 shadow-md">Get Appointment</button></NavLink>
        
      
    </div>
  </header>

  );
};

export default Header;