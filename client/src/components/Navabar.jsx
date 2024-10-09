import React from "react";
import { CiLight } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";
import { Link } from "react-router-dom";

const Navabar = () => {
  return (
    <nav className="block lg:hidden border-b shadow-md fixed top-0  px-8 w-full bg-gray-50 z-50 ">
      <div className="flex justify-between items-center h-12 ">
        <Link to="/">
          <FaHome size={24} className="text-blue-500" />
        </Link>

        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navabar;
