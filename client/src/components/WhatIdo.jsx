import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

const WhatIdo = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 py-10 md:space-x-8 space-y-8 md:space-y-0">
      <div className="flex flex-col justify-center w-full lg:w-1/2  md:text-left">
        <h1 className="text-3xl sm:text-3xl md:text-4xl  font-semibold text-slate-700 py-5">
          <span className="text-blue-500 font-light pr-3">|</span>What I do
        </h1>
        <p className="text-base md:text-lg font-normal text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ex
          dolorem deserunt earum vero aliquam nam iste corporis illo pariatur
          exercitationem, minima est quisquam quibusdam tempore. Eveniet quaerat
          obcaecati minus?
        </p>
      </div>

      <div className="flex justify-center lg:mt-16">
        <button className="flex w-72 h-12 bg-blue-500 text-white rounded-full items-center justify-center space-x-2">
          <HiOutlineArrowRight className="text-lg" />
          <span className="text-sm sm:text-base md:text-lg">
            Services & Pricing
          </span>
        </button>
      </div>
    </div>
  );
};

export default WhatIdo;
