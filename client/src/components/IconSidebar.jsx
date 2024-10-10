import React from "react";
import { CiLight } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";
import { Link } from "react-router-dom";
const IconSidebar = () => {
  return (
    <section className="hidden lg:flex w-12 h-screen fixed ">
      <div className="w-full h-full flex flex-col space-y-4 mt-10 items-center">
        <Link to="/">
          <FaHome size={24} className="text-purple-500" />
        </Link>

        <DarkModeToggle />
      </div>
    </section>
  );
};

export default IconSidebar;
