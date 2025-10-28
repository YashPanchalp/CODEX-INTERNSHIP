// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Using react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/courses", text: "Courses" },
    { to: "/about", text: "About Us" },
    { to: "/blog", text: "Blog" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-cn-orange">
              {/* You can replace this text with an <img> tag for your logo */}
              CodingNinjas
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-700 hover:text-cn-orange font-medium transition-colors duration-200"
              >
                {link.text}
              </Link>
            ))}
            <Link
              to="/login"
              className="bg-cn-orange text-white px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-cn-orange focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} 
                   transition-all duration-300 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)} // Close menu on click
              className="text-gray-700 hover:bg-gray-100 hover:text-cn-orange block px-3 py-2 rounded-md text-base font-medium"
            >
              {link.text}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="bg-cn-orange text-white text-center block w-full px-3 py-2 rounded-md text-base font-medium hover:bg-opacity-90"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;