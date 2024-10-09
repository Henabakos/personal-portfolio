import React from "react";
import { FaArrowRight, FaArrowUp } from "react-icons/fa";

const ProjectCard = ({ image, btn1, btn2, btn3, title }) => {
  return (
    <div className="">
      <div className="w-full h-full space-y-4">
        <img
          src={image}
          alt={title}
          className="w-full h-[300px] md:w-[700px] md:h-[400px]  object-cover"
        />
        <div className="flex items-center justify-start pl-4 gap-2">
          <button className="text-[9px] md:text-md text-gradient border border-gradient px-4 rounded-full">
            {btn1}
          </button>
          <button className="text-[9px] md:text-md text-gradient border border-gradient px-4 rounded-full">
            {btn2}
          </button>
          <button className="text-[9px] md:text-md text-gradient border border-gradient px-4 rounded-full">
            {btn3}
          </button>
        </div>
        <div className="flex items-center justify-between pl-4 gap-2">
          <h1 className="text-xl md:text-2xl">{title}</h1>
          <p className="text-gray-700 hover:text-blue-500 bg-gray-300 p-2 rounded-full">
            <FaArrowRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
