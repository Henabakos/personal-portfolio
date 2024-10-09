import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { IoNewspaperOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Progress from "./Progress";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col h-full mb-8 ">
      <div className="w-full h-full flex  flex-col md:flex-row items-start md:mt-10 justify-center md:gap-4  lg:h-screen px-4 md:px-8 lg:pl-12 xl:pl-16 py-10">
        <div className="w-full lg:text-left">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-10">
            Hi, I'M A FREELANCER
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-500 mb-10">
            DEVELOPER
          </h1>
          <div className="mb-8">
            <p className="text-sm sm:text-base md:text-lg font-regular text-gray-700 dark:text-gray-200 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              similique vitae maiores cumque architecto ducimus, iure harum
              culpa tenetur sint, cupiditate delectus autem reiciendis dolorem
              nemo consequatur facere nulla sequi.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 w-full">
            <button className="flex items-center justify-center gap-2 bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full w-full sm:w-auto">
              <HiOutlineArrowRight className="text-lg" />
              <span className="text-sm sm:text-base md:text-lg">
                Let's Talk
              </span>
            </button>

            <Link to="/resume" className="w-full sm:w-auto">
              <button className="flex items-center justify-center gap-2 bg-white border-2 border-blue-500 text-blue-500 px-4 sm:px-6 py-2 sm:py-3 rounded-full w-full sm:w-auto">
                <IoNewspaperOutline className="text-lg" />
                <span className="text-sm sm:text-base md:text-lg">
                  View Resume
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center w-full md:w-1/2 mx-auto my-10 lg:my-0">
          <img
            src="https://img.freepik.com/free-vector/flat-style-woman-avatar_90220-2876.jpg"
            alt="profile"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 xl:w-72 xl:h-72 rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="mb-2">
        <Progress />
      </div>
    </div>
  );
};

export default HeroSection;
