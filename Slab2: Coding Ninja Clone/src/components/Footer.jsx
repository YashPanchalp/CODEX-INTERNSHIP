// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cn-dark-blue text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Socials */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">CodingNinjas</h3>
            <p className="mb-4">#BeACodingNinja</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-white"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-white"><FaLinkedin size={24} /></a>
              <a href="#" className="hover:text-white"><FaYoutube size={24} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-white text-lg mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/courses" className="hover:text-white">Courses</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-bold text-white text-lg mb-3">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Events</a></li>
              <li><a href="#" className="hover:text-white">Testimonials</a></li>
              <li><a href="#" className="hover:text-white">Success Stories</a></li>
              <li><a href="#" className="hover:text-white">Help Center</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-white text-lg mb-3">Contact Us</h4>
            <ul className="space-y-2">
              <li><a href="mailto:support@codingninjas.com" className="hover:text-white">support@codingninjas.com</a></li>
              <li><p>+91 12345 67890</p></li>
              <li><p>New Delhi, India</p></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Coding Ninjas. All rights reserved. (Clone Project)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;