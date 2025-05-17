import { useState } from "react";
import React from "react";
import logo from "/logo.png";
import "tailwindcss/tailwind.css";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-10" data-aos="fade-up">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 text-white bg-black bg-opacity-10 backdrop-blur-md">
        {/* Left - Logo */}
        <img src={logo} alt="logo" className="hidden lg:block w-36 ml-24" />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex  absolute right-10 transform -translate-x-1/2 space-x-10 text-2xl font-semibold ">
        <Link
        to="/"

            className="transition duration-500 ease-in-out 
           transform hover:-translate-y-1 hover:scale-110 hover:text-white rounded-lg py-4 
           "
          >
            Home
          </Link>
          <Link
          to="/services"
            className="transition duration-500 ease-in-out 
           transform hover:-translate-y-1 hover:scale-110 hover:text-white rounded-lg py-4 
           "
          >
            Services
          </Link>
          <Link
            to="/about"
            className="transition duration-500 ease-in-out 
           transform hover:-translate-y-1 hover:scale-110 hover:text-white rounded-lg py-4 
           "
          >
            About
          </Link>

          <a
            href="https://www.linkedin.com/company/102501800"
            target="_blank"
            rel="noopener noreferrer"
            // <-- Change this to your desired URL
            className="transition duration-500 ease-in-out 
  transform hover:-translate-y-1 hover:scale-110 hover:text-white rounded-lg py-4 
  "
          >
            Careers
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Thin Line */}
      <div className="h-px bg-gray-300 w-full opacity-20" />

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out transform ${
          mobileMenuOpen
            ? "max-h-60 opacity-100 scale-y-100"
            : "max-h-0 opacity-0 scale-y-95"
        } bg-black bg-opacity-10 backdrop-blur-sm text-gray-200 px-4 py-2 space-y-2 origin-top`}
      >
        <a
          
          className="block w-full text-left text-xl px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-black"
        >
          Services
        </a>
        <a
          href="#services"
          className="block w-full text-left text-xl px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-black"
        >
          Services
        </a>
        <a
          href="#footer"
          className="block w-full text-left text-xl px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-black"
        >
          About
        </a>
        <a
          href="https://www.linkedin.com/company/102501800"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-left text-xl px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-black"
        >
          Careers
        </a>
      </div>
    </header>
  );
};

export default Header;
