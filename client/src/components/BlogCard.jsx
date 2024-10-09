import React from "react";

const BlogCard = ({ data }) => {
  return (
    <div className="">
      <div className="w-full h-full space-y-4">
        <img
          src={data.image}
          alt="avator"
          className="w-full h-[300px] md:w-[800px] md:h-[220px]  object-cover rounded-2xl"
        />
        <div className="flex items-center justify-start pl-4 gap-2">
          <p className="text-gray-500 text-sm">
            March 12, 2024<span className="text-blue-500 px-2">/</span>Articles
          </p>
        </div>
        <div className="flex items-center justify-between pl-4 gap-2">
          <h1 className="text-xl md:text-2xl  hover:text-blue-500">
            {data.title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
