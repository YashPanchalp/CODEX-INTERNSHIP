// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/mockCourses'; // Import mock data

const HomePage = () => {
  // For the homepage, maybe just show the first 3 featured courses
  const featuredCourses = courses.slice(0, 3);

  return (
    <div>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Featured Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-cn-dark-blue mb-8">
            Featured Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Testimonials Section (Placeholder) */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-cn-dark-blue mb-8">
            What Our Students Say
          </h2>
          <div className="text-center text-gray-600">
            {/* You can build a TestimonialCard component here */}
            <p>Testimonial carousel or grid will go here.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;