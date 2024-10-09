import React from "react";

const Progress = () => {
  return (
    <div className="w-full h-[300px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mb-5">
      <div className="flex flex-col lg:flex-row items-center justify-center p-4">
        <h1 className="text-blue-500 text-4xl sm:text-5xl font-bold pl-4">
          2 + <span className="text-5xl sm:text-7xl font-light pr-3">|</span>
        </h1>
        <p className="text-center">Years of experience</p>
      </div>
      <div className="flex flex-col lg:flex-row  items-center justify-center p-4">
        <h1 className="text-blue-500 text-4xl sm:text-5xl font-bold">
          50 + <span className="text-5xl sm:text-7xl font-light pr-3">|</span>
        </h1>
        <p className="text-center">Completed Projects</p>
      </div>
      <div className="flex flex-col lg:flex-row  items-center justify-center p-4 sm:pb-10">
        <h1 className="text-blue-500 text-4xl sm:text-5xl font-bold">
          10 + <span className="text-5xl sm:text-7xl font-light pr-3">|</span>
        </h1>
        <p className="text-center">Happy Clients</p>
      </div>
    </div>
  );
};

export default Progress;
