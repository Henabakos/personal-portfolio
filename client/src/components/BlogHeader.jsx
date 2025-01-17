import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const BlogHeader = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between py-12  dark:bg-gray-900 max-sm:px-4 gap-8">
      <div className="flex-1 flex flex-col text-left">
        <h1 className="text-3xl md:text-4xl font-[400] text-gray-800 dark:text-gray-100 mb-6">
          <span className="text-cyan-500 font-light pr-3">|</span>
          Latest Blogs
        </h1>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Stay updated with my latest insights, tutorials, and thoughts on
          mobile app development, web design, and UI/UX trends. Explore fresh
          content designed to inspire, inform, and help you stay ahead in the
          digital world.
        </p>
      </div>
      <Link to="blog">
        <button className="flex items-center gap-3 bg-gradient-to-r from-cyan-700 to-cyan-400 text-white px-6 py-2 md:px-8 rounded-full shadow-md text-base md:text-lg font-semibold hover:from-cyan-400 hover:to-cyan-700 hover:scale-105 transition-transform duration-300">
          <HiOutlineArrowRight className="text-lg" />
          <span className="text-sm sm:text-base md:text-lg">
            See All Articles
          </span>
        </button>
      </Link>
    </div>
  );
};

export default BlogHeader;
