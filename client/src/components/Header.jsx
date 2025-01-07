import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div className="w-full max-sm:h-[40vh] lg:h-[50vh] border-b mb-20  mt-20 md:mt-28">
      <div className="w-full h-full flex flex-col md:items-center justify-center">
        <h1 className="text-2xl font-[500] md:text-3xl text-center">
          {data.header}
        </h1>
        <p className="w-[80%] text-sm md:text-lg font-regular text-gray-700 dark:text-gray-100 leading-relaxed py-4 text-center mx-auto  ">
          {data.description}
        </p>
        <Link to="/contact" className="flex items-center justify-center">
          <button className="flex items-center justify-center gap-2 btn-gradient px-4 py-2 rounded-full mb-9">
            {data.icon} <span>{data.button}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
