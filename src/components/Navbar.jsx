import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for hamburger menu icon
import foxtleLogo from "../assets/images/foxtle-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[85%] max-w-5xl bg-white/10 backdrop-blur-md rounded-xl shadow-navbar px-6 py-5 z-50 lg:px-6 lg:py-5">
      {/* Mobile Navbar */}
      <div className="flex items-center justify-between lg:hidden">
        {/* Hamburger Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-0.5">
          <img
            src={foxtleLogo}
            alt="Foxtle Logo"
            className="h-7 w-7 object-contain" // smaller logo on mobile
          />
          <span className="text-white font-semibold text-[10px]">Foxtle</span>
        </div>

        {/* Right Button (smaller only on mobile) */}
        <Link
          to="/quote"
          className="bg-white/10 hover:bg-white/20 text-gray-200 px-2 py-1 rounded-md text-xs font-medium transition lg:px-3 lg:py-2 lg:text-sm lg:rounded-lg"
        >
          Quote
        </Link>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="flex flex-col items-center gap-3 mt-3 text-gray-200 font-normal text-sm lg:hidden">
          {[
            { name: "About Us", to: "/about" },
            { name: "Services", to: "/services" },
            { name: "Products", to: "/products" },
            { name: "Blogs", to: "/blogs" },
            { name: "Contact Us", to: "/contact" },
          ].map((item) => (
            <li key={item.to} className="relative group">
              <Link
                to={item.to}
                className="transition-colors duration-300 group-hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
          <Link
            to="/features"
            className="text-gray-200 hover:text-white transition relative group"
            onClick={() => setIsOpen(false)}
          >
            View Features
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </ul>
      )}

      {/* Desktop Navbar */}
      <div className="hidden lg:flex items-center justify-between">
        {/* Left Menu */}
        <ul className="flex items-center gap-6 text-gray-200 font-normal text-sm">
          {[
            { name: "About Us", to: "/about" },
            { name: "Services", to: "/services" },
            { name: "Products", to: "/products" },
            { name: "Blogs", to: "/blogs" },
            { name: "Contact Us", to: "/contact" },
          ].map((item) => (
            <li key={item.to} className="relative group">
              <Link
                to={item.to}
                className="transition-colors duration-300 group-hover:text-white"
              >
                {item.name}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-0.5">
          <img
            src={foxtleLogo}
            alt="Foxtle Logo"
            className="h-8 w-8 object-contain"
          />
          <span className="text-white font-semibold text-xs">Foxtle</span>
        </div>

        {/* Right Menu */}
        <div className="flex items-center gap-4 text-sm">
          <Link
            to="/features"
            className="text-gray-200 hover:text-white transition relative group"
          >
            View Features
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/quote"
            className="bg-white/10 hover:bg-white/20 text-gray-200 px-3 py-2 rounded-lg font-medium transition"
          >
            Get A Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
