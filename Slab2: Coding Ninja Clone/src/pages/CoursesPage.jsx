// src/pages/CoursesPage.jsx
import React from 'react';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/mockCourses'; // Import all courses

const CoursesPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center text-cn-dark-blue mb-10">
          Our Courses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;