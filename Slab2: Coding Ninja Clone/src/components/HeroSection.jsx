// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-cn-dark-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Unlock Your Coding Potential
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            India's most loved coding community. Learn, build, and conquer with our expert-led courses.
          </p>
          <Link
            to="/courses"
            className="bg-cn-orange text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;