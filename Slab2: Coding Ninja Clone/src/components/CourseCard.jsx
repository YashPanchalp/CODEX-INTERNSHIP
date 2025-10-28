// src/components/CourseCard.jsx
import React from 'react';

const CourseCard = ({ course }) => {
  const { title, description, imageUrl } = course;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-6">
        <h3 className="text-xl font-bold text-cn-dark-blue mb-2">{title}</h3>
        <p className="text-gray-600 text-base mb-4">{description}</p>
        <a 
          href="#" 
          className="font-medium text-cn-orange hover:text-opacity-80 transition-colors"
        >
          View Details &rarr;
        </a>
      </div>
    </div>
  );
};

export default CourseCard;