import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const FeaturedProjects = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between py-12  dark:bg-gray-900 max-sm:px-10 px-5 gap-10">
      <div className="flex-1 flex flex-col text-left">
        <h1 className="text-3xl md:text-4xl font-[400] text-gray-800 dark:text-gray-100 mb-6">
          <span className="text-gradient font-light pr-3">|</span>
          Featured Projects
        </h1>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Take a look at some of the standout projects I’ve had the pleasure to
          work on, showcasing my skills in mobile app development, web design,
          and custom business solutions. Each project reflects my commitment to
          quality, innovation, and delivering results that meet client needs.
        </p>
      </div>
      <Link to="/portfolio">
        <button className="flex items-center gap-3 bg-gradient-to-r from-cyan-700 to-cyan-400 text-white px-6 py-2 md:px-8 rounded-full shadow-md text-base md:text-lg font-semibold hover:from-cyan-400 hover:to-cyan-700 hover:scale-105 transition-transform duration-300">
          <HiOutlineArrowRight className="text-lg md:text-xl" />
          View All Projects
        </button>
      </Link>
    </div>
  );
};

export default FeaturedProjects;
