import { useState } from "react";
import React from "react";
import "tailwindcss/tailwind.css";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-10">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 text-white bg-black bg-opacity-10 backdrop-blur-md">
        {/* Left - Logo */}
        <div className="text-3xl font-bold">YK Tech Solutions</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex absolute right-10 transform -translate-x-1/2 space-x-10 text-lg font-semibold ">
          <button className="hover:text-gray-300">Services</button>
          <button className="hover:text-gray-300">About</button>
          <button className="hover:text-gray-300">Careers</button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
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
        } bg-black bg-opacity-10 backdrop-blur-sm text-white px-4 py-2 space-y-2 origin-top`}
      >
        <button className="block w-full text-left">Services</button>
        <button className="block w-full text-left">About</button>
        <button className="block w-full text-left">Careers</button>
      </div>
    </header>
  );
};

export default Header;
