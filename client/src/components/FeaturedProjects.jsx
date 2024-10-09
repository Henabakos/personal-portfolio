import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

const FeaturedProjects = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between border-b my-10  ">
      <div className="flex flex-col justify-center p-4 my-4 w-full lg:w-1/2">
        <h1 className="text-3xl sm:text-3xl md:text-4xl  font-[400] text-slate-700 dark:text-gray-100 py-5">
          <span className="text-blue-500 font-light pr-3">|</span>
          Featured Projects
        </h1>
        <p className="text-base md:text-lg font-normal text-gray-700 dark:text-gray-200 leading-relaxed pl-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ex
          dolorem deserunt earum vero aliquam nam iste corporis illo pariatur
          exercitationem, minima est quisquam quibusdam tempore. Eveniet quaerat
          obcaecati minus?
        </p>
      </div>
      <button className="flex w-[80%] sm:w-18 md:w-72 h-10 md:h-12  btn-gradient rounded-full items-center justify-center space-x-2 lg:mt-16 lg:ml-16 mx-8 mb-10">
        <HiOutlineArrowRight className="text-lg" />
        <span className="text-sm sm:text-base md:text-lg">
          View All Projects
        </span>
      </button>
    </div>
  );
};

export default FeaturedProjects;
