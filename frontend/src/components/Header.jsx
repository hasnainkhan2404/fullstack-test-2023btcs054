import React from 'react';
import {NavLink } from 'react-router-dom';

const Header = () => {
  return (

    <header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-sm">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      
      <h1 className="text-2xl font-bold text-gray-800">OneHealth</h1>

      {/* Nav Links */}
      <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
        <a href="/" className="hover:text-blue-600">Home</a>
        <a href="/about" className="hover:text-blue-600">About</a>
        <a href="/services" className="hover:text-blue-600">Services</a>
        <a href="/contact" className="hover:text-blue-600">Contact</a>
      </nav>

      
      <NavLink to='/contact' ><button className="px-3 .py-1 md:px-5 py-2 rounded-2xl bg-black text-white hover:bg-gray-800 shadow-md">Get Appointment</button></NavLink>
        
      
    </div>
  </header>



    // <header className="bg-slate-800 text-white shadow-lg fixed w-full z-50 bg-white/30 backdrop-blur-md backdrop-saturate-150 border-b border-white/20">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex justify-between items-center py-4">
    //       <div className="flex-shrink-0">

    //         <Link to="/" className="text-2xl font-bold text-black hover:text-blue-800 transition-colors">
    //           MyWebsite
    //         </Link>


    //       </div>
    //       <nav className="hidden md:flex space-x-8">
    //         <Link
    //           to="/"
    //           className="text-black hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
    //         >
    //           Home
    //         </Link>

    //         <Link
    //           to="/about"
    //           className="text-black hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
    //         >
    //           About
    //         </Link>

    //         <Link
    //           to="/contact"
    //           className="text-black hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
    //         >
    //           Contact
    //         </Link>

    //       </nav>






    //       <div className="md:hidden">
    //         <button className="text-white hover:text-blue-300 focus:outline-none focus:text-blue-300">

    //           <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    //           </svg>

    //         </button>
    //       </div>



    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;