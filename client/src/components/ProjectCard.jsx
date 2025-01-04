import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaReact, FaNode, FaBootstrap } from "react-icons/fa";

const ProjectCard = ({ image, btn1, btn2, btn3, title }) => {
  return (
    <div className="py-10 px-5">
      <div className="group">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl dark:text-gray-50 shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2">
          <div className="relative">
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-semibold">{title}</h3>
            </div>
          </div>
          <div className="p-5 text-center">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-50 mb-3">
              {title}
            </h3>
            <div className="flex justify-center gap-3 mt-3">
              <FaReact size={34} className="text-cyan-500" />
              <FaNode size={34} className="text-green-600 " />
              <FaBootstrap size={34} className="text-purple-600" />
              <FaBootstrap size={34} className="text-purple-600" />
              <FaBootstrap size={34} className="text-purple-600" />
            </div>
            {/* Call-to-Action Button */}
            <div className="mt-5">
              <Link
                to="/product-detail"
                className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-800 dark:text-blue-400 dark:hover:text-cyan-300 font-medium transition-colors"
              >
                View Project <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
