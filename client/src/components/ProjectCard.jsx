import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ image, btn1, btn2, btn3, title }) => {
  return (
    <div className="max-w-md w-full mx-auto bg-white dark:bg-[#3b3b3b] rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
      />

      <div className="flex flex-col justify-between flex-grow p-4">
        {/* Buttons */}
        <div className="flex items-center justify-center gap-2 py-2">
          <button className="text-sm bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-4 py-2 rounded-3xl border  hover:bg-gray-700 dark:hover:bg-gray-300 transition-all duration-300">
            {btn1}
          </button>
          <button className="text-sm bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-4 py-2 rounded-3xl border  hover:bg-gray-700 dark:hover:bg-gray-300 transition-all duration-300">
            {btn2}
          </button>
          <button className="text-sm bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-4 py-2 rounded-3xl border  hover:bg-gray-700 dark:hover:bg-gray-300 transition-all duration-300">
            {btn3}
          </button>
        </div>

        {/* Title and Arrow */}
        <div className="flex items-center justify-between mt-4">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h1>
          <p className="text-gray-700 dark:text-gray-200 hover:text-white bg-gray-200 dark:bg-gray-700 p-2 rounded-full transition-all duration-300 hover:bg-cyan-500 cursor-pointer">
            <Link to="/product-detail">
              <FaArrowRight />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
