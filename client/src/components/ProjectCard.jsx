import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ image, btn1, btn2, btn3, title }) => {
  return (
    <div className="w-sm mx-auto bg-white dark:bg-[#3b3b3b] rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-300 hover:scale-110"
      />

      <div className="flex flex-col justify-between flex-grow p-4">
        {/* Buttons */}
        <div className="flex items-center justify-center gap-2 py-2">
          <button className="text-sm bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full shadow-md transition-transform duration-300 hover:scale-105">
            {btn1}
          </button>
          <button className="text-sm bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full shadow-md transition-transform duration-300 hover:scale-105">
            {btn2}
          </button>
          <button className="text-sm bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full shadow-md transition-transform duration-300 hover:scale-105">
            {btn3}
          </button>
        </div>

        {/* Title and Arrow */}
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h1>
          <p className="text-gray-700 dark:text-gray-200 hover:text-white bg-gray-200 dark:bg-gray-700 p-2 rounded-full transition-all duration-300 hover:bg-blue-500  cursor-pointer">
            <FaArrowRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
