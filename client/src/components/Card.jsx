import React from "react";
import { FaAccusoft } from "react-icons/fa";

const Card = ({ icon, icon1, name, description }) => {
  return (
    <div className="w-full border shadow-sm p-4 md:p-6 lg:p-8  mx-auto max-w-xs lg:max-w-sm">
      <div>
        <p className="flex gap-3 mb-4">
          <span>{icon}</span>
          <span>{icon1}</span>
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-500 font-semibold mb-2 ">
          {name}
        </p>
        <p className="text-xs sm:text-sm md:text-sm  text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
