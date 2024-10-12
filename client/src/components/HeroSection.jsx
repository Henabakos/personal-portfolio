import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Progress from "./Progress";

const HeroSection = () => {
  return (
    <div className="w-full h-full md:h-screen flex flex-col items-start">
      <div className="w-full h-full flex flex-col md:flex-row items-start md:mt-10 justify-center md:gap-4 lg:h-screen px-4 md:px-8 lg:pl-12 xl:pl-16 py-10">
        <div className="w-full lg:text-left">
          <h1 className="flex flex-col font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-10">
            Hi, I'M HENOK ASSEFA
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-500 mb-10">
            <span className="text-gradient pb-[3px] text-4xl lg:text-[44px] font-extrabold">
              <Typewriter
                words={["DEVELOPER", "DESIGNER", "FREELANCER"]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-regular text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            similique vitae maiores cumque architecto ducimus, iure harum culpa
            tenetur sint, cupiditate delectus autem reiciendis dolorem nemo
            consequatur facere nulla sequi.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 w-full">
            <button className="btn-gradient flex items-center justify-center gap-2  text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full w-full sm:w-auto hover:scale-105 transition-transform duration-300 shadow-sm">
              Let's Talk
            </button>
            <button className="flex items-center justify-center gap-2 bg-white border-2 border-gradient text-gradient px-4 sm:px-6 py-2 sm:py-3 rounded-full w-full sm:w-auto hover:scale-105 transition-transform duration-300 shadow-sm">
              View Resume
            </button>
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
      <Progress />
    </div>
  );
};

export default HeroSection;
