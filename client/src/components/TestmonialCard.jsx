import React from "react";

const TestimonialCard = ({ data }) => {
  return (
    <div className="w-full border border-cyan-500 rounded-lg shadow-sm p-4 md:p-6 lg:p-8 mx-auto max-w-xs lg:max-w-sm">
      <div>
        <p className="flex gap-3 mb-4">
          <span className="text-yellow-400">{data.icon}</span>
          <span className="text-yellow-400">{data.icon}</span>
          <span className="text-yellow-400">{data.icon}</span>
          <span className="text-yellow-400">{data.icon}</span>
          <span className="text-yellow-400">{data.icon}</span>
        </p>
        <p className="text-xs sm:text-sm md:text-sm text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
          {data.description}
        </p>
        <p className="flex gap-3 items-center">
          <span>
            <img
              src={data.img}
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
          </span>
          <span className="flex flex-col">
            <span className="text-center text-sm font-medium">{data.name}</span>
            <span className="text-center text-xs text-gray-500 dark:text-gray-400">
              {data.role}
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
