import React from "react";
import { CiLight } from "react-icons/ci";
import { FaHome } from "react-icons/fa";

const Navabar = () => {
  return (
    <nav className="block lg:hidden border-b shadow-md fixed top-0  px-8 w-full bg-gray-50 z-50 ">
      <div className="flex justify-between items-center h-12 ">
        <FaHome size={24} className="text-blue-500" />
        <CiLight size={24} className="text-blue-500" />
      </div>
    </nav>
  );
};

export default Navabar;
