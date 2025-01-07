import React from "react";
import { FaStar } from "react-icons/fa";

const ProjectCard = ({ title, description, image, features, tags }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-5 w-full max-w-sm mx-auto">
      {/* Image */}
      <div className="relative w-full h-48 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Title */}
      <h2 className="mt-4 text-xl font-bold text-gray-800 dark:text-white">
        {title}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
        {description}
      </p>

      {/* Key Features */}
      <ul className="mt-4 space-y-2">
        {features && features.length > 0 ? (
          features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <FaStar className="text-cyan-500" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {feature}
              </span>
            </li>
          ))
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            No features listed.
          </p>
        )}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tags && tags.length > 0 ? (
          tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400">No tags.</p>
        )}
      </div>

      {/* Call to Action */}
      <button className="mt-5 w-full btn-gradient text-white py-2 px-4 rounded-lg hover:scale-95 transition duration-300">
        Learn More
      </button>
    </div>
  );
};

export default ProjectCard;
