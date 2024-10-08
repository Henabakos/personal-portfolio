import React from "react";
import { CiLight } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
const IconSidebar = () => {
  return (
    <section className="hidden lg:flex w-12 h-screen fixed ">
      <div className="w-full h-full flex flex-col space-y-4 mt-10 items-center">
        <FaHome size={24} className="text-blue-500" />
        <CiLight size={24} className="text-blue-500" />
      </div>
    </section>
  );
};

export default IconSidebar;
